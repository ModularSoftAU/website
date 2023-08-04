# Modular Software Website

Welcome to the website for Modular Software and its products.

## Usability

To use and discover the website, have a look at the tabs in the top right.

## Running

Optional: Start python virtual environment

```bash
pip install -r requirements.txt
cd vendor
python APIGenerator/src/gen.py --build
npm install
npm start
```

<https://github.com/ModularSoftAU/APIGenerator>

### Extra `gen.py` Arguments

To utilize gen.py you will need to run this in an external Command window separate to your NPM console.

| Argument  | Description                      |
|-----------|----------------------------------|
| `--help`  | Prints more detailed information |
| `--build` | Build generated `docs`           |
| `--clean` | Clean generated `docs`           |
| `--live`  | Live compiles the API            |
