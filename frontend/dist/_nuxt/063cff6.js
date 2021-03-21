(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{395:function(e,t,r){"use strict";var n=r(546);n.a.apps.length||n.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),t.a=n.a},398:function(e,t,r){var content=r(408);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("089b955a",content,!0,{sourceMap:!1})},407:function(e,t,r){"use strict";r(398)},408:function(e,t,r){var n=r(17)(!1);n.push([e.i,'.rankings>*[data-v-5146db1f]{padding:.5rem}.rankings+.rankings[data-v-5146db1f]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-5146db1f]{background-color:#f0f4c3}.value[data-v-5146db1f]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=n},547:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(262),r(55),r(26),r(35),r(19),r(48),r(34),r(5),r(42),r(50),r(39);var n=r(0),o=r(51),c=r(264);function l(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return d(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return d(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,n=function(){};return{s:n,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==r.return||r.return()}finally{if(l)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f=n.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores}console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var r,n=t[0].score,o=1,c=1,d=l(t);try{for(d.s();!(r=d.n()).done;){var f=r.value;f.score!=n&&(n=f.score,o=c),f.no=o,c++}}catch(e){d.e(e)}finally{d.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),m=(r(407),r(84)),v=r(114),h=r.n(v),w=r(401),y=r(394),_=r(632),T=r(165),S=r(633),A=r(389),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),r("v-card-text",e._l(e.hiscores,(function(t,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),r("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"5146db1f",null);t.default=component.exports;h()(component,{VCard:w.a,VCardText:y.b,VCardTitle:y.c,VCol:_.a,VIcon:T.a,VRow:S.a,VSpacer:A.a})},554:function(e,t,r){"use strict";t.a=r.p+"assets/se/answer-ok.mp3"},555:function(e,t,r){"use strict";t.a=r.p+"assets/se/answer-ng.mp3"},556:function(e,t,r){"use strict";t.a=r.p+"assets/se/end.mp3"},561:function(e,t,r){var content=r(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("c890c6d2",content,!0,{sourceMap:!1})},567:function(e,t,r){"use strict";r(561)},568:function(e,t,r){var n=r(17)(!1);n.push([e.i,'.game[data-v-28c585ea]{position:relative}.game>.ready[data-v-28c585ea]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-28c585ea],.game>.ready>*[data-v-28c585ea]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-28c585ea]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-28c585ea]{height:16vh}.ex-canvas>*[data-v-28c585ea]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.score-container>.label[data-v-28c585ea]{font-weight:700}.score-container>.value[data-v-28c585ea]{font-family:"Fredoka One";font-size:1.6rem}.answer-container[data-v-28c585ea]{position:relative;font-size:2rem;text-align:left}.answer-container .effect[data-v-28c585ea]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-28c585ea]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-28c585ea]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}',""]),e.exports=n},586:function(e,t,r){"use strict";r.r(t);r(262),r(56),r(30),r(265),r(64),r(6),r(73),r(24);var n=r(0),o=r(51),c=r(263),l=r(264),d=r(395),f=r(554),m=r(555),v=r.p+"assets/se/answer-1.mp3",h=r.p+"assets/se/answer-2.mp3",w=r(556);var y=n.a.extend({data:function(){return{gameMode:"modeSingle",mode:"",readyCount:0,score:0,score2:0,question:0,answers:[],displayAnswers:[],startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,gameTimerId:-1,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{home:function(){this.$router.replace({path:"/game-plus-single/"})},startGame:function(){var e=this;this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answers=Array(10).fill(0),this.displayAnswers=[],this.mode="ready",this.readyCount=3,this.gameTimerId=window.setInterval((function(){console.log(e.readyCount),0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.mode="game",this.next(),this.gameTimerId=window.setInterval((function(){(e.gameTime=(new Date).getTime()-e.gameStartTime,e.updateProgress())&&(e.addSingleScore(),e.endGame(),new Audio(w.a).play())}),100)},endGame:function(){this.mode="end",window.clearInterval(this.gameTimerId),this.gameTimerId=-1},next:function(){var q=Math.floor(this.score/5)+4*Math.floor(this.score/10)+8*Math.floor(this.score/20);q=Math.min(q+6,44),this.question=Math.floor(100*Math.random())%q+1,this.answers.fill(0),this.displayAnswers=[],this.startTime=(new Date).getTime(),this.answerTime=1e4-200*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,5e3)},isUsed:function(e){return 0!==this.answers[e]},onAnswer:function(e){if("game"===this.mode){new Audio(f.a).play(),this.answers[e]=e,this.displayAnswers.push(e);var t=this.answers.reduce((function(e,t){return e+t}));if(t===this.question){var r=this.answers.filter((function(e){return 0!==e})).length;this.score+=1;var n=null;r>6||r>4?n=new Audio(h):r>=2&&(n=new Audio(v)),n&&n.play();var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(this.score+time/50)*r,this.updateProgress(),this.answerEffect("o ".concat(this.displayAnswers.join("+"))),this.next()}else if(t>this.question){this.answers.fill(0),this.displayAnswers=[],this.answerEffect("x"),this.penaltyTime+=1e3,this.answerTime-=1e3,new Audio(m.a).play()}}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time},addSingleScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)},entryHiscore:function(e){console.log(e),d.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0)})}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},scoreStore:function(){return Object(o.e)(l.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},displayScore:function(){return this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),_=(r(567),r(84)),T=r(114),S=r.n(T),A=r(188),x=r(401),k=r(394),C=r(632),M=r(174),I=r(165),G=r(403),E=r(633),V=r(389),component=Object(_.a)(y,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[e.isEnd?r("v-card",[r("Hiscore",{attrs:{gameMode:e.gameMode}})],1):e._e(),e._v(" "),r("v-card",[r("v-card-text",{staticClass:"green lighten-4"},[r("v-row",{staticClass:"score-container"},[r("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),r("v-fade-transition",[e.isEnd?r("v-card-text",{staticClass:"green lighten-5"},[r("v-row",{staticClass:"ex-canvas text-center"},[r("v-col",{attrs:{"align-self":"center"}},[r("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.home()}}},[r("v-icon",[e._v("mdi-playlist-edit")]),e._v("ヒトケタス\n            ")],1),e._v(" "),r("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n              もういちど\n            ")])],1)],1)],1):e.isGame?r("v-card-text",{staticClass:"green lighten-5"},[r("v-row",{staticClass:"ex-canvas"},[r("v-col",{staticClass:"answer-container",attrs:{cols:"mr-auto","align-self":"center"}},[e._l(e.displayAnswers,(function(t){return r("span",{key:t},[r("span",[e._v(e._s(t))]),e._v(" "),r("span",[e._v("+")])])})),e._v(" "),r("v-slide-y-reverse-transition",[e.showAnswerEffect?r("div",{staticClass:"effect orange--text"},[e._v("\n                "+e._s(e.effects.answer)+"\n              ")]):e._e()])],2),e._v(" "),r("v-col",{staticClass:"question-container",attrs:{cols:"auto","align-self":"center"}},[r("span",{staticClass:"light-green--text"},[e._v("\n              =\n            ")]),e._v(" "),r("span",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n              "+e._s(e.question)+"\n            ")])])],1),e._v(" "),r("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1)],1),e._v(" "),e.isGame?r("v-card",[r("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(1)},on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(2)},on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(3)},on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(4)},on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(5)},on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(6)},on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(7)},on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(8)},on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{attrs:{disabled:e.isUsed(9)},on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),r("v-fade-transition",[e.isReady?r("div",{staticClass:"ready"},[r("v-slide-y-reverse-transition",[3===e.readyCount?r("div",[e._v("3")]):e._e()]),e._v(" "),r("v-slide-y-reverse-transition",[2===e.readyCount?r("div",[e._v("2")]):e._e()]),e._v(" "),r("v-slide-y-reverse-transition",[1===e.readyCount?r("div",[e._v("1")]):e._e()]),e._v(" "),r("v-slide-y-reverse-transition",[0===e.readyCount?r("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"28c585ea",null);t.default=component.exports;S()(component,{Hiscore:r(547).default}),S()(component,{VBtn:A.a,VCard:x.a,VCardText:k.b,VCol:C.a,VFadeTransition:M.b,VIcon:I.a,VProgressLinear:G.a,VRow:E.a,VSlideYReverseTransition:M.d,VSpacer:V.a})}}]);