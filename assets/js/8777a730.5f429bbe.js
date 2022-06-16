"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[7854],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return u}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(r),u=n,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return r?a.createElement(f,c(c({ref:t},l),{},{components:r})):a.createElement(f,c({ref:t},l))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var p=2;p<o;p++)c[p]=r[p];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2999:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return u},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return d}});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),c=["components"],i={sidebar_position:1},s="Archetype contract",p={unversionedId:"reference/declarations/contract",id:"reference/declarations/contract",title:"Archetype contract",description:"An archetype contract starts with the archetype keyword followed by a contract identifier.",source:"@site/docs/reference/declarations/contract.md",sourceDirName:"reference/declarations",slug:"/reference/declarations/contract",permalink:"/archetype-docs/docs/reference/declarations/contract",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/declarations/contract.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"docs",previous:{title:"Identifier",permalink:"/archetype-docs/docs/reference/declarations/identifier"},next:{title:"Storage",permalink:"/archetype-docs/docs/reference/declarations/storage"}},l={},d=[{value:"Parameters",id:"parameters",level:2},{value:"Metadata",id:"metadata",level:2}],m={toc:d};function u(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"archetype-contract"},"Archetype contract"),(0,o.kt)("p",null,"An archetype contract starts with the ",(0,o.kt)("inlineCode",{parentName:"p"},"archetype")," keyword followed by a contract ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype escrow\n\n/* ... */\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("p",null,"A contract may have parameters. A contract parameter is a storage element whose value is set at deployment (origination) time. It is defined by an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and a ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types"},"type"),". The list of parameters follows the contract's identifier between parenthesis and separated by comma."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"archetype escrow(seller : address, buyer : address)\n\n/* ... */\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"seller")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"buyer")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#address"},"addresses")," then need to be set at deployment time with the completium CLI's ",(0,o.kt)("inlineCode",{parentName:"p"},"deploy")," command; for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'completium-cli deploy escrow.arl --parameters \'{ "seller" : "tz1VSUr8wwNhLAzempoch5d6hLRiTh8Cjcjb", "buyer" : "tz1aSkwEot3L2kmUvcoxzjMomb9mvBNuzFK6" }\'\n')),(0,o.kt)("p",null,"The value of a contract parameter may be modified by ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/assignment"},"assignment")," instructions in ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint"},"entrypoints"),"."),(0,o.kt)("h2",{id:"metadata"},"Metadata"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"https://tzip.tezosagora.org/proposal/tzip-16/"},"TZIP-16")," specifies the standard contract's metadata as a storage ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/container#map"},"map"),". It is declared with ",(0,o.kt)("inlineCode",{parentName:"p"},"with metadata")," in contract declaration followed by intitial URL to metadata file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'archetype my_token with metadata ""\n')),(0,o.kt)("p",null,"This adds the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/variables#metadata"},(0,o.kt)("inlineCode",{parentName:"a"},"metadata"))," map to the storage."))}u.isMDXComponent=!0}}]);