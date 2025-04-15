/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as t,x as e}from"./index-5TqN_QR1.js";const a=()=>t.get({url:"/statistics/member/summary"}),m=s=>t.get({url:"/statistics/member/analyse",params:{times:[e(s.times[0]),e(s.times[1])]}}),c=()=>t.get({url:"/statistics/member/area-statistics-list"}),n=()=>t.get({url:"/statistics/member/sex-statistics-list"}),u=()=>t.get({url:"/statistics/member/terminal-statistics-list"}),o=()=>t.get({url:"/statistics/member/user-count-comparison"}),g=(s,r)=>t.get({url:"/statistics/member/register-count-list",params:{times:[e(s),e(r)]}});export{o as a,u as b,m as c,a as d,c as e,n as f,g};
