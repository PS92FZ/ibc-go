"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8019],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,g=d["".concat(l,".").concat(u)]||d[u]||m[u]||r;return n?i.createElement(g,o(o({ref:t},c),{},{components:n})):i.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},71658:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const r={title:"Handling Genesis",sidebar_label:"Handling Genesis",sidebar_position:8,slug:"/ibc/light-clients/genesis"},o="Genesis metadata",s={unversionedId:"ibc/light-clients/genesis",id:"version-v7.3.x/ibc/light-clients/genesis",title:"Handling Genesis",description:"Learn how to implement the ExportMetadata interface",source:"@site/versioned_docs/version-v7.3.x/03-ibc/01-light-clients/08-genesis.md",sourceDirName:"03-ibc/01-light-clients",slug:"/ibc/light-clients/genesis",permalink:"/v7.3.x/ibc/light-clients/genesis",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:8,frontMatter:{title:"Handling Genesis",sidebar_label:"Handling Genesis",sidebar_position:8,slug:"/ibc/light-clients/genesis"},sidebar:"defaultSidebar",previous:{title:"Handling Proposals",permalink:"/v7.3.x/ibc/light-clients/proposals"},next:{title:"Setup",permalink:"/v7.3.x/ibc/light-clients/setup"}},l={},p=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2}],c={toc:p},d="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"genesis-metadata"},"Genesis metadata"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn how to implement the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExportMetadata")," interface ")),(0,a.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://docs.cosmos.network/v0.47/building-modules/genesis"},"Cosmos SDK module genesis"))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," instances are provided their own isolated and namespaced client store upon initialisation. ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," implementations may choose to store any amount of arbitrary metadata in order to verify counterparty consensus state and perform light client updates correctly. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ExportMetadata")," method of the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/e650be91614ced7be687c30eb42714787a3bbc59/modules/core/exported/client.go"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState")," interface")," provides light client modules with the ability to persist metadata in genesis exports. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"ExportMetadata(clientStore sdk.KVStore) []GenesisMetadata\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ExportMetadata")," is provided the client store and returns an array of ",(0,a.kt)("inlineCode",{parentName:"p"},"GenesisMetadata"),". For maximum flexibility, ",(0,a.kt)("inlineCode",{parentName:"p"},"GenesisMetadata")," is defined as a simple interface containing two distinct ",(0,a.kt)("inlineCode",{parentName:"p"},"Key")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Value")," accessor methods."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type GenesisMetadata interface {\n  // return store key that contains metadata without clientID-prefix\n  GetKey() []byte\n  // returns metadata value\n  GetValue() []byte\n}\n")),(0,a.kt)("p",null,"This allows ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," instances to retrieve and export any number of key-value pairs which are maintained within the store in their raw ",(0,a.kt)("inlineCode",{parentName:"p"},"[]byte")," form."),(0,a.kt)("p",null,"When a chain is started with a ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json")," file which contains ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," metadata (for example, when performing manual upgrades using an exported ",(0,a.kt)("inlineCode",{parentName:"p"},"genesis.json"),") the ",(0,a.kt)("inlineCode",{parentName:"p"},"02-client")," submodule of core IBC will handle setting the key-value pairs within their respective client stores. ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/core/02-client/genesis.go#L18-L22"},"See ",(0,a.kt)("inlineCode",{parentName:"a"},"02-client")," ",(0,a.kt)("inlineCode",{parentName:"a"},"InitGenesis")),"."),(0,a.kt)("p",null,"Please refer to the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/02-client-refactor-beta1/modules/light-clients/07-tendermint/genesis.go#L12"},"Tendermint light client implementation")," for an example."))}m.isMDXComponent=!0}}]);