# ZanderDocs

Welcome to the documentation website for Zander.

## Usability

To use and discover the documentation site, have a look at the tabs in the top right.

## Running

```bash
pip install -r requirements.txt
python gen.py --build
npm install
npm start
```

### Extra `gen.py` Arguments

| Argument  | Description                                       |
|-----------|---------------------------------------------------|
| `--help`  | Prints more detailed information                  |
| `--build` | Build generated `docs`                            |
| `--clean` | Clean generated `docs`                            |
| `--live`  | Live compiles `template/pages` and `template/api` |
