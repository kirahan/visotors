(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f638212"],{"06d9":function(t,o,r){},"8c25":function(t,o,r){"use strict";r.r(o);var n=function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",[r("div",{staticClass:"exam"},[r("div",{staticClass:"group1"},[r("div",{staticClass:"conv"},[r("iframe",{attrs:{src:t.roomurl}})]),r("h2",[t._v("聊天相关演示")]),r("button",{on:{click:function(o){return t.roomchange("/visitors/#/rooms/160")}}},[t._v("进入room 160")]),r("button",{on:{click:function(o){return t.roomchange("/visitors/#/rooms/150")}}},[t._v("进入room 150")]),r("button",{on:{click:function(o){return t.goto("/example1")}}},[t._v("打开同一房间2次")]),r("button",{on:{click:function(o){return t.goto("/example2")}}},[t._v("打开6个房间")])]),t._m(0),r("div",{staticClass:"group3"},[r("div",{staticClass:"conv"},[r("iframe",{attrs:{src:t.orderurl}})]),r("h2",[t._v("预约")]),r("button",{on:{click:function(o){return t.orderchange("/visitors/#/orders/spa")}}},[t._v("spa")]),r("button",{on:{click:function(o){return t.orderchange("/visitors/#/orders/diving")}}},[t._v("diving")]),r("button",{on:{click:function(o){return t.orderchange("/visitors/#/orders/oneday")}}},[t._v("one-day tour")])]),t._m(1)])])},i=[function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"group2"},[r("div",{staticClass:"conv"},[r("iframe",{attrs:{src:"/visitors/#/fixgoods"}})]),r("h2",[t._v("维修")])])},function(){var t=this,o=t.$createElement,r=t._self._c||o;return r("div",{staticClass:"group4"},[r("div",{staticClass:"conv"},[r("iframe",{attrs:{src:"/visitors/#/menus"}})]),r("h2",[t._v("点餐")])])}],s={components:{},data:function(){return{orderurl:"/visitors/#/orders/diving",roomurl:"/visitors/#/rooms/160"}},computed:{key:function(){return this.$route.path+Math.random()}},methods:{roomchange:function(t){this.roomurl=t},orderchange:function(t){this.orderurl=t},goto:function(t){this.$router.push(t)}},created:function(){}},c=s,e=(r("d83c"),r("2877")),u=Object(e["a"])(c,n,i,!1,null,"4a0dec10",null);o["default"]=u.exports},d83c:function(t,o,r){"use strict";var n=r("06d9"),i=r.n(n);i.a}}]);