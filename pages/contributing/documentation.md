---
title: Docs Documentation
description: Contributing to the documentation
sidebar_label: Docs Documentation
sidebar_position: 2
---

Contributing to the documentation is readily encouraged. Feel free to submit a
pull request if you feel you can add to the documentation.

## Getting Started

To compile the documentation you will need [Node.js](https://nodejs.org/en/) and
[Python3](https://www.python.org/). With Node.js installed you should be able to
run:

```bash
npm --version
```

You can also check to see if Python is installed with:

```bash
python --version
```

You will then need to install the yaml parser with:

```bash
python -m pip install -r requirements.txt
```

## Compiling Documentation

Open a terminal and run:

```bash
python gen.py --build
```

This will build the documentation to the directory `docs`.

:::info

Any local changes applied inside `docs` directory will be overwritten whenever a
build takes place. Edits in `template/page` or `template/api` will persist.

:::

Then run:

```bash
npm start
```

This will start Docusaurus at [`localhost:3000`](localhost:3000) where you can
navigate your changes locally.

## Contributing to the API Documentation

The API documentation is unique because most of each page is built dynamically
using `gen.py`. To edit one of the endpoints key information open `docs.yaml`
and navigate to the endpoint you wish to edit. For example:

```yaml
---
Anticheat:
  anticheat/flag:
    method: POST
    privileged: true
    short: Flag user
    description: Flag a user via the anticheat and send to staff.
    parameters:
      username:
        type: string
        info: User IGN.
        optional: false
      type:
        type: string
        info: The type of hack that the player has been flagged for.
        optional: false
# ...
```

You can see how this is rendered by looking at
[anticheat/flag](../api/anticheat/flag).

### Understanding the API Template

The API template can be found at `template/api/template.mdx`. This file outlines
how `gen.py` will generate each API page from the data contained in `docs.yaml`.
Variables with parentheses `(VAR)` perform a simple replace. Variables with
opening parentheses `(VAR)` and closing parentheses `(/VAR)` can be included
based on a condition. These substitutions are performed in `compile_api_pages`
in `gen.py`. Example:

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
> `compile_api_pages()`
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

To add a page, simply create a new endpoint in `docs.yaml` under the section you
desire. In the example above the section is called "Anticheat". You may create
a new section by adding one in `docs.yaml` also.

:::caution Types

Endpoints have some values type checked in `gen.py`. For example, valid methods
must be `POST` or `GET` and valid parameter types must be `string`, `boolean`,
or `integer`. These are checked inside `are_valid_endpoints()` in `gen.py`.

:::

### Adding a footer

All endpoints should include a footer that includes typical usage examples and
any edge cases. These footers are spliced onto the end of the template in
`gen.py`. Footers are found in `template/api`. The file structure here is
different to the output file structure. It must follow the exact path of the
route.

For example, let's assume we want to add a new footer for the endpoint
`anticheat/$user/unflag`. Then, exactly like the endpoint, there should exist an
mdx file at `template/api/anticheat/$user/unflag.mdx`.

```text
📦zander-docs
┗ 📂template
  ┗ 📂api
    ┗ 📂anticheat
      ┣ 📂$user
      ┃ ┗ 📜unflag.mdx // You create this file
      ┗ 📜flag.mdx
```

Feel free the copy other footers to modify for your own.

## Live editing

Whenever you make a change in `template/api` or `template/pages` you will have
to re-run `python gen.py --build` to see the changes on the website. This can
be annoying. I'm lazy. I like immediate results!

To alleviate this, `gen.py` supports live editing mode. To start live editing
mode run:

```bash
python gen.py --live
```

This will start `gen.py`. It will then poll the `template/api` and
`template/pages` directories for changes and immediately update the `docs`
directory with the changes. This means that you can have `npm start` running in
another shell and whenever you make a change, the change will immediately be
rendered at [`localhost:3000`](localhost:3000).

To end live coding mode simple press `CTRL+C` on your keyboard.
