## Application
The Application API allows you to manage applications in your system. Applications can be retrieved, created, edited, and deleted through this API.

## Get Applications
Retrieve a list of applications.

### Endpoint
`GET /get`

### Parameters
* id (optional): Unique identifier of a specific application.

### Response 
```
{
    "success": true,
    "data": [
        {
            // Application details
        }
    ]
}
```

## Create Application
Create a new application.

### Endpoint
`POST /create`

### Parameters
* actioningUser (string): User initiating the action.
* displayName (string): Display name of the application.
* description (string): Description of the application.
* displayIcon (string): URL of the display icon.
* requirementsMarkdown (string): Markdown formatted requirements.
* redirectUrl (string): URL for redirection after application submission.
* position (number): Position/order of the application.
* closed (number): 1 if the application is closed, 0 if open.

### Response 
```
{
    "success": true,
    "message": "Application created successfully."
}
```

## Edit Application
Edit an existing application.

### Endpoint
`POST /edit`

### Parameters
* actioningUser (string): User initiating the action.
* applicationId (string): Unique identifier of the application.
* displayName (string): Updated display name.
* description (string): Updated description.
* displayIcon (string): Updated URL of the display icon.
* requirementsMarkdown (string): Updated markdown formatted requirements.
* redirectUrl (string): Updated URL for redirection after application submission.
* position (number): Updated position/order of the application.
* closed (number): 1 if the application is closed, 0 if open.

### Response 
```
{
    "success": true,
    "message": "Application edited successfully."
}
```

## Delete Application
Delete an existing application.

### Endpoint
`POST /delete`

### Parameters
* actioningUser (string): User initiating the action.
* applicationId (string): Unique identifier of the application.

### Response 
```
{
    "success": true,
    "message": "Application deleted successfully."
}
```