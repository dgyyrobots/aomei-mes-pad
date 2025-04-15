/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const a=async()=>await e.get({url:"/system/dept/simple-list"}),r=async t=>await e.get({url:"/system/dept/list",params:t}),p=async t=>await e.get({url:`/system/dept/get?id=${t}`}),n=async t=>await e.post({url:"/system/dept/create",data:t}),u=async t=>await e.put({url:"/system/dept/update",data:t}),c=async t=>await e.delete({url:`/system/dept/delete?id=${t}`});export{p as a,r as b,n as c,c as d,a as g,u};
