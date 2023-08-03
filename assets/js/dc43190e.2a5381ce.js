"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4671],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):u(u({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=s(r),f=a,m=p["".concat(i,".").concat(f)]||p[f]||d[f]||o;return r?n.createElement(m,u(u({ref:t},c),{},{components:r})):n.createElement(m,u({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,u=new Array(o);u[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,u[1]=l;for(var s=2;s<o;s++)u[s]=r[s];return n.createElement.apply(null,u)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>u});var n=r(7294),a=r(6010);const o="tabItem_Ymn6";function u(e){let{children:t,hidden:r,className:u}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,u),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>q});var n=r(7462),a=r(7294),o=r(6010),u=r(6775),l=r(1980),i=r(7392),s=r(12);function c(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function d(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,i.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function p(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,u.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,o=d(e),[u,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[i,c]=f({queryString:r,groupId:n}),[m,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,s.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:n}),h=(()=>{const e=i??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:u,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=r(2466),h=r(2389);const v="tabList__CuJ",y="tabItem_LNqP";function g(e){let{className:t,block:r,selectedValue:u,selectValue:l,tabValues:i}=e;const s=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),d=e=>{const t=e.currentTarget,r=s.indexOf(t),n=i[r].value;n!==u&&(c(t),l(n))},p=e=>{var t;let r=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=s.indexOf(e.currentTarget)+1;r=s[t]??s[0];break}case"ArrowLeft":{const t=s.indexOf(e.currentTarget)-1;r=s[t]??s[s.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},i.map((e=>{let{value:t,label:r,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:u===t?0:-1,"aria-selected":u===t,key:t,ref:e=>s.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",y,null==l?void 0:l.className,{"tabs__item--active":u===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:n}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function w(e){const t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(g,(0,n.Z)({},e,t)),a.createElement(k,(0,n.Z)({},e,t)))}function q(e){const t=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},2515:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>i,toc:()=>c});var n=r(7462),a=(r(7294),r(3905)),o=r(4695);r(4866),r(5162);const u={title:"POST friend/request",description:"Send a user a friend request.",sidebar_label:"Send friend request",slug:"request",sidebar_position:0},l='<Highlight color="#FF6E26">POST</Highlight> friend/request',i={unversionedId:"products/zander/api/friend/request",id:"products/zander/api/friend/request",title:"POST friend/request",description:"Send a user a friend request.",source:"@site/docs/products/zander/api/friend/request.mdx",sourceDirName:"products/zander/api/friend",slug:"/products/zander/api/friend/request",permalink:"/docs/products/zander/api/friend/request",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/friend/request.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"POST friend/request",description:"Send a user a friend request.",sidebar_label:"Send friend request",slug:"request",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Delete event",permalink:"/docs/products/zander/api/event/delete"},next:{title:"Accept friend request",permalink:"/docs/products/zander/api/friend/accept"}},s={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-friendrequest"},(0,a.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"friend/request")),(0,a.kt)("p",null,"Send a user a friend request."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"requestee")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","The user that has requested to be friends."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"requestedUser")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","The user that the requestee has requested to be friends with."),(0,a.kt)("h2",{id:"examples"},"Examples"))}p.isMDXComponent=!0}}]);