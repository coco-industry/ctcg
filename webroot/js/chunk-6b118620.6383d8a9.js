(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b118620","chunk-255bc3b7","chunk-2d21dfe7","chunk-2d0b1e33"],{2285:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,r){return a("a-col",{key:"dr"+r,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},s=[],i=a("71ed"),n=a("5e69"),l=a("0fea"),o={name:"RoleDataruleModal",components:{ACol:n["b"],ARow:i["a"]},data:function(){return{functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/role/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(l["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.roleId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};Object(l["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t){this.onReset(),this.functionId=e,this.roleId=t,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=o,d=a("5d22"),u=Object(d["a"])(c,r,s,!1,null,"5fa38486",null);t["default"]=u.exports},"24b9":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-card",{attrs:{bordered:!1}},[a("div",{staticClass:"table-page-search-wrapper"},[a("a-form",{attrs:{layout:"inline"}},[a("a-row",{attrs:{gutter:10}},[a("a-col",{attrs:{md:10,sm:12}},[a("a-form-item",{staticStyle:{"margin-left":"8px"},attrs:{label:"部门角色名称"}},[a("a-input",{attrs:{placeholder:"请输入部门角色"},model:{value:e.queryParam.roleName,callback:function(t){e.$set(e.queryParam,"roleName",t)},expression:"queryParam.roleName"}})],1)],1),a("span",{staticClass:"table-page-search-submitButtons",staticStyle:{float:"left",overflow:"hidden"}},[a("a-col",{attrs:{md:6,sm:24}},[a("a-button",{staticStyle:{"margin-left":"18px"},attrs:{type:"primary",icon:"search"},on:{click:e.searchQuery}},[e._v("查询")]),a("a-button",{staticStyle:{"margin-left":"8px"},attrs:{type:"primary",icon:"reload"},on:{click:e.searchReset}},[e._v("重置")])],1)],1)],1)],1)],1),a("div",{staticClass:"table-operator",attrs:{md:24,sm:24}},[a("a-button",{attrs:{type:"primary",icon:"plus"},on:{click:e.handleAdd}},[e._v("新建部门角色")]),e.selectedRowKeys.length>0?a("a-dropdown",[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:e.batchDel}},[a("a-icon",{attrs:{type:"delete"}}),e._v("删除")],1)],1),a("a-button",{staticStyle:{"margin-left":"8px"}},[e._v(" 批量操作 "),a("a-icon",{attrs:{type:"down"}})],1)],1):e._e()],1),a("div",[a("div",{staticClass:"ant-alert ant-alert-info",staticStyle:{"margin-bottom":"16px"}},[a("i",{staticClass:"anticon anticon-info-circle ant-alert-icon"}),e._v(" 已选择 "),a("a",{staticStyle:{"font-weight":"600"}},[e._v("\n        "+e._s(e.selectedRowKeys.length))]),e._v("项\n      "),a("a",{staticStyle:{"margin-left":"24px"},on:{click:e.onClearSelected}},[e._v("清空")])]),a("a-table",{ref:"table",attrs:{size:"middle",bordered:"",rowKey:"id",columns:e.columns,dataSource:e.dataSource,pagination:e.ipagination,loading:e.loading,rowSelection:{selectedRowKeys:e.selectedRowKeys,onChange:e.onSelectChange}},on:{change:e.handleTableChange},scopedSlots:e._u([{key:"action",fn:function(t,r){return a("span",{},[a("a",{on:{click:function(t){return e.handleEdit(r)}}},[e._v("编辑")]),a("a-divider",{attrs:{type:"vertical"}}),a("a-dropdown",[a("a",{staticClass:"ant-dropdown-link"},[e._v("\n            更多 "),a("a-icon",{attrs:{type:"down"}})],1),a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",[a("a",{on:{click:function(t){return e.handlePerssion(r)}}},[e._v("授权")])]),a("a-menu-item",[a("a-popconfirm",{attrs:{title:"确定删除吗?"},on:{confirm:function(){return e.handleDelete(r.id)}}},[a("a",[e._v("删除")])])],1)],1)],1)],1)}}])})],1),a("sys-depart-role-modal",{ref:"modalForm",on:{ok:e.modalFormOk}}),a("dept-role-auth-modal",{ref:"modalDeptRole"})],1)},s=[],i=a("b65a"),n=a("0fea"),l=a("a119"),o=a("dc4b"),c={name:"DeptRoleInfo",components:{DeptRoleAuthModal:o["default"],SysDepartRoleModal:l["default"]},mixins:[i["a"]],data:function(){return{description:"部门角色信息",currentDeptId:"",columns:[{title:"部门角色名称",align:"center",dataIndex:"roleName"},{title:"部门角色编码",align:"center",dataIndex:"roleCode"},{title:"部门",align:"center",dataIndex:"departId_dictText"},{title:"备注",align:"center",dataIndex:"description"},{title:"操作",dataIndex:"action",scopedSlots:{customRender:"action"},align:"center",width:170}],url:{list:"/sys/sysDepartRole/list",delete:"/sys/sysDepartRole/delete",deleteBatch:"/sys/sysDepartRole/deleteBatch"}}},created:function(){},methods:{searchReset:function(){this.queryParam={},this.loadData(1)},loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var a=this.getQueryParams();a.deptId=this.currentDeptId,Object(n["c"])(this.url.list,a).then((function(e){e.success&&e.result&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total)}))}else this.$message.error("请设置url.list属性!")},open:function(e){this.currentDeptId=e.id,this.loadData(1)},clearList:function(){this.currentDeptId="",this.dataSource=[]},hasSelectDept:function(){return""!=this.currentDeptId||(this.$message.error("请选择一个部门!"),!1)},handleEdit:function(e){this.$refs.modalForm.title="编辑",this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.disableSubmit=!1,this.$refs.modalForm.edit(e,e.departId)},handleAdd:function(){""==this.currentDeptId?this.$message.error("请选择一个部门!"):(this.$refs.modalForm.departDisabled=!0,this.$refs.modalForm.add(this.currentDeptId),this.$refs.modalForm.title="新增")},handlePerssion:function(e){this.$refs.modalDeptRole.show(e.id,e.departId)}}},d=c,u=a("5d22"),h=Object(u["a"])(d,r,s,!1,null,"37090947",null);t["default"]=h.exports},"71da":function(e,t,a){},"79c1":function(e,t,a){"use strict";a("71da")},a119:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-modal",{attrs:{title:e.title,width:800,visible:e.visible,confirmLoading:e.confirmLoading,cancelText:"关闭"},on:{ok:e.handleOk,cancel:e.handleCancel}},[a("a-spin",{attrs:{spinning:e.confirmLoading}},[a("a-form",{attrs:{form:e.form}},[a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门角色名称"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleName",e.validatorRules.roleName],expression:"['roleName', validatorRules.roleName]"}],attrs:{placeholder:"请输入部门角色名称"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"部门角色编码"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["roleCode",e.validatorRules.roleCode],expression:"['roleCode', validatorRules.roleCode]"}],attrs:{placeholder:"请输入部门角色编码"}})],1),a("a-form-item",{attrs:{labelCol:e.labelCol,wrapperCol:e.wrapperCol,label:"描述"}},[a("a-input",{directives:[{name:"decorator",rawName:"v-decorator",value:["description",e.validatorRules.description],expression:"['description', validatorRules.description]"}],attrs:{placeholder:"请输入描述"}})],1)],1)],1)],1)},s=[],i=a("0fea"),n=a("85ee"),l=a.n(n),o=a("4ec3"),c={name:"SysDepartRoleModal",data:function(){return{title:"操作",visible:!1,model:{},labelCol:{xs:{span:24},sm:{span:5}},wrapperCol:{xs:{span:24},sm:{span:16}},confirmLoading:!1,form:this.$form.createForm(this),validatorRules:{roleName:{rules:[{required:!0,message:"请输入部门角色名称!"},{min:2,max:30,message:"长度在 2 到 30 个字符",trigger:"blur"}]},roleCode:{rules:[{required:!0,message:"请输入部门角色编码!"},{min:0,max:64,message:"长度不超过 64 个字符",trigger:"blur"},{validator:this.validateRoleCode}]},description:{rules:[{min:0,max:126,message:"长度不超过 126 个字符",trigger:"blur"}]}},url:{add:"/sys/sysDepartRole/add",edit:"/sys/sysDepartRole/edit"}}},created:function(){},methods:{add:function(e){this.edit({},e)},edit:function(e,t){var a=this;this.departId=t,this.form.resetFields(),this.model=Object.assign({},e),this.visible=!0,this.$nextTick((function(){a.form.setFieldsValue(l()(a.model,"roleName","roleCode","description"))}))},close:function(){this.$emit("close"),this.visible=!1},handleOk:function(){var e=this,t=this;this.form.validateFields((function(a,r){if(!a){t.confirmLoading=!0;var s="",n="";e.model.id?(s+=e.url.edit,n="put"):(s+=e.url.add,n="post");var l=Object.assign(e.model,r);l.departId=e.departId,Object(i["h"])(s,l,n).then((function(e){e.success?(t.$message.success(e.message),t.$emit("ok")):t.$message.warning(e.message)})).finally((function(){t.confirmLoading=!1,t.close()}))}}))},handleCancel:function(){this.close()},validateRoleCode:function(e,t,a){if(/[\u4E00-\u9FA5]/g.test(t))a("部门角色编码不可输入汉字!");else{var r={tableName:"sys_depart_role",fieldName:"role_code",fieldVal:t,dataId:this.model.id};Object(o["m"])(r).then((function(e){e.success?a():a(e.message)}))}}}},d=c,u=a("5d22"),h=Object(u["a"])(d,r,s,!1,null,"814d02b0",null);t["default"]=h.exports},d456:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{attrs:{title:"数据规则/按钮权限配置",width:"365",closable:!1,visible:e.visible},on:{close:e.onClose}},[a("a-tabs",{attrs:{defaultActiveKey:"1"}},[a("a-tab-pane",{key:"1",attrs:{tab:"数据规则"}},[e.dataruleList.length>0?a("a-checkbox-group",{model:{value:e.dataruleChecked,callback:function(t){e.dataruleChecked=t},expression:"dataruleChecked"}},[a("a-row",[e._l(e.dataruleList,(function(t,r){return a("a-col",{key:"dr"+r,attrs:{span:24}},[a("a-checkbox",{attrs:{value:t.id}},[e._v(e._s(t.ruleName))])],1)})),a("a-col",{attrs:{span:24}},[a("div",{staticStyle:{width:"100%","margin-top":"15px"}},[a("a-button",{attrs:{type:"primary",size:"small",icon:"save"},on:{click:e.saveDataruleForRole}},[e._v("点击保存")])],1)])],2)],1):a("div",[a("h3",[e._v("无配置信息!")])])],1)],1)],1)},s=[],i=a("71ed"),n=a("5e69"),l=a("0fea"),o={name:"DeptRoleDataruleModal",components:{ACol:n["b"],ARow:i["a"]},data:function(){return{departId:"",functionId:"",roleId:"",visible:!1,tabList:[{key:"1",tab:"数据规则"},{key:"2",tab:"按钮权限"}],activeTabKey:"1",url:{datarule:"/sys/sysDepartRole/datarule"},dataruleList:[],dataruleChecked:[]}},methods:{loadData:function(){var e=this;Object(l["c"])("".concat(this.url.datarule,"/").concat(this.functionId,"/").concat(this.departId,"/").concat(this.roleId)).then((function(t){if(t.success){e.dataruleList=t.result.datarule;var a=t.result.drChecked;a&&(e.dataruleChecked=a.split(","))}}))},saveDataruleForRole:function(){var e=this;this.dataruleChecked&&0!=this.dataruleChecked.length||this.$message.warning("请注意，现未勾选任何数据权限!");var t={permissionId:this.functionId,roleId:this.roleId,dataRuleIds:this.dataruleChecked.join(",")};Object(l["i"])(this.url.datarule,t).then((function(t){t.success?e.$message.success(t.message):e.$message.error(t.message)}))},show:function(e,t,a){this.onReset(),this.departId=t,this.functionId=e,this.roleId=a,this.visible=!0,this.loadData()},onClose:function(){this.visible=!1,this.onReset()},onTabChange:function(e){this.activeTabKey=e},onReset:function(){this.functionId="",this.roleId="",this.dataruleList=[],this.dataruleChecked=[]}}},c=o,d=a("5d22"),u=Object(d["a"])(c,r,s,!1,null,"776b339a",null);t["default"]=u.exports},dc4b:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("a-drawer",{staticStyle:{overflow:"auto","padding-bottom":"53px"},attrs:{title:e.title,maskClosable:!0,width:"650",placement:"right",closable:!0,visible:e.visible},on:{close:e.close}},[a("a-form",[a("a-form-item",{attrs:{label:"所拥有的部门权限"}},[e.treeData.length>0?a("a-tree",{attrs:{checkable:"",checkedKeys:e.checkedKeys,treeData:e.treeData,selectedKeys:e.selectedKeys,expandedKeys:e.expandedKeysss,checkStrictly:e.checkStrictly},on:{check:e.onCheck,expand:e.onExpand,select:e.onTreeNodeSelect},scopedSlots:e._u([{key:"hasDatarule",fn:function(t){var r=t.slotTitle,s=t.ruleFlag;return a("span",{},[e._v("\n          "+e._s(r)),s?a("a-icon",{staticStyle:{"margin-left":"5px",color:"red"},attrs:{type:"align-left"}}):e._e()],1)}}],null,!1,2869785871)}):a("div",[a("h3",[e._v("无可配置部门权限!")])])],1)],1),a("div",{staticClass:"drawer-bootom-button"},[a("a-dropdown",{staticStyle:{float:"left"},attrs:{trigger:["click"],placement:"topCenter"}},[a("a-menu",{attrs:{slot:"overlay"},slot:"overlay"},[a("a-menu-item",{key:"1",on:{click:function(t){return e.switchCheckStrictly(1)}}},[e._v("父子关联")]),a("a-menu-item",{key:"2",on:{click:function(t){return e.switchCheckStrictly(2)}}},[e._v("取消关联")]),a("a-menu-item",{key:"3",on:{click:e.checkALL}},[e._v("全部勾选")]),a("a-menu-item",{key:"4",on:{click:e.cancelCheckALL}},[e._v("取消全选")]),a("a-menu-item",{key:"5",on:{click:e.expandAll}},[e._v("展开所有")]),a("a-menu-item",{key:"6",on:{click:e.closeAll}},[e._v("合并所有")])],1),a("a-button",[e._v("\n        树操作 "),a("a-icon",{attrs:{type:"up"}})],1)],1),a("a-popconfirm",{attrs:{title:"确定放弃编辑？",okText:"确定",cancelText:"取消"},on:{confirm:e.close}},[a("a-button",{staticStyle:{"margin-right":".8rem"}},[e._v("取消")])],1),a("a-button",{staticStyle:{"margin-right":"0.8rem"},attrs:{type:"primary",loading:e.loading,ghost:""},on:{click:function(t){return e.handleSubmit(!1)}}},[e._v("仅保存")]),a("a-button",{attrs:{type:"primary",loading:e.loading},on:{click:function(t){return e.handleSubmit(!0)}}},[e._v("保存并关闭")])],1),a("dept-role-datarule-modal",{ref:"datarule"})],1)},s=[],i=a("4ec3"),n=a("2285"),l=a("d456");function o(e){return u(e)||d(e)||m(e)||c()}function c(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function d(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function u(e){if(Array.isArray(e))return f(e)}function h(e,t){var a;if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(a=m(e))||t&&e&&"number"===typeof e.length){a&&(e=a);var r=0,s=function(){};return{s:s,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:s}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,l=!1;return{s:function(){a=e[Symbol.iterator]()},n:function(){var e=a.next();return n=e.done,e},e:function(e){l=!0,i=e},f:function(){try{n||null==a.return||a.return()}finally{if(l)throw i}}}}function m(e,t){if(e){if("string"===typeof e)return f(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?f(e,t):void 0}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}var p={name:"DeptRoleAuthModal",components:{DeptRoleDataruleModal:l["default"],RoleDataruleModal:n["default"]},data:function(){return{departId:"",roleId:"",treeData:[],defaultCheckedKeys:[],checkedKeys:[],halfCheckedKeys:[],expandedKeysss:[],allTreeKeys:[],autoExpandParent:!0,checkStrictly:!0,title:"部门角色权限配置",visible:!1,loading:!1,selectedKeys:[]}},methods:{switchCheckStrictly:function(e){1==e?this.checkStrictly=!1:2==e&&(this.checkStrictly=!0)},onTreeNodeSelect:function(e){e&&e.length>0&&(this.selectedKeys=e),this.$refs.datarule.show(this.selectedKeys[0],this.departId,this.roleId)},onCheck:function(e){this.checkStrictly?this.checkedKeys=e.checked:this.checkedKeys=e},show:function(e,t){this.departId=t,this.roleId=e,this.visible=!0},close:function(){this.reset(),this.$emit("close"),this.visible=!1},onExpand:function(e){this.expandedKeysss=e,this.autoExpandParent=!1},reset:function(){this.expandedKeysss=[],this.checkedKeys=[],this.defaultCheckedKeys=[],this.loading=!1},expandAll:function(){this.expandedKeysss=this.allTreeKeys},closeAll:function(){this.expandedKeysss=[]},checkALL:function(){this.checkedKeys=this.allTreeKeys},cancelCheckALL:function(){this.checkedKeys=[]},handleCancel:function(){this.close()},handleSubmit:function(e){var t=this,a=this,r={roleId:a.roleId,permissionIds:a.checkedKeys.join(","),lastpermissionIds:a.defaultCheckedKeys.join(",")};a.loading=!0,Object(i["R"])(r).then((function(r){r.success?(a.$message.success(r.message),a.loading=!1,e&&a.close()):(a.$message.error(r.message),a.loading=!1,e&&a.close()),t.loadData()}))},convertTreeListToKeyLeafPairs:function(e){var t,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=h(e);try{for(r.s();!(t=r.n()).done;){var s=t.value,i=s.key,n=s.isLeaf,l=s.children;a.push({key:i,isLeaf:n}),l&&l.length>0&&this.convertTreeListToKeyLeafPairs(l,a)}}catch(o){r.e(o)}finally{r.f()}return a},loadData:function(){var e=this;Object(i["L"])({departId:this.departId}).then((function(t){e.treeData=t.result.treeList,e.allTreeKeys=t.result.ids,Object(i["E"])({roleId:e.roleId}).then((function(t){e.checkedKeys=o(t.result),e.defaultCheckedKeys=o(t.result),e.expandedKeysss=e.allTreeKeys}))}))}},watch:{visible:function(){this.visible&&this.loadData()}}},y=p,v=(a("79c1"),a("5d22")),b=Object(v["a"])(y,r,s,!1,null,"642e9f1c",null);t["default"]=b.exports}}]);