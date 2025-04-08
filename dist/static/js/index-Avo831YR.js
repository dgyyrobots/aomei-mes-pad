/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as t}from"./index-C8VsLzxx.js";const s=async e=>await t.get({url:"/mes/qms/template/page",params:e}),m=async e=>await t.get({url:"/mes/qms/template/get?id="+e}),l=async e=>await t.post({url:"/mes/qms/template/create",data:e}),p=async e=>await t.put({url:"/mes/qms/template/update",data:e}),r=async e=>await t.delete({url:"/mes/qms/template/delete?id="+e}),n=async e=>await t.download({url:"/mes/qms/template/export-excel",params:e}),c=async e=>await t.get({url:"/qmcbasic/template/template-index/list-by-template-id?templateId="+e}),u=async e=>await t.get({url:"/qmcbasic/template/template-product/list-by-template-id?templateId="+e});export{c as a,u as b,m as c,r as d,l as e,n as f,s as g,p as u};
