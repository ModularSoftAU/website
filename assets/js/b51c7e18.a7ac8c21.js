"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[147],{4967:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>u,toc:()=>h});var n=t(4848),s=t(8453),a=t(1944),o=t(1470),l=t(9365);const i={title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",sidebar_label:"Log chat",slug:"chat",sidebar_position:3},c="POST discord/chat",u={id:"products/zander/api/discord/chat",title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",source:"@site/docs/products/zander/api/discord/chat.mdx",sourceDirName:"products/zander/api/discord",slug:"/products/zander/api/discord/chat",permalink:"/docs/products/zander/api/discord/chat",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/discord/chat.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"POST discord/chat",description:"Log a message to a Discord channel when user send a public chat message.",sidebar_label:"Log chat",slug:"chat",sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Log server switch",permalink:"/docs/products/zander/api/discord/switch"},next:{title:"Get servers",permalink:"/docs/products/zander/api/server/get"}},d={},h=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}];function p(e){const r={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsxs)(r.h1,{id:"post-discordchat",children:[(0,n.jsx)(a.A,{color:"#FF6E26",children:"POST"})," ",(0,n.jsx)(r.code,{children:"discord/chat"})]})}),"\n",(0,n.jsx)(r.p,{children:"Log a message to a Discord channel when user send a public chat message."}),"\n",(0,n.jsx)(r.admonition,{title:"Note",type:"info",children:(0,n.jsx)(r.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"username"})," ",(0,n.jsx)(r.em,{children:"string"}),(0,n.jsx)(r.br,{}),"\n","User IGN."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"server"})," ",(0,n.jsx)(r.em,{children:"string"}),(0,n.jsx)(r.br,{}),"\n","Server display name."]}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.code,{children:"content"})," ",(0,n.jsx)(r.em,{children:"string"}),(0,n.jsx)(r.br,{}),"\n","Chat content."]}),"\n",(0,n.jsx)(r.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,n.jsxs)(o.A,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],children:[(0,n.jsxs)(l.A,{value:"first",children:[(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "username": "shadowolfyt",\n    "server": "Survival",\n    "content": "This server is awesome"\n}\n'})}),(0,n.jsx)(r.h2,{id:"response",children:"Response"}),(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-json",children:'{\n    "success": true\n}\n'})}),(0,n.jsx)(r.p,{children:"A Discord message will be created that says,"}),(0,n.jsxs)(r.p,{children:['"',(0,n.jsx)(r.strong,{children:"Survival"}),"  |  ",(0,n.jsx)(r.code,{children:"shadowolfyt"}),' :: This server is awesome"']})]}),(0,n.jsx)(l.A,{value:"second",children:(0,n.jsx)(r.p,{children:(0,n.jsx)(r.em,{children:"TODO"})})})]})]})}function m(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},9365:(e,r,t)=>{t.d(r,{A:()=>o});t(6540);var n=t(8215);const s={tabItem:"tabItem_Ymn6"};var a=t(4848);function o(e){let{children:r,hidden:t,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(s.tabItem,o),hidden:t,children:r})}},1470:(e,r,t)=>{t.d(r,{A:()=>y});var n=t(6540),s=t(8215),a=t(3104),o=t(6347),l=t(205),i=t(7485),c=t(1682),u=t(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:s}}=e;return{value:r,label:t,attributes:n,default:s}}))}(t);return function(e){const r=(0,c.XI)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function p(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function m(e){let{queryString:r=!1,groupId:t}=e;const s=(0,o.W6)(),a=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,i.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const r=new URLSearchParams(s.location.search);r.set(a,e),s.replace({...s.location,search:r.toString()})}),[a,s])]}function b(e){const{defaultValue:r,queryString:t=!1,groupId:s}=e,a=h(e),[o,i]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:a}))),[c,d]=m({queryString:t,groupId:s}),[b,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[s,a]=(0,u.Dv)(t);return[s,(0,n.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:s}),v=(()=>{const e=c??b;return p({value:e,tabValues:a})?e:null})();(0,l.A)((()=>{v&&i(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),f(e)}),[d,f,a]),tabValues:a}}var f=t(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=t(4848);function x(e){let{className:r,block:t,selectedValue:n,selectValue:o,tabValues:l}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.a_)(),u=e=>{const r=e.currentTarget,t=i.indexOf(r),s=l[t].value;s!==n&&(c(r),o(s))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=i.indexOf(e.currentTarget)+1;r=i[t]??i[0];break}case"ArrowLeft":{const t=i.indexOf(e.currentTarget)-1;r=i[t]??i[i.length-1];break}}r?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.A)("tabs",{"tabs--block":t},r),children:l.map((e=>{let{value:r,label:t,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>i.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const o=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,s.A)("margin-top--md",e.props.className)}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:o.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function w(e){const r=b(e);return(0,g.jsxs)("div",{className:(0,s.A)("tabs-container",v.tabList),children:[(0,g.jsx)(x,{...r,...e}),(0,g.jsx)(j,{...r,...e})]})}function y(e){const r=(0,f.A)();return(0,g.jsx)(w,{...e,children:d(e.children)},String(r))}},1944:(e,r,t)=>{t.d(r,{A:()=>s});t(6540);var n=t(4848);const s=e=>{let{children:r,color:t}=e;return(0,n.jsx)("span",{style:{backgroundColor:t,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:r})}},8453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>l});var n=t(6540);const s={},a=n.createContext(s);function o(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);