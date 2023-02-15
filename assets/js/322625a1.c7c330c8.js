"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[662],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(f,l(l({ref:t},p),{},{components:r})):a.createElement(f,l({ref:t},p))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(7294),n=r(6010);const o="tabItem_Ymn6";function l(e){let{children:t,hidden:r,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o,l),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var a=r(7462),n=r(7294),o=r(6010),l=r(2389),s=r(7392),i=r(7094),u=r(2466);const p="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:r,block:l,defaultValue:d,values:m,groupId:f,className:b}=e,g=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:r,attributes:a}}=e;return{value:t,label:r,attributes:a}})),h=(0,s.l)(v,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:k}=(0,i.U)(),[O,T]=(0,n.useState)(y),E=[],{blockElementScrollPositionUntilNextRender:x}=(0,u.o5)();if(null!=f){const e=w[f];null!=e&&e!==O&&v.some((t=>t.value===e))&&T(e)}const N=e=>{const t=e.currentTarget,r=E.indexOf(t),a=v[r].value;a!==O&&(x(t),T(a),null!=f&&k(f,String(a)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=E.indexOf(e.currentTarget)+1;r=E[t]??E[0];break}case"ArrowLeft":{const t=E.indexOf(e.currentTarget)-1;r=E[t]??E[E.length-1];break}}null==(t=r)||t.focus()};return n.createElement("div",{className:(0,o.Z)("tabs-container",p)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:r,attributes:l}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>E.push(e),onKeyDown:P,onFocus:N,onClick:N},l,{className:(0,o.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":O===t})}),r??t)}))),r?(0,n.cloneElement)(g.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function m(e){const t=(0,l.Z)();return n.createElement(d,(0,a.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>n});var a=r(7294);const n=e=>{let{children:t,color:r}=e;return a.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},6108:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>u,default:()=>f,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var a=r(7462),n=(r(7294),r(3905)),o=r(4695),l=r(5488),s=r(5162);const i={title:"POST web/forgot",description:"Execute a forgot password for the user.",sidebar_label:"Forgot password",slug:"forgot",sidebar_position:36},u='<Highlight color="#FF6E26">POST</Highlight> `web/forgot`',p={unversionedId:"products/zander/api/web/forgot",id:"products/zander/api/web/forgot",title:"POST web/forgot",description:"Execute a forgot password for the user.",source:"@site/docs/products/zander/api/web/forgot.mdx",sourceDirName:"products/zander/api/web",slug:"/products/zander/api/web/forgot",permalink:"/docs/products/zander/api/web/forgot",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/web/forgot.mdx",tags:[],version:"current",sidebarPosition:36,frontMatter:{title:"POST web/forgot",description:"Execute a forgot password for the user.",sidebar_label:"Forgot password",slug:"forgot",sidebar_position:36},sidebar:"tutorialSidebar",previous:{title:"Logout user",permalink:"/docs/products/zander/api/web/logout"},next:{title:"SMP Datapack",permalink:"/docs/products/smpDatapack/"}},c={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],m={toc:d};function f(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"post-webforgot"},(0,n.kt)(o.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,n.kt)("inlineCode",{parentName:"h1"},"web/forgot")),(0,n.kt)("p",null,"Execute a forgot password for the user."),(0,n.kt)("admonition",{title:"Note",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"username")," ",(0,n.kt)("em",{parentName:"p"},"string"),(0,n.kt)("br",{parentName:"p"}),"\n","User IGN."),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Invalid",value:"second"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "username": "shadowolfyt"\n}\n')),(0,n.kt)("h2",{id:"response"},"Response"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true\n}\n')),(0,n.kt)("p",null,"shadowolfyt will be sent a password reset link to their email. ",(0,n.kt)("em",{parentName:"p"},"TODO:\nClarification on whether this is what happens"),".")),(0,n.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"TODO")))))}f.isMDXComponent=!0}}]);