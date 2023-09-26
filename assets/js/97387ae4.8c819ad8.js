"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8514],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,b=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return n?r.createElement(b,o(o({ref:t},c),{},{components:n})):r.createElement(b,o({ref:t},c))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},92860:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={title:"Relayer",sidebar_label:"Relayer",sidebar_position:7,slug:"/ibc/relayer"},o="Relayer",s={unversionedId:"ibc/relayer",id:"version-v4.4.x/ibc/relayer",title:"Relayer",description:"Pre-requisite readings",source:"@site/versioned_docs/version-v4.4.x/01-ibc/07-relayer.md",sourceDirName:"01-ibc",slug:"/ibc/relayer",permalink:"/v4.4.x/ibc/relayer",draft:!1,tags:[],version:"v4.4.x",sidebarPosition:7,frontMatter:{title:"Relayer",sidebar_label:"Relayer",sidebar_position:7,slug:"/ibc/relayer"},sidebar:"defaultSidebar",previous:{title:"Governance Proposals",permalink:"/v4.4.x/ibc/proposals"},next:{title:"Protobuf Documentation",permalink:"/v4.4.x/ibc/proto-docs"}},l={},p=[{value:"Events",id:"events",level:2},{value:"Subscribing with Tendermint",id:"subscribing-with-tendermint",level:3},{value:"Example Implementations",id:"example-implementations",level:2}],c={toc:p},m="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"relayer"},"Relayer"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("h2",{parentName:"admonition",id:"pre-requisite-readings"},"Pre-requisite readings"),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/v4.4.x/ibc/overview"},"IBC Overview")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/cosmos-sdk/blob/main/docs/learn/advanced/08-events.md"},"Events")))),(0,a.kt)("h2",{id:"events"},"Events"),(0,a.kt)("p",null,"Events are emitted for every transaction processed by the base application to indicate the execution\nof some logic clients may want to be aware of. This is extremely useful when relaying IBC packets.\nAny message that uses IBC will emit events for the corresponding TAO logic executed as defined in\nthe ",(0,a.kt)("a",{parentName:"p",href:"/events/events"},"IBC events document"),"."),(0,a.kt)("p",null,"In the SDK, it can be assumed that for every message there is an event emitted with the type ",(0,a.kt)("inlineCode",{parentName:"p"},"message"),",\nattribute key ",(0,a.kt)("inlineCode",{parentName:"p"},"action"),", and an attribute value representing the type of message sent\n(",(0,a.kt)("inlineCode",{parentName:"p"},"channel_open_init")," would be the attribute value for ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgChannelOpenInit"),"). If a relayer queries\nfor transaction events, it can split message events using this event Type/Attribute Key pair."),(0,a.kt)("p",null,"The Event Type ",(0,a.kt)("inlineCode",{parentName:"p"},"message")," with the Attribute Key ",(0,a.kt)("inlineCode",{parentName:"p"},"module")," may be emitted multiple times for a single\nmessage due to application callbacks. It can be assumed that any TAO logic executed will result in\na module event emission with the attribute value ",(0,a.kt)("inlineCode",{parentName:"p"},"ibc_<submodulename>")," (02-client emits ",(0,a.kt)("inlineCode",{parentName:"p"},"ibc_client"),")."),(0,a.kt)("h3",{id:"subscribing-with-tendermint"},"Subscribing with Tendermint"),(0,a.kt)("p",null,"Calling the Tendermint RPC method ",(0,a.kt)("inlineCode",{parentName:"p"},"Subscribe")," via ",(0,a.kt)("a",{parentName:"p",href:"https://docs.tendermint.com/main/rpc/"},"Tendermint's Websocket")," will return events using\nTendermint's internal representation of them. Instead of receiving back a list of events as they\nwere emitted, Tendermint will return the type ",(0,a.kt)("inlineCode",{parentName:"p"},"map[string][]string")," which maps a string in the\nform ",(0,a.kt)("inlineCode",{parentName:"p"},"<event_type>.<attribute_key>")," to ",(0,a.kt)("inlineCode",{parentName:"p"},"attribute_value"),". This causes extraction of the event\nordering to be non-trivial, but still possible."),(0,a.kt)("p",null,"A relayer should use the ",(0,a.kt)("inlineCode",{parentName:"p"},"message.action")," key to extract the number of messages in the transaction\nand the type of IBC transactions sent. For every IBC transaction within the string array for\n",(0,a.kt)("inlineCode",{parentName:"p"},"message.action"),", the necessary information should be extracted from the other event fields. If\n",(0,a.kt)("inlineCode",{parentName:"p"},"send_packet")," appears at index 2 in the value for ",(0,a.kt)("inlineCode",{parentName:"p"},"message.action"),", a relayer will need to use the\nvalue at index 2 of the key ",(0,a.kt)("inlineCode",{parentName:"p"},"send_packet.packet_sequence"),". This process should be repeated for each\npiece of information needed to relay a packet."),(0,a.kt)("h2",{id:"example-implementations"},"Example Implementations"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/cosmos/relayer"},"Golang Relayer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/informalsystems/ibc-rs/tree/master/crates/relayer"},"Hermes"))))}u.isMDXComponent=!0}}]);