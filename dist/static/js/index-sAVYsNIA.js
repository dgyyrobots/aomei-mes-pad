/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const n=t=>e.get({url:"/infra/job/page",params:t}),u=t=>e.get({url:`/infra/job/get?id=${t}`}),s=t=>e.post({url:"/infra/job/create",data:t}),b=t=>e.put({url:"/infra/job/update",data:t}),i=t=>e.delete({url:`/infra/job/delete?id=${t}`}),c=t=>e.download({url:"/infra/job/export-excel",params:t}),d=(t,r)=>{const o={id:t,status:r};return e.put({url:"/infra/job/update-status",params:o})},l=t=>e.put({url:`/infra/job/trigger?id=${t}`}),p=t=>e.get({url:`/infra/job/get_next_times?id=${t}`});export{p as a,n as b,s as c,d,c as e,i as f,u as g,l as r,b as u};
