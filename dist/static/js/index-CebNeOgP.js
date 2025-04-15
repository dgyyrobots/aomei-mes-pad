/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as t}from"./index-5TqN_QR1.js";const m=e=>t.get({url:"/system/sms-template/page",params:e}),a=e=>t.get({url:`/system/sms-template/get?id=${e}`}),r=e=>t.post({url:"/system/sms-template/create",data:e}),l=e=>t.put({url:"/system/sms-template/update",data:e}),p=e=>t.delete({url:`/system/sms-template/delete?id=${e}`}),u=e=>t.download({url:"/system/sms-template/export-excel",params:e}),n=e=>t.post({url:"/system/sms-template/send-sms",data:e});export{m as a,r as c,p as d,u as e,a as g,n as s,l as u};
