(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{399:function(e,t,r){var content=r(546);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("089b955a",content,!0,{sourceMap:!1})},545:function(e,t,r){"use strict";r(399)},546:function(e,t,r){var o=r(17)(!1);o.push([e.i,'.rankings>*[data-v-5146db1f]{padding:.5rem}.rankings+.rankings[data-v-5146db1f]{margin-top:.25rem;border-top:1px solid #e0e0e0}.entry[data-v-5146db1f]{background-color:#f0f4c3}.value[data-v-5146db1f]{font-family:"Fredoka One";font-size:1.5rem}',""]),e.exports=o},548:function(e,t,r){"use strict";r.r(t);r(25),r(24),r(261),r(55),r(26),r(35),r(19),r(48),r(34),r(5),r(42),r(50),r(39);var o=r(0),n=r(51),c=r(263);function d(e,t){var r;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return l(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return l(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var i=0,o=function(){};return{s:o,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,c=!0,d=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return c=e.done,e},e:function(e){d=!0,n=e},f:function(){try{c||null==r.return||r.return()}finally{if(d)throw n}}}}function l(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,r=new Array(t);i<t;i++)r[i]=e[i];return r}var f=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},methods:{isLastScore:function(e){return this.lastScore.name===e.name&&this.lastScore.score===e.score&&this.lastScore.createdAt===e.createdAt},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?e.toFixed(2):e}},computed:{scoreStore:function(){return Object(n.e)(c.default,this.$store)},hiscores:function(){var e=null;switch(this.displayGameMode){case"modeSprint-10":e=this.scoreStore.sprint10Hiscores;break;case"modeSprint-30":e=this.scoreStore.sprint30Hiscores;break;case"modeEndress":e=this.scoreStore.endressHiscores;break;case"modeSingle":e=this.scoreStore.singleHiscores}console.log(e,this.displayGameMode);var t=e.map((function(e){return{no:0,name:e.name,score:e.score,createdAt:e.createdAt}}));if(t.length>0){var r,o=t[0].score,n=1,c=1,l=d(t);try{for(l.s();!(r=l.n()).done;){var f=r.value;f.score!=o&&(o=f.score,n=c),f.no=n,c++}}catch(e){l.e(e)}finally{l.f()}}return t},lastScore:function(){return this.scoreStore.lastScore?this.scoreStore.lastScore:{mode:this.displayGameMode,name:"",score:0,createdAt:0}},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},displayGameModeTitle:function(){return"modeEndress"==this.gameMode?"たいきゅうモード":"modeSingle"==this.gameMode?"ヒトケタス":"".concat(this.questionCount,"問モード")}}}),m=(r(545),r(84)),v=r(114),h=r.n(v),y=r(556),S=r(394),M=r(630),_=r(165),w=r(631),k=r(389),component=Object(m.a)(f,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-card",[r("v-card-title",[r("v-icon",[e._v("mdi-crown")]),e._v(e._s(e.displayGameModeTitle))],1),e._v(" "),r("v-card-text",e._l(e.hiscores,(function(t,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:e.isLastScore(t)}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),r("v-col",{staticClass:"text-h6",attrs:{cols:"auto"}},[e._v(e._s(t.name))]),e._v(" "),r("v-spacer"),e._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"5146db1f",null);t.default=component.exports;h()(component,{VCard:y.a,VCardText:S.b,VCardTitle:S.c,VCol:M.a,VIcon:_.a,VRow:w.a,VSpacer:k.a})}}]);