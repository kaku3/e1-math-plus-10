(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{154:function(t,e,r){"use strict";var n=r(153);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=n.a},186:function(t,e,r){"use strict";var n=r(271);e.a=function(t){var e=t.store;t.isHMR||window.onNuxtReady((function(t){Object(n.a)()(e)}))}},233:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6570a8f6",content,!0,{sourceMap:!1})},273:function(t,e,r){"use strict";var n={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-home-circle",title:"ほーむ",to:"/"},{icon:"mdi-playlist-edit",title:"たして１０",to:{name:"game-plus-10",params:{mode:"modeSprint",count:10}}},{icon:"mdi-playlist-edit",title:"ヒトケタス",to:"/game-plus-single"},{icon:"mdi-playlist-edit",title:"ひきざん２０",to:{name:"game-minus-20",params:{mode:"minusSprint",count:10}}},{icon:"mdi-playlist-edit",title:"かけざん９９",to:{name:"game-mul-99",params:{mode:"mul99Sprint",count:10}}},{icon:"mdi-account-box",title:"アカウント",to:"/account"}],miniVariant:!1,title:"小１からのさんすうゲーム"}}},o=r(91),c=r(122),l=r.n(c),f=r(403),d=r(408),m=r(404),h=r(409),v=r(156),y=r(178),O=r(117),R=r(179),j=r(88),k=r(405),S=r(407),w=r(406),_=r(265),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[r("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",t._l(t.items,(function(e,i){return r("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[r("v-list-item-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),r("v-app-bar",{attrs:{color:"light-blue","clipped-left":t.clipped,fixed:"",app:"",dark:""}},[r("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),r("v-toolbar-title",{staticClass:"text-subtitle-1",domProps:{textContent:t._s(t.title)}}),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-main",{staticClass:"grey lighten-2"},[r("v-container",[r("nuxt")],1)],1)],1)}),[],!1,null,null,null);e.a=component.exports;l()(component,{VApp:f.a,VAppBar:d.a,VAppBarNavIcon:m.a,VContainer:h.a,VIcon:v.a,VList:y.a,VListItem:O.a,VListItemAction:R.a,VListItemContent:j.a,VListItemTitle:j.c,VMain:k.a,VNavigationDrawer:S.a,VSpacer:w.a,VToolbarTitle:_.a})},275:function(t,e,r){"use strict";r.r(e);var n=r(19),o=r(34),c=r(35),l=r(31),f=r(16),d=r(23),m=r(13),h=(r(58),r(14),r(30),r(70),r(44));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(f.a)(t);if(e){var o=Object(f.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(l.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function t(){Object(d.a)(this,t),this.name="ゲスト"},R=function(t){Object(c.a)(l,t);var e,r=v(l);function l(){var t;return Object(d.a)(this,l),(t=r.apply(this,arguments)).account=new O,t}return Object(o.a)(l,[{key:"setAccount",value:function(t){this.account=t,console.log(this.account,t)}},{key:"update",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this.setAccount(e),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),l}(h.d);y([h.c],R.prototype,"setAccount",null),y([Object(h.a)({commit:"setAccount"})],R.prototype,"update",null),R=y([Object(h.b)({name:"AccountStore",stateFactory:!0,namespaced:!0})],R),e.default=R},276:function(t,e,r){"use strict";r.r(e);r(70);var n=r(71),o=r(19),c=r(23),l=r(34),f=r(35),d=r(31),m=r(16),h=r(13),v=(r(58),r(14),r(9),r(41),r(32),r(44));function y(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(m.a)(t);if(e){var o=Object(m.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(d.a)(this,r)}}var O=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(h.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},R=function(t){Object(f.a)(d,t);var e,r=y(d);function d(){var t;return Object(c.a)(this,d),(t=r.apply(this,arguments)).scores=[],t.lastScore=null,t}return Object(l.a)(d,[{key:"sprint10Hiscores",get:function(){var t=this.scores.filter((function(t){return"modeSprint-10"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"sprint30Hiscores",get:function(){var t=this.scores.filter((function(t){return"modeSprint-30"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"endressHiscores",get:function(){var t=this.scores.filter((function(t){return"modeEndress"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"singleHiscores",get:function(){var t=this.scores.filter((function(t){return"modeSingle"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"minusSprint10Hiscores",get:function(){var t=this.scores.filter((function(t){return"minusSprint-10"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"minusSprint30Hiscores",get:function(){var t=this.scores.filter((function(t){return"minusSprint-30"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"minusEndressHiscores",get:function(){var t=this.scores.filter((function(t){return"minusEndress"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"mul99Sprint10Hiscores",get:function(){var t=this.scores.filter((function(t){return"mul99Sprint-10"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"mul99Sprint30Hiscores",get:function(){var t=this.scores.filter((function(t){return"mul99Sprint-30"===t.mode})).sort((function(a,b){return a.score-b.score}));return t=t.slice(0,10)}},{key:"mul99EndressHiscores",get:function(){var t=this.scores.filter((function(t){return"mul99Endress"===t.mode})).sort((function(a,b){return b.score-a.score}));return t=t.slice(0,10)}},{key:"setScores",value:function(t){this.scores=t}},{key:"setLastScore",value:function(t){this.lastScore=t}},{key:"addScore",value:(e=Object(o.a)(regeneratorRuntime.mark((function t(e){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:r=[].concat(Object(n.a)(this.scores),[e]),this.setScores(r),this.setLastScore(e);case 3:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),d}(v.d);O([v.c],R.prototype,"setScores",null),O([v.c],R.prototype,"setLastScore",null),O([v.a],R.prototype,"addScore",null),R=O([Object(v.b)({name:"ScoreStore",stateFactory:!0,namespaced:!0})],R),e.default=R},280:function(t,e,r){"use strict";r.r(e);r(70);var n=r(19),o=r(23),c=r(34),l=r(35),f=r(31),d=r(16),m=r(13),h=(r(58),r(14),r(9),r(44));function v(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var r,n=Object(d.a)(t);if(e){var o=Object(d.a)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return Object(f.a)(this,r)}}var y=function(t,e,r,desc){var n,o=arguments.length,c=o<3?e:null===desc?desc=Object.getOwnPropertyDescriptor(e,r):desc;if("object"===("undefined"==typeof Reflect?"undefined":Object(m.a)(Reflect))&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,r,desc);else for(var i=t.length-1;i>=0;i--)(n=t[i])&&(c=(o<3?n(c):o>3?n(e,r,c):n(e,r))||c);return o>3&&c&&Object.defineProperty(e,r,c),c},O=function(t){Object(l.a)(f,t);var e,r=v(f);function f(){var t;return Object(o.a)(this,f),(t=r.apply(this,arguments)).chatReads=[],t}return Object(c.a)(f,[{key:"_updateChatRead",value:function(t){var e=this.chatReads.filter((function(e){return e.room===t.room}));e.length>0?e[0]=t:this.chatReads.push(t)}},{key:"updateChatRead",value:(e=Object(n.a)(regeneratorRuntime.mark((function t(e){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return this._updateChatRead(e),t.abrupt("return",e);case 2:case"end":return t.stop()}}),t,this)}))),function(t){return e.apply(this,arguments)})}]),f}(h.d);y([h.c],O.prototype,"_updateChatRead",null),y([h.a],O.prototype,"updateChatRead",null),O=y([Object(h.b)({name:"ChatStore",stateFactory:!0,namespaced:!0})],O),e.default=O},289:function(t,e,r){r(290),t.exports=r(291)},306:function(t,e,r){"use strict";r.r(e);r(32);var n=r(154);n.a.auth().signInAnonymously().catch((function(t){console.log("[error] Can not signin anonymouse (".concat(t.code,":").concat(t.message,")"))})),e.default=function(t){t.route,t.store,t.redirect;n.a.auth().onAuthStateChanged((function(t){console.log(t)}))}},317:function(t,e,r){"use strict";r(233)},318:function(t,e,r){var n=r(25)(!1);n.push([t.i,"h1[data-v-495dc2cf]{font-size:20px}",""]),t.exports=n},84:function(t,e,r){"use strict";var n={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(r(317),r(91)),c=r(122),l=r.n(c),f=r(403),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{dark:""}},[404===t.error.statusCode?r("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):r("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),r("NuxtLink",{attrs:{to:"/"}},[t._v(" Home page ")])],1)}),[],!1,null,"495dc2cf",null);e.a=component.exports;l()(component,{VApp:f.a})}},[[289,43,7,44]]]);