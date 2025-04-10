/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as e}from"./index-D3S9e4gi.js";const r=t=>e.post({url:"/mp/tag/create",data:t}),s=t=>e.put({url:"/mp/tag/update",data:t}),g=t=>e.delete({url:`/mp/tag/delete?id=${t}`}),u=t=>e.get({url:`/mp/tag/get?id=${t}`}),p=t=>e.get({url:"/mp/tag/page",params:t}),n=()=>e.get({url:"/mp/tag/list-all-simple"}),l=t=>e.post({url:`/mp/tag/sync?accountId=${t}`});export{p as a,n as b,r as c,g as d,u as g,l as s,s as u};
