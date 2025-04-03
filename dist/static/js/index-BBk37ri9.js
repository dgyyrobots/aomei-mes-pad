/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 10:14:51 
 */
import{V as e}from"./index-BuFigy1A.js";const a=async t=>await e.get({url:"/promotion/article/page",params:t}),o=async t=>await e.get({url:`/promotion/article/get?id=${t}`}),c=async t=>await e.post({url:"/promotion/article/create",data:t}),i=async t=>await e.put({url:"/promotion/article/update",data:t}),n=async t=>await e.delete({url:`/promotion/article/delete?id=${t}`});export{a,c,n as d,o as g,i as u};
