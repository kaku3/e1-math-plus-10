(window.webpackJsonp=window.webpackJsonp||[]).push([[54,20,30,33,46],{431:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("176ff17c",content,!0,{sourceMap:!1})},450:function(t,e,n){"use strict";n(431)},451:function(t,e,n){var o=n(22)(!1);o.push([t.i,".chat-component[data-v-c092df9e]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-c092df9e]{margin-right:.5rem;margin-bottom:1.5rem}#log-container[data-v-c092df9e]{width:100vw;max-height:calc(100vh - 172px);overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-c092df9e]{display:block}#log-container>.log-item>.name[data-v-c092df9e]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-c092df9e]{display:inline-block;padding:.5rem;text-align:left}#log-container>.log-item.me>.comment[data-v-c092df9e]{background-color:#c5e1a5}#log-container .input-form[data-v-c092df9e]{width:90vw}",""]),t.exports=o},452:function(t,e,n){var content=n(453);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5276b867",content,!0,{sourceMap:!1})},453:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=o},454:function(t,e,n){"use strict";n.r(e);var o=n(19),r=(n(59),n(64),n(12),n(30),n(9),n(2)),c=n(45),d=n(283),l=n(288),f=n(158),m=r.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;(console.log(this.room),this.room)&&f.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(o=e.$el.querySelector("#log-container"))&&(o.scrollTop=o.scrollHeight);case 4:case"end":return n.stop()}}),n)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)f.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},chatStore:function(){return Object(c.e)(l.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),h=(n(450),n(80)),v=n(92),_=n.n(v),y=(n(8),n(14),n(11),n(17),n(108)),w=n(4),x=(n(36),n(452),n(160)),C=n(39),k=n(44),S=n(67),O=r.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),j=n(124),M=n(15),R=n(3);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var Y=Object(M.a)(C.a,Object(j.b)(["left","bottom"]),k.a,S.a,O).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(w.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(R.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(R.m)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(x.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(R.m)(this)],o=this.$attrs,r=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(y.a)(o,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:r,class:this.classes},n)}}),B=n(199),D=n(423),E=n(193),A=n(843),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component"},[n("v-slide-y-reverse-transition",[t.show?n("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?n("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[n("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[n("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),n("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[n("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"c092df9e",null);e.default=component.exports;_()(component,{VBadge:Y,VBtn:B.a,VCard:D.a,VIcon:x.a,VSlideYReverseTransition:E.d,VTextField:A.a})},456:function(t,e,n){var content=n(621);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("29813b86",content,!0,{sourceMap:!1})},592:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"a",(function(){return d})),n.d(e,"d",(function(){return f})),n.d(e,"c",(function(){return m}));n(64),n(9),n(197);var o=n(433),r=[1,4,10,20,40,60];function c(t,e){return o.a.map((function(n){return d(t,e,n)})).reduce((function(t,e){return t+e}))}function d(t,e,n){var o=l(t,e,n);return o>=10?Math.min(Math.floor(o/20)+3,6):o>=4?2:o>=1?1:0}function l(t,e,n){var dd=new Date(e),o=dd.setHours(0,0,0,0),r=dd.setDate(dd.getDate()+1);return t.filter((function(t){return t.mode===n})).filter((function(t){return t.createdAt>=o})).filter((function(t){return t.createdAt<r})).length}function f(t,e,n){var o=l(t,e,n),c=r.findIndex((function(t){return t===o}));return console.log(o,c),c>=0&&c<r.length-1?r[c+1]-o:1}function m(t,e){var dd=new Date(e);dd.setHours(0,0,0,0);for(var n=dd.setDate(1),o=dd.setMonth(dd.getMonth()+1),r=t.filter((function(t){return t.createdAt>=n})).filter((function(t){return t.createdAt<o})),d=0,l=n;l<o;l+=864e5)d+=c(r,new Date(l));return d}},600:function(t,e,n){var content=n(632);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("3d4d46a4",content,!0,{sourceMap:!1})},601:function(t,e,n){var content=n(634);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("d5d3b420",content,!0,{sourceMap:!1})},620:function(t,e,n){"use strict";n(456)},621:function(t,e,n){var o=n(22)(!1);o.push([t.i,"a[data-v-66b1ffd0]{text-decoration:none}",""]),t.exports=o},623:function(t,e,n){"use strict";n.r(e);var o=n(2).a.extend({data:function(){return{networks:[{network:"email",icon:"mdi-email",name:"Email"},{network:"facebook",icon:"mdi-facebook",name:"Facebook"},{network:"twitter",icon:"mdi-twitter",name:"twitter"},{network:"line",icon:"mdi-share",name:"LINE"}],url:"https://kaku3.github.io/e1-math-plus-10/frontend/dist/",title:"小１からのさんすうゲーム",description:"小学生用さんすうゲーム。成長の記録が残ります。簡単な脳トレとしても親子であそべます。"}}}),r=(n(620),n(80)),c=n(92),d=n.n(c),l=n(160),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",t._l(t.networks,(function(e,i){return n("share-network",{key:i,attrs:{network:e.network,url:t.url,title:t.title,description:t.description}},[n("v-icon",[t._v(t._s(e.icon))]),t._v(" "+t._s(e.name)+"\n  ")],1)})),1)}),[],!1,null,"66b1ffd0",null);e.default=component.exports;d()(component,{VIcon:l.a})},631:function(t,e,n){"use strict";n(600)},632:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.ready[data-v-0291079c]{top:0;left:0;height:100%;font-family:"Fredoka One";background-color:rgba(0,0,0,.5)}.ready[data-v-0291079c],.ready>*[data-v-0291079c]{position:absolute;width:100%;text-align:center}.ready>*[data-v-0291079c]{top:50%;transform:translateY(-50%);color:#fff;font-size:4rem;font-weight:700}.ready>.count-1[data-v-0291079c],.ready>.count-2[data-v-0291079c],.ready>.count-3[data-v-0291079c]{-webkit-animation:a-count-3-data-v-0291079c .5s ease-in forwards,a-opacity-data-v-0291079c .5s ease-in forwards;animation:a-count-3-data-v-0291079c .5s ease-in forwards,a-opacity-data-v-0291079c .5s ease-in forwards}.ready>.count-0[data-v-0291079c]{-webkit-animation:a-count-0-data-v-0291079c 1s ease-out forwards,a-opacity-0-data-v-0291079c 1s ease-out forwards;animation:a-count-0-data-v-0291079c 1s ease-out forwards,a-opacity-0-data-v-0291079c 1s ease-out forwards}@-webkit-keyframes a-count-0-data-v-0291079c{0%{transform:scale(1)}to{transform:scale(5)}}@keyframes a-count-0-data-v-0291079c{0%{transform:scale(1)}to{transform:scale(5)}}@-webkit-keyframes a-opacity-0-data-v-0291079c{0%{opacity:1}to{opacity:0}}@keyframes a-opacity-0-data-v-0291079c{0%{opacity:1}to{opacity:0}}@-webkit-keyframes a-count-3-data-v-0291079c{0%{transform:scale(3)}to{transform:scale(1)}}@keyframes a-count-3-data-v-0291079c{0%{transform:scale(3)}to{transform:scale(1)}}@-webkit-keyframes a-opacity-data-v-0291079c{0%{opacity:0}to{opacity:1}}@keyframes a-opacity-data-v-0291079c{0%{opacity:0}to{opacity:1}}',""]),t.exports=o},633:function(t,e,n){"use strict";n(601)},634:function(t,e,n){var o=n(22)(!1);o.push([t.i,".effect-screen[data-v-59776227]{position:absolute;top:0;left:0;width:100%;height:100%;text-align:center;background-color:rgba(0,0,0,.5);-webkit-animation:a-screen-data-v-59776227 .5s ease-in;animation:a-screen-data-v-59776227 .5s ease-in}@-webkit-keyframes a-screen-data-v-59776227{0%{opacity:0}to{opacity:1}}@keyframes a-screen-data-v-59776227{0%{opacity:0}to{opacity:1}}.effect-screen>.star-container[data-v-59776227]{position:absolute;top:50%;left:50%;transform:translate(-50%,-100%)}.effect-screen>.star-container>.star[data-v-59776227]{-webkit-animation:a-star0-data-v-59776227 .5s ease-out 0s forwards,a-star-data-v-59776227 2s linear 1s infinite;animation:a-star0-data-v-59776227 .5s ease-out 0s forwards,a-star-data-v-59776227 2s linear 1s infinite}@-webkit-keyframes a-star0-data-v-59776227{0%{transform:scale(30);opacity:0}to{transform:scale(1);opacity:1}}@keyframes a-star0-data-v-59776227{0%{transform:scale(30);opacity:0}to{transform:scale(1);opacity:1}}@-webkit-keyframes a-star-data-v-59776227{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}@keyframes a-star-data-v-59776227{0%{transform:rotateY(0deg)}to{transform:rotateY(1turn)}}.effect-screen>.caption-text[data-v-59776227]{position:absolute;top:15%;left:0;width:100%;text-align:center;color:#fff;font-weight:700;font-size:1.8rem;letter-spacing:1.1rem;-webkit-animation:a-caption-text-data-v-59776227 1s ease-in-out;animation:a-caption-text-data-v-59776227 1s ease-in-out}@-webkit-keyframes a-caption-text-data-v-59776227{0%{transform:translateY(-100%)}20%{transform:translateY(0)}40%{transform:translateY(-50%)}60%{transform:translateY(0)}80%{transform:translateY(-10%)}to{transform:translateY(0)}}@keyframes a-caption-text-data-v-59776227{0%{transform:translateY(-100%)}20%{transform:translateY(0)}40%{transform:translateY(-50%)}60%{transform:translateY(0)}80%{transform:translateY(-10%)}to{transform:translateY(0)}}.effect-screen>.condition-text[data-v-59776227]{position:absolute;top:70vh;left:0;width:100%;text-align:center;color:#fff;font-weight:700;font-size:1.5rem}",""]),t.exports=o},639:function(t,e,n){"use strict";n.r(e);n(36);var o=n(2).a.extend({props:{readyCount:{type:Number,default:3}}}),r=(n(631),n(80)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ready"},[3===t.readyCount?n("div",{staticClass:"count-3"},[t._v("3")]):t._e(),t._v(" "),2===t.readyCount?n("div",{staticClass:"count-2"},[t._v("2")]):t._e(),t._v(" "),1===t.readyCount?n("div",{staticClass:"count-1"},[t._v("1")]):t._e(),t._v(" "),0===t.readyCount?n("div",{staticClass:"count-0"},[t._v("すたーと")]):t._e()])}),[],!1,null,"0291079c",null);e.default=component.exports},640:function(t,e,n){"use strict";n.r(e);n(36),n(73);var o=n(2).a.extend({props:{nextConditionCount:{type:Number,default:0}},data:function(){return{shown:!1}},mounted:function(){var t=this;window.setTimeout((function(){t.shown=!0}),1e3)},methods:{onTap:function(){this.shown&&this.$emit("dismiss")}}}),r=(n(633),n(80)),c=n(92),d=n.n(c),l=n(193),f=n(160),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-fade-transition",[n("div",{staticClass:"effect-screen",on:{click:function(e){return t.onTap()}}},[n("div",{staticClass:"caption-text"},[t._v("スターをげっと")]),t._v(" "),n("div",{staticClass:"star-container"},[n("v-icon",{staticClass:"star",attrs:{color:"yellow",size:"50vw"}},[t._v("mdi-star")])],1),t._v(" "),-1!==t.nextConditionCount?n("div",{staticClass:"condition-text"},[t._v("つぎの"),n("v-icon",{attrs:{color:"yellow"}},[t._v("mdi-star")]),t._v("まで"),n("br"),t._v(" "+t._s(t.nextConditionCount)+"かいぷれい")],1):t._e()])])}),[],!1,null,"59776227",null);e.default=component.exports;d()(component,{VFadeTransition:l.b,VIcon:f.a})},641:function(t,e,n){"use strict";n.r(e);n(9);var o=n(2),r=n(45),c=n(285),d=n(592),l=n.p+"assets/se/get-star.mp3",f=o.a.extend({data:function(){return{showGetStarScreen:!1,nextConditionCount:0,_starCount:0,gameMode_:"",mode_:"",readyCount_:0}},mounted:function(){},methods:{onChangeMode:function(t){(this.mode_=t,console.log(this.gameMode_,t),this.showGetStarScreen=!1,"end"===t)?(console.log(this._starCount,this.dailyStarCount),this._starCount!==this.dailyStarCount&&(this.showGetStarScreen=!0,this.nextConditionCount=Object(d.d)(this.monthlyScores,new Date,this.gameMode_),this.showGetStarScreen&&new Audio(l).play())):"game"===t&&(this._starCount=this.dailyStarCount)},onReady:function(t){this.readyCount_=t},onDismissGetStarScreen:function(){this.showGetStarScreen=!1}},computed:{scoreStore:function(){return Object(r.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},monthlyScores:function(){var dd=new Date;dd.setHours(0,0,0,0);var t=dd.setDate(1),e=dd.setMonth(dd.getMonth()+1);return this.scores.filter((function(e){return e.createdAt>=t})).filter((function(t){return t.createdAt<e}))},dailyStarCount:function(){return Object(d.b)(this.monthlyScores,new Date)},isReady:function(){return"ready"===this.mode_},isEnd:function(){return"end"===this.mode_}}}),m=n(80),component=Object(m.a)(f,undefined,undefined,!1,null,null,null);e.default=component.exports},746:function(t,e,n){var content=n(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("71c90aca",content,!0,{sourceMap:!1})},810:function(t,e,n){"use strict";n(746)},811:function(t,e,n){var o=n(22)(!1);o.push([t.i,".game-page[data-v-3b333704]{min-height:calc(100vh - 80px)}.share-container[data-v-3b333704]{position:fixed;bottom:0}",""]),t.exports=o},853:function(t,e,n){"use strict";n.r(e);var o=n(20),r=n(19),c=(n(59),n(66),n(38),n(2)),d=n(641),l=n(835),f=n(639),m=n(640),h=c.a.extend({mixins:[d.default],components:{GamePlus10:l.default,ReadyScreen:f.default,GetStarScreen:m.default},asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,d,l;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.params,r=n.game.split("-"),c=Object(o.a)(r,2),d=c[0],l=c[1],e.abrupt("return",{gameMode_:n.game,mode:d,count:parseInt(l)||-1});case 3:case"end":return e.stop()}}),e)})))()}}),v=(n(810),n(80)),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"game-page"},[n("GamePlus10",{attrs:{gameMode:t.mode,questionCount:t.count},on:{"change-mode":t.onChangeMode,ready:t.onReady}}),t._v(" "),t.isReady?n("ReadyScreen",{attrs:{readyCount:t.readyCount_}}):t._e(),t._v(" "),t.isEnd?n("div",{staticClass:"share-container"},[n("Share")],1):t._e(),t._v(" "),t.isEnd?n("Chat",{attrs:{room:"all"}}):t._e(),t._v(" "),t.showGetStarScreen?n("GetStarScreen",{attrs:{nextConditionCount:t.nextConditionCount},on:{dismiss:t.onDismissGetStarScreen}}):t._e()],1)}),[],!1,null,"3b333704",null);e.default=component.exports;installComponents(component,{Share:n(623).default,Chat:n(454).default})}}]);