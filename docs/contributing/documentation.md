---
title: Docs Documentation
description: Contributing to the documentation
sidebar_label: Docs Documentation
sidebar_position: 2
---

Contributing to the documentation is readily encouraged. Feel free to submit a pull request if you feel you can add to the documentation.

## Documentation Installation

To compile the documentation you will need [Node.js](https://nodejs.org/en/) and [Python3](https://www.python.org/). With Node.js installed you should be able to run:

```bash
npm --version
```

You can also check to see if Python is installed with:

```bash
python --version
```

(Optionally): Start a python virtual environment.

You will then need to install the yaml parser with:

```bash
python -m pip install -r requirements.txt
```

## Compiling the Documentation

Open a terminal and run:

```bash
cd vendor
python APIGenerator/src/gen.py --build
```

This will build the documentation to the directory `docs`.

:::info

Any local API documentation modification in the `docs` directory will be overwritten whenever a build takes place. To edit the footers edit the files in `api`, or modify `docs.yaml` directly.

:::

Then run the following to install all of the nodejs packages required for the documentation platform:

```bash
npm i
```

Then run the following to start the documentation platform:

```bash
npm start
```

This will start Docusaurus at [`localhost:3000`](localhost:3000) where you can navigate your changes locally.

## Contributing to the API Documentation

The API documentation is unique because most of each page is built dynamically using `gen.py`. To edit one of the endpoints key information open `vendor/docs.yaml` and navigate to the endpoint you wish to edit. For example:

```yaml
# ...
discord:
  sidebar: Discord
  files:
  - join.mdx:
      route: discord/join
      method: POST
      privileged: true
      short: Log user joining
      description: Log a message to a Discord channel when user joins the Network.
      parameters:
        username:
          type: string
          info: Users IGN.
          optional: false
# ...
```

You can see how this is rendered by looking at
[discord/join](/docs/products/zander/api/discord/join)

### Understanding the API Template

The API template can be found at `api/template.mdx`. This file outlines how `gen.py` will generate each API page from the data contained in `docs.yaml`. Variables with parentheses `(VAR)` perform a simple replace. Variables with opening parentheses `(VAR)` and closing arentheses `(/VAR)` can be included based on a condition. These substitutions are performed in `generate_file` in `gen.py`. Example:

> `example_template.mdx`
>
> ```md
> My name is (NAME).
> 
> (HOBBIES)
> - I like (GAME)
> (/HOBBIES)
>
> (SECRETS)
> - I like pineapple on pizza
> (/SECRETS)
> ```
>
> `generate_file()`
>
> ```python
> template.replace("NAME", "shadowolfyt")
> template.replace("GAME", "Minecraft")
> template.remove_line_with_if("HOBBIES", False)
> template.remove_line_with_if("SECRETS", True)
> ```
>
> Final page
>
> ```md
> My name is shadowolfyt.
> 
> - I like Minecraft
> 
> ```

### Adding a page

To add a page, simply create a new endpoint in `docs.yaml` under the section you desire. See the documentation at <https://github.com/ModularSoftAU/APIGenerator> for more information about the format of `docs.yaml` and the config.

:::caution Types

Endpoints have some values type checked in `gen.py`. For example, valid methods
must be `POST` or `GET` and valid parameter types must be `string`, `boolean`,
or `integer`.

:::

### Adding a footer

Endpoints can include a footer that includes typical usage examples and any edge cases. These footers are spliced onto the end of the template in `gen.py`. Footers are found in the `api` directory. The file structure here is identical to the file structure made in `docs.yaml` (again see docs for more info).

## Live editing

Whenever you make a change to a footer, you will have to re-run `gen.py` to see the changes on the website. This can get annoying.

To alleviate this, `gen.py` supports live editing mode. To start live editing
mode run:

```bash
cd vendor
python APIGenerator/src/gen.py --live
```

This will start `gen.py`. It will then poll the template directory and immediately rebuild the api if a change occurs.

To end live coding mode simple press `CTRL+C` on your keyboard.
