(window.webpackJsonp=window.webpackJsonp||[]).push([[33,20,22,23,25,28],{421:function(t,e,n){var content=n(428);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3afc2df3",content,!0,{sourceMap:!1})},424:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return m}));n(63),n(9),n(191);var o=n(425),r=[1,4,10,20,40,60];function c(t,e){return o.a.map((function(n){return d(t,e,n)})).reduce((function(t,e){return t+e}))}function d(t,e,n){var o=l(t,e,n);return o>=10?Math.min(Math.floor(o/20)+3,6):o>=4?2:o>=1?1:0}function l(t,e,n){var dd=new Date(e),o=dd.setHours(0,0,0,0),r=dd.setDate(dd.getDate()+1);return t.filter((function(t){return t.mode===n})).filter((function(t){return t.createdAt>=o})).filter((function(t){return t.createdAt<r})).length}function f(t,e,n){var o=l(t,e,n),c=r.findIndex((function(t){return t===o}));return console.log(o,c),c>=0&&c<r.length-1?r[c+1]-o:1}function m(t,e){var dd=new Date(e);dd.setHours(0,0,0,0);for(var n=dd.setDate(1),o=dd.setMonth(dd.getMonth()+1),r=t.filter((function(t){return t.createdAt>=n})).filter((function(t){return t.createdAt<o})),d=0,l=n;l<o;l+=864e5)d+=c(r,new Date(l));return d}},426:function(t,e,n){var content=n(583);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("29813b86",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";n(421)},428:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.digit-keyboard>.row>.col[data-v-04788bc0]{padding:.25rem;text-align:center}.digit-keyboard>.row>.col>button[data-v-04788bc0]{font-size:4rem;font-family:"Fredoka One";width:80%;height:5rem;color:#0097a7}.digit-keyboard>.row>.col>button.selected[data-v-04788bc0]{background-color:#ffecb3}',""]),t.exports=o},564:function(t,e,n){"use strict";n.r(e);n(72);var o=n(2),r=n.p+"assets/se/count.mp3",c=n.p+"assets/se/count-0.mp3",d=o.a.extend({data:function(){return{mode:"",readyCount:0,gameTimerId:-1,gameStartTime:0,gameTime:0}},methods:{ready:function(){var t=this;this.changeMode("ready"),this.readyCount=3,new Audio(r).play(),this.$emit("ready",t.readyCount),this.gameTimerId=window.setInterval((function(){if(console.log(t.readyCount),0==t.readyCount--)return window.clearInterval(t.gameTimerId),void t.start();t.readyCount>0?new Audio(r).play():new Audio(c).play(),t.$emit("ready",t.readyCount)}),1e3)},start:function(){var t=this;this.gameStartTime=(new Date).getTime(),this.changeMode("game"),this.onNext(),this.gameTimerId=window.setInterval((function(){t.gameTime=(new Date).getTime()-t.gameStartTime,t.onUpdateProgress()}),200)},onNext:function(){console.log("override this method")},onUpdateProgress:function(){console.log("override this method")},endGame:function(){var t=this;this.$nextTick((function(){t.changeMode("end")})),window.clearInterval(this.gameTimerId),this.gameTimerId=-1},changeMode:function(t){this.mode=t,this.$emit("change-mode",t)}}}),l=n(91),component=Object(l.a)(d,undefined,undefined,!1,null,null,null);e.default=component.exports},565:function(t,e,n){"use strict";n.r(e);n(279);var o=n(2).a.extend({props:{mode:{type:String,default:"tap"}},data:function(){return{selected:[]}},mounted:function(){this.reset()},methods:{reset:function(){this.selected=Array(10).fill(!1)},onClick:function(t){"select"===this.mode&&this.$set(this.selected,t,!this.selected[t]),this.$emit("tap",t,this.selected[t])},isSelected:function(t){return this.selected[t]}}}),r=(n(427),n(91)),c=n(122),d=n.n(c),l=n(193),f=n(413),m=n(411),v=n(716),h=n(717),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",{staticClass:"digit-keyboard cyan lighten-4"},[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(1)},on:{pointerdown:function(e){return t.onClick(1)}}},[t._v("1")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(2)},on:{pointerdown:function(e){return t.onClick(2)}}},[t._v("2")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(3)},on:{pointerdown:function(e){return t.onClick(3)}}},[t._v("3")])],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(4)},on:{pointerdown:function(e){return t.onClick(4)}}},[t._v("4")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(5)},on:{pointerdown:function(e){return t.onClick(5)}}},[t._v("5")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(6)},on:{pointerdown:function(e){return t.onClick(6)}}},[t._v("6")])],1)],1),t._v(" "),n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(7)},on:{pointerdown:function(e){return t.onClick(7)}}},[t._v("7")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(8)},on:{pointerdown:function(e){return t.onClick(8)}}},[t._v("8")])],1),t._v(" "),n("v-col",{attrs:{cols:"4"}},[n("v-btn",{class:{selected:t.isSelected(9)},on:{pointerdown:function(e){return t.onClick(9)}}},[t._v("9")])],1)],1)],1)],1)}),[],!1,null,"04788bc0",null);e.default=component.exports;d()(component,{VBtn:l.a,VCard:f.a,VCardText:m.b,VCol:v.a,VRow:h.a})},569:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));n(30);var o=n(154);function r(t){console.log(t),o.a.firestore().collection("scores").add({mode:t.mode,name:t.name,score:t.score,createdAt:new Date(t.createdAt).setHours(0,0,0,0),timestamp:t.createdAt})}},570:function(t,e,n){"use strict";e.a=n.p+"assets/se/answer-ok.mp3"},571:function(t,e,n){"use strict";e.a=n.p+"assets/se/answer-ng.mp3"},572:function(t,e,n){"use strict";e.a=n.p+"assets/se/end.mp3"},573:function(t,e,n){var content=n(588);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3d4d46a4",content,!0,{sourceMap:!1})},574:function(t,e,n){var content=n(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d5d3b420",content,!0,{sourceMap:!1})},582:function(t,e,n){"use strict";n(426)},583:function(t,e,n){var o=n(25)(!1);o.push([t.i,"a[data-v-66b1ffd0]{text-decoration:none}",""]),t.exports=o},585:function(t,e,n){"use strict";n.r(e);var o=n(2).a.extend({data:function(){return{networks:[{network:"email",icon:"mdi-email",name:"Email"},{network:"facebook",icon:"mdi-facebook",name:"Facebook"},{network:"twitter",icon:"mdi-twitter",name:"twitter"},{network:"line",icon:"mdi-share",name:"LINE"}],url:"https://kaku3.github.io/e1-math-plus-10/frontend/dist/",title:"小１からのさんすうゲーム",description:"小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。"}}}),r=(n(582),n(91)),c=n(122),d=n.n(c),l=n(156),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.networks,(function(e,i){return n("share-network",{key:i,attrs:{network:e.network,url:t.url,title:t.title,description:t.description}},[n("v-icon",[t._v(t._s(e.icon))]),t._v(" "+t._s(e.name)+"\n  ")],1)})),1)}),[],!1,null,"66b1ffd0",null);e.default=component.exports;d()(component,{VIcon:l.a})},586:function(t,e,n){"use strict";e.a=n.p+"assets/se/finish.mp3"},587:function(t,e,n){"use strict";n(573)},588:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.ready[data-v-0291079c]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.ready[data-v-0291079c],.ready>*[data-v-0291079c]{position:absolute;width:100%;text-align:center}.ready>*[data-v-0291079c]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem;font-weight:700}.ready>.count-1[data-v-0291079c],.ready>.count-2[data-v-0291079c],.ready>.count-3[data-v-0291079c]{-webkit-animation:a-count-3-data-v-0291079c .5s ease-in forwards,a-opacity-data-v-0291079c .5s ease-in forwards;animation:a-count-3-data-v-0291079c .5s ease-in forwards,a-opacity-data-v-0291079c .5s ease-in forwards}.ready>.count-0[data-v-0291079c]{-webkit-animation:a-count-0-data-v-0291079c 1s ease-out forwards,a-opacity-0-data-v-0291079c 1s ease-out forwards;animation:a-count-0-data-v-0291079c 1s ease-out forwards,a-opacity-0-data-v-0291079c 1s ease-out forwards}@-webkit-keyframes a-count-0-data-v-0291079c{0%{transform:scale(1)}to{transform:scale(5)}}@keyframes a-count-0-data-v-0291079c{0%{transform:scale(1)}to{transform:scale(5)}}@-webkit-keyframes a-opacity-0-data-v-0291079c{0%{opacity:1}to{opacity:0}}@keyframes a-opacity-0-data-v-0291079c{0%{opacity:1}to{opacity:0}}@-webkit-keyframes a-count-3-data-v-0291079c{0%{transform:scale(3)}to{transform:scale(1)}}@keyframes a-count-3-data-v-0291079c{0%{transform:scale(3)}to{transform:scale(1)}}@-webkit-keyframes a-opacity-data-v-0291079c{0%{opacity:0}to{opacity:1}}@keyframes a-opacity-data-v-0291079c{0%{opacity:0}to{opacity:1}}',""]),t.exports=o},589:function(t,e,n){"use strict";n(574)},590:function(t,e,n){var o=n(25)(!1);o.push([t.i,".effect-screen[data-v-59776227]{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,.5);-webkit-animation:a-screen-data-v-59776227 .5s ease-in;animation:a-screen-data-v-59776227 .5s ease-in}@-webkit-keyframes a-screen-data-v-59776227{0%{opacity:0}to{opacity:1}}@keyframes a-screen-data-v-59776227{0%{opacity:0}to{opacity:1}}.effect-screen>.star-container[data-v-59776227]{position:absolute;top:50%;left:50%;transform:translate(-50%,-100%)}.effect-screen>.star-container>.star[data-v-59776227]{-webkit-animation:a-star0-data-v-59776227 .5s ease-out 0s forwards,a-star-data-v-59776227 2s linear 1s infinite;animation:a-star0-data-v-59776227 .5s ease-out 0s forwards,a-star-data-v-59776227 2s linear 1s infinite}@-webkit-keyframes a-star0-data-v-59776227{0%{transform:scale(30);opacity:0}to{transform:scale(1);opacity:1}}@keyframes a-star0-data-v-59776227{0%{transform:scale(30);opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes a-star-data-v-59776227{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}@keyframes a-star-data-v-59776227{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}.effect-screen>.caption-text[data-v-59776227]{position:absolute;top:15%;left:0;width:100%;text-align:center;color:#fff;font-weight:700;font-size:1.8rem;letter-spacing:1.1rem;-webkit-animation:a-caption-text-data-v-59776227 1s ease-in-out;animation:a-caption-text-data-v-59776227 1s ease-in-out}@-webkit-keyframes a-caption-text-data-v-59776227{0%{transform:translateY(-100%)}20%{transform:translateY(0)}40%{transform:translateY(-50%)}60%{transform:translateY(0)}80%{transform:translateY(-10%)}to{transform:translateY(0)}}@keyframes a-caption-text-data-v-59776227{0%{transform:translateY(-100%)}20%{transform:translateY(0)}40%{transform:translateY(-50%)}60%{transform:translateY(0)}80%{transform:translateY(-10%)}to{transform:translateY(0)}}.effect-screen>.condition-text[data-v-59776227]{position:absolute;top:70vh;left:0;width:100%;text-align:center;color:#fff;font-weight:700;font-size:1.5rem}",""]),t.exports=o},595:function(t,e,n){"use strict";n.r(e);n(36);var o=n(2).a.extend({props:{readyCount:{type:Number,default:3}}}),r=(n(587),n(91)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ready"},[3===t.readyCount?n("div",{staticClass:"count-3"},[t._v("3")]):t._e(),t._v(" "),2===t.readyCount?n("div",{staticClass:"count-2"},[t._v("2")]):t._e(),t._v(" "),1===t.readyCount?n("div",{staticClass:"count-1"},[t._v("1")]):t._e(),t._v(" "),0===t.readyCount?n("div",{staticClass:"count-0"},[t._v("すたーと")]):t._e()])}),[],!1,null,"0291079c",null);e.default=component.exports},596:function(t,e,n){"use strict";n.r(e);n(36),n(72);var o=n(2).a.extend({props:{nextConditionCount:{type:Number,default:0}},data:function(){return{shown:!1}},mounted:function(){var t=this;window.setTimeout((function(){t.shown=!0}),1e3)},methods:{onTap:function(){this.shown&&this.$emit("dismiss")}}}),r=(n(589),n(91)),c=n(122),d=n.n(c),l=n(187),f=n(156),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",[n("div",{staticClass:"effect-screen",on:{click:function(e){return t.onTap()}}},[n("div",{staticClass:"caption-text"},[t._v("スターをげっと")]),t._v(" "),n("div",{staticClass:"star-container"},[n("v-icon",{staticClass:"star",attrs:{color:"yellow",size:"50vw"}},[t._v("mdi-star")])],1),t._v(" "),-1!==t.nextConditionCount?n("div",{staticClass:"condition-text"},[t._v("つぎの"),n("v-icon",{attrs:{color:"yellow"}},[t._v("mdi-star")]),t._v("まで"),n("br"),t._v(" "+t._s(t.nextConditionCount)+"かいぷれい")],1):t._e()])])}),[],!1,null,"59776227",null);e.default=component.exports;d()(component,{VFadeTransition:l.b,VIcon:f.a})},597:function(t,e,n){"use strict";n.r(e);n(9);var o=n(2),r=n(44),c=n(276),d=n(424),l=n.p+"assets/se/get-star.mp3",f=o.a.extend({data:function(){return{showGetStarScreen:!1,nextConditionCount:0,_starCount:0,gameMode_:"",mode_:"",readyCount_:0}},mounted:function(){},methods:{onChangeMode:function(t){(this.mode_=t,console.log(this.gameMode_,t),this.showGetStarScreen=!1,"end"===t)?(console.log(this._starCount,this.dailyStarCount),this._starCount!==this.dailyStarCount&&(this.showGetStarScreen=!0,this.nextConditionCount=Object(d.d)(this.monthlyScores,new Date,this.gameMode_),this.showGetStarScreen&&new Audio(l).play())):"game"===t&&(this._starCount=this.dailyStarCount)},onReady:function(t){this.readyCount_=t},onDismissGetStarScreen:function(){this.showGetStarScreen=!1}},computed:{scoreStore:function(){return Object(r.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},monthlyScores:function(){var dd=new Date;dd.setHours(0,0,0,0);var t=dd.setDate(1),e=dd.setMonth(dd.getMonth()+1);return this.scores.filter((function(e){return e.createdAt>=t})).filter((function(t){return t.createdAt<e}))},dailyStarCount:function(){return Object(d.b)(this.monthlyScores,new Date)},isReady:function(){return"ready"===this.mode_},isEnd:function(){return"end"===this.mode_}}}),m=n(91),component=Object(m.a)(f,undefined,undefined,!1,null,null,null);e.default=component.exports},600:function(t,e,n){var content=n(616);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("34ea842d",content,!0,{sourceMap:!1})},615:function(t,e,n){"use strict";n(600)},616:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.game[data-v-57a9f727]{position:relative}.ex-canvas[data-v-57a9f727]{min-height:16vh}.ex-canvas>*[data-v-57a9f727]{padding:.25rem;font-size:3rem;font-family:"Fredoka One";line-height:1;height:4rem;text-align:center}.ex-canvas>.answer[data-v-57a9f727]{position:relative;border:2px solid #ff9800;border-radius:4px}.score-container>.label[data-v-57a9f727]{font-weight:700}.score-container>.value[data-v-57a9f727]{font-family:"Fredoka One";font-size:1.6rem}.effect[data-v-57a9f727]{position:absolute;top:0;left:0;font-family:"Fredoka One";font-size:2rem}',""]),t.exports=o},650:function(t,e,n){var content=n(696);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("494c6c9c",content,!0,{sourceMap:!1})},658:function(t,e,n){"use strict";n.r(e);n(277),n(36),n(64),n(38),n(72),n(30),n(32);var o=n(2),r=n(564),c=n(565),d=n(44),l=n(275),f=n(276),m=n(569),v=n(570),h=n(571),w=n(586),y=n(572);var _=o.a.extend({mixins:[r.default],components:{NumPad:c.default},props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{mode:"",readyCount:0,score:0,score2:0,question:0,answer:0,startTime:0,answerTime:0,gameStartTime:0,gameTime:0,penaltyTime:0,progress:0,effects:{answer:"",answerTimerId:-1}}},mounted:function(){this.startGame()},destroyed:function(){console.log("destroyed"),this.endGame()},methods:{goGameIndex:function(){console.log(this.gameMode,this.questionCount),this.$router.replace({name:"game-plus-10",params:{mode:this.gameMode,count:"".concat(this.questionCount)}})},startGame:function(){this.score=0,this.score2=0,this.gameTime=0,this.penaltyTime=0,this.question=0,this.answer=0,this.ready()},onNext:function(){this.next()},onUpdateProgress:function(){this.updateProgress()&&(this.endGame(),this.addEndressScore(),new Audio(y.a).play())},next:function(){this.$refs.numPad.reset(),this.question=(3*this.question+Math.floor(100*Math.random()))%9+1,this.answer=0,this.startTime=(new Date).getTime(),this.answerTime=1e4-3e3*Math.floor(this.score/5),this.answerTime=Math.max(this.answerTime,1200)},onTap:function(t,e){this.onAnswer(t)},onAnswer:function(t){if("game"===this.mode)if(this.updateGameTime(),this.question+t===10){if(this.score+=1,"modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);time=Math.max(time,0),this.score2+=Math.floor(time/20)}if(this.updateProgress(),this.answerEffect("o ".concat(t)),new Audio(v.a).play(),"modeSprint"===this.gameMode)if(this.score===this.questionCount)return this.endGame(),this.addSprintScore(),void new Audio(w.a).play();this.next()}else{this.answer=t,this.penaltyTime+=1e3,this.answerTime-=1e3,this.answerEffect("x"),new Audio(h.a).play()}},answerEffect:function(t){var e=this;this.effects.answer=t,-1!=this.effects.answerTimerId&&window.clearTimeout(this.effects.answerTimerId),this.effects.answerTimerId=window.setTimeout((function(){e.effects.answerTimerId=-1}),1e3)},getDisplayTime:function(){return(this.gameTime+this.penaltyTime)/1e3},updateProgress:function(){if("modeEndress"===this.gameMode){var time=this.answerTime-((new Date).getTime()-this.startTime);return time=Math.max(time,0),this.progress=100*time/this.answerTime,0===time}return this.progress=100*this.score/this.questionCount,!1},updateGameTime:function(){this.gameTime=(new Date).getTime()-this.gameStartTime},addSprintScore:function(){var t=this.accountStore.account.name,e={mode:"".concat(this.gameMode,"-").concat(this.questionCount),name:t,score:this.getDisplayTime(),createdAt:this.gameStartTime};this.scoreStore.addScore(e),Object(m.a)(e)},addEndressScore:function(){if(0!==this.score2){var t=this.accountStore.account.name,e={mode:"".concat(this.gameMode),name:t,score:this.score2,createdAt:this.gameStartTime};this.scoreStore.addScore(e),Object(m.a)(e)}}},computed:{accountStore:function(){return Object(d.e)(l.default,this.$store)},scoreStore:function(){return Object(d.e)(f.default,this.$store)},isEnd:function(){return"end"===this.mode},isReady:function(){return"ready"===this.mode},isGame:function(){return"game"===this.mode||"ready"===this.mode},isSprint:function(){return"modeSprint"===this.gameMode},isEndress:function(){return"modeEndress"===this.gameMode},displayScore:function(){return"modeSprint"===this.gameMode?this.score:this.score2},showAnswerEffect:function(){return-1!=this.effects.answerTimerId}},filters:{answered:function(t){return 0!==t?t:""},time2:function(t){return t.toFixed(2)}}}),C=(n(615),n(91)),x=n(122),k=n.n(x),S=n(193),T=n(413),M=n(411),G=n(716),E=n(156),A=n(414),I=n(717),D=n(187),O=n(406),component=Object(C.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game"},[t.isEnd?n("v-card",[n("Hiscore",{attrs:{gameMode:t.gameMode,questionCount:t.questionCount}})],1):t._e(),t._v(" "),n("v-card",[n("v-card-text",{staticClass:"green lighten-4"},[n("v-row",{staticClass:"score-container"},[t.isSprint?n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[t._v("じかん")]):t._e(),t._v(" "),t.isSprint?n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t._f("time2")(t.getDisplayTime())))]):t._e(),t._v(" "),n("v-spacer"),t._v(" "),n("v-col",{staticClass:"label",attrs:{cols:"auto"}},[t._v("とくてん")]),t._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore))])],1)],1),t._v(" "),t.isEnd?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas text-center"},[n("v-col",{attrs:{cols:"12","align-self":"center"}},[n("v-btn",{attrs:{large:"",outlined:""},on:{click:function(e){return t.goGameIndex()}}},[n("v-icon",[t._v("mdi-playlist-edit")]),t._v("たして１０\n          ")],1),t._v(" "),n("v-btn",{attrs:{"x-large":"",color:"blue",dark:""},on:{click:function(e){return t.startGame()}}},[t._v("\n            もういちど\n          ")])],1),t._v(" "),n("v-col",{attrs:{"align-self":"center"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[t._v("mdi-home-circle")]),t._v("ほーむ\n          ")],1)],1)],1)],1):t.isGame?n("v-card-text",{staticClass:"green lighten-5"},[n("v-row",{staticClass:"ex-canvas"},[n("v-col",{staticClass:"blue-grey--text",attrs:{"align-self":"center"}},[t._v("\n          "+t._s(t.question)+"\n        ")]),t._v(" "),n("v-col",{staticClass:"blue--text",attrs:{"align-self":"center"}},[t._v("\n          +\n        ")]),t._v(" "),n("v-col",{staticClass:"amber--text answer",attrs:{"align-self":"center"}},[t._v("\n          "+t._s(t._f("answered")(t.answer))+"\n          "),n("v-slide-y-reverse-transition",[t.showAnswerEffect?n("div",{staticClass:"effect orange--text"},[t._v("\n              "+t._s(t.effects.answer)+"\n            ")]):t._e()])],1),t._v(" "),n("v-col",{staticClass:"light-green--text",attrs:{"align-self":"center"}},[t._v("\n          =\n        ")]),t._v(" "),n("v-col",{staticClass:"teal--text",attrs:{"align-self":"center"}},[t._v("\n          10\n        ")])],1),t._v(" "),n("v-progress-linear",{attrs:{color:"blue darken-2",height:"8"},model:{value:t.progress,callback:function(e){t.progress=e},expression:"progress"}})],1):t._e()],1),t._v(" "),t.isGame?n("NumPad",{ref:"numPad",on:{tap:t.onTap}}):t._e()],1)}),[],!1,null,"57a9f727",null);e.default=component.exports;k()(component,{Hiscore:n(594).default}),k()(component,{VBtn:S.a,VCard:T.a,VCardText:M.b,VCol:G.a,VIcon:E.a,VProgressLinear:A.a,VRow:I.a,VSlideYReverseTransition:D.d,VSpacer:O.a})},695:function(t,e,n){"use strict";n(650)},696:function(t,e,n){var o=n(25)(!1);o.push([t.i,".game-page[data-v-43a3b818]{min-height:calc(100vh - 80px)}",""]),t.exports=o},728:function(t,e,n){"use strict";n.r(e);var o=n(20),r=n(19),c=(n(58),n(65),n(38),n(2)),d=n(597),l=n(658),f=n(595),m=n(596),v=c.a.extend({mixins:[d.default],components:{GamePlus10:l.default,ReadyScreen:f.default,GetStarScreen:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.game.split("-"),c=Object(o.a)(r,2),d=c[0],l=c[1],e.abrupt("return",{gameMode_:n.game,mode:d,count:parseInt(l)||-1});case 3:case"end":return e.stop()}}),e)})))()}}),h=(n(695),n(91)),w=n(122),y=n.n(w),_=n(716),component=Object(h.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-page"},[n("GamePlus10",{attrs:{gameMode:t.mode,questionCount:t.count},on:{"change-mode":t.onChangeMode,ready:t.onReady}}),t._v(" "),t.isReady?n("ReadyScreen",{attrs:{readyCount:t.readyCount_}}):t._e(),t._v(" "),t.isEnd?n("v-col",{attrs:{cols:"12"}},[n("Share")],1):t._e(),t._v(" "),t.showGetStarScreen?n("GetStarScreen",{attrs:{nextConditionCount:t.nextConditionCount},on:{dismiss:t.onDismissGetStarScreen}}):t._e()],1)}),[],!1,null,"43a3b818",null);e.default=component.exports;y()(component,{Share:n(585).default}),y()(component,{VCol:_.a})}}]);