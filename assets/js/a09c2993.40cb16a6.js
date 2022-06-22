"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[4128],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},s),{},{components:n})):r.createElement(f,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8495:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return l},default:function(){return d},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],c={},l="Introduction",p={unversionedId:"introduction",id:"introduction",title:"Introduction",description:"Archetype is an elegant generic-purpose language to develop Smart Contracts on the Tezos blockchain.",source:"@site/docs/introduction.md",sourceDirName:".",slug:"/introduction",permalink:"/docs/introduction",draft:!1,editUrl:"https://github.com/completium/archetype-docs/blob/main/docs/introduction.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",next:{title:"Installation",permalink:"/docs/installation"}},s={},u=[{value:"Documentation",id:"documentation",level:2},{value:"Fast track",id:"fast-track",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Archetype is an elegant generic-purpose language to develop Smart Contracts on the ",(0,o.kt)("a",{parentName:"p",href:"https://tezos.com/"},"Tezos")," blockchain."),(0,o.kt)("p",null,"\u26a1\ufe0f It supports all ",(0,o.kt)("a",{parentName:"p",href:"https://tezos.gitlab.io/michelson-reference/"},"Michelson")," features, but also provides exclusive ",(0,o.kt)("em",{parentName:"p"},"high-level features")," for a precise and concise source code, that make contracts easier to develop, read and maintain."),(0,o.kt)("h2",{id:"documentation"},"Documentation"),(0,o.kt)("p",null,"The core of this documentation is the language ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/"},"Reference")," organised in four parts (Declarations, ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types"},"Types"),", Instructions and Expressions), on top of which are thematic articles (Language Basics, ",(0,o.kt)("a",{parentName:"p",href:"/docs/asset"},"Asset"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/statemachine"},"State Machine"),")."),(0,o.kt)("h2",{id:"fast-track"},"Fast track"),(0,o.kt)("p",null,"Consider the following contract:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype",metastring:'title="hello.arl"',title:'"hello.arl"'},'archetype hello\n\nvariable msg : string = "Hello"\n\nentry input(name : string) {\n  msg += (length(msg) > 5 ? "," : "") + " " + name\n}\n')),(0,o.kt)("p",null,"Click on a language element to learn more:"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/contract"},(0,o.kt)("inlineCode",{parentName:"a"},"archetype"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/storage#variable"},(0,o.kt)("inlineCode",{parentName:"a"},"variable"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#string"},(0,o.kt)("inlineCode",{parentName:"a"},"string"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint"},(0,o.kt)("inlineCode",{parentName:"a"},"entry"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/instructions/assignment#a--b-1"},(0,o.kt)("inlineCode",{parentName:"a"},"+="))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/builtins#length(o%20:%20T)"},(0,o.kt)("inlineCode",{parentName:"a"},"length"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b-11"},(0,o.kt)("inlineCode",{parentName:"a"},">"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/controls#a--b--c"},(0,o.kt)("inlineCode",{parentName:"a"},"? :"))," ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/expressions/operators/arithmetic#a--b"},(0,o.kt)("inlineCode",{parentName:"a"},"+"))),(0,o.kt)("p",null,"Deploy contract with ",(0,o.kt)("a",{parentName:"p",href:"/docs/installation#completium-cli"},"Completium CLI"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"completium-cli deploy hello.arl\n")),(0,o.kt)("p",null,"Call contract's entrypoint ",(0,o.kt)("inlineCode",{parentName:"p"},"input")," with argument ",(0,o.kt)("inlineCode",{parentName:"p"},'"Archetype"'),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'completium-cli call hello --arg \'{ "name": "Archetype" }\'\n')))}d.isMDXComponent=!0}}]);