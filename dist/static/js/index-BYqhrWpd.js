/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 14:15:15 
 */
import{V as t}from"./index-D3eRVKjp.js";const a=async e=>await t.get({url:"/member/level/list",params:e}),r=async e=>await t.get({url:`/member/level/get?id=${e}`}),s=async()=>await t.get({url:"/member/level/list-all-simple"}),n=async e=>await t.post({url:"/member/level/create",data:e}),u=async e=>await t.put({url:"/member/level/update",data:e}),m=async e=>await t.delete({url:`/member/level/delete?id=${e}`});export{s as a,a as b,n as c,m as d,r as g,u};
