/*!  build: Vue Shop Vite 
     copyright: https://vue-admin-beautiful.com/shop-vite  
     time: 2025-04-15 10:21:26 
 */
import{d as X,r as i,f as Z,b as h,g as n,h as ee,c as g,o as d,F as v,j as t,_ as le,a as o,y as te,m as a,w as oe,k as _,n as V,v as m,t as y,l as ae,N as re,z as ne}from"./index-5TqN_QR1.js";import{_ as ue}from"./style.css_vue_type_style_index_0_src_true_lang-CQ3Da78Q.js";import{_ as se}from"./UploadImg-CoDfHv7D.js";import{i as de}from"./spu-BZrcAj3N.js";import{g as ie,c as me,u as pe}from"./index-YiUTX8He.js";import{g as fe}from"./index-D-04ZodL.js";import{c as ce,D as B,b as D}from"./dict-B2yk4gHf.js";import"./index-DKaFcMYS.js";import"./SkuList.vue_vue_type_script_setup_true_lang-DEYKv_DD.js";import{_ as _e}from"./SpuSelect.vue_vue_type_script_setup_true_lang-ooecnx2x.js";const Ce=X({name:"PromotionArticleForm",__name:"ArticleForm",emits:["success"],setup(ge,{expose:F,emit:T}){const{t:I}=re(),A=ne(),p=i(!1),C=i(""),f=i(!1),N=i(""),r=i({id:void 0,categoryId:void 0,title:void 0,author:void 0,picUrl:void 0,introduction:void 0,sort:0,status:0,spuId:0,recommendHot:!1,recommendBanner:!1,content:void 0}),L=Z({categoryId:[{required:!0,message:"分类id不能为空",trigger:"blur"}],title:[{required:!0,message:"文章标题不能为空",trigger:"blur"}],picUrl:[{required:!0,message:"文章封面图片地址不能为空",trigger:"blur"}],sort:[{required:!0,message:"排序不能为空",trigger:"blur"}],status:[{required:!0,message:"状态不能为空",trigger:"blur"}],spuId:[{required:!0,message:"商品关联id不能为空",trigger:"blur"}],recommendHot:[{required:!0,message:"是否热门(小程序)不能为空",trigger:"blur"}],recommendBanner:[{required:!0,message:"是否轮播图(小程序)不能为空",trigger:"blur"}],content:[{required:!0,message:"文章内容不能为空",trigger:"blur"}]}),b=i(),R=i(),O=c=>{r.value.spuId=c};F({open:async(c,l)=>{if(p.value=!0,C.value=I(`action.${c}`),N.value=c,E(),l){f.value=!0;try{r.value=await ie(l)}finally{f.value=!1}}}});const H=T,$=async()=>{if(!(!b||!await b.value.validate())){f.value=!0;try{const l=r.value;N.value==="create"?(await me(l),A.success(I("common.createSuccess"))):(await pe(l),A.success(I("common.updateSuccess"))),p.value=!1,H("success")}finally{f.value=!1}}},E=()=>{r.value={id:void 0,categoryId:void 0,title:void 0,author:void 0,picUrl:void 0,introduction:void 0,sort:0,status:0,spuId:0,recommendHot:!1,recommendBanner:!1,content:void 0},b.value?.resetFields()},q=i([]),x=i([]);return h(async()=>{q.value=await fe(),x.value=await de()}),(c,l)=>{const U=n("el-input"),u=n("el-form-item"),s=n("el-col"),M=n("el-option"),G=n("el-select"),P=se,j=n("el-input-number"),k=n("el-radio"),w=n("el-radio-group"),z=n("el-tag"),S=n("el-button"),Y=ue,J=n("el-row"),K=n("el-form"),Q=le,W=ee("loading");return d(),g(v,null,[t(Q,{modelValue:o(p),"onUpdate:modelValue":l[12]||(l[12]=e=>te(p)?p.value=e:null),title:o(C),width:"70%"},{footer:a(()=>[t(S,{disabled:o(f),type:"primary",onClick:$},{default:a(()=>l[14]||(l[14]=[m("确 定")])),_:1},8,["disabled"]),t(S,{onClick:l[11]||(l[11]=e=>p.value=!1)},{default:a(()=>l[15]||(l[15]=[m("取 消")])),_:1})]),default:a(()=>[oe((d(),_(K,{ref_key:"formRef",ref:b,"label-width":"110px",model:o(r),rules:o(L)},{default:a(()=>[t(J,null,{default:a(()=>[t(s,{span:12},{default:a(()=>[t(u,{label:"文章标题",prop:"title"},{default:a(()=>[t(U,{modelValue:o(r).title,"onUpdate:modelValue":l[0]||(l[0]=e=>o(r).title=e),placeholder:"请输入文章标题"},null,8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"文章分类",prop:"categoryId"},{default:a(()=>[t(G,{modelValue:o(r).categoryId,"onUpdate:modelValue":l[1]||(l[1]=e=>o(r).categoryId=e),placeholder:"请选择"},{default:a(()=>[(d(!0),g(v,null,V(o(q),e=>(d(),_(M,{key:e.id,label:e.name,value:e.id},null,8,["label","value"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"文章作者",prop:"author"},{default:a(()=>[t(U,{modelValue:o(r).author,"onUpdate:modelValue":l[2]||(l[2]=e=>o(r).author=e),placeholder:"请输入文章作者"},null,8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"文章简介",prop:"introduction"},{default:a(()=>[t(U,{modelValue:o(r).introduction,"onUpdate:modelValue":l[3]||(l[3]=e=>o(r).introduction=e),placeholder:"请输入文章简介"},null,8,["modelValue"])]),_:1})]),_:1}),t(s,{span:24},{default:a(()=>[t(u,{label:"文章封面",prop:"picUrl"},{default:a(()=>[t(P,{modelValue:o(r).picUrl,"onUpdate:modelValue":l[4]||(l[4]=e=>o(r).picUrl=e),height:"80px"},null,8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"排序",prop:"sort"},{default:a(()=>[t(j,{modelValue:o(r).sort,"onUpdate:modelValue":l[5]||(l[5]=e=>o(r).sort=e),clearable:"","controls-position":"right",min:0},null,8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"状态",prop:"status"},{default:a(()=>[t(w,{modelValue:o(r).status,"onUpdate:modelValue":l[6]||(l[6]=e=>o(r).status=e)},{default:a(()=>[(d(!0),g(v,null,V(o(ce)(o(B).COMMON_STATUS),e=>(d(),_(k,{key:e.value,label:e.value},{default:a(()=>[m(y(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"是否热门",prop:"recommendHot"},{default:a(()=>[t(w,{modelValue:o(r).recommendHot,"onUpdate:modelValue":l[7]||(l[7]=e=>o(r).recommendHot=e)},{default:a(()=>[(d(!0),g(v,null,V(o(D)(o(B).INFRA_BOOLEAN_STRING),e=>(d(),_(k,{key:e.value,label:e.value},{default:a(()=>[m(y(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(s,{span:12},{default:a(()=>[t(u,{label:"是否轮播图",prop:"recommendBanner"},{default:a(()=>[t(w,{modelValue:o(r).recommendBanner,"onUpdate:modelValue":l[8]||(l[8]=e=>o(r).recommendBanner=e)},{default:a(()=>[(d(!0),g(v,null,V(o(D)(o(B).INFRA_BOOLEAN_STRING),e=>(d(),_(k,{key:e.value,label:e.value},{default:a(()=>[m(y(e.label),1)]),_:2},1032,["label"]))),128))]),_:1},8,["modelValue"])]),_:1})]),_:1}),t(s,{span:24},{default:a(()=>[t(u,{label:"商品关联",prop:"spuId"},{default:a(()=>[o(r).spuId?(d(),_(z,{key:0,class:"mr-10px"},{default:a(()=>[m(y(o(x).find(e=>e.id===o(r).spuId)?.name),1)]),_:1})):ae("",!0),t(S,{onClick:l[9]||(l[9]=e=>o(R)?.open())},{default:a(()=>l[13]||(l[13]=[m("选择商品")])),_:1})]),_:1})]),_:1}),t(s,{span:24},{default:a(()=>[t(u,{label:"文章内容"},{default:a(()=>[t(Y,{modelValue:o(r).content,"onUpdate:modelValue":l[10]||(l[10]=e=>o(r).content=e),height:"150px"},null,8,["modelValue"])]),_:1})]),_:1})]),_:1})]),_:1},8,["model","rules"])),[[W,o(f)]])]),_:1},8,["modelValue","title"]),t(o(_e),{ref_key:"spuSelectRef",ref:R,onConfirm:O},null,512)],64)}}});export{Ce as _};
