(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{397:function(e,t,r){"use strict";r.d(t,"a",(function(){return l}));var o=r(400),c=r(1),n=Object(c.g)("v-card__actions"),d=Object(c.g)("v-card__subtitle"),l=Object(c.g)("v-card__text"),f=Object(c.g)("v-card__title");o.a},543:function(e,t,r){var content=r(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(19).default)("7d07097d",content,!0,{sourceMap:!1})},548:function(e,t,r){"use strict";r(543)},549:function(e,t,r){var o=r(18)(!1);o.push([e.i,".entry[data-v-432d628f]{background-color:#f0f4c3}",""]),e.exports=o},569:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(27);var o=r(0),c=r(53),n=r(263);var d=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt}},computed:{scoreStore:function(){return Object(c.e)(n.default,this.$store)},hiscores:function(){switch(this.displayGameMode){case"modeSprint-10":return this.scoreStore.sprint10Hiscores;case"modeSprint-30":return this.scoreStore.sprint30Hiscores;default:return this.scoreStore.endressHiscores}},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}}}),l=(r(548),r(84)),f=r(114),h=r.n(f),v=r(400),m=r(397),_=r(594),S=r(595),w=r(392),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-text",e._l(e.hiscores,(function(t,i){return r("v-row",{key:i,class:{entry:e.isLastScore(t)}},[r("v-col",{attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{attrs:{cols:"auto"}},[e._v(e._s(t.score.toFixed(2)))])],1)})),1)],1)}),[],!1,null,"432d628f",null);t.default=component.exports;h()(component,{VCard:v.a,VCardText:m.a,VCol:_.a,VRow:S.a,VSpacer:w.a})}}]);