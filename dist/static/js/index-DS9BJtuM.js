/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const r=async s=>await e.get({url:`/system/permission/list-role-menus?roleId=${s}`}),a=async s=>await e.post({url:"/system/permission/assign-role-menu",data:s}),n=async s=>await e.post({url:"/system/permission/assign-role-data-scope",data:s}),o=async s=>await e.get({url:`/system/permission/list-user-roles?userId=${s}`}),i=async s=>await e.post({url:"/system/permission/assign-user-role",data:s});export{a,n as b,o as c,i as d,r as g};
