"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[498],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7462),a=n(7294),o=n(2389),l=n(3725),i=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,p=e.block,c=e.defaultValue,d=e.values,m=e.groupId,f=e.className,h=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=d?d:h.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),b=(0,l.lx)(v,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=h.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=h[0])?void 0:o.props.value;if(null!==g&&!v.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=(0,l.UB)(),k=y.tabGroupChoices,N=y.setTabGroupChoices,w=(0,a.useState)(g),O=w[0],T=w[1],x=[],E=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var D=k[m];null!=D&&D!==O&&v.some((function(e){return e.value===D}))&&T(D)}var j=function(e){var t=e.currentTarget,n=x.indexOf(t),r=v[n].value;r!==O&&(E(t),T(r),null!=m&&N(m,r))},P=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=x.indexOf(e.currentTarget)+1;n=x[r]||x[0];break;case"ArrowLeft":var a=x.indexOf(e.currentTarget)-1;n=x[a]||x[x.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},f)},v.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:j,onClick:j},o,{className:(0,i.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":O===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(h.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},h.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},5276:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return c},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return f}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(4695),i=n(9877),s=n(8215),u=["components"],p={title:"POST shop/delete",description:"Delete an existing shop listing in the directory.",sidebar_label:"Delete shop",slug:"delete",sidebar_position:65},c='<Highlight color="',d={unversionedId:"api/shop/delete",id:"api/shop/delete",title:"POST shop/delete",description:"Delete an existing shop listing in the directory.",source:"@site/docs/api/shop/delete.mdx",sourceDirName:"api/shop",slug:"/api/shop/delete",permalink:"/docs/api/shop/delete",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/shop/delete.mdx",tags:[],version:"current",sidebarPosition:65,frontMatter:{title:"POST shop/delete",description:"Delete an existing shop listing in the directory.",sidebar_label:"Delete shop",slug:"delete",sidebar_position:65},sidebar:"tutorialSidebar",previous:{title:"Edit shop",permalink:"/docs/api/shop/edit"},next:{title:"Add item to shop",permalink:"/docs/api/shop/items/create"}},m={},f=[{value:"Parameters",id:"parameters",level:2},{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2},{value:"Response",id:"response-1",level:2}],h={toc:f};function v(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"post-shopdelete"},(0,o.kt)(l.Z,{color:"#FF6E26",mdxType:"Highlight"},"POST")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"shop/delete")),(0,o.kt)("p",null,"Delete an existing shop listing in the directory."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"shopId")," ",(0,o.kt)("em",{parentName:"p"},"integer"),(0,o.kt)("br",{parentName:"p"}),"\n","The ID of the shop to delete."),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(i.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"},{label:"Missing shopId",value:"second"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 12\n}\n')),(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "message": "Deletion of Shop 12 has been successful"\n}\n')),(0,o.kt)("p",null,"The shop with id 12 has been deleted.")),(0,o.kt)(s.Z,{value:"second",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "shopId": 000000\n}\n')),(0,o.kt)("h2",{id:"response-1"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": false\n}\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"TODO")))))}v.isMDXComponent=!0}}]);