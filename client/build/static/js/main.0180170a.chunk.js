(this.webpackJsonpghost_climber=this.webpackJsonpghost_climber||[]).push([[0],{119:function(e,t,a){e.exports=a.p+"static/media/loading.23968a8d.gif"},122:function(e,t,a){e.exports=a(298)},127:function(e,t,a){},298:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(38),o=a.n(c),l=(a(127),a(42)),s=a(7),i=a(23),u=a(76),d=a.n(u),m=a(121),f=Object(n.createContext)();Object(u.registerLocale)("es",m.a);var p=function(){var e=Object(n.useContext)(f),t=e.filtrarContadores,a=e.thisFecha,c=e.setFecha,o=r.a.createRef(),l=Object(n.forwardRef)((function(e,t){var a=e.onClick,n=e.value;return r.a.createElement("button",{onClick:a,value:n,onChange:a,ref:t,className:"bg-gray-300  w-40 py-3 pl-1 text-xl tracking-wide  text-gray-700 outline-none focus:outline-none"}," ",n)}));return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"flex items-stretch"},r.a.createElement("button",{className:"border-box bg-gray-400 active:bg-gray-500 p-3 rounded-l focus:outline-none",onClick:function(){var e=new Date(a.setDate(a.getDate()-1));c(e),t(e)}},r.a.createElement("i",{className:"fas fa-chevron-left"})),r.a.createElement(d.a,{selected:a,onChange:function(e){c(e),t(e)},customInput:r.a.createElement(l,{ref:o}),todayButton:"Hoy",dateFormat:"dd/MM/yyyy",showPopperArrow:!1,popperPlacement:"bottom",locale:"es",placeholderText:"Weeks start on Monday",shouldCloseOnSelect:!1,calendarClassName:"font-sans border-none  text-lg tracking-wide opacity-100  ",wrapperClassName:"",popperClassName:"border-none"}),r.a.createElement("button",{className:"bg-gray-400 active:bg-gray-500 p-3 rounded-r focus:outline-none",onClick:function(){var e=new Date(a.setDate(a.getDate()+1));c(e),t(e)}},r.a.createElement("i",{className:"fas fa-chevron-right"}))))},b=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement("nav",{className:"flex bg-gray-100 p-3 flex-wrap border-b border-b-2 border-gray-200"},r.a.createElement(l.b,{to:"/",className:"p-2 mr-4 inline-flex items-center border-r-2"},r.a.createElement("i",{className:"fas fa-ghost fa-2x mx-2"}),r.a.createElement("span",{className:"text-xl text-gray font-bold uppercase tracking-wide"},"Ghost Climbers")),r.a.createElement(p,null),r.a.createElement("div",{className:"md:hidden inline-flex flex-row ml-auto "},r.a.createElement("button",{className:"text-gray p-3 hover:bg-gray-300 rounded hover:text-gray outline-none",onClick:function(){return c(!a)}},r.a.createElement("i",{className:"fas fa-bars"}))),r.a.createElement("div",{className:"".concat(a?"block":"hidden","  top-navbar w-full md:inline-flex  md:flex-grow md:w-auto pt-2"),id:"navigation"},r.a.createElement("div",{className:"md:inline-flex md:flex-row md:ml-auto md:w-auto w-full md:items-center items-start  flex flex-col md:h-auto"},[{name:"Inicio",h_ref:"/",id:"1"},{name:"Iniciar Sesi\xf3n",h_ref:"#!",id:"3"}].map((function(e){return r.a.createElement(l.b,{key:e.id,to:e.h_ref,className:"md:inline-flex md:w-auto w-full px-3 py-2 rounded text-gray items-center justify-center hover:bg-gray-300 hover:text-gray"},r.a.createElement("span",null,e.name))})))))},E=function(e){var t=new Date(e),a=new Date;return t.getFullYear()<a.getFullYear()||t.getMonth()<a.getMonth()||t.getDate()<a.getDate()},y=function(e){var t=e.sb,a=Object(n.useState)(0),c=Object(i.a)(a,2),o=c[0],l=c[1],s=Object(n.useState)(0),u=Object(i.a)(s,2),d=u[0],m=u[1],p=Object(n.useContext)(f),b=p.addContador,y=p.setThisContador,g=p.thisFecha,h=p.addContadorSector;Object(n.useEffect)((function(){t&&m(y(t._id))}),[t,y]);return r.a.createElement("div",{id:"",className:"relative flex pr-3 items-center justify-center"},r.a.createElement("button",{className:" inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' \n          ".concat(E(g)?"bg-gray-800 text-white":0===d.contador&&0===o?"bg-blue-200 text-gray-500":"bg-blue-500 text-white"," \n            "),onClick:function(){if(o<=2){l(o+1);var e={subsector:{_id:t._id},contador:1,fecha:g};d.dbStatus&&h(t.sector,e.fecha),b(e,d._id,t.sector)}},disabled:E(g)},d&&r.a.createElement("h5",{className:""},d.contador),r.a.createElement("i",{className:"fas fa-ghost ml-1"})),o>0?r.a.createElement("button",{className:"relative inset-y-0 inline-block bg-transparent focus:outline-none flex justify-center items-center text-sm  text-gray-500",onClick:function(){l(0);var e={subsector:{_id:t._id},contador:-o,fecha:g};b(e,d._id,t.sector)}},r.a.createElement("i",{className:"fas fa-undo ml-3 "})):"")},g=function(e){var t=e.sb;return r.a.createElement("div",null,r.a.createElement("div",{key:t._id,className:"box-border flex items-center justify-center w-full h-full border-b hover:bg-gray-200"},r.a.createElement("div",{className:"w-full px-2 py-3"},r.a.createElement("p",{className:" text-lg mb-1 text-black "},t.nombre),r.a.createElement("p",{className:" text-xs mb-1 text-gray-700 "},"N\xfamero de v\xedas: ".concat(t.nVias))),r.a.createElement("div",{className:"w-full"},r.a.createElement(y,{sb:t}))))},h=function(e){var t=e.titulo,a=e.funcion,c=Object(n.useContext)(f),o=c.getContadorSector,l=c.zonas;return r.a.createElement("div",null,r.a.createElement("button",{className:"text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1",type:"button",style:{transition:"all .15s ease"},onClick:function(){a(!1),o(l)}},t))},x=function(e){var t=e.setShowModal,a=e.subsectores,c=e.sector;return r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"},r.a.createElement("div",{className:"relative w-screen  max-h-screen md:max-w-2xl my-4 mx-auto "},r.a.createElement("div",{className:"rounded-t bg-gray-500 w-full h-full p-2 text-white flex items-center  justify-start "},r.a.createElement("h1",{className:"text-xl font-bold"},c)),r.a.createElement("div",{className:"border-0 flex flex-col w-full h-full bg-white outline-none focus:outline-none rounded-b"},r.a.createElement("div",{className:"grid grid-cols-1 md:grid-cols-3  grid-flow-row-dense p-3 overflow-x-hidden"},a&&a.map((function(e){return r.a.createElement(g,{key:e._id,sb:e})}))),r.a.createElement("div",{className:"flex items-center justify-end p-3 rounded-b"},r.a.createElement(h,{titulo:"Cerrar",funcion:function(){return t(!1)}}))))),r.a.createElement("div",{className:"opacity-25 fixed inset-0 z-40 bg-black"}))},O=function(e){var t=e.contador;return r.a.createElement("div",{id:"",className:" flex items-center justify-center px-3"},r.a.createElement("div",{className:" inline-block flex justify-center items-center rounded w-12 px-3 focus:outline-none ' \n       ".concat(0===t?"bg-blue-200 text-gray-500":"bg-blue-500 text-white","\n         ")},r.a.createElement("h5",{className:""},t),r.a.createElement("i",{className:"fas fa-ghost ml-1"})))},v=function(){return r.a.createElement("div",{className:"lds-ripple items-center justify-center mb-4 mr-4"},r.a.createElement("div",null),r.a.createElement("div",null))},N=function(e,t){var a=new Date(e),n=new Date(t);return a.getFullYear()===n.getFullYear()&&a.getMonth()===n.getMonth()&&a.getDate()===n.getDate()},j=function(e){var t,a=e.sector,c=a.nombre,o=a.subsectores,l=Object(n.useState)(!1),s=Object(i.a)(l,2),u=s[0],d=s[1],m=Object(n.useContext)(f),p=m.contadorSectorDay,b=m.thisFecha;return p&&(t=function(e,t,a){var n=e.filter((function(e){return e._id.sector===a&&N(e.fecha,t)}));return n.length>0?n[0].contador:0}(p,b,a._id)),r.a.createElement(n.Fragment,null,r.a.createElement("button",{onClick:function(){return d(!0)},className:"inline-block flex justify-between  items-stretch md:items-center rounded shadow-lg m-3 md:w-64 bg-gray-300 focus:outline-none"},r.a.createElement("div",{className:"inline-block p-3  text-2xl"},c),r.a.createElement("div",{className:"flex mr-3"},p?r.a.createElement(O,{contador:t}):r.a.createElement(v,null))),u?r.a.createElement("div",{className:"flex"},r.a.createElement(x,{setShowModal:function(){return d()},subsectores:o,sector:c})):null)},C=function(e){var t=e.zona,a=t.comuna,n=t.sector;return r.a.createElement("div",{className:"box-border bg-gray-500 opacity-50s rounded  m-3 w-full md:w-auto h-auto"},r.a.createElement("div",{className:"p-1 mx-1"},r.a.createElement("h1",{className:"text-2xl text-gray-100 font-bold"},a),r.a.createElement("h3",{className:"text-lg self-end mb-1 font-hairline"},n&&n[0].region)),r.a.createElement("div",{className:"flex flex-col w-auto"},n&&n.map((function(e){return r.a.createElement(j,{key:e.id,sector:e})}))))},w=a(119),S=a.n(w),D=function(){return r.a.createElement("div",{className:"flex justify-center w-screen"},r.a.createElement("img",{src:S.a,alt:"Loading...",style:{width:"500px",margin:"auto",display:"block"}}))},_=function(){var e=Object(n.useContext)(f),t=e.zonas,a=e.getZonas,c=e.loading,o=e.getContadores,l=e.getContadorSector,s=e.filtrarContadores,i=e.clearFilter,u=e.contadores,d=e.contadorSector,m=e.thisFecha;return Object(n.useEffect)((function(){a(),o()}),[]),Object(n.useEffect)((function(){l(t)}),[t]),Object(n.useEffect)((function(){i(),u&&d&&s(m)}),[u,d,m]),null===t||0!==t.length||c?r.a.createElement("div",{className:"flex flex-wrap items-baseline"},c?r.a.createElement(D,null):t&&t.map((function(e){return r.a.createElement(C,{key:e.comuna,zona:e})}))):r.a.createElement("h4",null," Error ")},R=function(){return r.a.createElement(n.Fragment,null,r.a.createElement(b,null),r.a.createElement("div",{className:"flex"},r.a.createElement(_,null)),r.a.createElement("footer",{className:"bg-gray-100 h-64 flex justify-center items-center "},r.a.createElement("p",null," Todos los derechos reservados ","\xa9"," ")))},k=function(){return r.a.createElement("div",{className:"h-screen w-screen flex justify-center items-center"},r.a.createElement("div",{className:"mt-20"},r.a.createElement(p,null),r.a.createElement("div",{className:"w-32 h-screen"})))},T=a(17),A=a.n(T),F=a(43),I=a(34),z=a.n(I),L=a(81),M=a(4),G=function(e,t){switch(t.type){case"GET_ZONAS":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,zonas:t.payload});case"LOADING_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{loading:!0});case"SET_FECHA":return Object(M.a)(Object(M.a)({},e),{},{thisFecha:t.payload});case"GET_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{contadores:t.payload,loading:!1});case"GET_CONTADORES_SECTOR":return Object(M.a)(Object(M.a)({},e),{},{contadorSector:t.payload,loading:!1});case"UPDATE_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{contadores:e.contadores.map((function(e){return e._id===t.payload._id?t.payload:e})),contadorSector:e.contadorSector.map((function(e){return e._id.sector===t.payload.sectorId&&N(e.fecha,t.payload.fecha)?Object(M.a)(Object(M.a)({},e),{},{contador:e.contador+t.payload.deltaContador}):e})),loading:!1});case"ADD_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{contadores:[].concat(Object(L.a)(e.contadores),[t.payload]),contadorSector:e.contadorSector.map((function(e){return e._id.sector===t.payload.sectorId&&N(e.fecha,t.payload.fecha)?Object(M.a)(Object(M.a)({},e),{},{contador:e.contador+t.payload.deltaContador}):e}))});case"ADD_CONTADOR_SECTOR":return Object(M.a)(Object(M.a)({},e),{},{contadorSector:[].concat(Object(L.a)(e.contadorSector),[t.payload])});case"FILTRAR_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{contadoresDay:e.contadores.filter((function(e){return N(e.fecha,t.payload)})),contadorSectorDay:e.contadorSector.filter((function(e){return N(e.fecha,t.payload)})),loading:!1});case"CLEAR_FILTER":return Object(M.a)(Object(M.a)({},e),{},{contadoresDay:null,contadorSectorDay:null});case"ERROR_CONTADORES":return Object(M.a)(Object(M.a)({},e),{},{loading:!1,error:t.payload});default:return e}},P=a(120),Y=a.n(P),Z=a(56),H=function(e,t){return Object.keys(t).reduce((function(a,n){return Object(M.a)(Object(M.a)({},a),Object(Z.a)({},e[n]||n,t[n]))}),{})},B=function(e){var t={zonas:null,contadores:null,contadoresDay:null,contadorSector:null,contadorSectorDay:null,thisFecha:new Date,loading:!1,error:null},a=Object(n.useReducer)(G,t),c=Object(i.a)(a,2),o=c[0],l=c[1],s=function(){var e=Object(F.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(),e.next=4,z.a.get("/api/v1/sectores");case 4:t=e.sent,a=t.data.data,a=Object.entries(Y()(a,"comuna")).map((function(e){return H({0:"comuna",1:"sector"},e)})),l({type:"GET_ZONAS",payload:a}),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),l({type:"ERROR_CONTADORES",payload:e.t0.response});case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),u=function(){l({type:"LOADING_CONTADORES",payload:!0})},d=function(){var e=Object(F.a)(A.a.mark((function e(){var t,a;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,u(),e.next=4,z.a.get("/api/v1/contadores");case 4:t=e.sent,a=t.data.data,l({type:"GET_CONTADORES",payload:a}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),l({type:"ERROR_CONTADORES",payload:e.t0.response});case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(F.a)(A.a.mark((function e(t){return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.delegateYield(A.a.mark((function e(){var a,n,r,c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:for(a=t.map((function(e){return e.sector})),n=[],r=0;r<a.length;r++)a[r].map((function(e){return n.push(e._id)}));return e.next=5,Promise.all(n.map((function(e){return z.a.get("/api/v1/sectores/".concat(e,"/contadores"))})));case 5:c=e.sent,o=c.map((function(e){return e.data.data})).flat(2),l({type:"GET_CONTADORES_SECTOR",payload:o});case 8:case"end":return e.stop()}}),e)}))(),"t0",2);case 2:e.next=7;break;case 4:e.prev=4,e.t1=e.catch(0),l({type:"ERROR_CONTADORES",payload:e.t1.response});case 7:case"end":return e.stop()}}),e,null,[[0,4]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(F.a)(A.a.mark((function e(t,a,n){var r,c,o;return A.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r={headers:{"Content-Type":"application/json"}},a){e.next=16;break}return e.prev=2,e.next=5,z.a.post("/api/v1/subsectores/".concat(t.subsector._id,"/contadores/"),t,r);case 5:(c=e.sent).data.data.sectorId=n,c.data.data.deltaContador=t.contador,l({type:"ADD_CONTADORES",payload:c.data.data}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),l({type:"ERROR_CONTADORES",payload:e.t0.response.msg});case 14:e.next=28;break;case 16:return e.prev=16,e.next=19,z.a.put("/api/v1/contadores/".concat(a),t,r);case 19:(o=e.sent).data.data.sectorId=n,o.data.data.deltaContador=t.contador,l({type:"UPDATE_CONTADORES",payload:o.data.data}),e.next=28;break;case 25:e.prev=25,e.t1=e.catch(16),l({type:"ERROR_CONTADORES",payload:e.t1.response.msg});case 28:case"end":return e.stop()}}),e,null,[[2,11],[16,25]])})));return function(t,a,n){return e.apply(this,arguments)}}();return r.a.createElement(f.Provider,{value:{zonas:o.zonas,contadores:o.contadores,contadoresDay:o.contadoresDay,contadorSector:o.contadorSector,contadorSectorDay:o.contadorSectorDay,thisFecha:o.thisFecha,loading:o.loading,error:o.error,getZonas:s,getContadores:d,loadingContadores:u,getContadorSector:m,addContadorSector:function(e,t){0===o.contadorSector.filter((function(t){return t._id===e&&N(t.fecha,o.thisFecha)})).length&&l({type:"ADD_CONTADOR_SECTOR",payload:{_id:{sector:e},fecha:t,contador:0}})},addContador:p,setThisContador:function(e){if(o.contadoresDay){var t=o.contadoresDay.filter((function(t){return t.subsector._id===e||t.subsector===e}));return 0===t.length&&(t=[{subsector:{_id:e},fecha:o.thisFecha,contador:0,dbStatus:401}]),t[0]}},filtrarContadores:function(e){u(),l({type:"FILTRAR_CONTADORES",payload:e})},setFecha:function(e){l({type:"SET_FECHA",payload:e})},clearFilter:function(){l({type:"CLEAR_FILTER"})}}},e.children)};var J=function(){return r.a.createElement("div",{className:"App h-screen"},r.a.createElement(B,null,r.a.createElement(l.a,null,r.a.createElement(n.Fragment,null,r.a.createElement(s.a,{exact:!0,path:"/",component:R}),r.a.createElement(s.a,{exact:!0,path:"/dev",component:k})))))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root"))}},[[122,1,2]]]);
//# sourceMappingURL=main.0180170a.chunk.js.map