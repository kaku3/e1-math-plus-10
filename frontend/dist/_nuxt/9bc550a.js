(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{173:function(t,e,r){"use strict";var n=r(257);e.a=function(t){var e=t.store;t.isHMR||window.onNuxtReady((function(t){Object(n.a)()(e)}))}},221:function(t,e,r){var content=r(298);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6570a8f6",content,!0,{sourceMap:!1})},259:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-home-circle",title:"ほーむ",to:"/"},{icon:"mdi-playlist-edit",title:"たして１０",to:{name:"game-plus-10",params:{mode:"modeSprint",count:10}}},{icon:"mdi-playlist-edit",title:"ヒトケタス",to:"/game-plus-single"},{icon:"mdi-account-box",title:"アカウント",to:"/account"}],miniVariant:!1,title:"小１さんすうゲーム"}}},o=r(84),c=r(114),l=r.n(c),f=r(385),d=r(391),v=r(386),m=r(392),h=r(387),y=r(165),O=r(166),j=r(109),_=r(167),w=r(83),R=r(388),x=r(390),k=r(389),S=r(253),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",{staticClass:"grey lighten-2"},[r("v-container",[r("nuxt")],1)],1),t._v(" "),r("v-footer",{attrs:{absolute:!t.fixed,app:""}},[r("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VAppBar:d.a,VAppBarNavIcon:v.a,VContainer:m.a,VFooter:h.a,VIcon:y.a,VList:O.a,VListItem:j.a,VListItemAction:_.a,VListItemContent:w.a,VListItemTitle:w.b,VMain:R.a,VNavigationDrawer:x.a,VSpacer:k.a,VToolbarTitle:S.a})},263:function(t,e,r){"use strict";r.r(e);var n=r(23),o=r(32),c=r(33),l=r(28),f=r(16),d=r(22),v=r(14),m=(r(70),r(11),r(24),r(67),r(51));function h(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(v.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function t(){Object(d.a)(this,t),this.name="ゲスト"},j=function(t){Object(c.a)(l,t);var e,r=h(l);function l(){var t;return Object(d.a)(this,l),(t=r.apply(this,arguments)).account=new O,t}return Object(o.a)(l,[{key:"setAccount",value:function(t){this.account=t,console.log(this.account,t)}},{key:"update",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setAccount(e),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),l}(m.d);y([m.c],j.prototype,"setAccount",null),y([Object(m.a)({commit:"setAccount"})],j.prototype,"update",null),j=y([Object(m.b)({name:"AccountStore",stateFactory:!0,namespaced:!0})],j),e.default=j},264:function(t,e,r){"use strict";r.r(e);r(67);var n=r(62),o=r(23),c=r(22),l=r(32),f=r(33),d=r(28),v=r(16),m=r(14),h=(r(70),r(11),r(6),r(35),r(26),r(51));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(v.a)(t);if(e){var o=Object(v.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},j=function(t){Object(f.a)(d,t);var e,r=y(d);function d(){var t;return Object(c.a)(this,d),(t=r.apply(this,arguments)).scores=[],t.lastScore=null,t}return Object(l.a)(d,[{key:"sprint10Hiscores",get:function(){var t=this.scores.filter((function(t){return"modeSprint-10"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"sprint30Hiscores",get:function(){var t=this.scores.filter((function(t){return"modeSprint-30"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"endressHiscores",get:function(){var t=this.scores.filter((function(t){return"modeEndress"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"singleHiscores",get:function(){var t=this.scores.filter((function(t){return"modeSingle"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"setScores",value:function(t){this.scores=t}},{key:"setLastScore",value:function(t){this.lastScore=t}},{key:"addScore",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[].concat(Object(n.a)(this.scores),[e]),this.setScores(r),this.setLastScore(e);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),d}(h.d);O([h.c],j.prototype,"setScores",null),O([h.c],j.prototype,"setLastScore",null),O([h.a],j.prototype,"addScore",null),j=O([Object(h.b)({name:"ScoreStore",stateFactory:!0,namespaced:!0})],j),e.default=j},273:function(t,e,r){r(274),t.exports=r(275)},297:function(t,e,r){"use strict";r(221)},298:function(t,e,r){var n=r(17)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},78:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(297),r(84)),c=r(114),l=r.n(c),f=r(385),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[273,21,6,22]]]);