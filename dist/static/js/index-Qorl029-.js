/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{V as t}from"./index-BdC40rFX.js";const s=async e=>await t.get({url:"/system/mail-template/page",params:e}),l=async e=>await t.get({url:`/system/mail-template/get?id=${e}`}),m=async e=>await t.post({url:"/system/mail-template/create",data:e}),r=async e=>await t.put({url:"/system/mail-template/update",data:e}),i=async e=>await t.delete({url:`/system/mail-template/delete?id=${e}`}),n=e=>t.post({url:"/system/mail-template/send-mail",data:e});export{s as a,m as c,i as d,l as g,n as s,r as u};
