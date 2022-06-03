"use strict";(self.webpackChunkarchetype_docs=self.webpackChunkarchetype_docs||[]).push([[2099],{1519:function(e,t,r){r.d(t,{Z:function(){return v}});var i=r(3366),n=r(7462),a=r(7294),o=r(6010),l=r(7192),s=r(1796),c=r(2110),d=r(1539),p=r(8979);function u(e){return(0,p.Z)("MuiDivider",e)}(0,r(6087).Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var m=r(5893);const g=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],h=(0,c.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:e.palette.divider,borderBottomWidth:"thin"},t.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},t.light&&{borderColor:(0,s.Fq)(e.palette.divider,.08)},"inset"===t.variant&&{marginLeft:72},"middle"===t.variant&&"horizontal"===t.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===t.variant&&"vertical"===t.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===t.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},t.flexItem&&{alignSelf:"stretch",height:"auto"})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{position:"relative",width:"100%",borderTop:`thin solid ${e.palette.divider}`,top:"50%",content:'""',transform:"translateY(50%)"}})),(({theme:e,ownerState:t})=>(0,n.Z)({},t.children&&"vertical"===t.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",top:"0%",left:"50%",borderTop:0,borderLeft:`thin solid ${e.palette.divider}`,transform:"translateX(0%)"}})),(({ownerState:e})=>(0,n.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}}))),f=(0,c.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((({theme:e,ownerState:t})=>(0,n.Z)({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`},"vertical"===t.orientation&&{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`})));var v=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiDivider"}),{absolute:a=!1,children:s,className:c,component:p=(s?"div":"hr"),flexItem:v=!1,light:b=!1,orientation:x="horizontal",role:Z=("hr"!==p?"separator":void 0),textAlign:y="center",variant:w="fullWidth"}=r,k=(0,i.Z)(r,g),A=(0,n.Z)({},r,{absolute:a,component:p,flexItem:v,light:b,orientation:x,role:Z,textAlign:y,variant:w}),B=(e=>{const{absolute:t,children:r,classes:i,flexItem:n,light:a,orientation:o,textAlign:s,variant:c}=e,d={root:["root",t&&"absolute",c,a&&"light","vertical"===o&&"vertical",n&&"flexItem",r&&"withChildren",r&&"vertical"===o&&"withChildrenVertical","right"===s&&"vertical"!==o&&"textAlignRight","left"===s&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,l.Z)(d,u,i)})(A);return(0,m.jsx)(h,(0,n.Z)({as:p,className:(0,o.Z)(B.root,c),role:Z,ref:t,ownerState:A},k,{children:s?(0,m.jsx)(f,{className:B.wrapper,ownerState:A,children:s}):null}))}))},5861:function(e,t,r){r.d(t,{Z:function(){return x}});var i=r(3366),n=r(7462),a=r(7294),o=r(6010),l=r(9707),s=r(7192),c=r(2110),d=r(1539),p=r(8216),u=r(8979);function m(e){return(0,u.Z)("MuiTypography",e)}(0,r(6087).Z)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var g=r(5893);const h=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],f=(0,c.ZP)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.variant&&t[r.variant],"inherit"!==r.align&&t[`align${(0,p.Z)(r.align)}`],r.noWrap&&t.noWrap,r.gutterBottom&&t.gutterBottom,r.paragraph&&t.paragraph]}})((({theme:e,ownerState:t})=>(0,n.Z)({margin:0},t.variant&&e.typography[t.variant],"inherit"!==t.align&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16}))),v={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},b={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"};var x=a.forwardRef((function(e,t){const r=(0,d.Z)({props:e,name:"MuiTypography"}),a=(e=>b[e]||e)(r.color),c=(0,l.Z)((0,n.Z)({},r,{color:a})),{align:u="inherit",className:x,component:Z,gutterBottom:y=!1,noWrap:w=!1,paragraph:k=!1,variant:A="body1",variantMapping:B=v}=c,S=(0,i.Z)(c,h),M=(0,n.Z)({},c,{align:u,color:a,className:x,component:Z,gutterBottom:y,noWrap:w,paragraph:k,variant:A,variantMapping:B}),C=Z||(k?"p":B[A]||v[A])||"span",R=(e=>{const{align:t,gutterBottom:r,noWrap:i,paragraph:n,variant:a,classes:o}=e,l={root:["root",a,"inherit"!==e.align&&`align${(0,p.Z)(t)}`,r&&"gutterBottom",i&&"noWrap",n&&"paragraph"]};return(0,s.Z)(l,m,o)})(M);return(0,g.jsx)(f,(0,n.Z)({as:C,ref:t,ownerState:M,className:(0,o.Z)(R.root,x)},S))}))},8216:function(e,t,r){var i=r(8320);t.Z=i.Z},4810:function(e,t,r){r.d(t,{Z:function(){return l}});r(7294);var i=r(4880),n=r(8357),a=r(5893);const o=(0,n.Z)({key:"css",prepend:!0});function l(e){const{injectFirst:t,children:r}=e;return t?(0,a.jsx)(i.C,{value:o,children:r}):r}},6457:function(e,t,r){r.d(t,{Z:function(){return p}});var i=r(7294),n=r(9960),a=r(6886),o=r(1519),l=r(5861),s=r(4810),c=r(2321),d=function(e){return i.createElement(a.ZP,{item:!0,container:!0,xs:12},i.createElement(a.ZP,{item:!0,xs:12},i.createElement(o.Z,{className:c.Z.divider,style:{marginBottom:"8px",marginTop:"4px"}})),i.createElement(a.ZP,{item:!0,xs:12,sm:3,md:3,style:{paddingLeft:"8px"}},i.createElement(n.Z,{to:e.data.link},i.createElement("code",null,e.data.label))),i.createElement(a.ZP,{item:!0,xs:12,sm:9,md:9,style:{marginBottom:"8px"}},i.createElement(l.Z,{style:{fontFamily:"IBM Plex Sans"}},e.data.desc)))};function p(e){return i.createElement(s.Z,{injectFirst:!0},i.createElement(a.ZP,{container:!0},i.createElement(a.ZP,{item:!0,style:{paddingLeft:"8px"}},i.createElement(l.Z,{style:{fontFamily:"IBM Plex Sans",color:"grey"}},e.title)),e.data.map((function(e){return i.createElement(d,{data:e})}))))}},3277:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return c},metadata:function(){return p},toc:function(){return m}});var i=r(7462),n=r(3366),a=(r(7294),r(3905)),o={instructions:[{label:":=",link:"/docs/reference/instructions/assignment#record",desc:"Assigns a value to a field record"},{label:"+=",link:"/docs/reference/instructions/assignment#a--b-1",desc:"Increments a field record"},{label:"-=",link:"/docs/reference/instructions/assignment#a---b",desc:"Decrement a field record"},{label:"*=",link:"/docs/reference/instructions/assignment#a--b-2",desc:"Multiplies a field record"},{label:"/=",link:"/docs/reference/instructions/assignment#a--b-3",desc:"Divides a field record"},{label:"&=",link:"/docs/reference/instructions/assignment#a--b-4",desc:"Applies logical conjonction to a field record"},{label:"|=",link:"/docs/reference/instructions/assignment#a--b-5",desc:"Applies logical disjunction to a field record"}],operators:[{label:"{ with }",link:"/docs/reference/expressions/operators/copy",desc:"Copies a record with field assignments"},{label:".",link:"/docs/reference/expressions/operators/access#ab-1",desc:"Accesses a record's field"}]},l=r(6457),s=["components"],c={sidebar_position:10},d="Composite types",p={unversionedId:"language-basics/composite",id:"language-basics/composite",title:"Composite types",description:"Tuple",source:"@site/docs/language-basics/composite.md",sourceDirName:"language-basics",slug:"/language-basics/composite",permalink:"/archetype-docs/docs/language-basics/composite",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/language-basics/composite.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10},sidebar:"docsSidebar",previous:{title:"Basic types",permalink:"/archetype-docs/docs/language-basics/types"},next:{title:"Basic containers",permalink:"/archetype-docs/docs/language-basics/container"}},u={},m=[{value:"Tuple",id:"tuple",level:2},{value:"Record",id:"record",level:2},{value:"Enum",id:"enum",level:2}],g={toc:m};function h(e){var t=e.components,r=(0,n.Z)(e,s);return(0,a.kt)("wrapper",(0,i.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"composite-types"},"Composite types"),(0,a.kt)("h2",{id:"tuple"},"Tuple"),(0,a.kt)("h2",{id:"record"},"Record"),(0,a.kt)(l.Z,{title:"Instructions",data:o.instructions,mdxType:"Api"}),(0,a.kt)("br",null),(0,a.kt)(l.Z,{title:"Operators",data:o.operators,mdxType:"Api"}),(0,a.kt)("br",null),(0,a.kt)("h2",{id:"enum"},"Enum"))}h.isMDXComponent=!0},2321:function(e,t){t.Z={divider:"divider_LuCZ"}}}]);