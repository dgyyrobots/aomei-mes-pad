/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as e}from"./index-D3S9e4gi.js";const a=async t=>await e.get({url:"/product/comment/page",params:t}),n=async t=>await e.get({url:`/product/comment/get?id=${t}`}),o=async t=>await e.post({url:"/product/comment/create",data:t}),c=async t=>await e.put({url:"/product/comment/update-visible",data:t}),m=async t=>await e.put({url:"/product/comment/reply",data:t});export{a,o as c,n as g,m as r,c as u};
