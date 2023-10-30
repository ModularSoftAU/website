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

### Web

#### API