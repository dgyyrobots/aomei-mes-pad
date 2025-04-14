/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import{V as e}from"./index-BdmDrM2Y.js";const r=async s=>await e.get({url:`/system/permission/list-role-menus?roleId=${s}`}),a=async s=>await e.post({url:"/system/permission/assign-role-menu",data:s}),n=async s=>await e.post({url:"/system/permission/assign-role-data-scope",data:s}),o=async s=>await e.get({url:`/system/permission/list-user-roles?userId=${s}`}),i=async s=>await e.post({url:"/system/permission/assign-user-role",data:s});export{a,n as b,o as c,i as d,r as g};
