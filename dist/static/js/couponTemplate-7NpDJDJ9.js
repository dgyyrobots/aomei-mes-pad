/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-11 15:04:23 
 */
import{V as e}from"./index-lcC3l4R2.js";function n(t){return e.post({url:"/promotion/coupon-template/create",data:t})}function a(t){return e.put({url:"/promotion/coupon-template/update",data:t})}function r(t,o){const p={id:t,status:o};return e.put({url:"/promotion/coupon-template/update-status",data:p})}function l(t){return e.delete({url:`/promotion/coupon-template/delete?id=${t}`})}function m(t){return e.get({url:`/promotion/coupon-template/get?id=${t}`})}function i(t){return e.get({url:"/promotion/coupon-template/page",params:t})}function c(t){return e.get({url:`/promotion/coupon-template/list?ids=${t}`})}export{m as a,r as b,n as c,l as d,c as e,i as g,a as u};
