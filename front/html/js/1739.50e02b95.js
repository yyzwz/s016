"use strict";(self["webpackChunks016"]=self["webpackChunks016"]||[]).push([[1739,8188,6413],{1739:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=function(){var e=this,t=e._self._c;return t("div",[t("Card",[t("div",{attrs:{slot:"title"},slot:"title"},[t("div",{staticClass:"edit-head"},[t("a",{staticClass:"back-title",on:{click:e.close}},[t("Icon",{attrs:{type:"ios-arrow-back"}}),e._v("返回 ")],1),t("div",{staticClass:"head-name"},[e._v("编辑衣物")]),t("span"),t("a",{staticClass:"window-close",on:{click:e.close}},[t("Icon",{staticClass:"ivu-icon-ios-close",attrs:{type:"ios-close",size:"31"}})],1)])]),t("Form",{ref:"form",attrs:{model:e.form,"label-width":100,rules:e.formValidate,"label-position":"left"}},[t("FormItem",{attrs:{label:"衣物名称",prop:"title"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入衣物名称..."},model:{value:e.form.title,callback:function(t){e.$set(e.form,"title",t)},expression:"form.title"}})],1),t("FormItem",{attrs:{label:"品牌",prop:"brand"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入衣物品牌..."},model:{value:e.form.brand,callback:function(t){e.$set(e.form,"brand",t)},expression:"form.brand"}})],1),t("FormItem",{attrs:{label:"类型",prop:"type"}},[t("dict",{staticStyle:{width:"570px"},attrs:{dict:"clothType",transfer:"",clearable:"",placeholder:"请选择衣物类型..."},model:{value:e.form.type,callback:function(t){e.$set(e.form,"type",t)},expression:"form.type"}})],1),t("FormItem",{attrs:{label:"图片",prop:"image"}},[t("upload-pic-input",{staticStyle:{width:"570px"},attrs:{placeholder:"请上传衣物图片"},model:{value:e.form.image,callback:function(t){e.$set(e.form,"image",t)},expression:"form.image"}})],1),t("FormItem",{attrs:{label:"价格",prop:"price"}},[t("InputNumber",{staticStyle:{width:"570px"},attrs:{min:"0",max:"5000000",placeholder:"请输入衣物购买价格..."},model:{value:e.form.price,callback:function(t){e.$set(e.form,"price",t)},expression:"form.price"}})],1),t("FormItem",{attrs:{label:"购买网址",prop:"website"}},[t("Input",{staticStyle:{width:"570px"},attrs:{clearable:"","show-word-limit":"",maxlength:"240",placeholder:"请输入衣物购买网址..."},model:{value:e.form.website,callback:function(t){e.$set(e.form,"website",t)},expression:"form.website"}})],1),t("FormItem",{attrs:{label:"备注",prop:"remark"}},[t("Input",{staticStyle:{width:"570px"},attrs:{type:"textarea",rows:4,"show-word-limit":"",maxlength:"240",placeholder:"选填备注信息...",clearable:""},model:{value:e.form.remark,callback:function(t){e.$set(e.form,"remark",t)},expression:"form.remark"}})],1),t("Form-item",{staticClass:"br"},[t("Button",{attrs:{loading:e.submitLoading,type:"primary"},on:{click:e.handleSubmit}},[e._v("提交并保存")]),t("Button",{on:{click:e.handleReset}},[e._v("重置")]),t("Button",{attrs:{type:"dashed"},on:{click:e.close}},[e._v("关闭")])],1)],1)],1)],1)},r=[],i=a(5027),s=a(6413),n=a(8188);const o={name:"edit",components:{uploadPicInput:s["default"],dict:n["default"]},props:{data:Object},data(){return{submitLoading:!1,form:{title:"",brand:"",type:"",image:"",price:0,website:"",remark:"",collectFlag:""},formValidate:{}}},methods:{init(){this.handleReset(),this.form=this.data},handleReset(){this.$refs.form.resetFields()},handleSubmit(){this.$refs.form.validate((e=>{e&&(0,i.Lj)(this.form).then((e=>{this.submitLoading=!1,e.success&&(this.$Message.success("操作成功"),this.submited())}))}))},close(){this.$emit("close",!0)},submited(){this.$emit("submited",!0)}},mounted(){this.init()}},c=o;var d=a(1001),u=(0,d.Z)(c,l,r,!1,null,null,null);const h=u.exports},8188:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var l=function(){var e=this,t=e._self._c;return t("div",[t("Select",{attrs:{size:e.size,loading:e.loading,placeholder:e.placeholder,multiple:e.multiple,disabled:e.disabled,filterable:e.filterable,transfer:e.transfer,clearable:e.clearable,placement:e.placement,"transfer-class-name":e.transferClassName,prefix:e.prefix,"max-tag-count":e.maxTagCount,"max-tag-placeholder":e.maxTagPlaceholder},on:{"on-change":e.handleChange,"on-query-change":e.handleQueryChange,"on-clear":e.handleClear,"on-open-change":e.handleOpenChange,"on-select":e.handleSelect},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},e._l(e.dictData,(function(a,l){return t("Option",{key:l,attrs:{value:a.value}},[e._v(e._s(a.title))])})),1)],1)},r=[],i=a(7877);const s={name:"dict",props:{value:"",dict:String,placeholder:{type:String,default:"请选择"},placement:{type:String,default:"bottom-start"},size:String,multiple:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},filterable:{type:Boolean,default:!1},transfer:{type:Boolean,default:!1},transferClassName:String,prefix:String,maxTagCount:Number,maxTagPlaceholder:Function,clearable:{type:Boolean,default:!0}},data(){return{currentValue:this.value,dictData:[],loading:!1}},methods:{getData(e){this.loading=!0,(0,i.i3)(e).then((e=>{this.loading=!1,e.success&&(this.dictData=e.result)}))},handleChange(e){this.$emit("input",e),this.$emit("on-change",e)},handleQueryChange(e){this.$emit("on-query-change",e)},handleClear(){this.$emit("on-clear","")},handleOpenChange(e){this.$emit("on-open-change",e)},handleSelect(e){this.$emit("on-select",e)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)},dict(e){this.getData(e)}},mounted(){this.getData(this.dict)}},n=s;var o=a(1001),c=(0,o.Z)(n,l,r,!1,null,null,null);const d=c.exports},6413:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var l=function(){var e=this,t=e._self._c;return t("div",[t("div",{staticStyle:{display:"flex"}},[t("Input",{staticStyle:{"margin-right":"10px"},attrs:{placeholder:e.placeholder,size:e.size,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,icon:"md-eye"},on:{"on-change":e.handleChange},model:{value:e.currentValue,callback:function(t){e.currentValue=t},expression:"currentValue"}},[t("Poptip",{staticStyle:{width:"17px",cursor:"pointer"},attrs:{slot:"append",transfer:"",trigger:"hover",title:"图片预览",placement:"right",width:"350"},slot:"append"},[t("Button",{attrs:{type:"primary",icon:"md-eye"}}),t("div",{attrs:{slot:"content"},slot:"content"},[t("img",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{width:"100%",margin:"0 auto",display:"block",cursor:"zoom-in"},attrs:{src:e.currentValue},on:{click:e.viewImage}}),t("span",{directives:[{name:"show",rawName:"v-show",value:!e.currentValue,expression:"!currentValue"}]},[e._v("无效的图片链接")]),t("a",{directives:[{name:"show",rawName:"v-show",value:e.currentValue,expression:"currentValue"}],staticStyle:{"margin-top":"5px","text-align":"right",display:"block"},on:{click:e.viewImage}},[e._v("查看大图")])])],1)],1),t("Upload",{attrs:{action:e.uploadFileUrl,headers:e.accessToken,"on-success":e.handleSuccess,"on-error":e.handleError,format:e.format,accept:e.accept,"max-size":1024*e.maxSize,"on-format-error":e.handleFormatError,"on-exceeded-size":e.handleMaxSize,"before-upload":e.beforeUpload,"show-upload-list":!1}},[t("Button",{attrs:{loading:e.loading,size:e.size,disabled:e.disabled,icon:e.icon}},[e._v("上传图片")])],1)],1)])},r=[],i=a(1949),s=a.n(i),n=a(7877);const o={name:"uploadPicInput",props:{value:String,size:String,placeholder:{type:String,default:"可输入图片链接"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},maxlength:Number,icon:{type:String,default:"ios-cloud-upload-outline"},maxSize:{type:Number,default:5},accept:{type:String,default:".jpg, .jpeg, .png, .gif"}},computed:{format(){if(this.accept){let e=[];return this.accept.split(",").forEach((t=>{e.push(t.replace(".","").replace(" ",""))})),e}return[]}},data(){return{accessToken:{},currentValue:this.value,loading:!1,uploadFileUrl:n.cT}},methods:{init(){this.accessToken={accessToken:this.getStore("accessToken")}},viewImage(){let e=new Image;e.src=this.currentValue;let t=new(s())(e,{hidden:function(){t.destroy()}});t.show()},handleFormatError(e){this.loading=!1,this.$Notice.warning({title:"不支持的文件格式",desc:"所选文件‘ "+e.name+" ’格式不正确, 请选择 "+this.accept+" 格式文件"})},handleMaxSize(e){this.loading=!1,this.$Notice.warning({title:"文件大小过大",desc:"所选文件‘ "+e.name+" ’大小过大, 不得超过 "+this.maxSize+"M."})},beforeUpload(){return this.loading=!0,!0},handleSuccess(e,t){this.loading=!1,e.success?(this.currentValue=e.result,this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)):this.$Message.error(e.message)},handleError(e,t,a){this.loading=!1,this.$Message.error(e.toString())},handleChange(e){this.$emit("input",this.currentValue),this.$emit("on-change",this.currentValue)},setCurrentValue(e){e!==this.currentValue&&(this.currentValue=e,this.$emit("on-change",this.currentValue))}},watch:{value(e){this.setCurrentValue(e)}},mounted(){this.init()}},c=o;var d=a(1001),u=(0,d.Z)(c,l,r,!1,null,null,null);const h=u.exports},5027:(e,t,a)=>{a.d(t,{Fj:()=>i,Lj:()=>s,c1:()=>r,x$:()=>n});var l=a(7184);const r=e=>(0,l.A_)("/clothing/getByPage",e),i=e=>(0,l.j0)("/clothing/insert",e),s=e=>(0,l.j0)("/clothing/update",e),n=e=>(0,l.j0)("/clothing/delByIds",e)}}]);