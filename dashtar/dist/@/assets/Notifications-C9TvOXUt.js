import{j as e,r as m,f as F,d as n,L as P}from"./index-CU2_kOLs.js";import{u as $,N as d,v as L,f as u,S as O,w as z}from"./Layout-DRuA_42E.js";import{P as W}from"./PageTitle-yWCDsDLT.js";import{a as f,n as w}from"./toast-C6v5B_PI.js";import"./iconBase-CMZs39VK.js";import"./useDispatch-DNOf3xOQ.js";import"./httpService-JQLsFEdd.js";const k=({id:l,name:r,type:g,handleClick:p,isChecked:j})=>e.jsx("input",{id:l,name:r,type:g,onChange:p,checked:j}),X=()=>{const[l,r]=m.useState([]),[g,p]=m.useState(0),[j,h]=m.useState(0),[C,N]=m.useState(2),[o,x]=m.useState([]),[y,D]=m.useState(!1),{t:c}=F(),{showDateTimeFormat:S}=$(),T=async a=>{var i,s;try{await d.updateStatusNotification(a,{status:"read"});const t=await d.getAllNotification();r(t==null?void 0:t.notifications),h(t==null?void 0:t.totalUnreadDoc),window.location.reload(!1)}catch(t){f(((s=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:s.message)||(t==null?void 0:t.message))}},U=async a=>{var i,s;try{await d.deleteNotification(a);const t=await d.getAllNotification();r(t==null?void 0:t.notifications),h(t==null?void 0:t.totalUnreadDoc),p(t==null?void 0:t.totalDoc)}catch(t){f(((s=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:s.message)||(t==null?void 0:t.message))}},B=async a=>{var i,s;try{const t=await d.getAllNotification(a);r(b=>[...b,...t==null?void 0:t.notifications]),h(t==null?void 0:t.totalUnreadDoc),N(b=>b+1)}catch(t){f(((s=(i=t==null?void 0:t.response)==null?void 0:i.data)==null?void 0:s.message)||(t==null?void 0:t.message))}},I=async()=>{var a,i;try{const s=await d.updateManyStatusNotification({ids:o,status:"read"});x([]),w(s.message),N(1);const t=await d.getAllNotification();r(t==null?void 0:t.notifications),h(t==null?void 0:t.totalUnreadDoc)}catch(s){f(((i=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:i.message)||(s==null?void 0:s.message))}},M=async()=>{var a,i;try{const s=await d.deleteManyNotification({ids:o});w(s.message),x([]),N(1);const t=await d.getAllNotification();r(t==null?void 0:t.notifications),h(t==null?void 0:t.totalUnreadDoc)}catch(s){f(((i=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:i.message)||(s==null?void 0:s.message))}},_=()=>{D(!y),x(l==null?void 0:l.map(a=>a._id)),y&&x([])},E=a=>{const{id:i,checked:s}=a.target;x([...o,i]),s||x(o.filter(t=>t!==i))};return m.useEffect(()=>{(async()=>{var a,i;try{const s=await d.getAllNotification();r(s==null?void 0:s.notifications),h(s==null?void 0:s.totalUnreadDoc),p(s==null?void 0:s.totalDoc),N(1)}catch(s){f(((i=(a=s==null?void 0:s.response)==null?void 0:a.data)==null?void 0:i.message)||(s==null?void 0:s.message))}})()},[]),e.jsxs(e.Fragment,{children:[e.jsx(W,{children:c("Notification")}),e.jsx(n.Card,{className:"shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsxs(n.CardBody,{className:"flex justify-between",children:[e.jsx("div",{className:"",children:e.jsxs(n.Button,{disabled:(o==null?void 0:o.length)<1,onClick:I,className:"w-full rounded-md h-10 flex items-center justify-center bg-blue-500 text-white px-1 hover:bg-blue-700",children:[e.jsx("span",{className:"mr-2",children:e.jsx(L,{})}),c("Mark is read")]})}),e.jsx("div",{className:"",children:e.jsxs(n.Button,{disabled:(o==null?void 0:o.length)<1,onClick:M,className:"w-full rounded-md h-10 bg-red-500 btn-red",children:[e.jsx("span",{className:"mr-3",children:e.jsx(u,{})}),c("Delete")]})})]})}),e.jsx(n.Card,{className:"shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:e.jsxs(n.CardBody,{style:{padding:0},children:[e.jsx("div",{className:"p-4 dark:text-gray-300",children:e.jsxs("p",{className:"text-sm font-semibold text-teal-700",children:[c("Unread Notification")," (",j,")"]})}),e.jsxs("div",{className:"border rounded-md",children:[e.jsxs("div",{className:"bg-gray-200 border-gray-400 p-2 dark:bg-gray-700 dark:text-gray-400 flex justify-between",children:[e.jsxs("div",{className:"flex",children:[e.jsx(k,{type:"checkbox",name:"selectAll",id:"selectAll",handleClick:_,isChecked:y}),e.jsx("p",{className:"text-xs font-semibold text-gray-500 my-auto dark:text-gray-300 ml-6 uppercase",children:c("Notification")})]}),e.jsx("div",{className:"text-right",children:e.jsx("p",{className:"text-xs font-semibold text-gray-500 my-auto dark:text-gray-300 mr-2 uppercase",children:c("Action")})})]}),e.jsx("div",{className:"w-full lg:h-lg md:h-sm h-md relative",children:e.jsx(O,{className:"scrollbar-hide",children:e.jsxs(n.TableContainer,{className:"border-none p-2",children:[e.jsx(n.Table,{children:e.jsx(n.TableBody,{className:"w-full h-440",children:l.map((a,i)=>e.jsxs(n.TableRow,{className:"border-none",children:[e.jsx(n.TableCell,{style:{padding:0},children:e.jsx(k,{type:"checkbox",name:a==null?void 0:a._id,id:a._id,handleClick:E,isChecked:o==null?void 0:o.includes(a._id)})}),e.jsx(n.TableCell,{className:"md:w-full w-1/5",style:{paddingRight:0},children:e.jsxs(P,{to:a.productId?`/product/${a.productId}`:`/order/${a.orderId}`,className:"flex items-center",onClick:()=>T(a._id),children:[e.jsx(n.Avatar,{className:"mr-2 md:block hidden bg-gray-50 border border-gray-200",src:a.image,alt:"画像"}),e.jsxs("div",{className:"notification-content",children:[e.jsx("div",{className:"md:inline-block hidden",children:e.jsx("h6",{className:"font-medium text-gray-500",children:a==null?void 0:a.message})}),e.jsx("div",{className:"md:hidden",children:e.jsx("h6",{className:"font-medium text-gray-500",children:(a==null?void 0:a.message.substring(0,33))+"..."})}),e.jsxs("p",{className:"flex items-center text-xs text-gray-400",children:[a.productId?e.jsxs(n.Badge,{type:"danger",children:[c("Stock Out")," "]}):e.jsxs(n.Badge,{type:"success",children:[c("New Order")," "]}),e.jsx("span",{className:"ml-2",children:S(a==null?void 0:a.createdAt)})]})]}),a.status==="unread"&&e.jsx("span",{className:"px-2 md:flex hidden focus:outline-none text-emerald-600",children:e.jsx("img",{src:z,width:12,height:12,alt:"省略記号",className:"w-3 h-3 text-emerald-600"})})]})}),e.jsx(n.TableCell,{className:"text-right",style:{padding:`${window.innerWidth<420?"0":"0.5rem"}`},children:e.jsxs("div",{className:"group inline-block relative",children:[e.jsx("button",{onClick:()=>U(a._id),type:"button",className:"px-2 group-hover:text-blue-500 text-red-500 focus:outline-none",children:e.jsx(u,{})}),e.jsx("div",{className:"absolute hidden group-hover:inline-block bg-gray-50 dark:text-white mr-8 mb-1 right-0 z-50 px-3 py-2 text-sm font-medium text-red-600 rounded-lg shadow-sm tooltip dark:bg-gray-700",children:c("Delete")})]})})]},i+1))})}),e.jsx("div",{children:g>5&&l.length!==g?e.jsx("div",{className:"text-center py-2",children:e.jsx("button",{onClick:()=>B(C+1),type:"button",className:"focus:outline-none text-blue-700 hover:underline transition ease-out duration-200 dark:text-gray-400",children:c("See more notifications")})}):null})]})})})]})]})})]})};export{X as default};
