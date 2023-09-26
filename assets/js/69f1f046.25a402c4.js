"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7193],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),d=r,f=c["".concat(l,".").concat(d)]||c[d]||h[d]||i;return n?a.createElement(f,o(o({ref:t},u),{},{components:n})):a.createElement(f,o({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},40555:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const i={title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/authorizations"},o="TransferAuthorization",s={unversionedId:"apps/transfer/authorizations",id:"version-v6.2.x/apps/transfer/authorizations",title:"Authorizations",description:"TransferAuthorization implements the Authorization interface for ibc.applications.transfer.v1.MsgTransfer. It allows a granter to grant a grantee the privilege to submit MsgTransfer on its behalf. Please see the Cosmos SDK docs for more details on granting privileges via the x/authz module.",source:"@site/versioned_docs/version-v6.2.x/02-apps/01-transfer/08-authorizations.md",sourceDirName:"02-apps/01-transfer",slug:"/apps/transfer/authorizations",permalink:"/v6.2.x/apps/transfer/authorizations",draft:!1,tags:[],version:"v6.2.x",sidebarPosition:8,frontMatter:{title:"Authorizations",sidebar_label:"Authorizations",sidebar_position:8,slug:"/apps/transfer/authorizations"},sidebar:"defaultSidebar",previous:{title:"Params",permalink:"/v6.2.x/apps/transfer/params"},next:{title:"Overview",permalink:"/v6.2.x/apps/interchain-accounts/overview"}},l={},p=[],u={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"transferauthorization"},(0,r.kt)("inlineCode",{parentName:"h1"},"TransferAuthorization")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"TransferAuthorization")," implements the ",(0,r.kt)("inlineCode",{parentName:"p"},"Authorization")," interface for ",(0,r.kt)("inlineCode",{parentName:"p"},"ibc.applications.transfer.v1.MsgTransfer"),". It allows a granter to grant a grantee the privilege to submit ",(0,r.kt)("inlineCode",{parentName:"p"},"MsgTransfer")," on its behalf. Please see the ",(0,r.kt)("a",{parentName:"p",href:"https://docs.cosmos.network/v0.47/modules/authz"},"Cosmos SDK docs")," for more details on granting privileges via the ",(0,r.kt)("inlineCode",{parentName:"p"},"x/authz")," module."),(0,r.kt)("p",null,"More specifically, the granter allows the grantee to transfer funds that belong to the granter over a specified channel."),(0,r.kt)("p",null,"For the specified channel, the granter must be able to specify a spend limit of a specific denomination they wish to allow the grantee to be able to transfer."),(0,r.kt)("p",null,"The granter may be able to specify the list of addresses that they allow to receive funds. If empty, then all addresses are allowed."),(0,r.kt)("p",null,"It takes: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("inlineCode",{parentName:"p"},"SourcePort")," and a ",(0,r.kt)("inlineCode",{parentName:"p"},"SourceChannel")," which together comprise the unique transfer channel identifier over which authorized funds can be transferred.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"a ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendLimit")," that specifies the maximum amount of tokens the grantee can transfer. The ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendLimit")," is updated as the tokens are transfered, unless the sentinel value of the maximum value for a 256-bit unsigned integer (i.e. 2^256 - 1) is used for the amount, in which case the ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendLimit")," will not be updated (please be aware that using this sentinel value will grant the grantee the privilege to transfer ",(0,r.kt)("strong",{parentName:"p"},"all")," the tokens of a given denomination available at the granter's account). The helper function ",(0,r.kt)("inlineCode",{parentName:"p"},"UnboundedSpendLimit")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"types")," package of the ",(0,r.kt)("inlineCode",{parentName:"p"},"transfer")," module provides the sentinel value that can be used. This ",(0,r.kt)("inlineCode",{parentName:"p"},"SpendLimit")," may also be updated to increase or decrease the limit as the granter wishes.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"an ",(0,r.kt)("inlineCode",{parentName:"p"},"AllowList")," list that specifies the list of addresses that are allowed to receive funds. If this list is empty, then all addresses are allowed to receive funds from the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransferAuthorization"),"."))),(0,r.kt)("p",null,"Setting a ",(0,r.kt)("inlineCode",{parentName:"p"},"TransferAuthorization")," is expected to fail if:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the spend limit is nil"),(0,r.kt)("li",{parentName:"ul"},"the denomination of the spend limit is an invalid coin type"),(0,r.kt)("li",{parentName:"ul"},"the source port ID is invalid"),(0,r.kt)("li",{parentName:"ul"},"the source channel ID is invalid"),(0,r.kt)("li",{parentName:"ul"},"there are duplicate entries in the ",(0,r.kt)("inlineCode",{parentName:"li"},"AllowList"))),(0,r.kt)("p",null,"Below is the ",(0,r.kt)("inlineCode",{parentName:"p"},"TransferAuthorization")," message:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-golang"},"func NewTransferAuthorization(allocations ...Allocation) *TransferAuthorization {\n    return &TransferAuthorization{\n        Allocations: allocations,\n    }\n}\n\ntype Allocation struct {\n    // the port on which the packet will be sent\n    SourcePort string \n    // the channel by which the packet will be sent\n    SourceChannel string \n    // spend limitation on the channel\n    SpendLimit sdk.Coins  \n    // allow list of receivers, an empty allow list permits any receiver address\n    AllowList []string \n}\n\n")))}h.isMDXComponent=!0}}]);