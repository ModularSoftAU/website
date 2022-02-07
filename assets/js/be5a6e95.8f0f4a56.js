"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6877],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(n),f=r,m=d["".concat(c,".").concat(f)]||d[f]||u[f]||i;return n?a.createElement(m,o(o({ref:t},s),{},{components:n})):a.createElement(m,o({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4695:function(e,t,n){var a=n(7294);t.Z=function(e){var t=e.children,n=e.color;return a.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},8575:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return s},toc:function(){return u},default:function(){return f}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=n(4695),l=["components"],c={title:"POST anticheat/flag",description:"Flag a user via the anticheat and send to staff.",sidebar_label:"Flag a user",slug:"flag"},p='<Highlight color="',s={unversionedId:"api/anticheat/flag",id:"api/anticheat/flag",title:"POST anticheat/flag",description:"Flag a user via the anticheat and send to staff.",source:"@site/docs/api/anticheat/flag.mdx",sourceDirName:"api/anticheat",slug:"/api/anticheat/flag",permalink:"/docs/api/anticheat/flag",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/anticheat/flag.mdx",tags:[],version:"current",frontMatter:{title:"POST anticheat/flag",description:"Flag a user via the anticheat and send to staff.",sidebar_label:"Flag a user",slug:"flag"},sidebar:"tutorialSidebar",previous:{title:"Edit an alert",permalink:"/docs/api/alert/edit"},next:{title:"Get appeal comments",permalink:"/docs/api/appeal/$punishmentId/get"}},u=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:u};function f(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-anticheatflag"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," anticheat/flag"),(0,i.kt)("p",null,"Flag a user via the anticheat and send to staff."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"username")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"type")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The type of hack that the player has been flagged for."),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))}f.isMDXComponent=!0}}]);