/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as r}from"./index-5TqN_QR1.js";const t=async e=>await r.get({url:"/trade/brokerage-user/page",params:e}),s=async e=>await r.get({url:`/trade/brokerage-user/get?id=${e}`}),u=async e=>await r.put({url:"/trade/brokerage-user/update-bind-user",data:e}),n=async e=>await r.put({url:"/trade/brokerage-user/clear-bind-user",data:e}),g=async e=>await r.put({url:"/trade/brokerage-user/update-brokerage-enable",data:e});export{s as a,g as b,n as c,t as g,u};
