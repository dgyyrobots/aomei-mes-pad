/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{V as t}from"./index-BdC40rFX.js";const a=async e=>await t.post({url:"/iqc/startBpm",data:e}),r=async e=>await t.get({url:"mes/qms/iqc/page",params:e}),n=async e=>await t.get({url:"mes/qms/iqc/get?id="+e}),c=async e=>await t.post({url:"/mes/qms/iqc/create",data:e}),i=async e=>await t.put({url:"/mes/qms/iqc/update",data:e}),u=async e=>await t.delete({url:"/mes/qms/iqc/delete?id="+e}),m=async e=>await t.download({url:"/mes/qms/iqc/export-excel",params:e}),l=async e=>await t.get({url:"/mes/qms/iqc-line/page",params:e}),q=async e=>await t.post({url:"/mes/qms/iqc-line/create",data:e}),o=async e=>await t.put({url:"/mes/qms/iqc-line/update",data:e}),d=async e=>await t.delete({url:"/mes/qms/iqc-line/delete?id="+e}),p=async e=>await t.get({url:"/mes/qms/iqc-line/get?id="+e});export{u as A,m as a,n as b,c,l as d,d as e,p as f,r as g,q as h,o as i,a as s,i as u};
