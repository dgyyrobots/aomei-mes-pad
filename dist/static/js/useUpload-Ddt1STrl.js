/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{z as g}from"./index-5TqN_QR1.js";const s=g();var t=(e=>(e.Image="image",e.Voice="voice",e.Video="video",e))(t||{});const n=(e,a)=>o=>{let i=[],r="";switch(e){case"image":i=["image/jpeg","image/png","image/gif","image/bmp","image/jpg"],a=2,r="图片";break;case"voice":i=["audio/mp3","audio/mpeg","audio/wma","audio/wav","audio/amr"],a=2,r="语音";break;case"video":i=["video/mp4"],a=10,r="视频";break}return i.includes(o.type)?o.size/1024/1024>a?(s.error(`上传${r}大小不能超过${a}M!`),!1):!0:(s.error(`上传${r}格式不对!`),!1)};export{t as U,n as u};
