"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9289],{978:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>a});var t=i(4848),s=i(8453);const l={title:"Zander v1.0.0 Patch Notes",description:"Zander release notes and changes for version 1.0.0.",slug:"zander-1.0.0",authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png"},{name:"Jaedan",title:"Developer at Modular Software",url:"https://github.com/JaedanC",image_url:"https://github.com/JaedanC.png"},{name:"Aron",title:"Developer at Modular Software",url:"https://github.com/birdwing",image_url:"https://github.com/birdwing.png"}],hide_table_of_contents:!1},r=void 0,d={permalink:"/blog/zander-1.0.0",source:"@site/blog/zander/12-11-2023-zander-v1.0.0-release.md",title:"Zander v1.0.0 Patch Notes",description:"Zander release notes and changes for version 1.0.0.",date:"2024-08-23T21:04:42.000Z",tags:[],readingTime:6.22,hasTruncateMarker:!1,authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png",imageURL:"https://github.com/benrobson.png",key:null,page:null},{name:"Jaedan",title:"Developer at Modular Software",url:"https://github.com/JaedanC",image_url:"https://github.com/JaedanC.png",imageURL:"https://github.com/JaedanC.png",key:null,page:null},{name:"Aron",title:"Developer at Modular Software",url:"https://github.com/birdwing",image_url:"https://github.com/birdwing.png",imageURL:"https://github.com/birdwing.png",key:null,page:null}],frontMatter:{title:"Zander v1.0.0 Patch Notes",description:"Zander release notes and changes for version 1.0.0.",slug:"zander-1.0.0",authors:[{name:"Ben Robson",title:"Founder & Developer at Modular Software",url:"https://github.com/benrobson",image_url:"https://github.com/benrobson.png",imageURL:"https://github.com/benrobson.png"},{name:"Jaedan",title:"Developer at Modular Software",url:"https://github.com/JaedanC",image_url:"https://github.com/JaedanC.png",imageURL:"https://github.com/JaedanC.png"},{name:"Aron",title:"Developer at Modular Software",url:"https://github.com/birdwing",image_url:"https://github.com/birdwing.png",imageURL:"https://github.com/birdwing.png"}],hide_table_of_contents:!1},unlisted:!1,prevItem:{title:"Zander v1.1.0 Patch Notes",permalink:"/blog/zander-1.1.0"},nextItem:{title:"Zander v1.2.0 Patch Notes",permalink:"/blog/zander-1.2.0"}},o={authorsImageUrls:[void 0,void 0,void 0]},a=[{value:"Features",id:"features",level:2},{value:"Patch Notes",id:"patch-notes",level:2},{value:"Hub",id:"hub",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Web",id:"web",level:3},{value:"API",id:"api",level:4},{value:"Discord",id:"discord",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Hello Everyone,"}),"\n",(0,t.jsx)(n.p,{children:"We're releasing our first of many patch notes for Zander, a multi-platform Minecraft Server management tool. We have only implemented most of the basics but we are working towards implementing a full suite of features which will allow you to manage your Minecraft Server with ease."}),"\n",(0,t.jsx)(n.h2,{id:"features",children:"Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/products/zander/features/announcement",children:"Announcements"})," - Announcements is a feature that allows Administration to broadcast messages across your Server and Website and have linked in to external URLs if required."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/products/zander/features/application",children:"Applications"})," - Allows administrative users to create, edit and delete applications. Applications are used for things like Server Position applications and other Server roles."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/products/zander/features/discord",children:"Discord"})," - The Discord feature allows for moderation, community interaction and much more."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"/docs/products/zander/features/server",children:"Server"})," - Allows administrative users to add, edit and remove Servers. Adding a server will list the server on the ",(0,t.jsx)(n.code,{children:"/play"})," page and also list the server on the ",(0,t.jsx)(n.code,{children:"/play"})," command on Discord."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"patch-notes",children:"Patch Notes"}),"\n",(0,t.jsx)(n.h3,{id:"hub",children:"Hub"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"/fly"})," command which can be applied to users via ",(0,t.jsx)(n.code,{children:"zander.hub.fly"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Added a Hub Booster which can be placed as a Light Weighted Pressure plate which will allow players to be launched in the direction they're looking at with the configuration options set in the ",(0,t.jsx)(n.code,{children:"config.yml"})," file."]}),"\n",(0,t.jsxs)(n.li,{children:["Added a player join event which:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Cleared player's inventory of miscellaneous items upon joining."}),"\n",(0,t.jsxs)(n.li,{children:["Teleports the player to the Hub spawn point, if configured in the ",(0,t.jsx)(n.code,{children:"config.yml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Gives the player a navigation compass and set the player's current slot to the navigation compass."}),"\n",(0,t.jsxs)(n.li,{children:["Sets off a celebratory firework and separate Message of the Day (MOTD) sent for new players as specified in ",(0,t.jsx)(n.code,{children:"welcome.yml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Plays a random sound to the player upon joining."}),"\n",(0,t.jsx)(n.li,{children:"Broadcasts a message announcing the player's join, if they are not vanished."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Added ",(0,t.jsx)(n.code,{children:"welcome.yml"})," to configure MOTD for players."]}),"\n",(0,t.jsx)(n.li,{children:"Added a variant player join event which alters the Message of the Day (MOTD) for Christmas time between 24th and 25th of December."}),"\n",(0,t.jsx)(n.li,{children:"Add check to avoid players from infinite falling in void."}),"\n",(0,t.jsx)(n.li,{children:"Added a compass item to navigate to set Servers."}),"\n",(0,t.jsx)(n.li,{children:"Implemented Creature, Interaction and Hub prevention to stop Hub being damaged by players."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"proxy",children:"Proxy"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /discord command which redirects player to Network discord."}),"\n",(0,t.jsx)(n.li,{children:"Implemented /ping command to test players connection to Proxy."}),"\n",(0,t.jsx)(n.li,{children:"Implemented /rules command which redirects player to Network discord."}),"\n",(0,t.jsx)(n.li,{children:"Implemented /website command which redirects player to Network website."}),"\n",(0,t.jsx)(n.li,{children:"Implemented a proxy-side connection for link and word filtering."}),"\n",(0,t.jsx)(n.li,{children:"Implemented Chat Event which checks chat messages for blocked content, sends a request to a filtering API, blocks messages containing restricted content and notify the player, and sends approved messages to a Discord channel for Network Log monitoring."}),"\n",(0,t.jsx)(n.li,{children:"Implemented User Disconnection Event which checks if the player is still connected, sends a request to the API to destroy the player's session and sends a request to the API to notify Discord channel for Network Log monitoring of the leave event."}),"\n",(0,t.jsx)(n.li,{children:"Implemented User Login event which retrieves the player logging in, sends a request to the API to create a new user if they're new, sends a request to the API to start a session, including the player's unique ID and IP address and then sends a request to the API to notify Discord channel for Network Log monitoring of the join event."}),"\n",(0,t.jsxs)(n.li,{children:["Implemented a Proxy Ping event which is displayed when players ping the server. It retrieves the MOTD from an API, applies formatting, and sets it as the server's description. If an error occurs, it falls back to a default MOTD specified in the ",(0,t.jsx)(n.code,{children:"config.yml"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Implemented User Switch event which sends a request to the API to switch the player's session to the new server and sends a request to the API to notify Discord of the server switch for the Network log monitoring."}),"\n",(0,t.jsxs)(n.li,{children:["Added a ",(0,t.jsx)(n.code,{children:"config.yml"})," file for MOTD fallback and API connection."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"web",children:"Web"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented framework for website, Discord and API."}),"\n",(0,t.jsxs)(n.li,{children:["Implemented Feature toggling to be able to enable or disable a feature via ",(0,t.jsx)(n.code,{children:"features.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["Implemented filter of words and links and the ability to control via ",(0,t.jsx)(n.code,{children:"filter.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["Implemented ability to have random join messages for Discord which can be added to via ",(0,t.jsx)(n.code,{children:"joinMessages.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["Implemented a small language file to expand on for translatability in ",(0,t.jsx)(n.code,{children:"lang.json"})]}),"\n",(0,t.jsxs)(n.li,{children:["Added following front-facing routes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Home /"}),"\n",(0,t.jsx)(n.li,{children:"Play /play"}),"\n",(0,t.jsx)(n.li,{children:"Apply /apply"}),"\n",(0,t.jsx)(n.li,{children:"Terms Of Service /terms"}),"\n",(0,t.jsx)(n.li,{children:"Rules /rules"}),"\n",(0,t.jsx)(n.li,{children:"Privacy /privacy"}),"\n",(0,t.jsx)(n.li,{children:"Refund /refund"}),"\n",(0,t.jsx)(n.li,{children:"Login /login"}),"\n",(0,t.jsx)(n.li,{children:"Register /register (which is currently toggleable)"}),"\n",(0,t.jsx)(n.li,{children:"Logout /logout"}),"\n",(0,t.jsx)(n.li,{children:"Added /discord redirect."}),"\n",(0,t.jsx)(n.li,{children:"Added /webstore redirect."}),"\n",(0,t.jsx)(n.li,{children:"Added /knowledgebase redirect."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Implemented administration dashboard and routes:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Added /dashboard."}),"\n",(0,t.jsx)(n.li,{children:"Added /dashboard/announcements with the Announcement Editor to allow creation, deletion and ability to edit."}),"\n",(0,t.jsx)(n.li,{children:"Added /dashboard/applications with the Applications Editor to allow creation, deletion and ability to edit."}),"\n",(0,t.jsx)(n.li,{children:"Added /dashboard/servers with the Servers Editor to allow creation, deletion and ability to edit."}),"\n",(0,t.jsx)(n.li,{children:"Added /dashboard/logs to view application logs an actions."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"api",children:"API"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Have a look at our API documentation for information on routes functionality."}),"\n"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Announcement","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /get"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /edit"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /delete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Application","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /get"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /edit"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /delete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Server","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /get"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /get/users"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /edit"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /delete"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Session","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /destroy"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /switch"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Discord","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /switch"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /chat"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /join"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /leave"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Web","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /register/create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /configuration"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /statistics"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /logs/get"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["User","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Implemented /create"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /get"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Implemented /heartbeat"}),"\n",(0,t.jsx)(n.li,{children:"Implemented /filter"}),"\n",(0,t.jsx)(n.li,{children:"Added function to verify token against API."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"discord",children:"Discord"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Implemented the following commands:","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"legoflip"})," - A simple lego flip which generates 2 different avatar heads, a unique command for the community."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"play"})," - Display all Network servers to play on."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"policy"})," - Display Network policy (Rules, Terms, Privacy, and Refund)."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"rules"})," - Display link to the Network Rules."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"website"})," - Display link to the Network Website."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Implemented a filter listener connected to the filter API which checks incoming messages for prohibited content, using filters for links or phrases if enabled. If such content is detected, it sends a warning to the message sender. If an error occurs during this process, it is logged."}),"\n",(0,t.jsx)(n.li,{children:"Implemented a jokingly General Kenobi listener which checks if the message content includes the phrase \"hello there\" and if the condition is met, sent a message to the same channel saying 'General Kenobi'."}),"\n",(0,t.jsx)(n.li,{children:"Implemented a Guild Boosting event which find the premium status of the user, and sends a message to the specified welcome channel about thanking them for the boost."}),"\n",(0,t.jsxs)(n.li,{children:["Implemented a welcome user event which checks for a Verified user, and sends a welcome message specified in ",(0,t.jsx)(n.code,{children:"joinMessages.json"})," with a random HEX code to the welcome channel."]}),"\n",(0,t.jsx)(n.li,{children:"Implemented a message deletion event which checks for when a user deletes a message it creates an embed with details about the deleted message, including the author, channel, and content and sends to the specified admin log channel."}),"\n",(0,t.jsx)(n.li,{children:"Implemented a message edit event which checks for when a user edits a message it creates an embed with details about the edited message, including the author, channel, and content and sends to the specified admin log channel."}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>r,x:()=>d});var t=i(6540);const s={},l=t.createContext(s);function r(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);