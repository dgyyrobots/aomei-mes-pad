/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as i}from"./index-5TqN_QR1.js";const a=async t=>await i.get({url:"/promotion/combination-activity/page",params:t}),n=async t=>await i.get({url:`/promotion/combination-activity/get?id=${t}`}),c=async t=>await i.post({url:"/promotion/combination-activity/create",data:t}),e=async t=>await i.put({url:"/promotion/combination-activity/update",data:t}),r=async t=>await i.put({url:`/promotion/combination-activity/close?id=${t}`}),s=async t=>await i.delete({url:`/promotion/combination-activity/delete?id=${t}`});export{a,r as b,c,s as d,n as g,e as u};
