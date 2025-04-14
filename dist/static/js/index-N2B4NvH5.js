/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import{V as r}from"./index-BdmDrM2Y.js";const a=async t=>await r.post({url:"/bpm/form/create",data:t}),s=async t=>await r.put({url:"/bpm/form/update",data:t}),m=async t=>await r.delete({url:`/bpm/form/delete?id=${t}`}),o=async t=>await r.get({url:`/bpm/form/get?id=${t}`}),n=async t=>await r.get({url:"/bpm/form/page",params:t}),u=async()=>await r.get({url:"/bpm/form/list-all-simple"});export{n as a,u as b,a as c,m as d,o as g,s as u};
