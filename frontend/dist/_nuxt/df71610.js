(window.webpackJsonp=window.webpackJsonp||[]).push([[6,15,23,27],{411:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var r=n(412),o=n(3),c=Object(o.g)("v-card__actions"),l=Object(o.g)("v-card__subtitle"),d=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},423:function(e,t,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("9fae14e0",content,!0,{sourceMap:!1})},424:function(e,t,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("29813b86",content,!0,{sourceMap:!1})},563:function(e,t,n){"use strict";function r(e){return{mode:e,name:"",score:0,createdAt:0}}n.d(t,"a",(function(){return r}))},564:function(e,t,n){var content=n(581);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("dc87c83a",content,!0,{sourceMap:!1})},573:function(e,t,n){"use strict";n(423)},574:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.monthly-star-container[data-v-b4f691d6]{padding:.25rem;text-align:right}.monthly-star-container>.count[data-v-b4f691d6],.star-container[data-v-b4f691d6]{font-family:"Fredoka One"}.star-container+.star-container[data-v-b4f691d6]{margin-left:-14px}.shake[data-v-b4f691d6]{-webkit-animation:shake-data-v-b4f691d6 1s linear infinite;animation:shake-data-v-b4f691d6 1s linear infinite}@-webkit-keyframes shake-data-v-b4f691d6{0%{transform:rotate(0)}40%{transform:rotate(-10deg)}80%{transform:rotate(10deg)}to{transform:rotate(0)}}@keyframes shake-data-v-b4f691d6{0%{transform:rotate(0)}40%{transform:rotate(-10deg)}80%{transform:rotate(10deg)}to{transform:rotate(0)}}',""]),e.exports=r},575:function(e,t,n){"use strict";n(424)},576:function(e,t,n){var r=n(25)(!1);r.push([e.i,"a[data-v-66b1ffd0]{text-decoration:none}",""]),e.exports=r},577:function(e,t,n){"use strict";n.r(t);var r=n(2),o=n(44),c=n(275);n(9);function l(e,t){var dd=new Date(t),n=dd.setHours(0,0,0,0),r=dd.setDate(dd.getDate()+1);return(e=e.filter((function(e){return e.createdAt>=n})).filter((function(e){return e.createdAt<r}))).length>=10?Math.min(Math.floor(e.length/20)+3,6):e.length>=4?2:e.length>=1?1:0}var d=r.a.extend({data:function(){return{show:!1}},mounted:function(){var e=this;this.$nextTick((function(){e.show=!0}))},methods:{starsOf:function(e){return l(this.scores,new Date(e))}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},monthlyStarCount:function(){return function(e,t){var dd=new Date(t);dd.setHours(0,0,0,0);for(var n=dd.setDate(1),r=dd.setMonth(dd.getMonth()+1),o=e.filter((function(e){return e.createdAt>=n})).filter((function(e){return e.createdAt<r})),c=0,d=n;d<r;d+=864e5)c+=l(o,new Date(d));return c}(this.scores,new Date)}}}),f=(n(573),n(91)),m=n(122),v=n.n(m),h=n(702),w=n(412),_=n(187),y=n(156),component=Object(f.a)(d,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-fade-transition",[e.show?n("v-card",[n("div",{staticClass:"monthly-star-container"},[e._v("\n      "+e._s((new Date).getMonth()+1)+"月の★"),n("span",{staticClass:"count"},[e._v(e._s(e.monthlyStarCount))])]),e._v(" "),n("v-calendar",{attrs:{weekdays:[0,1,2,3,4,5,6],type:"month"},scopedSlots:e._u([{key:"day",fn:function(t){var r=t.date;return[e.starsOf(r)>=4?n("span",{staticClass:"star-container"},[n("v-icon",{staticClass:"shake"},[e._v("mdi-star")]),e._v(e._s(e.starsOf(r)))],1):e._l(e.starsOf(r),(function(t,i){return n("span",{key:i,staticClass:"star-container"},[n("v-icon",{staticClass:"shake"},[e._v("mdi-star")])],1)}))]}}],null,!1,2651535236)})],1):e._e()],1)}),[],!1,null,"b4f691d6",null);t.default=component.exports;v()(component,{VCalendar:h.a,VCard:w.a,VFadeTransition:_.b,VIcon:y.a})},579:function(e,t,n){"use strict";n.r(t);var r=n(2).a.extend({data:function(){return{networks:[{network:"email",icon:"mdi-email",name:"Email"},{network:"facebook",icon:"mdi-facebook",name:"Facebook"},{network:"twitter",icon:"mdi-twitter",name:"twitter"},{network:"line",icon:"mdi-share",name:"LINE"}],url:"https://kaku3.github.io/e1-math-plus-10/frontend/dist/",title:"小１からのさんすうゲーム",description:"小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。"}}}),o=(n(575),n(91)),c=n(122),l=n.n(c),d=n(156),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",e._l(e.networks,(function(t,i){return n("share-network",{key:i,attrs:{network:t.network,url:e.url,title:e.title,description:e.description}},[n("v-icon",[e._v(e._s(t.icon))]),e._v(" "+e._s(t.name)+"\n  ")],1)})),1)}),[],!1,null,"66b1ffd0",null);t.default=component.exports;l()(component,{VIcon:d.a})},580:function(e,t,n){"use strict";n(564)},581:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.title[data-v-52bbe8c4]{padding:.5rem .25rem}.rankings>*[data-v-52bbe8c4]{padding:.25rem}.rankings+.rankings[data-v-52bbe8c4]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-52bbe8c4]{background-color:#f0f4c3}.value[data-v-52bbe8c4]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=r},587:function(e,t,n){"use strict";n.r(t);n(36),n(30),n(277),n(63),n(32),n(41),n(22),n(51),n(39),n(8),n(49),n(56),n(42);var r=n(2),o=n(44),c=n(275),l=n(563);function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return f(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return f(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){l=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(l)throw o}}}}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var m=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(o.e)(c.default,this.$store)},hiscores:function(){console.log(this.displayGameMode);var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores;break;case"minusSprint-10":e=this.scoreStore.minusSprint10Hiscores;break;case"minusSprint-30":e=this.scoreStore.minusSprint30Hiscores;break;case"minusEndress":e=this.scoreStore.minusEndressHiscores}if(!e)return[];console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var n,r=t[0].score,o=1,c=1,l=d(t);try{for(l.s();!(n=l.n()).done;){var f=n.value;f.score!=r&&(r=f.score,o=c),f.no=o,c++}}catch(e){l.e(e)}finally{l.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:Object(l.a)(this.displayGameMode)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode||"minusEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),v=(n(580),n(91)),h=n(122),w=n.n(h),_=n(412),y=n(411),k=n(698),S=n(156),x=n(699),component=Object(v.a)(m,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",{staticClass:"title"},[n("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),n("v-card-text",e._l(e.hiscores,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"text-h6",attrs:{cols:"mr-auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"52bbe8c4",null);t.default=component.exports;w()(component,{VCard:_.a,VCardText:y.b,VCardTitle:y.c,VCol:k.a,VIcon:S.a,VRow:x.a})},590:function(e,t,n){"use strict";n.r(t);n(73);var r=n(2).a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var e=this;this.changeMode("ready"),this.readyCount=3,this.gameTimerId=window.setInterval((function(){console.log(e.readyCount),0==e.readyCount--&&(window.clearInterval(e.gameTimerId),e.start())}),1e3)},start:function(){var e=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){e.gameTime=(new Date).getTime()-e.gameStartTime,e.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var e=this;this.$nextTick((function(){e.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(e){this.mode=e,this.$emit("change-mode",e)}}}),o=n(91),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);t.default=component.exports},592:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));n(30);var r=n(154);function o(e){console.log(e),r.a.firestore().collection("scores").add({mode:e.mode,name:e.name,score:e.score,createdAt:new Date(e.createdAt).setHours(0,0,0,0),timestamp:e.createdAt})}},593:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ok.mp3"},594:function(e,t,n){"use strict";t.a=n.p+"assets/se/answer-ng.mp3"},595:function(e,t,n){"use strict";t.a=n.p+"assets/se/end.mp3"},634:function(e,t,n){var content=n(683);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("fa2dc5be",content,!0,{sourceMap:!1})},682:function(e,t,n){"use strict";n(634)},683:function(e,t,n){var r=n(25)(!1);r.push([e.i,'.game[data-v-8508b0c4]{position:relative}.game>.ready[data-v-8508b0c4]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.game>.ready[data-v-8508b0c4],.game>.ready>*[data-v-8508b0c4]{position:absolute;width:100%;text-align:center}.game>.ready>*[data-v-8508b0c4]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem}.ex-canvas[data-v-8508b0c4]{height:16vh}.ex-canvas>*[data-v-8508b0c4]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.score-container>.label[data-v-8508b0c4]{font-weight:700}.score-container>.value[data-v-8508b0c4]{font-family:"Fredoka One";font-size:1.6rem}.answer-container[data-v-8508b0c4]{position:relative;font-size:2rem;text-align:left}.answer-container .effect[data-v-8508b0c4]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}.digit-keyboard>.row>.col[data-v-8508b0c4]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-8508b0c4]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-8508b0c4]{background-color:#ffecb3}',""]),e.exports=r},692:function(e,t,n){"use strict";n.r(t);n(277),n(64),n(38),n(280),n(9),n(80),n(73),n(30);var r=n(2),o=n(590),c=n(44),l=n(276),d=n(275),f=n(592),m=n(593),v=n(594),h=n.p+"assets/se/answer-1.mp3",w=n.p+"assets/se/answer-2.mp3",_=n(595);var y=r.a.extend({mixins:[o.default],data:function(){return{gameMode:"modeSingle",mode:"",readyCount:0,score:0,score2:0,question:0,answers:[],displayAnswers:[],startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{home:function(){this.$router.replace({path:"/game-plus-single/"})},startGame:function(){this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answers=Array(10).fill(0),this.displayAnswers=[],this.ready()},onNext:function(){this.next()},onUpdateProgress:function(){this.updateProgress()&&(this.endGame(),this.addSingleScore(),new Audio(_.a).play())},next:function(){var e=3*Math.floor(this.score/3)+12*Math.floor(this.score/10)+6,t=Math.floor(this.score/5)+3;t=Math.min(t,20),e=Math.min(e,45),this.question=Math.floor(Math.random()*(e-t+1)+t),this.answers.fill(0),this.displayAnswers=[],this.startTime=(new Date).getTime(),this.answerTime=1e4-200*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,2e3)},isSelected:function(e){return 0!==this.answers[e]},onAnswer:function(e){if("game"===this.mode){new Audio(m.a).play(),0===this.answers[e]?(this.answers[e]=e,this.displayAnswers.push(e)):(this.answers[e]=0,this.displayAnswers=this.displayAnswers.filter((function(t){return t!==e})));var t=this.answers.reduce((function(e,t){return e+t}));if(t===this.question){var n=this.answers.filter((function(e){return 0!==e})).length;this.score++;var r=null;n>6||n>4?r=new Audio(w):n>=2&&(r=new Audio(h)),r&&r.play();var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(this.score+time/50)*(1<<n),this.updateProgress(),this.answerEffect("o ".concat(this.displayAnswers.join("+"))),this.next()}else if(t>this.question){this.answers.fill(0),this.displayAnswers=[],this.answerEffect("x"),this.penaltyTime+=1e3,this.answerTime-=1e3,new Audio(v.a).play()}}},answerEffect:function(e){var t=this;this.effects.answer=e,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){t.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time},addSingleScore:function(){if(0!==this.score2){var e=this.accountStore.account.name,t={mode:"".concat(this.gameMode),name:e,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(t),Object(f.a)(t)}}},computed:{accountStore:function(){return Object(c.e)(l.default,this.$store)},scoreStore:function(){return Object(c.e)(d.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},displayScore:function(){return this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(e){return 0!==e?e:""},time2:function(e){return e.toFixed(2)}}}),k=(n(682),n(91)),S=n(122),x=n.n(S),T=n(193),C=n(412),M=n(411),A=n(698),O=n(187),E=n(156),I=n(413),j=n(699),V=n(406),component=Object(k.a)(y,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"game"},[e.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:e.gameMode}})],1):e._e(),e._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[n("v-spacer"),e._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[e._v("とくてん")]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore))])],1)],1),e._v(" "),e.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(t){return e.home()}}},[n("v-icon",[e._v("mdi-playlist-edit")]),e._v("ヒトケタス\n          ")],1),e._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(t){return e.startGame()}}},[e._v("\n            もういちど\n          ")])],1),e._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[e._v("mdi-home-circle")]),e._v("ほーむ\n          ")],1)],1)],1)],1):e.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"answer-container",attrs:{cols:"mr-auto","align-self":"center"}},[e._l(e.displayAnswers,(function(t){return n("span",{key:t},[n("span",[e._v(e._s(t))]),e._v(" "),n("span",[e._v("+")])])})),e._v(" "),n("v-slide-y-reverse-transition",[e.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[e._v("\n              "+e._s(e.effects.answer)+"\n            ")]):e._e()])],2),e._v(" "),n("v-col",{staticClass:"question-container",attrs:{cols:"auto","align-self":"center"}},[n("span",{staticClass:"light-green--text"},[e._v("\n            =\n          ")]),e._v(" "),n("span",{staticClass:"teal--text",attrs:{"align-self":"center"}},[e._v("\n            "+e._s(e.question)+"\n          ")])])],1),e._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:e.progress,callback:function(t){e.progress=t},expression:"progress"}})],1):e._e()],1),e._v(" "),e.isGame?n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(1)},on:{click:function(t){return e.onAnswer(1)}}},[e._v("1")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(2)},on:{click:function(t){return e.onAnswer(2)}}},[e._v("2")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(3)},on:{click:function(t){return e.onAnswer(3)}}},[e._v("3")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(4)},on:{click:function(t){return e.onAnswer(4)}}},[e._v("4")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(5)},on:{click:function(t){return e.onAnswer(5)}}},[e._v("5")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(6)},on:{click:function(t){return e.onAnswer(6)}}},[e._v("6")])],1)],1),e._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(7)},on:{click:function(t){return e.onAnswer(7)}}},[e._v("7")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(8)},on:{click:function(t){return e.onAnswer(8)}}},[e._v("8")])],1),e._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:e.isSelected(9)},on:{click:function(t){return e.onAnswer(9)}}},[e._v("9")])],1)],1)],1)],1):e._e(),e._v(" "),e.isEnd?n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("Calendar")],1),e._v(" "),n("v-col",{attrs:{cols:"12"}},[n("Share")],1)],1):e._e(),e._v(" "),n("v-fade-transition",[e.isReady?n("div",{staticClass:"ready"},[n("v-slide-y-reverse-transition",[3===e.readyCount?n("div",[e._v("3")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[2===e.readyCount?n("div",[e._v("2")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[1===e.readyCount?n("div",[e._v("1")]):e._e()]),e._v(" "),n("v-slide-y-reverse-transition",[0===e.readyCount?n("div",[e._v("すたーと")]):e._e()])],1):e._e()])],1)}),[],!1,null,"8508b0c4",null);t.default=component.exports;x()(component,{Hiscore:n(587).default,Calendar:n(577).default,Share:n(579).default}),x()(component,{VBtn:T.a,VCard:C.a,VCardText:M.b,VCol:A.a,VFadeTransition:O.b,VIcon:E.a,VProgressLinear:I.a,VRow:j.a,VSlideYReverseTransition:O.d,VSpacer:V.a})}}]);