(window.webpackJsonp=window.webpackJsonp||[]).push([[17,23],{421:function(e,t,n){var content=n(427);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("3afc2df3",content,!0,{sourceMap:!1})},426:function(e,t,n){"use strict";n(421)},427:function(e,t,n){var o=n(25)(!1);o.push([e.i,'.digit-keyboard>.row>.col[data-v-04788bc0]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-04788bc0]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-04788bc0]{background-color:#ffecb3}',""]),e.exports=o},563:function(e,t,n){"use strict";n.r(t);n(72);var o=n(2),r=n.p+"assets/se/count.mp3",c=n.p+"assets/se/count-0.mp3",d=o.a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var e=this;this.changeMode("ready"),this.readyCount=3,new Audio(r).play(),this.$emit("ready",e.readyCount),this.gameTimerId=window.setInterval((function(){if(console.log(e.readyCount),0==e.readyCount--)return window.clearInterval(e.gameTimerId),void e.start();e.readyCount>0?new Audio(r).play():new Audio(c).play(),e.$emit("ready",e.readyCount)}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){e.gameTime=(new Date).getTime()-e.gameStartTime,e.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var e=this;this.$nextTick((function(){e.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(e){this.mode=e,this.$emit("change-mode",e)}}}),l=n(91),component=Object(l.a)(d,undefined,undefined,!1,null,null,null);t.default=component.exports},564:function(e,t,n){"use strict";n.r(t);n(279);var o=n(2).a.extend({props:{mode:{type:String,default:"tap"}},data:function(){return{selected:[]}},mounted:function(){this.reset()},methods:{reset:function(){this.selected=Array(10).fill(!1)},onClick:function(e){"select"===this.mode&&this.$set(this.selected,e,!this.selected[e]),this.$emit("tap",e,this.selected[e])},isSelected:function(e){return this.selected[e]}}}),r=(n(426),n(91)),c=n(122),d=n.n(c),l=n(193),m=n(413),h=n(411),f=n(713),v=n(714),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(1)},on:{pointerdown:function(t){return e.onClick(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(2)},on:{pointerdown:function(t){return e.onClick(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(3)},on:{pointerdown:function(t){return e.onClick(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(4)},on:{pointerdown:function(t){return e.onClick(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(5)},on:{pointerdown:function(t){return e.onClick(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(6)},on:{pointerdown:function(t){return e.onClick(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(7)},on:{pointerdown:function(t){return e.onClick(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(8)},on:{pointerdown:function(t){return e.onClick(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(9)},on:{pointerdown:function(t){return e.onClick(9)}}},[e._v("9")])],1)],1)],1)],1)}),[],!1,null,"04788bc0",null);t.default=component.exports;d()(component,{VBtn:l.a,VCard:m.a,VCardText:h.b,VCol:f.a,VRow:v.a})},569:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(30);var o=n(154);function r(e){console.log(e),o.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0),timestamp:e.createdAt})}},570:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},571:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},572:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},586:function(e,t,n){"use strict";t.a=n.p+"assets/se/finish.mp3"},599:function(e,t,n){var content=n(614);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("7696ac84",content,!0,{sourceMap:!1})},613:function(e,t,n){"use strict";n(599)},614:function(e,t,n){var o=n(25)(!1);o.push([e.i,'.game[data-v-66756d14]{position:relative}.ex-canvas[data-v-66756d14]{min-height:16vh}.ex-canvas>*[data-v-66756d14]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-66756d14]{position:relative;border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-66756d14]{font-weight:700}.score-container>.value[data-v-66756d14]{font-family:"Fredoka One";font-size:1.6rem}.effect[data-v-66756d14]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}',""]),e.exports=o},654:function(e,t,n){"use strict";n.r(t);n(277),n(36),n(64),n(38),n(72),n(30),n(32);var o=n(2),r=n(563),c=n(564),d=n(44),l=n(275),m=n(276),h=n(569),f=n(570),v=n(571),w=n(586),_=n(572);var T=o.a.extend({mixins:[r.default],components:{NumPad:c.default},props:{gameMode:{type:String,default:"minusEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",readyCount:0,score:0,score2:0,question1:0,question2:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{goGameIndex:function(){console.log(this.gameMode,this.questionCount),this.$router.replace({name:"game-minus-20",params:{mode:this.gameMode,count:"".concat(this.questionCount)}})},startGame:function(){this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question1=0,this.question2=0,this.answer=0,this.ready()},onNext:function(){this.next()},onUpdateProgress:function(){this.updateProgress()&&(this.endGame(),this.addEndressScore(),new Audio(_.a).play())},next:function(){this.$refs.numPad.reset();var q=Math.floor(3+4*Math.random());10===this.questionCount?q+=Math.random()*Math.floor(this.score/2)*7:q+=Math.random()*Math.floor(this.score/4)*7,this.question1=Math.floor(q)%17,this.question1=Math.max(this.question1,3);do{this.question2=Math.floor(Math.random()*this.question1)+1}while(this.question1-this.question2>=10||this.question1-this.question2<=0);this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,2e3)},onTap:function(e,t){this.onAnswer(e)},onAnswer:function(e){if("game"===this.mode)if(this.updateGameTime(),this.question1-this.question2===e){if(this.score+=1,"minusEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/20)}if(this.updateProgress(),this.answerEffect("o ".concat(e)),new Audio(f.a).play(),"minusSprint"===this.gameMode)if(this.score===this.questionCount)return this.endGame(),this.addSprintScore(),void new Audio(w.a).play();this.next()}else{this.answer=e,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(v.a).play()}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("minusEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},updateGameTime:function(){this.gameTime=(new Date).getTime()-this.gameStartTime},addSprintScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode,"-").concat(this.questionCount),name:e,score:this.getDisplayTime(),createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(h.a)(t)},addEndressScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(h.a)(t)}}},computed:{accountStore:function(){return Object(d.e)(l.default,this.$store)},scoreStore:function(){return Object(d.e)(m.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},isSprint:function(){return"minusSprint"===this.gameMode},isEndress:function(){return"minusEndress"===this.gameMode},displayScore:function(){return"minusSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),y=(n(613),n(91)),C=n(122),x=n.n(C),S=n(193),M=n(413),k=n(411),I=n(713),A=n(156),E=n(414),G=n(714),V=n(187),$=n(406),component=Object(y.a)(T,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode,questionCount:e.questionCount}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[e.isSprint?n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]):e._e(),e._v(" "),e.isSprint?n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.goGameIndex()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("ひきざん２０\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question1)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[e._v("\n          -\n        ")]),e._v(" "),n("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question2)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[e._v("\n          =\n        ")]),e._v(" "),n("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e._f("answered")(e.answer))+"\n          "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],1)],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?n("NumPad",{ref:"numPad",on:{tap:e.onTap}}):e._e()],1)}),[],!1,null,"66756d14",null);t.default=component.exports;x()(component,{Hiscore:n(594).default}),x()(component,{VBtn:S.a,VCard:M.a,VCardText:k.b,VCol:I.a,VIcon:A.a,VProgressLinear:E.a,VRow:G.a,VSlideYReverseTransition:V.d,VSpacer:$.a})}}]);