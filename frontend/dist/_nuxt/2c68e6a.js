(window.webpackJsonp=window.webpackJsonp||[]).push([[36,13,14],{411:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return h}));var r=n(413),o=n(3),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),h=Object(o.g)("v-card__title");r.a},422:function(t,e,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ea6358e",content,!0,{sourceMap:!1})},423:function(t,e,n){var content=n(579);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("69f95668",content,!0,{sourceMap:!1})},566:function(t,e,n){"use strict";n(422)},567:function(t,e,n){var r=n(25)(!1);r.push([t.i,".rankings>*[data-v-08c3beb3]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-08c3beb3]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-08c3beb3],.rankings.rank-1 .no[data-v-08c3beb3]{font-size:1.8rem}.rankings.rank-2 .name[data-v-08c3beb3],.rankings.rank-2 .no[data-v-08c3beb3]{font-size:1.3rem}.rankings.rank-3 .name[data-v-08c3beb3],.rankings.rank-3 .no[data-v-08c3beb3]{font-size:1rem}.rankings.top10[data-v-08c3beb3]{font-weight:700}.rankings.entry[data-v-08c3beb3]{background-color:#f0f4c3}",""]),t.exports=r},576:function(t,e,n){"use strict";n.r(e);n(41),n(22),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(19),o=(n(58),n(36),n(63),n(30),n(277),n(32),n(2)),c=n(154),l=n(44),d=n(275);function h(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,q,r,o,l,d,f,m,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.a.firestore(),q=null,t.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",r).orderBy("score",t.orderBy).limit(100)):q=n.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,f=1,m=h(t.rankings);try{for(m.s();!(v=m.n()).done;)(j=v.value).score!=l&&(l=j.score,d=f),j.no=d,f++}catch(t){m.e(t)}finally{m.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode||"minusEndress"===this.gameMode?"desc":"asc"}}}),v=(n(566),n(91)),j=n(122),y=n.n(j),_=n(193),w=n(413),k=n(411),x=n(713),C=n(156),O=n(714),S=n(406),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-icon",[t._v("mdi-crown")]),t._v(" "),n("h3",[t._v("らんきんぐ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),n("v-card-text",t._l(t.rankings,(function(e,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"08c3beb3",null);e.default=component.exports;y()(component,{VBtn:_.a,VCard:w.a,VCardText:k.b,VCardTitle:k.c,VCol:x.a,VIcon:C.a,VRow:O.a,VSpacer:S.a})},577:function(t,e,n){"use strict";n.r(e);var r={extends:n(598).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=n(91),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},578:function(t,e,n){"use strict";n(423)},579:function(t,e,n){var r=n(25)(!1);r.push([t.i,".chat-component[data-v-c7b4ab74]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-c7b4ab74]{margin-right:.5rem;margin-bottom:.5rem}#log-container[data-v-c7b4ab74]{width:100vw;max-height:calc(100vh - 172px);overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-c7b4ab74]{display:block}#log-container>.log-item>.name[data-v-c7b4ab74]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-c7b4ab74]{display:inline-block;padding:.5rem;text-align:left}#log-container>.log-item.me>.comment[data-v-c7b4ab74]{background-color:#c5e1a5}#log-container .input-form[data-v-c7b4ab74]{width:90vw}",""]),t.exports=r},580:function(t,e,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5276b867",content,!0,{sourceMap:!1})},581:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=r},584:function(t,e,n){"use strict";n.r(e);var r=n(19),o=(n(58),n(63),n(12),n(30),n(9),n(2)),c=n(44),l=n(275),d=n(280),h=n(154),f=o.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;(console.log(this.room),this.room)&&h.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(r=e.$el.querySelector("#log-container"))&&(r.scrollTop=r.scrollHeight);case 4:case"end":return n.stop()}}),n)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)h.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(l.default,this.$store)},chatStore:function(){return Object(c.e)(d.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),m=(n(578),n(91)),v=n(122),j=n.n(v),y=(n(8),n(14),n(11),n(17),n(106)),_=n(4),w=(n(36),n(580),n(156)),k=n(40),x=n(45),C=n(66),O=o.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),S=n(123),z=n(15),M=n(3);function D(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var R=Object(z.a)(k.a,Object(S.b)(["left","bottom"]),x.a,C.a,O).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?D(Object(source),!0).forEach((function(e){Object(_.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):D(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(M.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(M.m)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(w.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(M.m)(this)],r=this.$attrs,o=(r["aria-atomic"],r["aria-label"],r["aria-live"],r.role,r.title,Object(y.a)(r,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:o,class:this.classes},n)}}),A=n(193),B=n(413),$=n(187),E=n(718),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component"},[n("v-slide-y-reverse-transition",[t.show?n("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?n("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[n("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[n("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),n("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[n("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"c7b4ab74",null);e.default=component.exports;j()(component,{VBadge:R,VBtn:A.a,VCard:B.a,VIcon:w.a,VSlideYReverseTransition:$.d,VTextField:E.a})},592:function(t,e,n){var map={"./af":428,"./af.js":428,"./ar":429,"./ar-dz":430,"./ar-dz.js":430,"./ar-kw":431,"./ar-kw.js":431,"./ar-ly":432,"./ar-ly.js":432,"./ar-ma":433,"./ar-ma.js":433,"./ar-sa":434,"./ar-sa.js":434,"./ar-tn":435,"./ar-tn.js":435,"./ar.js":429,"./az":436,"./az.js":436,"./be":437,"./be.js":437,"./bg":438,"./bg.js":438,"./bm":439,"./bm.js":439,"./bn":440,"./bn-bd":441,"./bn-bd.js":441,"./bn.js":440,"./bo":442,"./bo.js":442,"./br":443,"./br.js":443,"./bs":444,"./bs.js":444,"./ca":445,"./ca.js":445,"./cs":446,"./cs.js":446,"./cv":447,"./cv.js":447,"./cy":448,"./cy.js":448,"./da":449,"./da.js":449,"./de":450,"./de-at":451,"./de-at.js":451,"./de-ch":452,"./de-ch.js":452,"./de.js":450,"./dv":453,"./dv.js":453,"./el":454,"./el.js":454,"./en-au":455,"./en-au.js":455,"./en-ca":456,"./en-ca.js":456,"./en-gb":457,"./en-gb.js":457,"./en-ie":458,"./en-ie.js":458,"./en-il":459,"./en-il.js":459,"./en-in":460,"./en-in.js":460,"./en-nz":461,"./en-nz.js":461,"./en-sg":462,"./en-sg.js":462,"./eo":463,"./eo.js":463,"./es":464,"./es-do":465,"./es-do.js":465,"./es-mx":466,"./es-mx.js":466,"./es-us":467,"./es-us.js":467,"./es.js":464,"./et":468,"./et.js":468,"./eu":469,"./eu.js":469,"./fa":470,"./fa.js":470,"./fi":471,"./fi.js":471,"./fil":472,"./fil.js":472,"./fo":473,"./fo.js":473,"./fr":474,"./fr-ca":475,"./fr-ca.js":475,"./fr-ch":476,"./fr-ch.js":476,"./fr.js":474,"./fy":477,"./fy.js":477,"./ga":478,"./ga.js":478,"./gd":479,"./gd.js":479,"./gl":480,"./gl.js":480,"./gom-deva":481,"./gom-deva.js":481,"./gom-latn":482,"./gom-latn.js":482,"./gu":483,"./gu.js":483,"./he":484,"./he.js":484,"./hi":485,"./hi.js":485,"./hr":486,"./hr.js":486,"./hu":487,"./hu.js":487,"./hy-am":488,"./hy-am.js":488,"./id":489,"./id.js":489,"./is":490,"./is.js":490,"./it":491,"./it-ch":492,"./it-ch.js":492,"./it.js":491,"./ja":493,"./ja.js":493,"./jv":494,"./jv.js":494,"./ka":495,"./ka.js":495,"./kk":496,"./kk.js":496,"./km":497,"./km.js":497,"./kn":498,"./kn.js":498,"./ko":499,"./ko.js":499,"./ku":500,"./ku.js":500,"./ky":501,"./ky.js":501,"./lb":502,"./lb.js":502,"./lo":503,"./lo.js":503,"./lt":504,"./lt.js":504,"./lv":505,"./lv.js":505,"./me":506,"./me.js":506,"./mi":507,"./mi.js":507,"./mk":508,"./mk.js":508,"./ml":509,"./ml.js":509,"./mn":510,"./mn.js":510,"./mr":511,"./mr.js":511,"./ms":512,"./ms-my":513,"./ms-my.js":513,"./ms.js":512,"./mt":514,"./mt.js":514,"./my":515,"./my.js":515,"./nb":516,"./nb.js":516,"./ne":517,"./ne.js":517,"./nl":518,"./nl-be":519,"./nl-be.js":519,"./nl.js":518,"./nn":520,"./nn.js":520,"./oc-lnc":521,"./oc-lnc.js":521,"./pa-in":522,"./pa-in.js":522,"./pl":523,"./pl.js":523,"./pt":524,"./pt-br":525,"./pt-br.js":525,"./pt.js":524,"./ro":526,"./ro.js":526,"./ru":527,"./ru.js":527,"./sd":528,"./sd.js":528,"./se":529,"./se.js":529,"./si":530,"./si.js":530,"./sk":531,"./sk.js":531,"./sl":532,"./sl.js":532,"./sq":533,"./sq.js":533,"./sr":534,"./sr-cyrl":535,"./sr-cyrl.js":535,"./sr.js":534,"./ss":536,"./ss.js":536,"./sv":537,"./sv.js":537,"./sw":538,"./sw.js":538,"./ta":539,"./ta.js":539,"./te":540,"./te.js":540,"./tet":541,"./tet.js":541,"./tg":542,"./tg.js":542,"./th":543,"./th.js":543,"./tk":544,"./tk.js":544,"./tl-ph":545,"./tl-ph.js":545,"./tlh":546,"./tlh.js":546,"./tr":547,"./tr.js":547,"./tzl":548,"./tzl.js":548,"./tzm":549,"./tzm-latn":550,"./tzm-latn.js":550,"./tzm.js":549,"./ug-cn":551,"./ug-cn.js":551,"./uk":552,"./uk.js":552,"./ur":553,"./ur.js":553,"./uz":554,"./uz-latn":555,"./uz-latn.js":555,"./uz.js":554,"./vi":556,"./vi.js":556,"./x-pseudo":557,"./x-pseudo.js":557,"./yo":558,"./yo.js":558,"./zh-cn":559,"./zh-cn.js":559,"./zh-hk":560,"./zh-hk.js":560,"./zh-mo":561,"./zh-mo.js":561,"./zh-tw":562,"./zh-tw.js":562};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=592},723:function(t,e,n){"use strict";n.r(e);n(72),n(64),n(38),n(9),n(63),n(32),n(41),n(22),n(30),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(2),o=n(44),c=n(276),l=n(577);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=r.a.extend({components:{HistoryChart:l.default},head:function(){return{title:"ヒトケタス"}},data:function(){return{showChart:!1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){var t=this;window.setTimeout((function(){t.initHistoryDates(),t.singleHistory()}),0)},methods:{initHistoryDates:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t},startGame:function(){this.$router.replace({path:"/game-plus-single/modeSingle"})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,n=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<n}))},singleHistory:function(){var t,e=this.singleScores,n=[],r=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));n.push(c.length),c.length>0?r.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):r.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return n.reduce((function(a,t){return a+t}))>0&&(this.showChart=!0),{labels:this.chartDates,datasets:[{label:"とくてん",data:r,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},singleScores:function(){return this.termFilteredScoreEntities("modeSingle")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),m=n(91),v=n(122),j=n.n(v),y=n(193),_=n(413),w=n(411),k=n(713),x=n(156),C=n(714),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-row",[n("v-col",{staticClass:"text-h5",attrs:{cols:"mr-auto"}},[t._v("\n      ヒトケタス\n    ")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{outlined:"",to:"/"}},[n("v-icon",[t._v("mdi-home-circle")]),t._v("ほーむ\n      ")],1)],1)],1),t._v(" "),n("v-card",[t.showChart?n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.singleHistory(),options:t.chartOptions}}):t._e(),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"mr-auto"}},[t._v("ひとけたのすうじをたして、こたえにする")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSingle")}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSingle",questionCount:-1}})],1),t._v(" "),n("Chat",{attrs:{room:"all"}})],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{Ranking:n(576).default,Chat:n(584).default}),j()(component,{VBtn:y.a,VCard:_.a,VCardText:w.b,VCol:k.a,VIcon:x.a,VRow:C.a})}}]);