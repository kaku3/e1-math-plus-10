(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{395:function(e,t,n){"use strict";var r=n(546);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),t.a=r.a},398:function(e,t,n){var content=n(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("9eca37c8",content,!0,{sourceMap:!1})},407:function(e,t,n){"use strict";n(398)},408:function(e,t,n){var r=n(17)(!1);r.push([e.i,'.title[data-v-b0c36464]{padding:.5rem .25rem}.rankings>*[data-v-b0c36464]{padding:.25rem}.rankings+.rankings[data-v-b0c36464]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-b0c36464]{background-color:#f0f4c3}.value[data-v-b0c36464]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=r},547:function(e,t,n){"use strict";n.r(t);n(25),n(24),n(262),n(55),n(26),n(35),n(19),n(48),n(34),n(5),n(42),n(50),n(39);var r=n(0),o=n(51),c=n(264);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores}console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,d=l(t);try{for(d.s();!(n=d.n()).done;){var m=n.value;m.score!=r&&(r=m.score,o=c),m.no=o,c++}}catch(e){d.e(e)}finally{d.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),f=(n(407),n(84)),v=n(114),h=n.n(v),w=n(401),y=n(394),_=n(632),S=n(165),T=n(633),x=n(389),component=Object(f.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"title"},[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"b0c36464",null);t.default=component.exports;h()(component,{VCard:w.a,VCardText:y.b,VCardTitle:y.c,VCol:_.a,VIcon:S.a,VRow:T.a,VSpacer:x.a})},554:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},555:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},556:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},561:function(e,t,n){var content=n(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("3a16a4b2",content,!0,{sourceMap:!1})},567:function(e,t,n){"use strict";n(561)},568:function(e,t,n){var r=n(17)(!1);r.push([e.i,'.game[data-v-71920d6e]{position:relative}.game>.ready[data-v-71920d6e]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-71920d6e],.game>.ready>*[data-v-71920d6e]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-71920d6e]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-71920d6e]{height:16vh}.ex-canvas>*[data-v-71920d6e]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.score-container>.label[data-v-71920d6e]{font-weight:700}.score-container>.value[data-v-71920d6e]{font-family:"Fredoka One";font-size:1.6rem}.answer-container[data-v-71920d6e]{position:relative;font-size:2rem;text-align:left}.answer-container .effect[data-v-71920d6e]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-71920d6e]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-71920d6e]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-71920d6e]{background-color:#ffecb3}',""]),e.exports=r},586:function(e,t,n){"use strict";n.r(t);n(262),n(56),n(30),n(265),n(64),n(6),n(73),n(24);var r=n(0),o=n(51),c=n(263),l=n(264),d=n(395),m=n(554),f=n(555),v=n.p+"assets/se/answer-1.mp3",h=n.p+"assets/se/answer-2.mp3",w=n(556);var y=r.a.extend({data:function(){return{gameMode:"modeSingle",mode:"",readyCount:0,score:0,score2:0,question:0,answers:[],displayAnswers:[],startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,gameTimerId:-1,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{home:function(){this.$router.replace({path:"/game-plus-single/"})},startGame:function(){var e=this;this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answers=Array(10).fill(0),this.displayAnswers=[],this.mode="ready",this.readyCount=3,this.gameTimerId=window.setInterval((function(){console.log(e.readyCount),0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.mode="game",this.next(),this.gameTimerId=window.setInterval((function(){(e.gameTime=(new Date).getTime()-e.gameStartTime,e.updateProgress())&&(e.addSingleScore(),e.endGame(),new Audio(w.a).play())}),200)},endGame:function(){this.mode="end",window.clearInterval(this.gameTimerId),this.gameTimerId=-1},next:function(){var e=3*Math.floor(this.score/3)+12*Math.floor(this.score/10)+6,t=Math.floor(this.score/5)+3;t=Math.min(t,20),e=Math.min(e,45-t),this.question=Math.floor(100*Math.random())%(e-t)+t,this.answers.fill(0),this.displayAnswers=[],this.startTime=(new Date).getTime(),this.answerTime=1e4-200*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,3e3)},isSelected:function(e){return 0!==this.answers[e]},onAnswer:function(e){if("game"===this.mode){new Audio(m.a).play(),0===this.answers[e]?(this.answers[e]=e,this.displayAnswers.push(e)):(this.answers[e]=0,this.displayAnswers=this.displayAnswers.filter((function(t){return t!==e})));var t=this.answers.reduce((function(e,t){return e+t}));if(t===this.question){var n=this.answers.filter((function(e){return 0!==e})).length;this.score+=1;var r=null;n>6||n>4?r=new Audio(h):n>=2&&(r=new Audio(v)),r&&r.play();var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(this.score+time/50)*(1<<n),this.updateProgress(),this.answerEffect("o ".concat(this.displayAnswers.join("+"))),this.next()}else if(t>this.question){this.answers.fill(0),this.displayAnswers=[],this.answerEffect("x"),this.penaltyTime+=1e3,this.answerTime-=1e3,new Audio(f.a).play()}}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time},addSingleScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)}},entryHiscore:function(e){console.log(e),d.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0)})}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},scoreStore:function(){return Object(o.e)(l.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},displayScore:function(){return this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),_=(n(567),n(84)),S=n(114),T=n.n(S),x=n(188),A=n(401),k=n(394),C=n(632),M=n(174),I=n(165),G=n(403),E=n(633),V=n(389),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.home()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("ヒトケタス\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"answer-container",attrs:{cols:"mr-auto","align-self":"center"}},[e._l(e.displayAnswers,(function(t){return n("span",{key:t},[n("span",[e._v(e._s(t))]),e._v(" "),n("span",[e._v("+")])])})),e._v(" "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],2),e._v(" "),n("v-col",{staticClass:"question-container",attrs:{cols:"auto","align-self":"center"}},[n("span",{staticClass:"light-green--text"},[e._v("\n            =\n          ")]),e._v(" "),n("span",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n            "+e._s(e.question)+"\n          ")])])],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(1)},on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(2)},on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(3)},on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(4)},on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(5)},on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(6)},on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(7)},on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(8)},on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(9)},on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),n("v-fade-transition",[e.isReady?n("div",{staticClass:"ready"},[n("v-slide-y-reverse-transition",[3===e.readyCount?n("div",[e._v("3")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[2===e.readyCount?n("div",[e._v("2")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[1===e.readyCount?n("div",[e._v("1")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[0===e.readyCount?n("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"71920d6e",null);t.default=component.exports;T()(component,{Hiscore:n(547).default}),T()(component,{VBtn:x.a,VCard:A.a,VCardText:k.b,VCol:C.a,VFadeTransition:M.b,VIcon:I.a,VProgressLinear:G.a,VRow:E.a,VSlideYReverseTransition:M.d,VSpacer:V.a})},641:function(e,t,n){"use strict";n.r(t);var r=n(23),o=(n(70),n(0).a.extend({asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,console.log(e),t.abrupt("return",{mode:n.game});case 3:case"end":return t.stop()}}),t)})))()}})),c=n(84),component=Object(c.a)(o,(function(){var e=this.$createElement;return(this._self._c||e)("GamePlusSingle")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{GamePlusSingle:n(586).default})}}]);