(window.webpackJsonp=window.webpackJsonp||[]).push([[19,8,12,13],{395:function(t,e,r){"use strict";var n=r(541);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=n.a},396:function(t,e,r){var content=r(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(18).default)("6469a2d7",content,!0,{sourceMap:!1})},401:function(t,e,r){"use strict";r(396)},402:function(t,e,r){var n=r(17)(!1);n.push([t.i,".rankings>*[data-v-4bd58053]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-4bd58053]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-4bd58053],.rankings.rank-1 .no[data-v-4bd58053]{font-size:1.8rem}.rankings.rank-2 .name[data-v-4bd58053],.rankings.rank-2 .no[data-v-4bd58053]{font-size:1.3rem}.rankings.rank-3 .name[data-v-4bd58053],.rankings.rank-3 .no[data-v-4bd58053]{font-size:1rem}.rankings.top10[data-v-4bd58053]{font-weight:700}.rankings.entry[data-v-4bd58053]{background-color:#f0f4c3}",""]),t.exports=n},539:function(t,e,r){"use strict";r.r(e);r(35),r(19),r(48),r(34),r(5),r(42),r(50),r(39);var n=r(23),o=(r(70),r(25),r(55),r(24),r(261),r(26),r(0)),c=r(395),l=r(51),d=r(262);function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var h=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n,o,l,d,f,h,v,j;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=c.a.firestore(),q=null,t.daily?(new Date,n=(new Date).setHours(0,0,0,0),q=r.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",n).orderBy("score",t.orderBy).limit(100)):q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,f=1,h=m(t.rankings);try{for(h.s();!(v=h.n()).done;)(j=v.value).score!=l&&(l=j.score,d=f),j.no=d,f++}catch(t){h.e(t)}finally{h.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode?"desc":"asc"}}}),v=(r(401),r(84)),j=r(114),y=r.n(j),k=r(188),_=r(556),S=r(394),x=r(630),C=r(165),w=r(631),z=r(389),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(" "),r("h3",[t._v("らんきんぐ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),r("v-col",{staticClass:"name",attrs:{cols:"auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"4bd58053",null);e.default=component.exports;y()(component,{VBtn:k.a,VCard:_.a,VCardText:S.b,VCardTitle:S.c,VCol:x.a,VIcon:C.a,VRow:w.a,VSpacer:z.a})},544:function(t,e,r){"use strict";r.r(e);var n={extends:r(555).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(84),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},553:function(t,e,r){var map={"./af":403,"./af.js":403,"./ar":404,"./ar-dz":405,"./ar-dz.js":405,"./ar-kw":406,"./ar-kw.js":406,"./ar-ly":407,"./ar-ly.js":407,"./ar-ma":408,"./ar-ma.js":408,"./ar-sa":409,"./ar-sa.js":409,"./ar-tn":410,"./ar-tn.js":410,"./ar.js":404,"./az":411,"./az.js":411,"./be":412,"./be.js":412,"./bg":413,"./bg.js":413,"./bm":414,"./bm.js":414,"./bn":415,"./bn-bd":416,"./bn-bd.js":416,"./bn.js":415,"./bo":417,"./bo.js":417,"./br":418,"./br.js":418,"./bs":419,"./bs.js":419,"./ca":420,"./ca.js":420,"./cs":421,"./cs.js":421,"./cv":422,"./cv.js":422,"./cy":423,"./cy.js":423,"./da":424,"./da.js":424,"./de":425,"./de-at":426,"./de-at.js":426,"./de-ch":427,"./de-ch.js":427,"./de.js":425,"./dv":428,"./dv.js":428,"./el":429,"./el.js":429,"./en-au":430,"./en-au.js":430,"./en-ca":431,"./en-ca.js":431,"./en-gb":432,"./en-gb.js":432,"./en-ie":433,"./en-ie.js":433,"./en-il":434,"./en-il.js":434,"./en-in":435,"./en-in.js":435,"./en-nz":436,"./en-nz.js":436,"./en-sg":437,"./en-sg.js":437,"./eo":438,"./eo.js":438,"./es":439,"./es-do":440,"./es-do.js":440,"./es-mx":441,"./es-mx.js":441,"./es-us":442,"./es-us.js":442,"./es.js":439,"./et":443,"./et.js":443,"./eu":444,"./eu.js":444,"./fa":445,"./fa.js":445,"./fi":446,"./fi.js":446,"./fil":447,"./fil.js":447,"./fo":448,"./fo.js":448,"./fr":449,"./fr-ca":450,"./fr-ca.js":450,"./fr-ch":451,"./fr-ch.js":451,"./fr.js":449,"./fy":452,"./fy.js":452,"./ga":453,"./ga.js":453,"./gd":454,"./gd.js":454,"./gl":455,"./gl.js":455,"./gom-deva":456,"./gom-deva.js":456,"./gom-latn":457,"./gom-latn.js":457,"./gu":458,"./gu.js":458,"./he":459,"./he.js":459,"./hi":460,"./hi.js":460,"./hr":461,"./hr.js":461,"./hu":462,"./hu.js":462,"./hy-am":463,"./hy-am.js":463,"./id":464,"./id.js":464,"./is":465,"./is.js":465,"./it":466,"./it-ch":467,"./it-ch.js":467,"./it.js":466,"./ja":468,"./ja.js":468,"./jv":469,"./jv.js":469,"./ka":470,"./ka.js":470,"./kk":471,"./kk.js":471,"./km":472,"./km.js":472,"./kn":473,"./kn.js":473,"./ko":474,"./ko.js":474,"./ku":475,"./ku.js":475,"./ky":476,"./ky.js":476,"./lb":477,"./lb.js":477,"./lo":478,"./lo.js":478,"./lt":479,"./lt.js":479,"./lv":480,"./lv.js":480,"./me":481,"./me.js":481,"./mi":482,"./mi.js":482,"./mk":483,"./mk.js":483,"./ml":484,"./ml.js":484,"./mn":485,"./mn.js":485,"./mr":486,"./mr.js":486,"./ms":487,"./ms-my":488,"./ms-my.js":488,"./ms.js":487,"./mt":489,"./mt.js":489,"./my":490,"./my.js":490,"./nb":491,"./nb.js":491,"./ne":492,"./ne.js":492,"./nl":493,"./nl-be":494,"./nl-be.js":494,"./nl.js":493,"./nn":495,"./nn.js":495,"./oc-lnc":496,"./oc-lnc.js":496,"./pa-in":497,"./pa-in.js":497,"./pl":498,"./pl.js":498,"./pt":499,"./pt-br":500,"./pt-br.js":500,"./pt.js":499,"./ro":501,"./ro.js":501,"./ru":502,"./ru.js":502,"./sd":503,"./sd.js":503,"./se":504,"./se.js":504,"./si":505,"./si.js":505,"./sk":506,"./sk.js":506,"./sl":507,"./sl.js":507,"./sq":508,"./sq.js":508,"./sr":509,"./sr-cyrl":510,"./sr-cyrl.js":510,"./sr.js":509,"./ss":511,"./ss.js":511,"./sv":512,"./sv.js":512,"./sw":513,"./sw.js":513,"./ta":514,"./ta.js":514,"./te":515,"./te.js":515,"./tet":516,"./tet.js":516,"./tg":517,"./tg.js":517,"./th":518,"./th.js":518,"./tk":519,"./tk.js":519,"./tl-ph":520,"./tl-ph.js":520,"./tlh":521,"./tlh.js":521,"./tr":522,"./tr.js":522,"./tzl":523,"./tzl.js":523,"./tzm":524,"./tzm-latn":525,"./tzm-latn.js":525,"./tzm.js":524,"./ug-cn":526,"./ug-cn.js":526,"./uk":527,"./uk.js":527,"./ur":528,"./ur.js":528,"./uz":529,"./uz-latn":530,"./uz-latn.js":530,"./uz.js":529,"./vi":531,"./vi.js":531,"./x-pseudo":532,"./x-pseudo.js":532,"./yo":533,"./yo.js":533,"./zh-cn":534,"./zh-cn.js":534,"./zh-hk":535,"./zh-hk.js":535,"./zh-mo":536,"./zh-mo.js":536,"./zh-tw":537,"./zh-tw.js":537};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=553},554:function(t,e,r){"use strict";r.r(e);r(25),r(56),r(30),r(6),r(55),r(26),r(35),r(19),r(24),r(48),r(34),r(5),r(42),r(50),r(39);var n=r(0),o=r(51),c=r(263),l=r(544);function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=n.a.extend({components:{HistoryChart:l.default},props:{gameMode:{type:String,default:"modeSprint"},questionCount:{type:Number,default:10}},data:function(){return{tabNo:-1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){switch(this.tabNo=2,this.gameMode){case"modeSprint":this.tabNo=10===this.questionCount?0:1}var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t},methods:{startGame:function(t,e){console.log(t,e),this.$router.replace({name:"game-plus10",params:{mode:t,count:e}})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,r=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<r}))},sprintHistory:function(t){var e,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=e.value,c=t.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):n.push(0)};for(o.s();!(e=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"じかん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}},sprint10History:function(){return this.sprintHistory(this.sprint10Scores)},sprint30History:function(){return console.log(this.sprint30Scores),this.sprintHistory(this.sprint30Scores)},endressHistory:function(){var t,e=this.endressScores,r=[],n=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(c.length),c.length>0?n.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):n.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"とくてん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return this.termFilteredScoreEntities("modeSprint-10")},sprint30Scores:function(){return this.termFilteredScoreEntities("modeSprint-30")},endressScores:function(){return this.termFilteredScoreEntities("modeEndress")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),h=r(84),v=r(114),j=r.n(v),y=r(188),k=r(556),_=r(394),S=r(630),x=r(165),C=r(631),w=r(389),z=r(632),A=r(643),D=r(635),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",{model:{value:t.tabNo,callback:function(e){t.tabNo=e},expression:"tabNo"}},[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",10)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint",30)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeEndress",-1)}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;j()(component,{Ranking:r(539).default}),j()(component,{VBtn:y.a,VCard:k.a,VCardText:_.b,VCol:S.a,VIcon:x.a,VRow:C.a,VSpacer:w.a,VTab:z.a,VTabItem:A.a,VTabs:D.a})},641:function(t,e,r){"use strict";r.r(e);var n=r(84),component=Object(n.a)({},(function(){var t=this.$createElement;return(this._self._c||t)("History")}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{History:r(554).default})}}]);