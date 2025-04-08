/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 13:49:10 
 */
import{V as s,aV as a}from"./index-BW9ifGp0.js";const r=async e=>await s.get({url:"/system/notify-message/page",params:e}),y=async e=>await s.get({url:"/system/notify-message/my-page",params:e}),g=async e=>await s.put({url:`/system/notify-message/update-read?${a.stringify({ids:e},{indices:!1})}`}),n=async()=>await s.put({url:"/system/notify-message/update-all-read"});export{y as a,n as b,r as g,g as u};
