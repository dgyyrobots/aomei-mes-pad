/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-11 15:04:23 
 */
import{V as r}from"./index-lcC3l4R2.js";const a=async e=>await r.get({url:"/member/group/page",params:e}),u=async e=>await r.get({url:`/member/group/get?id=${e}`}),s=async e=>await r.post({url:"/member/group/create",data:e}),o=async()=>await r.get({url:"/member/group/list-all-simple"}),p=async e=>await r.put({url:"/member/group/update",data:e}),n=async e=>await r.delete({url:`/member/group/delete?id=${e}`});export{u as a,a as b,s as c,n as d,o as g,p as u};
