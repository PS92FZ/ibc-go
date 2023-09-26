"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1644],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=a,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||o;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,r[1]=l;for(var p=2;p<o;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},87177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var i=n(87462),a=(n(67294),n(3905));const o={title:"Handling Updates and Misbehaviour",sidebar_label:"Handling Updates and Misbehaviour",sidebar_position:4,slug:"/ibc/light-clients/updates-and-misbehaviour"},r="Handling ClientMessages: updates and misbehaviour",l={unversionedId:"ibc/light-clients/updates-and-misbehaviour",id:"version-v7.3.x/ibc/light-clients/updates-and-misbehaviour",title:"Handling Updates and Misbehaviour",description:"As mentioned before in the documentation about implementing the ConsensusState interface, ClientMessage is an interface used to update an IBC client. This update may be performed by:",source:"@site/versioned_docs/version-v7.3.x/03-ibc/01-light-clients/04-updates-and-misbehaviour.md",sourceDirName:"03-ibc/01-light-clients",slug:"/ibc/light-clients/updates-and-misbehaviour",permalink:"/v7.3.x/ibc/light-clients/updates-and-misbehaviour",draft:!1,tags:[],version:"v7.3.x",sidebarPosition:4,frontMatter:{title:"Handling Updates and Misbehaviour",sidebar_label:"Handling Updates and Misbehaviour",sidebar_position:4,slug:"/ibc/light-clients/updates-and-misbehaviour"},sidebar:"defaultSidebar",previous:{title:"Consensus State interface",permalink:"/v7.3.x/ibc/light-clients/consensus-state"},next:{title:"Handling Upgrades",permalink:"/v7.3.x/ibc/light-clients/upgrades"}},s={},p=[{value:"Implementing the <code>ClientMessage</code> interface",id:"implementing-the-clientmessage-interface",level:2},{value:"Handling updates and misbehaviour",id:"handling-updates-and-misbehaviour",level:2},{value:"<code>VerifyClientMessage</code>",id:"verifyclientmessage",level:2},{value:"<code>CheckForMisbehaviour</code>",id:"checkformisbehaviour",level:2},{value:"<code>UpdateStateOnMisbehaviour</code>",id:"updatestateonmisbehaviour",level:2},{value:"<code>UpdateState</code>",id:"updatestate",level:2},{value:"Putting it all together",id:"putting-it-all-together",level:2}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,a.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"handling-clientmessages-updates-and-misbehaviour"},"Handling ",(0,a.kt)("inlineCode",{parentName:"h1"},"ClientMessage"),"s: updates and misbehaviour"),(0,a.kt)("p",null,"As mentioned before in the documentation about ",(0,a.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/light-clients/consensus-state"},"implementing the ",(0,a.kt)("inlineCode",{parentName:"a"},"ConsensusState")," interface"),", ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/exported/client.go#L145"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientMessage"))," is an interface used to update an IBC client. This update may be performed by: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a single header"),(0,a.kt)("li",{parentName:"ul"},"a batch of headers"),(0,a.kt)("li",{parentName:"ul"},"evidence of misbehaviour,"),(0,a.kt)("li",{parentName:"ul"},"or any type which when verified produces a change to the consensus state of the IBC client. ")),(0,a.kt)("p",null,"This interface has been purposefully kept generic in order to give the maximum amount of flexibility to the light client implementer."),(0,a.kt)("h2",{id:"implementing-the-clientmessage-interface"},"Implementing the ",(0,a.kt)("inlineCode",{parentName:"h2"},"ClientMessage")," interface"),(0,a.kt)("p",null,"Find the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage"),"interface in ",(0,a.kt)("inlineCode",{parentName:"p"},"modules/core/exported"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"type ClientMessage interface {\n  proto.Message\n\n  ClientType() string\n  ValidateBasic() error\n}\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," will be passed to the client to be used in ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/57da75a70145409247e85365b64a4b2fc6ddad2f/modules/core/02-client/keeper/client.go#L53"},(0,a.kt)("inlineCode",{parentName:"a"},"UpdateClient")),", which retrieves the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," by client ID (available in ",(0,a.kt)("inlineCode",{parentName:"p"},"MsgUpdateClient"),"). This ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," implements the ",(0,a.kt)("a",{parentName:"p",href:"/v7.3.x/ibc/light-clients/client-state"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState")," interface")," for its specific consenus type (e.g. Tendermint)."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UpdateClient")," will then handle a number of cases including misbehaviour and/or updating the consensus state, utilizing the specific methods defined in the relevant ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"VerifyClientMessage(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, clientMsg ClientMessage) error\nCheckForMisbehaviour(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, clientMsg ClientMessage) bool\nUpdateStateOnMisbehaviour(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, clientMsg ClientMessage)\nUpdateState(ctx sdk.Context, cdc codec.BinaryCodec, clientStore sdk.KVStore, clientMsg ClientMessage) []Height\n")),(0,a.kt)("h2",{id:"handling-updates-and-misbehaviour"},"Handling updates and misbehaviour"),(0,a.kt)("p",null,"The functions for handling updates to a light client and evidence of misbehaviour are all found in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/v6.0.0/modules/core/exported/client.go#L40"},(0,a.kt)("inlineCode",{parentName:"a"},"ClientState"))," interface, and will be discussed below."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"It is important to note that ",(0,a.kt)("inlineCode",{parentName:"p"},"Misbehaviour")," in this particular context is referring to misbehaviour on the chain level intended to fool the light client. This will be defined by each light client.")),(0,a.kt)("h2",{id:"verifyclientmessage"},(0,a.kt)("inlineCode",{parentName:"h2"},"VerifyClientMessage")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"VerifyClientMessage")," must verify a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage"),". A ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," could be a ",(0,a.kt)("inlineCode",{parentName:"p"},"Header"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Misbehaviour"),", or batch update. To understand how to implement a ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage"),", please refer to the ",(0,a.kt)("a",{parentName:"p",href:"#implementing-the-clientmessage-interface"},"Implementing the ",(0,a.kt)("inlineCode",{parentName:"a"},"ClientMessage")," interface")," section."),(0,a.kt)("p",null,"It must handle each type of ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," appropriately. Calls to ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckForMisbehaviour"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateState"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," will assume that the content of the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," has been verified and can be trusted. An error should be returned if the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," fails to verify."),(0,a.kt)("p",null,"For an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"VerifyClientMessage")," implementation, please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/update.go#L20"},"Tendermint light client"),"."),(0,a.kt)("h2",{id:"checkformisbehaviour"},(0,a.kt)("inlineCode",{parentName:"h2"},"CheckForMisbehaviour")),(0,a.kt)("p",null,"Checks for evidence of a misbehaviour in ",(0,a.kt)("inlineCode",{parentName:"p"},"Header")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"Misbehaviour")," type. It assumes the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," has already been verified."),(0,a.kt)("p",null,"For an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"CheckForMisbehaviour")," implementation, please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/misbehaviour_handle.go#L18"},"Tendermint light client"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Tendermint light client ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/misbehaviour.go"},"defines ",(0,a.kt)("inlineCode",{parentName:"a"},"Misbehaviour"))," as two different types of situations: a situation where two conflicting ",(0,a.kt)("inlineCode",{parentName:"p"},"Header"),"s with the same height have been submitted to update a client's ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState")," within the same trusting period, or that the two conflicting ",(0,a.kt)("inlineCode",{parentName:"p"},"Header"),"s have been submitted at different heights but the consensus states are not in the correct monotonic time ordering (BFT time violation). More explicitly, updating to a new height must have a timestamp greater than the previous consensus state, or, if inserting a consensus at a past height, then time must be less than those heights which come after and greater than heights which come before.")),(0,a.kt)("h2",{id:"updatestateonmisbehaviour"},(0,a.kt)("inlineCode",{parentName:"h2"},"UpdateStateOnMisbehaviour")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," should perform appropriate state changes on a client state given that misbehaviour has been detected and verified. This method should only be called when misbehaviour is detected, as it does not perform any misbehaviour checks. Notably, it should freeze the client so that calling the ",(0,a.kt)("inlineCode",{parentName:"p"},"Status")," function on the associated client state no longer returns ",(0,a.kt)("inlineCode",{parentName:"p"},"Active"),"."),(0,a.kt)("p",null,"For an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateStateOnMisbehaviour")," implementation, please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/update.go#L197"},"Tendermint light client"),"."),(0,a.kt)("h2",{id:"updatestate"},(0,a.kt)("inlineCode",{parentName:"h2"},"UpdateState")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UpdateState")," updates and stores as necessary any associated information for an IBC client, such as the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientState")," and corresponding ",(0,a.kt)("inlineCode",{parentName:"p"},"ConsensusState"),". It should perform a no-op on duplicate updates."),(0,a.kt)("p",null,"It assumes the ",(0,a.kt)("inlineCode",{parentName:"p"},"ClientMessage")," has already been verified."),(0,a.kt)("p",null,"For an example of a ",(0,a.kt)("inlineCode",{parentName:"p"},"UpdateState")," implementation, please check the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/light-clients/07-tendermint/update.go#L131"},"Tendermint light client"),"."),(0,a.kt)("h2",{id:"putting-it-all-together"},"Putting it all together"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"02-client")," ",(0,a.kt)("inlineCode",{parentName:"p"},"Keeper")," module in ibc-go offers a reference as to how these functions will be used to ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/cosmos/ibc-go/blob/main/modules/core/02-client/keeper/client.go#L48"},"update the client"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"if err := clientState.VerifyClientMessage(clientMessage); err != nil {\n  return err\n}\n\nfoundMisbehaviour := clientState.CheckForMisbehaviour(clientMessage)\nif foundMisbehaviour {\n  clientState.UpdateStateOnMisbehaviour(clientMessage)\n  // emit misbehaviour event\n  return \n}\n\nclientState.UpdateState(clientMessage) // expects no-op on duplicate header\n  // emit update event\n  return\n}\n")))}h.isMDXComponent=!0}}]);