/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as e}from"./index-D3S9e4gi.js";const a=async t=>await e.get({url:"/promotion/article-category/page",params:t}),o=async()=>await e.get({url:"/promotion/article-category/list-all-simple"}),c=async t=>await e.get({url:`/promotion/article-category/get?id=${t}`}),i=async t=>await e.post({url:"/promotion/article-category/create",data:t}),l=async t=>await e.put({url:"/promotion/article-category/update",data:t}),n=async t=>await e.delete({url:`/promotion/article-category/delete?id=${t}`});export{c as a,a as b,i as c,n as d,o as g,l as u};
