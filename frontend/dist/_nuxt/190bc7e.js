(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{1078:function(e,t,r){"use strict";r.r(t);r(36),r(30);var n=r(2),o=r(37),c=r(287),l=n.a.extend({props:{gameMode:{type:String,default:"modeSprint"},questionCount:{type:Number,default:10}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},name:function(){return this.accountStore.account.name}}}),f=r(80),d=r(92),O=r.n(d),v=r(483),y=r(1056),component=Object(f.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("v-row",[r("v-col",[e._v("\n      ようこそ "+e._s(e.name)+" さん\n    ")])],1),e._v(" "),r("History",{staticClass:"mt-2",attrs:{gameMode:e.gameMode,questionCount:e.questionCount}})],1)}),[],!1,null,null,null);t.default=component.exports;O()(component,{VCol:v.a,VRow:y.a})},483:function(e,t,r){"use strict";r(8),r(9),r(14),r(17);var n=r(4),o=(r(36),r(12),r(65),r(39),r(464),r(465),r(466),r(467),r(468),r(469),r(470),r(471),r(472),r(473),r(474),r(475),r(476),r(477),r(24),r(40),r(42),r(57),r(11),r(66),r(290),r(2)),c=r(90),l=r(3);function f(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(t){Object(n.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var O=["sm","md","lg","xl"],v=O.reduce((function(e,t){return e[t]={type:[Boolean,String,Number],default:!1},e}),{}),y=O.reduce((function(e,t){return e["offset"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),j=O.reduce((function(e,t){return e["order"+Object(l.x)(t)]={type:[String,Number],default:null},e}),{}),m={col:Object.keys(v),offset:Object.keys(y),order:Object.keys(j)};function S(e,t,r){var n=e;if(null!=r&&!1!==r){if(t){var o=t.replace(e,"");n+="-".concat(o)}return"col"!==e||""!==r&&!0!==r?(n+="-".concat(r)).toLowerCase():n.toLowerCase()}}var w=new Map;t.a=o.a.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},j),{},{alignSelf:{type:String,default:null,validator:function(e){return["auto","start","end","center","baseline","stretch"].includes(e)}},tag:{type:String,default:"div"}}),render:function(e,t){var r=t.props,data=t.data,o=t.children,l=(t.parent,"");for(var f in r)l+=String(r[f]);var d=w.get(l);return d||function(){var e,t;for(t in d=[],m)m[t].forEach((function(e){var n=r[e],o=S(t,e,n);o&&d.push(o)}));var o=d.some((function(e){return e.startsWith("col-")}));d.push((e={col:!o||!r.cols},Object(n.a)(e,"col-".concat(r.cols),r.cols),Object(n.a)(e,"offset-".concat(r.offset),r.offset),Object(n.a)(e,"order-".concat(r.order),r.order),Object(n.a)(e,"align-self-".concat(r.alignSelf),r.alignSelf),e)),w.set(l,d)}(),e(r.tag,Object(c.a)(data,{class:d}),o)}})}}]);