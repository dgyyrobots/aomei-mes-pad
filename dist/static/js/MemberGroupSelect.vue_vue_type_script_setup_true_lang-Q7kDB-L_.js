/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{g as b}from"./index-Bj6-H6xe.js";import{d as V,O as g,r as v,b as k,g as s,k as r,o,a as u,y as x,m as y,c as w,F as B,n as C}from"./index-C8VsLzxx.js";const M=V({name:"MemberGroupSelect",__name:"MemberGroupSelect",props:{modelValue:{type:Number,default:void 0}},emits:["update:modelValue"],setup(m,{emit:p}){const c=m,d=p,t=g({get(){return c.modelValue},set(a){d("update:modelValue",a)}}),l=v([]),i=async()=>{l.value=await b()};return k(()=>{i()}),(a,n)=>{const _=s("el-option"),f=s("el-select");return o(),r(f,{modelValue:u(t),"onUpdate:modelValue":n[0]||(n[0]=e=>x(t)?t.value=e:null),class:"!w-240px",clearable:"",placeholder:"请选择用户分组"},{default:y(()=>[(o(!0),w(B,null,C(u(l),e=>(o(),r(_,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])}}});export{M as _};
