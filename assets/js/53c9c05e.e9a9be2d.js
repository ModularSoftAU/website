"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[85],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return f}});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(t),f=a,m=d["".concat(s,".").concat(f)]||d[f]||p[f]||i;return t?n.createElement(m,o(o({ref:r},c),{},{components:t})):n.createElement(m,o({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=t[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5162:function(e,r,t){t.d(r,{Z:function(){return o}});var n=t(7294),a=t(6010),i="tabItem_Ymn6";function o(e){var r=e.children,t=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(i,o),hidden:t},r)}},5488:function(e,r,t){t.d(r,{Z:function(){return f}});var n=t(7462),a=t(7294),i=t(6010),o=t(2389),l=t(7392),s=t(7094),u=t(2466),c="tabList__CuJ",p="tabItem_LNqP";function d(e){var r,t,o=e.lazy,d=e.block,f=e.defaultValue,m=e.values,v=e.groupId,b=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=m?m:g.map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes}})),h=(0,l.l)(y,(function(e,r){return e.value===r.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===f?f:null!=(r=null!=f?f:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?r:g[0].props.value;if(null!==k&&!y.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+y.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var w=(0,s.U)(),N=w.tabGroupChoices,O=w.setTabGroupChoices,T=(0,a.useState)(k),E=T[0],x=T[1],P=[],j=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=N[v];null!=C&&C!==E&&y.some((function(e){return e.value===C}))&&x(C)}var Z=function(e){var r=e.currentTarget,t=P.indexOf(r),n=y[t].value;n!==E&&(j(r),x(n),null!=v&&O(v,String(n)))},z=function(e){var r,t=null;switch(e.key){case"ArrowRight":var n,a=P.indexOf(e.currentTarget)+1;t=null!=(n=P[a])?n:P[0];break;case"ArrowLeft":var i,o=P.indexOf(e.currentTarget)-1;t=null!=(i=P[o])?i:P[P.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:(0,i.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":d},b)},y.map((function(e){var r=e.value,t=e.label,o=e.attributes;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:E===r?0:-1,"aria-selected":E===r,key:r,ref:function(e){return P.push(e)},onKeyDown:z,onFocus:Z,onClick:Z},o,{className:(0,i.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":E===r})}),null!=t?t:r)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},g.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==E})}))))}function f(e){var r=(0,o.Z)();return a.createElement(d,(0,n.Z)({key:String(r)},e))}},4695:function(e,r,t){var n=t(7294);r.Z=function(e){var r=e.children,t=e.color;return n.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},r)}},427:function(e,r,t){t.r(r),t.d(r,{assets:function(){return f},contentTitle:function(){return p},default:function(){return b},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var n=t(7462),a=t(3366),i=(t(7294),t(3905)),o=t(4695),l=t(5488),s=t(5162),u=["components"],c={title:"POST web/register/verify",description:"Verify a new registration for a user.",sidebar_label:"Verify registration",slug:"register/verify",sidebar_position:33},p='<Highlight color="#FF6E26">POST</Highlight> `web/register/verify`',d={unversionedId:"products/zander/api/web/register-verify",id:"products/zander/api/web/register-verify",title:"POST web/register/verify",description:"Verify a new registration for a user.",source:"@site/docs/products/zander/api/web/register-verify.mdx",sourceDirName:"products/zander/api/web",slug:"/products/zander/api/web/register/verify",permalink:"/docs/products/zander/api/web/register/verify",draft:!1,editUrl:"https://github.com/ModularEnigma/docs/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/web/register-verify.mdx",tags:[],version:"current",sidebarPosition:33,frontMatter:{title:"POST web/register/verify",description:"Verify a new registration for a user.",sidebar_label:"Verify registration",slug:"register/verify",sidebar_position:33},sidebar:"tutorialSidebar",previous:{title:"Register user",permalink:"/docs/products/zander/api/web/register/create"},next:{title:"Login user",permalink:"/docs/products/zander/api/web/login"}},f={},m=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],v={toc:m};function b(e){var r=e.components,t=(0,a.Z)(e,u);return(0,i.kt)("wrapper",(0,n.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-webregisterverify"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"web/register/verify")),(0,i.kt)("p",null,"Verify a new registration for a user."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"username")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"verificationToken")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Token of the registering user, to be obtained via email."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,i.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt",\n    "verificationToken": "1254736254768265" // From their email\n}\n')),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,i.kt)("p",null,"shadowolfyt's account has now been verified.")),(0,i.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))))}b.isMDXComponent=!0}}]);