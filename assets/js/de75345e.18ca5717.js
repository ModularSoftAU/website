"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3710],{5097:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=r(5893),n=r(1151),s=r(4695);r(3913),r(2425);const i={title:"GET web/statistics",description:"Obtain site statistics for the Network.",sidebar_label:"Get Statistics",slug:"statistics",sidebar_position:4},o="GET web/statistics",l={id:"products/zander/api/web/statistics",title:"GET web/statistics",description:"Obtain site statistics for the Network.",source:"@site/docs/products/zander/api/web/statistics.mdx",sourceDirName:"products/zander/api/web",slug:"/products/zander/api/web/statistics",permalink:"/docs/products/zander/api/web/statistics",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/web/statistics.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"GET web/statistics",description:"Obtain site statistics for the Network.",sidebar_label:"Get Statistics",slug:"statistics",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Get Configuration",permalink:"/docs/products/zander/api/web/configuration"},next:{title:"Get Logs",permalink:"/docs/products/zander/api/web/get"}},u={},c=[{value:"Examples",id:"examples",level:2}];function d(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,n.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.h1,{id:"get-webstatistics",children:[(0,a.jsx)(s.Z,{color:"#46AF00",children:"GET"})," ",(0,a.jsx)(t.code,{children:"web/statistics"})]}),"\n",(0,a.jsx)(t.p,{children:"Obtain site statistics for the Network."}),"\n",(0,a.jsx)(t.admonition,{title:"Note",type:"info",children:(0,a.jsx)(t.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,a.jsx)(t.h2,{id:"examples",children:"Examples"})]})}function p(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2425:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var a=r(9275);const n={tabItem:"tabItem__kUE"};var s=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(n.tabItem,i),hidden:r,children:t})}},3913:(e,t,r)=>{r.d(t,{Z:()=>k});var a=r(7294),n=r(9275),s=r(5944),i=r(6550),o=r(469),l=r(2434),u=r(2398),c=r(3088);function d(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function b(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function f(e){let{queryString:t=!1,groupId:r}=e;const n=(0,i.k6)(),s=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l._X)(s),(0,a.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(n.location.search);t.set(s,e),n.replace({...n.location,search:t.toString()})}),[s,n])]}function h(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,s=p(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!b({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:s}))),[u,d]=f({queryString:r,groupId:n}),[h,m]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,s]=(0,c.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&s.set(e)}),[r,s])]}({groupId:n}),v=(()=>{const e=u??h;return b({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{v&&l(v)}),[v]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!b({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,s]),tabValues:s}}var m=r(2389);const v={tabList:"tabList_fbd4",tabItem:"tabItem_v5XY"};var w=r(5893);function g(e){let{className:t,block:r,selectedValue:a,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),n=o[r].value;n!==a&&(u(t),i(n))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,w.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},t),children:o.map((e=>{let{value:t,label:r,attributes:s}=e;return(0,w.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:d,onClick:c,...s,className:(0,n.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":a===t}),children:r??t},t)}))})}function x(e){let{lazy:t,children:r,selectedValue:n}=e;const s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return(0,w.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n})))})}function y(e){const t=h(e);return(0,w.jsxs)("div",{className:(0,n.Z)("tabs-container",v.tabList),children:[(0,w.jsx)(g,{...e,...t}),(0,w.jsx)(x,{...e,...t})]})}function k(e){const t=(0,m.Z)();return(0,w.jsx)(y,{...e,children:d(e.children)},String(t))}},4695:(e,t,r)=>{r.d(t,{Z:()=>n});r(7294);var a=r(5893);const n=e=>{let{children:t,color:r}=e;return(0,a.jsx)("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:t})}},1151:(e,t,r)=>{r.d(t,{Z:()=>o,a:()=>i});var a=r(7294);const n={},s=a.createContext(n);function i(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);