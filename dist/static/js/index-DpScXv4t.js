/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 10:14:51 
 */
import{V as r}from"./index-BuFigy1A.js";const t=async a=>await r.post({url:"/pay/transfer/create",data:a}),s=async a=>await r.get({url:"/pay/transfer/page",params:a}),n=async a=>await r.get({url:`/pay/transfer/get?id=${a}`});export{s as a,t as c,n as g};
