/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as t,aW as s}from"./index-5TqN_QR1.js";const i=e=>t.get({url:"/system/sensitive-word/page",params:e}),n=e=>t.get({url:`/system/sensitive-word/get?id=${e}`}),o=e=>t.post({url:"/system/sensitive-word/create",data:e}),a=e=>t.put({url:"/system/sensitive-word/update",data:e}),d=e=>t.delete({url:`/system/sensitive-word/delete?id=${e}`}),u=e=>t.download({url:"/system/sensitive-word/export-excel",params:e}),v=()=>t.get({url:"/system/sensitive-word/get-tags"}),g=e=>t.get({url:`/system/sensitive-word/validate-text?${s.stringify(e,{arrayFormat:"repeat"})}`});export{v as a,i as b,o as c,d,u as e,n as g,a as u,g as v};
