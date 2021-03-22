(this["webpackJsonpreact_todo-app"]=this["webpackJsonpreact_todo-app"]||[]).push([[0],{23:function(e,t,a){e.exports=a(36)},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(18),c=a.n(l),r=a(7),i=(a(28),a(29),a(30),a(9)),s=a(22),u=a(6),d=a(1),m=a(19),p=a.n(m),f=function(e){var t=e.todoTitle,a=e.setTodoTitle,n=e.handleSubmit;return o.a.createElement("header",{className:"header"},o.a.createElement("h1",null,"todo app"),o.a.createElement("form",{onSubmit:n},o.a.createElement("input",{type:"text",className:"new-todo",placeholder:"What needs to be done?",value:t,onChange:function(e){var t=e.target;return a(t.value)}})))},E=a(20),b=a.n(E),v=function(e){var t=e.todo,a=e.setStatus,l=e.destroyTodo,c=e.setTitleEditing,r=Object(n.useState)(""),i=Object(u.a)(r,2),s=i[0],d=i[1],m=Object(n.useState)(!1),p=Object(u.a)(m,2),f=p[0],E=p[1];return o.a.createElement("li",{key:t.id,className:b()({completed:t.completed,editing:f})},o.a.createElement("div",{className:"view"},o.a.createElement("input",{type:"checkbox",className:"toggle",checked:t.completed,onChange:function(){return a(t.id)}}),o.a.createElement("label",{onDoubleClick:function(e){return function(e,t){e.preventDefault(),E(!f),d(t)}(e,t.title)}},t.title),o.a.createElement("button",{type:"button",className:"destroy",onClick:function(){return l(t.id)}})),o.a.createElement("input",{type:"text",className:"edit",value:s,onChange:function(e){var t=e.target;t.value&&d(t.value)},onKeyUp:function(e){switch(e.key){case"Enter":c(t.id,s),E(!1);break;case"Escape":d(t.title),c(t.id,t.title),E(!1)}},onBlur:function(e,t){c(e,t),E(!1)}}))},h=function(e){var t=e.todos,a=e.setStatus,l=e.destroyTodo,c=e.activeTodos,r=e.setAllTodosCompleted,i=e.setTitleEditing,s=Object(n.useState)(t),d=Object(u.a)(s,2),m=d[0],p=d[1];return Object(n.useEffect)((function(){p(t)}),[t]),o.a.createElement("section",{className:"main"},o.a.createElement("input",{type:"checkbox",id:"toggle-all",className:"toggle-all",checked:c.length,onChange:r}),o.a.createElement("label",{htmlFor:"toggle-all"},"Mark all as complete"),o.a.createElement("ul",{className:"todo-list"},m.map((function(e){return o.a.createElement(v,{key:e.id,todo:e,setStatus:a,destroyTodo:l,setTitleEditing:i})}))))},g=function(){return o.a.createElement("ul",{className:"filters"},o.a.createElement("li",null,o.a.createElement(r.b,{exact:!0,to:"/",activeClassName:"selected"},"All")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/active",activeClassName:"selected"},"Active")),o.a.createElement("li",null,o.a.createElement(r.b,{to:"/completed",activeClassName:"selected"},"Completed")))},T=function(e){var t=e.activeTodos,a=e.completedTodos,n=e.clearCompletedTodos;return o.a.createElement("footer",{className:"footer"},o.a.createElement("span",{className:"todo-count"},t.length," ","items left"),o.a.createElement(g,null),a.length>0&&o.a.createElement("button",{type:"button",className:"clear-completed",onClick:n},"Clear completed"))};var j=function(){var e=p()("todos",[]),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),r=Object(u.a)(c,2),m=r[0],E=r[1],b=a.filter((function(e){return!e.completed})),v=a.filter((function(e){return e.completed})),g=Object(d.d)().pathname;return o.a.createElement("section",{className:"todoapp"},o.a.createElement(f,{handleSubmit:function(e){if(e.preventDefault(),m.trim().length>0){var t={title:m,id:+new Date,completed:null};l([t].concat(Object(s.a)(a)))}E("")},todoTitle:m,setTodoTitle:E}),o.a.createElement(h,{todos:function(){switch(g){case"/active":return b;case"/completed":return v;default:return a}},setStatus:function(e){l((function(t){return t.map((function(t){return t.id===e?Object(i.a)(Object(i.a)({},t),{},{completed:!t.completed}):t}))}))},destroyTodo:function(e){l(a.filter((function(t){return t.id!==e})))},activeTodos:b,setAllTodosCompleted:function(){l((function(e){return e.map((function(e){return Object(i.a)(Object(i.a)({},e),{},{completed:!e.completed})}))}))},setTitleEditing:function(e,t){l(a.map((function(a){return a.id===e?Object(i.a)(Object(i.a)({},a),{},{title:t}):a})))}}),a.length>0&&o.a.createElement(T,{todos:a,activeTodos:b,completedTodos:v,clearCompletedTodos:function(){l(b)}}))};c.a.render(o.a.createElement(r.a,null,o.a.createElement(j,null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.b96f1911.chunk.js.map