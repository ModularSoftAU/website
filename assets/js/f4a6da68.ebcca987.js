"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8192],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return m}});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(r),m=i,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,o(o({ref:t},l),{},{components:r})):n.createElement(h,o({ref:t},l))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:i,o[1]=p;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4695:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.color;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},2801:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return d},default:function(){return m}});var n=r(7462),i=r(3366),a=(r(7294),r(3905)),o=r(4695),p=["components"],c={title:"POST shoppingdistrictdirectory/create",description:"Create a shop listing in the directory.",sidebar_label:"Create a shop",slug:"create"},s='<Highlight color="',l={unversionedId:"api/shoppingdistrictdirectory/create",id:"api/shoppingdistrictdirectory/create",title:"POST shoppingdistrictdirectory/create",description:"Create a shop listing in the directory.",source:"@site/docs/api/shoppingdistrictdirectory/create.mdx",sourceDirName:"api/shoppingdistrictdirectory",slug:"/api/shoppingdistrictdirectory/create",permalink:"/docs/api/shoppingdistrictdirectory/create",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/api/shoppingdistrictdirectory/create.mdx",tags:[],version:"current",frontMatter:{title:"POST shoppingdistrictdirectory/create",description:"Create a shop listing in the directory.",sidebar_label:"Create a shop",slug:"create"},sidebar:"tutorialSidebar",previous:{title:"Edit an item in a shop",permalink:"/docs/api/shoppingdistrictdirectory/$shopId/edit/item"},next:{title:"Delete a shop",permalink:"/docs/api/shoppingdistrictdirectory/delete"}},d=[{value:"Parameters",id:"parameters",children:[],level:2},{value:"Response",id:"response",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],u={toc:d};function m(e){var t=e.components,r=(0,i.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-shoppingdistrictdirectorycreate"},(0,a.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," shoppingdistrictdirectory/create"),(0,a.kt)("p",null,"Create a shop listing in the directory."),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shopName")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","The display name for the shop."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shopDescription")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","A description of the shop."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"shopCreatorId")," ",(0,a.kt)("em",{parentName:"p"},"integer"),(0,a.kt)("br",{parentName:"p"}),"\n","The ID of the user that has created the listing."),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))}m.isMDXComponent=!0}}]);