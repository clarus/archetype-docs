"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[3075],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=s(r),d=a,m=f["".concat(l,".").concat(d)]||f[d]||u[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},7815:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),i=["components"],c={sidebar_position:7},l="View",s={unversionedId:"reference/declarations/view",id:"reference/declarations/view",title:"View",description:"A view is a function that can be called by other contracts.",source:"@site/docs/reference/declarations/view.md",sourceDirName:"reference/declarations",slug:"/reference/declarations/view",permalink:"/docs/reference/declarations/view",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/declarations/view.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7},sidebar:"docs",previous:{title:"Function",permalink:"/docs/reference/declarations/function"},next:{title:"Types",permalink:"/docs/reference/types"}},p={},u=[],f={toc:u};function d(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"view"},"View"),(0,o.kt)("p",null,"A view is a ",(0,o.kt)("em",{parentName:"p"},"function")," that can be called by other contracts."),(0,o.kt)("p",null,"Like ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/function"},"functions"),", a view is ",(0,o.kt)("em",{parentName:"p"},"read only"),", that is it does ",(0,o.kt)("em",{parentName:"p"},"not")," modify the contract's storage ",(0,o.kt)("em",{parentName:"p"},"nor")," does generate ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/operation"},"operations"),"."),(0,o.kt)("p",null,"It is declared with the ",(0,o.kt)("inlineCode",{parentName:"p"},"view")," keyword followed by the view's identifier and arguments. It returns a value whose type is declared after ",(0,o.kt)("inlineCode",{parentName:"p"},":"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"view affine(x : rational) : rational {\n  return (2 * x + 3)\n}\n")),(0,o.kt)("p",null,"The view's body use the ",(0,o.kt)("inlineCode",{parentName:"p"},"return")," keyword to return the result."),(0,o.kt)("p",null,"A view is called with the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#call_view%3CT%3E(a%20:%20address,%20id%20:%20string,%20arg%20:%20X)"},(0,o.kt)("inlineCode",{parentName:"a"},"call_view"))," builtin."))}d.isMDXComponent=!0}}]);