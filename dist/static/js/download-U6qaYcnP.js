/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-10 15:52:22 
 */
const t=(o,e,w)=>{const c=new Blob([o],{type:w});window.URL=window.URL||window.webkitURL;const d=URL.createObjectURL(c),n=document.createElement("a");n.href=d,n.download=e,n.click(),window.URL.revokeObjectURL(d)},a={excel:(o,e)=>{t(o,e,"application/vnd.ms-excel")},word:(o,e)=>{t(o,e,"application/msword")},zip:(o,e)=>{t(o,e,"application/zip")},html:(o,e)=>{t(o,e,"text/html")},markdown:(o,e)=>{t(o,e,"text/markdown")}};export{a as d};
