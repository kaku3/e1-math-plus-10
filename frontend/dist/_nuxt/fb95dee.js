(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{543:function(e,t,o){var content=o(554);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,o(19).default)("67420d74",content,!0,{sourceMap:!1})},553:function(e,t,o){"use strict";o(543)},554:function(e,t,o){var r=o(18)(!1);r.push([e.i,'.entry[data-v-dea485a4]{background-color:#f0f4c3}.value[data-v-dea485a4]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=r},570:function(e,t,o){"use strict";o.r(t);o(25),o(24),o(266),o(27);var r=o(0),c=o(51),n=o(264);var d=r.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(c.e)(n.default,this.$store)},hiscores:function(){switch(this.displayGameMode){case"modeSprint-10":return this.scoreStore.sprint10Hiscores;case"modeSprint-30":return this.scoreStore.sprint30Hiscores;default:return this.scoreStore.endressHiscores}},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"".concat(this.questionCount,"問モード")}}}),l=(o(553),o(84)),m=o(114),f=o.n(m),h=o(539),v=o(398),S=o(609),_=o(165),y=o(610),M=o(393),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-card",[o("v-card-title",[o("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),o("v-card-text",e._l(e.hiscores,(function(t,i){return o("v-row",{key:i,class:{entry:e.isLastScore(t)}},[o("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),o("v-spacer"),e._v(" "),o("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"dea485a4",null);t.default=component.exports;f()(component,{VCard:h.a,VCardText:v.b,VCardTitle:v.c,VCol:S.a,VIcon:_.a,VRow:y.a,VSpacer:M.a})}}]);