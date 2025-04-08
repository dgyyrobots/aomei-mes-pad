/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as e}from"./index-C8VsLzxx.js";const p=r=>e.post({url:"/product/property/create",data:r}),u=r=>e.put({url:"/product/property/update",data:r}),o=r=>e.delete({url:`/product/property/delete?id=${r}`}),a=r=>e.get({url:`/product/property/get?id=${r}`}),s=r=>e.get({url:"/product/property/page",params:r}),l=r=>e.get({url:"/product/property/list",params:r}),c=r=>e.post({url:"/product/property/get-value-list",data:r}),d=r=>e.get({url:"/product/property/value/page",params:r}),n=r=>e.get({url:`/product/property/value/get?id=${r}`}),y=r=>e.post({url:"/product/property/value/create",data:r}),g=r=>e.put({url:"/product/property/value/update",data:r}),P=r=>e.delete({url:`/product/property/value/delete?id=${r}`});export{p as a,l as b,y as c,d,P as e,n as f,c as g,a as h,u as i,s as j,o as k,g as u};
