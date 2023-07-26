---
title: Discord
description: TODO
sidebar_label: Discord
sidebar_position: 1
---

:::warning

Please be aware this application is in Beta

:::

The DevoteMe Discord is a module that serves the features of the DevoteMe suite.

:::note

Have an issue to report or need assistance with the Discord module? Jump over to our [Discord](https://discord.gg/YRpakuYhJZ) and ask in our `#devoteme` forum channel.

:::

## Requirements
- NodeJS
- A Discord Bot token
- **[Optional]** A running copy of the API.

## Installation
- Download our Discord module from [here](/docs/products/devoteMe/#discord).
- Open a new terminal window and run `npm i` to install all packages.
- Configure the [config.json](#configjson) using the table below.
- Configure the [.env](#enviroment-variables) using the table below.
- Use `npm start` to start the API.

## Commands
| Command   | Description                   | Command Use |
| --------- | ----------------------------- | ----------- |
| /devotion | Receive the Devotion for day. | /devotion   |
| /votd     | Receive the Verse Of The Day. | /votd       |


## Configuration

### config.json
| Variable                 | Description                                                                                                                                |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| discord.guildID          | The Guild ID of your Discord (find by right clicking your Guild with Developer Mode enabled)                                               |
| discord.channel.devotion | The Channel ID of where you would like your Devotions to be sent to (find by right clicking your Guild with Developer Mode enabled)        |
| discord.channel.votd     | The Channel ID of where you would like your Verse of The Day to be sent to (find by right clicking your Guild with Developer Mode enabled) |

### Environment Variables
| Variable      | Description                                                                                                                                                                                                             | Default                                                                        |
| ------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ |
| DISCORDAPIKEY | Your Discord Bot API key which you can generate from [here]([https://discord.com/developers](https://discord.com/developers))                                                                                           |                                                                                |
| APIURL        | The URL to the API                                                                                                                                                                                                      | [https://api.devoteme.modularsoft.org/](https://api.devoteme.modularsoft.org/) |
| TZ            | The Timezone you operate in which you can obtain from [here, under Time Zone Value]([https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values](https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values)) | Australia/Sydney                                                               |