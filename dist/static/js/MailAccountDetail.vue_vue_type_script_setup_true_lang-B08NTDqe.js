/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{d as u,r as e,k as _,o as p,m as d,j as f,a as t,y as g,_ as v}from"./index-D3eRVKjp.js";import{_ as y}from"./Descriptions-DG2OQzIZ.js";import{a as V}from"./account.data-DVqxFIbI.js";import{g as h}from"./index-Dt5fVZl6.js";const w=u({name:"SystemMailAccountDetail",__name:"MailAccountDetail",setup(x,{expose:i}){const a=e(!1),o=e(!1),l=e();return i({open:async n=>{a.value=!0,o.value=!0;try{l.value=await h(n)}finally{o.value=!1}}}),(n,s)=>{const c=y,m=v;return p(),_(m,{modelValue:t(a),"onUpdate:modelValue":s[0]||(s[0]=r=>g(a)?a.value=r:null),title:"详情"},{default:d(()=>[f(c,{data:t(l),schema:t(V).detailSchema},null,8,["data","schema"])]),_:1},8,["modelValue"])}}});export{w as _};
