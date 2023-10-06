---
title: Configuration
description: TODO
sidebar_label: Configuration
sidebar_position: 2
---

## Web/API
*Configuration from the `.env.example`*

```
PORT=8080
siteAddress=http://localhost:8080
TZ=Australia/Sydney

discordoAuth2URL=AUTHURL
discordClientId=CLIENTID
discordClientSecret=CLIENTSECRET

discordAPIKey=APIKEY
apiKey=KEY

sessionCookieSecret=THISISNOTVERYSECRETANDITHINKYOUSHOULDCHANGEIT

databaseHost=database.example.com
databasePort=4052
databaseUser=USERNAME
databasePassword=PASSWORD
databaseName=DATABASE
```

*Configuration from the `config.json.example`*

```
{
    "debug": false,
    "siteConfiguration": {
        "siteName": "Crafting For Christ",
        "tagline": "Home of one of the biggest Christian Minecraft Servers in Australia.",
        "email": "support@craftingforchrist.net",
        "policy": {
            "termsOfService": "https://raw.githubusercontent.com/craftingforchrist/Legal/master/terms.md",
            "rules": "https://raw.githubusercontent.com/craftingforchrist/Legal/master/rules.md",
            "privacy": "https://raw.githubusercontent.com/craftingforchrist/Legal/master/privacy.md",
            "refund": "https://raw.githubusercontent.com/craftingforchrist/Legal/master/refund.md"
        },
        "platforms": {
            "discord": "https://discord.com/",
            "facebook": "https://www.facebook.com/craft4christ/",
            "twitter": "https://twitter.com/craft4christmc",
            "instagram": "https://instagram.com/craftingforchrist",
            "reddit": "https://www.reddit.com/r/craftingforchrist/",
            "twitch": "https://www.twitch.tv/craftingforchrist",
            "youtube": "https://www.youtube.com/channel/UCeijz6MNnya85LprMjPmYag",
            "linkedin": "https://www.linkedin.com/company/68885022/",
            "tiktok": "https://www.tiktok.com/@craftingforchrist"
        }
    },
    "discord": {
        "guildId": "899441191416901632",
        "channels": {
            "welcomeChannel": "926380663953821736",
            "networkChatLog": "925702393423859724",
            "adminLog": "926380052155867146",
            "eventAnnouncements": "926380005854957608",
            "reports": "936889292263936030",
            "punishments": "936889228598587392",
            "topVoterBroadcast": "926380005854957608"
        },
        "roles": {
            "verified": "926259482319794246"
        }
    }
}
```

### Filter

### Join Messages

### Language

## Proxy
*Configuration from the `config.yml`*

```
BaseAPIURL: "http://localhost:8080/api"
APIKey: "KEY"
```

## Hub
*Configuration from the `config.yml`*

```
velocitymultiplier: 3
hub:
  world: world
  x: 0.5
  y: 33
  z: 0.5
  yaw: -180.0
  pitch: 0.0
```