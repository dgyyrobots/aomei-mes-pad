/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as e}from"./index-C8VsLzxx.js";const a=async t=>await e.get({url:"/infra/demo03-student/page",params:t}),d=async t=>await e.get({url:`/infra/demo03-student/get?id=${t}`}),r=async t=>await e.post({url:"/infra/demo03-student/create",data:t}),s=async t=>await e.put({url:"/infra/demo03-student/update",data:t}),u=async t=>await e.delete({url:`/infra/demo03-student/delete?id=${t}`}),o=async t=>await e.download({url:"/infra/demo03-student/export-excel",params:t}),i=async t=>await e.get({url:`/infra/demo03-student/demo03-course/list-by-student-id?studentId=${t}`}),c=async t=>await e.get({url:`/infra/demo03-student/demo03-grade/get-by-student-id?studentId=${t}`});export{i as a,c as b,r as c,a as d,u as e,o as f,d as g,s as u};
