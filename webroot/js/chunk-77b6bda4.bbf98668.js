(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77b6bda4"],{"5b3c":function(t,e,a){},"6c8f":function(t,e,a){"use strict";a("5b3c")},af80:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a-card",{attrs:{bordered:!1}},[a("j-vxe-table",{staticStyle:{"margin-bottom":"8px"},attrs:{toolbar:"",toolbarConfig:t.toolbarConfig,"row-number":"","row-selection":"","row-selection-type":"radio","highlight-current-row":"","click-select-row":"",height:t.tableHeight,loading:t.table1.loading,columns:t.table1.columns,dataSource:t.table1.dataSource,pagination:t.table1.pagination,"expand-config":t.expandConfig},on:{pageChange:t.handleTable1PageChange,selectRowChange:t.handleTable1SelectRowChange}}),a("a-tabs",{directives:[{name:"show",rawName:"v-show",value:t.subTabs.show,expression:"subTabs.show"}],class:{"sub-tabs":!0,"un-expand":!t.subTabs.expand}},[a("a-tab-pane",{key:"1",attrs:{tab:"子表1"}},[a("j-vxe-table",{attrs:{toolbar:"","row-number":"","row-selection":"",height:"auto",maxHeight:350,loading:t.table2.loading,columns:t.table2.columns,dataSource:t.table2.dataSource,pagination:t.table2.pagination},on:{pageChange:t.handleTable2PageChange,selectRowChange:t.handleTable2SelectRowChange}})],1),a("a-tab-pane",{key:"2",attrs:{tab:"子表2"}},[a("h1",[t._v("这里是子表2")]),a("h1",[t._v("这里是子表2")]),a("h1",[t._v("这里是子表2")]),a("h1",[t._v("这里是子表2")]),a("h1",[t._v("这里是子表2")]),a("h1",[t._v("这里是子表2")])])],1)],1)},i=[],o=a("2475"),l=a("0fea"),s={name:"ErpTemplate",data:function(){var t=this,e=this.$createElement;return{toolbarConfig:{slot:["prefix","suffix"],btn:["add","remove","clearSelection"]},expandConfig:{accordion:!0},subTabs:{show:!1,expand:!0,autoExpand:!0},table1:{loading:!1,pagination:{current:1,pageSize:200,pageSizeOptions:["10","20","30","100","200"],total:0,showTotal:function(a,n){var i=e("span",[n[0]+"-"+n[1]+" 共 "+a+" 条"]);if(t.subTabs.show){var o=e("span",[e("a-button",{attrs:{type:"link"},on:{click:t.handleToggleTabs}},[e("a-icon",{attrs:{type:t.subTabs.expand?"up":"down"}}),e("span",[t.subTabs.expand?"收起":"展开"])]),e("a-checkbox",{model:{value:t.subTabs.autoExpand,callback:function(e){t.$set(t.subTabs,"autoExpand",e)}}},["自动展开"])]);return[o,i]}return i}},selectedRows:[],dataSource:[],columns:[{key:"num",title:"序号",width:"80px"},{key:"ship_name",title:"船名",width:"180px",type:o["b"].input},{key:"call",title:"呼叫",width:"990px",type:o["b"].input},{key:"len",title:"长",width:"80px",type:o["b"].inputNumber},{key:"ton",title:"吨",width:"120px",type:o["b"].inputNumber},{key:"payer",title:"付款方",width:"120px",type:o["b"].input},{key:"count",title:"数",width:"40px"},{key:"company",title:"公司",minWidth:"180px",type:o["b"].input},{key:"trend",title:"动向",width:"120px",type:o["b"].input}]},table2:{currentRowId:null,loading:!1,pagination:{current:1,pageSize:10,pageSizeOptions:["5","10","20","30"],total:0},selectedRows:[],dataSource:[],columns:[{key:"dd_num",title:"调度序号",width:"120px"},{key:"tug",title:"拖轮",width:"180px",type:o["b"].input},{key:"work_start_time",title:"作业开始时间",width:"180px",type:o["b"].input},{key:"work_stop_time",title:"作业结束时间",width:"180px",type:o["b"].input},{key:"type",title:"船舶分类",width:"120px",type:o["b"].input},{key:"port_area",title:"所属港区",width:"120px",type:o["b"].input}]},currentSubRow:null,url:{getData:"/mock/vxe/getData"}}},computed:{tableHeight:function(){var t=this.subTabs,e=t.show,a=t.expand;return e&&a?350:482}},created:function(){this.loadTable1Data()},methods:{loadTable1Data:function(){var t=this,e={pageNo:this.table1.pagination.current,pageSize:this.table1.pagination.pageSize};this.table1.loading=!0,Object(l["c"])(this.url.getData,e).then((function(e){e.success?(t.table1.pagination.total=e.result.total,t.table1.dataSource=e.result.records,t.table1.selectedRows=[]):t.$error({title:"主表查询失败",content:e.message})})).finally((function(){t.table1.loading=!1}))},loadSubData:function(t){return!!t&&(this.table2.currentRowId===t.id||(this.table2.currentRowId=t.id,this.loadTable2Data()),!0)},loadTable2Data:function(){var t=this,e=this.table2,a={parentId:e.currentRowId,pageNo:this.table2.pagination.current,pageSize:this.table2.pagination.pageSize};e.loading=!0,Object(l["c"])(this.url.getData,a).then((function(a){a.success?(e.selectedRows=[],e.dataSource=a.result.records,e.pagination.total=a.result.total):t.$error({title:"子表查询失败",content:a.message})})).finally((function(){e.loading=!1}))},handleTable1SelectRowChange:function(t){this.table1.selectedRows=t.selectedRows,this.subTabs.show=!0,this.subTabs.autoExpand&&(this.subTabs.expand=!0),this.loadSubData(t.selectedRows[0])},handleTable2SelectRowChange:function(t){this.table2.selectedRows=t.selectedRows},handleTable1PageChange:function(t){this.table1.pagination.current=t.current,this.table1.pagination.pageSize=t.pageSize,this.loadTable1Data()},handleTable2PageChange:function(t){this.table2.pagination.current=t.current,this.table2.pagination.pageSize=t.pageSize,this.loadTable2Data()},handleToggleTabs:function(){this.subTabs.expand=!this.subTabs.expand}}},b=s,r=(a("6c8f"),a("5d22")),u=Object(r["a"])(b,n,i,!1,null,"e08516b8",null);e["default"]=u.exports}}]);