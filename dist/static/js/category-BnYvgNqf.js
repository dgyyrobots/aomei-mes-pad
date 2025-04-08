/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as e}from"./index-C8VsLzxx.js";const o=t=>e.post({url:"/product/category/create",data:t}),a=t=>e.put({url:"/product/category/update",data:t}),u=t=>e.delete({url:`/product/category/delete?id=${t}`}),c=t=>e.get({url:`/product/category/get?id=${t}`}),g=t=>e.get({url:"/product/category/list",params:t});export{c as a,o as c,u as d,g,a as u};
