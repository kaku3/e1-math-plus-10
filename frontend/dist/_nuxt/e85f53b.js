(window.webpackJsonp=window.webpackJsonp||[]).push([[10,11],{395:function(e,t,n){"use strict";var r=n(541);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),t.a=r.a},399:function(e,t,n){var content=n(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("089b955a",content,!0,{sourceMap:!1})},545:function(e,t,n){"use strict";n(399)},546:function(e,t,n){var r=n(17)(!1);r.push([e.i,'.rankings>*[data-v-5146db1f]{padding:.5rem}.rankings+.rankings[data-v-5146db1f]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-5146db1f]{background-color:#f0f4c3}.value[data-v-5146db1f]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=r},548:function(e,t,n){"use strict";n.r(t);n(25),n(24),n(261),n(55),n(26),n(35),n(19),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(0),o=n(51),c=n(263);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores}console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,l=d(t);try{for(l.s();!(n=l.n()).done;){var m=n.value;m.score!=r&&(r=m.score,o=c),m.no=o,c++}}catch(e){l.e(e)}finally{l.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),f=(n(545),n(84)),v=n(114),h=n.n(v),w=n(556),y=n(394),_=n(630),S=n(165),T=n(631),C=n(389),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"5146db1f",null);t.default=component.exports;h()(component,{VCard:w.a,VCardText:y.b,VCardTitle:y.c,VCol:_.a,VIcon:S.a,VRow:T.a,VSpacer:C.a})},550:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},551:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},552:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},558:function(e,t,n){var content=n(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("3e259082",content,!0,{sourceMap:!1})},566:function(e,t,n){"use strict";n(558)},567:function(e,t,n){var r=n(17)(!1);r.push([e.i,'.game[data-v-1a00ae22]{position:relative}.game>.ready[data-v-1a00ae22]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-1a00ae22],.game>.ready>*[data-v-1a00ae22]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-1a00ae22]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-1a00ae22]{height:16vh}.ex-canvas>*[data-v-1a00ae22]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-1a00ae22]{position:relative;border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-1a00ae22]{font-weight:700}.score-container>.value[data-v-1a00ae22]{font-family:"Fredoka One";font-size:1.6rem}.effect[data-v-1a00ae22]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-1a00ae22]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-1a00ae22]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}',""]),e.exports=r},587:function(e,t,n){"use strict";n.r(t);n(261),n(25),n(56),n(30),n(64),n(24),n(26);var r=n(0),o=n(51),c=n(262),d=n(263),l=n(395),m=n(550),f=n(551),v=n.p+"assets/se/finish.mp3",h=n(552);var w=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",readyCount:0,score:0,score2:0,question:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,gameTimerId:-1,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){console.log(this.gameMode,this.questionCount),this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{home:function(){console.log(this.gameMode,this.questionCount),this.$router.replace({path:"/",params:{mode:this.gameMode,count:"".concat(this.questionCount)}})},startGame:function(){var e=this;this.score=0,this.score2=0,this.penaltyTime=0,this.question=0,this.answer=0,this.mode="ready",this.readyCount=3,this.gameTimerId=window.setInterval((function(){console.log(e.readyCount),0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.mode="game",this.next(),this.gameTimerId=window.setInterval((function(){(e.gameTime=(new Date).getTime()-e.gameStartTime,e.updateProgress())&&(e.addEndressScore(),e.endGame(),new Audio(h.a).play())}),100)},endGame:function(){this.mode="end",window.clearInterval(this.gameTimerId),this.gameTimerId=-1},next:function(){this.question=(3*this.question+Math.floor(100*Math.random()))%9+1,this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,1200)},onAnswer:function(e){if("game"===this.mode)if(this.question+e===10){if(this.score+=1,"modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/20)}if(this.updateProgress(),this.answerEffect("o ".concat(e)),new Audio(m.a).play(),"modeSprint"===this.gameMode)if(this.score===this.questionCount)return this.addSprintScore(),this.endGame(),void new Audio(v).play();this.next()}else{this.answer=e,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(f.a).play()}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},addSprintScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode,"-").concat(this.questionCount),name:e,score:this.getDisplayTime(),createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)},addEndressScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)},entryHiscore:function(e){console.log(e),l.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0)})}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},scoreStore:function(){return Object(o.e)(d.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},displayScore:function(){return"modeSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),y=(n(566),n(84)),_=n(114),S=n.n(_),T=n(188),C=n(556),x=n(394),k=n(630),M=n(174),A=n(165),I=n(557),E=n(631),G=n(389),component=Object(y.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode,questionCount:e.questionCount}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),n("v-fade-transition",[e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.home()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("たして１０\n            ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n              もういちど\n            ")])],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[e._v("\n            "+e._s(e.question)+"\n          ")]),e._v(" "),n("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[e._v("\n            +\n          ")]),e._v(" "),n("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[e._v("\n            "+e._s(e._f("answered")(e.answer))+"\n            "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n                "+e._s(e.effects.answer)+"\n              ")]):e._e()])],1),e._v(" "),n("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[e._v("\n            =\n          ")]),e._v(" "),n("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n            10\n          ")])],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1)],1),e._v(" "),e.isGame?n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),n("v-fade-transition",[e.isReady?n("div",{staticClass:"ready"},[n("v-slide-y-reverse-transition",[3===e.readyCount?n("div",[e._v("3")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[2===e.readyCount?n("div",[e._v("2")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[1===e.readyCount?n("div",[e._v("1")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[0===e.readyCount?n("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"1a00ae22",null);t.default=component.exports;S()(component,{Hiscore:n(548).default}),S()(component,{VBtn:T.a,VCard:C.a,VCardText:x.b,VCol:k.a,VFadeTransition:M.b,VIcon:A.a,VProgressLinear:I.a,VRow:E.a,VSlideYReverseTransition:M.d,VSpacer:G.a})}}]);