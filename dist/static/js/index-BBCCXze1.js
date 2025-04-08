/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{d as T,r as u,b as z,g as c,h as B,c as C,o as b,j as o,m as s,i as f,v as d,l as M,a as n,t as R,N as A,w as E,y as I,_ as L,F as U,aA as W,d4 as q,z as G}from"./index-D3eRVKjp.js";import{_ as H}from"./ContentWrap.vue_vue_type_script_setup_true_lang-Dg75KKir.js";/* empty css               */const K={class:"float-right mb-2"},P={key:0,ref:"editor"},Q={class:"hljs"},te=T({name:"InfraBuild",__name:"index",setup(X){const{t:_}=A(),v=G(),a=u(),r=u(!1),y=u(""),m=u(-1),i=u(""),g=t=>{r.value=!0,y.value=t},x=()=>{g("生成 JSON"),m.value=0,i.value=a.value.getRule()},S=()=>{g("生成 Options"),m.value=1,i.value=a.value.getOption()},k=()=>{g("生成组件"),m.value=2,i.value=w()},w=()=>{const t=a.value.getRule(),e=a.value.getOption();return`<template>
  <form-create
    v-model="fapi"
    :rule="rule"
    :option="option"
    @submit="onSubmit"
  ></form-create>
</template>
<script setup lang=ts>
  import formCreate from "@form-create/element-ui";
  const faps = ref(null)
  const rule = ref('')
  const option = ref('')
  const init = () => {
    rule.value = formCreate.parseJson('${W.toJson(t).replaceAll("\\","\\\\")}')
    option.value = formCreate.parseJson('${JSON.stringify(e)}')
  }
  const onSubmit = (formData) => {
    //todo 提交表单
  }
  init()
<\/script>`},N=async t=>{const{copy:e,copied:l,isSupported:p}=q({source:t});p?(await e(),n(l)&&v.success(_("common.copySuccess"))):v.error(_("common.copyError"))},O=t=>{let e="json";return m.value===2&&(e="xml"),isString(t)||(t=JSON.stringify(t)),hljs.highlight(e,t,!0).value||"&nbsp;"};return z(async()=>{hljs.registerLanguage("xml",xml),hljs.registerLanguage("json",json)}),(t,e)=>{const l=c("el-button"),p=c("el-col"),j=c("FcDesigner"),D=c("el-row"),J=H,V=c("el-scrollbar"),$=L,F=B("dompurify-html");return b(),C(U,null,[o(J,null,{default:s(()=>[o(D,null,{default:s(()=>[o(p,null,{default:s(()=>[f("div",K,[o(l,{size:"small",type:"primary",onClick:x},{default:s(()=>e[2]||(e[2]=[d("生成 JSON")])),_:1}),o(l,{size:"small",type:"success",onClick:S},{default:s(()=>e[3]||(e[3]=[d("生成 Options")])),_:1}),o(l,{size:"small",type:"danger",onClick:k},{default:s(()=>e[4]||(e[4]=[d("生成组件")])),_:1})])]),_:1}),o(p,null,{default:s(()=>[o(j,{ref_key:"designer",ref:a,height:"780px"},null,512)]),_:1})]),_:1})]),_:1}),o($,{modelValue:n(r),"onUpdate:modelValue":e[1]||(e[1]=h=>I(r)?r.value=h:null),"max-height":"600",title:n(y)},{default:s(()=>[n(r)?(b(),C("div",P,[o(l,{style:{float:"right"},onClick:e[0]||(e[0]=h=>N(n(i)))},{default:s(()=>[d(R(n(_)("common.copy")),1)]),_:1}),o(V,{height:"580"},{default:s(()=>[f("div",null,[f("pre",null,[E(f("code",Q,null,512),[[F,O(n(i))]])])])]),_:1})],512)):M("",!0)]),_:1},8,["modelValue","title"])],64)}}});export{te as default};
