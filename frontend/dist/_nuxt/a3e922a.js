(window.webpackJsonp=window.webpackJsonp||[]).push([[21,13],{567:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},568:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},569:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},571:function(e,t,n){"use strict";t.a=n.p+"assets/se/finish.mp3"},575:function(e,t,n){var content=n(585);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("1ef9a3c2",content,!0,{sourceMap:!1})},584:function(e,t,n){"use strict";n(575)},585:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.game[data-v-f5d587d0]{position:relative}.game>.ready[data-v-f5d587d0]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-f5d587d0],.game>.ready>*[data-v-f5d587d0]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-f5d587d0]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-f5d587d0]{height:16vh}.ex-canvas>*[data-v-f5d587d0]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-f5d587d0]{position:relative;border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-f5d587d0]{font-weight:700}.score-container>.value[data-v-f5d587d0]{font-family:"Fredoka One";font-size:1.6rem}.effect[data-v-f5d587d0]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-f5d587d0]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-f5d587d0]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}',""]),e.exports=r},613:function(e,t,n){"use strict";n.r(t);n(276),n(36),n(64),n(38),n(73),n(30),n(32);var r=n(2),o=n(45),c=n(274),d=n(277),l=n(154),m=n(567),f=n(568),v=n(571),h=n(569);var w=r.a.extend({props:{gameMode:{type:String,default:"minusEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",readyCount:0,score:0,score2:0,question1:0,question2:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,gameTimerId:-1,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{goGameIndex:function(){console.log(this.gameMode,this.questionCount),this.$router.replace({name:"game-minus-20",params:{mode:this.gameMode,count:"".concat(this.questionCount)}})},startGame:function(){var e=this;this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question1=0,this.question2=0,this.answer=0,this.mode="ready",this.readyCount=3,this.gameTimerId=window.setInterval((function(){0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.mode="game",this.next(),this.gameTimerId=window.setInterval((function(){(e.updateGameTime(),e.updateProgress())&&(e.endGame(),e.addEndressScore(),new Audio(h.a).play())}),200)},endGame:function(){this.updateGameTime(),this.mode="end",window.clearInterval(this.gameTimerId),this.gameTimerId=-1},next:function(){var q=Math.floor(3+4*Math.random());10===this.questionCount?q+=Math.random()*Math.floor(this.score/2)*7:q+=Math.random()*Math.floor(this.score/4)*7,this.question1=Math.floor(q)%17,this.question1=Math.max(this.question1,3);do{this.question2=Math.floor(Math.random()*this.question1)+1}while(this.question1-this.question2>=10||this.question1-this.question2<=0);this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,1200)},onAnswer:function(e){if("game"===this.mode)if(this.updateGameTime(),this.question1-this.question2===e){if(this.score+=1,"minusEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/20)}if(this.updateProgress(),this.answerEffect("o ".concat(e)),new Audio(m.a).play(),"minusSprint"===this.gameMode)if(this.score===this.questionCount)return this.endGame(),this.addSprintScore(),void new Audio(v.a).play();this.next()}else{this.answer=e,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(f.a).play()}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("minusEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},updateGameTime:function(){this.gameTime=(new Date).getTime()-this.gameStartTime},addSprintScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode,"-").concat(this.questionCount),name:e,score:this.getDisplayTime(),createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)},addEndressScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),this.entryHiscore(t)}},entryHiscore:function(e){console.log(e),l.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0)})}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)},scoreStore:function(){return Object(o.e)(d.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},isSprint:function(){return"minusSprint"===this.gameMode},isEndress:function(){return"minusEndress"===this.gameMode},displayScore:function(){return"minusSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),_=(n(584),n(91)),y=n(122),T=n.n(y),x=n(200),C=n(411),M=n(410),S=n(653),k=n(187),A=n(156),I=n(413),G=n(654),E=n(405),component=Object(_.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode,questionCount:e.questionCount}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[e.isSprint?n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]):e._e(),e._v(" "),e.isSprint?n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.goGameIndex()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("ひきざん２０\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question1)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[e._v("\n          -\n        ")]),e._v(" "),n("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question2)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[e._v("\n          =\n        ")]),e._v(" "),n("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e._f("answered")(e.answer))+"\n          "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],1)],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),n("v-fade-transition",[e.isReady?n("div",{staticClass:"ready"},[n("v-slide-y-reverse-transition",[3===e.readyCount?n("div",[e._v("3")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[2===e.readyCount?n("div",[e._v("2")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[1===e.readyCount?n("div",[e._v("1")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[0===e.readyCount?n("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"f5d587d0",null);t.default=component.exports;T()(component,{Hiscore:n(580).default}),T()(component,{VBtn:x.a,VCard:C.a,VCardText:M.b,VCol:S.a,VFadeTransition:k.b,VIcon:A.a,VProgressLinear:I.a,VRow:G.a,VSlideYReverseTransition:k.d,VSpacer:E.a})},663:function(e,t,n){"use strict";n.r(t);var r=n(20),o=n(19),c=(n(58),n(65),n(38),n(2)),d=n(613),l=c.a.extend({components:{GameMinus20:d.default},asyncData:function(e){return Object(o.a)(regeneratorRuntime.mark((function t(){var n,o,c,d,l;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.params,o=n.game.split("-"),c=Object(r.a)(o,2),d=c[0],l=c[1],t.abrupt("return",{mode:d,count:parseInt(l)||-1});case 3:case"end":return t.stop()}}),t)})))()}}),m=n(91),component=Object(m.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("GameMinus20",{attrs:{gameMode:e.mode,questionCount:e.count}})}),[],!1,null,null,null);t.default=component.exports}}]);