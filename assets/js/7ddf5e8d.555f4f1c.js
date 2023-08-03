"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8240],{3905:(e,r,t)=>{t.d(r,{Zo:()=>c,kt:()=>f});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),u=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},c=function(e){var r=u(e.components);return n.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return t?n.createElement(m,i(i({ref:r},c),{},{components:t})):n.createElement(m,i({ref:r},c))}));function f(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},5162:(e,r,t)=>{t.d(r,{Z:()=>i});var n=t(7294),a=t(6010);const o="tabItem_Ymn6";function i(e){let{children:r,hidden:t,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o,i),hidden:t},r)}},4866:(e,r,t)=>{t.d(r,{Z:()=>O});var n=t(7462),a=t(7294),o=t(6010),i=t(6775),l=t(1980),s=t(7392),u=t(12);function c(e){return function(e){var r;return(null==(r=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:r.filter(Boolean))??[]}(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}function d(e){const{values:r,children:t}=e;return(0,a.useMemo)((()=>{const e=r??c(t);return function(e){const r=(0,s.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,i.k6)(),o=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const r=new URLSearchParams(n.location.search);r.set(o,e),n.replace({...n.location,search:r.toString()})}),[o,n])]}function m(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:o}))),[s,c]=f({queryString:t,groupId:n}),[m,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,o]=(0,u.Nk)(t);return[n,(0,a.useCallback)((e=>{t&&o.set(e)}),[t,o])]}({groupId:n}),h=(()=>{const e=s??m;return p({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{h&&l(h)}),[h]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),c(e),b(e)}),[c,b,o]),tabValues:o}}var b=t(2466),h=t(2389);const v="tabList__CuJ",g="tabItem_LNqP";function y(e){let{className:r,block:t,selectedValue:i,selectValue:l,tabValues:s}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,b.o5)(),d=e=>{const r=e.currentTarget,t=u.indexOf(r),n=s[t].value;n!==i&&(c(r),l(n))},p=e=>{var r;let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=u.indexOf(e.currentTarget)+1;t=u[r]??u[0];break}case"ArrowLeft":{const r=u.indexOf(e.currentTarget)-1;t=u[r]??u[u.length-1];break}}null==(r=t)||r.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":t},r)},s.map((e=>{let{value:r,label:t,attributes:l}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:i===r?0:-1,"aria-selected":i===r,key:r,ref:e=>u.push(e),onKeyDown:p,onClick:d},l,{className:(0,o.Z)("tabs__item",g,null==l?void 0:l.className,{"tabs__item--active":i===r})}),t??r)})))}function k(e){let{lazy:r,children:t,selectedValue:n}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,r)=>(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==n}))))}function w(e){const r=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",v)},a.createElement(y,(0,n.Z)({},e,r)),a.createElement(k,(0,n.Z)({},e,r)))}function O(e){const r=(0,h.Z)();return a.createElement(w,(0,n.Z)({key:String(r)},e))}},4695:(e,r,t)=>{t.d(r,{Z:()=>a});var n=t(7294);const a=e=>{let{children:r,color:t}=e;return n.createElement("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},r)}},9019:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var n=t(7462),a=(t(7294),t(3905)),o=t(4695);t(4866),t(5162);const i={title:"POST user/profile/$username/authenticate/discord",description:"Link user's Discord account to profile.",sidebar_label:"Link Discord",slug:"discord",sidebar_position:9},l='<Highlight color="#FF6E26">POST</Highlight> user/profile/$username/authenticate/discord',s={unversionedId:"products/zander/api/user/profile/discord",id:"products/zander/api/user/profile/discord",title:"POST user/profile/$username/authenticate/discord",description:"Link user's Discord account to profile.",source:"@site/docs/products/zander/api/user/profile/discord.mdx",sourceDirName:"products/zander/api/user/profile",slug:"/products/zander/api/user/profile/discord",permalink:"/docs/products/zander/api/user/profile/discord",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/user/profile/discord.mdx",tags:[],version:"current",sidebarPosition:9,frontMatter:{title:"POST user/profile/$username/authenticate/discord",description:"Link user's Discord account to profile.",sidebar_label:"Link Discord",slug:"discord",sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"Link Spotify",permalink:"/docs/products/zander/api/user/profile/spotify"},next:{title:"Create notification",permalink:"/docs/products/zander/api/user/notification/create"}},u={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Usage",id:"usage",level:2}],d={toc:c};function p(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-userprofileusernameauthenticatediscord"},(0,a.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"user/profile/$username/authenticate/discord")),(0,a.kt)("p",null,"Link user's Discord account to profile."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"username")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))}p.isMDXComponent=!0}}]);