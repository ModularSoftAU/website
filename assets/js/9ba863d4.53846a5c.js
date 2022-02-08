"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6887],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,v=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},9877:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(7462),a=r(7294),i=r(2389),o=r(9548),s=r(6010),l="tabItem_LplD";function c(e){var t,r,i,c=e.lazy,u=e.block,d=e.defaultValue,p=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=p?p:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(g,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var b=null===d?d:null!=(t=null!=d?d:null==(r=f.find((function(e){return e.props.default})))?void 0:r.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==b&&!g.some((function(e){return e.value===b})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+b+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,o.UB)(),y=k.tabGroupChoices,N=k.setTabGroupChoices,w=(0,a.useState)(b),O=w[0],T=w[1],x=[],E=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==O&&g.some((function(e){return e.value===C}))&&T(C)}var j=function(e){var t=e.currentTarget,r=x.indexOf(t),n=g[r].value;n!==O&&(E(t),T(n),null!=m&&N(m,n))},M=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n=x.indexOf(e.currentTarget)+1;r=x[n]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;r=x[a]||x[x.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":u},v)},g.map((function(e){var t=e.value,r=e.label,i=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:M,onFocus:j,onClick:j},i,{className:(0,s.Z)("tabs__item",l,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=r?r:t)}))),c?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function u(e){var t=(0,i.Z)();return a.createElement(c,(0,n.Z)({key:String(t)},e))}},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},1141:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return u},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return f}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4695),s=r(9877),l=r(8215),c=["components"],u={title:"POST discord/directMessage",description:"Log a message to a Discord channel when user sends a direct message to another user.",sidebar_label:"Log direct message",slug:"directMessage"},d='<Highlight color="',p={unversionedId:"api/discord/directMessage",id:"api/discord/directMessage",title:"POST discord/directMessage",description:"Log a message to a Discord channel when user sends a direct message to another user.",source:"@site/docs/api/discord/directMessage.mdx",sourceDirName:"api/discord",slug:"/api/discord/directMessage",permalink:"/docs/api/discord/directMessage",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/discord/directMessage.mdx",tags:[],version:"current",frontMatter:{title:"POST discord/directMessage",description:"Log a message to a Discord channel when user sends a direct message to another user.",sidebar_label:"Log direct message",slug:"directMessage"},sidebar:"tutorialSidebar",previous:{title:"Log chat",permalink:"/docs/api/discord/chat"},next:{title:"Log user joining",permalink:"/docs/api/discord/join"}},m=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2}],v={toc:m};function f(e){var t=e.components,r=(0,a.Z)(e,c);return(0,i.kt)("wrapper",(0,n.Z)({},v,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-discorddirectmessage"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"discord/directMessage")),(0,i.kt)("p",null,"Log a message to a Discord channel when user sends a direct message to another user."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"senderUsername")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Sender's IGN."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"recipientUsername")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Recipient's IGN."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"server")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Server display name."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"content")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Chat content."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(s.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,i.kt)(l.Z,{value:"first",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "senderUsername": "shadowolfyt",\n    "recipientUsername": "Camemes",\n    "server": "Survival",\n    "content": "I Love Minecraft"\n}\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,i.kt)("p",null,"A Discord message will be created that says,"),(0,i.kt)("p",null,'"\ud83d\udce7 | ',(0,i.kt)("strong",{parentName:"p"},"Survival")," | ",(0,i.kt)("inlineCode",{parentName:"p"},"shadowolfyt")," ",(0,i.kt)("strong",{parentName:"p"},"=>")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Camemes"),' :: I Love Minecraft"')),(0,i.kt)(l.Z,{value:"second",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);