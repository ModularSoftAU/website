import json
import os
import shutil


class Property:
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
    def __init__(self, section, route, method, privileged,
                 short, description, properties, footer):
        self.section = section
        self.route = route
        self.method = method
        self.privileged = privileged
        self.short = short
        self.description = description
        self.properties = properties
        self.footer = footer

class PageTemplate:
    def __init__(self, content):
        self.content = content
    
    def replace(self, variable, value):
        self.content = self.content.replace("(" + variable + ")", value)
    
    def remove_line_with_if(self, variable, condition):
        line_match = "(?{})".format(variable)
        keep_lines = []
        for line in self.content.split("\n"):
            if line_match in line:
                line = line.replace(line_match, "")
                if condition:
                    keep_lines.append(line)
            else:
                keep_lines.append(line)
        self.content = "\n".join(keep_lines)

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
            # Only some pages have a properties section. If they don't, we'll
            # just assign an empty list so nothing can be rendered.
            properties = []
            if "properties" in page_data:
                for name, property_data in page_data["properties"].items():
                    p_type = property_data["type"]
                    info = property_data["info"]
                    optional = property_data["optional"]
                    properties.append(Property(name, p_type, info, optional))
            
            # Load the footer.
            footer_file = "{}/{}.md".format(api_template_directory, route)
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
                
            endpoints.append(Endpoint(section, route, method, privileged, short,
                                      description, properties, footer))
    return endpoints

def are_valid_endpoints(endpoints):
    valid_methods = ["GET", "POST"]
    valid_types = ["string", "boolean", "integer"]

    for endpoint in endpoints:
        endpoint: Endpoint
        if endpoint.method not in valid_methods:
            print("'{}' is not one of methods {}".format(
                endpoint.method, valid_methods))
            return False

        for parameter in endpoint.properties:
            if parameter.p_type not in valid_types:
                print("'{}' is not one of types {}".format(
                    parameter.p_type, valid_types))
                return False
    return True

def compile_api_endpoints(api_json, template_directory, api_template_file,
                          api_template_directory):
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

def compile_api_pages(endpoints, api_template_file):
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
        template.replace("METHOD", endpoint.method)
        template.replace("ROUTE", endpoint.route)
        
        # If the endpoint is not privileged, don't print anything extra
        template.remove_line_with_if("PRIVILEGED", not endpoint.privileged)
        
        # If the endpoint has no input properties, don't print anything extra
        if len(endpoint.properties) > 0:
            properties_text = "\n".join([str(p) for p in endpoint.properties])
            template.replace("PROPERTIES", "## Properties\n\n{}".format(properties_text))
        else:
            template.replace("PROPERTIES", "")

        template.replace("DESCRIPTION", endpoint.description)

        # If the endpoint has no footer, don't print anything extra
        if endpoint.footer is not None:
            template.replace("FOOTER", endpoint.footer)
        else:
            template.replace("FOOTER", "")
        
        pages.append((template, endpoint.route))
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
        template, route = page
        page_filename = "{}/{}/{}.md".format(build_directory, api_build_directory, route)
        with safe_open_w(page_filename) as f:
            f.write(str(template))

def build_sidebar(endpoints, template_directory, api_build_directory,
                  build_directory):
    """Create the sidebar file in the format expected by docsify such that we
    can easily navigate between all the pages in the documentation.
    """
    try:
        with open(template_directory + "/_sidebar.md") as f:
            sidebar_template = PageTemplate(f.read())
    except FileNotFoundError:
        print("File '/sidebar.md' does not exist")
        return
    
    endpoint_sections = {}
    api_section_list = []
    for endpoint in endpoints:
        endpoint: Endpoint
        if endpoint.section not in endpoint_sections:
            endpoint_sections[endpoint.section] = []
        endpoint_sections[endpoint.section].append(endpoint)
    
    for section, endpoints in endpoint_sections.items():
        api_section_list.append("\n  - {}\n".format(section))
        for endpoint in endpoints:
            api_section_list.append("    - [{}]({}/{})".format(
                endpoint.short,
                api_build_directory,
                endpoint.route
            ))
    api_section = "\n".join(api_section_list)

    sidebar_template.replace("API_ENDPOINTS", api_section)
    with safe_open_w(build_directory + "/_sidebar.md") as f:
        f.write(str(sidebar_template))

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

    endpoints = compile_api_endpoints(api_json, template_directory,
                                      api_template_file, api_template_directory)
    if len(endpoints) == 0:
        return
    
    pages = compile_api_pages(endpoints, api_template_file)
    if len(pages) == 0:
        return

    reset_build_directory(template_directory, build_directory)
    build_pages(pages, build_directory, api_build_directory)
    build_sidebar(endpoints, template_directory,
                  api_build_directory, build_directory)

    print("Successfully generated {} pages".format(len(endpoints)))


if __name__ == "__main__":
    main()
