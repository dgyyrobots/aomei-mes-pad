/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
import{V as r}from"./index-DMg0mq0e.js";const t=async e=>await r.get({url:"/trade/delivery/express/page",params:e}),a=async e=>await r.get({url:`/trade/delivery/express/get?id=${e}`}),l=()=>r.get({url:"/trade/delivery/express/list-all-simple"}),i=async e=>await r.post({url:"/trade/delivery/express/create",data:e}),p=async e=>await r.put({url:"/trade/delivery/express/update",data:e}),d=async e=>await r.delete({url:`/trade/delivery/express/delete?id=${e}`}),n=async e=>await r.download({url:"/trade/delivery/express/export-excel",params:e});export{a,t as b,i as c,d,n as e,l as g,p as u};
