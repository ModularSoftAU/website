---
title: API
description: TODO
sidebar_label: API
sidebar_position: 4
---

## Introduction

## Authentication
The API authentication is implemented using a token-based approach. This ensures that only authorized requests are allowed to access specific endpoints.

To access certain API endpoints, a valid access token must be included in the request headers. The token is validated against the expected token stored in the environment variables.

### Endpoint Authorization
Endpoint: /api/...

HTTP Method: All

### Request Headers
x-access-token: The access token used for authentication.

#### Response Messages
Success Response (Status Code: 200)

```
{
  "success": true,
  "message": "Authentication successful."
}
```

Error Response (Status Code: 401)

If the token is missing:
```
{
  "success": false,
  "message": "No token provided."
}
```

If the token is invalid:
```
{
  "success": false,
  "message": "Invalid token."
}
```