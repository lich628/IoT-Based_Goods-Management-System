(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ca5e40b"],{"7db0":function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").find,i=n("44d2"),l=n("ae40"),o="find",c=!0,s=l(o);o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!s},{find:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)},a434:function(t,e,n){"use strict";var a=n("23e7"),r=n("23cb"),i=n("a691"),l=n("50c4"),o=n("7b0b"),c=n("65f0"),s=n("8418"),u=n("1dde"),d=n("ae40"),f=u("splice"),p=d("splice",{ACCESSORS:!0,0:0,1:2}),b=Math.max,g=Math.min,h=9007199254740991,m="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!f||!p},{splice:function(t,e){var n,a,u,d,f,p,v=o(this),w=l(v.length),y=r(t,w),_=arguments.length;if(0===_?n=a=0:1===_?(n=0,a=w-y):(n=_-2,a=g(b(i(e),0),w-y)),w+n-a>h)throw TypeError(m);for(u=c(v,a),d=0;d<a;d++)f=y+d,f in v&&s(u,d,v[f]);if(u.length=a,n<a){for(d=y;d<w-a;d++)f=d+a,p=d+n,f in v?v[p]=v[f]:delete v[p];for(d=w;d>w-a+n;d--)delete v[d-1]}else if(n>a)for(d=w-a;d>y;d--)f=d+a-1,p=d+n-1,f in v?v[p]=v[f]:delete v[p];for(d=0;d<n;d++)v[d+y]=arguments[d+2];return v.length=w-a+n,u}})},b0c7:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"app-container"},[n("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.listLoading,expression:"listLoading"}],attrs:{data:t.list,"element-loading-text":"Loading",height:"calc(100vh - 100px)",border:"",fit:"","highlight-current-row":""}},[n("el-table-column",{attrs:{align:"center",label:"编号","min-width":"95"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.id)+" ")]}}])}),n("el-table-column",{attrs:{label:"物资名称",align:"center","min-width":"120",sortable:"",prop:"name"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.name)+" ")]}}])}),n("el-table-column",{attrs:{label:"物资数量","min-width":"110",align:"center",sortable:"",prop:"num"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",[t._v(t._s(e.row.num))])]}}])}),n("el-table-column",{attrs:{label:"是否重点物资","min-width":"120",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.flag)+" ")]}}])}),n("el-table-column",{attrs:{"class-name":"status-col",label:"负责人电话","min-width":"200",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[t._v(" "+t._s(e.row.phone)+" ")]}}])}),n("el-table-column",{attrs:{align:"center",label:"更新时间","min-width":"200",sortable:"",prop:"date"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("i",{staticClass:"el-icon-time"}),n("span",{staticStyle:{"margin-left":"5px"}},[t._v(t._s(e.row.date))])]}}])}),n("el-table-column",{attrs:{fixed:"right",label:"操作",width:"150",align:"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"success",size:"small",plain:""}},[n("a",{staticStyle:{"text-decoration":"none"},attrs:{href:e.row.fileurl,target:"blank"}},[t._v("查看")])]),n("el-button",{attrs:{type:"danger",size:"small",plain:""},nativeOn:{click:function(n){return n.preventDefault(),t.deleteRow(e.row.id,t.list)}}},[t._v(" 删除 ")])]}}])})],1)],1)},r=[],i=n("c7eb"),l=n("1da1"),o=(n("7db0"),n("d3b7"),n("c740"),n("a434"),n("c405")),c={filters:{statusFilter:function(t){var e={published:"success",draft:"gray",deleted:"danger"};return e[t]}},data:function(){return{list:null,listLoading:!0}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=this;console.log("fetchdata of category!"),this.listLoading=!0,Object(o["b"])().then((function(e){t.list=e.data.items,t.total=e.data.total,t.listLoading=!1}))},deleteRow:function(t,e){var n=this;return Object(l["a"])(Object(i["a"])().mark((function a(){var r,l;return Object(i["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n.listLoading=!0,console.log(t),r=e.find((function(e){return e.id===t})).id,console.log(r),l=e.findIndex((function(t){return t.id===r})),-1===l){a.next=18;break}return e.splice(l,1),a.prev=7,a.next=10,Object(o["a"])(r);case 10:n.$message({message:"删除成功",type:"success"}),a.next=16;break;case 13:a.prev=13,a.t0=a["catch"](7),n.$message({message:"错误：前端数据被删除，但后端数据库数据并未更新！",type:"warning"});case 16:a.next=19;break;case 18:console.error("未找到ID为 ".concat(t," 的行"));case 19:n.listLoading=!1;case 20:case"end":return a.stop()}}),a,null,[[7,13]])})))()}}},s=c,u=n("2877"),d=Object(u["a"])(s,a,r,!1,null,null,null);e["default"]=d.exports},c405:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return l}));var a=n("b775");function r(){return Object(a["a"])({url:"/category/list",method:"get"})}function i(t){return Object(a["a"])({url:"/category/insert",method:"post",headers:{"Content-Type":"multipart/form-data"},data:t})}function l(t){return Object(a["a"])({url:"/category/delete",method:"delete",params:{id:t}})}},c740:function(t,e,n){"use strict";var a=n("23e7"),r=n("b727").findIndex,i=n("44d2"),l=n("ae40"),o="findIndex",c=!0,s=l(o);o in[]&&Array(1)[o]((function(){c=!1})),a({target:"Array",proto:!0,forced:c||!s},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(o)}}]);