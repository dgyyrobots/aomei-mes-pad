/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-08 15:23:48 
 */
import{cQ as e,cR as t}from"./index-C8VsLzxx.js";var s=Math.floor,m=Math.random;function v(n,a){return n+s(m()*(a-n+1))}var b=parseFloat,h=Math.min,M=Math.random;function F(n,a,i){if(i&&typeof i!="boolean"&&e(n,a,i)&&(a=i=void 0),i===void 0&&(typeof a=="boolean"?(i=a,a=void 0):typeof n=="boolean"&&(i=n,n=void 0)),n===void 0&&a===void 0?(n=0,a=1):(n=t(n),a===void 0?(a=n,n=0):a=t(a)),n>a){var f=n;n=a,a=f}if(i||n%1||a%1){var d=M();return h(n+d*(a-n+b("1e-"+((d+"").length-1))),a)}return v(n,a)}export{v as b,F as r};
