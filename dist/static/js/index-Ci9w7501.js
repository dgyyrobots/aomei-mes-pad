/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as t}from"./index-5TqN_QR1.js";const r=async e=>await t.get({url:"/system/role/page",params:e}),a=async()=>await t.get({url:"/system/role/simple-list"}),l=async e=>await t.get({url:`/system/role/get?id=${e}`}),o=async e=>await t.post({url:"/system/role/create",data:e}),n=async e=>await t.put({url:"/system/role/update",data:e}),u=async e=>await t.delete({url:`/system/role/delete?id=${e}`}),c=e=>t.download({url:"/system/role/export-excel",params:e});export{l as a,r as b,o as c,u as d,c as e,a as g,n as u};
