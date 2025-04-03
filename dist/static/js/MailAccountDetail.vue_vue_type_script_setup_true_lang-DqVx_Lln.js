/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 10:14:51 
 */
import{d as u,r as e,k as _,o as p,m as d,j as f,a as t,y as g,_ as v}from"./index-BuFigy1A.js";import{_ as y}from"./Descriptions-DMpfUzDy.js";import{a as V}from"./account.data-_PLTxypF.js";import{g as h}from"./index-BFQ3WkhG.js";const w=u({name:"SystemMailAccountDetail",__name:"MailAccountDetail",setup(x,{expose:i}){const a=e(!1),o=e(!1),l=e();return i({open:async n=>{a.value=!0,o.value=!0;try{l.value=await h(n)}finally{o.value=!1}}}),(n,s)=>{const c=y,m=v;return p(),_(m,{modelValue:t(a),"onUpdate:modelValue":s[0]||(s[0]=r=>g(a)?a.value=r:null),title:"详情"},{default:d(()=>[f(c,{data:t(l),schema:t(V).detailSchema},null,8,["data","schema"])]),_:1},8,["modelValue"])}}});export{w as _};
