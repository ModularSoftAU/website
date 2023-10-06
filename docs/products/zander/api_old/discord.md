## Discord
The Discord API allows integration with Discord for various actions related to user interactions and updates.

## Switch Server
Notify Discord when a user switches servers.

### Endpoint
`POST /switch`

### Parameters
* username (string): Username of the user switching servers.
* server (string): Name of the server the user is switching to.

### Response 
```
{
    "success": true
}
```

## Send Chat Message
Send a chat message to Discord.

### Endpoint
`POST /chat`

### Parameters
* username (string): Username of the user sending the message.
* server (string): Name of the server.
* content (string): Content of the message.

### Response 
```
{
    "success": true
}
```

## User Join Notification
Notify Discord when a user joins the network.

### Endpoint
`POST /join`

### Parameters
* username (string): Username of the user joining.

### Response 
```
{
    "success": true
}
```

## User Leave Notification
Notify Discord when a user leaves the network.

### Endpoint
`POST /leave`

### Parameters
* username (string): Username of the user leaving.

### Response 
```
{
    "success": true
}
```