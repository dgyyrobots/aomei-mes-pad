/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as e}from"./index-C8VsLzxx.js";const r=t=>e.post({url:"/infra/data-source-config/create",data:t}),o=t=>e.put({url:"/infra/data-source-config/update",data:t}),n=t=>e.delete({url:`/infra/data-source-config/delete?id=${t}`}),u=t=>e.get({url:`/infra/data-source-config/get?id=${t}`}),c=()=>e.get({url:"/infra/data-source-config/list"});export{u as a,r as c,n as d,c as g,o as u};
