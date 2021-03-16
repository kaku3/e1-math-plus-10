(window.webpackJsonp=window.webpackJsonp||[]).push([[13,8,11,12],{399:function(t,e,r){var content=r(406);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(19).default)("a14d2db8",content,!0,{sourceMap:!1})},400:function(t,e,r){"use strict";var n=r(548);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=n.a},405:function(t,e,r){"use strict";r(399)},406:function(t,e,r){var n=r(18)(!1);n.push([t.i,".rankings>*[data-v-5f185e71]{padding:.5rem}.rankings+.rankings[data-v-5f185e71]{margin-top:.25rem;border-top:1px solid #e0e0e0}",""]),t.exports=n},544:function(t,e,r){"use strict";r.r(e);var n=r(20),o=(r(56),r(25),r(55),r(24),r(265),r(26),r(0)),c=r(400),l=r(51),d=r(264),m=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=c.a.firestore(),q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score","modeEndress"===t.gameMode?"desc":"asc").limit(100),e.next=5,q.get();case 5:n=e.sent,t.rankings=n.docs.map((function(t){return t.data()})),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},methods:{isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"".concat(this.questionCount,"問モード")}}}),j=(r(405),r(84)),f=r(114),h=r.n(f),v=r(551),y=r(398),k=r(626),_=r(165),x=r(627),C=r(393),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(t._s(t.displayGameModeTitle))],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e)}},[r("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"5f185e71",null);e.default=component.exports;h()(component,{VCard:v.a,VCardText:y.b,VCardTitle:y.c,VCol:k.a,VIcon:_.a,VRow:x.a,VSpacer:C.a})},549:function(t,e,r){"use strict";r.r(e);var n={extends:r(558).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(84),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},550:function(t,e,r){"use strict";r.r(e);r(6),r(55),r(26),r(35),r(16),r(24),r(43),r(30),r(5),r(41),r(50),r(36);var n=r(0),o=r(51),c=r(266),l=r(549);function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var j=n.a.extend({components:{HistoryChart:l.default},data:function(){return{historyDates:[]}},mounted:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t,console.log(this.historyDates)},methods:{startGame:function(t,e){this.$router.push({name:"game",params:{mode:t,count:e}})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,r=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<r}))},sprintHistory:function(t){var e,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=e.value,c=t.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):n.push(0)};for(o.s();!(e=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"じかん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}},sprint10History:function(){return this.sprintHistory(this.sprint10Scores)},sprint30History:function(){return this.sprintHistory(this.sprint30Scores)},endressHistory:function(){var t,e=this.endressScores,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):n.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"とくてん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return this.termFilteredScoreEntities("modeSprint-10")},sprint30Scores:function(){return this.termFilteredScoreEntities("modeSprint-30")},endressScores:function(){return this.termFilteredScoreEntities("modeEndress")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),f=r(84),h=r(114),v=r.n(h),y=r(189),k=r(551),_=r(398),x=r(626),C=r(165),S=r(627),w=r(393),D=r(628),z=r(637),M=r(631),component=Object(f.a)(j,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",10)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",30)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeEndress",-1)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Ranking:r(544).default}),v()(component,{VBtn:y.a,VCard:k.a,VCardText:_.b,VCol:x.a,VIcon:C.a,VRow:S.a,VSpacer:w.a,VTab:D.a,VTabItem:z.a,VTabs:M.a})},557:function(t,e,r){var map={"./af":409,"./af.js":409,"./ar":410,"./ar-dz":411,"./ar-dz.js":411,"./ar-kw":412,"./ar-kw.js":412,"./ar-ly":413,"./ar-ly.js":413,"./ar-ma":414,"./ar-ma.js":414,"./ar-sa":415,"./ar-sa.js":415,"./ar-tn":416,"./ar-tn.js":416,"./ar.js":410,"./az":417,"./az.js":417,"./be":418,"./be.js":418,"./bg":419,"./bg.js":419,"./bm":420,"./bm.js":420,"./bn":421,"./bn-bd":422,"./bn-bd.js":422,"./bn.js":421,"./bo":423,"./bo.js":423,"./br":424,"./br.js":424,"./bs":425,"./bs.js":425,"./ca":426,"./ca.js":426,"./cs":427,"./cs.js":427,"./cv":428,"./cv.js":428,"./cy":429,"./cy.js":429,"./da":430,"./da.js":430,"./de":431,"./de-at":432,"./de-at.js":432,"./de-ch":433,"./de-ch.js":433,"./de.js":431,"./dv":434,"./dv.js":434,"./el":435,"./el.js":435,"./en-au":436,"./en-au.js":436,"./en-ca":437,"./en-ca.js":437,"./en-gb":438,"./en-gb.js":438,"./en-ie":439,"./en-ie.js":439,"./en-il":440,"./en-il.js":440,"./en-in":441,"./en-in.js":441,"./en-nz":442,"./en-nz.js":442,"./en-sg":443,"./en-sg.js":443,"./eo":444,"./eo.js":444,"./es":445,"./es-do":446,"./es-do.js":446,"./es-mx":447,"./es-mx.js":447,"./es-us":448,"./es-us.js":448,"./es.js":445,"./et":449,"./et.js":449,"./eu":450,"./eu.js":450,"./fa":451,"./fa.js":451,"./fi":452,"./fi.js":452,"./fil":453,"./fil.js":453,"./fo":454,"./fo.js":454,"./fr":455,"./fr-ca":456,"./fr-ca.js":456,"./fr-ch":457,"./fr-ch.js":457,"./fr.js":455,"./fy":458,"./fy.js":458,"./ga":459,"./ga.js":459,"./gd":460,"./gd.js":460,"./gl":461,"./gl.js":461,"./gom-deva":462,"./gom-deva.js":462,"./gom-latn":463,"./gom-latn.js":463,"./gu":464,"./gu.js":464,"./he":465,"./he.js":465,"./hi":466,"./hi.js":466,"./hr":467,"./hr.js":467,"./hu":468,"./hu.js":468,"./hy-am":469,"./hy-am.js":469,"./id":470,"./id.js":470,"./is":471,"./is.js":471,"./it":472,"./it-ch":473,"./it-ch.js":473,"./it.js":472,"./ja":474,"./ja.js":474,"./jv":475,"./jv.js":475,"./ka":476,"./ka.js":476,"./kk":477,"./kk.js":477,"./km":478,"./km.js":478,"./kn":479,"./kn.js":479,"./ko":480,"./ko.js":480,"./ku":481,"./ku.js":481,"./ky":482,"./ky.js":482,"./lb":483,"./lb.js":483,"./lo":484,"./lo.js":484,"./lt":485,"./lt.js":485,"./lv":486,"./lv.js":486,"./me":487,"./me.js":487,"./mi":488,"./mi.js":488,"./mk":489,"./mk.js":489,"./ml":490,"./ml.js":490,"./mn":491,"./mn.js":491,"./mr":492,"./mr.js":492,"./ms":493,"./ms-my":494,"./ms-my.js":494,"./ms.js":493,"./mt":495,"./mt.js":495,"./my":496,"./my.js":496,"./nb":497,"./nb.js":497,"./ne":498,"./ne.js":498,"./nl":499,"./nl-be":500,"./nl-be.js":500,"./nl.js":499,"./nn":501,"./nn.js":501,"./oc-lnc":502,"./oc-lnc.js":502,"./pa-in":503,"./pa-in.js":503,"./pl":504,"./pl.js":504,"./pt":505,"./pt-br":506,"./pt-br.js":506,"./pt.js":505,"./ro":507,"./ro.js":507,"./ru":508,"./ru.js":508,"./sd":509,"./sd.js":509,"./se":510,"./se.js":510,"./si":511,"./si.js":511,"./sk":512,"./sk.js":512,"./sl":513,"./sl.js":513,"./sq":514,"./sq.js":514,"./sr":515,"./sr-cyrl":516,"./sr-cyrl.js":516,"./sr.js":515,"./ss":517,"./ss.js":517,"./sv":518,"./sv.js":518,"./sw":519,"./sw.js":519,"./ta":520,"./ta.js":520,"./te":521,"./te.js":521,"./tet":522,"./tet.js":522,"./tg":523,"./tg.js":523,"./th":524,"./th.js":524,"./tk":525,"./tk.js":525,"./tl-ph":526,"./tl-ph.js":526,"./tlh":527,"./tlh.js":527,"./tr":528,"./tr.js":528,"./tzl":529,"./tzl.js":529,"./tzm":530,"./tzm-latn":531,"./tzm-latn.js":531,"./tzm.js":530,"./ug-cn":532,"./ug-cn.js":532,"./uk":533,"./uk.js":533,"./ur":534,"./ur.js":534,"./uz":535,"./uz-latn":536,"./uz-latn.js":536,"./uz.js":535,"./vi":537,"./vi.js":537,"./x-pseudo":538,"./x-pseudo.js":538,"./yo":539,"./yo.js":539,"./zh-cn":540,"./zh-cn.js":540,"./zh-hk":541,"./zh-hk.js":541,"./zh-mo":542,"./zh-mo.js":542,"./zh-tw":543,"./zh-tw.js":543};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=557},586:function(t,e,r){"use strict";r.r(e);r(24);var n=r(0),o=r(51),c=r(264),l=n.a.extend({computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},name:function(){return this.accountStore.account.name}}}),d=r(84),m=r(114),j=r.n(m),f=r(626),h=r(627),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",[t._v("\n      ようこそ "+t._s(t.name)+" さん\n    ")])],1),t._v(" "),r("History",{staticClass:"mt-2"})],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{History:r(550).default}),j()(component,{VCol:f.a,VRow:h.a})}}]);