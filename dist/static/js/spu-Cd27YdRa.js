/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:10:14 
 */
import{V as u}from"./index-BdC40rFX.js";const r=t=>u.get({url:"/product/spu/page",params:t}),s=()=>u.get({url:"/product/spu/get-count"}),p=t=>u.post({url:"/product/spu/create",data:t}),a=t=>u.put({url:"/product/spu/update",data:t}),o=t=>u.put({url:"/product/spu/update-status",data:t}),c=t=>u.get({url:`/product/spu/get-detail?id=${t}`}),n=t=>u.get({url:`/product/spu/list?spuIds=${t}`}),d=t=>u.delete({url:`/product/spu/delete?id=${t}`}),l=async t=>await u.download({url:"/product/spu/export",params:t}),g=async()=>u.get({url:"/product/spu/list-all-simple"});export{s as a,n as b,p as c,r as d,o as e,d as f,c as g,l as h,g as i,a as u};
