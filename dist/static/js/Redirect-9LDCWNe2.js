/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{d as s,u as p,a as _,c as i,o as u}from"./index-D3eRVKjp.js";const h=s({name:"Redirect",__name:"Redirect",setup(d){const{currentRoute:n,replace:a}=p(),{params:e,query:c}=_(n),{path:r,_redirect_type:o="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const t=Array.isArray(r)?r.join("/"):r;return a(o==="name"?{name:t,query:c,params:e}:{path:t.startsWith("/")?t:`/${t}`,query:c}),(l,m)=>(u(),i("div"))}});export{h as default};
