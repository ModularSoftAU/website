---
title: Permissions
description: TODO
sidebar_label: Permissions
sidebar_position: 2
---

:::caution
The Zander application requires LuckPerms to be present as it ties heavily into the access of features inside of the Proxy and Web packages.
:::

:::caution
This application was developed with LuckPerms support only, support for all other permission plugins are not tested or supported.
:::

## Assigning Permissions
When you'd like a user to have Administrative access to a certain part of the application, you can use LuckPerms to do this. By using the LP Editor `/lp editor` you can assign the following permissions by user or by group and the users in those group and inheriting groups can access what you specify.

## Zander Permission Nodes
 Node                     | Description                                                
--------------------------|------------------------------------------------------------
 zander.web.dashboard     | Access the portal to manage applications.                  
 zander.web.announcements | Access and manage the announcements feature.               
 zander.web.application   | Access and manage the applications feature.                
 zander.web.knowledgebase | Access and manage the knowledgebase sections and articles. 
 zander.web.report        | Access and manage player reports.                          
 zander.web.server        | Access and manage Network Server listings.                 
 zander.web.event         | Access and manage the events feature.                      
 zander.web.rank          | Access and manage the ranks feature.                       

## Rank & Permissions
Ranks are not created and stored in the application, we take and derive this from LuckPerms itself. Using `meta` in LuckPerms we can specify the properties of many options in regards to ranks.

 Meta Property                | Description                                                                            
------------------------------|----------------------------------------------------------------------------------------
 meta.discordid.DISCORDROLEID | Specify a Discord Role ID for the rank associated with an existing Discord Role. 
 meta.isStaff                 | Specify whether rank is a staff related role.                                          
 meta.isDonator               | Specify whether rank is a donator-related role.                                        