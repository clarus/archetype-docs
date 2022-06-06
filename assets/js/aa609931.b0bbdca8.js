"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[8748],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),l=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=r,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||o;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var l=2;l<o;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2144:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],p={sidebar_position:3},s="Composite types",l={unversionedId:"reference/declarations/compositetypes",id:"reference/declarations/compositetypes",title:"Composite types",description:"Archetype provides user-defined composite types on top of basic types.",source:"@site/docs/reference/declarations/compositetypes.md",sourceDirName:"reference/declarations",slug:"/reference/declarations/compositetypes",permalink:"/archetype-docs/docs/reference/declarations/compositetypes",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/reference/declarations/compositetypes.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"docsSidebar",previous:{title:"Storage",permalink:"/archetype-docs/docs/reference/declarations/storage"},next:{title:"Inlined",permalink:"/archetype-docs/docs/reference/declarations/inlined"}},c={},d=[{value:"Tuple",id:"tuple",level:2},{value:"Record",id:"record",level:2},{value:"Default value",id:"default-value",level:3},{value:"Michelson representation",id:"michelson-representation",level:3},{value:"Enum",id:"enum",level:2},{value:"Michelson representation",id:"michelson-representation-1",level:3},{value:"States",id:"states",level:2},{value:"Event",id:"event",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"composite-types"},"Composite types"),(0,o.kt)("p",null,"Archetype provides user-defined ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite"},"composite types")," on top of basic ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types"},"types"),"."),(0,o.kt)("h2",{id:"tuple"},"Tuple"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#tuple"},"tuple")," is a list of anonymous values of different types. The type is a list of types separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"*"),". A tuple litteral is a list of values separated by ",(0,o.kt)("inlineCode",{parentName:"p"},",")," and surrounded by parentheis."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},'const t : string * nat = ("a string", 2)\n')),(0,o.kt)("p",null,"It is represented in Michelson as a right-comb pair of values."),(0,o.kt)("h2",{id:"record"},"Record"),(0,o.kt)("p",null,"A ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},"record")," is a list of named fields of different types. It is declared by the ",(0,o.kt)("inlineCode",{parentName:"p"},"record")," keyword followed by a list of pairs of an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and a basic ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types"},"type")," or a ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite"},"composite type"),". It ",(0,o.kt)("em",{parentName:"p"},"cannot")," be recursive though."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"record voter {\n  weight   : nat;             /* weight is accumulated by delegation */\n  voted    : bool;            /* if true, that person already voted  */\n  delegate : option<address>; /* person delegated to                 */\n  vote     : nat;             /* index of the voted proposal         */\n}\n")),(0,o.kt)("h3",{id:"default-value"},"Default value"),(0,o.kt)("p",null,"It is possible to specify the default value of a record field."),(0,o.kt)("p",null,"For example, the following declaration specifies that the default values of ",(0,o.kt)("inlineCode",{parentName:"p"},"voted")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"delegate")," fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"record voter {\n  weight   : nat;\n  voted    : bool = false;\n  delegate : option<address> = none;\n  vote     : nat;\n}\n")),(0,o.kt)("p",null,"The effect is that fields with a default value may not be specified when creating a record value. For example, the following creates a ",(0,o.kt)("inlineCode",{parentName:"p"},"voter")," record without specified values for these fields:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"var v = { weight = 1; vote = 234523 };\n")),(0,o.kt)("h3",{id:"michelson-representation"},"Michelson representation"),(0,o.kt)("p",null,"By default, the Michelson structure of a record is a ",(0,o.kt)("em",{parentName:"p"},"right comb")," of pairs."),(0,o.kt)("p",null,"It means for example that the Michelson type of the ",(0,o.kt)("inlineCode",{parentName:"p"},"voter")," record declared above is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pair (nat %weight) (pair (bool %voted) pair ((option %delegate address) (nat %vote)))\n")),(0,o.kt)("p",null,"It is possible to specify another structure and/or other field names, with the ",(0,o.kt)("inlineCode",{parentName:"p"},"as")," keyword, as illustrated below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"record voter {\n  weight   : nat;\n  voted    : bool = false;\n  delegate : option<address> = none;\n  vote     : nat;\n} as (((w, has_voted), (del, vote)))\n")),(0,o.kt)("p",null,"The resulting Michelson type is then:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"pair (pair (nat %w) (bool %has_voted)) (pair (option %del address) (nat %vote))\n")),(0,o.kt)("h2",{id:"enum"},"Enum"),(0,o.kt)("p",null,"An ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#enum"},"enumeration")," is a union type of a fixed set of named types. It is declared by the ",(0,o.kt)("inlineCode",{parentName:"p"},"enum")," keyword followed by an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/declarations/identifier"},"identifier")," and the list of names types separated by ",(0,o.kt)("inlineCode",{parentName:"p"},"|"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"enum juice_size =\n| Small\n| Medium\n| Large\n")),(0,o.kt)("p",null,"Named types may take an argument of any basic ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types"},"type")," or composite type (",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#tuple"},"tuple"),", ",(0,o.kt)("a",{parentName:"p",href:"/docs/language-basics/composite#record"},"record"),", ...) (it ",(0,o.kt)("em",{parentName:"p"},"cannot")," be recursive though)."),(0,o.kt)("p",null,"For example, the type ",(0,o.kt)("inlineCode",{parentName:"p"},"RGB")," below is the tuple of 3 ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,o.kt)("inlineCode",{parentName:"a"},"nat")),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"enum color =\n| RGB<nat * nat * nat>\n| Hex<bytes>\n| Css<string>\n")),(0,o.kt)("h3",{id:"michelson-representation-1"},"Michelson representation"),(0,o.kt)("p",null,"When named types have no argument (like in ",(0,o.kt)("inlineCode",{parentName:"p"},"juice_size")," example above), they are represented by an ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,o.kt)("inlineCode",{parentName:"a"},"int"))," value from ",(0,o.kt)("inlineCode",{parentName:"p"},"0")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"n-1")," if ",(0,o.kt)("inlineCode",{parentName:"p"},"n")," is the number of named types."),(0,o.kt)("p",null,"With argument (like in ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," example above), named types are represented with imbricated ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#or%3CT1,%20T2%3E"},(0,o.kt)("inlineCode",{parentName:"a"},"or"))," values. For example the Michelson type of ",(0,o.kt)("inlineCode",{parentName:"p"},"color")," is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"or (pair %RGB nat (pair nat nat)) (or (bytes %Hex) (string %Css))\n")),(0,o.kt)("h2",{id:"states"},"States"),(0,o.kt)("p",null,"When designing the contract as a ",(0,o.kt)("a",{parentName:"p",href:"/docs/statemachine"},"state machine"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"states")," keyword is used to declare the list of states."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"states =\n| Pending initial\n| Shipped\n| Accepted\n| Rejected\n| Canceled\n")),(0,o.kt)("p",null,"One state may be followed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"initial")," keyword to specify the initial machine's state. If omitted, the first state is the initial state."),(0,o.kt)("p",null,"The Michelson representation of the contract state is a storage variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"_state")," and typed ",(0,o.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,o.kt)("inlineCode",{parentName:"a"},"nat")),"."),(0,o.kt)("h2",{id:"event"},"Event"),(0,o.kt)("p",null,"Archetype defines ",(0,o.kt)("a",{parentName:"p",href:"/blog/events"},"events")," with the ",(0,o.kt)("inlineCode",{parentName:"p"},"event")," keyword declaration. An event may possess several fields, like a record."),(0,o.kt)("p",null,"For example the following declares the HighestBidIncreased event with two fields bidder and amount:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-archetype"},"event HighestBidIncreased {\n  bidder : address;\n  amount : tez\n}\n")))}m.isMDXComponent=!0}}]);