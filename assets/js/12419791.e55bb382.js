"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8657],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),l=n(2389),o=n(9548),i=n(6010),s="tabItem_LplD";function u(e){var t,n,l,u=e.lazy,c=e.block,p=e.defaultValue,m=e.values,d=e.groupId,f=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(b,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=v[0])?void 0:l.props.value;if(null!==k&&!b.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(k),T=w[0],O=w[1],x=[],C=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var E=y[d];null!=E&&E!==T&&b.some((function(e){return e.value===E}))&&O(E)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=b[n].value;r!==T&&(C(t),O(r),null!=d&&N(d,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},f)},b.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:function(e){return x.push(e)},onKeyDown:D,onFocus:j,onClick:j},l,{className:(0,i.Z)("tabs__item",s,null==l?void 0:l.className,{"tabs__item--active":T===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===T}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})}))))}function c(e){var t=(0,l.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return d},default:function(){return v}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=n(4695),i=n(9877),s=n(8215),u=["components"],c={title:"POST alert/create",description:"Create an alert on Network platforms.",sidebar_label:"Create an alert",slug:"create"},p='<Highlight color="',m={unversionedId:"api/alert/create",id:"api/alert/create",title:"POST alert/create",description:"Create an alert on Network platforms.",source:"@site/docs/api/alert/create.mdx",sourceDirName:"api/alert",slug:"/api/alert/create",permalink:"/docs/api/alert/create",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/alert/create.mdx",tags:[],version:"current",frontMatter:{title:"POST alert/create",description:"Create an alert on Network platforms.",sidebar_label:"Create an alert",slug:"create"},sidebar:"tutorialSidebar",previous:{title:"Contributing",permalink:"/docs/contributing"},next:{title:"Delete an alert",permalink:"/docs/api/alert/delete"}},d=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Response",id:"response-1",children:[],level:2}],f={toc:d};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,l.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"post-alertcreate"},(0,l.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,l.kt)("inlineCode",{parentName:"h1"},"alert/create")),(0,l.kt)("p",null,"Create an alert on Network platforms."),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"alertSlug")," ",(0,l.kt)("em",{parentName:"p"},"string"),(0,l.kt)("br",{parentName:"p"}),"\n","Unique Identifier."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"body")," ",(0,l.kt)("em",{parentName:"p"},"string"),(0,l.kt)("br",{parentName:"p"}),"\n","The text or message you would like to send in the format you specified."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"motd")," ",(0,l.kt)("em",{parentName:"p"},"boolean"),(0,l.kt)("br",{parentName:"p"}),"\n","Is the alert meant for the message of the day?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"tips")," ",(0,l.kt)("em",{parentName:"p"},"boolean"),(0,l.kt)("br",{parentName:"p"}),"\n","Is this an alert to rotate in game?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"web")," ",(0,l.kt)("em",{parentName:"p"},"boolean"),(0,l.kt)("br",{parentName:"p"}),"\n","Is this a website banner alert to display globally?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"link")," ",(0,l.kt)("strong",{parentName:"p"},"optional")," ",(0,l.kt)("em",{parentName:"p"},"string"),(0,l.kt)("br",{parentName:"p"}),"\n","If tips or web is selected, when clicked, where should it redirect the user?"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"motdFormat")," ",(0,l.kt)("strong",{parentName:"p"},"optional")," ",(0,l.kt)("em",{parentName:"p"},"string"),(0,l.kt)("br",{parentName:"p"}),"\n","If motd is selected, what is the & colour specific format?"),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(i.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Typical - MOTD",value:"second"},{label:"Invalid",value:"third"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "alertSlug": "joinCommunityDiscord",\n    "body": "Join our community Discord",\n    "motd": false,\n    "tips": true,\n    "web": false,\n    "link": "https://craftingforchrist.net/discord",\n}\n')),(0,l.kt)("h2",{id:"response"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,l.kt)("p",null,'A new alert has been created. This alert will rotate in-game with the message\n"Join our community Discord". If clicked on it will send you to the discord.')),(0,l.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "alertSlug": "joinCommunityDiscord",\n    "body": "Join our community Discord",\n    "motd": true,\n    "tips": false,\n    "web": false,\n    "motdFormat": "&aJoin our community Discord"\n}\n')),(0,l.kt)("h2",{id:"response-1"},"Response"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,l.kt)("p",null,"A new alert has been created. This alert is message of the day and will be\ncoloured.")),(0,l.kt)(s.Z,{value:"third",mdxType:"TabItem"},(0,l.kt)("p",null,(0,l.kt)("em",{parentName:"p"},"TODO")))))}v.isMDXComponent=!0}}]);