/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 13:38:04 
 */
import{V as r}from"./index-FPuwcz_Y.js";const t=async a=>await r.post({url:"/pay/transfer/create",data:a}),s=async a=>await r.get({url:"/pay/transfer/page",params:a}),n=async a=>await r.get({url:`/pay/transfer/get?id=${a}`});export{s as a,t as c,n as g};
