/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{V as a}from"./index-C8VsLzxx.js";const t=async e=>await a.get({url:"/trade/after-sale/page",params:e}),s=async e=>await a.get({url:`/trade/after-sale/get-detail?id=${e}`}),u=async e=>await a.put({url:`/trade/after-sale/agree?id=${e}`}),n=async e=>await a.put({url:"/trade/after-sale/disagree",data:e}),d=async e=>await a.put({url:`/trade/after-sale/receive?id=${e}`}),i=async e=>await a.put({url:`/trade/after-sale/refuse?id=${e}`}),c=async e=>await a.put({url:`/trade/after-sale/refund?id=${e}`});export{u as a,i as b,c,n as d,t as e,s as g,d as r};
