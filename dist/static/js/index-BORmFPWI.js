/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as a}from"./index-5TqN_QR1.js";const c=async t=>await a.get({url:"/system/mail-account/page",params:t}),s=async t=>await a.get({url:`/system/mail-account/get?id=${t}`}),n=async t=>await a.post({url:"/system/mail-account/create",data:t}),u=async t=>await a.put({url:"/system/mail-account/update",data:t}),i=async t=>await a.delete({url:`/system/mail-account/delete?id=${t}`}),l=async()=>a.get({url:"/system/mail-account/simple-list"});export{c as a,l as b,n as c,i as d,s as g,u};
