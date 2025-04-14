/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import{V as r}from"./index-BdmDrM2Y.js";const a=async t=>await r.get({url:`/crm/product-category/get?id=${t}`}),c=async t=>await r.post({url:"/crm/product-category/create",data:t}),o=async t=>await r.put({url:"/crm/product-category/update",data:t}),u=async t=>await r.delete({url:`/crm/product-category/delete?id=${t}`}),s=async t=>await r.get({url:"/crm/product-category/list",params:t});export{a,c,u as d,s as g,o as u};
