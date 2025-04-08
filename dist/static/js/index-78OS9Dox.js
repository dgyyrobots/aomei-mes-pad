/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as a}from"./index-C8VsLzxx.js";const s=(e,n)=>{const t={appId:e,code:n};return a.get({url:"/pay/channel/get",params:t})},u=e=>a.post({url:"/pay/channel/create",data:e}),c=e=>a.put({url:"/pay/channel/update",data:e});export{u as c,s as g,c as u};
