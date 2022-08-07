---
title: Form Modules
description: Conventions for Form Modules
sidebar_label: Form Modules
sidebar_position: 2
---

In the development of the forms in the Administration end and user end, to make code duplication not an issue, a form modules system was developed and introduced.

Currently they cover a majority of form elements used in our application but will be expanded on over time.

## inputHidden
```
<%- include("../../partials/form/inputHidden.ejs", {
    elementName: "slug",
    elementValue: announcementApiData.announcementSlug
}) %>
```

## inputSelect
```
<%- include("../../partials/form/inputSelect.ejs", {
elementName: "announcementType",
elementValue: "null",
required: true,
optionElements: [
    {
         optionName: "Select a Type",
         optionValue: "null",
         selected: true,
         disabled: true
     },
     {
         optionName: "Server Ping MOTD",
         optionValue: "motd",
         selected: false,
         disabled: false
     },
     {
         optionName: "In-Game Tip",
         optionValue: "tip",
         selected: false,
         disabled: false
     },
     {
         optionName: "Website Banner",
         optionValue: "web",
         selected: false,
         disabled: false
     }
 ]
}) %>                                                        
```

## inputText
```
<%- include("../../partials/form/inputText.ejs", {
    elementName: "announcementSlug",
    elementValue: null,
    required: true
}) %>
```

## inputTextArea
```
<%- include("../../partials/form/inputTextArea.ejs", {
    elementName: "body",
    elementValue: null,
    required: false
}) %>
```