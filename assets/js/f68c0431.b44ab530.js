"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[6028],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},l={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(t),d=o,m=f["".concat(s,".").concat(d)]||f[d]||l[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1198:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return l}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],c={sidebar_position:0},s="Sequence",p={unversionedId:"reference/instructions/sequence",id:"reference/instructions/sequence",title:"Sequence",description:"The effect of an entrypoint is composed of zero, one or several instructions presented below.",source:"@site/docs/reference/instructions/sequence.md",sourceDirName:"reference/instructions",slug:"/reference/instructions/sequence",permalink:"/archetype-docs/docs/reference/instructions/sequence",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/instructions/sequence.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{sidebar_position:0},sidebar:"docsSidebar",previous:{title:"Types",permalink:"/archetype-docs/docs/reference/types"},next:{title:"Local variable",permalink:"/archetype-docs/docs/reference/instructions/localvariable"}},u={},l=[],f={toc:l};function d(e){var n=e.components,t=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},f,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"sequence"},"Sequence"),(0,a.kt)("p",null,"The ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#effect"},"effect")," of an ",(0,a.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint"},"entrypoint")," is composed of zero, one or several instructions presented below."),(0,a.kt)("p",null,"The literal for zero instruction is ",(0,a.kt)("inlineCode",{parentName:"p"},"()"),"; several instructions are separated with ",(0,a.kt)("inlineCode",{parentName:"p"},";"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," entry point does nothing:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"entry exec() {\n  ()\n}\n")),(0,a.kt)("p",null,"Entry ",(0,a.kt)("inlineCode",{parentName:"p"},"exec")," below executes instructions ",(0,a.kt)("em",{parentName:"p"},"instr1")," and ",(0,a.kt)("em",{parentName:"p"},"instr2"),"; note there is no ",(0,a.kt)("inlineCode",{parentName:"p"},";")," after ",(0,a.kt)("em",{parentName:"p"},"instr2"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"entry exec() {\n  instr1;\n  instr2   /* no ';' after last instruction */\n}\n")),(0,a.kt)("p",null,"In conditional branches of instructions like ",(0,a.kt)("inlineCode",{parentName:"p"},"if then"),", it is necessary to delimit a sequence of instructions with ",(0,a.kt)("inlineCode",{parentName:"p"},"begin ... end"),"."),(0,a.kt)("p",null,"For example, ",(0,a.kt)("em",{parentName:"p"},"instr2")," below is ",(0,a.kt)("em",{parentName:"p"},"always")," executed because it does not belong to the conditional branch of the ",(0,a.kt)("inlineCode",{parentName:"p"},"if")," instruction:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"entry exec() {\n  if expr0 then   /* first instruction  */\n    instr1;\n    instr2        /* second instruction */\n}\n")),(0,a.kt)("p",null,"In order to execute ",(0,a.kt)("em",{parentName:"p"},"instr1")," and ",(0,a.kt)("em",{parentName:"p"},"intr2")," when epxression ",(0,a.kt)("em",{parentName:"p"},"expr0")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", use ",(0,a.kt)("inlineCode",{parentName:"p"},"begin ... end"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-archetype"},"entry exec() {\n  if expr0 then begin\n    instr1;\n    instr2\n  end\n}\n")))}d.isMDXComponent=!0}}]);