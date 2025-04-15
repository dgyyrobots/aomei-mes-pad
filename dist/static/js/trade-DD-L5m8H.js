/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{V as r,x as s}from"./index-5TqN_QR1.js";const o=()=>r.get({url:"/statistics/trade/summary"}),c=t=>r.get({url:"/statistics/trade/trend/summary",params:e(t)}),d=t=>r.get({url:"/statistics/trade/list",params:e(t)}),m=t=>r.download({url:"/statistics/trade/export-excel",params:e(t)}),u=async()=>await r.get({url:"/statistics/trade/order-count"}),g=async()=>await r.get({url:"/statistics/trade/order-comparison"}),l=(t,a,i)=>r.get({url:"/statistics/trade/order-count-trend",params:{type:t,beginTime:s(a),endTime:s(i)}}),e=t=>({times:[s(t.times[0]),s(t.times[1])]});export{l as a,g as b,o as c,c as d,d as e,m as f,u as g};
