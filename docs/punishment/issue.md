# <span class="badge badge-light">POST</span> <span class="badge badge-light">punishment/issue</span>

!> Privileged endpoint ([?](privileged.md))

Issues a punishment to a user.

## Properties

`playerUsername` *string*  
Username of the punished user.

`staffUsername` *string*  
Username of the punishing Staff Member.

`platform` *string*  
Specify the platform to be punished from (server/discord).

`type` *string*  
Type of punishment to issue (warn/kick/tempBan/ban/ipBan).

`length` *string*  
The length of the punishment (if applicable).

`reason` *string*  
Reason for the punishement.

