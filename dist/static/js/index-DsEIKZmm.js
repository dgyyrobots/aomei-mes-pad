/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
import{V as s}from"./index-DMg0mq0e.js";const a=e=>s.get({url:"/system/user/page",params:e}),n=()=>s.get({url:"/system/user/all"}),o=e=>s.get({url:`/system/user/get?id=${e}`}),l=e=>s.post({url:"/system/user/create",data:e}),p=e=>s.put({url:"/system/user/update",data:e}),d=e=>s.delete({url:`/system/user/delete?id=${e}`}),m=e=>s.download({url:"/system/user/export",params:e}),c=()=>s.download({url:"/system/user/get-import-template"}),g=(e,t)=>{const r={id:e,password:t};return s.put({url:"/system/user/update-password",data:r})},y=(e,t)=>{const r={id:e,status:t};return s.put({url:"/system/user/update-status",data:r})},U=()=>s.get({url:"/system/user/simple-list"});export{n as a,o as b,l as c,a as d,y as e,m as f,U as g,d as h,c as i,g as r,p as u};
