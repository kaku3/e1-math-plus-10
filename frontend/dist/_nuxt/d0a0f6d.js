(window.webpackJsonp=window.webpackJsonp||[]).push([[7,31],{420:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m}));var r=n(423),o=n(3),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),m=Object(o.g)("v-card__title");r.a},433:function(e,t,n){"use strict";n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}));var r=["modeSprint-10","modeSprint-30","modeEndress","modeSingle","minusSprint-10","minusSprint-30","minusEndress","mul99Sprint-10","mul99Sprint-30","mul99Endress"];function o(e){return{mode:e,name:"",score:0,createdAt:0}}},593:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"d",(function(){return o})),n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return d}));n(596),n(36),n(284);function r(e){return Number.isInteger(e)?"".concat(e):e.toFixed(2)}function o(e){return Number.isInteger(e)?e>0?"+".concat(e):"".concat(e):e>0?"+".concat(e.toFixed(2)):"".concat(e.toFixed(2))}function c(e){switch(e){case"modeSprint-10":case"minusSprint-10":case"mul99Sprint-10":return"10問モード";case"modeSprint-30":case"minusSprint-30":case"mul99Sprint-30":return"30問モード";case"modeEndress":case"minusEndress":case"mul99Endress":return"たいきゅうモード";case"modeSingle":return"ヒトケタス"}}function d(e){switch(e){case"modeSprint-10":return"たして１０ 10問モード";case"modeSprint-30":return"たして１０ 30問モード";case"modeEndress":return"たして１０ たいきゅうモード";case"modeSingle":return"ヒトケタス";case"minusSprint-10":return"ひきざん２０ 10問モード";case"minusSprint-30":return"ひきざん２０ 30問モード";case"minusEndress":return"ひきざん２０ たいきゅうモード";case"mul99Sprint-10":return"かけざん９９ 10問モード";case"mul99Sprint-30":return"かけざん９９ 30問モード";case"mul99Endress":return"かけざん９９ たいきゅうモード"}}},596:function(e,t,n){n(7)({target:"Number",stat:!0},{isInteger:n(597)})},597:function(e,t,n){var r=n(37),o=Math.floor;e.exports=function(e){return!r(e)&&isFinite(e)&&o(e)===e}},598:function(e,t,n){var content=n(628);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("3afc2df3",content,!0,{sourceMap:!1})},599:function(e,t,n){var content=n(630);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("38738263",content,!0,{sourceMap:!1})},605:function(e,t,n){var map={"./bg-0.jpg":606,"./bg-1.jpg":607,"./bg-10.jpg":608,"./bg-11.jpg":609,"./bg-12.jpg":610,"./bg-2.jpg":611,"./bg-3.jpg":612,"./bg-4.jpg":613,"./bg-5.jpg":614,"./bg-6.jpg":615,"./bg-7.jpg":616,"./bg-8.jpg":617,"./bg-9.jpg":618};function r(e){var t=o(e);return n(t)}function o(e){if(!n.o(map,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return map[e]}r.keys=function(){return Object.keys(map)},r.resolve=o,e.exports=r,r.id=605},606:function(e,t,n){e.exports=n.p+"img/bg-0.8b71078.jpg"},607:function(e,t,n){e.exports=n.p+"img/bg-1.b4f5f60.jpg"},608:function(e,t,n){e.exports=n.p+"img/bg-10.9a6a60f.jpg"},609:function(e,t,n){e.exports=n.p+"img/bg-11.3e061a2.jpg"},610:function(e,t,n){e.exports=n.p+"img/bg-12.ad270ae.jpg"},611:function(e,t,n){e.exports=n.p+"img/bg-2.d208aea.jpg"},612:function(e,t,n){e.exports=n.p+"img/bg-3.201f578.jpg"},613:function(e,t,n){e.exports=n.p+"img/bg-4.0da6caf.jpg"},614:function(e,t,n){e.exports=n.p+"img/bg-5.e7fafa2.jpg"},615:function(e,t,n){e.exports=n.p+"img/bg-6.725d0b6.jpg"},616:function(e,t,n){e.exports=n.p+"img/bg-7.1999d7c.jpg"},617:function(e,t,n){e.exports=n.p+"img/bg-8.7b166a6.jpg"},618:function(e,t,n){e.exports=n.p+"img/bg-9.bc298bb.jpg"},626:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n(30);var r=n(158);function o(e){console.log(e),r.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0),timestamp:e.createdAt})}function c(e){var t=sessionStorage.getItem("uid")||"";r.a.firestore().collection("mazeScores").add({uid:t,name:e.name,floor:e.floor,coin:e.coin,createdAt:new Date(e.createdAt).setHours(0,0,0,0),timestamp:e.createdAt})}},627:function(e,t,n){"use strict";n(598)},628:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.digit-keyboard>.row>.col[data-v-04788bc0]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-04788bc0]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-04788bc0]{background-color:#ffecb3}',""]),e.exports=r},629:function(e,t,n){"use strict";n(599)},630:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.poster[data-v-7b0078b7]{position:absolute;width:100%;height:100%;-o-object-fit:cover;object-fit:cover;filter:opacity(.15)}.title[data-v-7b0078b7]{padding:.5rem .25rem}.rankings>*[data-v-7b0078b7]{padding:.25rem;font-size:.8rem}.rankings+.rankings[data-v-7b0078b7]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-7b0078b7]{background-color:#f0f4c3}.name[data-v-7b0078b7]{font-weight:700}.value[data-v-7b0078b7]{font-family:"Fredoka One";font-size:1rem}',""]),e.exports=r},636:function(e,t,n){"use strict";n.r(t);n(73);var r=n(2),o=n.p+"assets/se/count.mp3",c=n.p+"assets/se/count-0.mp3",d=r.a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var e=this;this.changeMode("ready"),this.readyCount=3,new Audio(o).play(),this.$emit("ready",e.readyCount),this.gameTimerId=window.setInterval((function(){if(console.log(e.readyCount),0==e.readyCount--)return window.clearInterval(e.gameTimerId),void e.start();e.readyCount>0?new Audio(o).play():new Audio(c).play(),e.$emit("ready",e.readyCount)}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){e.gameTime=(new Date).getTime()-e.gameStartTime,e.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var e=this;this.$nextTick((function(){e.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(e){this.mode=e,this.$emit("change-mode",e)}}}),l=n(80),component=Object(l.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports},637:function(e,t,n){"use strict";n.r(t);n(287);var r=n(2).a.extend({props:{mode:{type:String,default:"tap"}},data:function(){return{selected:[]}},mounted:function(){this.reset()},methods:{reset:function(){this.selected=Array(10).fill(!1)},onClick:function(e){"select"===this.mode&&this.$set(this.selected,e,!this.selected[e]),this.$emit("tap",e,this.selected[e])},isSelected:function(e){return this.selected[e]}}}),o=(n(627),n(80)),c=n(92),d=n.n(c),l=n(199),m=n(423),f=n(420),h=n(837),v=n(838),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(1)},on:{pointerdown:function(t){return e.onClick(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(2)},on:{pointerdown:function(t){return e.onClick(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(3)},on:{pointerdown:function(t){return e.onClick(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(4)},on:{pointerdown:function(t){return e.onClick(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(5)},on:{pointerdown:function(t){return e.onClick(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(6)},on:{pointerdown:function(t){return e.onClick(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(7)},on:{pointerdown:function(t){return e.onClick(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(8)},on:{pointerdown:function(t){return e.onClick(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(9)},on:{pointerdown:function(t){return e.onClick(9)}}},[e._v("9")])],1)],1)],1)],1)}),[],!1,null,"04788bc0",null);t.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardText:f.b,VCol:h.a,VRow:v.a})},638:function(e,t,n){"use strict";n.r(t);n(36),n(30),n(284),n(64),n(32),n(41),n(24),n(52),n(40),n(8),n(50),n(57),n(42);var r=n(2),o=n(45),c=n(285),d=n(433),l=n(593);function m(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var h=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{bg:""}},mounted:function(){var e=Math.floor((new Date).getTime()/864e5)%13;this.bg=n(605)("./bg-".concat(e,".jpg"))},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){console.log(this.displayGameMode);var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores;break;case"minusSprint-10":e=this.scoreStore.minusSprint10Hiscores;break;case"minusSprint-30":e=this.scoreStore.minusSprint30Hiscores;break;case"minusEndress":e=this.scoreStore.minusEndressHiscores;break;case"mul99Sprint-10":e=this.scoreStore.mul99Sprint10Hiscores;break;case"mul99Sprint-30":e=this.scoreStore.mul99Sprint30Hiscores;break;case"mul99Endress":e=this.scoreStore.mul99EndressHiscores}if(!e)return[];console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,d=m(t);try{for(d.s();!(n=d.n()).done;){var l=n.value;l.score!=r&&(r=l.score,o=c),l.no=o,c++}}catch(e){d.e(e)}finally{d.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:Object(d.b)(this.displayGameMode)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}},filters:{displayModeName:l.a}}),v=(n(629),n(80)),w=n(92),y=n.n(w),S=n(423),_=n(420),x=n(837),T=n(160),C=n(838),component=Object(v.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("img",{staticClass:"poster",attrs:{src:e.bg}}),e._v(" "),n("v-card-title",{staticClass:"title"},[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e._f("displayModeName")(e.displayGameMode)))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"7b0078b7",null);t.default=component.exports;y()(component,{VCard:S.a,VCardText:_.b,VCardTitle:_.c,VCol:x.a,VIcon:T.a,VRow:C.a})},643:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},644:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},645:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},747:function(e,t,n){var content=n(813);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(23).default)("92ac6606",content,!0,{sourceMap:!1})},812:function(e,t,n){"use strict";n(747)},813:function(e,t,n){var r=n(22)(!1);r.push([e.i,'.game[data-v-1a182539]{position:relative}.ex-canvas[data-v-1a182539]{min-height:16vh}.ex-canvas>*[data-v-1a182539]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.score-container>.label[data-v-1a182539]{font-weight:700}.score-container>.value[data-v-1a182539]{font-family:"Fredoka One";font-size:1.6rem}.answer-container[data-v-1a182539]{position:relative;font-size:2rem;text-align:left}.answer-container .effect[data-v-1a182539]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}',""]),e.exports=r},832:function(e,t,n){"use strict";n.r(t);n(284),n(65),n(38),n(287),n(9),n(82),n(73),n(30);var r=n(2),o=n(636),c=n(637),d=n(45),l=n(283),m=n(285),f=n(626),h=n(643),v=n(644),w=n.p+"assets/se/answer-1.mp3",y=n.p+"assets/se/answer-2.mp3",S=n(645);var _=r.a.extend({mixins:[o.default],components:{NumPad:c.default},data:function(){return{gameMode:"modeSingle",mode:"",readyCount:0,score:0,score2:0,question:0,answers:[],displayAnswers:[],startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{home:function(){this.$router.replace({path:"/game-plus-single/"})},startGame:function(){this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answers=Array(10).fill(0),this.displayAnswers=[],this.ready()},onNext:function(){this.next()},onUpdateProgress:function(){this.updateProgress()&&(this.endGame(),this.addSingleScore(),new Audio(S.a).play())},next:function(){this.$refs.numPad.reset();var e=3*Math.floor(this.score/3)+12*Math.floor(this.score/10)+6,t=Math.floor(this.score/5)+3;t=Math.min(t,20),e=Math.min(e,45),this.question=Math.floor(Math.random()*(e-t+1)+t),this.answers.fill(0),this.displayAnswers=[],this.startTime=(new Date).getTime(),this.answerTime=1e4-200*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,2e3)},isSelected:function(e){return 0!==this.answers[e]},onSelect:function(e,t){this.onAnswer(e)},onAnswer:function(e){if("game"===this.mode){new Audio(h.a).play(),0===this.answers[e]?(this.answers[e]=e,this.displayAnswers.push(e)):(this.answers[e]=0,this.displayAnswers=this.displayAnswers.filter((function(t){return t!==e})));var t=this.answers.reduce((function(e,t){return e+t}));if(t===this.question){var n=this.answers.filter((function(e){return 0!==e})).length;this.score++;var r=null;n>6||n>4?r=new Audio(y):n>=2&&(r=new Audio(w)),r&&r.play();var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(this.score+time/50)*(1<<n),this.updateProgress(),this.answerEffect("o ".concat(this.displayAnswers.join("+"))),this.next()}else if(t>this.question){this.$refs.numPad.reset(),this.answers.fill(0),this.displayAnswers=[],this.answerEffect("x"),this.penaltyTime+=1e3,this.answerTime-=1e3,new Audio(v.a).play()}}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time},addSingleScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(f.a)(t)}}},computed:{accountStore:function(){return Object(d.e)(l.default,this.$store)},scoreStore:function(){return Object(d.e)(m.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},displayScore:function(){return this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),x=(n(812),n(80)),T=n(92),C=n.n(T),j=n(199),M=n(423),k=n(420),A=n(837),E=n(160),I=n(422),O=n(838),V=n(193),$=n(416),component=Object(x.a)(_,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.home()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("ヒトケタス\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"answer-container",attrs:{cols:"mr-auto","align-self":"center"}},[e._l(e.displayAnswers,(function(t){return n("span",{key:t},[n("span",[e._v(e._s(t))]),e._v(" "),n("span",[e._v("+")])])})),e._v(" "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],2),e._v(" "),n("v-col",{staticClass:"question-container",attrs:{cols:"auto","align-self":"center"}},[n("span",{staticClass:"light-green--text"},[e._v("\n            =\n          ")]),e._v(" "),n("span",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n            "+e._s(e.question)+"\n          ")])])],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?n("NumPad",{ref:"numPad",attrs:{mode:"select"},on:{tap:e.onSelect}}):e._e()],1)}),[],!1,null,"1a182539",null);t.default=component.exports;C()(component,{Hiscore:n(638).default}),C()(component,{VBtn:j.a,VCard:M.a,VCardText:k.b,VCol:A.a,VIcon:E.a,VProgressLinear:I.a,VRow:O.a,VSlideYReverseTransition:V.d,VSpacer:$.a})}}]);