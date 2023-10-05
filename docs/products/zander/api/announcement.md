## Announcement
The Announcement API provides endpoints for managing announcements in your application. Announcements can be retrieved, created, edited, deleted, enabled, and disabled through this API.

## Get Announcements
### Endpoint
`GET /get`

### Parameters
* announcementSlug (optional): Unique identifier for a specific announcement.
* announcementType (optional): Type of announcement (web, tip, motd).
* enabled (optional): Filter announcements by enabled status (show, hide).

### Response 
```
{
    "success": true,
    "data": [
        {
            // Announcement details
        }
    ]
}
```

## Create Announcement
### Endpoint
`POST /create`

### Parameters
* actioningUser (string): User initiating the action.
* announcementSlug (string): Unique identifier for the announcement.
* enabled (number): 1 if the announcement is enabled, 0 if disabled.
* announcementType (string): Type of announcement (web, tip, motd).
* body (string, optional): Content of the announcement.
* colourMessageFormat (string, optional): Color format for the message.
* link (string, optional): Link associated with the announcement.

### Response 
```
{
    "success": true,
    "alertType": "success",
    "content": "Announcement created successfully."
}
```

## Edit Announcement
### Endpoint
`POST /edit`

### Parameters
* actioningUser (string): User initiating the action.
* slug (string): Unique identifier of the announcement to be edited.
* announcementSlug (string): Updated unique identifier.
* enabled (number): 1 if the announcement is enabled, 0 if disabled.
* announcementType (string): Type of announcement (web, tip, motd).
* body (string, optional): Updated content of the announcement.
* colourMessageFormat (string, optional): Updated color format for the message.
* link (string, optional): Updated link associated with the announcement.

### Response 
```
{
    "success": true,
    "message": "Announcement edited successfully."
}
```

## Delete Announcement
### Endpoint
`POST /delete`

### Parameters
* announcementSlug (string): Unique identifier of the announcement to be deleted.

### Response 
```
{
    "success": true,
    "message": "Announcement deleted successfully."
}
```

## Enable Announcement
### Endpoint
`POST /enable`

### Parameters
* announcementSlug (string): Unique identifier of the announcement to be enabled.

### Response 
```
{
    "success": true,
    "message": "Announcement enabled successfully."
}
```

## Disable Announcement
### Endpoint
`POST /disable`

### Parameters
* announcementSlug (string): Unique identifier of the announcement to be disabled.

### Response 
```
{
    "success": true,
    "message": "Announcement disabled successfully."
}
```