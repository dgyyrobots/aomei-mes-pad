/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{V as s}from"./index-D3eRVKjp.js";const a=async t=>await s.get({url:"/system/post/page",params:t}),o=async()=>await s.get({url:"/system/post/simple-list"}),r=async t=>await s.get({url:`/system/post/get?id=${t}`}),n=async t=>await s.post({url:"/system/post/create",data:t}),u=async t=>await s.put({url:"/system/post/update",data:t}),p=async t=>await s.delete({url:`/system/post/delete?id=${t}`}),c=async t=>await s.download({url:"/system/post/export",params:t});export{r as a,a as b,n as c,p as d,c as e,o as g,u};
