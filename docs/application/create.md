# <span class="badge badge-light">POST</span> <span class="badge badge-light">application/create</span>

!> Privileged endpoint ([?](privileged.md))

Create an application for users to apply for.

## Properties

`displayName` *string*  
The display name for the application.

`description` *string*  
A short blurb of the application.

`displayIcon` *string*  
The icon to display from FontAwesome.

`requirementsMarkdown` *string*  
A link to a markdown file that renders the requirements for the role

`redirectURL` *string*  
The Google Form URL to redirect to

`position` *integer*  
Which position should this application sit on the page

