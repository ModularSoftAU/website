---
title: Conventions
description: Coding conventions and standards for Zander
sidebar_label: Conventions
sidebar_position: 1
---

## Zander API rules

When editing the API, these rules should be strictly followed.

### Naming conventions

1. `GET` requests must have the suffix `/get` in the endpoint. For example:

   - `GET rank/get`
   - `GET punishments/get`
   - `GET communitycreation/get`
   - `GET knowledgebase/article/get`

   So far, no endpoints that we have added requires needing more than one `GET` request per endpoint group (rank/discord/server/shop etc). Thus, it makes sense to try and unify the design across these endpoints.

2. `GET` requests that require parameters are only injected via **query**. For example:

   - `GET rank/get?username=shadowwolfyt`
   - `GET punishments/get?limit=20`
   - `GET communitycreation/get?id=1337`

   These parameters must be included in the documentation to tell other users how it works.

3. `POST` requests must **NOT** have the suffix `/get` in the name (surely this is obvious).
4. `POST` requests that require parameters are only injected via `json`. **No querying, or params in the endpoint.** For example:

    `POST shop/create/item`

    ```json
    {
        "shopId": 2,
        "shopItem": "glass",
        "shopPrice": 2,
        "shopBuyQuantity": 128
    }
    ```

    `POST discord/chat`

    ```json
    {
        "username": "shadowolfyt",
        "server": "Survival",
        "content": "This server is awesome"
    }
    ```

    `POST session/destroy`

    ```json
    {
        "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt
    }
    ```

### Response format

These exist to prevent API functionality from mingling with website functionality. For example, it should be illegal for the API to redirect the user. It must always return `json`.

1. All `GET` endpoints must return `json` data that adheres to the following format:

    ```json
    {
        "success": [true|false], // Must be a boolean
        "message": "<message>", // Optional field. Can exist regardless
                                // of the value of success.
        "data": // Result from the get request goes here. This field must
                // only exist if success == true. The data type this
                // field holds can be arbitrary (dict, list, bool, int,
                // etc.)
    }
    ```

    Valid:

    ```json
    {
        "success": false,
        "message": "The userId is invalid"
    }
    ```

    ```json
    {
        "success": true,
        "data": {
            "player": "shadowwolfyt",
            "diamonds": "1337"
        }
    }
    ```

    ```json
    {
        "success": true,
        "message": "Hello, World!",
        "data": [ 1, 2, 3, 4, 5 ]
    }
    ```

2. All `POST` endpoints must return `json` data that adheres to the following format:

    ```json
    {
        "success": [true|false], // Must be a boolean
        "message": "<message>" // Optional field. Can exist regardless
                               // of the value of success.
    }
    ```

    Valid:

    ```json
    {
        "success": false,
        "message": "User already exists"
    }
    ```

    ```json
    {
        "success": true
    }
    ```

### GET Request Response

1. `GET` requests with no query, should default to returning all of that kind without any filtering.

2. Any `GET` requests with queries, should only be filtering output, not including something new that wasn't there before. For example:

    If `GET rank/get` returned this:

    ```json
    {
        "success": true,
        "data": [
            { "admin": [ "shadowwolfyt" ] },
            { "user": [ "shadowwolfyt", "Camemes" ] }
        ]
    }
    ```

    Then, `GET rank/get?username=Camemes` could **NOT** return:

    ```json
    {
        "success": true,
        "data": [
            { "donator": [ "Camemes" ] },
            { "user": [ "Camemes" ] }
        ]
    }
    ```

    As this would not fit the rule because "donator" did not appear in the non-filtered result of the plain `/get`.

