## Server
The Server API allows you to manage servers in your system. Servers can be retrieved, created, edited, and deleted through this API.

## Get Servers
Retrieve a list of servers.

### Endpoint
`GET /get`

### Parameters
* visible (optional): Filter servers by visibility. Possible values: true for visible servers, false for non-visible servers.
* id (optional): Unique identifier of a specific server.

### Response 
```
{
    "success": true,
    "data": [
        {
            // Server details
        }
    ]
}
```

## Get Online Users
Retrieve the list of servers with the number of online users.

### Endpoint
`POST /users/get`

### Response 
```
{
    "success": true,
    "data": [
        {
            "name": "Server Name",
            "playersOnline": 10
        }
    ]
}
```

## Create Server
Create a new server.

### Endpoint
`POST /create`

### Parameters
* actioningUser (string): User initiating the action.
* name (string): Name of the server.
* fqdn (string): Fully qualified domain name.
* ipAddress (string): IP address of the server.
* port (number): Port number.
* visible (number): 1 for visible, 0 for non-visible.
* position (number): Position/order of the server.

### Response 
```
{
    "success": true,
    "message": "Server created successfully."
}
```

## Edit Server
Edit an existing server.

### Endpoint
`POST /edit`

### Parameters
* actioningUser (string): User initiating the action.
* serverId (string): Unique identifier of the server.
* name (string): Updated name.
* fqdn (string): Updated fully qualified domain name.
* ipAddress (string): Updated IP address.
* port (number): Updated port number.
* visible (number): Updated visibility (1 for visible, 0 for non-visible).
* position (number): Updated position/order.

### Response 
```
{
    "success": true,
    "message": "Server edited successfully."
}
```

## Delete Server
Delete an existing server.

### Endpoint
`POST /delete`

### Parameters
* actioningUser (string): User initiating the action.
* serverId (string): Unique identifier of the server.

### Response 
```
{
    "success": true,
    "message": "Server deleted successfully."
}
```