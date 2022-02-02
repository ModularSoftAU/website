import json
import os
import sys


TITLE = '<span class="badge badge-light">{}</span>'
PRIVILEGED = '!> Privileged endpoint ([?](privileged.md))\n\n'


def safe_open_w(path):
    ''' Open "path" for writing, creating any parent directories as needed.
    '''
    os.makedirs(os.path.dirname(path), exist_ok=True)
    return open(path, 'w')


def load_docs(json_file):
    with open(json_file) as f:
        return json.loads(f.read())


def generate_pages(docs):
    pages = docs["pages"]
    sidebar = {}
    for route, page_data in pages.items():
        doc_file = route + ".md"
        method = page_data["method"]

        # Sidebar
        short = page_data["short"]
        section = route.split("/")[0].capitalize()
        if section not in sidebar:
            sidebar[section] = []
        sidebar[section].append((short, doc_file))

        privileged = page_data["privileged"]
        description = page_data["description"]

        with safe_open_w("docs/" + doc_file) as f:
            f.write("# {} {}\n".format(
                TITLE.format(method),
                TITLE.format(route)))
            f.write("\n")
            if privileged:
                f.write(PRIVILEGED)
            f.write("{}\n\n".format(description))

            if method == "POST":
                f.write("## Properties\n\n")
                properties = page_data["properties"]
                for parameter, p_data in properties.items():
                    optional = p_data["optional"]
                    extra = " **optional**" if optional else ""
                    p_type = p_data["type"]
                    p_info = p_data["info"]
                    f.write("`{}`{} *{}*  \n".format(parameter, extra, p_type))
                    f.write("{}\n".format(p_info))
                    f.write("\n".format(p_info))
            
            try:
                with open("footers/" + doc_file, "r") as foot:
                    f.write(foot.read())
            except FileNotFoundError:
                pass
        
        with open("docs/_sidebar.md", "w") as f:
            for title, content in sidebar.items():
                f.write("- {}\n\n".format(title))
                for page in content:
                    f.write("  - [{}]({})\n".format(*page))
                f.write("\n")

def main():
    try:
        docs = load_docs("docs.json")
    except FileNotFoundError:
        return 1
    return generate_pages(docs)


if __name__ == "__main__":
    sys.exit(main())