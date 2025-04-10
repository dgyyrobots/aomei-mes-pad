/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{V as t}from"./index-D3S9e4gi.js";const a=async s=>await t.get({url:"/crm/business-status-type/page",params:s}),u=async s=>await t.get({url:`/crm/business-status-type/get?id=${s}`}),n=async s=>await t.post({url:"/crm/business-status-type/create",data:s}),r=async s=>await t.put({url:"/crm/business-status-type/update",data:s}),i=async s=>await t.delete({url:`/crm/business-status-type/delete?id=${s}`}),c=async s=>await t.download({url:"/crm/business-status-type/export-excel",params:s}),p=async()=>await t.get({url:"/crm/business-status-type/get-simple-list"}),y=async s=>await t.get({url:`/crm/business-status-type/get-status-list?typeId=${s}`});export{y as a,u as b,n as c,a as d,i as e,c as f,p as g,r as u};
