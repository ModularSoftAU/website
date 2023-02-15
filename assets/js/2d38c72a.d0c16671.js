"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2249],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(r),m=a,v=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return r?n.createElement(v,s(s({ref:t},c),{},{components:r})):n.createElement(v,s({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var u=2;u<l;u++)s[u]=r[u];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var n=r(7294),a=r(6010);const l="tabItem_Ymn6";function s(e){let{children:t,hidden:r,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,s),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>m});var n=r(7462),a=r(7294),l=r(6010),s=r(2389),o=r(7392),i=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:r,block:s,defaultValue:d,values:m,groupId:v,className:b}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??f.map((e=>{let{props:{value:t,label:r,attributes:n}}=e;return{value:t,label:r,attributes:n}})),g=(0,o.l)(h,((e,t)=>e.value===t.value));if(g.length>0)throw new Error(`Docusaurus error: Duplicate values "${g.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===d?d:d??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==y&&!h.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:O}=(0,i.U)(),[T,w]=(0,a.useState)(y),x=[],{blockElementScrollPositionUntilNextRender:E}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==T&&h.some((t=>t.value===e))&&w(e)}const N=e=>{const t=e.currentTarget,r=x.indexOf(t),n=h[r].value;n!==T&&(E(t),w(n),null!=v&&O(v,String(n)))},P=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=x.indexOf(e.currentTarget)+1;r=x[t]??x[0];break}case"ArrowLeft":{const t=x.indexOf(e.currentTarget)-1;r=x[t]??x[x.length-1];break}}null==(t=r)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},h.map((e=>{let{value:t,label:r,attributes:s}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:T===t?0:-1,"aria-selected":T===t,key:t,ref:e=>x.push(e),onKeyDown:P,onFocus:N,onClick:N},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":T===t})}),r??t)}))),r?(0,a.cloneElement)(f.filter((e=>e.props.value===T))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==T})))))}function m(e){const t=(0,s.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}},4695:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{children:t,color:r}=e;return n.createElement("span",{style:{backgroundColor:r,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},8803:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>v,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(7462),a=(r(7294),r(3905)),l=r(4695),s=r(5488),o=r(5162);const i={title:"POST server/delete",description:"Delete an existing server.",sidebar_label:"Delete server",slug:"delete",sidebar_position:25},u='<Highlight color="#FF6E26">POST</Highlight> `server/delete`',c={unversionedId:"products/zander/api/server/delete",id:"products/zander/api/server/delete",title:"POST server/delete",description:"Delete an existing server.",source:"@site/docs/products/zander/api/server/delete.mdx",sourceDirName:"products/zander/api/server",slug:"/products/zander/api/server/delete",permalink:"/docs/products/zander/api/server/delete",draft:!1,editUrl:"https://github.com/ModularSoftAU/website/tree/main/packages/create-docusaurus/templates/shared/docs/products/zander/api/server/delete.mdx",tags:[],version:"current",sidebarPosition:25,frontMatter:{title:"POST server/delete",description:"Delete an existing server.",sidebar_label:"Delete server",slug:"delete",sidebar_position:25},sidebar:"tutorialSidebar",previous:{title:"Edit server",permalink:"/docs/products/zander/api/server/edit"},next:{title:"Create session",permalink:"/docs/products/zander/api/session/create"}},p={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],m={toc:d};function v(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"post-serverdelete"},(0,a.kt)(l.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,a.kt)("inlineCode",{parentName:"h1"},"server/delete")),(0,a.kt)("p",null,"Delete an existing server."),(0,a.kt)("admonition",{title:"Note",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"This is a privileged endpoint. Only authorised queries will be processed.")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"serverId")," ",(0,a.kt)("em",{parentName:"p"},"integer"),(0,a.kt)("br",{parentName:"p"}),"\n","The ID of the server to delete."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(s.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing serverId",value:"second"}],mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"first",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverId": 2\n}\n')),(0,a.kt)("h2",{id:"response"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "Deletion of server with id 2 has been successful"\n}\n')),(0,a.kt)("p",null,"The minecraft server with id 2 has been deleted.")),(0,a.kt)(o.Z,{value:"second",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "serverId": 000000\n}\n')),(0,a.kt)("h2",{id:"response-1"},"Response"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"TODO")))))}v.isMDXComponent=!0}}]);