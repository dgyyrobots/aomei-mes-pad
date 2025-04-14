/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import{V as s,aW as a}from"./index-BdmDrM2Y.js";const r=async e=>await s.get({url:"/system/notify-message/page",params:e}),y=async e=>await s.get({url:"/system/notify-message/my-page",params:e}),g=async e=>await s.put({url:`/system/notify-message/update-read?${a.stringify({ids:e},{indices:!1})}`}),n=async()=>await s.put({url:"/system/notify-message/update-all-read"});export{y as a,n as b,r as g,g as u};
