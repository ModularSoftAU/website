## web
The Web API handles registration, configuration retrieval, statistics retrieval, and log retrieval functionalities.

## Register User
Allows a user to register by providing necessary information like username, email, and password.

### Endpoint
`POST /regster/create`

### Parameters
* username (string): User's desired username.
* email (string): User's email address.
* password (string): User's chosen password.
* confirmPassword (string): Confirmation of the chosen password.

### Response 
Success Response (Status Code: 200)
```
{
  "success": true,
  "alertType": "success",
  "alertContent": "Registration successful message."
}
```

Error Response (Status Code: 400): If any required field is missing or invalid
```
{
  "success": false,
  "alertType": "danger",
  "alertContent": "Error message indicating missing or invalid field."
}
```

If the email is already in use:
```
{
  "success": false,
  "alertType": "warning",
  "alertContent": "Email is already in use message."
}
```

If the passwords do not match:
```
{
  "success": false,
  "alertType": "danger",
  "alertContent": "Passwords do not match message."
}
```

If an error occurs during registration:
```
{
  "success": false,
  "alertType": "danger",
  "alertContent": "Registration error message."
}
```

## Get Configuration
Retrieves the site's configuration details.

### Endpoint
`GET /configuration`

### Response 
```
{
  "success": true,
  "data": {
    "siteName": "Name of the site",
    "siteAddress": "URL of the site"
  }
}
```

## Get Statistics
Retrieves various statistics including the number of community members, total time played, and total staff members.

### Endpoint
`GET /statistics`

### Response 
```
{
  "success": true,
  "data": {
    "general": {
      "communityMembers": 100,
      "timePlayed": "10 hours",
      "staffMembers": 5
    },
    "punishments": {
      // To be implemented in the future
    }
  }
}
```

## Get Logs
Retrieves logs including details like log ID, creator ID, actioned username, log feature, log type, description, and actioned date time.

### Endpoint
`GET /logs/get`

### Response 
```
{
  "success": true,
  "data": [
    {
      "logId": 1,
      "creatorId": 101,
      "actionedUsername": "username",
      "logFeature": "feature",
      "logType": "type",
      "description": "log description",
      "actionedDateTime": "2023-10-05T14:30:00Z"
    },
    // Additional logs if available
  ]
}
```