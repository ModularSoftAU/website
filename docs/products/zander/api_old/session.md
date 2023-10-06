## Session
The Session API allows you to manage user sessions. Sessions can be created, destroyed, and switched to different servers through this API.

## Create Session
Create a new session for a user.

### Endpoint
`POST /create`

### Parameters
* uuid (string): Unique identifier of the user.
* ipAddress (string): IP address of the user.

### Response 
```
{
    "success": true,
    "message": "New session created for user with UUID %UUID%."
}
```

## Destroy Session
Close all open sessions for a user.

### Endpoint
`POST /destroy`

### Parameters
* uuid (string): Unique identifier of the user.

### Response 
```
{
    "success": true,
    "message": "All sessions closed for user with UUID %UUID%."
}
```

## Switch Session
Switch the user's session to a different server.

### Endpoint
`POST /switch`

### Parameters
* uuid (string): Unique identifier of the user.
* server (string): Name of the server to switch to.

### Response 
```
{
    "success": true,
    "message": "Session switched for user with UUID %UUID% to server %SERVER%."
}
```