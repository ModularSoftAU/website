import os
import shutil
import sys
import time
import stat
import yaml


class Parameter:
    def __init__(self, name, p_type, info, optional):
        self.name = name
        self.p_type = p_type
        self.info = info
        self.optional = optional
    
    def __str__(self):
        extra = " **optional**" if self.optional else ""
        return "`{}`{} *{}*  \n{}\n".format(
            self.name, extra, self.p_type, self.info)

class Endpoint:
    def __init__(self, section, section_slug, route, method, privileged,
                 short, description, parameters, footer, filepath):
        self.section = section
        self.section_slug = section_slug
        self.route = route
        self.method = method
        self.privileged = privileged
        self.short = short
        self.description = description
        self.parameters = parameters
        self.footer = footer
        self.filepath = filepath

class PageTemplate:
    def __init__(self, content):
        self.content = content
    
    def replace(self, variable, value):
        self.content = self.content.replace("(" + variable + ")", value)
    
    def remove_line_with_if(self, variable, condition):
        match_start = "({})".format(variable)
        match_end = "(/{})".format(variable)
        matched_start_index = []
        matched_end_index = []
        for i, line in enumerate(self.content.split("\n")):
            if match_start in line:
                matched_start_index.append(i)
            
            if match_end in line:
                matched_end_index.append(i)
        
        if len(matched_start_index) != len(matched_end_index):
            print("Not same length")
            return
        
        content_lines = self.content.split("\n")
        if condition:
            for start, end in zip(matched_start_index, matched_end_index):
                del content_lines[start:end+1]
        else:
            line_indices_to_remove = matched_start_index + matched_end_index
            # From https://stackoverflow.com/a/11303234
            for index in sorted(line_indices_to_remove, reverse=True):
                del content_lines[index]
        self.content = "\n".join(content_lines)

    def __str__(self):
        return self.content

class Config:
    def __init__(self, config):
        self.api_docs               = config["api_docs"]
        self.api_template_file      = config["api_template_file"]
        self.api_template_directory = config["api_template_directory"]
        self.template_directory     = config["template_directory"]
        self.build_directory        = config["build_directory"]
        self.api_build_directory    = config["api_build_subdirectory"]
        self.api_section_label      = config["api_section_label"]


def parse_api_docs(api_docs, api_template_directory, must_have_footer=True):
    """Parse's the yaml file containing all the documentation and return a list
    of Endpoint objects containing the relevant data from the yaml.
    
    Endpoints may also comes with a footer which is defined by a file of the
    same route defined in docs.yaml. If an endpoint is missing a footer you may
    omit the endpoint by setting must_have_footer to True.
    """
    with open(api_docs, encoding="utf8") as f:
        sections = yaml.safe_load(f.read())
    
    endpoints = []
    for section, pages in sections.items():
        for route, page_data in pages.items():
            method = page_data["method"]
            privileged = page_data["privileged"]
            short = page_data["short"]
            description = page_data["description"]
            section_slug = route.split("/")[0]
            filename = "-".join(route.split("/")[1:]) + ".mdx"
            filepath = "{}/{}".format(section_slug, filename)
            # Only some pages have a parameters section. If they don't, we'll
            # just assign an empty list so nothing can be rendered.
            parameters = []
            if "parameters" in page_data:
                for name, Parameter_data in page_data["parameters"].items():
                    p_type = Parameter_data["type"]
                    info = Parameter_data["info"]
                    optional = Parameter_data["optional"]
                    parameters.append(Parameter(name, p_type, info, optional))
            
            # Load the footer.
            footer_file = "{}/{}.mdx".format(api_template_directory, route)
            try:
                with open(footer_file, encoding="utf8") as f:
                    footer = f.read()
            except FileNotFoundError:
                footer = None
                # If the footer doesn't exist, then ignore this page if
                # must_have_footer is True.
                if must_have_footer:
                    # TODO: Include message saying that page does not have a
                    # matching footer.
                    continue
                
            endpoints.append(Endpoint(section, section_slug, route, method, privileged, short,
                                      description, parameters, footer, filepath))
    return endpoints

def are_valid_endpoints(endpoints):
    """Performs type checking on the endpoints to ensure they have been given
    reasonable values.
    """
    valid_methods = ["GET", "POST"]
    valid_types = ["string", "boolean", "integer"]

    for endpoint in endpoints:
        endpoint: Endpoint
        if endpoint.method not in valid_methods:
            print("'{}' is not one of methods {}".format(
                endpoint.method, valid_methods))
            return False

        for parameter in endpoint.parameters:
            if parameter.p_type not in valid_types:
                print("'{}' is not one of types {}".format(
                    parameter.p_type, valid_types))
                return False
    return True

