/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 13:38:04 
 */
import{f as _}from"./index-Ut9bf_Ei.js";import{d as g,f as v,r as h,b as k,g as m,k as d,o as l,m as x,c as C,F as b,n as w,a as s}from"./index-FPuwcz_Y.js";const V=g({name:"WxAccountSelect",__name:"main",emits:["change"],setup(y,{emit:u}){const e=v({id:-1,name:""}),n=h([]),c=u,r=async()=>{n.value=await _(),n.value.length>0&&(e.id=n.value[0].id,e.id&&(e.name=n.value[0].name,c("change",e.id,e.name)))},p=i=>{const a=n.value.find(o=>o.id===i);e.id&&(e.name=a?a.name:"",c("change",e.id,e.name))};return k(()=>{r()}),(i,a)=>{const o=m("el-option"),f=m("el-select");return l(),d(f,{modelValue:s(e).id,"onUpdate:modelValue":a[0]||(a[0]=t=>s(e).id=t),class:"!w-240px",placeholder:"请选择公众号",onChange:p},{default:x(()=>[(l(!0),C(b,null,w(s(n),t=>(l(),d(o,{key:t.id,label:t.name,value:t.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});export{V as _};
