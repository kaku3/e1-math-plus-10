(window.webpackJsonp=window.webpackJsonp||[]).push([[16,8,11,12],{395:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("04aa9c80",content,!0,{sourceMap:!1})},396:function(t,e,n){"use strict";var r=n(544);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=r.a},402:function(t,e,n){"use strict";n(395)},403:function(t,e,n){var r=n(17)(!1);r.push([t.i,".rankings>*[data-v-e503712c]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-e503712c]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-e503712c],.rankings.rank-1 .no[data-v-e503712c]{font-size:1.8rem}.rankings.rank-2 .name[data-v-e503712c],.rankings.rank-2 .no[data-v-e503712c]{font-size:1.3rem}.rankings.rank-3 .name[data-v-e503712c],.rankings.rank-3 .no[data-v-e503712c]{font-size:1rem}.rankings.top10[data-v-e503712c]{font-weight:700}.rankings.entry[data-v-e503712c]{background-color:#f0f4c3}",""]),t.exports=r},541:function(t,e,n){"use strict";n.r(e);n(35),n(19),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(23),o=(n(70),n(25),n(55),n(24),n(263),n(26),n(0)),c=n(396),l=n(51),d=n(262);function m(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var h=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,q,r,o,l,d,f,h,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.a.firestore(),q=null,t.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",r).orderBy("score","modeEndress"===t.gameMode?"desc":"asc").limit(100)):q=n.collection("scores").where("mode","==",t.displayGameMode).orderBy("score","modeEndress"===t.gameMode?"desc":"asc").limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,f=1,h=m(t.rankings);try{for(h.s();!(v=h.n()).done;)(j=v.value).score!=l&&(l=j.score,d=f),j.no=d,f++}catch(t){h.e(t)}finally{h.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}}}),v=(n(402),n(84)),j=n(114),y=n.n(j),k=n(188),_=n(547),S=n(394),x=n(623),C=n(165),w=n(624),z=n(389),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-icon",[t._v("mdi-crown")]),t._v(" "),n("h3",[t._v("らんきんぐ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),n("v-card-text",t._l(t.rankings,(function(e,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"auto"}},[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"e503712c",null);e.default=component.exports;y()(component,{VBtn:k.a,VCard:_.a,VCardText:S.b,VCardTitle:S.c,VCol:x.a,VIcon:C.a,VRow:w.a,VSpacer:z.a})},545:function(t,e,n){"use strict";n.r(e);var r={extends:n(554).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=n(84),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},546:function(t,e,n){"use strict";n.r(e);n(25),n(6),n(55),n(26),n(35),n(19),n(24),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(0),o=n(51),c=n(264),l=n(545);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var f=r.a.extend({components:{HistoryChart:l.default},props:{gameMode:{type:String,default:"modeSprint"},questionCount:{type:Number,default:10}},data:function(){return{tabNo:-1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){switch(this.tabNo=2,this.gameMode){case"modeSprint":this.tabNo=10===this.questionCount?0:1}var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t},methods:{startGame:function(t,e){this.$router.push({name:"game",params:{mode:t,count:e}})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,n=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<n}))},sprintHistory:function(t){var e,n=[],r=[],o=d(this.historyDates);try{var c=function(){var o=e.value,c=t.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));n.push(c.length),c.length>0?r.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):r.push(0)};for(o.s();!(e=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"じかん",data:r,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}},sprint10History:function(){return this.sprintHistory(this.sprint10Scores)},sprint30History:function(){return console.log(this.sprint30Scores),this.sprintHistory(this.sprint30Scores)},endressHistory:function(){var t,e=this.endressScores,n=[],r=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));n.push(c.length),c.length>0?r.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):r.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"とくてん",data:r,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return this.termFilteredScoreEntities("modeSprint-10")},sprint30Scores:function(){return this.termFilteredScoreEntities("modeSprint-30")},endressScores:function(){return this.termFilteredScoreEntities("modeEndress")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),h=n(84),v=n(114),j=n.n(v),y=n(188),k=n(547),_=n(394),S=n(623),x=n(165),C=n(624),w=n(389),z=n(625),A=n(634),D=n(628),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-tabs",{model:{value:t.tabNo,callback:function(e){t.tabNo=e},expression:"tabNo"}},[n("v-tab",[t._v("10問モード")]),t._v(" "),n("v-tab",[t._v("30問モード")]),t._v(" "),n("v-tab",[t._v("たいきゅうモード")]),t._v(" "),n("v-tab-item",[n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",10)}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSprint",questionCount:10}})],1),t._v(" "),n("v-tab-item",[n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",30)}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSprint",questionCount:30}})],1),t._v(" "),n("v-tab-item",[n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeEndress",-1)}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{Ranking:n(541).default}),j()(component,{VBtn:y.a,VCard:k.a,VCardText:_.b,VCol:S.a,VIcon:x.a,VRow:C.a,VSpacer:w.a,VTab:z.a,VTabItem:A.a,VTabs:D.a})},553:function(t,e,n){var map={"./af":406,"./af.js":406,"./ar":407,"./ar-dz":408,"./ar-dz.js":408,"./ar-kw":409,"./ar-kw.js":409,"./ar-ly":410,"./ar-ly.js":410,"./ar-ma":411,"./ar-ma.js":411,"./ar-sa":412,"./ar-sa.js":412,"./ar-tn":413,"./ar-tn.js":413,"./ar.js":407,"./az":414,"./az.js":414,"./be":415,"./be.js":415,"./bg":416,"./bg.js":416,"./bm":417,"./bm.js":417,"./bn":418,"./bn-bd":419,"./bn-bd.js":419,"./bn.js":418,"./bo":420,"./bo.js":420,"./br":421,"./br.js":421,"./bs":422,"./bs.js":422,"./ca":423,"./ca.js":423,"./cs":424,"./cs.js":424,"./cv":425,"./cv.js":425,"./cy":426,"./cy.js":426,"./da":427,"./da.js":427,"./de":428,"./de-at":429,"./de-at.js":429,"./de-ch":430,"./de-ch.js":430,"./de.js":428,"./dv":431,"./dv.js":431,"./el":432,"./el.js":432,"./en-au":433,"./en-au.js":433,"./en-ca":434,"./en-ca.js":434,"./en-gb":435,"./en-gb.js":435,"./en-ie":436,"./en-ie.js":436,"./en-il":437,"./en-il.js":437,"./en-in":438,"./en-in.js":438,"./en-nz":439,"./en-nz.js":439,"./en-sg":440,"./en-sg.js":440,"./eo":441,"./eo.js":441,"./es":442,"./es-do":443,"./es-do.js":443,"./es-mx":444,"./es-mx.js":444,"./es-us":445,"./es-us.js":445,"./es.js":442,"./et":446,"./et.js":446,"./eu":447,"./eu.js":447,"./fa":448,"./fa.js":448,"./fi":449,"./fi.js":449,"./fil":450,"./fil.js":450,"./fo":451,"./fo.js":451,"./fr":452,"./fr-ca":453,"./fr-ca.js":453,"./fr-ch":454,"./fr-ch.js":454,"./fr.js":452,"./fy":455,"./fy.js":455,"./ga":456,"./ga.js":456,"./gd":457,"./gd.js":457,"./gl":458,"./gl.js":458,"./gom-deva":459,"./gom-deva.js":459,"./gom-latn":460,"./gom-latn.js":460,"./gu":461,"./gu.js":461,"./he":462,"./he.js":462,"./hi":463,"./hi.js":463,"./hr":464,"./hr.js":464,"./hu":465,"./hu.js":465,"./hy-am":466,"./hy-am.js":466,"./id":467,"./id.js":467,"./is":468,"./is.js":468,"./it":469,"./it-ch":470,"./it-ch.js":470,"./it.js":469,"./ja":471,"./ja.js":471,"./jv":472,"./jv.js":472,"./ka":473,"./ka.js":473,"./kk":474,"./kk.js":474,"./km":475,"./km.js":475,"./kn":476,"./kn.js":476,"./ko":477,"./ko.js":477,"./ku":478,"./ku.js":478,"./ky":479,"./ky.js":479,"./lb":480,"./lb.js":480,"./lo":481,"./lo.js":481,"./lt":482,"./lt.js":482,"./lv":483,"./lv.js":483,"./me":484,"./me.js":484,"./mi":485,"./mi.js":485,"./mk":486,"./mk.js":486,"./ml":487,"./ml.js":487,"./mn":488,"./mn.js":488,"./mr":489,"./mr.js":489,"./ms":490,"./ms-my":491,"./ms-my.js":491,"./ms.js":490,"./mt":492,"./mt.js":492,"./my":493,"./my.js":493,"./nb":494,"./nb.js":494,"./ne":495,"./ne.js":495,"./nl":496,"./nl-be":497,"./nl-be.js":497,"./nl.js":496,"./nn":498,"./nn.js":498,"./oc-lnc":499,"./oc-lnc.js":499,"./pa-in":500,"./pa-in.js":500,"./pl":501,"./pl.js":501,"./pt":502,"./pt-br":503,"./pt-br.js":503,"./pt.js":502,"./ro":504,"./ro.js":504,"./ru":505,"./ru.js":505,"./sd":506,"./sd.js":506,"./se":507,"./se.js":507,"./si":508,"./si.js":508,"./sk":509,"./sk.js":509,"./sl":510,"./sl.js":510,"./sq":511,"./sq.js":511,"./sr":512,"./sr-cyrl":513,"./sr-cyrl.js":513,"./sr.js":512,"./ss":514,"./ss.js":514,"./sv":515,"./sv.js":515,"./sw":516,"./sw.js":516,"./ta":517,"./ta.js":517,"./te":518,"./te.js":518,"./tet":519,"./tet.js":519,"./tg":520,"./tg.js":520,"./th":521,"./th.js":521,"./tk":522,"./tk.js":522,"./tl-ph":523,"./tl-ph.js":523,"./tlh":524,"./tlh.js":524,"./tr":525,"./tr.js":525,"./tzl":526,"./tzl.js":526,"./tzm":527,"./tzm-latn":528,"./tzm-latn.js":528,"./tzm.js":527,"./ug-cn":529,"./ug-cn.js":529,"./uk":530,"./uk.js":530,"./ur":531,"./ur.js":531,"./uz":532,"./uz-latn":533,"./uz-latn.js":533,"./uz.js":532,"./vi":534,"./vi.js":534,"./x-pseudo":535,"./x-pseudo.js":535,"./yo":536,"./yo.js":536,"./zh-cn":537,"./zh-cn.js":537,"./zh-hk":538,"./zh-hk.js":538,"./zh-mo":539,"./zh-mo.js":539,"./zh-tw":540,"./zh-tw.js":540};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=553},632:function(t,e,n){"use strict";n.r(e);var r=n(84),component=Object(r.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("History")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{History:n(546).default})}}]);