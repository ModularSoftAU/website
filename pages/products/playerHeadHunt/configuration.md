---
title: Configuration
description: TODO
sidebar_label: Configuration
sidebar_position: 3
---

## Database
To allow the plugin to connect and log data, you need to configure the following parameters in the database:
* `HOST`: This is the hostname or IP address of the database server.
* `PORT`: This is the port number that the database server is listening on.
* `USERNAME`: This is the username that the plugin will use to connect to the database.
* `PASSWORD`: This is the password that the plugin will use to authenticate with the database.

Make sure to provide the correct values for each parameter in the plugin's configuration file. This will ensure that the plugin can connect to the database and log data as expected.

## Setting up Regions
There are two types of regions in the plugin: `UPPERREGION` and `LOWERREGION`. To set up these regions, you need to specify the coordinates of both corners of the map and log them into the plugin's configuration file.

This allows WorldEdit to calculate the number of Heads within each region to determine their total. To set up a region, follow these steps:
* Identify the coordinates of the two corners of the map that define the region. These can be obtained using WorldEdit.
* Open the plugin's configuration file and locate the `UPPERREGION` or `LOWERREGION` section.
* Enter the coordinates of both corners of the map in the corresponding fields of the configuration file.
* Save the changes to the configuration file and restart the server to apply the new settings.

Once the regions are set up, the plugin will automatically calculate the number of Heads within each region and use this information to determine their total. This can be useful for tracking progress or setting goals for players within the region.

*Insert a good picture of the hub with squares*

## Head
The head total represents the total number of heads available in the game. It is calculated automatically by the server when it starts up and can also be calculated using the `countheads` command.

### Head Block
By default, the head block is set to `PLAYER_HEAD` which means that players will need to collect the heads of other players in order to progress in the game. However, you can change the block to any other block of your choice by editing the `HEAD.HEADBLOCK` field in the plugin's configuration file.

### Respawn Timer
In order to prevent players from following other players to collect their heads, the plugin includes a respawn timer which causes the heads to disappear and reappear after a configurable amount of time. By default, this timer is set to 1200 ticks (1 minute), but you can change it by editing the `HEAD.RESPAWNTIMER` field in the configuration file.

### Skins
You can set custom skins for the heads in the game by specifying them in a list in the `HEAD.SKINS` field of the configuration file. It is important to ensure that the maximum number of skins specified in the `HEAD.SKINSMAX` field matches the number of skins in the list. This will ensure that the skins are used correctly in the game.

#### Easter Skin Examples
```
SKINS:
    0: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOGM1MGFlZTg4MDEzZThmYWY0MjdlMTlmM2I4OTgyOGI4NmJiZjAzZGQyZjE3YzRjNzYwZDFkZGUyMmRlMyJ9fX0="
    1: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYzc2NTk1ZWZmY2M1NjI3ZTg1YjE0YzljODgyNDY3MWI1ZWMyOTY1NjU5YzhjNDE3ODQ5YTY2Nzg3OGZhNDkwIn19fQ=="
    2: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTk5YzRlYTA0ZDhmZGUxM2QxMjRjYjJmNjc3M2I3MWY3YTQ3MjllZmY4NWE5NmNjMTU1ZjUyY2FkZjhlYzVlIn19fQ=="
    3: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMTIxM2Q2N2JjNzJmMzA4NTMzN2FiYzliZDgxMzczZWQ1ODk0MzVhYzJmMGU4MjliZWQ3YjMwNDBlZmI1NWEifX19"
    4: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZWFiNzY1NzkxZmYzMTRjMjVmNGIwZGY4ZTEyODAxMzYwZWQ1YzhjMzNhZWYwY2U1OTViZDA0Mjk3ZTQ3OWViIn19fQ=="
    5: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvYjM1M2M3OTRmZjY4MWM4YjM1NmE0ZDFmNmQ3NGQyYTUxYzFhNGZlYzUxNzY3ODI3OWYyZTNmMmFlM2IwOWZmNyJ9fX0="
    6: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvZjUwOTM3YjIxNTlmMGNlZWU0ZmFjZGQ0YWJmMzU4M2FjNTVkMjQ4NGNkMjUzNDc2MjE1MzU0ZDNkN2ZlNDUifX19"
    7: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOWUyMmE0ZTM5NTM3YTA0OWVhZWQ4NDcyZmY3NTAwZDRlZmE0ZmQ0NGVhOGNjNjQwMjQxNTk5MmUyZTc1ZGQxIn19fQ=="
    8: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvOGUzYmE1NGU0NmY0ZmNkOTI4MWVjNTkyYTVjODE3OTAxY2UzZjgxMTE4NWY3N2E5MzhjZjBjNjMzNDZlMGU2MiJ9fX0="
    9: "eyJ0ZXh0dXJlcyI6eyJTS0lOIjp7InVybCI6Imh0dHA6Ly90ZXh0dXJlcy5taW5lY3JhZnQubmV0L3RleHR1cmUvMWMwZDA0NDNhZGQ0OTA0N2YzNDg2NDRhYjJlNTYzNjE3ZTc5ZjI1N2I3MmY4NzM4N2UwNGRkZDZiMzAxODdmOSJ9fX0="
```

#### Christmas Skin Examples
*To provide later*

### Sound
There are sounds which are customisable and in variation with a lot of sounds to choose from for any of the events that happen in the player head hunt. You can find a full list of all of the Sounds [here](https://hub.spigotmc.org/javadocs/bukkit/org/bukkit/Sound.html)

## Customizing the Language
The language section of the plugin allows you to customize the words and phrases used in the plugin to better suit the needs of your server. This is useful if you want to change the default wording of the plugin to better match the theme of your event.

For example, if you are running an Easter event and don't want to use the word "Heads" you can customize it to say "Easter Eggs" instead. To customize the language, follow these steps:
* Open the plugin's configuration file and locate the language section.
* Review the default values of each field and customize them as needed.
* Save the changes to the configuration file and restart the server to apply the new settings.

Once the language is customized, the plugin will use the new words and phrases in place of the default wording. This can help to create a more cohesive experience for players and make the event more immersive.