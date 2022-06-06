"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2658],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return u}});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=s(a),u=i,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return a?n.createElement(h,l(l({ref:t},m),{},{components:a})):n.createElement(h,l({ref:t},m))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9485:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return m},default:function(){return k},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var n=a(7462),i=a(3366),r=(a(7294),a(3905)),l=a(4996),o=a(941),p=["components"],s={slug:"iterable-big-map",title:"Iterable big map",authors:["br"],tags:["big map","new feature"]},m=void 0,c={permalink:"/archetype-docs/blog/iterable-big-map",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2022-04-24-iterable-big-map.md",source:"@site/blog/2022-04-24-iterable-big-map.md",title:"Iterable big map",description:"We present a new type of map called iterablebigmap, which has the scalability property of a bigmap, and which can be iterated like a basic map.",date:"2022-04-24T00:00:00.000Z",formattedDate:"April 24, 2022",tags:[{label:"big map",permalink:"/archetype-docs/blog/tags/big-map"},{label:"new feature",permalink:"/archetype-docs/blog/tags/new-feature"}],readingTime:2.875,truncated:!0,authors:[{name:"Benoit Rognier",title:"CEO Completium",url:"https://www.linkedin.com/in/benoitrognier/",imageURL:"https://media-exp1.licdn.com/dms/image/C4E03AQF04rtSnCch5A/profile-displayphoto-shrink_400_400/0/1517720007405?e=1658966400&v=beta&t=MkbCyKfZt4yuEkvDxxBk_nMUHtDFJsS42zfhcLlHVX4",key:"br"}],frontMatter:{slug:"iterable-big-map",title:"Iterable big map",authors:["br"],tags:["big map","new feature"]},prevItem:{title:"Accessing assets",permalink:"/archetype-docs/blog/asset-access"},nextItem:{title:"Events",permalink:"/archetype-docs/blog/events"}},d={authorsImageUrls:[void 0]},u=[{value:"Example",id:"example",level:2},{value:"Principle",id:"principle",level:2},{value:"Add",id:"add",level:3},{value:"Update",id:"update",level:3},{value:"Remove",id:"remove",level:3},{value:"Implementation",id:"implementation",level:2}],h={toc:u};function k(e){var t=e.components,s=(0,i.Z)(e,p);return(0,r.kt)("wrapper",(0,n.Z)({},h,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"We present a new type of map called ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#iterable_big_map%3CK,%20V%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"iterable_big_map")),", which has the scalability property of a ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"big_map")),", and which can be ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/instructions/containers#map"},"iterated")," like a basic ",(0,r.kt)("a",{parentName:"p",href:"/docs/reference/types#map%3CK,%20V%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"map")),"."),(0,r.kt)("p",null,"This feature was suggested by ",(0,r.kt)("a",{parentName:"p",href:"https://www.nomadic-labs.com/"},"Nomadic Labs"),". Thank you to ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/lucas-felli-815653111/"},"Lucas Feli")," and ",(0,r.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/charles-dehlinger-a34699166/"},"Charles Delhinger")," for the algorithm."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Consider the following declaration of an iterable big map between a ",(0,r.kt)("inlineCode",{parentName:"p"},"nat")," key and a ",(0,r.kt)("inlineCode",{parentName:"p"},"bytes")," value:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"variable ibm : iterable_big_map<nat, bytes> = []\n")),(0,r.kt)("p",null,"While ",(0,r.kt)("inlineCode",{parentName:"p"},"ibm")," has the scalability of a big map (in terms of number of entries), it can also be iterated with the ",(0,r.kt)("inlineCode",{parentName:"p"},"for")," control instruction:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"for (k,v) in ibm do\n  /* k is the key, v is the value */\ndone\n")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Note that:"),(0,r.kt)("ul",{parentName:"div"},(0,r.kt)("li",{parentName:"ul"},"the natural order of the key values is not garanteed (unlike basic ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/types#map%3CK,%20V%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"map")),")"),(0,r.kt)("li",{parentName:"ul"},"the cost of operations increases compared to a ",(0,r.kt)("a",{parentName:"li",href:"/docs/reference/types#big_map%3CK,%20V%3E"},(0,r.kt)("inlineCode",{parentName:"a"},"big_map")))))),(0,r.kt)("p",null,"An Archetype ",(0,r.kt)("a",{parentName:"p",href:"/docs/asset"},"asset")," may now be compiled as an iterable big map; it then benefits from the ",(0,r.kt)("em",{parentName:"p"},"whole")," asset ",(0,r.kt)("a",{parentName:"p",href:"/docs/asset#api"},"API"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-archetype"},"asset car to iterable_big_map {\n  vin       : string;\n  nbdoors   : nat;\n  nbrepairs : nat;\n  owner     : address;\n}\n")),(0,r.kt)("h2",{id:"principle"},"Principle"),(0,r.kt)("p",null,"Since it is always possible to iterate from ",(0,r.kt)("inlineCode",{parentName:"p"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"n"),", the idea is to create a big map that associates the iteration integer value to the map's key value. It is also necessary to associate the map key back to this iteration integer (see ",(0,r.kt)("em",{parentName:"p"},"remove")," operation below)."),(0,r.kt)("p",null,"The following example illustrates the design of two big maps called ",(0,r.kt)("em",{parentName:"p"},"Keys")," and ",(0,r.kt)("em",{parentName:"p"},"Values")," derived from the original map:"),(0,r.kt)("center",null,(0,r.kt)(o.Z,{style:{width:"80%"},alt:"IBM1",sources:{light:(0,l.Z)("/img/blog/ibm1-light.svg"),dark:(0,l.Z)("/img/blog/ibm1-dark.svg")},mdxType:"ThemedImage"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Keys")," associates the iteration integer with the map key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("em",{parentName:"li"},"Values")," is the original map where the value is augmented with the iteration integer")),(0,r.kt)("h3",{id:"add"},"Add"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"add")," operation consists in:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"associating the next iteration value (",(0,r.kt)("inlineCode",{parentName:"li"},"Size + 1"),") with the new key in the ",(0,r.kt)("em",{parentName:"li"},"Keys")," map"),(0,r.kt)("li",{parentName:"ul"},"associating the new key to the pair of next iteration value and new value in the ",(0,r.kt)("em",{parentName:"li"},"Values")," map"),(0,r.kt)("li",{parentName:"ul"},"incrementing the ",(0,r.kt)("em",{parentName:"li"},"Size")," value")),(0,r.kt)("p",null,"The operation is illustrated below with the addition of the key ",(0,r.kt)("inlineCode",{parentName:"p"},"131")," with value ",(0,r.kt)("inlineCode",{parentName:"p"},"e5"),":"),(0,r.kt)("center",null,(0,r.kt)(o.Z,{style:{width:"80%"},alt:"IBM1",sources:{light:(0,l.Z)("/img/blog/ibm2-light.svg"),dark:(0,l.Z)("/img/blog/ibm2-dark.svg")},mdxType:"ThemedImage"})),(0,r.kt)("h3",{id:"update"},"Update"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"update")," operation is straightforward and consists in updating the ",(0,r.kt)("em",{parentName:"p"},"Values")," map with the new value."),(0,r.kt)("h3",{id:"remove"},"Remove"),(0,r.kt)("p",null,"The ",(0,r.kt)("em",{parentName:"p"},"remove")," operation is a step-wise process:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the iteration index of the removed key is retrieved from the ",(0,r.kt)("em",{parentName:"li"},"Values")," map and used to remove the entry in the ",(0,r.kt)("em",{parentName:"li"},"Keys")," map"),(0,r.kt)("li",{parentName:"ul"},"the entry is then removed from the ",(0,r.kt)("em",{parentName:"li"},"Values")," map")),(0,r.kt)("p",null,"At this stage, the iteration values are not consistent since one iteration value has been removed."),(0,r.kt)("p",null,"It is then necessary to associate the last added element with the removed iteration integer by:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"removing the last iteration integer and associate back the removed iteration integer with the last added key in the ",(0,r.kt)("em",{parentName:"li"},"Keys")," mpa"),(0,r.kt)("li",{parentName:"ul"},"updating the iteration integer of last added key in the ",(0,r.kt)("em",{parentName:"li"},"Values")," map")),(0,r.kt)("p",null,"The process is illustrated below with the removal of the entry ",(0,r.kt)("inlineCode",{parentName:"p"},"29")," (associated with iteration value ",(0,r.kt)("inlineCode",{parentName:"p"},"2"),"):"),(0,r.kt)("center",null,(0,r.kt)(o.Z,{style:{width:"80%"},alt:"IBM1",sources:{light:(0,l.Z)("/img/blog/ibm3-light.svg"),dark:(0,l.Z)("/img/blog/ibm3-dark.svg")},mdxType:"ThemedImage"})),(0,r.kt)("h2",{id:"implementation"},"Implementation"),(0,r.kt)("p",null,"An iterable big map is implemented as a triplet of two big maps (",(0,r.kt)("em",{parentName:"p"},"Keys")," and ",(0,r.kt)("em",{parentName:"p"},"Values"),") and one ",(0,r.kt)("em",{parentName:"p"},"Size")," integer."),(0,r.kt)("p",null,"The screenshot below of ",(0,r.kt)("a",{parentName:"p",href:"https://better-call.dev/"},"Better Call Dev")," shows the resulting triplet:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ibm4",src:a(1885).Z,width:"1238",height:"226"})))}k.isMDXComponent=!0},1885:function(e,t,a){t.Z=a.p+"assets/images/ibm4-4f2e1d8cdb6958333d4639b10c76426d.png"}}]);