---
title: Configuration
description: Configuration details for the Zander application.
sidebar_label: Configuration
sidebar_position: 2
---

## Web/API

### .env (Enviroment Variables)

```
PORT=8080
siteAddress=http://localhost:8080
TZ=Australia/Sydney

discordAPIKey=APIKEY
apiKey=KEY

sessionCookieSecret=THISISNOTVERYSECRETANDITHINKYOUSHOULDCHANGEIT

databaseHost=database.example.com
databasePort=4052
databaseUser=USERNAME
databasePassword=PASSWORD
databaseName=DATABASE
```

| Value               | Description                                                                                                          |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| PORT                | The port which the application runs off (if you're using a deployment platform like Heroku, this won't be relevant). |
| siteAddress         | The website/domain the application is being deployed to (ensure you don't add a "/")                                 |
| TZ                  | The timezone of where you are based.                                                                                 |
| discordAPIKey       | The API for your Discord bot.                                                                                        |
| apiKey              | The API key for the other plugins to connect into (ensure this is secure, and long!)                                 |
| sessionCookieSecret | The secret token for user sessions  (ensure this is secure, and long!)                                               |
| databaseHost        | The IP address or server address for the MySQL Server.                                                               |
| databasePort        | The port for the MySQL Server.                                                                                       |
| databaseUser        | The username for the MySQL Server account.                                                                           |
| databasePassword    | The password for the MySQL Server account.                                                                           |
| databaseName        | The name of the Zander database.                                                                                     |

### config.json

```
{
    "debug": false,
    "siteConfiguration": {
        "siteName": "My Server",
        "tagline": "MyServer, A Gaming Community",
        "email": "support@myserver.net",
        "policy": {
            "termsOfService": "https://raw.githubusercontent.com/MYSERVER/Legal/master/terms.md",
            "rules": "https://raw.githubusercontent.com/MYSERVER/Legal/master/rules.md",
            "privacy": "https://raw.githubusercontent.com/MYSERVER/Legal/master/privacy.md",
            "refund": "https://raw.githubusercontent.com/MYSERVER/Legal/master/refund.md"
        },
        "platforms": {
            "webstore": "https://tebex.io/",
            "discord": "https://discord.com/",
            "facebook": "https://www.facebook.com/",
            "twitter": "https://twitter.com/",
            "instagram": "https://instagram.com/",
            "reddit": "https://www.reddit.com/",
            "twitch": "https://www.twitch.tv/",
            "youtube": "https://www.youtube.com/",
            "linkedin": "https://www.linkedin.com/",
            "tiktok": "https://www.tiktok.com/"
        }
    },
    "discord": {
        "guildId": "GUILDID",
        "channels": {
            "welcomeChannel": "CHANNELID",
            "networkChatLog": "CHANNELID",
            "adminLog": "CHANNELID"
        },
        "roles": {
            "verified": "ROLEID"
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
The features file allows you to pick and choose what you want to use for your community.

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