def compile_api_endpoints(api_docs, api_template_directory):
    try:
        endpoints = parse_api_docs(api_docs, api_template_directory)
    except FileNotFoundError:
        print("File '{}' does not exist".format(api_docs))
        return []
    except KeyError as e:
        print("Parsing of '{}' failed. Missing key {}.".format(api_docs, e))
        return []
    
    if not are_valid_endpoints(endpoints):
        return []
    
    return endpoints

def compile_api_pages(endpoints, api_template_file, build_directory):
    """Creates the documentation pages and the folder structure using the
    template markdown file as a guide.
    """
    try:
        with open(api_template_file, encoding="utf8") as f:
            template_content = f.read()
    except FileNotFoundError:
        print("File '{}' does not exist".format(api_template_file))
        return []
    
    pages = []
    for i, endpoint in enumerate(endpoints):
        template = PageTemplate(template_content)
        # If the endpoint has no footer, don't print anything extra
        if endpoint.footer is not None:
            template.replace("FOOTER", endpoint.footer)
        else:
            template.replace("FOOTER", "")
        template.replace("SIDEBAR_POSITION", str(i))
        template.replace("METHOD", endpoint.method)
        template.replace("ROUTE", endpoint.route)
        # If the endpoint is not privileged, don't print anything extra
        template.remove_line_with_if("PRIVILEGED", not endpoint.privileged)
        # If the endpoint has no input parameters, don't print anything extra
        if len(endpoint.parameters) > 0:
            parameters_text = "\n".join([str(p) for p in endpoint.parameters])
            template.replace("PARAMETERS", "## Parameters\n\n{}".format(parameters_text))
        else:
            template.replace("PARAMETERS", "")
        template.replace("DESCRIPTION", endpoint.description)
        template.replace("SHORT", endpoint.short)
        if endpoint.method == "POST":
            template.replace("METHOD_COLOUR", "#FF6E26")
        else:
            template.replace("METHOD_COLOUR", "#46AF00")
        template.replace("BUILD_DIRECTORY", build_directory)
        template.replace("SLUG", "/".join(endpoint.route.split("/")[1:]))
        # If you want to add any extra values to the template then here is the
        # place to add them. All you need to do is add (CUSTOM_FIELD) to the
        # api_template_file

        # template.replace("CUSTOM_FIELD", "My custom string")

        pages.append((template, endpoint.filepath))
    return pages

def reset_build_directory(template_directory, build_directory):
    """Deletes the output folder, then copies the contents of the template
    directory so that there is a blank slate to work with.
    """
    if os.path.isdir(build_directory):
        shutil.rmtree(build_directory)
    shutil.copytree(template_directory, build_directory)

def safe_open_w(path):
    ''' Opens 'path' for writing, creating any parent directories as needed.
    From: https://stackoverflow.com/a/23794010
    '''
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return open(path, 'w', encoding="utf-8")

def build_pages(pages, build_directory, api_build_directory):
    for page in pages:
        template, filepath = page
        page_filename = "{}/{}/{}".format(build_directory, api_build_directory, filepath)
        with safe_open_w(page_filename) as f:
            # print("Writing to {}".format(page_filename))
            f.write(str(template))

def build_sidebar(endpoints, api_section_label, build_directory,
                  api_build_directory):
    """Create category files expected by docusaurus so that it can auto-generate
    the sidebar for us.
    """
    api_sections = {(e.section, e.section_slug) for e in endpoints}
    sorted_sections = sorted(list(api_sections))
    for i, (name, slug) in enumerate(sorted_sections):
        category_file = "{}/{}/{}/_category_.json".format(
            build_directory,
            api_build_directory,
            slug
        )
        with open(category_file, "w") as f:
            f.write('{{ "label": "{}", "position": {} }}\n'.format(name, i))
    
    api_category_filename = "{}/{}/_category_.json".format(
        build_directory,
        api_build_directory
    )
    with open(api_category_filename, "w") as f:
        f.write('{{ "label": "{}" }}\n'.format(api_section_label))

def rebuild_api(config, reset=True):
    endpoints = compile_api_endpoints(config.api_docs,
                                      config.api_template_directory)
    if len(endpoints) == 0:
        return
    
    pages = compile_api_pages(endpoints, config.api_template_file,
                              config.build_directory)
    if len(pages) == 0:
        return

    if reset:
        reset_build_directory(config.template_directory, config.build_directory)
    build_pages(pages, config.build_directory, config.api_build_directory)
    build_sidebar(endpoints, config.api_section_label, config.build_directory,
                  config.api_build_directory)

    print("Successfully generated {} pages".format(len(endpoints)))

