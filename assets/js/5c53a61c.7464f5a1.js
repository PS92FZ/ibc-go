"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[714],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),m=a,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||i;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},50981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(87462),a=(n(67294),n(3905));const i={title:"Fee Distribution",sidebar_label:"Fee Distribution",sidebar_position:4,slug:"/middleware/ics29-fee/fee-distribution"},o="Fee distribution",s={unversionedId:"middleware/ics29-fee/fee-distribution",id:"version-v4.4.x/middleware/ics29-fee/fee-distribution",title:"Fee Distribution",description:"Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators.",source:"@site/versioned_docs/version-v4.4.x/03-middleware/01-ics29-fee/04-fee-distribution.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/fee-distribution",permalink:"/v4.4.x/middleware/ics29-fee/fee-distribution",draft:!1,tags:[],version:"v4.4.x",sidebarPosition:4,frontMatter:{title:"Fee Distribution",sidebar_label:"Fee Distribution",sidebar_position:4,slug:"/middleware/ics29-fee/fee-distribution"},sidebar:"defaultSidebar",previous:{title:"Fee Messages",permalink:"/v4.4.x/middleware/ics29-fee/msgs"},next:{title:"Events",permalink:"/v4.4.x/middleware/ics29-fee/events"}},l={},d=[{value:"Pre-requisite readings",id:"pre-requisite-readings",level:2},{value:"Register a counterparty payee address for forward relaying",id:"register-a-counterparty-payee-address-for-forward-relaying",level:2},{value:"Relayer operator actions?",id:"relayer-operator-actions",level:3},{value:"Register an alternative payee address for reverse and timeout relaying",id:"register-an-alternative-payee-address-for-reverse-and-timeout-relaying",level:2},{value:"Relayer operator actions",id:"relayer-operator-actions-1",level:3}],c={toc:d},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"fee-distribution"},"Fee distribution"),(0,a.kt)("admonition",{title:"Synopsis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Learn about payee registration for the distribution of packet fees. The following document is intended for relayer operators. ")),(0,a.kt)("h2",{id:"pre-requisite-readings"},"Pre-requisite readings"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v4.4.x/middleware/ics29-fee/overview"},"Fee Middleware"))),(0,a.kt)("p",null,"Packet fees are divided into 3 distinct amounts in order to compensate relayer operators for packet relaying on fee enabled IBC channels."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"RecvFee"),": The sum of all packet receive fees distributed to a payee for successful execution of ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgRecvPacket"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"AckFee"),": The sum of all packet acknowledgement fees distributed to a payee for successful execution of ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgAcknowledgement"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"TimeoutFee"),": The sum of all packet timeout fees distributed to a payee for successful execution of ",(0,a.kt)("inlineCode",{parentName:"li"},"MsgTimeout"),".")),(0,a.kt)("h2",{id:"register-a-counterparty-payee-address-for-forward-relaying"},"Register a counterparty payee address for forward relaying"),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"/v4.4.x/middleware/ics29-fee/overview#concepts"},"ICS29 Concepts"),", the forward relayer describes the actor who performs the submission of ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgRecvPacket")," on the destination chain.\nFee distribution for incentivized packet relays takes place on the packet source chain."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Relayer operators are expected to register a counterparty payee address, in order to be compensated accordingly with ",(0,a.kt)("inlineCode",{parentName:"p"},"RecvFee"),"s upon completion of a packet lifecycle.")),(0,a.kt)("p",null,"The counterparty payee address registered on the destination chain is encoded into the packet acknowledgement and communicated as such to the source chain for fee distribution.\n",(0,a.kt)("strong",{parentName:"p"},"If a counterparty payee is not registered for the forward relayer on the destination chain, the escrowed fees will be refunded upon fee distribution.")),(0,a.kt)("h3",{id:"relayer-operator-actions"},"Relayer operator actions?"),(0,a.kt)("p",null,"A transaction must be submitted ",(0,a.kt)("strong",{parentName:"p"},"to the destination chain")," including a ",(0,a.kt)("inlineCode",{parentName:"p"},"CounterpartyPayee")," address of an account on the source chain.\nThe transaction must be signed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Relayer"),"."),(0,a.kt)("p",null,"Note: If a module account address is used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"CounterpartyPayee")," but the module has been set as a blocked address in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BankKeeper"),", the refunding to the module account will fail. This is because many modules use invariants to compare internal tracking of module account balances against the actual balance of the account stored in the ",(0,a.kt)("inlineCode",{parentName:"p"},"BankKeeper"),". If a token transfer to the module account occurs without going through this module and updating the account balance of the module on the ",(0,a.kt)("inlineCode",{parentName:"p"},"BankKeeper"),", then invariants may break and unknown behaviour could occur depending on the module implementation. Therefore, if it is desirable to use a module account that is currently blocked, the module developers should be consulted to gauge to possibility of removing the module account from the blocked list."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterCounterpartyPayee struct {\n    // unique port identifier\n    PortId string\n    // unique channel identifier\n    ChannelId string\n    // the relayer address\n    Relayer string\n    // the counterparty payee address\n    CounterpartyPayee string\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This message is expected to fail if:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PortId")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ChannelId")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Relayer")," is an invalid address (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses"},"Cosmos SDK Addresses"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CounterpartyPayee")," is empty."))),(0,a.kt)("p",null,"See below for an example CLI command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx ibc-fee register-counterparty-payee transfer channel-0 \\\ncosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh \\\nosmo1v5y0tz01llxzf4c2afml8s3awue0ymju22wxx2 \\\n--from cosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh\n")),(0,a.kt)("h2",{id:"register-an-alternative-payee-address-for-reverse-and-timeout-relaying"},"Register an alternative payee address for reverse and timeout relaying"),(0,a.kt)("p",null,"As mentioned in ",(0,a.kt)("a",{parentName:"p",href:"/v4.4.x/middleware/ics29-fee/overview#concepts"},"ICS29 Concepts"),", the reverse relayer describes the actor who performs the submission of ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAcknowledgement")," on the source chain.\nSimilarly the timeout relayer describes the actor who performs the submission of ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeout")," (or ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeoutOnClose"),") on the source chain."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Relayer operators ",(0,a.kt)("strong",{parentName:"p"},"may choose")," to register an optional payee address, in order to be compensated accordingly with ",(0,a.kt)("inlineCode",{parentName:"p"},"AckFee"),"s and ",(0,a.kt)("inlineCode",{parentName:"p"},"TimeoutFee"),"s upon completion of a packet life cycle.")),(0,a.kt)("p",null,"If a payee is not registered for the reverse or timeout relayer on the source chain, then fee distribution assumes the default behaviour, where fees are paid out to the relayer account which delivers ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgAcknowledgement")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeout"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"MsgTimeoutOnClose"),"."),(0,a.kt)("h3",{id:"relayer-operator-actions-1"},"Relayer operator actions"),(0,a.kt)("p",null,"A transaction must be submitted ",(0,a.kt)("strong",{parentName:"p"},"to the source chain")," including a ",(0,a.kt)("inlineCode",{parentName:"p"},"Payee")," address of an account on the source chain.\nThe transaction must be signed by the ",(0,a.kt)("inlineCode",{parentName:"p"},"Relayer"),"."),(0,a.kt)("p",null,"Note: If a module account address is used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Payee")," it is recommended to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/71d7480c923f4227453e8a80f51be01ae7ee845e/testing/simapp/app.go#L659"},"turn off invariant checks")," for that module."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type MsgRegisterPayee struct {\n    // unique port identifier\n    PortId string\n    // unique channel identifier\n    ChannelId string\n    // the relayer address\n    Relayer string\n    // the payee address\n    Payee string\n}\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This message is expected to fail if:"),(0,a.kt)("ul",{parentName:"blockquote"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"PortId")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ChannelId")," is invalid (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/ibc/blob/master/spec/core/ics-024-host-requirements/README.md#paths-identifiers-separators"},"24-host naming requirements"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Relayer")," is an invalid address (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses"},"Cosmos SDK Addresses"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Payee")," is an invalid address (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/beginner/03-accounts.md#addresses"},"Cosmos SDK Addresses"),")."))),(0,a.kt)("p",null,"See below for an example CLI command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"simd tx ibc-fee register-payee transfer channel-0 \\\ncosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh \\\ncosmos153lf4zntqt33a4v0sm5cytrxyqn78q7kz8j8x5 \\\n--from cosmos1rsp837a4kvtgp2m4uqzdge0zzu6efqgucm0qdh\n")))}u.isMDXComponent=!0}}]);