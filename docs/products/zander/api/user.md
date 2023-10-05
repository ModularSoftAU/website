## User
The User API provides endpoints to manage user accounts.

## Create User
Create a new user account.

### Endpoint
`POST /create`

### Parameters
* uuid (string): Unique identifier of the user.
* username (string): Username of the user.

### Response 
```
{
    "success": true,
    "message": "User '%USERNAME%' with UUID '%UUID%' created successfully."
}
```

## Get User
Close all open sessions for a user.

### Endpoint
`GET /get`

### Parameters
* username (string): Username of the user (optional).
* fetchAll (boolean): Retrieve all users (optional).

### Response 
```
{
    "success": true,
    "data": [
        {
            "userId": 1,
            "uuid": "1234567890",
            "username": "example_user"
        },
        {
            "userId": 2,
            "uuid": "0987654321",
            "username": "another_user"
        }
    ]
}
```