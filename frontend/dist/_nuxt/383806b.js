(window.webpackJsonp=window.webpackJsonp||[]).push([[3,34,37],{421:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m}));var r=n(424),o=n(3),c=Object(o.h)("v-card__actions"),d=Object(o.h)("v-card__subtitle"),l=Object(o.h)("v-card__text"),m=Object(o.h)("v-card__title");r.a},463:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=["modeSprint-10","modeSprint-30","modeEndress","modeSingle","minusSprint-10","minusSprint-30","minusEndress","mul99Sprint-10","mul99Sprint-30","mul99Endress"];function o(e){return{mode:e,name:"",score:0,createdAt:0}}},609:function(e,t,n){"use strict";n.d(t,"a",(function(){return f})),n.d(t,"c",(function(){return h})),n.d(t,"b",(function(){return y}));var r=n(4),o=n(18),c=(n(59),n(30),n(12),n(8),n(9),n(14),n(11),n(17),n(158)),d=n(664);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(r.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}function f(e){return v.apply(this,arguments)}function v(){return(v=Object(o.a)(regeneratorRuntime.mark((function e(t){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c.a.firestore().collection("scores").add({mode:t.mode,name:t.name,score:t.score,createdAt:new Date(t.createdAt).setHours(0,0,0,0),timestamp:t.createdAt}),s=new d.a(t.mode),e.next=6,s.update(t.score);case 6:return e.abrupt("return",s.save);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function h(e){return S.apply(this,arguments)}function S(){return(S=Object(o.a)(regeneratorRuntime.mark((function e(t){var n,r,s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=sessionStorage.getItem("uid")||"",r=m(m({},t),{},{uid:n,createdAt:new Date(t.createdAt).setHours(0,0,0,0)}),c.a.firestore().collection("mazeScores").add(r),s=new d.a("maze20"),e.next=7,s.update(t.floor);case 7:return e.abrupt("return",s.save);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function y(e){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(regeneratorRuntime.mark((function e(t){var s;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),c.a.firestore().collection("jumpScores").add({name:t.name,character:t.character,score:t.score,createdAt:new Date(t.createdAt).setHours(0,0,0,0),timestamp:t.createdAt}),s=new d.a("jumpMan"),e.next=6,s.update(t.score);case 6:return e.abrupt("return",s.save);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},616:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d}));n(620),n(36),n(285);function r(e){return Number.isInteger(e)?"".concat(e):e.toFixed(2)}function o(e){return Number.isInteger(e)?e>0?"+".concat(e):"".concat(e):e>0?"+".concat(e.toFixed(2)):"".concat(e.toFixed(2))}function c(e){switch(e){case"modeSprint-10":case"minusSprint-10":case"mul99Sprint-10":return"10問モード";case"modeSprint-30":case"minusSprint-30":case"mul99Sprint-30":return"30問モード";case"modeEndress":case"minusEndress":case"mul99Endress":return"たいきゅうモード";case"modeSingle":return"ヒトケタス"}}function d(e){switch(e){case"modeSprint-10":return"たして１０ 10問モード";case"modeSprint-30":return"たして１０ 30問モード";case"modeEndress":return"たして１０ たいきゅうモード";case"modeSingle":return"ヒトケタス";case"minusSprint-10":return"ひきざん２０ 10問モード";case"minusSprint-30":return"ひきざん２０ 30問モード";case"minusEndress":return"ひきざん２０ たいきゅうモード";case"mul99Sprint-10":return"かけざん９９ 10問モード";case"mul99Sprint-30":return"かけざん９９ 30問モード";case"mul99Endress":return"かけざん９９ たいきゅうモード"}}},620:function(e,t,n){n(7)({target:"Number",stat:!0},{isInteger:n(621)})},621:function(e,t,n){var r=n(38),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}},626:function(e,t,n){"use strict";n.r(t);n(73);var r=n(2),o=n.p+"assets/se/count.mp3",c=n.p+"assets/se/count-0.mp3",d=r.a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var e=this;this.changeMode("ready"),this.readyCount=3,new Audio(o).play(),this.$emit("ready",e.readyCount),this.gameTimerId=window.setInterval((function(){if(console.log(e.readyCount),0==e.readyCount--)return window.clearInterval(e.gameTimerId),void e.start();e.readyCount>0?new Audio(o).play():new Audio(c).play(),e.$emit("ready",e.readyCount)}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){e.gameTime=(new Date).getTime()-e.gameStartTime,e.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var e=this;this.$nextTick((function(){e.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(e){this.mode=e,this.$emit("change-mode",e)}}}),l=n(80),component=Object(l.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports},627:function(e,t,n){"use strict";n.r(t);n(289);var r=n(2).a.extend({props:{mode:{type:String,default:"tap"}},data:function(){return{selected:[]}},mounted:function(){this.reset()},methods:{reset:function(){this.selected=Array(10).fill(!1)},onClick:function(e){"select"===this.mode&&this.$set(this.selected,e,!this.selected[e]),this.$emit("tap",e,this.selected[e])},isSelected:function(e){return this.selected[e]}}}),o=(n(759),n(80)),c=n(92),d=n.n(c),l=n(199),m=n(424),f=n(421),v=n(976),h=n(977),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(1)},on:{pointerdown:function(t){return e.onClick(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(2)},on:{pointerdown:function(t){return e.onClick(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(3)},on:{pointerdown:function(t){return e.onClick(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(4)},on:{pointerdown:function(t){return e.onClick(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(5)},on:{pointerdown:function(t){return e.onClick(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(6)},on:{pointerdown:function(t){return e.onClick(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(7)},on:{pointerdown:function(t){return e.onClick(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(8)},on:{pointerdown:function(t){return e.onClick(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(9)},on:{pointerdown:function(t){return e.onClick(9)}}},[e._v("9")])],1)],1)],1)],1)}),[],!1,null,"04788bc0",null);t.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardText:f.b,VCol:v.a,VRow:h.a})},628:function(e,t,n){"use strict";n.r(t);n(285);var r=n(2).a.extend({props:{statistic:{type:Object},isSprint:{type:Boolean,default:!1}},filters:{time2:function(e){return e.toFixed(2)}}}),o=(n(761),n(80)),c=n(92),d=n.n(c),l=n(976),m=n(977),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.statistic?n("div",{staticClass:"mt-2 mb-2"},[n("v-row",{staticClass:"score-container statistic"},[n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("はいすこあ")]),e._v(" "),e.isSprint?n("v-col",{staticClass:"value text-right",attrs:{cols:"mr-auto"}},[e._v(e._s(e._f("time2")(e.statistic.score)))]):n("v-col",{staticClass:"value text-right",attrs:{cols:"mr-auto"}},[e._v(e._s(e.statistic.score))])],1),e._v(" "),n("v-row",{staticClass:"score-container statistic"},[n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("かいすう")]),e._v(" "),n("v-col",{staticClass:"value text-right",attrs:{cols:"mr-auto"}},[e._v(e._s(e.statistic.count))])],1)],1):e._e()}),[],!1,null,"7b5bd930",null);t.default=component.exports;d()(component,{VCol:l.a,VRow:m.a})},629:function(e,t,n){"use strict";n.r(t);n(36),n(30),n(285),n(64),n(32),n(42),n(24),n(52),n(41),n(8),n(50),n(57),n(43);var r=n(2),o=n(37),c=n(286),d=n(463),l=n(616);function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var v=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{bg:""}},mounted:function(){var e=Math.floor((new Date).getTime()/864e5)%13;this.bg=n(650)("./bg-".concat(e,".jpg"))},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){console.log(this.displayGameMode);var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores;break;case"minusSprint-10":e=this.scoreStore.minusSprint10Hiscores;break;case"minusSprint-30":e=this.scoreStore.minusSprint30Hiscores;break;case"minusEndress":e=this.scoreStore.minusEndressHiscores;break;case"mul99Sprint-10":e=this.scoreStore.mul99Sprint10Hiscores;break;case"mul99Sprint-30":e=this.scoreStore.mul99Sprint30Hiscores;break;case"mul99Endress":e=this.scoreStore.mul99EndressHiscores}if(!e)return[];console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,d=m(t);try{for(d.s();!(n=d.n()).done;){var l=n.value;l.score!=r&&(r=l.score,o=c),l.no=o,c++}}catch(e){d.e(e)}finally{d.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:Object(d.b)(this.displayGameMode)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}},filters:{displayModeName:l.a}}),h=(n(765),n(80)),S=n(92),y=n.n(S),w=n(424),_=n(421),j=n(976),x=n(160),k=n(977),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("img",{staticClass:"poster",attrs:{src:e.bg}}),e._v(" "),n("v-card-title",{staticClass:"title"},[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e._f("displayModeName")(e.displayGameMode)))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"7b0078b7",null);t.default=component.exports;y()(component,{VCard:w.a,VCardText:_.b,VCardTitle:_.c,VCol:j.a,VIcon:x.a,VRow:k.a})},634:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},635:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},636:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},650:function(e,t,n){var map={"./bg-0.jpg":651,"./bg-1.jpg":652,"./bg-10.jpg":653,"./bg-11.jpg":654,"./bg-12.jpg":655,"./bg-2.jpg":656,"./bg-3.jpg":657,"./bg-4.jpg":658,"./bg-5.jpg":659,"./bg-6.jpg":660,"./bg-7.jpg":661,"./bg-8.jpg":662,"./bg-9.jpg":663};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=650},651:function(e,t,n){e.exports=n.p+"img/bg-0.8b71078.jpg"},652:function(e,t,n){e.exports=n.p+"img/bg-1.b4f5f60.jpg"},653:function(e,t,n){e.exports=n.p+"img/bg-10.9a6a60f.jpg"},654:function(e,t,n){e.exports=n.p+"img/bg-11.3e061a2.jpg"},655:function(e,t,n){e.exports=n.p+"img/bg-12.ad270ae.jpg"},656:function(e,t,n){e.exports=n.p+"img/bg-2.d208aea.jpg"},657:function(e,t,n){e.exports=n.p+"img/bg-3.201f578.jpg"},658:function(e,t,n){e.exports=n.p+"img/bg-4.0da6caf.jpg"},659:function(e,t,n){e.exports=n.p+"img/bg-5.e7fafa2.jpg"},660:function(e,t,n){e.exports=n.p+"img/bg-6.725d0b6.jpg"},661:function(e,t,n){e.exports=n.p+"img/bg-7.1999d7c.jpg"},662:function(e,t,n){e.exports=n.p+"img/bg-8.7b166a6.jpg"},663:function(e,t,n){e.exports=n.p+"img/bg-9.bc298bb.jpg"},664:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var r=n(18),o=n(25),c=n(34),d=(n(59),n(94),n(32),n(24),n(43),n(158)),l=["modeSprint-10","modeSprint-30","minusSprint-10","minusSprint-30","mul99Sprint-10","mul99Sprint-30"],m=function(){function e(t){var n=this;Object(o.a)(this,e);var r=sessionStorage.getItem("uid")||"";this.uid=r,this.mode=t,this.save=this.newSave(),this.sort=l.find((function(e){return e===n.mode}))?"asc":"desc"}var t,n,m;return Object(c.a)(e,[{key:"newSave",value:function(){return{uid:this.uid,mode:this.mode,count:0,score:-1}}},{key:"update",value:(m=Object(r.a)(regeneratorRuntime.mark((function e(t){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.loadData();case 2:this.save.count++,(-1==this.save.score||"asc"===this.sort&&t<this.save.score||"desc"===this.sort&&t>this.save.score)&&(this.save.score=t),this.saveData();case 5:case"end":return e.stop()}}),e,this)}))),function(e){return m.apply(this,arguments)})},{key:"loadData",value:(n=Object(r.a)(regeneratorRuntime.mark((function e(){var t,q,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=d.a.firestore(),q=t.collection("statistics").doc(this.docId()),e.next=4,q.get();case 4:(n=e.sent).exists?this.save=n.data():q.set(this.save);case 6:case"end":return e.stop()}}),e,this)}))),function(){return n.apply(this,arguments)})},{key:"saveData",value:function(){d.a.firestore().collection("statistics").doc(this.docId()).set(this.save)}},{key:"docId",value:function(){return"".concat(this.uid,"_").concat(this.mode)}}],[{key:"loadUserStatistic",value:(t=Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,q,o,c,l,m;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=sessionStorage.getItem("uid")||"",r=d.a.firestore(),q=r.collection("userStatistics").doc(n),t.next=5,q.get();case 5:o=t.sent,c=null,o.exists?c=o.data():(c=e.newUserStatistic(n),q.set(c)),t.t0=regeneratorRuntime.keys(c);case 9:if((t.t1=t.t0()).done){t.next=19;break}if("uid"!=(l=t.t1.value)){t.next=13;break}return t.abrupt("continue",9);case 13:return t.next=15,c[l].get();case 15:(m=t.sent).exists?c[l]=m.data():c[l]={count:0,score:-1},t.next=9;break;case 19:return t.abrupt("return",c);case 20:case"end":return t.stop()}}),t)}))),function(){return t.apply(this,arguments)})},{key:"newUserStatistic",value:function(e){var t=d.a.firestore().collection("statistics");return{uid:e,modeSprint10:t.doc("".concat(e,"_modeSprint-10")),modeSprint30:t.doc("".concat(e,"_modeSprint-30")),modeEndress:t.doc("".concat(e,"_modeEndress")),modeSingle:t.doc("".concat(e,"_modeSingle")),minusSprint10:t.doc("".concat(e,"_minusSprint-10")),minusSprint30:t.doc("".concat(e,"_minusSprint-30")),minusEndress:t.doc("".concat(e,"_minusEndress")),mul99Sprint10:t.doc("".concat(e,"_mul99Sprint-10")),mul99Sprint30:t.doc("".concat(e,"_mul99Sprint-30")),mul99Endress:t.doc("".concat(e,"_mul99Endress")),maze20:t.doc("".concat(e,"_maze20")),jumpMan:t.doc("".concat(e,"_jumpMan"))}}}]),e}()},694:function(e,t,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("3afc2df3",content,!0,{sourceMap:!1})},695:function(e,t,n){var content=n(762);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("421566c1",content,!0,{sourceMap:!1})},697:function(e,t,n){var content=n(766);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("38738263",content,!0,{sourceMap:!1})},759:function(e,t,n){"use strict";n(694)},760:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.digit-keyboard>.row>.col[data-v-04788bc0]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-04788bc0]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-04788bc0]{background-color:#ffecb3}',""]),e.exports=r},761:function(e,t,n){"use strict";n(695)},762:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.score-container>.label[data-v-7b5bd930]{font-weight:700;font-size:1rem}.score-container>.value[data-v-7b5bd930]{font-family:"Fredoka One";font-size:1.6rem}.score-container.statistic>*[data-v-7b5bd930]{padding:.5rem 1.5rem}',""]),e.exports=r},765:function(e,t,n){"use strict";n(697)},766:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.poster[data-v-7b0078b7]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;filter:opacity(.15)}.title[data-v-7b0078b7]{padding:.5rem .25rem}.rankings>*[data-v-7b0078b7]{padding:.25rem;font-size:.8rem}.rankings+.rankings[data-v-7b0078b7]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-7b0078b7]{background-color:#f0f4c3}.name[data-v-7b0078b7]{font-weight:700}.value[data-v-7b0078b7]{font-family:"Fredoka One";font-size:1rem}',""]),e.exports=r}}]);