"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[8409],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},c),{},{components:n})):r.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4628:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:5},l="Control",s={unversionedId:"reference/expressions/controls",id:"reference/expressions/controls",title:"Control",description:"In addition of being instructions, if and match with also come as conditional expressions.",source:"@site/docs/reference/expressions/controls.md",sourceDirName:"reference/expressions",slug:"/reference/expressions/controls",permalink:"/archetype-docs/docs/reference/expressions/controls",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/expressions/controls.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"docs",previous:{title:"Builtins",permalink:"/archetype-docs/docs/reference/expressions/builtins"},next:{title:"Declaration",permalink:"/archetype-docs/docs/reference/expressions/declaration"}},c={},d=[{value:"<code>if then else</code>",id:"if-then-else",level:3},{value:"<code>match with</code>",id:"match-with",level:3},{value:"<code>a ? b : c</code>",id:"a--b--c",level:3},{value:"Bool",id:"bool",level:4},{value:"Option",id:"option",level:4}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"control"},"Control"),(0,o.kt)("p",null,"In addition of being ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/control"},"instructions"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"match with")," also come as conditional expressions."),(0,o.kt)("h3",{id:"if-then-else"},(0,o.kt)("inlineCode",{parentName:"h3"},"if then else")),(0,o.kt)("p",null,"Expression ",(0,o.kt)("inlineCode",{parentName:"p"},"if e then a else b")," evaluates to the evaluation of expression ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," if boolean expression ",(0,o.kt)("inlineCode",{parentName:"p"},"e")," evaluates to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),", and to the evaluation of ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," otherwise."),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," must be of same type."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"const r = if now > deadline then 10% else 2%\n")),(0,o.kt)("h3",{id:"match-with"},(0,o.kt)("inlineCode",{parentName:"h3"},"match with")),(0,o.kt)("p",null,"Expression ",(0,o.kt)("inlineCode",{parentName:"p"},"match with")," deconstructs a value of ",(0,o.kt)("em",{parentName:"p"},"enumerated")," type to extract data from it."),(0,o.kt)("p",null,"Like ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/control#match-with"},(0,o.kt)("inlineCode",{parentName:"a"},"match with"))," instruction, enumerated types are ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"option")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#or%3CT1,%20T2%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"or")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#list%3CT%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"list")),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/compositetypes#states"},(0,o.kt)("inlineCode",{parentName:"a"},"states"))," and composite type ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#enum"},(0,o.kt)("inlineCode",{parentName:"a"},"enum")),"."),(0,o.kt)("p",null,"For example on a ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"option"))," value ",(0,o.kt)("inlineCode",{parentName:"p"},"prize")," of type ",(0,o.kt)("inlineCode",{parentName:"p"},"option<tez>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"const fee =\n  match prize with\n  | some(v) -> 20% * v\n  | none    -> 5tz\n  end\n")),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/control#match-with"},"instruction")," equivalent for examples of desconstruction on the other enumerated types."),(0,o.kt)("p",null,"As for ",(0,o.kt)("inlineCode",{parentName:"p"},"if")," expression above, expressions for each enumerated value must be of same type."),(0,o.kt)("h3",{id:"a--b--c"},(0,o.kt)("inlineCode",{parentName:"h3"},"a ? b : c")),(0,o.kt)("h4",{id:"bool"},"Bool"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#bool"},(0,o.kt)("inlineCode",{parentName:"a"},"bool")),", expression ",(0,o.kt)("inlineCode",{parentName:"p"},"a ? b : c")," is a synonym of ",(0,o.kt)("inlineCode",{parentName:"p"},"if a then b else c"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"const ratio = balance > threshold ? 5% : 10%\n")),(0,o.kt)("h4",{id:"option"},"Option"),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"a")," is of type ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#option%3CT%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"option")),", expression ",(0,o.kt)("inlineCode",{parentName:"p"},"a ? b : c")," is another syntax to fold the optional value ",(0,o.kt)("inlineCode",{parentName:"p"},"a"),", where:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"b")," is the expression to evaluate in case ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"some")," value"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"c")," is the expression to evaluate in case ",(0,o.kt)("inlineCode",{parentName:"li"},"a")," is ",(0,o.kt)("inlineCode",{parentName:"li"},"none"))),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"the")," keyword is used in ",(0,o.kt)("inlineCode",{parentName:"p"},"b")," to refer to the argument of the ",(0,o.kt)("inlineCode",{parentName:"p"},"some")," value."),(0,o.kt)("p",null,"For example, if ",(0,o.kt)("inlineCode",{parentName:"p"},"prize")," is of type ",(0,o.kt)("inlineCode",{parentName:"p"},"option<tez>"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"const reward = prize ? 20% * the : 5tz\n")))}m.isMDXComponent=!0}}]);