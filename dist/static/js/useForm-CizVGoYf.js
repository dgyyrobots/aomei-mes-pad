/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{r as c,X as f,a as i}from"./index-D3eRVKjp.js";const u=s=>{const a=c(),r=c(),n=(e,t)=>{a.value=e,r.value=t},o=async()=>{await f();const e=i(a);return e||console.error("The form is not registered. Please use the register method to register"),e},m={setProps:async(e={})=>{const t=await o();t?.setProps(e),e.model&&t?.setValues(e.model)},setValues:async e=>{(await o())?.setValues(e)},setSchema:async e=>{(await o())?.setSchema(e)},addSchema:async(e,t)=>{(await o())?.addSchema(e,t)},delSchema:async e=>{(await o())?.delSchema(e)},getFormData:async()=>(await o())?.formModel};return s&&m.setProps(s),{register:n,elFormRef:r,methods:m}};export{u};
