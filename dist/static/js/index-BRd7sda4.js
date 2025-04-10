/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as c}from"./index-D3S9e4gi.js";const a=async t=>await c.post({url:"/mp/account/create",data:t}),n=async t=>c.put({url:"/mp/account/update",data:t}),u=async t=>c.delete({url:`/mp/account/delete?id=${t}`,method:"delete"}),r=async t=>c.get({url:`/mp/account/get?id=${t}`}),o=async t=>c.get({url:"/mp/account/page",params:t}),s=async()=>c.get({url:"/mp/account/list-all-simple"}),p=async t=>c.put({url:`/mp/account/generate-qr-code?id=${t}`}),l=async t=>c.put({url:`/mp/account/clear-quota?id=${t}`});export{o as a,p as b,a as c,u as d,l as e,s as f,r as g,n as u};
