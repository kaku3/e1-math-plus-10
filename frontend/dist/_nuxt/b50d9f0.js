(window.webpackJsonp=window.webpackJsonp||[]).push([[72,23,24],{1002:function(t,e,n){"use strict";n.r(e);n(73),n(65),n(39),n(64),n(32);var r=n(2),o=n(635),c=n(37),l=n(287),d=n(633),f=r.a.extend({components:{HistoryChart:d.default},head:function(){return{title:"ヒトケタス"}},data:function(){return{showChart:!1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){var t=this;window.setTimeout((function(){t.initHistoryDates(),t.singleHistory()}),0)},methods:{initHistoryDates:function(){this.historyDates=o.a.getHistoryDates()},startGame:function(){this.$router.replace({path:"/game-plus-single/modeSingle"})},singleHistory:function(){var t=o.a.getEndressHistory(this.singleScores,this.historyDates),e=t._counts,n=t._scores;return e.reduce((function(a,t){return a+t}))>0&&(this.showChart=!0),o.a.chartObject(this.chartDates,n,e)}},computed:{scoreStore:function(){return Object(c.e)(l.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},singleScores:function(){return o.a.termFilteredScoreEntities("modeSingle",this.scores,this.historyDates)},chartOptions:function(){return o.a.chartOptions()}}}),h=n(80),m=n(92),v=n.n(m),j=n(200),y=n(426),_=n(422),k=n(991),w=n(160),x=n(992),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"text-h5",attrs:{cols:"mr-auto"}},[t._v("\n      ヒトケタス\n    ")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{outlined:"",to:"/"}},[n("v-icon",[t._v("mdi-home-circle")]),t._v("ほーむ\n      ")],1)],1)],1),t._v(" "),n("v-card",{staticClass:"green lighten-5"},[t.showChart?n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.singleHistory(),options:t.chartOptions}}):t._e(),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"mr-auto"}},[t._v("ひとけたのすうじをたして、こたえにする")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSingle")}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSingle",questionCount:-1}})],1),t._v(" "),n("Chat",{attrs:{room:"all"}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Ranking:n(632).default,Chat:n(463).default}),v()(component,{VBtn:j.a,VCard:y.a,VCardText:_.b,VCol:k.a,VIcon:w.a,VRow:x.a})},422:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f}));var r=n(426),o=n(3),c=Object(o.h)("v-card__actions"),l=Object(o.h)("v-card__subtitle"),d=Object(o.h)("v-card__text"),f=Object(o.h)("v-card__title");r.a},438:function(t,e,n){var content=n(459);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("176ff17c",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(613);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("790e65ca",content,!0,{sourceMap:!1})},458:function(t,e,n){"use strict";n(438)},459:function(t,e,n){var r=n(22)(!1);r.push([t.i,".chat-component[data-v-c092df9e]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-c092df9e]{margin-right:.5rem;margin-bottom:1.5rem}#log-container[data-v-c092df9e]{width:100vw;max-height:calc(100vh - 172px);overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-c092df9e]{display:block}#log-container>.log-item>.name[data-v-c092df9e]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-c092df9e]{display:inline-block;padding:.5rem;text-align:left}#log-container>.log-item.me>.comment[data-v-c092df9e]{background-color:#c5e1a5}#log-container .input-form[data-v-c092df9e]{width:90vw}",""]),t.exports=r},460:function(t,e,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5276b867",content,!0,{sourceMap:!1})},461:function(t,e,n){var r=n(22)(!1);r.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=r},463:function(t,e,n){"use strict";n.r(e);var r=n(18),o=(n(59),n(64),n(12),n(30),n(9),n(2)),c=n(37),l=n(286),d=n(290),f=n(158),h=o.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;(console.log(this.room),this.room)&&f.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(r=e.$el.querySelector("#log-container"))&&(r.scrollTop=r.scrollHeight);case 4:case"end":return n.stop()}}),n)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)f.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(l.default,this.$store)},chatStore:function(){return Object(c.e)(d.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),m=(n(458),n(80)),v=n(92),j=n.n(v),y=(n(8),n(14),n(11),n(17),n(108)),_=n(4),k=(n(36),n(460),n(160)),w=n(40),x=n(45),C=n(66),O=o.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),S=n(124),M=n(15),z=n(3);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var D=Object(M.a)(w.a,Object(S.b)(["left","bottom"]),x.a,C.a,O).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(z.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(z.n)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(k.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(z.n)(this)],r=this.$attrs,o=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(y.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},n)}}),R=n(200),E=n(426),B=n(194),$=n(1010),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component"},[n("v-slide-y-reverse-transition",[t.show?n("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?n("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[n("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[n("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),n("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[n("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"c092df9e",null);e.default=component.exports;j()(component,{VBadge:D,VBtn:R.a,VCard:E.a,VIcon:k.a,VSlideYReverseTransition:B.e,VTextField:$.a})},612:function(t,e,n){"use strict";n(456)},613:function(t,e,n){var r=n(22)(!1);r.push([t.i,".rankings>*[data-v-31c13230]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-31c13230]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-31c13230],.rankings.rank-1 .no[data-v-31c13230]{font-size:1.8rem}.rankings.rank-2 .name[data-v-31c13230],.rankings.rank-2 .no[data-v-31c13230]{font-size:1.3rem}.rankings.rank-3 .name[data-v-31c13230],.rankings.rank-3 .no[data-v-31c13230]{font-size:1rem}.rankings.top10[data-v-31c13230]{font-weight:700}.rankings.entry[data-v-31c13230]{background-color:#f0f4c3}.rankings:nth-child(n+21)>*[data-v-31c13230]{padding:.25rem .5rem;font-size:.6rem}.rankings:nth-child(n+51)>*[data-v-31c13230]{padding:.1rem .5rem;font-size:.5rem}",""]),t.exports=r},632:function(t,e,n){"use strict";n.r(e);n(43),n(24),n(52),n(41),n(8),n(50),n(57),n(42);var r=n(18),o=(n(59),n(36),n(64),n(30),n(285),n(32),n(2)),c=n(158),l=n(37),d=n(286);function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,q,r,o,l,d,h,m,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.a.firestore(),q=null,t.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",r).orderBy("score",t.orderBy).limit(100)):q=n.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,h=1,m=f(t.rankings);try{for(m.s();!(v=m.n()).done;)(j=v.value).score!=l&&(l=j.score,d=h),j.no=d,h++}catch(t){m.e(t)}finally{m.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode||"minusEndress"===this.gameMode||"mul99Endress"===this.gameMode?"desc":"asc"}}}),v=(n(612),n(80)),j=n(92),y=n.n(j),_=n(200),k=n(426),w=n(422),x=n(991),C=n(160),O=n(992),S=n(418),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-icon",[t._v("mdi-crown")]),t._v(" "),n("h3",[t._v("らんきんぐ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),n("v-card-text",t._l(t.rankings,(function(e,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"31c13230",null);e.default=component.exports;y()(component,{VBtn:_.a,VCard:k.a,VCardText:w.b,VCardTitle:w.c,VCol:x.a,VIcon:C.a,VRow:O.a,VSpacer:S.a})},633:function(t,e,n){"use strict";n.r(e);var r={extends:n(675).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=n(80),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},635:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(43),n(24),n(30),n(52),n(41),n(8),n(50),n(57),n(42);var r=n(25),o=n(33);n(9),n(64);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"getHistoryDates",value:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);return t}},{key:"sprintHistory",value:function(e,n,r){var o=t.getSprintHistory(e,r),c=o._counts,l=o._scores;return t.chartObject(n,l,c)}},{key:"termFilteredScoreEntities",value:function(t,e,n){if(0==n.length)return[];var r=n[0].time,o=n[n.length-1].time1;return e.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=r})).filter((function(t){return t.createdAt<o}))}},{key:"getSprintHistory",value:function(t,e){var n,r=[],o=[],l=c(e);try{var d=function(){var e=n.value,c=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));r.push(c.length),c.length>0?o.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):o.push(0)};for(l.s();!(n=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}return{_counts:r,_scores:o}}},{key:"getEndressHistory",value:function(t,e){var n,r=[],o=[],l=c(e);try{var d=function(){var e=n.value,c=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));r.push(c.length),c.length>0?o.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):o.push(0)};for(l.s();!(n=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}return{_counts:r,_scores:o}}},{key:"chartObject",value:function(t,e,n){return{labels:t,datasets:[{label:"じかん",data:e,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},{key:"chartOptions",value:function(){var t="#888",e="#ddd";return{responsive:!0,maintainAspectRatio:!1,legend:{fontColor:t},scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left",ticks:{fontColor:t},gridLines:{display:!1,color:e}},{id:"y-axis-2",type:"linear",position:"right",ticks:{fontColor:t},gridLines:{display:!1,color:e}}],xAxes:[{ticks:{fontColor:t},gridLines:{color:"#ddd"}}]}}}}]),t}()},671:function(t,e,n){var map={"./af":474,"./af.js":474,"./ar":475,"./ar-dz":476,"./ar-dz.js":476,"./ar-kw":477,"./ar-kw.js":477,"./ar-ly":478,"./ar-ly.js":478,"./ar-ma":479,"./ar-ma.js":479,"./ar-sa":480,"./ar-sa.js":480,"./ar-tn":481,"./ar-tn.js":481,"./ar.js":475,"./az":482,"./az.js":482,"./be":483,"./be.js":483,"./bg":484,"./bg.js":484,"./bm":485,"./bm.js":485,"./bn":486,"./bn-bd":487,"./bn-bd.js":487,"./bn.js":486,"./bo":488,"./bo.js":488,"./br":489,"./br.js":489,"./bs":490,"./bs.js":490,"./ca":491,"./ca.js":491,"./cs":492,"./cs.js":492,"./cv":493,"./cv.js":493,"./cy":494,"./cy.js":494,"./da":495,"./da.js":495,"./de":496,"./de-at":497,"./de-at.js":497,"./de-ch":498,"./de-ch.js":498,"./de.js":496,"./dv":499,"./dv.js":499,"./el":500,"./el.js":500,"./en-au":501,"./en-au.js":501,"./en-ca":502,"./en-ca.js":502,"./en-gb":503,"./en-gb.js":503,"./en-ie":504,"./en-ie.js":504,"./en-il":505,"./en-il.js":505,"./en-in":506,"./en-in.js":506,"./en-nz":507,"./en-nz.js":507,"./en-sg":508,"./en-sg.js":508,"./eo":509,"./eo.js":509,"./es":510,"./es-do":511,"./es-do.js":511,"./es-mx":512,"./es-mx.js":512,"./es-us":513,"./es-us.js":513,"./es.js":510,"./et":514,"./et.js":514,"./eu":515,"./eu.js":515,"./fa":516,"./fa.js":516,"./fi":517,"./fi.js":517,"./fil":518,"./fil.js":518,"./fo":519,"./fo.js":519,"./fr":520,"./fr-ca":521,"./fr-ca.js":521,"./fr-ch":522,"./fr-ch.js":522,"./fr.js":520,"./fy":523,"./fy.js":523,"./ga":524,"./ga.js":524,"./gd":525,"./gd.js":525,"./gl":526,"./gl.js":526,"./gom-deva":527,"./gom-deva.js":527,"./gom-latn":528,"./gom-latn.js":528,"./gu":529,"./gu.js":529,"./he":530,"./he.js":530,"./hi":531,"./hi.js":531,"./hr":532,"./hr.js":532,"./hu":533,"./hu.js":533,"./hy-am":534,"./hy-am.js":534,"./id":535,"./id.js":535,"./is":536,"./is.js":536,"./it":537,"./it-ch":538,"./it-ch.js":538,"./it.js":537,"./ja":539,"./ja.js":539,"./jv":540,"./jv.js":540,"./ka":541,"./ka.js":541,"./kk":542,"./kk.js":542,"./km":543,"./km.js":543,"./kn":544,"./kn.js":544,"./ko":545,"./ko.js":545,"./ku":546,"./ku.js":546,"./ky":547,"./ky.js":547,"./lb":548,"./lb.js":548,"./lo":549,"./lo.js":549,"./lt":550,"./lt.js":550,"./lv":551,"./lv.js":551,"./me":552,"./me.js":552,"./mi":553,"./mi.js":553,"./mk":554,"./mk.js":554,"./ml":555,"./ml.js":555,"./mn":556,"./mn.js":556,"./mr":557,"./mr.js":557,"./ms":558,"./ms-my":559,"./ms-my.js":559,"./ms.js":558,"./mt":560,"./mt.js":560,"./my":561,"./my.js":561,"./nb":562,"./nb.js":562,"./ne":563,"./ne.js":563,"./nl":564,"./nl-be":565,"./nl-be.js":565,"./nl.js":564,"./nn":566,"./nn.js":566,"./oc-lnc":567,"./oc-lnc.js":567,"./pa-in":568,"./pa-in.js":568,"./pl":569,"./pl.js":569,"./pt":570,"./pt-br":571,"./pt-br.js":571,"./pt.js":570,"./ro":572,"./ro.js":572,"./ru":573,"./ru.js":573,"./sd":574,"./sd.js":574,"./se":575,"./se.js":575,"./si":576,"./si.js":576,"./sk":577,"./sk.js":577,"./sl":578,"./sl.js":578,"./sq":579,"./sq.js":579,"./sr":580,"./sr-cyrl":581,"./sr-cyrl.js":581,"./sr.js":580,"./ss":582,"./ss.js":582,"./sv":583,"./sv.js":583,"./sw":584,"./sw.js":584,"./ta":585,"./ta.js":585,"./te":586,"./te.js":586,"./tet":587,"./tet.js":587,"./tg":588,"./tg.js":588,"./th":589,"./th.js":589,"./tk":590,"./tk.js":590,"./tl-ph":591,"./tl-ph.js":591,"./tlh":592,"./tlh.js":592,"./tr":593,"./tr.js":593,"./tzl":594,"./tzl.js":594,"./tzm":595,"./tzm-latn":596,"./tzm-latn.js":596,"./tzm.js":595,"./ug-cn":597,"./ug-cn.js":597,"./uk":598,"./uk.js":598,"./ur":599,"./ur.js":599,"./uz":600,"./uz-latn":601,"./uz-latn.js":601,"./uz.js":600,"./vi":602,"./vi.js":602,"./x-pseudo":603,"./x-pseudo.js":603,"./yo":604,"./yo.js":604,"./zh-cn":605,"./zh-cn.js":605,"./zh-hk":606,"./zh-hk.js":606,"./zh-mo":607,"./zh-mo.js":607,"./zh-tw":608,"./zh-tw.js":608};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=671}}]);