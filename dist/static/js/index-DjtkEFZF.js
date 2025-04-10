/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
import{V as t}from"./index-DMg0mq0e.js";const a=async e=>await t.get({url:"/trade/delivery/pick-up-store/page",params:e}),i=async e=>await t.get({url:`/trade/delivery/pick-up-store/get?id=${e}`}),s=async()=>await t.get({url:"/trade/delivery/pick-up-store/list-all-simple"}),l=async e=>await t.post({url:"/trade/delivery/pick-up-store/create",data:e}),c=async e=>await t.put({url:"/trade/delivery/pick-up-store/update",data:e}),p=async e=>await t.delete({url:`/trade/delivery/pick-up-store/delete?id=${e}`});export{s as a,a as b,l as c,p as d,i as g,c as u};
