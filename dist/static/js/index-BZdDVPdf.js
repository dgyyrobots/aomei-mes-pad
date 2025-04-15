/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{P as c}from"./color-B5phLuB-.js";import{d as i,aA as V,O as f,g as a,k,o as x,a as l,y as p,m as C,j as g,A as v}from"./index-BdC40rFX.js";const E=i({name:"ColorInput",__name:"index",props:{modelValue:V.string.def("")},emits:["update:modelValue"],setup(s,{emit:r}){const u=s,m=r,e=f({get:()=>u.modelValue,set:t=>{m("update:modelValue",t)}});return(t,o)=>{const d=a("el-color-picker"),_=a("el-input");return x(),k(_,{modelValue:l(e),"onUpdate:modelValue":o[1]||(o[1]=n=>p(e)?e.value=n:null)},{prepend:C(()=>[g(d,{modelValue:l(e),"onUpdate:modelValue":o[0]||(o[0]=n=>p(e)?e.value=n:null),predefine:l(c)},null,8,["modelValue","predefine"])]),_:1},8,["modelValue"])}}}),R=v(E,[["__scopeId","data-v-31aa09eb"]]);export{R as _};
