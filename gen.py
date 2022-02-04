import json
import os
import shutil


PRIVILEGED = '!> Privileged endpoint ([?](privileged.md))'


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
    
    def as_file(self):
        return self.route + ".md"
    
    def as_section(self):
        return "  - [{}]({})".format(self.short, self.as_file())

    
def safe_open_w(path):
    ''' Opens 'path' for writing, creating any parent directories as needed.
    From: https://stackoverflow.com/a/23794010
    '''
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return open(path, 'w')


def parse_docs_json(docs_json, footers_directory, must_have_footer=False):
    """Parse's the json file containing all the documentation and return a list
    of Endpoint objects containing the relevant data from the json.
    
    Endpoints may also require a footer, in which case the footers_directory
    points to a directory with an identical file structure expected for the
    output. If a page does not have a matching footer (i.e has no examples or
    responses) then you can exclude that page from outputing by setting
    must_have_footer to True.
    """
    with open(docs_json) as f:
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
            try:
                for name, property_data in page_data["properties"].items():
                    p_type = property_data["type"]
                    info = property_data["info"]
                    optional = property_data["optional"]
                    properties.append(Property(name, p_type, info, optional))
            except KeyError:
                pass
            
            # Load the footer.
            footer_file = footers_directory + "/" + route + ".md"
            footer = None
            try:
                with open(footer_file) as f:
                    footer = f.read()
            except FileNotFoundError:
                # If the footer doesn't exist, then ignore this page if
                # must_have_footer is True.
                if must_have_footer:
                    continue
                
            endpoints.append(Endpoint(section, route, method, privileged, short,
                                      description, properties, footer))
    return endpoints


def reset_docs_directory(docs_directory, docs_template_directory):
    """Deletes the output folder, then copies the contents of the template
    directory so that there is a blank slate to work with.
    """
    if os.path.isdir(docs_directory):
        shutil.rmtree(docs_directory)
    shutil.copytree(docs_template_directory, docs_directory)


def generate_pages(endpoints, template, docs_directory):
    """Creates the documentation pages and the folder structure using the
    template markdown file as a guide.
    """
    def replace_variable(template, variable, value):
        return template.replace("({})".format(variable), value)

    for endpoint in endpoints:
        endpoint: Endpoint
        page = template
        page = replace_variable(page, "METHOD", endpoint.method)
        page = replace_variable(page, "ROUTE", endpoint.route)
        
        # If the endpoint is not privileged, don't print anything extra
        if endpoint.privileged:
            page = replace_variable(page, "PRIVILEGED", PRIVILEGED)
        else:
            page = replace_variable(page, "PRIVILEGED", "")
        
        # If the endpoint has no input properties, don't print anything extra
        if len(endpoint.properties) > 0:
            properties_text = "\n".join([str(p) for p in endpoint.properties])
            page = replace_variable(page, "PROPERTIES",
                "## Properties\n\n{}".format(properties_text))
        else:
            page = replace_variable(page, "PROPERTIES", "")

        page = replace_variable(page, "DESCRIPTION", endpoint.description)

        # If the endpoint has no footer, don't print anything extra
        if endpoint.footer is not None:
            page = replace_variable(page, "FOOTER", endpoint.footer)
        else:
            page = replace_variable(page, "FOOTER", "")

        # Write the page to disk
        with safe_open_w(docs_directory + "/" + endpoint.as_file()) as f:
            f.write(page)


def generate_sidebar(endpoints, docs_directory):
    """Create the sidebar file in the format expected by docsify such that we
    can easily navigate between all the pages in the documentation.
    """
    endpoint_sections = {}
    for endpoint in endpoints:
        endpoint: Endpoint
        if endpoint.section not in endpoint_sections:
            endpoint_sections[endpoint.section] = []
        endpoint_sections[endpoint.section].append(endpoint)
    
    with safe_open_w(docs_directory + "/_sidebar.md") as f:
        for section, pages in endpoint_sections.items():
            f.write("- {}\n\n{}\n\n".format(
                section, "\n".join([p.as_section() for p in pages])))


def main():
    docs_json = "docs.json"
    docs_directory = "docs"
    docs_template_directory = "docs_template"
    footers_directory = "footers"
    template_filename = "template.md"

    try:
        endpoints = parse_docs_json(docs_json, footers_directory)
    except FileNotFoundError:
        print("File '{}' does not exist".format(docs_json))
        return
    except KeyError:
        print("Failed to parse '{}'".format(docs_json))
        return
    
    reset_docs_directory(docs_directory, docs_template_directory)

    try:
        with open(template_filename) as f:
            template = f.read()
    except FileNotFoundError:
        print("File '{}' does not exist".format(template_filename))
        return
    
    generate_pages(endpoints, template, docs_directory)
    generate_sidebar(endpoints, docs_directory)
    print("Succesfully generated {} pages".format(len(endpoints)))


if __name__ == "__main__":
    main()
