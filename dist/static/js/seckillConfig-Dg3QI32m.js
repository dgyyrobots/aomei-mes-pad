/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const n=async t=>await e.get({url:"/promotion/seckill-config/page",params:t}),a=async t=>await e.get({url:`/promotion/seckill-config/get?id=${t}`}),c=async()=>await e.get({url:"/promotion/seckill-config/list-all-simple"}),s=async t=>await e.post({url:"/promotion/seckill-config/create",data:t}),r=async t=>await e.put({url:"/promotion/seckill-config/update",data:t}),g=(t,i)=>{const o={id:t,status:i};return e.put({url:"/promotion/seckill-config/update-status",data:o})},u=async t=>await e.delete({url:`/promotion/seckill-config/delete?id=${t}`});export{a,g as b,s as c,u as d,n as e,c as g,r as u};
