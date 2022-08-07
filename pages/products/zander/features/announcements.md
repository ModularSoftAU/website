---
title: Announcements
description: TODO
sidebar_label: Announcements
sidebar_position: 1
---

The purpose of this feature is to create and display announcements across the Network on a rotational basis.

## Types of Annnouncements

### Tips
Tips are shown as in-game, network-wide broadcasts for things like linking to the Website, to acknowledgements for the rules or other commands.

### MOTD
MOTD (Message of the Day) announcements display when the Minecraft client pings the Server on the Multiplayer screen.

### Website
Web Banners are global announcements that appear across the entire site for things like events, Network Maintainece and etc.

## Creating Announcements
Creating, editing and deleting announcements is fairly simple. You will need access to the dashboard using `zander.web.dashboard` and have the `zander.web.announcements` permission node.

![](https://i.gyazo.com/fd28d699f7dcb9bc888053cd480de811.png)


 Field                   | Description                                                                                                              
-------------------------|--------------------------------------------------------------------------------------------------------------------------
 Announcement Slug       | The unique identifier for the announcement.                                                                              
 Announcement Type       | The type of announcement (refer to Types of Announcements)                                                               
 Banner Body             | The content of the Website banner (only applies to web-type announcements)                                               
 Colour Message Format   | The & type format for Minecraft colour formatting (only applies to motd and tip type announcements)                      
 Announcement Link       | The redirection link to take the user to if they click the announcement (only applies to tip and web-type announcements) 
 Announcement Visibility | Whether the announcement should be in the rotation.                                                                                                                                                  |