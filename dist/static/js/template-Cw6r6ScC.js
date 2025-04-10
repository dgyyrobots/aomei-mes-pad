/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
import{V as e}from"./index-DMg0mq0e.js";const r=async t=>await e.get({url:"/promotion/diy-template/page",params:t}),p=async t=>await e.get({url:`/promotion/diy-template/get?id=${t}`}),o=async t=>await e.post({url:"/promotion/diy-template/create",data:t}),i=async t=>await e.put({url:"/promotion/diy-template/update",data:t}),n=async t=>await e.delete({url:`/promotion/diy-template/delete?id=${t}`}),s=async t=>await e.put({url:`/promotion/diy-template/use?id=${t}`}),y=async t=>await e.get({url:`/promotion/diy-template/get-property?id=${t}`}),l=async t=>await e.put({url:"/promotion/diy-template/update-property",data:t});export{p as a,i as b,o as c,r as d,n as e,s as f,y as g,l as u};
