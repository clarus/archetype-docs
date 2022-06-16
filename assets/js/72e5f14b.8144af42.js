"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[8079],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),h=r,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||i;return n?a.createElement(m,o(o({ref:t},l),{},{components:n})):a.createElement(m,o({ref:t},l))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6840:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return c},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return d}});var a=n(7462),r=n(3366),i=(n(7294),n(3905)),o=["components"],s={},c="State Machine",p={unversionedId:"statemachine",id:"statemachine",title:"State Machine",description:"A state machine defines a global state and transitions from one state to another.",source:"@site/docs/statemachine.md",sourceDirName:".",slug:"/statemachine",permalink:"/docs/statemachine",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/statemachine.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Asset",permalink:"/docs/asset"},next:{title:"Reference",permalink:"/docs/reference/"}},l={},d=[{value:"States",id:"states",level:2},{value:"Transitions",id:"transitions",level:2},{value:"Check state",id:"check-state",level:2},{value:"Section",id:"section",level:3},{value:"<code>state</code> constant",id:"state-constant",level:3}],u={toc:d};function h(e){var t=e.components,n=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"state-machine"},"State Machine"),(0,i.kt)("p",null,"A ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Finite-state_machine"},"state machine")," defines a global ",(0,i.kt)("em",{parentName:"p"},"state")," and ",(0,i.kt)("em",{parentName:"p"},"transitions")," from one state to another."),(0,i.kt)("p",null,"Archetype provides the possibility to design the contract as a state machine; it simplifies the management of the contract's state compared to a manual management with ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#bool"},(0,i.kt)("inlineCode",{parentName:"a"},"bool"))," or ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/types#nat"},(0,i.kt)("inlineCode",{parentName:"a"},"nat"))," variables, because the only way to change the contract state is through transition entrypoints, which puts the contract's state under ",(0,i.kt)("em",{parentName:"p"},"explicit")," control."),(0,i.kt)("h2",{id:"states"},"States"),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"states")," keyword is used to declare the contract's states."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"states =\n| Pending initial\n| Shipped\n| Accepted\n| Rejected\n| Canceled\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/compositetypes#states"},"states")," article for more information."),(0,i.kt)("h2",{id:"transitions"},"Transitions"),(0,i.kt)("p",null,"A transition is an entrypoint that changes the contract states. It provides a dedicated syntax to define guard conditions and transition effect."),(0,i.kt)("p",null,"For example, the following entrypoint"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"transition accept() {\n  called by buyer\n  from Shipped\n  to   Accepted\n  with effect {\n    transfer balance to seller\n  }\n}\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#transition"},"transition")," article for more information."),(0,i.kt)("h2",{id:"check-state"},"Check state"),(0,i.kt)("h3",{id:"section"},"Section"),(0,i.kt)("p",null,"The ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#state-is"},(0,i.kt)("inlineCode",{parentName:"a"},"state is"))," section allows the execution of an entrypoint (ie does not fail) only when the contract is in the specified state."),(0,i.kt)("p",null,"For example, the following entrypoint fails if the current contract state is ",(0,i.kt)("em",{parentName:"p"},"not")," ",(0,i.kt)("inlineCode",{parentName:"p"},"Accepted"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"entry pay() {\n  state is Accepted\n  /* ... other sections ... */\n}\n")),(0,i.kt)("p",null,"See the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/declarations/entrypoint#sections"},"Sections")," article for more information on sections."),(0,i.kt)("h3",{id:"state-constant"},(0,i.kt)("inlineCode",{parentName:"h3"},"state")," constant"),(0,i.kt)("p",null,"It is possible to interrogate the contract state anywhere in any entrypoint effect with the ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/expressions/constants#state"},(0,i.kt)("inlineCode",{parentName:"a"},"state"))," constant. It is not possible to assign a value with an ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/assignment"},"assignment")," instruction. Use a ",(0,i.kt)("a",{parentName:"p",href:"/docs/statemachine#transitions"},"transition")," to change contract's state."),(0,i.kt)("p",null,"The constant may be interrogated with an ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/control#if"},(0,i.kt)("inlineCode",{parentName:"a"},"if"))," or a ",(0,i.kt)("a",{parentName:"p",href:"/docs/reference/instructions/control#match-with"},(0,i.kt)("inlineCode",{parentName:"a"},"match with"))," instruction."),(0,i.kt)("p",null,"For example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"if state = Canceled then /* ... */\n")),(0,i.kt)("p",null,"or:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-archetype"},"match state with\n| Pending  -> instr1 /* when in Pending  state */\n| Shipped  -> instr2 /* when in Shipped  state */\n| Accepted -> instr3 /* when in Accepted state */\n| Rejected -> instr4 /* when in Rejected state */\n| Canceled -> instr5 /* when in Canceled state */\nend;\n")))}h.isMDXComponent=!0}}]);