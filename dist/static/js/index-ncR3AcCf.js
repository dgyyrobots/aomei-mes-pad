/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 13:38:04 
 */
import{V as e}from"./index-FPuwcz_Y.js";const a=async r=>await e.get({url:"/pay/order/page",params:r}),s=async r=>await e.get({url:`/pay/order/get?id=${r}`}),o=async r=>await e.get({url:`/pay/order/get-detail?id=${r}`}),n=async r=>await e.post({url:"/pay/order/submit",data:r}),d=async r=>await e.download({url:"/pay/order/export-excel",params:r});export{o as a,a as b,d as e,s as g,n as s};
