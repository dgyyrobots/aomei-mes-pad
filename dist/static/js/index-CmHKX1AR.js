/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as t}from"./index-C8VsLzxx.js";const r=async e=>await t.get({url:"/bpm/model/page",params:e}),s=async e=>await t.get({url:`/bpm/model/get?id=${e}`}),l=async e=>await t.put({url:"/bpm/model/update",data:e}),n=async(e,a)=>{const o={id:e,state:a};return await t.put({url:"/bpm/model/update-state",data:o})},u=async e=>await t.post({url:"/bpm/model/create",data:e}),p=async e=>await t.delete({url:`/bpm/model/delete?id=${e}`}),c=async e=>await t.post({url:`/bpm/model/deploy?id=${e}`});export{r as a,n as b,u as c,p as d,c as e,s as g,l as u};
