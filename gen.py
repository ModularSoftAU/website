import json
import os
import sys


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
                 short, description, properties):
        self.section = section
        self.route = route
        self.method = method
        self.privileged = privileged
        self.short = short
        self.description = description
        self.properties = properties
    
    def as_file(self):
        return self.route + ".md"
    
    def as_section(self):
        return "  - [{}]({})".format(self.short, self.as_file())

    
def safe_open_w(path):
    ''' Open "path" for writing, creating any parent directories as needed.
    '''
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return open(path, 'w')


def parse_documentation_json(json_file):
    with open(json_file) as f:
        sections = json.loads(f.read())
    
    endpoints = []
    for section, pages in sections.items():
        for route, page_data in pages.items():
            method = page_data["method"]
            privileged = page_data["privileged"]
            short = page_data["short"]
            description = page_data["description"]
            properties = []
            try:
                for name, property_data in page_data["properties"].items():
                    p_type = property_data["type"]
                    info = property_data["info"]
                    optional = property_data["optional"]
                    properties.append(Property(name, p_type, info, optional))
            except KeyError:
                pass

            endpoints.append(Endpoint(section, route, method, privileged,
                                      short, description, properties))
    return endpoints


def replace_variable(template, variable, value):
    return template.replace("({})".format(variable), value)


def generate_pages(endpoints, template):
    
    
    for endpoint in endpoints:
        endpoint: Endpoint
        page = template
        page = replace_variable(page, "METHOD", endpoint.method)
        page = replace_variable(page, "ROUTE", endpoint.route)
        
        if endpoint.privileged:
            page = replace_variable(page, "PRIVILEGED", PRIVILEGED)
        
        if len(endpoint.properties) > 0:
            properties_text = "\n".join([str(p) for p in endpoint.properties])
            page = replace_variable(page, "PROPERTIES",
                "## Properties\n\n{}".format(properties_text))
        else:
            page = replace_variable(page, "PROPERTIES", "")

        page = replace_variable(page, "DESCRIPTION", endpoint.description)

        with safe_open_w("docs/" + endpoint.as_file()) as f:
            f.write(page)


def generate_sidebar(endpoints):
    endpoint_sections = {}

    for endpoint in endpoints:
        endpoint: Endpoint
        if endpoint.section not in endpoint_sections:
            endpoint_sections[endpoint.section] = []
        endpoint_sections[endpoint.section].append(endpoint)
    
    with safe_open_w("docs/_sidebar.md") as f:
        for section, pages in endpoint_sections.items():
            f.write("- {}\n\n{}\n\n".format(
                section, "\n".join([p.as_section() for p in pages])))


def main():
    try:
        endpoints = parse_documentation_json("docs.json")
    except FileNotFoundError:
        print("Failed to read docs.json")
        return
    
    try:
        with open("template.md", "r") as f:
            template = f.read()
    except FileNotFoundError:
        print("Failed to read template.md")
        return
    
    try:
        generate_pages(endpoints, template)
    except IOError:
        print("Failed to write to one of the documentation pages")
        return
    
    try:
        generate_sidebar(endpoints)
    except IOError:
        print("Failed to write the sidebar")
        return
    
    print("Succesfully generated {} pages".format(len(endpoints)))


if __name__ == "__main__":
    main()