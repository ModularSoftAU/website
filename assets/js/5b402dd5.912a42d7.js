"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2041],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=a,m=p["".concat(s,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(7294);function a(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7462),a=n(7294),o=n(2389),i=n(3725),l=n(6010),s="tabItem_LplD";function u(e){var t,n,o,u=e.lazy,c=e.block,d=e.defaultValue,p=e.values,f=e.groupId,m=e.className,v=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=p?p:v.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),g=(0,i.lx)(b,(function(e,t){return e.value===t.value}));if(g.length>0)throw new Error('Docusaurus error: Duplicate values "'+g.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===d?d:null!=(t=null!=d?d:null==(n=v.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=v[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var k=(0,i.UB)(),y=k.tabGroupChoices,w=k.setTabGroupChoices,O=(0,a.useState)(h),E=O[0],T=O[1],N=[],x=(0,i.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var j=y[f];null!=j&&j!==E&&b.some((function(e){return e.value===j}))&&T(j)}var C=function(e){var t=e.currentTarget,n=N.indexOf(t),r=b[n].value;r!==E&&(x(t),T(r),null!=f&&w(f,r))},D=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=N.indexOf(e.currentTarget)+1;n=N[r]||N[0];break;case"ArrowLeft":var a=N.indexOf(e.currentTarget)-1;n=N[a]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":c},m)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:function(e){return N.push(e)},onKeyDown:D,onFocus:C,onClick:C},o,{className:(0,l.Z)("tabs__item",s,null==o?void 0:o.className,{"tabs__item--active":E===t})}),null!=n?n:t)}))),u?(0,a.cloneElement)(v.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==E})}))))}function c(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},4695:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.color;return r.createElement("span",{style:{backgroundColor:n,borderRadius:"15px",color:"#FFF",padding:"0 0.6rem 0.2rem 0.6rem"}},t)}},8315:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=n(4695),l=n(9877),s=n(8215),u=["components"],c={title:"GET knowledgebase/section/get",description:"Get a list of all the knowledgebase sections.",sidebar_label:"Get sections",slug:"section/get",sidebar_position:35},d='<Highlight color="',p={unversionedId:"api/knowledgebase/section-get",id:"api/knowledgebase/section-get",title:"GET knowledgebase/section/get",description:"Get a list of all the knowledgebase sections.",source:"@site/docs/api/knowledgebase/section-get.mdx",sourceDirName:"api/knowledgebase",slug:"/api/knowledgebase/section/get",permalink:"/docs/api/knowledgebase/section/get",editUrl:"https://github.com/ModularEnigma/zander-docs/tree/main/packages/create-docusaurus/templates/shared/docs/api/knowledgebase/section-get.mdx",tags:[],version:"current",sidebarPosition:35,frontMatter:{title:"GET knowledgebase/section/get",description:"Get a list of all the knowledgebase sections.",sidebar_label:"Get sections",slug:"section/get",sidebar_position:35},sidebar:"tutorialSidebar",previous:{title:"Block user",permalink:"/docs/api/friend/block"},next:{title:"Create section",permalink:"/docs/api/knowledgebase/section/create"}},f={},m=[{value:"Examples",id:"examples",level:2},{value:"Response",id:"response",level:2}],v={toc:m};function b(e){var t=e.components,n=(0,a.Z)(e,u);return(0,o.kt)("wrapper",(0,r.Z)({},v,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"get-knowledgebasesectionget"},(0,o.kt)(i.Z,{color:"#46AF00",mdxType:"Highlight"},"GET")," ",(0,o.kt)("inlineCode",{parentName:"h1"},"knowledgebase/section/get")),(0,o.kt)("p",null,"Get a list of all the knowledgebase sections."),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"This is a privileged endpoint. Only authorised queries will be processed."))),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"first",values:[{label:"Typical",value:"first"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"first",mdxType:"TabItem"},(0,o.kt)("h2",{id:"response"},"Response"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "success": true,\n    "data": [\n        // TODO\n    ]\n}\n')),(0,o.kt)("p",null,"Returns a list of sections."))))}b.isMDXComponent=!0}}]);