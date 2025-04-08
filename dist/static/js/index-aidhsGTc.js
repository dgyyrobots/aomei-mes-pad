/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 13:49:10 
 */
import{V as e}from"./index-BW9ifGp0.js";const s=async r=>await e.post({url:"/bpm/user-group/create",data:r}),u=async r=>await e.put({url:"/bpm/user-group/update",data:r}),a=async r=>await e.delete({url:`/bpm/user-group/delete?id=${r}`}),p=async r=>await e.get({url:`/bpm/user-group/get?id=${r}`}),o=async r=>await e.get({url:"/bpm/user-group/page",params:r}),n=async()=>await e.get({url:"/bpm/user-group/list-all-simple"});export{p as a,o as b,s as c,a as d,n as g,u};
