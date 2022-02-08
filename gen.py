import json
import os
import shutil
import sys


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

    
def parse_api_json(api_json, api_template_directory, must_have_footer=True):
    """Parse's the json file containing all the documentation and return a list
    of Endpoint objects containing the relevant data from the json.
    
    Endpoints may also comes with a footer which is defined by a file of the
    same route defined in docs.json. If an endpoint is missing a footer you may
    omit the endpoint by setting must_have_footer to True.
    """
    with open(api_json) as f:
        sections = json.loads(f.read())
    
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
                with open(footer_file) as f:
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

def compile_api_endpoints(api_json, api_template_directory):
    try:
        endpoints = parse_api_json(api_json, api_template_directory)
    except FileNotFoundError:
        print("File '{}' does not exist".format(api_json))
        return []
    except KeyError as e:
        print("Parsing of '{}' failed. Missing key {}.".format(api_json, e))
        return []
    
    if not are_valid_endpoints(endpoints):
        return []
    
    return endpoints

def compile_api_pages(endpoints, api_template_file, build_directory):
    """Creates the documentation pages and the folder structure using the
    template markdown file as a guide.
    """
    try:
        with open(api_template_file) as f:
            template_content = f.read()
    except FileNotFoundError:
        print("File '{}' does not exist".format(api_template_file))
        return []
    
    pages = []
    for endpoint in endpoints:
        template = PageTemplate(template_content)

        if endpoint.footer is not None:
            template.replace("FOOTER", endpoint.footer)
        else:
            template.replace("FOOTER", "")
        
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

        # If the endpoint has no footer, don't print anything extra
        
        template.replace("BUILD_DIRECTORY", build_directory)

        template.replace("SLUG", "/".join(endpoint.route.split("/")[1:]))
        
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
    return open(path, 'w')

def build_pages(pages, build_directory, api_build_directory):
    for page in pages:
        template, filepath = page
        page_filename = "{}/{}/{}".format(build_directory, api_build_directory, filepath)
        with safe_open_w(page_filename) as f:
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

def main():
    try:
        with open("config.json") as f:
            config = json.loads(f.read())
    except FileNotFoundError:
        print("File 'config.json' does not exist")
        return
    
    api_json               = config["api_json"]
    api_template_file      = config["api_template_file"]
    api_template_directory = config["api_template_directory"]
    template_directory     = config["template_directory"]
    build_directory        = config["build_directory"]
    api_build_directory    = config["api_build_directory"]
    api_section_label      = config["api_section_label"]

    if "--clean" in sys.argv:
        try:
            shutil.rmtree(build_directory)
        except FileNotFoundError:
            pass
        print("Cleaned '{}'".format(build_directory))
        return

    endpoints = compile_api_endpoints(api_json, api_template_directory)
    if len(endpoints) == 0:
        return
    
    pages = compile_api_pages(endpoints, api_template_file, build_directory)
    if len(pages) == 0:
        return

    reset_build_directory(template_directory, build_directory)
    build_pages(pages, build_directory, api_build_directory)
    build_sidebar(endpoints, api_section_label, build_directory,
                  api_build_directory)

    print("Successfully generated {} pages".format(len(endpoints)))


if __name__ == "__main__":
    main()
