import{j as e,d as p}from"./index-CU2_kOLs.js";const v=({name:r,label:s,type:t,disabled:o,register:u,required:l,maxValue:a,minValue:d,currency:m,product:n,defaultValue:i,placeholder:x})=>{const g={valueAsNumber:!0,required:l?`${s} is required!`:!1,max:{value:a,message:`Maximum value ${a}!`},min:{value:d,message:`Minimum value ${d}!`},pattern:{value:/^[0-9]*$/,message:`Invalid ${s}!`}};return e.jsx(e.Fragment,{children:e.jsxs("div",{className:"flex flex-row",children:[n&&e.jsx("span",{className:"inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600",children:m}),e.jsx(p.Input,{...u(`${r}`,g),type:t,name:r,step:.01,disabled:o,placeholder:x,defaultValue:i,className:`mr-2 p-2 ${n&&"rounded-l-none"}`})]})})};export{v as I};
