(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[929],{3905:function(t,e,l){"use strict";l.d(e,{Z:function(){return o}});/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l(2898).Z)("Pencil",[["path",{d:"M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z",key:"5qss01"}],["path",{d:"m15 5 4 4",key:"1mk7zo"}]])},9883:function(t,e,l){"use strict";l.d(e,{Z:function(){return o}});/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let o=(0,l(2898).Z)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]])},6183:function(t,e,l){Promise.resolve().then(l.bind(l,5944))},3813:function(t,e,l){"use strict";var o=l(7437),a=l(6691),n=l.n(a);l(2265),e.Z=t=>{let{title:e}=t;return(0,o.jsx)("div",{className:"absolute top-0 left-0 z-10 w-full h-max bg-header-background p-2 px-4 flex justify-center items-center",children:(0,o.jsxs)("div",{className:"flex justify-between items-center w-full h-full xl:w-1/2",children:[(0,o.jsx)("p",{className:"text-2xl font-bold text-header-text",children:e}),(0,o.jsx)(n(),{src:"logo.svg",className:"text-header-logo",alt:"logo",width:50,height:50})]})})}},968:function(t,e,l){"use strict";var o=l(7437),a=l(6264);l(2265),e.Z=()=>(0,o.jsx)("div",{className:"w-full h-full flex justify-center items-center text-loader",children:(0,o.jsx)(a.Z,{className:"animate-spin",width:100,height:100})})},8948:function(t,e,l){"use strict";l.d(e,{Z:function(){return s}});var o=l(7437);l(2265);var a=l(2167),n=l(2555);let i={initial:{opacity:0,scale:.5},animate:{opacity:1,scale:1},exit:{opacity:0,scale:.5},transition:{duration:.6}},r={initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.6}};var s=t=>{let{children:e,closeModal:l}=t;return(0,o.jsx)(a.M,{children:(0,o.jsx)(n.E.div,{...r,className:"fixed top-0 left-0 z-50 w-screen h-screen bg-modal-background-main bg-opacity-80 flex justify-center items-center p-2",onClick:()=>l(),children:(0,o.jsx)(n.E.div,{...i,className:"w-full min-h-max max-h-max rounded-2xl bg-modal-background-card shadow-2xl overflow-hidden flex justify-center items-center px-2 py-4 lg:w-1/2",onClick:t=>t.stopPropagation(),children:e})})})}},5944:function(t,e,l){"use strict";l.r(e),l.d(e,{default:function(){return E}});var o=l(7437),a=l(4660),n=l(4810),i=l(8792);let r=(0,a.Ue)()((0,i.n)((0,n.mW)((0,n.tJ)(t=>({todos:[],addTodo(e){t(t=>{t.todos.push({id:Number(new Date),title:e,isCompleted:!1})})},deleteTodo(e){t(t=>({todos:t.todos.filter(t=>t.id!==e)}))},toggleTodo(e){t(t=>{let l=t.todos.findIndex(t=>t.id===e);-1!==l&&(t.todos[l].isCompleted=!t.todos[l].isCompleted)})},editTodo(e,l){t(t=>{let o=t.todos.findIndex(t=>t.id===e);-1!==o&&(t.todos[o].title=l)})}}),{name:"todo",storage:(0,n.FL)(()=>localStorage)}))));var s=l(8812),d=()=>({...(0,s.o)(r,t=>t)}),c=l(2265),x=l(8948),u=l(8965),m=l(2898);/**
 * @license lucide-react v0.302.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let f=(0,m.Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),h=(0,m.Z)("Eye",[["path",{d:"M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z",key:"rwhkz3"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);var p=l(3905),b=l(1138),g=l(1865),j=l(2167),y=l(2555);let w=t=>({initial:{opacity:0,y:100},animate:{opacity:1,y:0},transition:{delay:.5+t/6}}),k={initial:{opacity:0,x:0},animate:{opacity:1,x:0},exit:{opacity:0,x:0}},v=t=>({initial:{opacity:0,x:50},animate:{opacity:1,x:0},exit:{opacity:0,x:50},transition:{delay:.1+t/30}});var N=t=>{let{todo:e,idx:l}=t,{toggleTodo:a,deleteTodo:n,editTodo:i}=d(),[r,s]=(0,c.useState)(!1),{isShowing:m,openModal:N,closeModal:Z}=(0,u.Z)(),{register:M,handleSubmit:C,formState:{errors:E},reset:T}=(0,g.cI)(),D=new Date(e.id);return(0,o.jsx)(j.M,{children:(0,o.jsxs)(y.E.div,{...w(l),className:"overflow-hidden relative w-full h-max rounded-xl border flex flex-col justify-between p-2 ".concat(e.isCompleted?"border-todo-border-active line-through bg-todo-background-active":"border-todo-border-passive bg-todo-background-passive"),onClick:()=>{s(!r)},onMouseLeave:()=>{s(!1)},children:[(0,o.jsx)("p",{className:"w-full h-max text-lg text-todo-title",children:e.title}),(0,o.jsx)("p",{className:"w-max h-max text-sm text-todo-date",children:"".concat(D.getDate(),"-").concat(D.getMonth()+1,"-").concat(D.getFullYear())}),r&&(0,o.jsxs)(y.E.div,{...k,className:"absolute top-0 right-0 w-max h-full bg-todo-menu-background-main bg-gradient-to-r from-todo-menu-background-start via-todo-menu-background-center to-todo-menu-background-end text-todo-menu-icons backdrop-blur-sm flex justify-end items-center gap-6 px-4",children:[(0,o.jsx)(y.E.button,{...v(0),onClick:()=>{a&&a(e.id)},children:e.isCompleted?(0,o.jsx)(f,{}):(0,o.jsx)(h,{})}),(0,o.jsx)(y.E.button,{...v(1),onClick:()=>N(),children:(0,o.jsx)(p.Z,{})}),(0,o.jsx)(y.E.button,{...v(2),onClick:()=>{n&&n(e.id)},children:(0,o.jsx)(b.Z,{})})]}),m&&(0,o.jsx)(x.Z,{closeModal:Z,children:(0,o.jsxs)("form",{onSubmit:C(t=>{i&&i(e.id,t.title),T(),Z(),s(!1)}),className:"w-full h-full flex flex-col justify-center items-center text-modal-text",children:[(0,o.jsx)("p",{className:"text-2xl text-center text-modal-title",children:"Изменить ToDo"}),(0,o.jsx)("textarea",{...M("title",{maxLength:200,required:"Нужно хоть что-то ввести"}),rows:5,defaultValue:e.title,className:"w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text",placeholder:"Введите текст ToDo"}),E.title&&(0,o.jsx)("p",{className:"text-modal-error w-full h-max text-lg mt-2",children:E.title.message}),(0,o.jsx)("button",{className:"w-full mt-4 bg-modal-button-background border border-modal-button-border text-modal-button-text  text-xl px-8 py-4 rounded-xl",type:"submit",children:"Изменить"})]})})]})})},Z=l(9883),M=l(3813),C=l(968),E=()=>{let{todos:t,addTodo:e}=d(),{isShowing:l,openModal:a,closeModal:n}=(0,u.Z)(),{register:i,handleSubmit:r,formState:{errors:s},reset:c}=(0,g.cI)();return t?(0,o.jsx)(j.M,{children:(0,o.jsxs)(y.E.div,{className:"w-full h-full overflow-auto flex flex-col items-center relative px-2",children:[(0,o.jsx)(M.Z,{title:"ToDo List"}),(0,o.jsxs)(y.E.div,{className:"w-full h-full flex flex-col items-center gap-1 mb-32 mt-16 lg:w-1/2",children:[t&&0!==t.length?t.map((t,e)=>(0,o.jsx)(N,{todo:t,idx:e},t.id)):(0,o.jsx)("p",{className:"text-lg w-full h-max p-2 text-center text-palitra-c100",children:"Список пуст"}),(0,o.jsxs)(y.E.button,{...w(null==t?void 0:t.length),className:"w-full h-max rounded-xl border border-todo-button-border bg-todo-button-background text-todo-button-text flex justify-center items-center p-2 text-lg",onClick:()=>a(),children:[(0,o.jsx)(Z.Z,{width:30,height:30}),"Добавить"]})]}),l&&(0,o.jsx)(x.Z,{closeModal:n,children:(0,o.jsxs)("form",{onSubmit:r(t=>{e&&e(t.title),c(),n()}),className:"w-full h-full flex flex-col justify-center items-center text-modal-text",children:[(0,o.jsx)("p",{className:"text-2xl text-center text-modal-title",children:"Добавить новый ToDo"}),(0,o.jsx)("textarea",{...i("title",{maxLength:200,required:"Нужно хоть что-то ввести"}),rows:5,className:"w-full text-xl outline-none px-4 py-2 resize-none mt-4 rounded-lg bg-modal-input-background border border-modal-input-border text-modal-input-text",placeholder:"Введите текст ToDo"}),s.title&&(0,o.jsx)("p",{className:"text-modal-error w-full h-max text-lg mt-2",children:s.title.message}),(0,o.jsx)("button",{className:"w-full mt-4 bg-modal-button-background border border-modal-button-border text-modal-button-text  text-xl px-8 py-4 rounded-xl",type:"submit",children:"Создать"})]})})]})}):(0,o.jsx)(C.Z,{})}},8965:function(t,e,l){"use strict";var o=l(2265);e.Z=()=>{let[t,e]=(0,o.useState)(!1);return{isShowing:t,toggleModal:()=>{e(!t)},openModal:()=>{e(!0)},closeModal:()=>{e(!1)},setModal:t=>{e(t)}}}},8812:function(t,e,l){"use strict";l.d(e,{o:function(){return a}});var o=l(2265);let a=(t,e)=>{let l=t(e),[a,n]=(0,o.useState)();return(0,o.useEffect)(()=>{n(l)},[l]),a}}},function(t){t.O(0,[749,383,971,938,744],function(){return t(t.s=6183)}),_N_E=t.O()}]);