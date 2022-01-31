# <span class="badge badge-light">POST</span> <span class="badge badge-light">alert/create</span>

!> Privileged endpoint ([?](privileged.md))

Create an alert on Network platforms.

## Properties

`alertSlug` *string*  
Unique Identifier.

`body` *string*  
The text or message you would like to send in the format you specified.

`motd` *boolean*  
Is the alert meant for the message of the day?

`tips` *boolean*  
Is this an alert to rotate in game?

`web` *boolean*  
Is this a website banner alert to display globally?

`link` **optional** *string*  
If tips or web is selected, when clicked, where should it redirect the user?

`motdFormat` **optional** *string*  
If motd is selected, what is the & colour specific format?

## Response

*TODO*

---

## Usage

```text
POST alert/create
{
    "alertSlug": "joinCommunityDiscord",
    "body": "Join our community Discord",
    "motd": "false",
    "tips": "true",
    "web": "false",
    "link": "https://craftingforchrist.net/discord",
    "motdFormat": "&aJoin our community Discord"
}
```

```text
TODO
```
