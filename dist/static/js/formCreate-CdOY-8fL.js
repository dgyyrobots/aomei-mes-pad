/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-11 15:04:23 
 */
const u=e=>JSON.stringify(e.value.getOption()),a=e=>{const s=e.value.getRule(),n=[];return s.forEach(o=>{n.push(JSON.stringify(o))}),n},t=e=>{const s=[];return e.forEach(n=>{s.push(JSON.parse(n))}),s},l=(e,s,n)=>{e.value.setOption(JSON.parse(s)),e.value.setRule(t(n))},r=(e,s,n,o)=>{e.value.option=JSON.parse(s),e.value.rule=t(n),o&&(e.value.value=o)};export{a,r as b,u as e,l as s};
