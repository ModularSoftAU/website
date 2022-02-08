"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9568],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,v=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(v,o(o({ref:t},c),{},{components:n})):r.createElement(v,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),i=n(2389),o=n(9548),l=n(6010),u="tabItem_LplD";function s(e){var t,n,i,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,m=e.groupId,v=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=d?d:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(i=f[0])?void 0:i.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),y=g.tabGroupChoices,N=g.setTabGroupChoices,w=(0,a.useState)(k),O=w[0],T=w[1],E=[],x=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var C=y[m];null!=C&&C!==O&&h.some((function(e){return e.value===C}))&&T(C)}var P=function(e){var t=e.currentTarget,n=E.indexOf(t),r=h[n].value;r!==O&&(x(t),T(r),null!=m&&N(m,r))},j=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=E.indexOf(e.currentTarget)+1;n=E[r]||E[0];break;case"ArrowLeft":var a=E.indexOf(e.currentTarget)-1;n=E[a]||E[E.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},v)},h.map((function(e){var t=e.value,n=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return E.push(e)},onKeyDown:j,onFocus:P,onClick:P},i,{className:(0,l.Z)("tabs__item",u,null==i?void 0:i.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function c(e){var t=(0,i.Z)();return a.createElement(s,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},6647:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=n(4695),l=(n(9877),n(8215),["components"]),u={title:"POST event/create",description:"Create an event to be published.",sidebar_label:"Create an event",slug:"create"},s='<Highlight color="',c={unversionedId:"api/event/create",id:"api/event/create",title:"POST event/create",description:"Create an event to be published.",source:"@site/docs/api/event/create.mdx",sourceDirName:"api/event",slug:"/api/event/create",permalink:"/docs/api/event/create",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/event/create.mdx",tags:[],version:"current",frontMatter:{title:"POST event/create",description:"Create an event to be published.",sidebar_label:"Create an event",slug:"create"},sidebar:"tutorialSidebar",previous:{title:"Log user's server switch",permalink:"/docs/api/discord/switch"},next:{title:"Delete an event",permalink:"/docs/api/event/delete"}},p=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Examples",id:"examples",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"post-eventcreate"},(0,i.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,i.kt)("inlineCode",{parentName:"h1"},"event/create")),(0,i.kt)("p",null,"Create an event to be published."),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"name")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The display name for the event."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"icon")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","A link to an image that will be the icon to showcase the event."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"eventDateTime")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The date and time for the event."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hostingServer")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","The id of the server where the event will be hosted."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"information")," ",(0,i.kt)("em",{parentName:"p"},"string"),(0,i.kt)("br",{parentName:"p"}),"\n","Information about the event."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("h2",{id:"response"},"Response"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"TODO")))}m.isMDXComponent=!0}}]);