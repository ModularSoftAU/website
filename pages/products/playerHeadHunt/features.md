---
title: Features
description: TODO
sidebar_label: Features
sidebar_position: 2
---

## Gameplay
When a player right-clicks a Player Head, the coordinates are logged in a database and a number incremented in their name.

## Milestones
When a player finds over an X amount of heads, a message will broadcast to all online players that they have reached a milestone.
The milestones are hardcoded and at this time cannot be changed, these milestones are `10, 50, 100, 150, 200, 500`.

## Milestone Helmets
To symbolise to other people in the Head Hunt where people are at, every goal achieved in the table below is given a helmet to visualise how much someone has progressed in the Hunt.

| Number | Helmet    |
|--------|-----------|
| 50     | Leather   |
| 100    | Chainmail |
| 150    | Iron      |
| 200    | Gold      |
| 250    | Diamond   |
| 300    | Netherite |

## Head Collection Cooldown
To avoid hunters following other players to collect their heads, heads will disappear and reappear in a configurable option `HEAD.RESPAWNTIMER`
