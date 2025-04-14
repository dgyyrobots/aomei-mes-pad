/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-14 11:54:00 
 */
import"./SkuList.vue_vue_type_script_setup_true_lang-Cxi7z97n.js";const p=o=>{const e=[];return o.specType&&o.skus?.forEach(r=>{r.properties?.forEach(({propertyId:i,propertyName:a,valueId:n,valueName:c})=>{e?.some(s=>s.id===i)||e.push({id:i,name:a,values:[]});const t=e?.findIndex(s=>s.id===i);e[t].values?.some(s=>s.id===n)||e[t].values?.push({id:n,name:c})})}),e};export{p as g};
