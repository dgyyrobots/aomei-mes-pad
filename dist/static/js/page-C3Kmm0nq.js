/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 10:14:51 
 */
import{V as t}from"./index-BuFigy1A.js";const r=async e=>await t.get({url:"/promotion/diy-page/page",params:e}),o=async e=>await t.get({url:`/promotion/diy-page/get?id=${e}`}),i=async e=>await t.post({url:"/promotion/diy-page/create",data:e}),p=async e=>await t.put({url:"/promotion/diy-page/update",data:e}),n=async e=>await t.delete({url:`/promotion/diy-page/delete?id=${e}`}),g=async e=>await t.get({url:`/promotion/diy-page/get-property?id=${e}`}),y=async e=>await t.put({url:"/promotion/diy-page/update-property",data:e});export{o as a,p as b,i as c,r as d,n as e,g,y as u};
