"use strict";(self["webpackChunks016"]=self["webpackChunks016"]||[]).push([[8387],{8387:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=function(){var e=this,t=e._self._c;return t("div",[t("Cascader",{attrs:{data:e.department,"load-data":e.loadData,"change-on-select":"",filterable:"",clearable:"",placeholder:"选择部门"},on:{"on-change":e.handleChangeDep},model:{value:e.selectDep,callback:function(t){e.selectDep=t},expression:"selectDep"}})],1)},n=[],s=a(7877);const i={name:"departmentChoose",props:{},data(){return{selectDep:[],department:[]}},methods:{initDepartmentData(){(0,s.E5)().then((e=>{e.success&&(e.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),this.department=e.result)}))},loadData(e,t){e.loading=!0,(0,s.E5)({parentId:e.value}).then((a=>{e.loading=!1,a.success&&(a.result.forEach((function(e){e.isParent?(e.value=e.id,e.label=e.title,e.loading=!1,e.children=[]):(e.value=e.id,e.label=e.title),-1==e.status&&(e.label="[已禁用] "+e.label,e.disabled=!0)})),e.children=a.result,t())}))},handleChangeDep(e,t){let a="";e&&e.length>0&&(a=e[e.length-1]),this.$emit("on-change",a)},clearSelect(){this.selectDep=[]}},mounted(){this.initDepartmentData()}},d=i;var r=a(1001),c=(0,r.Z)(d,l,n,!1,null,null,null);const u=c.exports}}]);