"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=r.createContext({}),p=function(e){var t=r.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=a,k=c["".concat(d,".").concat(m)]||c[m]||s[m]||o;return n?r.createElement(k,i(i({ref:t},u),{},{components:n})):r.createElement(k,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=c;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4313:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const o={title:"Discord",description:"TODO",sidebar_label:"Discord",sidebar_position:1},i=void 0,l={unversionedId:"products/devoteMe/discord",id:"products/devoteMe/discord",title:"Discord",description:"TODO",source:"@site/docs/products/devoteMe/discord.md",sourceDirName:"products/devoteMe",slug:"/products/devoteMe/discord",permalink:"/docs/products/devoteMe/discord",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/devoteMe/discord.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{title:"Discord",description:"TODO",sidebar_label:"Discord",sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/docs/products/devoteMe/api"},next:{title:"Player Head Hunt",permalink:"/docs/products/playerHeadHunt/"}},d={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installation",id:"installation",level:2},{value:"Commands",id:"commands",level:2},{value:"Configuration",id:"configuration",level:2},{value:"config.json",id:"configjson",level:3},{value:"Environment Variables",id:"environment-variables",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Please be aware this application is in Beta")),(0,a.kt)("p",null,"The DevoteMe Discord is a module that serves the features of the DevoteMe suite."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Have an issue to report or need assistance with the Discord module? Jump over to our ",(0,a.kt)("a",{parentName:"p",href:"https://discord.gg/YRpakuYhJZ"},"Discord")," and ask in our ",(0,a.kt)("inlineCode",{parentName:"p"},"#devoteme")," forum channel.")),(0,a.kt)("h2",{id:"requirements"},"Requirements"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"NodeJS"),(0,a.kt)("li",{parentName:"ul"},"A Discord Bot token"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"[Optional]")," A running copy of the API.")),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Download our Discord module from ",(0,a.kt)("a",{parentName:"li",href:"/docs/products/devoteMe/#discord"},"here"),"."),(0,a.kt)("li",{parentName:"ul"},"Open a new terminal window and run ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i")," to install all packages."),(0,a.kt)("li",{parentName:"ul"},"Configure the ",(0,a.kt)("a",{parentName:"li",href:"#configjson"},"config.json")," using the table below."),(0,a.kt)("li",{parentName:"ul"},"Configure the ",(0,a.kt)("a",{parentName:"li",href:"#enviroment-variables"},".env")," using the table below."),(0,a.kt)("li",{parentName:"ul"},"Use ",(0,a.kt)("inlineCode",{parentName:"li"},"npm start")," to start the API.")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Command"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Command Use"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/devotion"),(0,a.kt)("td",{parentName:"tr",align:null},"Receive the Devotion for day."),(0,a.kt)("td",{parentName:"tr",align:null},"/devotion")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"/votd"),(0,a.kt)("td",{parentName:"tr",align:null},"Receive the Verse Of The Day."),(0,a.kt)("td",{parentName:"tr",align:null},"/votd")))),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("h3",{id:"configjson"},"config.json"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discord.guildID"),(0,a.kt)("td",{parentName:"tr",align:null},"The Guild ID of your Discord (find by right clicking your Guild with Developer Mode enabled)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discord.channel.devotion"),(0,a.kt)("td",{parentName:"tr",align:null},"The Channel ID of where you would like your Devotions to be sent to (find by right clicking your Guild with Developer Mode enabled)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"discord.channel.votd"),(0,a.kt)("td",{parentName:"tr",align:null},"The Channel ID of where you would like your Verse of The Day to be sent to (find by right clicking your Guild with Developer Mode enabled)")))),(0,a.kt)("h3",{id:"environment-variables"},"Environment Variables"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Variable"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"DISCORDAPIKEY"),(0,a.kt)("td",{parentName:"tr",align:null},"Your Discord Bot API key which you can generate from ",(0,a.kt)("a",{parentName:"td",href:"%5Bhttps://discord.com/developers%5D(https://discord.com/developers)"},"here")),(0,a.kt)("td",{parentName:"tr",align:null})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"APIURL"),(0,a.kt)("td",{parentName:"tr",align:null},"The URL to the API"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("a",{parentName:"td",href:"https://api.devoteme.modularsoft.org/"},"https://api.devoteme.modularsoft.org/"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"TZ"),(0,a.kt)("td",{parentName:"tr",align:null},"The Timezone you operate in which you can obtain from ",(0,a.kt)("a",{parentName:"td",href:"%5Bhttps://docs.trifacta.com/display/DP/Supported+Time+Zone+Values%5D(https://docs.trifacta.com/display/DP/Supported+Time+Zone+Values)"},"here, under Time Zone Value")),(0,a.kt)("td",{parentName:"tr",align:null},"Australia/Sydney")))))}s.isMDXComponent=!0}}]);