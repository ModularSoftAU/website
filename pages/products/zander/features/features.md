---
title: Features & Feature Toggling
description: A list of features inside of the application and how to toggle them.
sidebar_label: Features
sidebar_position: 1
---

Inside of the `features.json` file, on the web application you are able to enable and disable application features.
This is so you can easily choose what you do and do not need for your purposes:

## `features.json`
This is an example of the default `features.json` file.

You can learn more about each feature by collapsing the features section of the docs.

```
{
    "announcements": true,
    "appeals": false,
    "applications": false,
    "communitycreations": false,
    "discord": true,
    "events": false,
    "friends": false,
    "knowledgebase": true,
    "punishments": false,
    "ranks": false,
    "report": true,
    "servers": false,
    "sessions": true,
    "shops": false,
    "user": true,
    "userProfiles": false,
    "vote": true,
    "web": true,

    "smDiscord": true,
    "smFacebook": true,
    "smTwitter": true,
    "smInstagram": true,
    "smReddit": false,
    "smTwitch": true,
    "smYouTube": true,
    "smLinkedIn": true,
    "smTikTok": true
}
```

### Social Media
All of the `sm` features correspond to the Social Media platform referenced in the `config.json` file. As you set the link to the external platforms, you'll need to enable them in the `features.json`.

For example they will appear as so:

![img](https://i.gyazo.com/2a570a5eff8d61a4cefe3ef8008d3046.png)
