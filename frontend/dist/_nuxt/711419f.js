(window.webpackJsonp=window.webpackJsonp||[]).push([[11,8,12],{395:function(t,e,r){var content=r(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("04aa9c80",content,!0,{sourceMap:!1})},396:function(t,e,r){"use strict";var n=r(544);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=n.a},402:function(t,e,r){"use strict";r(395)},403:function(t,e,r){var n=r(17)(!1);n.push([t.i,".rankings>*[data-v-e503712c]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-e503712c]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-e503712c],.rankings.rank-1 .no[data-v-e503712c]{font-size:1.8rem}.rankings.rank-2 .name[data-v-e503712c],.rankings.rank-2 .no[data-v-e503712c]{font-size:1.3rem}.rankings.rank-3 .name[data-v-e503712c],.rankings.rank-3 .no[data-v-e503712c]{font-size:1rem}.rankings.top10[data-v-e503712c]{font-weight:700}.rankings.entry[data-v-e503712c]{background-color:#f0f4c3}",""]),t.exports=n},541:function(t,e,r){"use strict";r.r(e);r(35),r(19),r(48),r(34),r(5),r(42),r(50),r(39);var n=r(23),o=(r(70),r(25),r(55),r(24),r(263),r(26),r(0)),c=r(396),l=r(51),d=r(262);function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n,o,l,d,f,h,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=c.a.firestore(),q=null,t.daily?(new Date,n=(new Date).setHours(0,0,0,0),q=r.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",n).orderBy("score","modeEndress"===t.gameMode?"desc":"asc").limit(100)):q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score","modeEndress"===t.gameMode?"desc":"asc").limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,f=1,h=m(t.rankings);try{for(h.s();!(v=h.n()).done;)(j=v.value).score!=l&&(l=j.score,d=f),j.no=d,f++}catch(t){h.e(t)}finally{h.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}}}),v=(r(402),r(84)),j=r(114),y=r.n(j),k=r(188),_=r(547),w=r(394),x=r(623),S=r(165),C=r(624),z=r(389),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(" "),r("h3",[t._v("らんきんぐ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),r("v-col",{staticClass:"name",attrs:{cols:"auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"e503712c",null);e.default=component.exports;y()(component,{VBtn:k.a,VCard:_.a,VCardText:w.b,VCardTitle:w.c,VCol:x.a,VIcon:S.a,VRow:C.a,VSpacer:z.a})},545:function(t,e,r){"use strict";r.r(e);var n={extends:r(554).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(84),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},546:function(t,e,r){"use strict";r.r(e);r(6),r(55),r(26),r(35),r(19),r(24),r(48),r(34),r(5),r(42),r(50),r(39);var n=r(0),o=r(51),c=r(264),l=r(545);function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=n.a.extend({components:{HistoryChart:l.default},data:function(){return{chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t,console.log(this.historyDates)},methods:{startGame:function(t,e){this.$router.push({name:"game",params:{mode:t,count:e}})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,r=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<r}))},sprintHistory:function(t){var e,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=e.value,c=t.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):n.push(0)};for(o.s();!(e=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"じかん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}},sprint10History:function(){return this.sprintHistory(this.sprint10Scores)},sprint30History:function(){return this.sprintHistory(this.sprint30Scores)},endressHistory:function(){var t,e=this.endressScores,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):n.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"とくてん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return this.termFilteredScoreEntities("modeSprint-10")},sprint30Scores:function(){return this.termFilteredScoreEntities("modeSprint-30")},endressScores:function(){return this.termFilteredScoreEntities("modeEndress")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),h=r(84),v=r(114),j=r.n(v),y=r(188),k=r(547),_=r(394),w=r(623),x=r(165),S=r(624),C=r(389),z=r(625),A=r(634),D=r(628),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",10)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",30)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeEndress",-1)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{Ranking:r(541).default}),j()(component,{VBtn:y.a,VCard:k.a,VCardText:_.b,VCol:w.a,VIcon:x.a,VRow:S.a,VSpacer:C.a,VTab:z.a,VTabItem:A.a,VTabs:D.a})},553:function(t,e,r){var map={"./af":406,"./af.js":406,"./ar":407,"./ar-dz":408,"./ar-dz.js":408,"./ar-kw":409,"./ar-kw.js":409,"./ar-ly":410,"./ar-ly.js":410,"./ar-ma":411,"./ar-ma.js":411,"./ar-sa":412,"./ar-sa.js":412,"./ar-tn":413,"./ar-tn.js":413,"./ar.js":407,"./az":414,"./az.js":414,"./be":415,"./be.js":415,"./bg":416,"./bg.js":416,"./bm":417,"./bm.js":417,"./bn":418,"./bn-bd":419,"./bn-bd.js":419,"./bn.js":418,"./bo":420,"./bo.js":420,"./br":421,"./br.js":421,"./bs":422,"./bs.js":422,"./ca":423,"./ca.js":423,"./cs":424,"./cs.js":424,"./cv":425,"./cv.js":425,"./cy":426,"./cy.js":426,"./da":427,"./da.js":427,"./de":428,"./de-at":429,"./de-at.js":429,"./de-ch":430,"./de-ch.js":430,"./de.js":428,"./dv":431,"./dv.js":431,"./el":432,"./el.js":432,"./en-au":433,"./en-au.js":433,"./en-ca":434,"./en-ca.js":434,"./en-gb":435,"./en-gb.js":435,"./en-ie":436,"./en-ie.js":436,"./en-il":437,"./en-il.js":437,"./en-in":438,"./en-in.js":438,"./en-nz":439,"./en-nz.js":439,"./en-sg":440,"./en-sg.js":440,"./eo":441,"./eo.js":441,"./es":442,"./es-do":443,"./es-do.js":443,"./es-mx":444,"./es-mx.js":444,"./es-us":445,"./es-us.js":445,"./es.js":442,"./et":446,"./et.js":446,"./eu":447,"./eu.js":447,"./fa":448,"./fa.js":448,"./fi":449,"./fi.js":449,"./fil":450,"./fil.js":450,"./fo":451,"./fo.js":451,"./fr":452,"./fr-ca":453,"./fr-ca.js":453,"./fr-ch":454,"./fr-ch.js":454,"./fr.js":452,"./fy":455,"./fy.js":455,"./ga":456,"./ga.js":456,"./gd":457,"./gd.js":457,"./gl":458,"./gl.js":458,"./gom-deva":459,"./gom-deva.js":459,"./gom-latn":460,"./gom-latn.js":460,"./gu":461,"./gu.js":461,"./he":462,"./he.js":462,"./hi":463,"./hi.js":463,"./hr":464,"./hr.js":464,"./hu":465,"./hu.js":465,"./hy-am":466,"./hy-am.js":466,"./id":467,"./id.js":467,"./is":468,"./is.js":468,"./it":469,"./it-ch":470,"./it-ch.js":470,"./it.js":469,"./ja":471,"./ja.js":471,"./jv":472,"./jv.js":472,"./ka":473,"./ka.js":473,"./kk":474,"./kk.js":474,"./km":475,"./km.js":475,"./kn":476,"./kn.js":476,"./ko":477,"./ko.js":477,"./ku":478,"./ku.js":478,"./ky":479,"./ky.js":479,"./lb":480,"./lb.js":480,"./lo":481,"./lo.js":481,"./lt":482,"./lt.js":482,"./lv":483,"./lv.js":483,"./me":484,"./me.js":484,"./mi":485,"./mi.js":485,"./mk":486,"./mk.js":486,"./ml":487,"./ml.js":487,"./mn":488,"./mn.js":488,"./mr":489,"./mr.js":489,"./ms":490,"./ms-my":491,"./ms-my.js":491,"./ms.js":490,"./mt":492,"./mt.js":492,"./my":493,"./my.js":493,"./nb":494,"./nb.js":494,"./ne":495,"./ne.js":495,"./nl":496,"./nl-be":497,"./nl-be.js":497,"./nl.js":496,"./nn":498,"./nn.js":498,"./oc-lnc":499,"./oc-lnc.js":499,"./pa-in":500,"./pa-in.js":500,"./pl":501,"./pl.js":501,"./pt":502,"./pt-br":503,"./pt-br.js":503,"./pt.js":502,"./ro":504,"./ro.js":504,"./ru":505,"./ru.js":505,"./sd":506,"./sd.js":506,"./se":507,"./se.js":507,"./si":508,"./si.js":508,"./sk":509,"./sk.js":509,"./sl":510,"./sl.js":510,"./sq":511,"./sq.js":511,"./sr":512,"./sr-cyrl":513,"./sr-cyrl.js":513,"./sr.js":512,"./ss":514,"./ss.js":514,"./sv":515,"./sv.js":515,"./sw":516,"./sw.js":516,"./ta":517,"./ta.js":517,"./te":518,"./te.js":518,"./tet":519,"./tet.js":519,"./tg":520,"./tg.js":520,"./th":521,"./th.js":521,"./tk":522,"./tk.js":522,"./tl-ph":523,"./tl-ph.js":523,"./tlh":524,"./tlh.js":524,"./tr":525,"./tr.js":525,"./tzl":526,"./tzl.js":526,"./tzm":527,"./tzm-latn":528,"./tzm-latn.js":528,"./tzm.js":527,"./ug-cn":529,"./ug-cn.js":529,"./uk":530,"./uk.js":530,"./ur":531,"./ur.js":531,"./uz":532,"./uz-latn":533,"./uz-latn.js":533,"./uz.js":532,"./vi":534,"./vi.js":534,"./x-pseudo":535,"./x-pseudo.js":535,"./yo":536,"./yo.js":536,"./zh-cn":537,"./zh-cn.js":537,"./zh-hk":538,"./zh-hk.js":538,"./zh-mo":539,"./zh-mo.js":539,"./zh-tw":540,"./zh-tw.js":540};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=553}}]);