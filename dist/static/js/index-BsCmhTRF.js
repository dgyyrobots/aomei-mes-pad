/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as a}from"./index-5TqN_QR1.js";const t=async e=>await a.get({url:"/qmcbasic/qms-index/page",params:e}),n=async e=>await a.get({url:"/qmcbasic/qms-index/get?id="+e}),c=async e=>await a.post({url:"/qmcbasic/qms-index/create",data:e}),r=async e=>await a.put({url:"/qmcbasic/qms-index/update",data:e}),d=async e=>await a.delete({url:"/qmcbasic/qms-index/delete?id="+e}),i=async e=>await a.download({url:"/qmcbasic/qms-index/export-excel",params:e});export{n as a,c,d,i as e,t as g,r as u};
