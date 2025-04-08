/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as r}from"./index-C8VsLzxx.js";const a=async e=>await r.get({url:"/member/user/page",params:e}),s=async e=>await r.get({url:`/member/user/get?id=${e}`}),u=async e=>await r.put({url:"/member/user/update",data:e}),n=async e=>await r.put({url:"/member/user/update-level",data:e}),p=async e=>await r.put({url:"/member/user/update-point",data:e});export{n as a,p as b,a as c,s as g,u};
