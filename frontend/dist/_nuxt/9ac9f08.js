(window.webpackJsonp=window.webpackJsonp||[]).push([[3,46],{422:function(o,n,t){"use strict";t.d(n,"a",(function(){return r})),t.d(n,"b",(function(){return x})),t.d(n,"c",(function(){return k}));var e=t(426),d=t(3),r=Object(d.h)("v-card__actions"),c=Object(d.h)("v-card__subtitle"),x=Object(d.h)("v-card__text"),k=Object(d.h)("v-card__title");e.a},436:function(o,n,t){"use strict";o.exports=function(o,n){return n||(n={}),"string"!=typeof(o=o&&o.__esModule?o.default:o)?o:(/^['"].*['"]$/.test(o)&&(o=o.slice(1,-1)),n.hash&&(o+=n.hash),/["'() \t\n]/.test(o)||n.needQuotes?'"'.concat(o.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):o)}},609:function(o,n,t){"use strict";t.r(n);t(9),t(11);var e=t(2),d=t(678),r=e.a.extend({data:function(){return{characters:[],hasCharacters:[]}},mounted:function(){},methods:{init:function(o,n){var t=this,e=d.b.filter((function(n){return n.mode==o})),r=d.c.hasCharacters(e,n);this.characters=new Array(e.length),e.forEach((function(o,i){return t.$set(t.characters,i,o)})),this.hasCharacters=new Array(r.length),r.forEach((function(o,i){return t.$set(t.hasCharacters,i,o)}))}}}),c=(t(951),t(953),t(80)),x=t(92),k=t.n(x),l=t(426),v=t(422),f=t(742),m=t(184),E=t(119),h=t(187),y=t(46),component=Object(c.a)(r,(function(){var o=this,n=o.$createElement,t=o._self._c||n;return o.characters.length>0?t("v-card",{staticClass:"jump-collection-card mt-4"},[t("v-card-title",{staticClass:"head orange orange--text text--lighten-5"},[o._v("JUMP MAN COLLECTION")]),o._v(" "),t("v-list",{attrs:{dense:""}},[o._l(o.characters,(function(n,i){return[t("v-list-item",{key:i},[t("v-list-item-avatar",[o.hasCharacters[i]?t("div",{class:"c c"+n.id+" mb-4"}):t("div",{staticClass:"icon unknown"},[o._v("?")])]),o._v(" "),t("v-list-item-content",[o.hasCharacters[i]?t("v-list-item-title",{staticClass:"name"},[o._v("\n            "+o._s(n.name)+"\n          ")]):t("v-list-item-title",{staticClass:"name"},[o._v("\n            ????\n          ")]),o._v(" "),t("v-list-item-subtitle",{staticClass:"condition"},[o._v("\n            "+o._s(n.condition)+"\n          ")]),o._v(" "),t("v-divider")],1)],1)]}))],2)],1):o._e()}),[],!1,null,"8563808e",null);n.default=component.exports;k()(component,{VCard:l.a,VCardTitle:v.c,VDivider:f.a,VList:m.a,VListItem:E.a,VListItemAvatar:h.a,VListItemContent:y.a,VListItemSubtitle:y.b,VListItemTitle:y.c})},654:function(o,n,t){o.exports=t.p+"img/characters.be5677b.png"},670:function(o,n,t){var content=t(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(23).default)("7132a15d",content,!0,{sourceMap:!1})},671:function(o,n,t){var e=t(22)(!1);e.push([o.i,".theme--light.v-divider{border-color:rgba(0,0,0,.12)}.theme--dark.v-divider{border-color:hsla(0,0%,100%,.12)}.v-divider{display:block;flex:1 1 0px;max-width:100%;height:0;max-height:0;border:solid;border-width:thin 0 0;transition:inherit}.v-divider--inset:not(.v-divider--vertical){max-width:calc(100% - 72px)}.v-application--is-ltr .v-divider--inset:not(.v-divider--vertical){margin-left:72px}.v-application--is-rtl .v-divider--inset:not(.v-divider--vertical){margin-right:72px}.v-divider--vertical{align-self:stretch;border:solid;border-width:0 thin 0 0;display:inline-flex;height:inherit;min-height:100%;max-height:100%;max-width:0;width:0;vertical-align:text-bottom;margin:0 -1px}.v-divider--vertical.v-divider--inset{margin-top:8px;min-height:0;max-height:calc(100% - 16px)}",""]),o.exports=e},678:function(o,n,t){"use strict";t.d(n,"a",(function(){return e})),t.d(n,"b",(function(){return k})),t.d(n,"c",(function(){return l}));var e,d=t(18),r=t(25),c=t(33),x=(t(64),t(59),t(158));!function(o){o[o.TOWNS_FORK=0]="TOWNS_FORK",o[o.HERALD=1]="HERALD",o[o.MERCHANT=2]="MERCHANT",o[o.BUCTCHER=3]="BUCTCHER",o[o.BLACKSMITH=4]="BLACKSMITH",o[o.ALCHEMIST=5]="ALCHEMIST",o[o.MAGICSHOPKEEPER=6]="MAGICSHOPKEEPER",o[o.THIEF=7]="THIEF",o[o.ARCHER=8]="ARCHER",o[o.MAGE=9]="MAGE",o[o.BISHOP=10]="BISHOP",o[o.EXECUTIONER=11]="EXECUTIONER",o[o.KNIGHT=12]="KNIGHT",o[o.HEAVYKNIGHT=13]="HEAVYKNIGHT",o[o.LARGEKNIGHT=14]="LARGEKNIGHT",o[o.ELITEKNIGHT=15]="ELITEKNIGHT",o[o.LARGEELITEKNIGHT=16]="LARGEELITEKNIGHT",o[o.SKINNYNUN=17]="SKINNYNUN",o[o.NORMALNUN=18]="NORMALNUN",o[o.FATNUN=19]="FATNUN",o[o.PRINCESS=20]="PRINCESS",o[o.QUEEN=21]="QUEEN",o[o.KING=22]="KING",o[o.MOUNTAINKING=23]="MOUNTAINKING"}(e||(e={}));var k=[{id:e.TOWNS_FORK,name:"FORK",status:{spx:1,spy:1,jp:1,life:1},mode:"",field:"",condition:"なし",cond:"GE",value:0},{id:e.HERALD,name:"HERALD",status:{spx:.95,spy:1,jp:1,life:1},mode:"modeSprint-30",field:"count",condition:"たして１０：３０問モードを10回",cond:"GE",value:10},{id:e.MERCHANT,name:"MERCHANT",status:{spx:1,spy:.95,jp:.95,life:1},mode:"modeSingle",field:"count",condition:"ヒトケタス：10回",cond:"GE",value:10},{id:e.BUCTCHER,name:"BUCTCHER",status:{spx:.95,spy:.95,jp:.95,life:1},mode:"minusSprint-30",field:"count",condition:"ひきざん２０：３０問モードを10回",cond:"GE",value:10},{id:e.BLACKSMITH,name:"BLACKSMITH",status:{spx:.8,spy:.95,jp:.95,life:1},mode:"mul99Sprint-30",field:"count",condition:"かけざん９９：３０問モードを10回",cond:"GE",value:10},{id:e.ALCHEMIST,name:"ALCHEMIST",status:{spx:.8,spy:.8,jp:.8,life:1},mode:"modeSprint-10",field:"score",condition:"たして１０：１０問モード20秒",cond:"LE",value:20},{id:e.MAGICSHOPKEEPER,name:"MAGIC SHOPKEEPER",status:{spx:.6,spy:.6,jp:.6,life:1},mode:"modeSprint-10",field:"score",condition:"たして１０：１０問モード8秒",cond:"LE",value:8},{id:e.THIEF,name:"THIEF",status:{spx:1.5,spy:1.3,jp:1.3,life:1},mode:"modeSprint-10",field:"score",condition:"たして１０：１０問モード6秒",cond:"LE",value:6},{id:e.ARCHER,name:"ARCHER",status:{spx:1.2,spy:1.2,jp:1.2,life:1},mode:"modeSingle",field:"score",condition:"ヒトケタス：100万点",cond:"GE",value:1e6},{id:e.MAGE,name:"MAGE",status:{spx:1,spy:.9,jp:.9,life:2},mode:"modeSingle",field:"score",condition:"ヒトケタス：300万点",cond:"GE",value:3e6},{id:e.BISHOP,name:"BISHOP",status:{spx:1,spy:.9,jp:.9,life:2},mode:"modeSingle",field:"score",condition:"ヒトケタス：400万点",cond:"GE",value:4e6},{id:e.EXECUTIONER,name:"EXECUTIONER",status:{spx:1,spy:1,jp:1,life:2},mode:"minusSprint-10",field:"score",condition:"ひきざん２０：１０問モード30秒",cond:"LE",value:30},{id:e.KNIGHT,name:"KNIGHT",status:{spx:1,spy:1,jp:1,life:2},mode:"minusSprint-10",field:"score",condition:"ひきざん２０：１０問モード9秒",cond:"LE",value:9},{id:e.HEAVYKNIGHT,name:"HEAVY KNIGHT",status:{spx:.9,spy:1,jp:1,life:3},mode:"minusSprint-10",field:"score",condition:"ひきざん２０：１０問モード7秒",cond:"LE",value:7},{id:e.LARGEKNIGHT,name:"LARGE KNIGHT",status:{spx:.8,spy:.8,jp:.8,life:3},mode:"mul99Sprint-10",field:"score",condition:"かけざん９９：１０問モード30秒",cond:"LE",value:30},{id:e.ELITEKNIGHT,name:"ELITE KNIGHT",status:{spx:1.1,spy:1.1,jp:1.1,life:2},mode:"mul99Sprint-10",field:"score",condition:"かけざん９９：１０問モード10秒",cond:"LE",value:10},{id:e.LARGEELITEKNIGHT,name:"LARGE ELITE KNIGHT",status:{spx:1.1,spy:1,jp:1.1,life:3},mode:"mul99Sprint-10",field:"score",condition:"かけざん９９：１０問モード8秒",cond:"LE",value:8},{id:e.SKINNYNUN,name:"SKINNY NUN",status:{spx:.8,spy:.8,jp:.8,life:2},mode:"maze20",field:"score",condition:"めいろ２０：5階",cond:"GE",value:5},{id:e.NORMALNUN,name:"NORMAL NUN",status:{spx:.9,spy:.9,jp:.9,life:2},mode:"maze20",field:"score",condition:"めいろ２０：15階",cond:"GE",value:15},{id:e.FATNUN,name:"FAT NUN",status:{spx:.7,spy:.7,jp:.7,life:2},mode:"maze20",field:"score",condition:"めいろ２０：クリア",cond:"GE",value:21},{id:e.PRINCESS,name:"PRINCESS",status:{spx:1,spy:1,jp:1,life:2},mode:"modeSprint-10",field:"count",condition:"たして１０：10問モード1000回",cond:"GE",value:1e3},{id:e.QUEEN,name:"QUEEN",status:{spx:1,spy:1,jp:1,life:3},mode:"modeSingle",field:"count",condition:"ヒトケタス：1000回",cond:"GE",value:1e3},{id:e.KING,name:"KING",status:{spx:1.1,spy:1.1,jp:1.1,life:3},mode:"minusSprint-10",field:"count",condition:"ひきざん２０：10問モード1000回",cond:"GE",value:1e3},{id:e.MOUNTAINKING,name:"MOUNTAIN KING",status:{spx:1.1,spy:1.1,jp:1.1,life:4},mode:"mul99Sprint-10",field:"count",condition:"かけざん９９：10問モード1000回",cond:"GE",value:1e3}],l=function(){function o(){Object(r.a)(this,o);var n=sessionStorage.getItem("uid")||"";this.uid=n,this.save=this.newSave()}var n;return Object(c.a)(o,[{key:"newSave",value:function(){return{uid:this.uid,characterFlg:1,score:0,playCount:0}}},{key:"loadData",value:(n=Object(d.a)(regeneratorRuntime.mark((function o(){var n,q,t;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n=x.a.firestore(),q=n.collection("jumpSaves").doc(this.save.uid),o.next=4,q.get();case 4:(t=o.sent).exists?this.save=t.data():q.set(this.save);case 6:case"end":return o.stop()}}),o,this)}))),function(){return n.apply(this,arguments)})},{key:"saveData",value:function(){x.a.firestore().collection("jumpSaves").doc(this.save.uid).set(this.save)}},{key:"hasCharacter",value:function(o){return 0!=(this.save.characterFlg&1<<o)}},{key:"getCharacter",value:function(o){this.save.characterFlg|=1<<o}}],[{key:"hasCharacters",value:function(o,n){return o.map((function(o){var t=n[o.field];return"GE"==o.cond&&t>=o.value||"LE"==o.cond&&Math.floor(t)<=o.value}))}}]),o}()},742:function(o,n,t){"use strict";t(12),t(8),t(9),t(14),t(11),t(17);var e=t(4),d=(t(670),t(45));function r(object,o){var n=Object.keys(object);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(object);o&&(t=t.filter((function(o){return Object.getOwnPropertyDescriptor(object,o).enumerable}))),n.push.apply(n,t)}return n}function c(o){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?r(Object(source),!0).forEach((function(n){Object(e.a)(o,n,source[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(source)):r(Object(source)).forEach((function(n){Object.defineProperty(o,n,Object.getOwnPropertyDescriptor(source,n))}))}return o}n.a=d.a.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(o){var n;return this.$attrs.role&&"separator"!==this.$attrs.role||(n=this.vertical?"vertical":"horizontal"),o("hr",{class:c({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:c({role:"separator","aria-orientation":n},this.$attrs),on:this.$listeners})}})},834:function(o,n,t){var content=t(952);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(23).default)("3bea287b",content,!0,{sourceMap:!1})},835:function(o,n,t){var content=t(954);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[o.i,content,""]]),content.locals&&(o.exports=content.locals);(0,t(23).default)("595b0e51",content,!0,{sourceMap:!1})},951:function(o,n,t){"use strict";t(834)},952:function(o,n,t){var e=t(22),d=t(436),r=t(654),c=e(!1),x=d(r);c.push([o.i,".c[data-v-8563808e]{display:inline-block;background:url("+x+");width:32px;height:32px}.c.c0[data-v-8563808e]{background-position:0 0;-webkit-animation:a-idle-0-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-0-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-0-data-v-8563808e{0%{background-position:0 0}25%{background-position:-32px 0}50%{background-position:-64px 0}75%{background-position:-96px 0}to{background-position:0 0}}@keyframes a-idle-0-data-v-8563808e{0%{background-position:0 0}25%{background-position:-32px 0}50%{background-position:-64px 0}75%{background-position:-96px 0}to{background-position:0 0}}.c.c1[data-v-8563808e]{background-position:0 -32px;-webkit-animation:a-idle-1-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-1-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-1-data-v-8563808e{0%{background-position:0 -32px}25%{background-position:-32px -32px}50%{background-position:-64px -32px}75%{background-position:-96px -32px}to{background-position:0 -32px}}@keyframes a-idle-1-data-v-8563808e{0%{background-position:0 -32px}25%{background-position:-32px -32px}50%{background-position:-64px -32px}75%{background-position:-96px -32px}to{background-position:0 -32px}}.c.c2[data-v-8563808e]{background-position:0 -64px;-webkit-animation:a-idle-2-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-2-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-2-data-v-8563808e{0%{background-position:0 -64px}25%{background-position:-32px -64px}50%{background-position:-64px -64px}75%{background-position:-96px -64px}to{background-position:0 -64px}}@keyframes a-idle-2-data-v-8563808e{0%{background-position:0 -64px}25%{background-position:-32px -64px}50%{background-position:-64px -64px}75%{background-position:-96px -64px}to{background-position:0 -64px}}.c.c3[data-v-8563808e]{background-position:0 -96px;-webkit-animation:a-idle-3-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-3-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-3-data-v-8563808e{0%{background-position:0 -96px}25%{background-position:-32px -96px}50%{background-position:-64px -96px}75%{background-position:-96px -96px}to{background-position:0 -96px}}@keyframes a-idle-3-data-v-8563808e{0%{background-position:0 -96px}25%{background-position:-32px -96px}50%{background-position:-64px -96px}75%{background-position:-96px -96px}to{background-position:0 -96px}}.c.c4[data-v-8563808e]{background-position:0 -128px;-webkit-animation:a-idle-4-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-4-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-4-data-v-8563808e{0%{background-position:0 -128px}25%{background-position:-32px -128px}50%{background-position:-64px -128px}75%{background-position:-96px -128px}to{background-position:0 -128px}}@keyframes a-idle-4-data-v-8563808e{0%{background-position:0 -128px}25%{background-position:-32px -128px}50%{background-position:-64px -128px}75%{background-position:-96px -128px}to{background-position:0 -128px}}.c.c5[data-v-8563808e]{background-position:0 -160px;-webkit-animation:a-idle-5-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-5-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-5-data-v-8563808e{0%{background-position:0 -160px}25%{background-position:-32px -160px}50%{background-position:-64px -160px}75%{background-position:-96px -160px}to{background-position:0 -160px}}@keyframes a-idle-5-data-v-8563808e{0%{background-position:0 -160px}25%{background-position:-32px -160px}50%{background-position:-64px -160px}75%{background-position:-96px -160px}to{background-position:0 -160px}}.c.c6[data-v-8563808e]{background-position:0 -192px;-webkit-animation:a-idle-6-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-6-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-6-data-v-8563808e{0%{background-position:0 -192px}25%{background-position:-32px -192px}50%{background-position:-64px -192px}75%{background-position:-96px -192px}to{background-position:0 -192px}}@keyframes a-idle-6-data-v-8563808e{0%{background-position:0 -192px}25%{background-position:-32px -192px}50%{background-position:-64px -192px}75%{background-position:-96px -192px}to{background-position:0 -192px}}.c.c7[data-v-8563808e]{background-position:0 -224px;-webkit-animation:a-idle-7-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-7-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-7-data-v-8563808e{0%{background-position:0 -224px}25%{background-position:-32px -224px}50%{background-position:-64px -224px}75%{background-position:-96px -224px}to{background-position:0 -224px}}@keyframes a-idle-7-data-v-8563808e{0%{background-position:0 -224px}25%{background-position:-32px -224px}50%{background-position:-64px -224px}75%{background-position:-96px -224px}to{background-position:0 -224px}}.c.c8[data-v-8563808e]{background-position:0 -256px;-webkit-animation:a-idle-8-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-8-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-8-data-v-8563808e{0%{background-position:0 -256px}25%{background-position:-32px -256px}50%{background-position:-64px -256px}75%{background-position:-96px -256px}to{background-position:0 -256px}}@keyframes a-idle-8-data-v-8563808e{0%{background-position:0 -256px}25%{background-position:-32px -256px}50%{background-position:-64px -256px}75%{background-position:-96px -256px}to{background-position:0 -256px}}.c.c9[data-v-8563808e]{background-position:0 -288px;-webkit-animation:a-idle-9-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-9-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-9-data-v-8563808e{0%{background-position:0 -288px}25%{background-position:-32px -288px}50%{background-position:-64px -288px}75%{background-position:-96px -288px}to{background-position:0 -288px}}@keyframes a-idle-9-data-v-8563808e{0%{background-position:0 -288px}25%{background-position:-32px -288px}50%{background-position:-64px -288px}75%{background-position:-96px -288px}to{background-position:0 -288px}}.c.c10[data-v-8563808e]{background-position:0 -320px;-webkit-animation:a-idle-10-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-10-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-10-data-v-8563808e{0%{background-position:0 -320px}25%{background-position:-32px -320px}50%{background-position:-64px -320px}75%{background-position:-96px -320px}to{background-position:0 -320px}}@keyframes a-idle-10-data-v-8563808e{0%{background-position:0 -320px}25%{background-position:-32px -320px}50%{background-position:-64px -320px}75%{background-position:-96px -320px}to{background-position:0 -320px}}.c.c11[data-v-8563808e]{background-position:0 -352px;-webkit-animation:a-idle-11-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-11-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-11-data-v-8563808e{0%{background-position:0 -352px}25%{background-position:-32px -352px}50%{background-position:-64px -352px}75%{background-position:-96px -352px}to{background-position:0 -352px}}@keyframes a-idle-11-data-v-8563808e{0%{background-position:0 -352px}25%{background-position:-32px -352px}50%{background-position:-64px -352px}75%{background-position:-96px -352px}to{background-position:0 -352px}}.c.c12[data-v-8563808e]{background-position:0 -384px;-webkit-animation:a-idle-12-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-12-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-12-data-v-8563808e{0%{background-position:0 -384px}25%{background-position:-32px -384px}50%{background-position:-64px -384px}75%{background-position:-96px -384px}to{background-position:0 -384px}}@keyframes a-idle-12-data-v-8563808e{0%{background-position:0 -384px}25%{background-position:-32px -384px}50%{background-position:-64px -384px}75%{background-position:-96px -384px}to{background-position:0 -384px}}.c.c13[data-v-8563808e]{background-position:0 -416px;-webkit-animation:a-idle-13-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-13-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-13-data-v-8563808e{0%{background-position:0 -416px}25%{background-position:-32px -416px}50%{background-position:-64px -416px}75%{background-position:-96px -416px}to{background-position:0 -416px}}@keyframes a-idle-13-data-v-8563808e{0%{background-position:0 -416px}25%{background-position:-32px -416px}50%{background-position:-64px -416px}75%{background-position:-96px -416px}to{background-position:0 -416px}}.c.c14[data-v-8563808e]{background-position:0 -448px;-webkit-animation:a-idle-14-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-14-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-14-data-v-8563808e{0%{background-position:0 -448px}25%{background-position:-32px -448px}50%{background-position:-64px -448px}75%{background-position:-96px -448px}to{background-position:0 -448px}}@keyframes a-idle-14-data-v-8563808e{0%{background-position:0 -448px}25%{background-position:-32px -448px}50%{background-position:-64px -448px}75%{background-position:-96px -448px}to{background-position:0 -448px}}.c.c15[data-v-8563808e]{background-position:0 -480px;-webkit-animation:a-idle-15-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-15-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-15-data-v-8563808e{0%{background-position:0 -480px}25%{background-position:-32px -480px}50%{background-position:-64px -480px}75%{background-position:-96px -480px}to{background-position:0 -480px}}@keyframes a-idle-15-data-v-8563808e{0%{background-position:0 -480px}25%{background-position:-32px -480px}50%{background-position:-64px -480px}75%{background-position:-96px -480px}to{background-position:0 -480px}}.c.c16[data-v-8563808e]{background-position:0 -512px;-webkit-animation:a-idle-16-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-16-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-16-data-v-8563808e{0%{background-position:0 -512px}25%{background-position:-32px -512px}50%{background-position:-64px -512px}75%{background-position:-96px -512px}to{background-position:0 -512px}}@keyframes a-idle-16-data-v-8563808e{0%{background-position:0 -512px}25%{background-position:-32px -512px}50%{background-position:-64px -512px}75%{background-position:-96px -512px}to{background-position:0 -512px}}.c.c17[data-v-8563808e]{background-position:0 -544px;-webkit-animation:a-idle-17-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-17-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-17-data-v-8563808e{0%{background-position:0 -544px}25%{background-position:-32px -544px}50%{background-position:-64px -544px}75%{background-position:-96px -544px}to{background-position:0 -544px}}@keyframes a-idle-17-data-v-8563808e{0%{background-position:0 -544px}25%{background-position:-32px -544px}50%{background-position:-64px -544px}75%{background-position:-96px -544px}to{background-position:0 -544px}}.c.c18[data-v-8563808e]{background-position:0 -576px;-webkit-animation:a-idle-18-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-18-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-18-data-v-8563808e{0%{background-position:0 -576px}25%{background-position:-32px -576px}50%{background-position:-64px -576px}75%{background-position:-96px -576px}to{background-position:0 -576px}}@keyframes a-idle-18-data-v-8563808e{0%{background-position:0 -576px}25%{background-position:-32px -576px}50%{background-position:-64px -576px}75%{background-position:-96px -576px}to{background-position:0 -576px}}.c.c19[data-v-8563808e]{background-position:0 -608px;-webkit-animation:a-idle-19-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-19-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-19-data-v-8563808e{0%{background-position:0 -608px}25%{background-position:-32px -608px}50%{background-position:-64px -608px}75%{background-position:-96px -608px}to{background-position:0 -608px}}@keyframes a-idle-19-data-v-8563808e{0%{background-position:0 -608px}25%{background-position:-32px -608px}50%{background-position:-64px -608px}75%{background-position:-96px -608px}to{background-position:0 -608px}}.c.c20[data-v-8563808e]{background-position:0 -640px;-webkit-animation:a-idle-20-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-20-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-20-data-v-8563808e{0%{background-position:0 -640px}25%{background-position:-32px -640px}50%{background-position:-64px -640px}75%{background-position:-96px -640px}to{background-position:0 -640px}}@keyframes a-idle-20-data-v-8563808e{0%{background-position:0 -640px}25%{background-position:-32px -640px}50%{background-position:-64px -640px}75%{background-position:-96px -640px}to{background-position:0 -640px}}.c.c21[data-v-8563808e]{background-position:0 -672px;-webkit-animation:a-idle-21-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-21-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-21-data-v-8563808e{0%{background-position:0 -672px}25%{background-position:-32px -672px}50%{background-position:-64px -672px}75%{background-position:-96px -672px}to{background-position:0 -672px}}@keyframes a-idle-21-data-v-8563808e{0%{background-position:0 -672px}25%{background-position:-32px -672px}50%{background-position:-64px -672px}75%{background-position:-96px -672px}to{background-position:0 -672px}}.c.c22[data-v-8563808e]{background-position:0 -704px;-webkit-animation:a-idle-22-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-22-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-22-data-v-8563808e{0%{background-position:0 -704px}25%{background-position:-32px -704px}50%{background-position:-64px -704px}75%{background-position:-96px -704px}to{background-position:0 -704px}}@keyframes a-idle-22-data-v-8563808e{0%{background-position:0 -704px}25%{background-position:-32px -704px}50%{background-position:-64px -704px}75%{background-position:-96px -704px}to{background-position:0 -704px}}.c.c23[data-v-8563808e]{background-position:0 -736px;-webkit-animation:a-idle-23-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-23-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-23-data-v-8563808e{0%{background-position:0 -736px}25%{background-position:-32px -736px}50%{background-position:-64px -736px}75%{background-position:-96px -736px}to{background-position:0 -736px}}@keyframes a-idle-23-data-v-8563808e{0%{background-position:0 -736px}25%{background-position:-32px -736px}50%{background-position:-64px -736px}75%{background-position:-96px -736px}to{background-position:0 -736px}}.c.c24[data-v-8563808e]{background-position:0 -768px;-webkit-animation:a-idle-24-data-v-8563808e .5s step-end 0s infinite;animation:a-idle-24-data-v-8563808e .5s step-end 0s infinite}@-webkit-keyframes a-idle-24-data-v-8563808e{0%{background-position:0 -768px}25%{background-position:-32px -768px}50%{background-position:-64px -768px}75%{background-position:-96px -768px}to{background-position:0 -768px}}@keyframes a-idle-24-data-v-8563808e{0%{background-position:0 -768px}25%{background-position:-32px -768px}50%{background-position:-64px -768px}75%{background-position:-96px -768px}to{background-position:0 -768px}}",""]),o.exports=c},953:function(o,n,t){"use strict";t(835)},954:function(o,n,t){var e=t(22)(!1);e.push([o.i,'.jump-collection-card[data-v-8563808e]{font-family:"Press Start 2P","DotGothic16"}.jump-collection-card>.head[data-v-8563808e]{padding:.25rem .75rem;font-size:.8rem}.jump-collection-card .name[data-v-8563808e]{font-size:.8rem}.jump-collection-card .icon[data-v-8563808e]{width:32px;height:32px}',""]),o.exports=e}}]);