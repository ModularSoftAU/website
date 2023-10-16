---
title: Configuration
description: TODO
sidebar_label: Configuration
sidebar_position: 2
---

## Web/API

### .env (Enviroment Variables)

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

### config.yml

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
The filter has 2 part features, a link filter to stop advertising and the like, and a phrase filter to stop profanity and swearing along with the use of varible characters.

You can add links and phrases in the `filter.json` file and on restart it will enforce them on all platforms.

### Join Messages
The use of join messages for whne a player joins the Discord and is verified, it will choose from a selection of the messages which you can add to in `joinMessages.json`
Ensure that when you create a join message, include the placeholder `%USERNAME%` as it will replace 

Here is a set list of the out-of-the box ones:

```
[
    "Yo! %USERNAME% just rocked up! Give them a warm welcome!",
    "Start celebrating :tada: %USERNAME% has joined the party!",
    "All your base belongs to %USERNAME%!!!",
    "Welcome %USERNAME%, don't get supply blocked.",
    "Hello there! General %USERNAME%!",
    "%USERNAME% joined. You must construct additional pylons.",
    "Woah! %USERNAME% just rocked up, Welcome!",
    "%USERNAME% just rocked up with Diamonds!",
    "%USERNAME% was blown up by a Creeper.. sad times.",
    "%USERNAME% was slain by a Zombie.. BRUH.",
    "%USERNAME% forgot how to use ladders.. oof.",
    "%USERNAME% we were expecting you ( ͡° ͜ʖ ͡°)",
    "Welcome %USERNAME% we hope you brought cake.",
    "Welcome %USERNAME% leave the swords and armour at the door.",
    "Swoooosh. %USERNAME% landed safely",
    "%USERNAME% just joined. Hide your Diamonds.",
    "%USERNAME% has joined the game.",
    "%USERNAME% just showed up. Hold my milk."
]
```

### Features
The features file allows you to pick and choose what you want to use for you community.

#### features.json

```
{
    "announcements": true,
    "applications": true,
    "discord": {
        "commands": {
            "legoFlip": true
        },
        "events": {
            "generalKenobi": true,
            "guildMemberBoost": true,
            "guildMemberVerify": true
        }
    },
    "server": true,
    "filter": {
        "link": true,
        "phrase": true
    },
    "web": {
        "login": true,
        "register": true
    },
    
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

### Language

## Proxy

### config.yml

```
BaseAPIURL: "http://localhost:8080/api"
APIKey: "KEY"

announcementMOTDTopLine: "&e&lMy &2&nMinecraft&r &6&oServer"
announcementTipPrefix: "&7&l[&6&lTIP&7&l]&r "
announcementTipInterval: 10
```

| Value                   | Description                                                                  |
| ----------------------- | ---------------------------------------------------------------------------- |
| BaseAPIURL              | The API URL for your instance.                                               |
| APIKey                  | The API key for your API instance to secure requests.                        |
| announcementMOTDTopLine | The default top line of the Server MOTD.                                     |
| announcementTipPrefix   | The prefix for the Tip announcements.                                        |
| announcementTipInterval | The minute interval of which to send Tip announcements to across the Server. |

## Hub

### config.yml

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

| Value              | Description                                                                           |
| ------------------ | ------------------------------------------------------------------------------------- |
| velocitymultiplier | How far to have the user flung forward in their seeing direction.                     |
| hub.world          | The world name for the Hub map server of which to summon the player to on connection. |
| hub.x              | The x position of which to summon the player to on connection.                        |
| hub.y              | The y position of which to summon the player to on connection.                        |
| hub.z              | The z position of which to summon the player to on connection.                        |
| hub.yaw            | The yaw position of which to summon the player to on connection.                      |
| hub.pitch          | The pitch position of which to summon the player to on connection.                    |

### welcome.yml

```
welcome:
  - "&e Welcome to My Server!"
newplayerwelcome:
  - "&e&l ========== My Server ========== &r"
  - "&9&l Website:&r http://myserver.net"
  - "&9&l Discord:&r http://myserver.net/discord"
  -  " "
  - "By joining My Server you agree to our Rules, TOS, and Privacy Policy."
  - "Make sure you read the rules. &cUse /rules to read the rules.&r"
```

| Value            | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| welcome          | Line-by-line the noted message to send the user on login as a known player. |
| newplayerwelcome | Line-by-line the noted message to send the user on login as new player.     |