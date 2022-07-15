"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2991],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=r.createContext({}),p=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||u[d]||i;return t?r.createElement(m,a(a({ref:n},l),{},{components:t})):r.createElement(m,a({ref:n},l))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=f;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<i;p++)a[p]=t[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},2153:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],s={sidebar_position:5.5},c="Declaration",p={unversionedId:"reference/expressions/declaration",id:"reference/expressions/declaration",title:"Declaration",description:"It is possible to declare a constant in an expression with the let c = v in e declaration expression: constant c is replaced by the evaluation of expression v in expression e.",source:"@site/docs/reference/expressions/declaration.md",sourceDirName:"reference/expressions",slug:"/reference/expressions/declaration",permalink:"/docs/reference/expressions/declaration",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/reference/expressions/declaration.md",tags:[],version:"current",sidebarPosition:5.5,frontMatter:{sidebar_position:5.5},sidebar:"docs",previous:{title:"Control",permalink:"/docs/reference/expressions/controls"},next:{title:"Asset",permalink:"/docs/reference/expressions/asset"}},l={},u=[],f={toc:u};function d(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"declaration"},"Declaration"),(0,i.kt)("p",null,"It is possible to declare a constant in an expression with the ",(0,i.kt)("inlineCode",{parentName:"p"},"let c = v in e")," declaration expression: constant ",(0,i.kt)("inlineCode",{parentName:"p"},"c")," is replaced by the evaluation of expression ",(0,i.kt)("inlineCode",{parentName:"p"},"v")," in expression ",(0,i.kt)("inlineCode",{parentName:"p"},"e"),"."),(0,i.kt)("p",null,"For example,"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"const reward =\n  let is_owner = (caller = owner) in\n    if not is_owner then\n      5% * balance\n    else\n      0tz;\n/* is_owner is not defined beyond expression scope */\n")),(0,i.kt)("p",null,"The expression above also uses the conditional expression ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/controls#if-then-else"},(0,i.kt)("inlineCode",{parentName:"a"},"if then else")),"."),(0,i.kt)("p",null,"Constant declaration may be useful to ",(0,i.kt)("em",{parentName:"p"},"factorise")," computation in more complex expressions."),(0,i.kt)("p",null,"Note that the scope of the declared constant is limited to the expression."))}d.isMDXComponent=!0}}]);