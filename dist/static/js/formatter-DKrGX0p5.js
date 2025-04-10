/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
import{b_ as a,x as e}from"./index-DMg0mq0e.js";import{e as i,f as n}from"./constants-BPQb3nxh.js";const o=t=>t.discountType===i.PRICE.type?`￥${a(t.discountPrice)}`:t.discountType===i.PERCENT.type?`${t.discountPercent}%`:`未知【${t.discountType}】`,s=t=>t.takeLimitCount===-1?"无领取限制":`${t.takeLimitCount} 张/人`,m=t=>t.validityType===n.DATE.type?`${e(t.validStartTime)} 至 ${e(t.validEndTime)}`:t.validityType===n.TERM.type?`领取后第 ${t.fixedStartTerm} - ${t.fixedEndTerm} 天内可用`:`未知【${t.validityType}】`,d=t=>t.totalCount-t.takeCount,p=t=>`￥${a(t.usePrice)}`;export{o as d,d as r,s as t,p as u,m as v};
