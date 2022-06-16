"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2455],{3905:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(r),f=o,m=u["".concat(c,".").concat(f)]||u[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},l),{},{components:r})):n.createElement(m,i({ref:t},l))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},6449:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),i=["components"],s={sidebar_position:.5},c="Copy",p={unversionedId:"reference/expressions/operators/copy",id:"reference/expressions/operators/copy",title:"Copy",description:"{ with }",source:"@site/docs/reference/expressions/operators/copy.md",sourceDirName:"reference/expressions/operators",slug:"/reference/expressions/operators/copy",permalink:"/docs/reference/expressions/operators/copy",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/expressions/operators/copy.md",tags:[],version:"current",sidebarPosition:.5,frontMatter:{sidebar_position:.5},sidebar:"docs",previous:{title:"Access",permalink:"/docs/reference/expressions/operators/access"},next:{title:"Arithmetic",permalink:"/docs/reference/expressions/operators/arithmetic"}},l={},d=[{value:"<code>{ with }</code>",id:"-with-",level:3}],u={toc:d};function f(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"copy"},"Copy"),(0,a.kt)("h3",{id:"-with-"},(0,a.kt)("inlineCode",{parentName:"h3"},"{ with }")),(0,a.kt)("p",null,"It is possible to copy a ",(0,a.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},"record")," value and change only a subset of its fields values with the ",(0,a.kt)("inlineCode",{parentName:"p"},"{ r with u }")," operator, where ",(0,a.kt)("inlineCode",{parentName:"p"},"r")," is a record and ",(0,a.kt)("inlineCode",{parentName:"p"},"u")," is a list of field assignment."),(0,a.kt)("p",null,"For example, consider the following ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/declarations/compositetypes#record"},"record declaration"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"record voter {\n  weight   : nat;\n  voted    : bool;\n  delegate : option<address>;\n  vote     : nat;\n}\n")),(0,a.kt)("p",null,"The following creates a copy of ",(0,a.kt)("inlineCode",{parentName:"p"},"voter")," record value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"const v = {\n  weight   = 1;\n  voted    = false;\n  delegate = none;\n  vote     = 0;\n };\nconst c = { v with\n  delegate = some(caller);\n  vote     = 1;\n};\n/* c is { 1; false; some(caller); 1 } */\n")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This operator is useful to create a ",(0,a.kt)("em",{parentName:"p"},"new")," record from an existing one. In order to update an existing record, the ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/instructions/assignment#record"},"field assignment")," operator is to be preferred."))))}f.isMDXComponent=!0}}]);