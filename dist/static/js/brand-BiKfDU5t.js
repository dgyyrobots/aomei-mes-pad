/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as t}from"./index-D3S9e4gi.js";const a=r=>t.post({url:"/product/brand/create",data:r}),d=r=>t.put({url:"/product/brand/update",data:r}),n=r=>t.delete({url:`/product/brand/delete?id=${r}`}),u=r=>t.get({url:`/product/brand/get?id=${r}`}),s=r=>t.get({url:"/product/brand/page",params:r}),o=()=>t.get({url:"/product/brand/list-all-simple"});export{u as a,s as b,a as c,n as d,o as g,d as u};
