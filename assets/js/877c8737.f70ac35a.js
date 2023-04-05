"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9495],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),i=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=i(e.components);return n.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=i(r),m=a,f=d["".concat(u,".").concat(m)]||d[m]||c[m]||l;return r?n.createElement(f,o(o({ref:t},p),{},{components:r})):n.createElement(f,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var i=2;i<l;i++)o[i]=r[i];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:r,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(7462),a=r(7294),l=r(6010),o=r(6775),s=r(1980),u=r(7392),i=r(12);function p(e){return function(e){var t;return(null==(t=a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:a}}=e;return{value:t,label:r,attributes:n,default:a}}))}function c(e){const{values:t,children:r}=e;return(0,a.useMemo)((()=>{const e=t??p(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function d(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const n=(0,o.k6)(),l=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,s._X)(l),(0,a.useCallback)((e=>{if(!l)return;const t=new URLSearchParams(n.location.search);t.set(l,e),n.replace({...n.location,search:t.toString()})}),[l,n])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:n}=e,l=c(e),[o,s]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:l}))),[u,p]=m({queryString:r,groupId:n}),[f,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,l]=(0,i.Nk)(r);return[n,(0,a.useCallback)((e=>{r&&l.set(e)}),[r,l])]}({groupId:n}),g=(()=>{const e=u??f;return d({value:e,tabValues:l})?e:null})();(0,a.useLayoutEffect)((()=>{g&&s(g)}),[g]);return{selectedValue:o,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:l}))throw new Error(`Can't select invalid tab value=${e}`);s(e),p(e),b(e)}),[p,b,l]),tabValues:l}}var b=r(2466),g=r(2389);const h="tabList__CuJ",v="tabItem_LNqP";function k(e){let{className:t,block:r,selectedValue:o,selectValue:s,tabValues:u}=e;const i=[],{blockElementScrollPositionUntilNextRender:p}=(0,b.o5)(),c=e=>{const t=e.currentTarget,r=i.indexOf(t),n=u[r].value;n!==o&&(p(t),s(n))},d=e=>{var t;let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}null==(t=r)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>i.push(e),onKeyDown:d,onClick:c},s,{className:(0,l.Z)("tabs__item",v,null==s?void 0:s.className,{"tabs__item--active":o===t})}),r??t)})))}function y(e){let{lazy:t,children:r,selectedValue:n}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},l.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function N(e){const t=f(e);return a.createElement("div",{className:(0,l.Z)("tabs-container",h)},a.createElement(k,(0,n.Z)({},e,t)),a.createElement(y,(0,n.Z)({},e,t)))}function T(e){const t=(0,g.Z)();return a.createElement(N,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},2649:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>f,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4695),o=r(4866),s=r(5162);const u={title:"GET report/get",description:"Get a list of all current Network reports.",sidebar_label:"Get reports",slug:"get",sidebar_position:19},i='<Highlight color="#46AF00">GET</Highlight> report/get',p={unversionedId:"products/zander/api/report/get",id:"products/zander/api/report/get",title:"GET report/get",description:"Get a list of all current Network reports.",source:"@site/docs/products/zander/api/report/get.mdx",sourceDirName:"products/zander/api/report",slug:"/products/zander/api/report/get",permalink:"/docs/products/zander/api/report/get",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/report/get.mdx",tags:[],version:"current",sidebarPosition:19,frontMatter:{title:"GET report/get",description:"Get a list of all current Network reports.",sidebar_label:"Get reports",slug:"get",sidebar_position:19},sidebar:"tutorialSidebar",previous:{title:"Get punishments",permalink:"/docs/products/zander/api/punishment/get"},next:{title:"Report player",permalink:"/docs/products/zander/api/report/create"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2},{value:"Response",id:"response-2",level:2},{value:"Response",id:"response-3",level:2}],m={toc:d};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"get-reportget"},(0,a.kt)(l.Z,{color:"#46AF00",mdxType:"Highlight"},"GET")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"report/get")),(0,a.kt)("p",null,"Get a list of all current Network reports."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"reportId")," ",(0,a.kt)("strong",{parentName:"p"},"optional")," ",(0,a.kt)("em",{parentName:"p"},"integer"),(0,a.kt)("br",{parentName:"p"}),"\n","Filter by matching report ID."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"username")," ",(0,a.kt)("strong",{parentName:"p"},"optional")," ",(0,a.kt)("em",{parentName:"p"},"string"),(0,a.kt)("br",{parentName:"p"}),"\n","Filter by matching user IGN."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Using reportId",value:"second"},{label:"Using username",value:"third"},{label:"Missing reportId",value:"fourth"}],mdxType:"Tabs"},(0,a.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"A list of all reports has been returned.")),(0,a.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reportId": 12\n}\n')),(0,a.kt)("h2",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"The report with id 12 has been returned.")),(0,a.kt)(s.Z,{value:"third",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt"\n}\n')),(0,a.kt)("h2",{id:"response-2"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,a.kt)("p",null,"A list of reports (",(0,a.kt)("em",{parentName:"p"},"TODO: Clarification: from user OR of user"),") has been\nreturned.")),(0,a.kt)(s.Z,{value:"fourth",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "reportId": 000000\n}\n')),(0,a.kt)("h2",{id:"response-3"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);