3. To follow from rule 2, filtering the output using a query, must not change the return result format *(TODO: unless maybe specified in the documentation?)*. This is to ensure consistency when applying multiple filters at the same time. This may result in empty data, and that's okay. For example:

    If `GET rank/get` returned this:

    ```json
    {
        "success": true,
        "data": [
            { "admin": [ "shadowwolfyt" ] },
            { "user": [ "shadowwolfyt", "Camemes" ] }
        ]
    }
    ```

    Then `GET rank/get?username=Camemes&rank=admin` would return:

    ```json
    {
        "success": true,
        "data": []
    }
    ```

    :::note

    The data is empty because the filters reduced the result to empty, however the query still returns `"success": true`. This tells the end user that an error did not occur and the filters were successfully applied. It may be desired behaviour to expect an empty result. An example of this might be the endpoint `GET punishments/get?username=shadowwolfyt`. Where an empty result means user `shadowwolfyt` has no punishments. Also note that the data type of `data` in the plain `/get` was a JSON array, thus the data type of `data` in the filtered query is also an empty JSON array.

    :::

4. Because of rule 1, `GET` endpoints expecting very large output should implement the query `?limit=x` where `x` is an integer that defines the return result limit. What the limit does for each endpoint is up to the implementation, however it should be noted in the documentation. For example:

   `GET punishments/get?limit=3`

   ```json
   {
       "success": true,
       "data": [
           { "player": "shadowwolfyt", "when": "1 second ago" }, // Obviously time is not stored as a string, but you get the idea
           { "player": "Camemes",      "when": "10 seconds ago" },
           { "player": "StryderEpic",  "when": "25 seconds ago" }
       ]
   }
   ```

   In the example above, the `GET punishments/get` endpoint decided that limit=3 should only return the latest 3 punishments issued.

5. `GET` endpoints expecting very large output should also implement the query `?page=x` where `x` is an integer that defines the page that is returned. The data to return is defined as `(page + 1) * limit` where only `limit` entries are returned. For example:

    `GET punishments/get`

   ```json
   {
       "success": true,
       "data": [
           { "player": "one", "when": "1 second ago" },
           { "player": "two", "when": "10 seconds ago" },
           { "player": "three", "when": "25 seconds ago" },
           { "player": "four", "when": "30 seconds ago" },
           { "player": "five", "when": "35 seconds ago" },
           { "player": "six", "when": "40 seconds ago" }
       ]
   }
   ```

   `GET punishments/get?limit=2&page=1`

   ```json
   {
       "success": true,
       "data": [
           { "player": "one", "when": "1 second ago" },
           { "player": "two", "when": "10 seconds ago" }
       ]
   }
   ```

   `GET punishments/get?limit=2&page=2`

   ```json
   {
       "success": true,
       "data": [
           { "player": "three", "when": "25 seconds ago" },
           { "player": "four", "when": "30 seconds ago" },
       ]
   }
   ```

   `GET punishments/get?limit=2&page=4`

   ```json
   {
       "success": true,
       "data": []
   }
   ```

   > `Aron_with_an_a`
   >
   > In MySQL this can be done simply with the offset parameter.
   >
   > ```sql
   > // set the number of items to display per page
   > const limit = req.body.limit;
   > const page = (req.body.page) ? req.body.page : 1;
   > const offset = (page - 1) * limit;
   > 
   > // build query
   > const sql = "SELECT * FROM punishments LIMIT " . offset . "," . limit;
   > ```
   >
   > That will return paginated results from the database

6. Any `GET` request that returns a list should always return `"success": true` if the resulting data is an empty list if the input queries are valid. For example:

    `GET rank/get?username=NoPlayer`

    ```json
    {
        "success": true,
        "data": []
    }
    ```

### Documentation conventions

1. When writing documentation for `GET` requests, all unique parameters' `info` fields must start with the string: "Filter by", and they must also be `optional: true`. For example:

    ```yaml
    # ...
    Group:
      group/endpoint:
        method: GET
        privileged: true # or false
        short: My endpoint
        description: This endpoint does...
        username:
          type: string
          info: Filter by matching user IGN.
          optional: true
    # ...
    ```
