(window.webpackJsonp=window.webpackJsonp||[]).push([[12,6,7],{397:function(e,t,r){"use strict";r.d(t,"a",(function(){return d}));var n=r(400),o=r(1),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),m=Object(o.g)("v-card__title");n.a},538:function(e,t,r){var content=r(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("7db391f7",content,!0,{sourceMap:!1})},543:function(e,t,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("7d07097d",content,!0,{sourceMap:!1})},546:function(e,t,r){"use strict";r(538)},547:function(e,t,r){var n=r(18)(!1);n.push([e.i,'.ex-canvas[data-v-58870429]{height:16vh}.ex-canvas>*[data-v-58870429]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-58870429]{border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-58870429]{font-weight:700}.score-container>.value[data-v-58870429]{font-family:"Fredoka One";font-size:1.6rem}.score-container .effect[data-v-58870429]{font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-58870429]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-58870429]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}',""]),e.exports=n},548:function(e,t,r){"use strict";r(543)},549:function(e,t,r){var n=r(18)(!1);n.push([e.i,".entry[data-v-432d628f]{background-color:#f0f4c3}",""]),e.exports=n},568:function(e,t,r){"use strict";r.r(t);r(265),r(25),r(66),r(24),r(27);var n=r(0),o=r(53),c=r(267),l=r(263),d=r.p+"assets/se/answer-ok.mp3",m=r.p+"assets/se/answer-ng.mp3",f=r.p+"assets/se/finish.mp3",v=r.p+"assets/se/end.mp3";var h=n.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",score:0,score2:0,question:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,gameTimerId:-1,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{startGame:function(){var e=this;this.score=0,this.score2=0,this.mode="game",this.gameStartTime=(new Date).getTime(),this.next(),this.gameTimerId=window.setInterval((function(){(e.gameTime=(new Date).getTime()-e.gameStartTime,e.updateProgress())&&(e.addEndressScore(),e.endGame(),new Audio(v).play())}),200)},endGame:function(){this.mode="end",window.clearInterval(this.gameTimerId),this.gameTimerId=-1},next:function(){this.question=(3*this.question+Math.floor(100*Math.random()))%9+1,this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,1200)},onAnswer:function(e){if("game"===this.mode)if(this.question+e===10){if(this.score+=1,"modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/100)}if(this.updateProgress(),this.answerEffect("o"),new Audio(d).play(),"modeSprint"===this.gameMode)if(this.score===this.questionCount)return this.addSprintScore(),this.endGame(),void new Audio(f).play();this.next()}else{this.answer=e,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(m).play()}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},addSprintScore:function(){var e=this.accountStore.account.name,t="".concat(this.gameMode,"-").concat(this.questionCount),r=this.getDisplayTime();this.scoreStore.addScore({mode:t,name:e,score:r,createdAt:this.gameStartTime})},addEndressScore:function(){var e=this.accountStore.account.name,t="".concat(this.gameMode),r=this.score2;this.scoreStore.addScore({mode:t,name:e,score:r,createdAt:this.gameStartTime})}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},scoreStore:function(){return Object(o.e)(l.default,this.$store)},isEnd:function(){return"end"===this.mode},isGame:function(){return"game"===this.mode},displayScore:function(){return"modeSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),w=(r(546),r(84)),_=r(114),x=r.n(_),T=r(187),S=r(400),y=r(397),C=r(594),M=r(399),k=r(595),A=r(175),E=r(392),component=Object(w.a)(h,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"game"},[r("v-card",[r("v-card-text",{staticClass:"green lighten-4"},[r("v-row",{staticClass:"score-container"},[r("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))]),e._v(" "),r("v-slide-y-reverse-transition",[e.showAnswerEffect?r("v-col",{staticClass:"effect orange--text",attrs:{cols:"auto"}},[e._v("\n            "+e._s(e.effects.answer)+"\n          ")]):e._e()],1)],1)],1),e._v(" "),e.isEnd?r("v-card-text",{staticClass:"green lighten-5"},[r("v-row",{staticClass:"ex-canvas text-center"},[r("v-col",{attrs:{"align-self":"center"}},[r("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1)],1)],1):e.isGame?r("v-card-text",{staticClass:"green lighten-5"},[r("v-row",{staticClass:"ex-canvas"},[r("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question)+"\n        ")]),e._v(" "),r("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[e._v("\n          +\n        ")]),e._v(" "),r("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e._f("answered")(e.answer))+"\n        ")]),e._v(" "),r("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[e._v("\n          =\n        ")]),e._v(" "),r("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n          10\n        ")])],1),e._v(" "),r("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?r("v-card",[r("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),r("v-col",{attrs:{cols:"4"}},[r("v-btn",{on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e()],1)}),[],!1,null,"58870429",null);t.default=component.exports;x()(component,{VBtn:T.a,VCard:S.a,VCardText:y.a,VCol:C.a,VProgressLinear:M.a,VRow:k.a,VSlideYReverseTransition:A.d,VSpacer:E.a})},569:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(27);var n=r(0),o=r(53),c=r(263);var l=n.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){switch(this.displayGameMode){case"modeSprint-10":return this.scoreStore.sprint10Hiscores;case"modeSprint-30":return this.scoreStore.sprint30Hiscores;default:return this.scoreStore.endressHiscores}},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}}}),d=(r(548),r(84)),m=r(114),f=r.n(m),v=r(400),h=r(397),w=r(594),_=r(595),x=r(392),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-text",e._l(e.hiscores,(function(t,i){return r("v-row",{key:i,class:{entry:e.isLastScore(t)}},[r("v-col",{attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{attrs:{cols:"auto"}},[e._v(e._s(t.score.toFixed(2)))])],1)})),1)],1)}),[],!1,null,"432d628f",null);t.default=component.exports;f()(component,{VCard:v.a,VCardText:h.a,VCol:w.a,VRow:_.a,VSpacer:x.a})},599:function(e,t,r){"use strict";r.r(t);var n=r(20),o=(r(57),r(0).a.extend({asyncData:function(e){return Object(n.a)(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.params,t.abrupt("return",{mode:r.mode,count:r.count});case 2:case"end":return t.stop()}}),t)})))()}})),c=r(84),l=r(114),d=r.n(l),m=r(594),f=r(595),component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{attrs:{justify:"center",align:"center"}},[r("v-col",{attrs:{cols:"12"}},[r("Game",{attrs:{gameMode:e.mode,questionCount:e.count}})],1),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("Hiscore",{attrs:{gameMode:e.mode,questionCount:e.count}})],1)],1)}),[],!1,null,null,null);t.default=component.exports;d()(component,{Game:r(568).default,Hiscore:r(569).default}),d()(component,{VCol:m.a,VRow:f.a})}}]);