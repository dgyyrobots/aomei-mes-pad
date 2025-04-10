/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:05:55 
 */
import{d as s,g as p,c as r,o,k as t,q as a,A as n}from"./index-D3S9e4gi.js";const c=["autoplay","poster","src"],y=s({name:"VideoPlayer",__name:"index",props:{property:{}},setup(i){return(e,u)=>{const l=p("el-image");return o(),r("div",{class:"w-full",style:a({height:`${e.property.style.height}px`})},[e.property.posterUrl?(o(),t(l,{key:0,class:"w-full w-full",src:e.property.posterUrl},null,8,["src"])):(o(),r("video",{key:1,autoplay:e.property.autoplay,class:"w-full w-full",controls:"",poster:e.property.posterUrl,src:e.property.videoUrl},null,8,c))],4)}}}),m=n(y,[["__scopeId","data-v-53589e0b"]]);export{m as default};
