/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as e}from"./index-5TqN_QR1.js";const u=()=>e.get({url:"/system/user/profile/get"}),a=r=>e.put({url:"/system/user/profile/update",data:r}),o=(r,s)=>e.put({url:"/system/user/profile/update-password",data:{oldPassword:r,newPassword:s}}),p=r=>e.upload({url:"/system/user/profile/update-avatar",data:r});export{o as a,p as b,u as g,a as u};
