"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[110],{395:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>d,contentTitle:()=>u,default:()=>f,frontMatter:()=>l,metadata:()=>c,toc:()=>p});var n=r(4848),t=r(8453),a=r(1944),o=r(1470),i=r(9365);const l={title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:2},u="POST session/destroy",c={id:"products/zander/api/session/destroy",title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",source:"@site/docs/products/zander/api/session/destroy.mdx",sourceDirName:"products/zander/api/session",slug:"/products/zander/api/session/destroy",permalink:"/docs/products/zander/api/session/destroy",draft:!1,unlisted:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/session/destroy.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{title:"POST session/destroy",description:"Update session record to indicate end of session and logout.",sidebar_label:"Destroy session",slug:"destroy",sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Update for server switch",permalink:"/docs/products/zander/api/session/switch"},next:{title:"Create user",permalink:"/docs/products/zander/api/user/create"}},d={},p=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}];function h(e){const s={admonition:"admonition",br:"br",code:"code",em:"em",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.header,{children:(0,n.jsxs)(s.h1,{id:"post-sessiondestroy",children:[(0,n.jsx)(a.A,{color:"#FF6E26",children:"POST"})," ",(0,n.jsx)(s.code,{children:"session/destroy"})]})}),"\n",(0,n.jsx)(s.p,{children:"Update session record to indicate end of session and logout."}),"\n",(0,n.jsx)(s.admonition,{title:"Note",type:"info",children:(0,n.jsx)(s.p,{children:"This is a privileged endpoint. Only authorised queries will be processed."})}),"\n",(0,n.jsx)(s.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.code,{children:"uuid"})," ",(0,n.jsx)(s.em,{children:"string"}),(0,n.jsx)(s.br,{}),"\n","The UUID for the Minecraft user."]}),"\n",(0,n.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n","\n",(0,n.jsxs)(o.A,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"No session",value:"second"}],children:[(0,n.jsxs)(i.A,{value:"first",children:[(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n'})}),(0,n.jsx)(s.h2,{id:"response",children:"Response"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "success": true\n}\n'})}),(0,n.jsx)(s.p,{children:"shadowolfyt's session has been destroyed."})]}),(0,n.jsxs)(i.A,{value:"second",children:[(0,n.jsx)(s.p,{children:"When shadowolfyt does not have an ongoing session."}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "uuid": "0af03841-2894-434c-a4be-965b317244e8" // shadowolfyt\n}\n'})}),(0,n.jsx)(s.h2,{id:"response-1",children:"Response"}),(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-json",children:'{\n    "success": false\n}\n'})}),(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"TODO"})})]})]})]})}function f(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},9365:(e,s,r)=>{r.d(s,{A:()=>o});r(6540);var n=r(8215);const t={tabItem:"tabItem_Ymn6"};var a=r(4848);function o(e){let{children:s,hidden:r,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.A)(t.tabItem,o),hidden:r,children:s})}},1470:(e,s,r)=>{r.d(s,{A:()=>w});var n=r(6540),t=r(8215),a=r(3104),o=r(6347),i=r(205),l=r(7485),u=r(1682),c=r(679);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:s}=e;return!!s&&"object"==typeof s&&"value"in s}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:s,children:r}=e;return(0,n.useMemo)((()=>{const e=s??function(e){return d(e).map((e=>{let{props:{value:s,label:r,attributes:n,default:t}}=e;return{value:s,label:r,attributes:n,default:t}}))}(r);return function(e){const s=(0,u.XI)(e,((e,s)=>e.value===s.value));if(s.length>0)throw new Error(`Docusaurus error: Duplicate values "${s.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[s,r])}function h(e){let{value:s,tabValues:r}=e;return r.some((e=>e.value===s))}function f(e){let{queryString:s=!1,groupId:r}=e;const t=(0,o.W6)(),a=function(e){let{queryString:s=!1,groupId:r}=e;if("string"==typeof s)return s;if(!1===s)return null;if(!0===s&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:s,groupId:r});return[(0,l.aZ)(a),(0,n.useCallback)((e=>{if(!a)return;const s=new URLSearchParams(t.location.search);s.set(a,e),t.replace({...t.location,search:s.toString()})}),[a,t])]}function b(e){const{defaultValue:s,queryString:r=!1,groupId:t}=e,a=p(e),[o,l]=(0,n.useState)((()=>function(e){let{defaultValue:s,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(s){if(!h({value:s,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${s}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return s}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:s,tabValues:a}))),[u,d]=f({queryString:r,groupId:t}),[b,m]=function(e){let{groupId:s}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(s),[t,a]=(0,c.Dv)(r);return[t,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:t}),v=(()=>{const e=u??b;return h({value:e,tabValues:a})?e:null})();(0,i.A)((()=>{v&&l(v)}),[v]);return{selectedValue:o,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=r(2303);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(4848);function g(e){let{className:s,block:r,selectedValue:n,selectValue:o,tabValues:i}=e;const l=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.a_)(),c=e=>{const s=e.currentTarget,r=l.indexOf(s),t=i[r].value;t!==n&&(u(s),o(t))},d=e=>{let s=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;s=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;s=l[r]??l[l.length-1];break}}s?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,t.A)("tabs",{"tabs--block":r},s),children:i.map((e=>{let{value:s,label:r,attributes:a}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===s?0:-1,"aria-selected":n===s,ref:e=>l.push(e),onKeyDown:d,onClick:c,...a,className:(0,t.A)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":n===s}),children:r??s},s)}))})}function y(e){let{lazy:s,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(s){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,t.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:o.map(((e,s)=>(0,n.cloneElement)(e,{key:s,hidden:e.props.value!==a})))})}function j(e){const s=b(e);return(0,x.jsxs)("div",{className:(0,t.A)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...s,...e}),(0,x.jsx)(y,{...s,...e})]})}function w(e){const s=(0,m.A)();return(0,x.jsx)(j,{...e,children:d(e.children)},String(s))}},1944:(e,s,r)=>{r.d(s,{A:()=>t});r(6540);var n=r(4848);const t=e=>{let{children:s,color:r}=e;return(0,n.jsx)("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"},children:s})}},8453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var n=r(6540);const t={},a=n.createContext(t);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);