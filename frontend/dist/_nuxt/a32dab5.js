(window.webpackJsonp=window.webpackJsonp||[]).push([[19,8,13],{395:function(t,e,n){"use strict";var r=n(546);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),e.a=r.a},404:function(t,e,n){var content=n(553);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(18).default)("6469a2d7",content,!0,{sourceMap:!1})},552:function(t,e,n){"use strict";n(404)},553:function(t,e,n){var r=n(17)(!1);r.push([t.i,".rankings>*[data-v-4bd58053]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-4bd58053]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-4bd58053],.rankings.rank-1 .no[data-v-4bd58053]{font-size:1.8rem}.rankings.rank-2 .name[data-v-4bd58053],.rankings.rank-2 .no[data-v-4bd58053]{font-size:1.3rem}.rankings.rank-3 .name[data-v-4bd58053],.rankings.rank-3 .no[data-v-4bd58053]{font-size:1rem}.rankings.top10[data-v-4bd58053]{font-weight:700}.rankings.entry[data-v-4bd58053]{background-color:#f0f4c3}",""]),t.exports=r},557:function(t,e,n){"use strict";n.r(e);n(35),n(19),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(23),o=(n(70),n(25),n(55),n(24),n(262),n(26),n(0)),c=n(395),l=n(51),d=n(263);function f(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return m(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function m(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var j=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,q,r,o,l,d,m,j,h,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=c.a.firestore(),q=null,t.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",r).orderBy("score",t.orderBy).limit(100)):q=n.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){l=t.rankings[0].score,d=1,m=1,j=f(t.rankings);try{for(j.s();!(h=j.n()).done;)(v=h.value).score!=l&&(l=v.score,d=m),v.no=d,m++}catch(t){j.e(t)}finally{j.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode?"desc":"asc"}}}),h=(n(552),n(84)),v=n(114),y=n.n(v),k=n(188),w=n(401),x=n(394),S=n(632),_=n(165),C=n(633),z=n(389),component=Object(h.a)(j,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-title",[n("v-icon",[t._v("mdi-crown")]),t._v(" "),n("h3",[t._v("らんきんぐ")]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),n("v-card-text",t._l(t.rankings,(function(e,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"auto"}},[t._v(t._s(e.name))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"4bd58053",null);e.default=component.exports;y()(component,{VBtn:k.a,VCard:w.a,VCardText:x.b,VCardTitle:x.c,VCol:S.a,VIcon:_.a,VRow:C.a,VSpacer:z.a})},558:function(t,e,n){"use strict";n.r(e);var r={extends:n(563).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=n(84),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.default=component.exports},562:function(t,e,n){var map={"./af":410,"./af.js":410,"./ar":411,"./ar-dz":412,"./ar-dz.js":412,"./ar-kw":413,"./ar-kw.js":413,"./ar-ly":414,"./ar-ly.js":414,"./ar-ma":415,"./ar-ma.js":415,"./ar-sa":416,"./ar-sa.js":416,"./ar-tn":417,"./ar-tn.js":417,"./ar.js":411,"./az":418,"./az.js":418,"./be":419,"./be.js":419,"./bg":420,"./bg.js":420,"./bm":421,"./bm.js":421,"./bn":422,"./bn-bd":423,"./bn-bd.js":423,"./bn.js":422,"./bo":424,"./bo.js":424,"./br":425,"./br.js":425,"./bs":426,"./bs.js":426,"./ca":427,"./ca.js":427,"./cs":428,"./cs.js":428,"./cv":429,"./cv.js":429,"./cy":430,"./cy.js":430,"./da":431,"./da.js":431,"./de":432,"./de-at":433,"./de-at.js":433,"./de-ch":434,"./de-ch.js":434,"./de.js":432,"./dv":435,"./dv.js":435,"./el":436,"./el.js":436,"./en-au":437,"./en-au.js":437,"./en-ca":438,"./en-ca.js":438,"./en-gb":439,"./en-gb.js":439,"./en-ie":440,"./en-ie.js":440,"./en-il":441,"./en-il.js":441,"./en-in":442,"./en-in.js":442,"./en-nz":443,"./en-nz.js":443,"./en-sg":444,"./en-sg.js":444,"./eo":445,"./eo.js":445,"./es":446,"./es-do":447,"./es-do.js":447,"./es-mx":448,"./es-mx.js":448,"./es-us":449,"./es-us.js":449,"./es.js":446,"./et":450,"./et.js":450,"./eu":451,"./eu.js":451,"./fa":452,"./fa.js":452,"./fi":453,"./fi.js":453,"./fil":454,"./fil.js":454,"./fo":455,"./fo.js":455,"./fr":456,"./fr-ca":457,"./fr-ca.js":457,"./fr-ch":458,"./fr-ch.js":458,"./fr.js":456,"./fy":459,"./fy.js":459,"./ga":460,"./ga.js":460,"./gd":461,"./gd.js":461,"./gl":462,"./gl.js":462,"./gom-deva":463,"./gom-deva.js":463,"./gom-latn":464,"./gom-latn.js":464,"./gu":465,"./gu.js":465,"./he":466,"./he.js":466,"./hi":467,"./hi.js":467,"./hr":468,"./hr.js":468,"./hu":469,"./hu.js":469,"./hy-am":470,"./hy-am.js":470,"./id":471,"./id.js":471,"./is":472,"./is.js":472,"./it":473,"./it-ch":474,"./it-ch.js":474,"./it.js":473,"./ja":475,"./ja.js":475,"./jv":476,"./jv.js":476,"./ka":477,"./ka.js":477,"./kk":478,"./kk.js":478,"./km":479,"./km.js":479,"./kn":480,"./kn.js":480,"./ko":481,"./ko.js":481,"./ku":482,"./ku.js":482,"./ky":483,"./ky.js":483,"./lb":484,"./lb.js":484,"./lo":485,"./lo.js":485,"./lt":486,"./lt.js":486,"./lv":487,"./lv.js":487,"./me":488,"./me.js":488,"./mi":489,"./mi.js":489,"./mk":490,"./mk.js":490,"./ml":491,"./ml.js":491,"./mn":492,"./mn.js":492,"./mr":493,"./mr.js":493,"./ms":494,"./ms-my":495,"./ms-my.js":495,"./ms.js":494,"./mt":496,"./mt.js":496,"./my":497,"./my.js":497,"./nb":498,"./nb.js":498,"./ne":499,"./ne.js":499,"./nl":500,"./nl-be":501,"./nl-be.js":501,"./nl.js":500,"./nn":502,"./nn.js":502,"./oc-lnc":503,"./oc-lnc.js":503,"./pa-in":504,"./pa-in.js":504,"./pl":505,"./pl.js":505,"./pt":506,"./pt-br":507,"./pt-br.js":507,"./pt.js":506,"./ro":508,"./ro.js":508,"./ru":509,"./ru.js":509,"./sd":510,"./sd.js":510,"./se":511,"./se.js":511,"./si":512,"./si.js":512,"./sk":513,"./sk.js":513,"./sl":514,"./sl.js":514,"./sq":515,"./sq.js":515,"./sr":516,"./sr-cyrl":517,"./sr-cyrl.js":517,"./sr.js":516,"./ss":518,"./ss.js":518,"./sv":519,"./sv.js":519,"./sw":520,"./sw.js":520,"./ta":521,"./ta.js":521,"./te":522,"./te.js":522,"./tet":523,"./tet.js":523,"./tg":524,"./tg.js":524,"./th":525,"./th.js":525,"./tk":526,"./tk.js":526,"./tl-ph":527,"./tl-ph.js":527,"./tlh":528,"./tlh.js":528,"./tr":529,"./tr.js":529,"./tzl":530,"./tzl.js":530,"./tzm":531,"./tzm-latn":532,"./tzm-latn.js":532,"./tzm.js":531,"./ug-cn":533,"./ug-cn.js":533,"./uk":534,"./uk.js":534,"./ur":535,"./ur.js":535,"./uz":536,"./uz-latn":537,"./uz-latn.js":537,"./uz.js":536,"./vi":538,"./vi.js":538,"./x-pseudo":539,"./x-pseudo.js":539,"./yo":540,"./yo.js":540,"./zh-cn":541,"./zh-cn.js":541,"./zh-hk":542,"./zh-hk.js":542,"./zh-mo":543,"./zh-mo.js":543,"./zh-tw":544,"./zh-tw.js":544};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=562},639:function(t,e,n){"use strict";n.r(e);n(64),n(56),n(30),n(6),n(55),n(26),n(35),n(19),n(24),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(0),o=n(51),c=n(264),l=n(558);function d(t,e){var n;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(n=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=t[Symbol.iterator]()},n:function(){var t=n.next();return c=t.done,t},e:function(t){l=!0,o=t},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}var m=r.a.extend({components:{HistoryChart:l.default},head:function(){return{title:"ヒトケタス"}},data:function(){return{showChart:!1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){var t=this;window.setTimeout((function(){t.initHistoryDates(),t.singleHistory()}),0)},methods:{initHistoryDates:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t},startGame:function(){this.$router.replace({path:"/game-plus-single/modeSingle"})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,n=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<n}))},singleHistory:function(){var t,e=this.singleScores,n=[],r=[],o=d(this.historyDates);try{var c=function(){var o=t.value,c=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));n.push(c.length),c.length>0?r.push(c.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):r.push(0)};for(o.s();!(t=o.n()).done;)c()}catch(t){o.e(t)}finally{o.f()}return n.reduce((function(a,t){return a+t}))>0&&(this.showChart=!0),{labels:this.chartDates,datasets:[{label:"とくてん",data:r,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:n,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},singleScores:function(){return this.termFilteredScoreEntities("modeSingle")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),j=n(84),h=n(114),v=n.n(h),y=n(188),k=n(401),w=n(394),x=n(632),S=n(165),_=n(633),component=Object(j.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[t.showChart?n("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.singleHistory(),options:t.chartOptions}}):t._e(),t._v(" "),n("v-card-text",[n("v-row",{staticClass:"mt-2 mb-2"},[n("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"mr-auto"}},[t._v("ひとけたのすうじをたして、こたえにする")]),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSingle")}}},[n("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),n("Ranking",{attrs:{gameMode:"modeSingle",questionCount:-1}})],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Ranking:n(557).default}),v()(component,{VBtn:y.a,VCard:k.a,VCardText:w.b,VCol:x.a,VIcon:S.a,VRow:_.a})}}]);