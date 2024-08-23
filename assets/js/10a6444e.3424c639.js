"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2760],{9277:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var s=t(4848),n=t(8453),a=t(1944),o=t(1470),i=t(9365);const l={title:"POST session/create",description:"Create a session for user on login.",sidebar_label:"Create session",slug:"create",sidebar_position:0},u="POST session/create",c={id:"products/zander/api/session/create",title:"POST session/create",description:"Create a session for user on login.",source:"@site/docs/products/zander/api/session/create.mdx",sourceDirName:"products/zander/api/session",slug:"/products/zander/api/session/create",permalink:"/docs/products/zander/api/session/create",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/session/create.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"POST session/create",description:"Create a session for user on login.",sidebar_label:"Create session",slug:"create",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Delete server",permalink:"/docs/products/zander/api/server/delete"},next:{title:"Update for server switch",permalink:"/docs/products/zander/api/session/switch"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}];function h(e){const r={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.header,{children:(0,s.jsxs)(r.h1,{id:"post-sessioncreate",children:[(0,s.jsx)(a.A,{color:"#FF6E26",children:"POST"})," ",(0,s.jsx)(r.code,{children:"session/create"})]})}),"\n",(0,s.jsx)(r.p,{children:"Create a session for user on login."}),"\n",(0,s.jsx)(r.admonition,{title:"Note",type:"info",children:(0,s.jsx)(r.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"uuid"})," ",(0,s.jsx)(r.em,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","The UUID for the user."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"ipAddress"})," ",(0,s.jsx)(r.em,{children:"string"}),(0,s.jsx)(r.br,{}),"\n","The IP address of the user."]}),"\n",(0,s.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,s.jsxs)(o.A,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],children:[(0,s.jsxs)(i.A,{value:"first",children:[(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8", // shadowolfyt\n    "ipAddress": "123.45.678.9",\n    "server": "Hub"\n}\n'})}),(0,s.jsx)(r.h2,{id:"response",children:"Response"}),(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-json",children:'{\n    "success": true\n}\n'})}),(0,s.jsx)(r.p,{children:"A new session has been created for shadowolfyt. This is created when they join\none of the servers."})]}),(0,s.jsx)(i.A,{value:"second",children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"TODO"})})})]})]})}function f(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>o});t(6540);var s=t(8215);const n={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,s.A)(n.tabItem,o),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>y});var s=t(6540),n=t(8215),a=t(3104),o=t(6347),i=t(205),l=t(7485),u=t(1682),c=t(679);function d(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:r,children:t}=e;return(0,s.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:s,default:n}}=e;return{value:r,label:t,attributes:s,default:n}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function h(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function f(e){let{queryString:r=!1,groupId:t}=e;const n=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,l.aZ)(a),(0,s.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(n.location.search);r.set(a,e),n.replace({...n.location,search:r.toString()})}),[a,n])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:n}=e,a=p(e),[o,l]=(0,s.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!h({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const s=t.find((e=>e.default))??t[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:r,tabValues:a}))),[u,d]=f({queryString:t,groupId:n}),[b,m]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[n,a]=(0,c.Dv)(t);return[n,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:n}),v=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,s.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(4848);function g(e){let{className:r,block:t,selectedValue:s,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const r=e.currentTarget,t=l.indexOf(r),n=i[t].value;n!==s&&(u(r),o(n))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;r=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;r=l[t]??l[l.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:s===r?0:-1,"aria-selected":s===r,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,n.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":s===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:(0,n.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,s.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=b(e);return(0,x.jsxs)("div",{className:(0,n.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...r,...e}),(0,x.jsx)(j,{...r,...e})]})}function y(e){const r=(0,m.A)();return(0,x.jsx)(w,{...e,children:d(e.children)},String(r))}},1944:(e,r,t)=>{t.d(r,{A:()=>n});t(6540);var s=t(4848);const n=e=>{let{children:r,color:t}=e;return(0,s.jsx)("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:r})}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>i});var s=t(6540);const n={},a=s.createContext(n);function o(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);