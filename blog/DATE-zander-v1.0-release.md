---
title: Zander - version 1.0 Release
description: Zander release notes and changes for version 1.0.
slug: welcome
authors:
  - name: Ben Robson
    title: Founder & Developer at Modular Software
    url: https://github.com/benrobson
    image_url: https://github.com/benrobson.png
hide_table_of_contents: false
---

Hello Everyone,

We're releasing our first of many patch notes for Zander, a multi-

## Features

## Patch Notes

### Hub
* Added `/fly` command which can be applied to users via `zander.hub.fly`.
* Added a Hub Booster which can be placed as a Light Weighted Pressure plate which will allow players to be launched in the direction they're looking at with the configuration options set in the `config.yml` file.
* Added a player join event which: 
  * Cleared player's inventory of miscellaneous items upon joining.
  * Teleports the player to the Hub spawn point, if configured in the `config.yml`.
  * Gives the player a navigation compass and set the player's current slot to the navigation compass.
  * Sets off a celebratory firework and separate Message of the Day (MOTD) sent for new players as specified in `welcome.yml`.
  * Plays a random sound to the player upon joining.
  * Broadcasts a message announcing the player's join, if they are not vanished.
* Added `welcome.yml` to configure MOTD for players.
* Added a variant player join event which alters the Message of the Day (MOTD) for Christmas time between 24th and 25th of December.
* Add check to avoid players from infinate falling in void.
* Added a compass item to navigate to set Servers.
* Implemented Creature, Interaction and Hub prevention to stop Hub being damaged by players.

### Proxy
* Implemented /discord command which redirects player to Network discord.
* Implemented /ping command to test players connection to Proxy.
* Implemented /rules command which redirects player to Network discord.
* Implemented /website command which redirects player to Network website.
* Implemented a proxy-side connection for link and word filtering.
* Implemented Chat Event which checks chat messages for blocked content, sends a request to a filtering API, blocks messages containing restricted content and notifes the player, and sends approved messages to a Discord channel for Network Log monitoring.
* Implemented User Disconnection Event which checks if the player is still connected, sends a request to the API to destroy the player's session and sends a request to the API to notify Discord channel for Network Log monitoring of the leave event.
* Implemented User Login event which retrieves the player logging in, sends a request to the API to create a new user if they're new, sends a request to the API to start a session, including the player's unique ID and IP address and then sends a request to the API to notify Discord channel for Network Log monitoring of the join event.
* Implemented a Proxy Ping event which is displayed when players ping the server. It retrieves the MOTD from an API, applies formatting, and sets it as the server's description. If an error occurs, it falls back to a default MOTD specified in the `config.yml`.
* Implemented User Switch event which sends a request to the API to switch the player's session to the new server and sends a request to the API to notify Discord of the server switch for the Network log monitoring.
* Added a `config.yml` file for MOTD fallback and API connection.

### Web

#### API