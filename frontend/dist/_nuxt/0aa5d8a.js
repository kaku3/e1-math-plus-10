(window.webpackJsonp=window.webpackJsonp||[]).push([[41,14,15],{415:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(418),o=n(3),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),h=Object(o.g)("v-card__title");r.a},426:function(t,e,n){var content=n(571);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6c7c72fe",content,!0,{sourceMap:!1})},428:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("69f95668",content,!0,{sourceMap:!1})},570:function(t,e,n){"use strict";n(426)},571:function(t,e,n){var r=n(25)(!1);r.push([t.i,".rankings>*[data-v-e97e0b08]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-e97e0b08]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-e97e0b08],.rankings.rank-1 .no[data-v-e97e0b08]{font-size:1.8rem}.rankings.rank-2 .name[data-v-e97e0b08],.rankings.rank-2 .no[data-v-e97e0b08]{font-size:1.3rem}.rankings.rank-3 .name[data-v-e97e0b08],.rankings.rank-3 .no[data-v-e97e0b08]{font-size:1rem}.rankings.top10[data-v-e97e0b08]{font-weight:700}.rankings.entry[data-v-e97e0b08]{background-color:#f0f4c3}",""]),t.exports=r},579:function(t,e,n){"use strict";n.r(e);n(41),n(22),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(19),o=(n(58),n(36),n(63),n(30),n(279),n(32),n(2)),c=n(154),l=n(44),d=n(277);function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,q,r,o,l,d,f,m,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.a.firestore(),q=null,t.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",r).orderBy("score",t.orderBy).limit(100)):q=n.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,f=1,m=h(t.rankings);try{for(m.s();!(v=m.n()).done;)(j=v.value).score!=l&&(l=j.score,d=f),j.no=d,f++}catch(t){m.e(t)}finally{m.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode||"minusEndress"===this.gameMode||"mul99Endress"===this.gameMode?"desc":"asc"}}}),v=(n(570),n(91)),j=n(122),y=n.n(j),_=n(194),k=n(418),w=n(415),x=n(733),O=n(156),C=n(734),S=n(410),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-icon",[t._v("mdi-crown")]),t._v(" "),n("h3",[t._v("らんきんぐ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),n("v-card-text",t._l(t.rankings,(function(e,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"e97e0b08",null);e.default=component.exports;y()(component,{VBtn:_.a,VCard:k.a,VCardText:w.b,VCardTitle:w.c,VCol:x.a,VIcon:O.a,VRow:C.a,VSpacer:S.a})},580:function(t,e,n){"use strict";n.r(e);var r={extends:n(602).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=n(91),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},581:function(t,e,n){"use strict";n.d(e,"a",(function(){return d}));n(41),n(22),n(30),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(23),o=n(34);n(9),n(63);function c(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){d=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var d=function(){function t(){Object(r.a)(this,t)}return Object(o.a)(t,null,[{key:"getHistoryDates",value:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);return t}},{key:"sprintHistory",value:function(e,n,r){var o=t.getSprintHistory(e,r),c=o._counts,l=o._scores;return t.chartObject(n,l,c)}},{key:"termFilteredScoreEntities",value:function(t,e,n){if(0==n.length)return[];var r=n[0].time,o=n[n.length-1].time1;return e.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=r})).filter((function(t){return t.createdAt<o}))}},{key:"getSprintHistory",value:function(t,e){var n,r=[],o=[],l=c(e);try{var d=function(){var e=n.value,c=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));r.push(c.length),c.length>0?o.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):o.push(0)};for(l.s();!(n=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}return{_counts:r,_scores:o}}},{key:"getEndressHistory",value:function(t,e){var n,r=[],o=[],l=c(e);try{var d=function(){var e=n.value,c=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));r.push(c.length),c.length>0?o.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):o.push(0)};for(l.s();!(n=l.n()).done;)d()}catch(t){l.e(t)}finally{l.f()}return{_counts:r,_scores:o}}},{key:"chartObject",value:function(t,e,n){return{labels:t,datasets:[{label:"じかん",data:e,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},{key:"chartOptions",value:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}]),t}()},582:function(t,e,n){"use strict";n(428)},583:function(t,e,n){var r=n(25)(!1);r.push([t.i,".chat-component[data-v-c7b4ab74]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-c7b4ab74]{margin-right:.5rem;margin-bottom:.5rem}#log-container[data-v-c7b4ab74]{width:100vw;max-height:calc(100vh - 172px);overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-c7b4ab74]{display:block}#log-container>.log-item>.name[data-v-c7b4ab74]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-c7b4ab74]{display:inline-block;padding:.5rem;text-align:left}#log-container>.log-item.me>.comment[data-v-c7b4ab74]{background-color:#c5e1a5}#log-container .input-form[data-v-c7b4ab74]{width:90vw}",""]),t.exports=r},584:function(t,e,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5276b867",content,!0,{sourceMap:!1})},585:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=r},590:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(58),n(63),n(12),n(30),n(9),n(2)),c=n(44),l=n(277),d=n(282),h=n(154),f=o.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;(console.log(this.room),this.room)&&h.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(r=e.$el.querySelector("#log-container"))&&(r.scrollTop=r.scrollHeight);case 4:case"end":return n.stop()}}),n)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)h.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(l.default,this.$store)},chatStore:function(){return Object(c.e)(d.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),m=(n(582),n(91)),v=n(122),j=n.n(v),y=(n(8),n(14),n(11),n(17),n(106)),_=n(4),k=(n(36),n(584),n(156)),w=n(40),x=n(45),O=n(66),C=o.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),S=n(123),M=n(15),z=n(3);function A(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var D=Object(M.a)(w.a,Object(S.b)(["left","bottom"]),x.a,O.a,C).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?A(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):A(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(z.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(z.m)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(k.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(z.m)(this)],r=this.$attrs,o=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(y.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},n)}}),R=n(194),E=n(418),B=n(188),$=n(738),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component"},[n("v-slide-y-reverse-transition",[t.show?n("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?n("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[n("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[n("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),n("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[n("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"c7b4ab74",null);e.default=component.exports;j()(component,{VBadge:D,VBtn:R.a,VCard:E.a,VIcon:k.a,VSlideYReverseTransition:B.d,VTextField:$.a})},596:function(t,e,n){var map={"./af":432,"./af.js":432,"./ar":433,"./ar-dz":434,"./ar-dz.js":434,"./ar-kw":435,"./ar-kw.js":435,"./ar-ly":436,"./ar-ly.js":436,"./ar-ma":437,"./ar-ma.js":437,"./ar-sa":438,"./ar-sa.js":438,"./ar-tn":439,"./ar-tn.js":439,"./ar.js":433,"./az":440,"./az.js":440,"./be":441,"./be.js":441,"./bg":442,"./bg.js":442,"./bm":443,"./bm.js":443,"./bn":444,"./bn-bd":445,"./bn-bd.js":445,"./bn.js":444,"./bo":446,"./bo.js":446,"./br":447,"./br.js":447,"./bs":448,"./bs.js":448,"./ca":449,"./ca.js":449,"./cs":450,"./cs.js":450,"./cv":451,"./cv.js":451,"./cy":452,"./cy.js":452,"./da":453,"./da.js":453,"./de":454,"./de-at":455,"./de-at.js":455,"./de-ch":456,"./de-ch.js":456,"./de.js":454,"./dv":457,"./dv.js":457,"./el":458,"./el.js":458,"./en-au":459,"./en-au.js":459,"./en-ca":460,"./en-ca.js":460,"./en-gb":461,"./en-gb.js":461,"./en-ie":462,"./en-ie.js":462,"./en-il":463,"./en-il.js":463,"./en-in":464,"./en-in.js":464,"./en-nz":465,"./en-nz.js":465,"./en-sg":466,"./en-sg.js":466,"./eo":467,"./eo.js":467,"./es":468,"./es-do":469,"./es-do.js":469,"./es-mx":470,"./es-mx.js":470,"./es-us":471,"./es-us.js":471,"./es.js":468,"./et":472,"./et.js":472,"./eu":473,"./eu.js":473,"./fa":474,"./fa.js":474,"./fi":475,"./fi.js":475,"./fil":476,"./fil.js":476,"./fo":477,"./fo.js":477,"./fr":478,"./fr-ca":479,"./fr-ca.js":479,"./fr-ch":480,"./fr-ch.js":480,"./fr.js":478,"./fy":481,"./fy.js":481,"./ga":482,"./ga.js":482,"./gd":483,"./gd.js":483,"./gl":484,"./gl.js":484,"./gom-deva":485,"./gom-deva.js":485,"./gom-latn":486,"./gom-latn.js":486,"./gu":487,"./gu.js":487,"./he":488,"./he.js":488,"./hi":489,"./hi.js":489,"./hr":490,"./hr.js":490,"./hu":491,"./hu.js":491,"./hy-am":492,"./hy-am.js":492,"./id":493,"./id.js":493,"./is":494,"./is.js":494,"./it":495,"./it-ch":496,"./it-ch.js":496,"./it.js":495,"./ja":497,"./ja.js":497,"./jv":498,"./jv.js":498,"./ka":499,"./ka.js":499,"./kk":500,"./kk.js":500,"./km":501,"./km.js":501,"./kn":502,"./kn.js":502,"./ko":503,"./ko.js":503,"./ku":504,"./ku.js":504,"./ky":505,"./ky.js":505,"./lb":506,"./lb.js":506,"./lo":507,"./lo.js":507,"./lt":508,"./lt.js":508,"./lv":509,"./lv.js":509,"./me":510,"./me.js":510,"./mi":511,"./mi.js":511,"./mk":512,"./mk.js":512,"./ml":513,"./ml.js":513,"./mn":514,"./mn.js":514,"./mr":515,"./mr.js":515,"./ms":516,"./ms-my":517,"./ms-my.js":517,"./ms.js":516,"./mt":518,"./mt.js":518,"./my":519,"./my.js":519,"./nb":520,"./nb.js":520,"./ne":521,"./ne.js":521,"./nl":522,"./nl-be":523,"./nl-be.js":523,"./nl.js":522,"./nn":524,"./nn.js":524,"./oc-lnc":525,"./oc-lnc.js":525,"./pa-in":526,"./pa-in.js":526,"./pl":527,"./pl.js":527,"./pt":528,"./pt-br":529,"./pt-br.js":529,"./pt.js":528,"./ro":530,"./ro.js":530,"./ru":531,"./ru.js":531,"./sd":532,"./sd.js":532,"./se":533,"./se.js":533,"./si":534,"./si.js":534,"./sk":535,"./sk.js":535,"./sl":536,"./sl.js":536,"./sq":537,"./sq.js":537,"./sr":538,"./sr-cyrl":539,"./sr-cyrl.js":539,"./sr.js":538,"./ss":540,"./ss.js":540,"./sv":541,"./sv.js":541,"./sw":542,"./sw.js":542,"./ta":543,"./ta.js":543,"./te":544,"./te.js":544,"./tet":545,"./tet.js":545,"./tg":546,"./tg.js":546,"./th":547,"./th.js":547,"./tk":548,"./tk.js":548,"./tl-ph":549,"./tl-ph.js":549,"./tlh":550,"./tlh.js":550,"./tr":551,"./tr.js":551,"./tzl":552,"./tzl.js":552,"./tzm":553,"./tzm-latn":554,"./tzm-latn.js":554,"./tzm.js":553,"./ug-cn":555,"./ug-cn.js":555,"./uk":556,"./uk.js":556,"./ur":557,"./ur.js":557,"./uz":558,"./uz-latn":559,"./uz-latn.js":559,"./uz.js":558,"./vi":560,"./vi.js":560,"./x-pseudo":561,"./x-pseudo.js":561,"./yo":562,"./yo.js":562,"./zh-cn":563,"./zh-cn.js":563,"./zh-hk":564,"./zh-hk.js":564,"./zh-mo":565,"./zh-mo.js":565,"./zh-tw":566,"./zh-tw.js":566};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=596},744:function(t,e,n){"use strict";n.r(e);n(72),n(64),n(38),n(63),n(32);var r=n(2),o=n(581),c=n(44),l=n(278),d=n(580),h=r.a.extend({components:{HistoryChart:d.default},head:function(){return{title:"ヒトケタス"}},data:function(){return{showChart:!1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){var t=this;window.setTimeout((function(){t.initHistoryDates(),t.singleHistory()}),0)},methods:{initHistoryDates:function(){this.historyDates=o.a.getHistoryDates()},startGame:function(){this.$router.replace({path:"/game-plus-single/modeSingle"})},singleHistory:function(){var t=o.a.getEndressHistory(this.singleScores,this.historyDates),e=t._counts,n=t._scores;return e.reduce((function(a,t){return a+t}))>0&&(this.showChart=!0),o.a.chartObject(this.chartDates,n,e)}},computed:{scoreStore:function(){return Object(c.e)(l.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},singleScores:function(){return o.a.termFilteredScoreEntities("modeSingle",this.scores,this.historyDates)},chartOptions:function(){return o.a.chartOptions()}}}),f=n(91),m=n(122),v=n.n(m),j=n(194),y=n(418),_=n(415),k=n(733),w=n(156),x=n(734),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"text-h5",attrs:{cols:"mr-auto"}},[t._v("\n      ヒトケタス\n    ")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{outlined:"",to:"/"}},[n("v-icon",[t._v("mdi-home-circle")]),t._v("ほーむ\n      ")],1)],1)],1),t._v(" "),n("v-card",[t.showChart?n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.singleHistory(),options:t.chartOptions}}):t._e(),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"mr-auto"}},[t._v("ひとけたのすうじをたして、こたえにする")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSingle")}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSingle",questionCount:-1}})],1),t._v(" "),n("Chat",{attrs:{room:"all"}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Ranking:n(579).default,Chat:n(590).default}),v()(component,{VBtn:j.a,VCard:y.a,VCardText:_.b,VCol:k.a,VIcon:w.a,VRow:x.a})}}]);