# <span class="badge badge-light">POST</span> <span class="badge badge-light">appeal/deny</span>

!> Privileged endpoint ([?](privileged.md))

Deny and close existing appeal of an existing punishment.

## Properties

`punishmentId` *integer*  
The punishment ID to deny.

`staffId` *integer*  
The id of the Staff member providing comment.

`content` **optional** *string*  
The content of the appeal comment.

`action` *string*  
The action to take for the appeal. Note: I believe this is not required

