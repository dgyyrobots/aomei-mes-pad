/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-03 13:38:04 
 */
import{V as r}from"./index-FPuwcz_Y.js";var a=(t=>(t[t.CRM_LEADS=1]="CRM_LEADS",t[t.CRM_CUSTOMER=2]="CRM_CUSTOMER",t[t.CRM_CONTACT=3]="CRM_CONTACT",t[t.CRM_BUSINESS=5]="CRM_BUSINESS",t[t.CRM_CONTRACT=6]="CRM_CONTRACT",t))(a||{}),s=(t=>(t[t.OWNER=1]="OWNER",t[t.READ=2]="READ",t[t.WRITE=3]="WRITE",t))(s||{});const C=async t=>await r.get({url:"/crm/permission/list",params:t}),R=async t=>await r.post({url:"/crm/permission/create",data:t}),c=async t=>await r.put({url:"/crm/permission/update",data:t}),o=async t=>await r.delete({url:"/crm/permission/delete",params:t}),M=async t=>await r.delete({url:`/crm/permission/quit-team?id=${t}`});export{a as B,s as P,M as a,R as c,o as d,C as g,c as u};
