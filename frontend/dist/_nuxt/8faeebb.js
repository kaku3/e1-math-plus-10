(window.webpackJsonp=window.webpackJsonp||[]).push([[18,12],{395:function(n,t,e){var content=e(402);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(18).default)("6372a61c",content,!0,{sourceMap:!1})},396:function(n,t,e){"use strict";var r=e(544);r.a.apps.length||r.a.initializeApp({apiKey:"AIzaSyBPRPy3WoSQRf52xE-NlrGElb_8AAY1HJk",authDomain:"https://github.com/kaku3/e1-math-plus-10/frontend/dist/",projectId:"e1-math-plus-10",storageBucket:"e1-math-plus-10.appspot.com",messagingSenderId:"424444487938",appId:"1:424444487938:web:29f26a55d55456fd283a1b",measurementId:"G-8GDB4K618G"}),t.a=r.a},401:function(n,t,e){"use strict";e(395)},402:function(n,t,e){var r=e(17)(!1);r.push([n.i,".rankings>*[data-v-41b2b8a8]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-41b2b8a8]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-41b2b8a8],.rankings.rank-1 .no[data-v-41b2b8a8]{font-size:1.8rem}.rankings.rank-2 .name[data-v-41b2b8a8],.rankings.rank-2 .no[data-v-41b2b8a8]{font-size:1.3rem}.rankings.rank-3 .name[data-v-41b2b8a8],.rankings.rank-3 .no[data-v-41b2b8a8]{font-size:1rem}.rankings.top10[data-v-41b2b8a8]{font-weight:700}.rankings.entry[data-v-41b2b8a8]{background-color:#f0f4c3}",""]),n.exports=r},540:function(n,t,e){"use strict";e.r(t);e(35),e(19),e(48),e(34),e(5),e(42),e(50),e(39);var r=e(23),o=(e(70),e(25),e(55),e(24),e(263),e(26),e(0)),c=e(396),l=e(51),d=e(262);function f(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return m(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return m(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var i=0,r=function(){};return{s:r,n:function(){return i>=n.length?{done:!0}:{done:!1,value:n[i++]}},e:function(n){throw n},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,c=!0,l=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){l=!0,o=n},f:function(){try{c||null==e.return||e.return()}finally{if(l)throw o}}}}function m(n,t){(null==t||t>n.length)&&(t=n.length);for(var i=0,e=new Array(t);i<t;i++)e[i]=n[i];return e}var v=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{rankings:[]}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var e,q,r,o,l,d,m,v,k;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,e=c.a.firestore(),q=e.collection("scores").where("mode","==",n.displayGameMode).orderBy("score","modeEndress"===n.gameMode?"desc":"asc").limit(100),t.next=5,q.get();case 5:if(r=t.sent,n.rankings=r.docs.map((function(n){var t=n.data();return t.no=0,t})),n.rankings.length>0){o=n.rankings[0].score,l=1,d=1,m=f(n.rankings);try{for(m.s();!(v=m.n()).done;)(k=v.value).score!=o&&(o=k.score,l=d),k.no=l,d++}catch(n){m.e(n)}finally{m.f()}}t.next=13;break;case 10:t.prev=10,t.t0=t.catch(0),console.error(t.t0);case 13:case"end":return t.stop()}}),t,null,[[0,10]])})))()},methods:{isMe:function(n){return n.name==this.accountStore.account.name},displayScore:function(n){return"modeEndress"!==this.gameMode?n.toFixed(2):n}},computed:{accountStore:function(){return Object(l.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)}}}),k=(e(401),e(84)),h=e(114),y=e.n(h),_=e(547),w=e(394),S=e(623),x=e(165),M=e(624),C=e(389),component=Object(k.a)(v,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("v-card",[e("v-card-title",[e("v-icon",[n._v("mdi-crown")]),n._v("らんきんぐ")],1),n._v(" "),e("v-card-text",n._l(n.rankings,(function(t,i){return e("v-row",{key:i,staticClass:"rankings",class:{entry:n.isMe(t),"rank-1":1==t.no,"rank-2":2==t.no,"rank-3":3==t.no,top10:t.no<=10}},[e("v-col",{staticClass:"no",attrs:{cols:"auto"}},[n._v(n._s(t.no))]),n._v(" "),e("v-col",{staticClass:"name",attrs:{cols:"auto"}},[n._v(n._s(t.name))]),n._v(" "),e("v-spacer"),n._v(" "),e("v-col",{staticClass:"value",attrs:{cols:"auto"}},[n._v(n._s(n.displayScore(t.score)))])],1)})),1)],1)}),[],!1,null,"41b2b8a8",null);t.default=component.exports;y()(component,{VCard:_.a,VCardText:w.b,VCardTitle:w.c,VCol:S.a,VIcon:x.a,VRow:M.a,VSpacer:C.a})},632:function(n,t,e){"use strict";e.r(t);var r=e(84),component=Object(r.a)({},(function(){var n=this.$createElement;return(this._self._c||n)("Ranking")}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Ranking:e(540).default})}}]);