"use strict";(self["webpackChunks016"]=self["webpackChunks016"]||[]).push([[8797],{8797:(t,e,a)=>{a.r(e),a.d(e,{default:()=>d});var s=function(){var t=this,e=t._self._c;return e("div",[e("Card",[e("div",{attrs:{slot:"title"},slot:"title"},[e("div",{staticClass:"edit-head"},[e("a",{staticClass:"back-title",on:{click:t.close}},[e("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("返回 ")],1),e("div",{staticClass:"head-name"},[t._v("衣物搭配详情")]),e("span"),e("a",{staticClass:"window-close",on:{click:t.close}},[e("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),e("Form",{ref:"form",attrs:{model:t.form,"label-width":100,rules:t.formValidate,"label-position":"left"}},[e("FormItem",{attrs:{label:"搭配人",prop:"userName"}},[e("Input",{staticStyle:{width:"570px"},attrs:{clearable:""},model:{value:t.form.userName,callback:function(e){t.$set(t.form,"userName",e)},expression:"form.userName"}})],1),e("FormItem",{attrs:{label:"上衣",prop:"id1"}},[e("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择搭配的上衣..."},model:{value:t.form.id1,callback:function(e){t.$set(t.form,"id1",e)},expression:"form.id1"}},t._l(t.clothingList1,(function(a,s){return e("Option",{key:s,attrs:{value:a.id,disabled:""}},[t._v("【"+t._s(a.brand)+"】"+t._s(a.title)+" ")])})),1)],1),e("FormItem",{attrs:{label:"裤子",prop:"id2"}},[e("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择搭配的裤子..."},model:{value:t.form.id2,callback:function(e){t.$set(t.form,"id2",e)},expression:"form.id2"}},t._l(t.clothingList2,(function(a,s){return e("Option",{key:s,attrs:{value:a.id,disabled:""}},[t._v("【"+t._s(a.brand)+"】"+t._s(a.title)+" ")])})),1)],1),e("FormItem",{attrs:{label:"鞋子",prop:"id3"}},[e("Select",{staticStyle:{width:"570px"},attrs:{clearable:"",placeholder:"请选择搭配的鞋子..."},model:{value:t.form.id3,callback:function(e){t.$set(t.form,"id3",e)},expression:"form.id3"}},t._l(t.clothingList3,(function(a,s){return e("Option",{key:s,attrs:{value:a.id,disabled:""}},[t._v("【"+t._s(a.brand)+"】"+t._s(a.title)+" ")])})),1)],1),e("FormItem",{attrs:{label:"备注",prop:"remark"}},[e("Input",{staticStyle:{width:"570px"},attrs:{readonly:"",type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"选填备注信息..."},model:{value:t.form.remark,callback:function(e){t.$set(t.form,"remark",e)},expression:"form.remark"}})],1),e("FormItem",{attrs:{label:"预览"}},[e("Row",{attrs:{gutter:30}},[e("Col",{attrs:{span:"8"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.form.image1}})]),e("Col",{attrs:{span:"8"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.form.image2}})]),e("Col",{attrs:{span:"8"}},[e("img",{staticStyle:{width:"100%"},attrs:{src:t.form.image3}})])],1)],1),e("Form-item",{staticClass:"br"},[e("Button",{attrs:{type:"dashed"},on:{click:t.close}},[t._v("关闭")])],1)],1)],1)],1)},i=[],l=a(3956);const r={name:"edit",components:{},props:{data:Object},data(){return{submitLoading:!1,form:{userId:"",userName:"",id1:"",value1:"",image1:"",id2:"",value2:"",image2:"",id3:"",value3:"",image3:"",remark:"",myFlag:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((t=>{t&&(0,l.Tp)(this.form).then((t=>{this.submitLoading=!1,t.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},o=r;var c=a(1001),n=(0,c.Z)(o,s,i,!1,null,null,null);const d=n.exports},3956:(t,e,a)=>{a.d(e,{MG:()=>l,Pw:()=>o,Tp:()=>r,_Y:()=>n,c1:()=>c,qw:()=>i,rs:()=>d});var s=a(7184);const i=t=>(0,s.A_)("/clothingMatching/getByPage",t),l=t=>(0,s.j0)("/clothingMatching/insert",t),r=t=>(0,s.j0)("/clothingMatching/update",t),o=t=>(0,s.j0)("/clothingMatching/delByIds",t),c=t=>(0,s.A_)("/clothing/getAllByType",t),n=t=>(0,s.A_)("/clothingCollect/addOne",t),d=t=>(0,s.A_)("/clothingCollect/cancelOne",t)}}]);