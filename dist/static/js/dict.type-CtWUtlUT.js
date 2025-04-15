/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const r=()=>e.get({url:"/system/dict-type/list-all-simple"}),p=t=>e.get({url:"/system/dict-type/page",params:t}),c=t=>e.get({url:`/system/dict-type/get?id=${t}`}),i=t=>e.post({url:"/system/dict-type/create",data:t}),y=t=>e.put({url:"/system/dict-type/update",data:t}),u=t=>e.delete({url:`/system/dict-type/delete?id=${t}`}),a=t=>e.download({url:"/system/dict-type/export",params:t});export{c as a,p as b,i as c,u as d,a as e,r as g,y as u};
