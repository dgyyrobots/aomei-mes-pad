/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{V as r}from"./index-BdC40rFX.js";const a=async e=>await r.get({url:"/member/user/page",params:e}),s=async e=>await r.get({url:`/member/user/get?id=${e}`}),u=async e=>await r.put({url:"/member/user/update",data:e}),n=async e=>await r.put({url:"/member/user/update-level",data:e}),p=async e=>await r.put({url:"/member/user/update-point",data:e});export{n as a,p as b,a as c,s as g,u};