def live_directory_stats(directory):
    """This function uses os.stat() to generate a dictionary of files and their
    modification times as the value. This can be passed into
    live_compare_difference if two calls of this function were performed at
    different times.
    """
    file_list = []
    for path, _, files in os.walk(directory):
        file_list += [path + "/" + file for file in files]
    
    file_stats = {}
    for file in file_list:
        stats = os.stat(file)
        modification_time = stats[stat.ST_MTIME]
        # Remove the directory prefix when creating the key
        file_stats[file[len(directory) + 1:]] = modification_time
    return file_stats

def live_compare_difference(old, new):
    """Given two dictionaries of files, this function will compare between the
    two whether files were added/removed/modified. The return value is a tuple
    of three lists.
    """
    removed_files = []
    modified_files = []
    new_files = []

    for file in old.keys():
        if file not in new:
            removed_files.append(file)
            continue
        old_modification_time = old[file]
        new_modification_time = new[file]
        if old_modification_time != new_modification_time:
            modified_files.append(file)
    for file in new.keys():
        if file not in old:
            new_files.append(file)
    return removed_files, modified_files, new_files

def live_compile(config):
    """Whenever a change (new file, modified file, deleted file) occurs in the
    template directory or the api directory, the build directory is immediately
    updated to reflect this change as gracefully as possible. This means that
    you can edit in the template directories while 'npm start' is running in
    another shell instance. This will wait at least 1 second before polling the
    directory again.
    """
    print("Live compiling {} and {}. CTRL+C to stop".format(
        config.template_directory, config.api_template_directory))
    # Retrieving the statistics
    old_pages = live_directory_stats(config.template_directory)
    old_api = live_directory_stats(config.api_template_directory)
    while True:
        time.sleep(1)
        # Checks to see if anything has changed
        new_pages = live_directory_stats(config.template_directory)
        removed_pages, modified_pages, added_pages = \
            live_compare_difference(old_pages, new_pages)
        
        # If pages were removed, delete them from the build directory
        for file in removed_pages:
            print("Removing '{}'".format(file))
            os.remove(config.build_directory + "/" + file)
        
        # If pages were added or modified, then write the new file to the build
        # directory, overwriting anything there previously.
        for file in modified_pages + added_pages:
            print("Updating '{}'".format(file))
            with open(config.template_directory + "/" + file) as f:
                to_write = f.read()
            with open(config.build_directory + "/" + file, "w") as w:
                w.write(to_write)
        
        # Set the new statistics to be the old for the next iteration
        old_pages = new_pages

        # Perform the same as above but for the API documentation. This is
        # slightly more complicated as we need to rebuild from the API template
        # plus include the footer. At the moment this just rebuilds the entire
        # API which is mostly overkill. In the event that a file is removed,
        # then the entire build directory is reset too.
        new_api = live_directory_stats(config.api_template_directory)
        removed_pages, modified_pages, added_pages = \
            live_compare_difference(old_api, new_api)
        if len(modified_pages + removed_pages + added_pages) > 0:
            print("Rebuilding API")
            rebuild_api(config, reset=len(removed_pages) > 0)
        # Set the new statistics to be the old for the next iteration
        old_api = new_api

def main():
    if len(sys.argv) == 1:
        print("Usage: python gen.py [--build] [--clean] [--live] [--help]")
    
    if "--help" in sys.argv:
        print("Compiles the documentation in the Docusaurus format.")
        print(" --help  \t Displays this information and exits.")
        print(" --build \t Compiles the documentation using the information")
        print("         \t in config.yaml.")
        print(" --clean \t Deletes the build directory and exits.")
        print(" --live  \t Runs with live compile. This implicitly begins a")
        print("         \t build, but then whenever a change occurs in the")
        print("         \t template directory or the api template directory,")
        print("         \t the build directory is updated accordingly.")
        print("         \t This allows you to have 'npm start' going in")
        print("         \t another shell instance. This sometimes doesn't")
        print("         \t work when an API page is removed. Running")
        print("         \t 'npm start' again will fix this.")
        return

    try:
        with open("config.yaml") as f:
            config = Config(yaml.safe_load(f.read()))
    except FileNotFoundError:
        print("File 'config.yaml' does not exist")
        return
    
    if "--clean" in sys.argv:
        try:
            shutil.rmtree(config.build_directory)
        except FileNotFoundError:
            pass
        print("Cleaned '{}'".format(config.build_directory))
        return
    
    if "--build" in sys.argv:
        rebuild_api(config)

    if "--live" in sys.argv:
        if "--build" not in sys.argv:
            rebuild_api(config)
        try:
            live_compile(config)
        except KeyboardInterrupt:
            pass


if __name__ == "__main__":
    main()
