/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as i}from"./index-C8VsLzxx.js";const c=async t=>await i.get({url:"/promotion/seckill-activity/page",params:t}),a=async t=>await i.get({url:`/promotion/seckill-activity/get?id=${t}`}),l=async t=>await i.post({url:"/promotion/seckill-activity/create",data:t}),o=async t=>await i.put({url:"/promotion/seckill-activity/update",data:t}),r=async t=>await i.put({url:`/promotion/seckill-activity/close?id=${t}`}),s=async t=>await i.delete({url:`/promotion/seckill-activity/delete?id=${t}`});export{c as a,r as b,l as c,s as d,a as g,o as u};
