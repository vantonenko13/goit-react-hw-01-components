(this["webpackJsonpgoit-react-hw-01-components"]=this["webpackJsonpgoit-react-hw-01-components"]||[]).push([[0],[,function(e,a,t){e.exports={profile:"Profile_profile__9CU0W",description:"Profile_description__16aUv",avatar:"Profile_avatar__2dZg6",name:"Profile_name__3pUIL",stats:"Profile_stats__2wNCc"}},function(e,a,t){e.exports={friendList:"FriendList_friendList__16bHV",friend:"FriendList_friend__1K-Ui",status:"FriendList_status__3jgHd",active:"FriendList_active__1tnqv"}},function(e,a,t){e.exports={statistics:"Statistics_statistics__3RXam",title:"Statistics_title__3G52C",statlist:"Statistics_statlist__3IySc"}},,,function(e,a,t){e.exports={transactions:"TransactionHistory_transactions__uT8NE"}},function(e){e.exports=JSON.parse('{"username":"Jacques Gluke","tag":"jgluke","location":"Ocho Rios, Jamaica","avatar":"https://cdn-icons-png.flaticon.com/512/2922/2922506.png","stats":{"followers":5603,"views":4827,"likes":1308}}')},function(e){e.exports=JSON.parse('[{"id":"id-1","label":".docx","percentage":22,"backgroundColor":"#3d6eff"},{"id":"id-2","label":".pdf","percentage":4,"backgroundColor":"#242427"},{"id":"id-3","label":".mp3","percentage":17,"backgroundColor":"#ff0000"},{"id":"id-4","label":".psd","percentage":47,"backgroundColor":"#929195"},{"id":"id-5","label":".pdf","percentage":10,"backgroundColor":"#9eb6ff"}]')},function(e){e.exports=JSON.parse('[{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998592.png","name":"Mango","isOnline":true,"id":1812},{"avatar":"https://cdn-icons-png.flaticon.com/512/616/616438.png","name":"Kiwi","isOnline":false,"id":1137},{"avatar":"https://cdn-icons-png.flaticon.com/512/1623/1623681.png","name":"Ajax","isOnline":true,"id":1213},{"avatar":"https://cdn-icons-png.flaticon.com/512/2977/2977285.png","name":"Jay","isOnline":true,"id":1714},{"avatar":"https://cdn-icons-png.flaticon.com/512/1998/1998749.png","name":"Poly","isOnline":false,"id":1284}]')},function(e){e.exports=JSON.parse('[{"id":"1e0700a2-5183-4291-85cc-2065a036a683","type":"invoice","amount":"964.82","currency":"LRD"},{"id":"a30f821b-4d25-4ff0-abdd-e340b3f0dd2b","type":"payment","amount":"686.50","currency":"WST"},{"id":"44dca67a-8e5a-4798-bf8e-b15efd4e1abd","type":"invoice","amount":"828.62","currency":"UGX"},{"id":"ea8ed3dc-2b68-4a53-905a-53ecb0adef33","type":"withdrawal","amount":"527.80","currency":"ALL"},{"id":"ea76146a-0b00-4b80-bc02-a8c822176712","type":"withdrawal","amount":"371.43","currency":"MUR"},{"id":"63ca02f9-d637-46b5-9237-f3b24425e029","type":"payment","amount":"862.44","currency":"AUD"},{"id":"ed0263e8-59a5-4bf1-87e0-2bb88e53dc34","type":"withdrawal","amount":"907.00","currency":"GEL"},{"id":"6013bad0-750c-4691-8bc2-d8f2b43969c4","type":"withdrawal","amount":"352.52","currency":"UGX"},{"id":"252c7be4-8b06-4fa7-8d42-61fb835b70d5","type":"payment","amount":"388.98","currency":"TOP"},{"id":"4eaab41b-b967-40ac-82ed-85fc66f646f1","type":"deposit","amount":"103.10","currency":"BWP"},{"id":"9648a350-8469-42d5-8bf3-18090de5fe67","type":"withdrawal","amount":"322.32","currency":"MRO"},{"id":"9c5c25fb-1a95-4b2f-8d1f-4c4426d677cc","type":"invoice","amount":"14.79","currency":"PYG"},{"id":"43ef232c-80e9-4d6f-b48a-b22405620de3","type":"payment","amount":"904.86","currency":"CHF"},{"id":"5161682e-e620-4019-ab0a-24ceb10fbd20","type":"withdrawal","amount":"307.08","currency":"NOK"},{"id":"7b119d71-42e6-4c42-a141-6818b07bb9ff","type":"invoice","amount":"275.07","currency":"AWG"},{"id":"a4f65722-65c4-4c28-b1f4-b8ed988bb205","type":"deposit","amount":"213.10","currency":"STD"},{"id":"c6e5784b-0ca3-48d6-86e5-b5128af5a523","type":"invoice","amount":"116.11","currency":"CUP CUC"},{"id":"c9ebed6a-3a02-4b49-ac0d-0534b51f2bfd","type":"invoice","amount":"878.67","currency":"HKD"},{"id":"a4a98b0e-b22c-438b-9f83-de2df52110c8","type":"invoice","amount":"725.03","currency":"UYU UYI"},{"id":"b39bfa7a-0166-4c47-94d6-87d20590f746","type":"payment","amount":"405.45","currency":"MDL"}]')},function(e,a,t){e.exports=t(17)},,,,,function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),c=t.n(n),r=t(5),i=t.n(r),s=Object(n.createContext)({user:null,statistics:null});var l=function(){return Object(n.useContext)(s)},o=t(1),m=t.n(o),d=function(e){var a=e.user,t=a.username,n=a.tag,r=a.location,i=a.avatar,s=a.stats;return c.a.createElement("div",{className:m.a.profile},c.a.createElement("div",{className:m.a.description},c.a.createElement("img",{src:i,alt:"User avatar",className:m.a.avatar}),c.a.createElement("p",{className:m.a.name},t),c.a.createElement("p",{className:m.a.tag},n),c.a.createElement("p",{className:m.a.location},r)),c.a.createElement("ul",{className:m.a.stats},c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Followers"),c.a.createElement("span",{className:m.a.quantity},s.followers)),c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Views"),c.a.createElement("span",{className:m.a.quantity},s.views)),c.a.createElement("li",null,c.a.createElement("span",{className:m.a.label},"Likes"),c.a.createElement("span",{className:m.a.quantity},s.likes))))},u=t(3),p=t.n(u),f=function(e){var a=e.title,t=e.stats;return c.a.createElement("section",{className:p.a.statistics},a&&c.a.createElement("h2",{className:p.a.title},a),c.a.createElement("ul",{className:p.a.statlist},t&&t.length&&t.map((function(e){var a=e.id,t=e.label,n=e.percentage,r=e.backgroundColor;return c.a.createElement("li",{key:"stats-item-".concat(a),className:p.a.item,style:{backgroundColor:r}},c.a.createElement("span",{className:p.a.label},t),c.a.createElement("span",{className:p.a.percentage},n," %"))}))))},b=t(2),y=t.n(b),E=function(e){var a=e.friend,t=a.avatar,n=a.name,r=a.isOnline;return c.a.createElement("li",{className:y.a.friend},c.a.createElement("span",{className:"".concat(y.a.status," ").concat(r?y.a.active:"")}),c.a.createElement("img",{className:y.a.avatar,src:t,alt:"User avatar",width:"48"}),c.a.createElement("p",{className:y.a.name},n))},v=function(e){var a=e.friendList;return c.a.createElement("ul",{className:y.a.friendList},a&&a.length&&a.map((function(e){return c.a.createElement(E,{key:"friend-".concat(e.name,"-").concat(e.id),friend:e})})))},g=t(6),_=t.n(g),N=function(e){var a=e.items;return c.a.createElement(c.a.Fragment,null,a&&a.length?c.a.createElement("table",{className:_.a.transactions},c.a.createElement("thead",null,c.a.createElement("tr",null,c.a.createElement("th",null,"Type"),c.a.createElement("th",null,"Amount"),c.a.createElement("th",null,"Currency"))),c.a.createElement("tbody",null,a.map((function(e){var a=e.id,t=e.type,n=e.amount,r=e.currency;return c.a.createElement("tr",{key:"transaction-".concat(a)},c.a.createElement("td",null,t),c.a.createElement("td",null,n),c.a.createElement("td",null,r))})))):c.a.createElement("p",null,"No transactions have been made yet"))};t(16);var h=function(){var e=l(),a=e.user,t=e.statistics,n=e.friends,r=e.transactions;return c.a.createElement("div",null,c.a.createElement(d,{user:a}),c.a.createElement(f,{title:"Stats",stats:t}),c.a.createElement(v,{friendList:n}),c.a.createElement(N,{items:r}))},w=t(7),k=t(8),C=t(9),O=t(10);var L=function(e){var a=Object(n.useMemo)((function(){return{user:w,statistics:k,friends:C,transactions:O}}),[]);return c.a.createElement(s.Provider,{value:a},e.children)};i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(L,null,c.a.createElement(h,null))),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.b5a82ff9.chunk.js.map