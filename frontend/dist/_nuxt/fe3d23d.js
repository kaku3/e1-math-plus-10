(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{395:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return f}));var r=n(396),o=n(1),c=Object(o.g)("v-card__actions"),d=Object(o.g)("v-card__subtitle"),l=Object(o.g)("v-card__text"),f=Object(o.g)("v-card__title");r.a},398:function(e,t,n){"use strict";var r=n(410);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),t.a=r.a},405:function(e,t,n){var content=n(555);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(18).default)("0d11c644",content,!0,{sourceMap:!1})},554:function(e,t,n){"use strict";n(405)},555:function(e,t,n){var r=n(17)(!1);r.push([e.i,".rankings>*[data-v-73254f4e]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-73254f4e]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-73254f4e],.rankings.rank-1 .no[data-v-73254f4e]{font-size:1.8rem}.rankings.rank-2 .name[data-v-73254f4e],.rankings.rank-2 .no[data-v-73254f4e]{font-size:1.3rem}.rankings.rank-3 .name[data-v-73254f4e],.rankings.rank-3 .no[data-v-73254f4e]{font-size:1rem}.rankings.top10[data-v-73254f4e]{font-weight:700}.rankings.entry[data-v-73254f4e]{background-color:#f0f4c3}",""]),e.exports=r},559:function(e,t,n){"use strict";n.r(t);n(34),n(19),n(48),n(35),n(5),n(42),n(50),n(39);var r=n(23),o=(n(70),n(25),n(55),n(24),n(264),n(26),n(0)),c=n(398),d=n(51),l=n(262);function f(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,d=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){d=!0,o=e},f:function(){try{c||null==n.return||n.return()}finally{if(d)throw o}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var v=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.getRankings();case 2:case"end":return t.stop()}}),t)})))()},methods:{getRankings:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var n,q,r,o,d,l,m,v,h,y;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n=c.a.firestore(),q=null,e.daily?(new Date,r=(new Date).setHours(0,0,0,0),q=n.collection("scores").where("mode","==",e.displayGameMode).where("createdAt","==",r).orderBy("score",e.orderBy).limit(100)):q=n.collection("scores").where("mode","==",e.displayGameMode).orderBy("score",e.orderBy).limit(100),t.next=6,q.get();case 6:if(o=t.sent,e.rankings=o.docs.map((function(e){var t=e.data();return t.no=0,t})),e.rankings.length>0){d=e.rankings[0].score,l=1,m=1,v=f(e.rankings);try{for(v.s();!(h=v.n()).done;)(y=h.value).score!=d&&(d=y.score,l=m),y.no=l,m++}catch(e){v.e(e)}finally{v.f()}}t.next=14;break;case 11:t.prev=11,t.t0=t.catch(0),console.error(t.t0);case 14:case"end":return t.stop()}}),t,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(e){return e.name==this.accountStore.account.name},displayScore:function(e){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode?e.toFixed(2):e}},computed:{accountStore:function(){return Object(d.e)(l.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode?"desc":"asc"}}}),h=(n(554),n(84)),y=n(115),k=n.n(y),_=n(182),w=n(396),S=n(395),M=n(643),x=n(147),j=n(644),A=n(390),component=Object(h.a)(v,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",[n("v-card-title",[n("v-icon",[e._v("mdi-crown")]),e._v(" "),n("h3",[e._v("らんきんぐ")]),e._v(" "),n("v-spacer"),e._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:e.daily},on:{click:function(t){return e.toggle()}}},[e._v("きょう")]),e._v(" "),n("v-btn",{attrs:{color:"accent",small:"",disabled:!e.daily},on:{click:function(t){return e.toggle()}}},[e._v("ぜんぶ")])],1),e._v(" "),n("v-card-text",e._l(e.rankings,(function(t,i){return n("v-row",{key:i,staticClass:"rankings",class:{entry:e.isMe(t),"rank-1":1==t.no,"rank-2":2==t.no,"rank-3":3==t.no,top10:t.no<=10}},[n("v-col",{staticClass:"no",attrs:{cols:"auto"}},[e._v(e._s(t.no))]),e._v(" "),n("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[e._v(e._s(t.name))]),e._v(" "),n("v-col",{staticClass:"value",attrs:{cols:"auto"}},[e._v(e._s(e.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"73254f4e",null);t.default=component.exports;k()(component,{VBtn:_.a,VCard:w.a,VCardText:S.b,VCardTitle:S.c,VCol:M.a,VIcon:x.a,VRow:j.a,VSpacer:A.a})}}]);