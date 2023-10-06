## Filter
The Filter API provides functionality for checking content against a list of banned words and phrases. It helps in maintaining a clean and safe environment for users.

## Check Content
Check content against a list of banned words and phrases.

### Endpoint
`POST /filter`

### Parameters
* content (string): The content to be checked.

### Response 
```
{
    "success": true,
    "message": "Content Clean"
}
```
or
```
{
    "success": false,
    "message": "Content contains banned words or phrases."
}
```