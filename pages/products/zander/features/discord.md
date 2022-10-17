---
title: Discord
description: TODO
sidebar_label: Discord
sidebar_position: 5
---

:::caution
This feature is not yet fully implemented and is still in development, the documentation and feature is subject to change.
:::

The zander application has a helpful amount of commands and features for General, Community and Moderation use.

## Commands

### General
| Command  | Description                                               | Usage    |
|----------|-----------------------------------------------------------|----------|
| /policy  | Display Network policy (Rules, Terms, Privacy and Refund) | /policy  |
| /report  | Display link to reporting players                         | /report  |
| /rules   | Display link to the Network Rules                         | /rules   |
| /status  | Display Servers and number of users online                | /status  |
| /vote    | Display information for voting along with the Top Voter   | /vote    |
| /website | Display Network Website                                   | /website |

### Community
| Command   | Description                                                                      | Usage     |
|-----------|----------------------------------------------------------------------------------|-----------|
| /legoflip | This is a unique command for our Network which chooses between 2 avatar's heads. | /legoflip |

### Moderation
:::caution
Commands in this section require you to have your Discord account connected with the website, otherwise you cannot execute these commands.
:::

| Command      | Description                                                         | Usage                   |
|--------------|---------------------------------------------------------------------|-------------------------|
| /altcheck    | Find and display all users that have used/connected to the account. | /altcheck [username]    |
| /ipcheck     | Find and display all users that connected from a specific IP.       | /ipcheck [username]     |
| /namehistory | Display the name history of a specified user.                       | /namehistory [username] |

### Administration
:::caution
Commands in this section require you to have your Discord account connected with the website, otherwise you cannot execute these commands.
:::

*Table here*

## Events

### User Join Notification/Message
When a user joins the Discord server (or sucessfully verifies and is assigned a role) a custom join message can be sent to all in a configured channel under `welcomeChannel` in the config.json file.

There are set ones you can use but you can also add to in `joinMessages.json`.

:::note

When customising messages in `joinMessages.json` you can use the flag `%USERNAME%` to replace with the actual user's username.

:::