/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-11 15:04:23 
 */
import{V as e}from"./index-lcC3l4R2.js";const n=async s=>await e.get({url:"/bpm/process-instance/my-page",params:s}),r=async s=>await e.post({url:"/bpm/process-instance/create",data:s}),o=async(s,a)=>{const t={id:s,reason:a};return await e.delete({url:"/bpm/process-instance/cancel",data:t})},p=async s=>await e.get({url:`/bpm/process-instance/get?id=${s}`});export{o as a,n as b,r as c,p as g};
