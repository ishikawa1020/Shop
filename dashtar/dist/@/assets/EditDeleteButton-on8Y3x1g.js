import{l as P,r as M,S as T,h as $,f as L,j as t,d as f,L as I}from"./index-CU2_kOLs.js";import{f as A,i as O,e as S}from"./Layout-DRuA_42E.js";import{s as R}from"./spinner-CkndCogW.js";import{A as H}from"./AdminServices-D_Y1VEvB.js";import{P as N,c as B,C as y,b as K,A as x}from"./ProductServices-Cr3_umUf.js";import{L as D}from"./LanguageServices-J1joDgr0.js";import{u as V}from"./DrawerButton-0gO4Hlg-.js";import{C as E}from"./CurrencyServices-D7bllOcu.js";import{n as l,a as b}from"./toast-C6v5B_PI.js";import{T as h}from"./Tooltip-CHrqK3eg.js";const Z=({id:r,ids:n,setIsCheck:u,category:p,title:c,useParamId:j})=>{const{isModalOpen:d,closeModal:s,setIsUpdate:a}=M.useContext(T),{setServiceId:i}=V(),m=$(),[F,o]=M.useState(!1),C=async()=>{var w,v;try{if(o(!0),m.pathname==="/products")if(n){const e=await N.deleteManyProducts({ids:n});a(!0),l(e.message),u([]),i(),s(),o(!1)}else{const e=await N.deleteProduct(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/coupons")if(n){const e=await B.deleteManyCoupons({ids:n});a(!0),l(e.message),u([]),i(),s(),o(!1)}else{const e=await B.deleteCoupon(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/categories"||p)if(n){const e=await y.deleteManyCategory({ids:n});a(!0),l(e.message),u([]),i(),s(),o(!1)}else{if(r===void 0||!r)return b("まずカテゴリを選択してください！"),o(!1),s();const e=await y.deleteCategory(r);a(!0),l(e.message),s(),i(),o(!1)}else if(m.pathname===`/categories/${j}`||p){if(r===void 0||!r)return b("まずカテゴリを選択してください！"),o(!1),s();const e=await y.deleteCategory(r);a(!0),l(e.message),s(),i(),o(!1)}if(m.pathname==="/customers"){const e=await K.deleteCustomer(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/attributes")if(n){const e=await x.deleteManyAttribute({ids:n});a(!0),l(e.message),u([]),i(),s(),o(!1)}else{const e=await x.deleteAttribute(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname===`/attributes/${m.pathname.split("/")[2]}`)if(n){const e=await x.deleteManyChildAttribute({id:m.pathname.split("/")[2],ids:n});a(!0),l(e.message),i(),u([]),s(),o(!1)}else{const e=await x.deleteChildAttribute({id:r,ids:m.pathname.split("/")[2]});a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/our-staff"){const e=await H.deleteStaff(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/languages")if(n){const e=await D.deleteManyLanguage({ids:n});a(!0),l(e.message),u([]),s(),o(!1)}else{const e=await D.deleteLanguage(r);a(!0),l(e.message),i(),s(),o(!1)}if(m.pathname==="/currencies")if(n){const e=await E.deleteManyCurrency({ids:n});a(!0),l(e.message),u([]),s(),o(!1)}else{const e=await E.deleteCurrency(r);a(!0),l(e.message),i(),s(),o(!1)}}catch(e){b(e?(v=(w=e==null?void 0:e.response)==null?void 0:w.data)==null?void 0:v.message:e==null?void 0:e.message),i(),u([]),s(),o(!1)}},{t:g}=L();return t.jsx(t.Fragment,{children:t.jsxs(f.Modal,{isOpen:d,onClose:s,children:[t.jsxs(f.ModalBody,{className:"text-center custom-modal px-8 pt-6 pb-4",children:[t.jsx("span",{className:"flex justify-center text-3xl mb-6 text-red-500",children:t.jsx(A,{})}),t.jsxs("h2",{className:"text-xl font-medium mb-2",children:[g("DeleteModalH2")," ",t.jsx("span",{className:"text-red-500",children:c}),"?"]}),t.jsx("p",{children:g("DeleteModalPtag")})]}),t.jsxs(f.ModalFooter,{className:"justify-center",children:[t.jsx(f.Button,{className:"w-full sm:w-auto hover:bg-white hover:border-gray-50",layout:"outline",onClick:s,children:g("modalKeepBtn")}),t.jsx("div",{className:"flex justify-end",children:F?t.jsxs(f.Button,{disabled:!0,type:"button",className:"w-full h-12 sm:w-auto",children:[t.jsx("img",{src:R,alt:"Loading",width:20,height:10})," ",t.jsx("span",{className:"font-serif ml-2 font-light",children:g("Processing")})]}):t.jsx(f.Button,{onClick:C,className:"w-full h-12 sm:w-auto",children:g("modalDeletBtn")})})]})]})})},k=P.memo(Z),ee=({id:r,title:n,handleUpdate:u,handleModalOpen:p,isCheck:c,product:j,parent:d,children:s})=>{const{t:a}=L();return t.jsx(t.Fragment,{children:t.jsxs("div",{className:"flex justify-end text-right",children:[(s==null?void 0:s.length)>0?t.jsxs(t.Fragment,{children:[t.jsx(I,{to:`/categories/${d==null?void 0:d._id}`,className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(h,{id:"view",Icon:O,title:a("View"),bgColor:"#10B981"})}),t.jsx("button",{disabled:(c==null?void 0:c.length)>0,onClick:()=>u(r),className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(h,{id:"edit",Icon:S,title:a("Edit"),bgColor:"#10B981"})})]}):t.jsx("button",{disabled:(c==null?void 0:c.length)>0,onClick:()=>u(r),className:"p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none",children:t.jsx(h,{id:"edit",Icon:S,title:a("Edit"),bgColor:"#10B981"})}),t.jsx("button",{disabled:(c==null?void 0:c.length)>0,onClick:()=>p(r,n,j),className:"p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none",children:t.jsx(h,{id:"delete",Icon:A,title:a("Delete"),bgColor:"#EF4444"})})]})})};export{k as D,ee as E};
