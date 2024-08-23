"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3380],{5064:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>u,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var n=t(4848),s=t(8453),a=t(1944),l=t(1470),i=t(9365);const o={title:"POST user/create",description:"Create a new user when joined for the first time.",sidebar_label:"Create user",slug:"create",sidebar_position:0},u="POST user/create",c={id:"products/zander/api/user/create",title:"POST user/create",description:"Create a new user when joined for the first time.",source:"@site/docs/products/zander/api/user/create.mdx",sourceDirName:"products/zander/api/user",slug:"/products/zander/api/user/create",permalink:"/docs/products/zander/api/user/create",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/user/create.mdx",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"POST user/create",description:"Create a new user when joined for the first time.",sidebar_label:"Create user",slug:"create",sidebar_position:0},sidebar:"tutorialSidebar",previous:{title:"Destroy session",permalink:"/docs/products/zander/api/session/destroy"},next:{title:"Register user",permalink:"/docs/products/zander/api/web/create"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}];function p(e){const r={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsxs)(r.h1,{id:"post-usercreate",children:[(0,n.jsx)(a.A,{color:"#FF6E26",children:"POST"})," ",(0,n.jsx)(r.code,{children:"user/create"})]})}),"\n",(0,n.jsx)(r.p,{children:"Create a new user when joined for the first time."}),"\n",(0,n.jsx)(r.admonition,{title:"Note",type:"info",children:(0,n.jsx)(r.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"uuid"})," ",(0,n.jsx)(r.em,{children:"string"}),(0,n.jsx)(r.br,{}),"\n","The UUID for the Minecraft user."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"username"})," ",(0,n.jsx)(r.em,{children:"string"}),(0,n.jsx)(r.br,{}),"\n","The username for the user."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,n.jsxs)(l.A,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"User already exists",value:"second"},{label:"Invalid",value:"third"}],children:[(0,n.jsxs)(i.A,{value:"first",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8", // shadowolfyt\n    "username": "shadowolfyt"\n}\n'})}),(0,n.jsx)(r.h2,{id:"response",children:"Response"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "success": true,\n    "message": "shadowolfyt (0af03841-2894-434c-a4be-965b317244e8) has been successfully created."\n}\n'})}),(0,n.jsxs)(r.p,{children:["A new user has been registered. This is called when a player joins a server for\nthe first time. This is different to\n",(0,n.jsx)(r.a,{href:"../web/register/create",children:"account registration"}),"."]})]}),(0,n.jsxs)(i.A,{value:"second",children:[(0,n.jsx)(r.p,{children:"When the uuid is already linked to a username."}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8", // shadowolfyt\n    "username": "shadowolfyt"\n}\n'})}),(0,n.jsx)(r.h2,{id:"response-1",children:"Response"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "success": false,\n    "message": "This user already exists (somehow), terminating creation."\n}\n'})}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"TODO"})})]}),(0,n.jsx)(i.A,{value:"third",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"TODO"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>l});t(6540);var n=t(8215);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function l(e){let{children:r,hidden:t,className:l}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,l),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(6540),s=t(8215),a=t(3104),l=t(6347),i=t(205),o=t(7485),u=t(1682),c=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,u.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,l.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function f(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[u,d]=m({queryString:t,groupId:s}),[f,b]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,c.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),x=(()=>{const e=u??f;return p({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=t(2303);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(4848);function j(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const r=e.currentTarget,t=o.indexOf(r),s=i[t].value;s!==n&&(u(r),l(s))},d=e=>{let r=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.A)("tabs__item",x.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function g(e){let{lazy:r,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=l.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:l.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=f(e);return(0,v.jsxs)("div",{className:(0,s.A)("tabs-container",x.tabList),children:[(0,v.jsx)(j,{...r,...e}),(0,v.jsx)(g,{...r,...e})]})}function y(e){const r=(0,b.A)();return(0,v.jsx)(w,{...e,children:d(e.children)},String(r))}},1944:(e,r,t)=>{t.d(r,{A:()=>s});t(6540);var n=t(4848);const s=e=>{let{children:r,color:t}=e;return(0,n.jsx)("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:r})}},8453:(e,r,t)=>{t.d(r,{R:()=>l,x:()=>i});var n=t(6540);const s={},a=n.createContext(s);function l(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);