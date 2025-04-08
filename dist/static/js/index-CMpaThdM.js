/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{V as e}from"./index-D3eRVKjp.js";const s=async t=>await e.get({url:"/system/notify-template/page",params:t}),n=async t=>await e.get({url:`/system/notify-template/get?id=${t}`}),o=async t=>await e.post({url:"/system/notify-template/create",data:t}),r=async t=>await e.put({url:"/system/notify-template/update",data:t}),y=async t=>await e.delete({url:`/system/notify-template/delete?id=${t}`}),i=t=>e.post({url:"/system/notify-template/send-notify",data:t});export{s as a,o as c,y as d,n as g,i as s,r as u};
