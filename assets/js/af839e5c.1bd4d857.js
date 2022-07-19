"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6045],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return r?n.createElement(v,o(o({ref:t},p),{},{components:r})):n.createElement(v,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a=r(6010),i="tabItem_Ymn6";function o(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:r},t)}},5488:function(e,t,r){r.d(t,{Z:function(){return m}});var n=r(7462),a=r(7294),i=r(6010),o=r(2389),l=r(7392),s=r(7094),u=r(2466),p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t,r,o=e.lazy,d=e.block,m=e.defaultValue,v=e.values,f=e.groupId,b=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=v?v:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,l.l)(k,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var y=null===m?m:null!=(t=null!=m?m:null==(r=h.find((function(e){return e.props.default})))?void 0:r.props.value)?t:h[0].props.value;if(null!==y&&!k.some((function(e){return e.value===y})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+y+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=(0,s.U)(),w=N.tabGroupChoices,O=N.setTabGroupChoices,T=(0,a.useState)(y),E=T[0],x=T[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var C=w[f];null!=C&&C!==E&&k.some((function(e){return e.value===C}))&&x(C)}var D=function(e){var t=e.currentTarget,r=P.indexOf(t),n=k[r].value;n!==E&&(j(t),x(n),null!=f&&O(f,String(n)))},I=function(e){var t,r=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;r=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var i,o=P.indexOf(e.currentTarget)-1;r=null!=(i=P[o])?i:P[P.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",p)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},k.map((function(e){var t=e.value,r=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return P.push(e)},onKeyDown:I,onFocus:D,onClick:D},o,{className:(0,i.Z)("tabs__item",c,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=r?r:t)}))),o?(0,a.cloneElement)(h.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function m(e){var t=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},9581:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return b},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return v}});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=r(4695),l=r(5488),s=r(5162),u=["components"],p={title:"POST server/edit",description:"Edit an existing server.",sidebar_label:"Edit server",slug:"edit",sidebar_position:24},c='<Highlight color="#FF6E26">POST</Highlight> `server/edit`',d={unversionedId:"products/zander/api/server/edit",id:"products/zander/api/server/edit",title:"POST server/edit",description:"Edit an existing server.",source:"@site/docs/products/zander/api/server/edit.mdx",sourceDirName:"products/zander/api/server",slug:"/products/zander/api/server/edit",permalink:"/docs/products/zander/api/server/edit",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/server/edit.mdx",tags:[],version:"current",sidebarPosition:24,frontMatter:{title:"POST server/edit",description:"Edit an existing server.",sidebar_label:"Edit server",slug:"edit",sidebar_position:24},sidebar:"tutorialSidebar",previous:{title:"Create server",permalink:"/docs/products/zander/api/server/create"},next:{title:"Delete server",permalink:"/docs/products/zander/api/server/delete"}},m={},v=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],f={toc:v};function b(e){var t=e.components,r=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-serveredit"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"server/edit")),(0,i.kt)("p",null,"Edit an existing server."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"serverId")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The ID of the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Display name for the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ipAddress")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","IP Address of the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"port")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","Port for the server."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"visible")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Whether it should be displayed on the /play page"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"position")," ",(0,i.kt)("em",{parentName:"p"},"integer"),(0,i.kt)("br",{parentName:"p"}),"\n","The display position the server should be on for the /play page"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing serverId",value:"second"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverId": 2,\n    "name": "Java",\n    "fqdn": "www.minecraft-server.com/java",\n    "ipAddress": "123.45.678.9",\n    "port": 1337,\n    "visible": true,\n    "position": 1\n}\n')),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"create"},(0,i.kt)("inlineCode",{parentName:"a"},"server/create")))),(0,i.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverId": 000000,\n    "name": "Java",\n    "fqdn": "www.minecraft-server.com/java",\n    "ipAddress": "123.45.678.9",\n    "port": 1337,\n    "visible": true,\n    "position": 1\n}\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);