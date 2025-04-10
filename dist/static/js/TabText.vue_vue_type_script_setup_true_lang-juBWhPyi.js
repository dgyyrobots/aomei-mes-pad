/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{d as m,O as r,g as d,k as c,o as i,a as _,y as V}from"./index-D3S9e4gi.js";const x=m({__name:"TabText",props:{modelValue:{}},emits:["update:modelValue","input"],setup(a,{emit:l}){const s=a,o=l,e=r({get:()=>s.modelValue,set:t=>{o("update:modelValue",t),o("input",t)}});return(t,n)=>{const p=d("el-input");return i(),c(p,{modelValue:_(e),"onUpdate:modelValue":n[0]||(n[0]=u=>V(e)?e.value=u:null),placeholder:"请输入内容",rows:5,type:"textarea"},null,8,["modelValue"])}}});export{x as _};
