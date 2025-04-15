/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{i}from"./color-B5phLuB-.js";import{d as c}from"./dict-D4wjFrBa.js";import{d as p,W as f,O as m,r as v,j as d,aS as y}from"./index-BdC40rFX.js";const D=p({name:"DictTag",props:{type:{type:String,required:!0},value:{type:[String,Number,Boolean],required:!0}},setup(t){const a=f(),s=m(()=>a.currentSize==="mini"?"small":a.currentSize),e=v(),l=(u,n)=>{c(u).forEach(r=>{r.value===n&&((`${r.colorType}`=="primary"||`${r.colorType}`=="default")&&(r.colorType=""),e.value=r)})},o=()=>!t.type||t.value===void 0||t.value===null?null:(l(t.type,t.value.toString()),d(y,{style:e.value?.cssClass?"color: #fff":"",type:e.value?.colorType,color:e.value?.cssClass&&i(e.value?.cssClass)?e.value?.cssClass:"",disableTransitions:!0,size:s.value},{default:()=>[e.value?.label]}));return()=>o()}});export{D as _};
