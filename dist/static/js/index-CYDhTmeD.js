/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as s}from"./index-5TqN_QR1.js";const n=e=>s.get({url:"/system/sms-channel/page",params:e});function a(){return s.get({url:"/system/sms-channel/simple-list"})}const l=e=>s.get({url:`/system/sms-channel/get?id=${e}`}),r=e=>s.post({url:"/system/sms-channel/create",data:e}),m=e=>s.put({url:"/system/sms-channel/update",data:e}),u=e=>s.delete({url:`/system/sms-channel/delete?id=${e}`});export{n as a,a as b,r as c,u as d,l as g,m as u};
