/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 10:14:51 
 */
import{V as n}from"./index-BuFigy1A.js";const t=e=>n.get({url:"/infra/config/page",params:e}),o=e=>n.get({url:`/infra/config/get?id=${e}`}),g=e=>n.get({url:`/infra/config/get-value-by-key?key=${e}`}),a=e=>n.post({url:"/infra/config/create",data:e}),i=e=>n.put({url:"/infra/config/update",data:e}),f=e=>n.delete({url:`/infra/config/delete?id=${e}`}),u=e=>n.download({url:"/infra/config/export",params:e});export{t as a,g as b,a as c,f as d,u as e,o as g,i as u};
