(window.webpackJsonp=window.webpackJsonp||[]).push([[7,15,23,27],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return m}));var r=n(412),o=n(3),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),m=Object(o.g)("v-card__title");r.a},423:function(e,t,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("43b75b00",content,!0,{sourceMap:!1})},424:function(e,t,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("29813b86",content,!0,{sourceMap:!1})},563:function(e,t,n){"use strict";function r(e){return{mode:e,name:"",score:0,createdAt:0}}n.d(t,"a",(function(){return r}))},564:function(e,t,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("dc87c83a",content,!0,{sourceMap:!1})},573:function(e,t,n){"use strict";n(423)},574:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.star-container[data-v-2e5a0371]{font-family:"Fredoka One"}.star-container+.star-container[data-v-2e5a0371]{margin-left:-14px}.shake[data-v-2e5a0371]{-webkit-animation:shake-data-v-2e5a0371 1s linear infinite;animation:shake-data-v-2e5a0371 1s linear infinite}@-webkit-keyframes shake-data-v-2e5a0371{0%{transform:rotate(0)}40%{transform:rotate(-10deg)}80%{transform:rotate(10deg)}to{transform:rotate(0)}}@keyframes shake-data-v-2e5a0371{0%{transform:rotate(0)}40%{transform:rotate(-10deg)}80%{transform:rotate(10deg)}to{transform:rotate(0)}}',""]),e.exports=r},575:function(e,t,n){"use strict";n(424)},576:function(e,t,n){var r=n(25)(!1);r.push([e.i,"a[data-v-66b1ffd0]{text-decoration:none}",""]),e.exports=r},578:function(e,t,n){"use strict";n.r(t);n(9);var r=n(2),o=n(44),c=n(275),d=r.a.extend({data:function(){return{show:!1}},mounted:function(){var e=this;this.$nextTick((function(){e.show=!0}))},methods:{starsOf:function(e){var dd=new Date(e),t=dd.setHours(0,0,0,0),n=dd.setDate(dd.getDate()+1),r=this.scores.filter((function(e){return e.createdAt>=t})).filter((function(e){return e.createdAt<n}));return r.length>=10?Math.min(Math.floor(r.length/20)+3,6):r.length>=4?2:r.length>=1?1:0}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]}}}),l=(n(573),n(91)),m=n(122),f=n.n(m),v=n(700),h=n(412),_=n(187),w=n(156),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fade-transition",[e.show?n("v-card",[n("v-calendar",{attrs:{weekdays:[0,1,2,3,4,5,6],type:"month"},scopedSlots:e._u([{key:"day",fn:function(t){var r=t.date;return[e.starsOf(r)>=4?n("span",{staticClass:"star-container"},[n("v-icon",{staticClass:"shake"},[e._v("mdi-star")]),e._v(e._s(e.starsOf(r)))],1):e._l(e.starsOf(r),(function(t,i){return n("span",{key:i,staticClass:"star-container"},[n("v-icon",{staticClass:"shake"},[e._v("mdi-star")])],1)}))]}}],null,!1,2651535236)})],1):e._e()],1)}),[],!1,null,"2e5a0371",null);t.default=component.exports;f()(component,{VCalendar:v.a,VCard:h.a,VFadeTransition:_.b,VIcon:w.a})},579:function(e,t,n){"use strict";n.r(t);var r=n(2).a.extend({data:function(){return{networks:[{network:"email",icon:"mdi-email",name:"Email"},{network:"facebook",icon:"mdi-facebook",name:"Facebook"},{network:"twitter",icon:"mdi-twitter",name:"twitter"},{network:"line",icon:"mdi-share",name:"LINE"}],url:"https://kaku3.github.io/e1-math-plus-10/frontend/dist/",title:"小１からのさんすうゲーム",description:"小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。"}}}),o=(n(575),n(91)),c=n(122),d=n.n(c),l=n(156),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.networks,(function(t,i){return n("share-network",{key:i,attrs:{network:t.network,url:e.url,title:e.title,description:e.description}},[n("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+"\n  ")],1)})),1)}),[],!1,null,"66b1ffd0",null);t.default=component.exports;d()(component,{VIcon:l.a})},580:function(e,t,n){"use strict";n(564)},581:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.title[data-v-52bbe8c4]{padding:.5rem .25rem}.rankings>*[data-v-52bbe8c4]{padding:.25rem}.rankings+.rankings[data-v-52bbe8c4]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-52bbe8c4]{background-color:#f0f4c3}.value[data-v-52bbe8c4]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=r},587:function(e,t,n){"use strict";n.r(t);n(36),n(30),n(278),n(63),n(32),n(41),n(22),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(2),o=n(44),c=n(275),d=n(563);function l(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var f=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){console.log(this.displayGameMode);var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores;break;case"minusSprint-10":e=this.scoreStore.minusSprint10Hiscores;break;case"minusSprint-30":e=this.scoreStore.minusSprint30Hiscores;break;case"minusEndress":e=this.scoreStore.minusEndressHiscores}if(!e)return[];console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,d=l(t);try{for(d.s();!(n=d.n()).done;){var m=n.value;m.score!=r&&(r=m.score,o=c),m.no=o,c++}}catch(e){d.e(e)}finally{d.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:Object(d.a)(this.displayGameMode)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode||"minusEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),v=(n(580),n(91)),h=n(122),_=n.n(h),w=n(412),y=n(411),S=n(696),k=n(156),x=n(697),component=Object(v.a)(f,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"title"},[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"text-h6",attrs:{cols:"mr-auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"52bbe8c4",null);t.default=component.exports;_()(component,{VCard:w.a,VCardText:y.b,VCardTitle:y.c,VCol:S.a,VIcon:k.a,VRow:x.a})},590:function(e,t,n){"use strict";n.r(t);n(73);var r=n(2).a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var e=this;this.changeMode("ready"),this.readyCount=3,this.gameTimerId=window.setInterval((function(){console.log(e.readyCount),0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){e.gameTime=(new Date).getTime()-e.gameStartTime,e.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var e=this;this.$nextTick((function(){e.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(e){this.mode=e,this.$emit("change-mode",e)}}}),o=n(91),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.default=component.exports},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(30);var r=n(154);function o(e){console.log(e),r.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0),timestamp:e.createdAt})}},593:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},594:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},595:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},604:function(e,t,n){"use strict";t.a=n.p+"assets/se/finish.mp3"},631:function(e,t,n){var content=n(679);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("04238072",content,!0,{sourceMap:!1})},678:function(e,t,n){"use strict";n(631)},679:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.game[data-v-8968d6cc]{position:relative}.game>.ready[data-v-8968d6cc]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-8968d6cc],.game>.ready>*[data-v-8968d6cc]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-8968d6cc]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-8968d6cc]{height:16vh}.ex-canvas>*[data-v-8968d6cc]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-8968d6cc]{position:relative;border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-8968d6cc]{font-weight:700}.score-container>.value[data-v-8968d6cc]{font-family:"Fredoka One";font-size:1.6rem}.effect[data-v-8968d6cc]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-8968d6cc]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-8968d6cc]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}',""]),e.exports=r},692:function(e,t,n){"use strict";n.r(t);n(278),n(36),n(64),n(38),n(73),n(30),n(32);var r=n(2),o=n(590),c=n(44),d=n(276),l=n(275),m=n(592),f=n(593),v=n(594),h=n(604),_=n(595);var w=r.a.extend({mixins:[o.default],props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",readyCount:0,score:0,score2:0,question:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{goGameIndex:function(){console.log(this.gameMode,this.questionCount),this.$router.replace({name:"game-plus-10",params:{mode:this.gameMode,count:"".concat(this.questionCount)}})},startGame:function(){this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answer=0,this.ready()},onNext:function(){this.next()},onUpdateProgress:function(){this.updateProgress()&&(this.endGame(),this.addEndressScore(),new Audio(_.a).play())},next:function(){this.question=(3*this.question+Math.floor(100*Math.random()))%9+1,this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,1200)},onAnswer:function(e){if("game"===this.mode)if(this.updateGameTime(),this.question+e===10){if(this.score+=1,"modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/20)}if(this.updateProgress(),this.answerEffect("o ".concat(e)),new Audio(f.a).play(),"modeSprint"===this.gameMode)if(this.score===this.questionCount)return this.endGame(),this.addSprintScore(),void new Audio(h.a).play();this.next()}else{this.answer=e,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(v.a).play()}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},updateGameTime:function(){this.gameTime=(new Date).getTime()-this.gameStartTime},addSprintScore:function(){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode,"-").concat(this.questionCount),name:e,score:this.getDisplayTime(),createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(m.a)(t)},addEndressScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(m.a)(t)}}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},scoreStore:function(){return Object(c.e)(l.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},isSprint:function(){return"modeSprint"===this.gameMode},isEndress:function(){return"modeEndress"===this.gameMode},displayScore:function(){return"modeSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),y=(n(678),n(91)),S=n(122),k=n.n(S),x=n(193),T=n(412),C=n(411),M=n(696),A=n(187),E=n(156),O=n(413),I=n(697),j=n(406),component=Object(y.a)(w,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode,questionCount:e.questionCount}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[e.isSprint?n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("じかん")]):e._e(),e._v(" "),e.isSprint?n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e._f("time2")(e.getDisplayTime())))]):e._e(),e._v(" "),n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.goGameIndex()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("たして１０\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e.question)+"\n        ")]),e._v(" "),n("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[e._v("\n          +\n        ")]),e._v(" "),n("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[e._v("\n          "+e._s(e._f("answered")(e.answer))+"\n          "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],1),e._v(" "),n("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[e._v("\n          =\n        ")]),e._v(" "),n("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n          10\n        ")])],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isEnd?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("Calendar")],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("Share")],1)],1):e._e(),e._v(" "),e.isGame?n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),n("v-fade-transition",[e.isReady?n("div",{staticClass:"ready"},[n("v-slide-y-reverse-transition",[3===e.readyCount?n("div",[e._v("3")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[2===e.readyCount?n("div",[e._v("2")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[1===e.readyCount?n("div",[e._v("1")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[0===e.readyCount?n("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"8968d6cc",null);t.default=component.exports;k()(component,{Hiscore:n(587).default,Calendar:n(578).default,Share:n(579).default}),k()(component,{VBtn:x.a,VCard:T.a,VCardText:C.b,VCol:M.a,VFadeTransition:A.b,VIcon:E.a,VProgressLinear:O.a,VRow:I.a,VSlideYReverseTransition:A.d,VSpacer:j.a})}}]);