(this["webpackJsonptodo-list-react"]=this["webpackJsonptodo-list-react"]||[]).push([[0],{25:function(n,e,t){"use strict";t.r(e);var r,i,o,a,c,d,l,s,u,b,j,f,h,p,m,g,x,O,k,v,y,w,C,z=t(0),D=t.n(z),T=t(8),I=t.n(T),S=t(9),F=t(6),R=t(4),H=Object(F.b)({name:"tasks",initialState:{tasks:[],hideDone:!1},reducers:{addTask:function(n,e){var t=n.tasks,r=e.payload;t.push(r)},toggleTaskDone:function(n,e){var t=n.tasks,r=e.payload,i=t.findIndex((function(n){return n.id===r}));t[i].done=!t[i].done},setAllTasksDone:function(n){n.tasks.forEach((function(n){n.done=!0}))},removeTask:function(n,e){var t=n.tasks,r=e.payload,i=t.findIndex((function(n){return n.id===r}));t.splice(i,1)},renameTask:function(n,e){var t=n.tasks,r=e.payload,i=t.findIndex((function(n){return n.id===r}));t.forEach((function(n){n.rename=!1})),t[i].rename=!0,t[i].done=!1},cancelRenameTask:function(n,e){var t=n.tasks,r=e.payload,i=t.findIndex((function(n){return n.id===r}));t[i].rename=!1},acceptRenameTask:function(n,e){var t=n.tasks,r=e.payload,i=t.findIndex((function(n){return n.id===r.id}));t.splice(i,1,r)},toggleHideDone:function(n){n.hideDone=!n.hideDone}}}),L=H.actions,A=L.addTask,E=L.toggleHideDone,P=L.toggleTaskDone,B=L.setAllTasksDone,J=L.removeTask,M=L.renameTask,U=L.cancelRenameTask,X=L.acceptRenameTask,Z=function(n){return n.tasks},q=H.reducer,G=t(3),K=t(2),N=K.d.form(r||(r=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  grid-gap: 20px;\n\n  @media (max-width: ",") {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.size.mobile})),Q=K.d.input(i||(i=Object(G.a)(["\n  padding: 10px;\n  background-color: white;\n  border: 1px solid rgb(220, 220, 220);\n"]))),V=K.d.button(o||(o=Object(G.a)(["\n  background-color: ",";\n  color: rgb(230, 230, 230);\n  padding: 10px;\n  border: none;\n  transition: background 0.5s linear, transform 0.5s linear;\n\n  &:hover {\n    filter: ",";\n    transform: scale(1.1);\n  }\n\n  &:active {\n    filter: ",";\n    outline: 2px solid black;\n  }\n"])),(function(n){return n.theme.colors.mainColor}),(function(n){return n.theme.filter.hover}),(function(n){return n.theme.filter.active})),W=t(1),Y=function(){var n=Object(z.useState)(""),e=Object(S.a)(n,2),t=e[0],r=e[1],i=Object(z.useRef)(null),o=Object(R.b)();return Object(W.jsxs)(N,{onSubmit:function(n){n.preventDefault(),""!==t.trim()&&(o(A({content:t,done:!1,rename:!1,id:Object(F.c)()})),r(""),i.current.focus())},children:[Object(W.jsx)(Q,{value:t,ref:i,type:"text",placeholder:"Co jest do zrobienia?",onChange:function(n){var e=n.target;return r(e.value)}}),Object(W.jsx)(V,{children:"Dodaj zadanie"})]})},$=K.d.form(a||(a=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  grid-gap: 10px;\n  padding: 10px;\n  border-bottom: 1px solid rgb(218, 218, 218);\n\n  ","\n"])),(function(n){return n.hide&&Object(K.c)(c||(c=Object(G.a)(["\n      display: none;\n    "])))})),_=K.d.ul(d||(d=Object(G.a)(["\n  background-color: white;\n  list-style: none;\n  padding: 0;\n"]))),nn=K.d.span(l||(l=Object(G.a)(["\n  display: grid;\n  grid-template-columns: auto 1fr repeat(2, auto);\n  align-items: center;\n  grid-gap: 10px;\n  padding: 10px;\n  border-bottom: 1px solid rgb(218, 218, 218);\n\n  ","\n"])),(function(n){return n.hide&&Object(K.c)(s||(s=Object(G.a)(["\n      display: none;\n    "])))})),en=K.d.span(u||(u=Object(G.a)(["\n  word-break: break-word;\n\n  ","\n"])),(function(n){return n.done&&Object(K.c)(b||(b=Object(G.a)(["\n      text-decoration: line-through;\n    "])))})),tn=(K.d.form(j||(j=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto auto;\n  align-items: center;\n  grid-gap: 10px;\n  padding: 10px;\n  border-bottom: 1px solid rgb(218, 218, 218);\n\n  ","\n"])),(function(n){return n.hide&&Object(K.c)(f||(f=Object(G.a)(["\n      display: none;\n    "])))})),K.d.button(h||(h=Object(G.a)(["\n  width: 30px;\n  height: 30px;\n  padding: 0;\n  background-color: hsl(120, 100%, 25%);\n  cursor: pointer;\n  color: white;\n  border: none;\n  transition: background 0.5s linear;\n\n  &:hover {\n    filter: ",";\n  }\n\n  &:active {\n    filter: ",";\n    outline: 2px solid black;\n  }\n\n  ","\n\n  ","\n"])),(function(n){return n.theme.filter.hover}),(function(n){return n.theme.filter.active}),(function(n){return n.remove&&Object(K.c)(p||(p=Object(G.a)(["\n      background-color: hsl(357, 95%, 40%);\n\n      &:hover {\n        filter: ",";\n      }\n\n      &:active {\n        filter: ",";\n        outline: 2px solid black;\n      }\n    "])),(function(n){return n.theme.filter.hover}),(function(n){return n.theme.filter.active}))}),(function(n){return n.rename&&Object(K.c)(m||(m=Object(G.a)(["\n      background-color: hsl(200, 95%, 40%);\n\n      &:hover {\n        filter: ",";\n      }\n\n      &:active {\n        filter: ",";\n        outline: 2px solid black;\n      }\n    "])),(function(n){return n.theme.filter.hover}),(function(n){return n.theme.filter.active}))}))),rn=function(n){var e=n.task,t=Object(z.useState)(""),r=Object(S.a)(t,2),i=r[0],o=r[1],a=Object(R.b)();return Object(W.jsxs)($,{hide:!e.rename,onSubmit:function(n){n.preventDefault(),o("")},children:[Object(W.jsx)("input",{value:i,type:"text",placeholder:"",onChange:function(n){var e=n.target;return o(e.value)}}),Object(W.jsx)(tn,{type:"submit",title:"Zatwierd\u017a zmian\u0119",onClick:function(){a(""===i?U(e.id):X({content:i,done:!1,rename:!1,id:e.id}))},children:"\u2714"}),Object(W.jsx)(tn,{remove:!0,type:"button",title:"Anuluj zmian\u0119",onClick:function(){return a(U(e.id))},children:"X"})]})},on=function(){var n=Object(R.c)(Z),e=n.tasks,t=n.hideDone,r=Object(R.b)();return Object(W.jsx)(_,{children:e.map((function(n){return Object(W.jsxs)("li",{children:[Object(W.jsxs)(nn,{hide:n.done&&t||n.rename,children:[Object(W.jsx)(tn,{onClick:function(){return r(P(n.id))},children:n.done?"\u2714":""}),Object(W.jsx)(en,{done:n.done,children:n.content}),Object(W.jsx)(tn,{rename:!0,onClick:function(){return r(M(n.id))},title:"edytuj zadanie",children:"\ud83d\udd8a\ufe0f"}),Object(W.jsx)(tn,{remove:!0,onClick:function(){return r(J(n.id))},title:"usu\u0144 zadanie",children:"\ud83d\uddd1"})]}),Object(W.jsx)(rn,{task:n})]},n.id)}))})},an=K.d.section(g||(g=Object(G.a)(["\n  display: grid;\n  grid-template-rows: auto minmax(50px, 1fr);\n  grid-gap: 5px;\n  box-shadow: 0 0 5px #ddd;\n"]))),cn=K.d.header(x||(x=Object(G.a)(["\n  display: grid;\n  grid-template-columns: 1fr auto;\n  padding: 20px;\n  grid-gap: 20px;\n  background-color: white;\n\n  @media (max-width: ",") {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.size.mobile})),dn=K.d.h2(O||(O=Object(G.a)(["\n  background-color: white;\n"]))),ln=K.d.div(k||(k=Object(G.a)(["\n  padding: 20px;\n  background-color: white;\n"]))),sn=function(n){var e=n.title,t=n.body,r=n.extraHeaderContent;return Object(W.jsxs)(an,{children:[Object(W.jsxs)(cn,{children:[Object(W.jsx)(dn,{children:e}),r]}),Object(W.jsx)(ln,{children:t})]})},un=K.d.div(v||(v=Object(G.a)(["\n  display: grid;\n  grid-template-columns: auto auto;\n  grid-gap: 20px;\n\n  @media (max-width: ",") {\n    grid-template-columns: 1fr;\n  }\n"])),(function(n){return n.theme.size.mobile})),bn=K.d.button(y||(y=Object(G.a)(["\n  border: none;\n  background-color: white;\n  color: hsl(180, 100%, 25%);\n  transition: color 0.5s linear;\n\n  &:disabled {\n    color: #ddd;\n    pointer-events: none;\n  }\n\n  &:hover {\n    filter: ",";\n  }\n\n  &:active {\n    filter: ",";\n  }\n"])),(function(n){return n.theme.filter.hover}),(function(n){return n.theme.filter.active})),jn=function(){var n=Object(R.c)(Z),e=n.tasks,t=n.hideDone,r=Object(R.b)();return Object(W.jsx)(un,{children:e.length>0&&Object(W.jsxs)(W.Fragment,{children:[Object(W.jsxs)(bn,{onClick:function(){return r(E())},children:[t?"Poka\u017c":"Ukryj"," uko\u0144czone"]}),Object(W.jsx)(bn,{onClick:function(){return r(B())},disabled:e.every((function(n){return n.done})),children:"Uko\u0144cz wszystkie"})]})})},fn=K.d.h1(w||(w=Object(G.a)(["\n  margin: 20px auto;\n"]))),hn=function(n){var e=n.title;return Object(W.jsx)("header",{children:Object(W.jsx)(fn,{children:e})})},pn=K.d.main(C||(C=Object(G.a)(["\n  display: grid;\n  grid-template-rows: auto 1fr;\n  grid-gap: 10px;\n"]))),mn=function(n){var e=n.children;return Object(W.jsx)(pn,{children:e})};var gn,xn=function(){return Object(W.jsxs)(W.Fragment,{children:[Object(W.jsx)(hn,{title:"Lista zada\u0144"}),Object(W.jsxs)(mn,{children:[Object(W.jsx)(sn,{title:"Dodaj nowe zadanie",body:Object(W.jsx)(Y,{})}),Object(W.jsx)(sn,{title:"Lista zada\u0144",extraHeaderContent:Object(W.jsx)(jn,{}),body:Object(W.jsx)(on,{})})]})]})},On=Object(K.b)(gn||(gn=Object(G.a)(["\nhtml {\n  box-sizing: border-box;\n}\n\n*, ::after, ::before {\n  box-sizing: inherit;\n  margin: 0;\n}\n\nbutton {\n  cursor: pointer;\n}\n\nbody {\n  max-width: 900px;\n  margin: 0 auto;\n  padding: 10px;\n  font-family: 'Montserrat', sans-serif;\n  background-color: ",";\n}\n\n"])),(function(n){return n.theme.colors.backgroundColor})),kn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,26)).then((function(e){var t=e.getCLS,r=e.getFID,i=e.getFCP,o=e.getLCP,a=e.getTTFB;t(n),r(n),i(n),o(n),a(n)}))},vn=Object(F.a)({reducer:{tasks:q}});I.a.render(Object(W.jsx)(D.a.StrictMode,{children:Object(W.jsx)(R.a,{store:vn,children:Object(W.jsxs)(K.a,{theme:{colors:{mainColor:"teal",backgroundColor:"#eee"},size:{mobile:"767px"},filter:{hover:"brightness(110%)",active:"brightness(125%)"}},children:[Object(W.jsx)(On,{}),Object(W.jsx)(xn,{})]})})}),document.getElementById("root")),kn()}},[[25,1,2]]]);
//# sourceMappingURL=main.217a0311.chunk.js.map