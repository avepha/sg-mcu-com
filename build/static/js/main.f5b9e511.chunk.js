(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{124:function(e,t){},134:function(e,t,a){},136:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(18),s=a.n(c),o=a(6),l=a(147),i=a(140),u=a(3),m=a.n(u),p=a(12),d=a.n(p),f=a(22),E=a(137),v=a(138),b=a(139),h=a(141),y=a(142),g={host:window.location.hostname},O=a(63),j=a(64),x=new(function(){function e(){var t=this;Object(O.a)(this,e),this.events={},document.body.addEventListener("keydown",(function(e){var a=e.key,n=e.metaKey,r=e.shiftKey;Object.keys(t.events).forEach((function(e){var c=t.events[e].condition,s=c.metaKey,o=c.shiftKey,l=c.key;s===n&&o===r&&l===a&&t.events[e].callback.call()}))}))}return Object(j.a)(e,[{key:"addEvent",value:function(e,t,a){var n=t.metaKey,r=t.shiftKey,c=t.key;this.events[e]||(this.events[e]={condition:{metaKey:n,shiftKey:r,key:c},callback:a})}}]),e}()),N=[115200,345600,56700,19200,9600],S=function(e){var t=e.onStatusChange,a=void 0===t?function(){return!0}:t,c=Object(n.useState)([]),s=Object(o.a)(c,2),l=s[0],u=s[1],p=Object(n.useState)(!1),O=Object(o.a)(p,2),j=O[0],S=O[1],T=Object(n.useState)(),k=Object(o.a)(T,2),w=k[0],C=k[1],D=Object(n.useState)(),R=Object(o.a)(D,2),J=R[0],P=R[1],I=Object(f.a)(),K=I.register,_=I.getValues,L=function(){var e,t,a,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,e=_(),t=e.port,a=e.baudRate,r.next=4,m.a.awrap(d.a.post("http://".concat(g.host,":4002/connect"),{port:t,baudRate:a}));case 4:S(!0),r.next=11;break;case 7:r.prev=7,r.t0=r.catch(0),n=r.t0.response,alert(JSON.stringify(n.data));case 11:case"end":return r.stop()}}),null,null,[[0,7]])},A=function(){var e;return m.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,m.a.awrap(d.a.post("http://".concat(g.host,":4002/disconnect")));case 3:S(!1),t.next=10;break;case 6:t.prev=6,t.t0=t.catch(0),e=t.t0.response,alert(JSON.stringify(e.data));case 10:case"end":return t.stop()}}),null,null,[[0,6]])};return Object(n.useEffect)((function(){d.a.get("http://".concat(g.host,":4002/list")).then((function(e){var t=e.data;return u(t)})),d.a.get("http://".concat(g.host,":4002/info")).then((function(e){var t=e.data;if("connected"===t.status){var a=t.data,n=a.port,r=a.baudRate;C(n),P(r),S(!0)}else S(!1)})).catch((function(e){return console.log({e:e})})),x.addEvent("connect",{metaKey:!0,shiftKey:!0,key:"s"},(function(){return L()})),x.addEvent("disconnect",{metaKey:!0,shiftKey:!0,key:"x"},(function(){return A()}))}),[]),Object(n.useMemo)((function(){a(j)}),[j,a]),r.a.createElement(E.a,{className:"mt-2"},r.a.createElement(v.a,{row:!0},r.a.createElement(b.a,{sm:1},r.a.createElement("span",{className:"font-weight-bolder"},"Port: ")),r.a.createElement(i.a,{sm:7},r.a.createElement(h.a,{type:"select",name:"port",value:w,innerRef:K({required:!0})},r.a.createElement("option",{value:"/dev/ROBOT",key:"robot"},"/dev/ROBOT"),l.map((function(e){return r.a.createElement("option",{value:e,key:e},e)})))),r.a.createElement(i.a,{sm:2},r.a.createElement(h.a,{type:"select",name:"baudRate",value:J,innerRef:K({required:!0})},N.map((function(e){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement(i.a,{sm:2},!j&&r.a.createElement(y.a,{type:"button",color:"success",className:"form-control",onClick:L},"Connect"),j&&r.a.createElement(y.a,{type:"button",color:"danger",className:"form-control",onClick:A},"Disconnected"))))},T=a(11);function k(e){if("string"!==typeof e)return!1;try{var t=JSON.parse(e),a=Object.prototype.toString.call(t);return"[object Object]"===a||"[object Array]"===a}catch(n){return!1}}var w=function(e){return{type:"SET_SERIAL_INPUT_TEXT",payload:{inputText:e.inputText}}},C=a(66),D=function(){return function(e){var t;return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(d.a.get("http://".concat(g.host,":4002/saves")).catch((function(){return[]})).then((function(e){return e.data.map((function(e){return{id:e.id,header:e.header,data:e.data}}))})));case 2:t=a.sent,e({type:"FETCH_PRESET",payload:Object(C.sortBy)(t,"header")});case 4:case"end":return a.stop()}}))}},R=Object(T.b)((function(e){return{serialInputText:e.input.serialInputText}}),{addRecent:function(e){return{type:"ADD_RECENT",payload:{data:e.data}}}})((function(e){var t=e.connection,a=e.addRecent,c=e.serialInputText,s=Object(f.a)(),l=s.register,i=s.watch,u=s.setValue,p=Object(n.useState)(void 0),b=Object(o.a)(p,2),O=b[0],j=b[1];Object(n.useEffect)((function(){u("jsonText",JSON.stringify(c,null,2))}),[c]);var N=function(){j(void 0);var e=i("jsonText");k(e)?u("jsonText",JSON.stringify(JSON.parse(e),null,2)):j("Json format is invalid")},S=function(e){var t,n;return m.a.async((function(r){for(;;)switch(r.prev=r.next){case 0:if(e&&e.preventDefault(),k(i("jsonText"))){r.next=4;break}return alert("JsonText is invalid"),r.abrupt("return");case 4:return r.prev=4,r.next=7,m.a.awrap(d.a.post("http://".concat(g.host,":4002/commit"),{data:JSON.parse(i("jsonText"))}));case 7:t=JSON.stringify(JSON.parse(i("jsonText"))),a({data:t}),r.next=15;break;case 11:r.prev=11,r.t0=r.catch(4),n=r.t0.response,alert(JSON.stringify(n));case 15:case"end":return r.stop()}}),null,null,[[4,11]])};return x.addEvent("commit",{metaKey:!0,shiftKey:!0,key:"Enter"},(function(){return S()})),x.addEvent("format",{metaKey:!0,shiftKey:!0,key:"l"},(function(){return N()})),r.a.createElement(E.a,{onSubmit:S},r.a.createElement(v.a,null,r.a.createElement("div",{className:"row justify-content-lg-between pb-0"},r.a.createElement("div",{className:"ml-3"},r.a.createElement("span",{className:"font-weight-bolder"},"Input"),r.a.createElement("span",{style:{color:"red"}}," ",O)),r.a.createElement("div",{className:"mr-4"},r.a.createElement(y.a,{type:"button",color:"primary",className:"mb-1 btn-sm",onClick:N},"Format"),k(i("jsonText"))&&r.a.createElement(y.a,{type:"submit",color:"success",className:"mb-1 btn-sm"},"Commit"))),r.a.createElement(h.a,{type:"textarea",name:"jsonText",disabled:!t,style:{height:"90vh"},innerRef:l({required:!0})})))})),J=a(26),P=a.n(J),I=P()("http://".concat(g.host,":4002")),K=function(e){var t=e.connection,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],l=c[1],i=Object(n.useState)(!1),u=Object(o.a)(i,2),m=u[0],p=u[1],d=function(e){var t=Object(n.useState)(void 0),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){I.on(e,(function(e){c(e)}))}),[e]),r}("listening");return Object(n.useEffect)((function(){x.addEvent("clearText",{metaKey:!0,shiftKey:!0,key:"k"},(function(){return l("")}))}),[]),Object(n.useMemo)((function(){if(d){var e=d.type,t=d.data;if("json"===e){if(m)return l("".concat(JSON.stringify(t,null,2),"\r\n"));l("".concat(s).concat(JSON.stringify(t,null,2),"\r\n"))}else{if(m)return l("".concat(t,"\r\n"));l("".concat(s).concat(t,"\r\n"))}}}),[d,m]),r.a.createElement(v.a,{className:"m-0 p-0"},r.a.createElement("div",{className:"row justify-content-lg-between pb-1"},r.a.createElement("div",{className:"ml-3"},r.a.createElement("span",{className:"font-weight-bolder"},"Output")),r.a.createElement("div",{className:"mr-4"},r.a.createElement(b.a,{check:!0},r.a.createElement(h.a,{type:"checkbox",checked:m,onChange:function(e){var t=e.target;return p(t.checked)}})," ","Auto-Clear"),r.a.createElement(y.a,{type:"button",color:"primary",className:"ml-3 btn-sm",onClick:function(){return l("")}},"Clear"))),r.a.createElement(h.a,{type:"textarea",disabled:!t,value:s,style:{height:"45vh",lineHeight:1.2}}))},_=a(148),L=a(143),A=a(144),z=a(145),q=Object(T.b)(null,{addPreset:function(e){var t=e.header,a=e.data;return function(e){d.a.post("http://".concat(g.host,":4002/saves"),{header:t,data:a}).catch((function(){return[]})).then((function(){return e(D())})),e(D())}}})((function(e){var t=e.open,a=void 0!==t&&t,n=e.close,c=void 0===n?function(){return null}:n,s=e.addPreset,o=Object(f.a)(),l=o.register,i=o.getValues,u=o.triggerValidation,p=o.errors,d=o.watch,E=o.setValue;return r.a.createElement(_.a,{isOpen:a,toggle:c,size:"lg"},r.a.createElement(L.a,{toggle:c},"Add Preset"),r.a.createElement(A.a,null,r.a.createElement(b.a,null,r.a.createElement("strong",null,"Title")," ",p.title&&r.a.createElement("p",{style:{color:"red"}},"title is required.")),r.a.createElement(h.a,{name:"title",type:"text",size:"lg",innerRef:l({required:!0})}),r.a.createElement(b.a,null,r.a.createElement("strong",null,"Preset data"),p.presetData&&"required"===p.presetData.type&&r.a.createElement("p",{style:{color:"red"}},"preset is required."),p.presetData&&"validate"===p.presetData.type&&r.a.createElement("p",{style:{color:"red"}},"preset must be json format.")),r.a.createElement(h.a,{name:"presetData",type:"textarea",size:"lg",style:{height:"40vh"},innerRef:l({required:!0,validate:function(e){return k(e)}})}),r.a.createElement("div",{className:"w-100 text-right m-2"},k(d("presetData"))&&r.a.createElement(y.a,{type:"button",color:"primary",size:"lg",onClick:function(){var e=d("presetData");E("presetData",JSON.stringify(JSON.parse(e),null,2))}},"Format"))),r.a.createElement(z.a,null,r.a.createElement("div",{className:"w-100 text-right"},r.a.createElement(y.a,{type:"button",color:"danger",size:"lg",onClick:c},"Discard"),r.a.createElement(y.a,{className:"ml-2",type:"button",color:"success",size:"lg",onClick:function(){var e,t,a;return m.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.a.awrap(u());case 2:if(n.sent){n.next=5;break}return n.abrupt("return",null);case 5:e=i(),t=e.title,a=e.presetData,s({header:t,data:JSON.parse(a)}),c();case 8:case"end":return n.stop()}}))}},"Add Preset"))))})),F=a(146),B=Object(T.b)((function(e){return{presets:e.preset.presets}}),{fetchPreset:D,deletePreset:function(e){return function(t){return m.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,m.a.awrap(d.a.post("http://".concat(g.host,":4002/saves/deletes"),{id:e}).catch((function(){return[]})));case 2:t(D()),t({type:"DELETE_PRESET",payload:{}});case 4:case"end":return a.stop()}}))}}})((function(e){var t=e.open,a=void 0!==t&&t,c=e.close,s=void 0===c?function(){return null}:c,o=e.presets,l=e.fetchPreset,i=e.deletePreset;return Object(n.useEffect)((function(){l()}),[]),r.a.createElement(_.a,{isOpen:a,toggle:s,size:"lg"},r.a.createElement(L.a,{toggle:s},"Edit Preset"),r.a.createElement(A.a,null,r.a.createElement(F.a,{responsive:!0},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"ID"),r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Data"),r.a.createElement("th",null,"OP"))),r.a.createElement("tbody",null,o.map((function(e){var t=e.id,a=e.header,n=e.data;return r.a.createElement("tr",{key:t},r.a.createElement("th",{scope:"row"},t),r.a.createElement("td",null,a),r.a.createElement("td",null,JSON.stringify(n).slice(0,50)),r.a.createElement("td",null,r.a.createElement(y.a,{type:"button",color:"danger",size:"sm",style:{width:60},onClick:function(){return i(t)}},"Delete"),r.a.createElement(y.a,{type:"button",color:"primary",size:"sm",style:{width:60},className:"ml-1"},"Edit")))}))))))})),V=Object(T.b)((function(e){return{presets:e.preset.presets}}),{setSerialInputText:w,fetchPreset:D})((function(e){var t=e.setSerialInputText,a=e.presets,c=e.fetchPreset,s=Object(n.useState)(!1),l=Object(o.a)(s,2),u=l[0],m=l[1],p=Object(n.useState)(!1),d=Object(o.a)(p,2),f=d[0],E=d[1];return Object(n.useEffect)((function(){c()}),[]),r.a.createElement(v.a,{row:!0,className:"mt-2"},r.a.createElement(q,{close:function(){return m(!1)},open:u}),r.a.createElement(B,{close:function(){return E(!1)},open:f}),r.a.createElement(b.a,{xs:1},r.a.createElement("span",{className:"font-weight-bolder"},"Preset: ")),r.a.createElement(i.a,{xs:7},r.a.createElement(h.a,{type:"select",onChange:function(e){var n=e.target;return-1!==n.value&&t({inputText:a[n.value].data})}},a.map((function(e,t){var a=e.header;e.data;return r.a.createElement("option",{key:t,value:t},a)})))),r.a.createElement(i.a,{xs:2},r.a.createElement(y.a,{type:"button",color:"primary",className:"form-control",onClick:function(){return E(!0)}},"Edit")),r.a.createElement(i.a,{xs:2},r.a.createElement(y.a,{type:"button",color:"success",className:"form-control",onClick:function(){return m(!0)}},"+ Add")))})),H=Object(T.b)((function(e){return{recentList:e.recent.recentList}}),{delRecentAll:function(){return{type:"DELETE_RECENT",payload:{}}},setSerialInputText:w})((function(e){var t=e.recentList,a=e.setSerialInputText;return r.a.createElement(v.a,{row:!0},r.a.createElement(b.a,{xs:1},r.a.createElement("span",{className:"font-weight-bolder"},"Recent: ")),r.a.createElement(i.a,{xs:7},r.a.createElement(h.a,{type:"select",onChange:function(e){var n=e.target;return-1!==n.value&&a({inputText:JSON.parse(t[n.value])})}},t.map((function(e,t){return r.a.createElement("option",{key:t,value:t},e.slice(0,100))})))),r.a.createElement(i.a,{xs:2}))})),M=P()("http://".concat(g.host,":4002")),W=function(e){var t=e.connection,a=Object(n.useState)(""),c=Object(o.a)(a,2),s=c[0],u=c[1],m=Object(n.useState)("all"),p=Object(o.a)(m,2),d=p[0],f=p[1],E=Object(n.useState)(""),b=Object(o.a)(E,2),y=b[0],g=b[1],O=Object(n.useState)(!1),j=Object(o.a)(O,1)[0],N=function(e){var t=Object(n.useState)(void 0),a=Object(o.a)(t,2),r=a[0],c=a[1];return Object(n.useEffect)((function(){M.on(e,(function(e){c(e)}))}),[e]),r}("log");return Object(n.useEffect)((function(){x.addEvent("clearLogText",{metaKey:!0,shiftKey:!0,key:"k"},(function(){return u("")}))}),[]),Object(n.useMemo)((function(){if(N){var e=N.data,t=N.meta;if("all"!==d&&t.level!==d)return u("");if(""!==y&&t.topic!==y)return u("");if(j)return u("".concat(e,"\r\n"));u("".concat(s).concat(e,"\r\n"))}}),[N,j]),r.a.createElement(v.a,{className:"m-0 p-0"},r.a.createElement(l.a,{form:!0},r.a.createElement(i.a,{md:3,className:"m-0 p-0 ml-1"},r.a.createElement(h.a,{type:"select",className:"form-control",value:d,onChange:function(e){var t=e.target;f(t.value),u("")}},r.a.createElement("option",{value:"all"},"All"),r.a.createElement("option",{value:"fatal"},"Fatal"),r.a.createElement("option",{value:"error"},"Error"),r.a.createElement("option",{value:"warning"},"Warning"),r.a.createElement("option",{value:"info"},"Info"),r.a.createElement("option",{value:"debug"},"Debug"),r.a.createElement("option",{value:"trace"},"Trace"))),r.a.createElement(i.a,{md:8,className:"m-0 p-0"},r.a.createElement(h.a,{type:"text",className:"form-control",value:y,onChange:function(e){var t=e.target;u(""),g(t.value)}}))),r.a.createElement(h.a,{type:"textarea",disabled:!t,value:s,style:{height:"40vh",lineHeight:1.2}}))},U=a(67);var X=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1];return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"ml-3 mr-3"},r.a.createElement(l.a,null,r.a.createElement(i.a,{xs:"6"},r.a.createElement(S,{onStatusChange:function(e){return c(e)}})),r.a.createElement(i.a,{xs:"6"},a&&r.a.createElement(V,null))),r.a.createElement(l.a,null,r.a.createElement(i.a,{xs:"6"},a&&r.a.createElement(H,null))),r.a.createElement(l.a,null,r.a.createElement(i.a,{xs:"5",style:{padding:1}},r.a.createElement(R,{connection:a})),r.a.createElement(i.a,{xs:"7",style:{padding:1}},r.a.createElement(K,{connection:a}),r.a.createElement(W,{connection:a})))),r.a.createElement("span",{className:"position-absolute",style:{bottom:5,left:5}},"version: ",U.version))};a(134),a(135),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var $=a(19),G=a(68),Q=a(15),Y=a(20),Z={recentList:JSON.parse(localStorage.getItem("recent"))||[]},ee={serialInputText:"test"},te={presets:[]},ae=Object($.c)({recent:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Z,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_RECENT":var a=t.payload.data,n=[].concat(Object(Y.a)(e.recentList),[a]);return localStorage.setItem("recent",JSON.stringify(n)),Object(Q.a)({},e,{recentList:n});case"DELETE_RECENT":return localStorage.removeItem("recent"),Object(Q.a)({},e,{recentList:[]});default:return e}},input:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_SERIAL_INPUT_TEXT":var a=t.payload.inputText;return Object(Q.a)({},e,{serialInputText:a});default:return e}},preset:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FETCH_PRESET":return Object(Q.a)({},e,{presets:t.payload||[]});case"ADD_PRESET":case"DELETE_PRESET":return Object(Q.a)({},e);default:return e}}}),ne=Object($.a)(G.a)($.d)(ae);s.a.render(r.a.createElement(T.a,{store:ne},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},67:function(e){e.exports=JSON.parse('{"name":"client","version":"0.7.0","private":true,"dependencies":{"@testing-library/jest-dom":"^4.2.4","@testing-library/react":"^9.3.2","@testing-library/user-event":"^7.1.2","@types/reactstrap":"^8.4.2","axios":"^0.19.0","bootstrap":"^4.4.1","lodash":"^4.17.15","react":"^16.12.0","react-dom":"^16.12.0","react-hook-form":"^3.28.15","react-redux":"^7.1.3","react-scripts":"3.3.0","reactstrap":"^8.2.0","redux":"^4.0.5","redux-thunk":"^2.3.0","socket.io-client":"^2.3.0"},"scripts":{"dev":"react-scripts start","build":"react-scripts build","test":"react-scripts test","eject":"react-scripts eject"},"eslintConfig":{"extends":"react-app"},"browserslist":{"production":[">0.2%","not dead","not op_mini all"],"development":["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}')},69:function(e,t,a){e.exports=a(136)}},[[69,1,2]]]);
//# sourceMappingURL=main.f5b9e511.chunk.js.map