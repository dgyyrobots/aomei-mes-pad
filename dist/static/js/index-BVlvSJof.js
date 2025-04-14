/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import{V as t}from"./index-BdmDrM2Y.js";const r=e=>t.get({url:`/infra/codegen/table/list?dataSourceConfigId=${e}`}),a=e=>t.get({url:"/infra/codegen/table/page",params:e}),o=e=>t.get({url:`/infra/codegen/detail?tableId=${e}`}),d=e=>t.put({url:"/infra/codegen/update",data:e}),l=e=>t.put({url:`/infra/codegen/sync-from-db?tableId=${e}`}),g=e=>t.get({url:`/infra/codegen/preview?tableId=${e}`}),s=e=>t.download({url:`/infra/codegen/download?tableId=${e}`}),c=e=>t.get({url:"/infra/codegen/db/table/list",params:e}),u=e=>t.post({url:"/infra/codegen/create-list",data:e}),i=e=>t.delete({url:`/infra/codegen/delete?tableId=${e}`});export{r as a,c as b,u as c,a as d,i as e,s as f,o as g,g as p,l as s,d as u};
