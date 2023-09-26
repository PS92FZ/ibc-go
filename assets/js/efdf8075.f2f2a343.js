"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8443],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),o=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),c=o(a),s=r,k=c["".concat(d,".").concat(s)]||c[s]||m[s]||l;return a?n.createElement(k,i(i({ref:t},u),{},{components:a})):n.createElement(k,i({ref:t},u))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=s;var p={};for(var d in t)hasOwnProperty.call(t,d)&&(p[d]=t[d]);p.originalType=e,p[c]="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},1786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var n=a(87462),r=(a(67294),a(3905));const l={title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/middleware/ics29-fee/events"},i="Events",p={unversionedId:"middleware/ics29-fee/events",id:"version-v5.3.x/middleware/ics29-fee/events",title:"Events",description:"An overview of all events related to ICS-29",source:"@site/versioned_docs/version-v5.3.x/03-middleware/01-ics29-fee/05-events.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/events",permalink:"/v5.3.x/middleware/ics29-fee/events",draft:!1,tags:[],version:"v5.3.x",sidebarPosition:5,frontMatter:{title:"Events",sidebar_label:"Events",sidebar_position:5,slug:"/middleware/ics29-fee/events"},sidebar:"defaultSidebar",previous:{title:"Fee Distribution",permalink:"/v5.3.x/middleware/ics29-fee/fee-distribution"},next:{title:"End Users",permalink:"/v5.3.x/middleware/ics29-fee/end-users"}},d={},o=[{value:"<code>MsgPayPacketFee</code>, <code>MsgPayPacketFeeAsync</code>",id:"msgpaypacketfee-msgpaypacketfeeasync",level:2},{value:"<code>RegisterPayee</code>",id:"registerpayee",level:2},{value:"<code>RegisterCounterpartyPayee</code>",id:"registercounterpartypayee",level:2}],u={toc:o},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"events"},"Events"),(0,r.kt)("admonition",{title:"Synopsis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"An overview of all events related to ICS-29 ")),(0,r.kt)("h2",{id:"msgpaypacketfee-msgpaypacketfeeasync"},(0,r.kt)("inlineCode",{parentName:"h2"},"MsgPayPacketFee"),", ",(0,r.kt)("inlineCode",{parentName:"h2"},"MsgPayPacketFeeAsync")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"port_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{portID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"channel_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{channelID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"packet_sequence"),(0,r.kt)("td",{parentName:"tr",align:null},"{sequence}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"recv_fee"),(0,r.kt)("td",{parentName:"tr",align:null},"{recvFee}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"ack_fee"),(0,r.kt)("td",{parentName:"tr",align:null},"{ackFee}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"incentivized_ibc_packet"),(0,r.kt)("td",{parentName:"tr",align:null},"timeout_fee"),(0,r.kt)("td",{parentName:"tr",align:null},"{timeoutFee}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"fee-ibc")))),(0,r.kt)("h2",{id:"registerpayee"},(0,r.kt)("inlineCode",{parentName:"h2"},"RegisterPayee")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"relayer"),(0,r.kt)("td",{parentName:"tr",align:null},"{relayer}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"payee"),(0,r.kt)("td",{parentName:"tr",align:null},"{payee}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"channel_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{channelID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"fee-ibc")))),(0,r.kt)("h2",{id:"registercounterpartypayee"},(0,r.kt)("inlineCode",{parentName:"h2"},"RegisterCounterpartyPayee")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Key"),(0,r.kt)("th",{parentName:"tr",align:null},"Attribute Value"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_counterparty_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"relayer"),(0,r.kt)("td",{parentName:"tr",align:null},"{relayer}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_counterparty_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"counterparty_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"{counterpartyPayee}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"register_counterparty_payee"),(0,r.kt)("td",{parentName:"tr",align:null},"channel_id"),(0,r.kt)("td",{parentName:"tr",align:null},"{channelID}")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"message"),(0,r.kt)("td",{parentName:"tr",align:null},"module"),(0,r.kt)("td",{parentName:"tr",align:null},"fee-ibc")))))}m.isMDXComponent=!0}}]);