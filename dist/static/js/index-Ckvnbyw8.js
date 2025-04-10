/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as t}from"./index-D3S9e4gi.js";const a=async e=>await t.get({url:"/trade/delivery/express-template/page",params:e}),s=async e=>await t.get({url:`/trade/delivery/express-template/get?id=${e}`}),l=async()=>await t.get({url:"/trade/delivery/express-template/list-all-simple"}),p=async e=>await t.post({url:"/trade/delivery/express-template/create",data:e}),i=async e=>await t.put({url:"/trade/delivery/express-template/update",data:e}),d=async e=>await t.delete({url:`/trade/delivery/express-template/delete?id=${e}`});export{s as a,a as b,p as c,d,l as g,i as u};
