(window.webpackJsonp=window.webpackJsonp||[]).push([[89,28,49],{1026:function(t,e,n){"use strict";n(886)},1027:function(t,e,n){var o=n(22)(!1);o.push([t.i,".v-card .v-card__title[data-v-95b24600]{padding:.1rem .25rem!important;line-height:1;font-size:.9rem;max-height:2rem;overflow:hidden}.v-card .v-card__text[data-v-95b24600]{padding:.25rem!important;font-size:.7rem;color:#9e9e9e;text-overflow:ellipsis;height:1.75rem}.icon[data-v-95b24600]{width:100%}",""]),t.exports=o},1087:function(t,e,n){"use strict";n.r(e);var o=n(18),r=(n(59),n(64),n(2)),c=n(158),d=r.a.extend({data:function(){return{icons:[]}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,q,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.a.firestore(),q=n.collection("pixelIcons").orderBy("timestamp","desc").limit(50),e.next=4,q.get();case 4:o=e.sent,t.icons=o.docs.map((function(t){return t.data()}));case 6:case"end":return e.stop()}}),e)})))()},methods:{}}),l=(n(1026),n(80)),h=n(92),f=n.n(h),v=n(200),m=n(428),_=n(424),w=n(1072),x=n(160),y=n(1073),O=n(421),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-container"},[n("v-row",[n("v-spacer"),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{staticClass:"btn-new",attrs:{fab:"",dark:"",color:"primary",to:"/pixel16/new"}},[n("v-icon",{attrs:{dark:""}},[t._v("\n          mdi-plus\n        ")])],1)],1)],1),t._v(" "),n("v-row",{attrs:{"no-gutters":""}},t._l(t.icons,(function(e,i){return n("v-col",{key:i,attrs:{cols:"6"}},[n("v-card",[n("IconView",{staticClass:"icon",attrs:{icon:e.icon}}),t._v(" "),n("v-card-title",[t._v(t._s(e.title))]),t._v(" "),n("v-card-text",[t._v(t._s(e.name))])],1)],1)})),1),t._v(" "),n("Chat",{attrs:{room:"all"}})],1)}),[],!1,null,"95b24600",null);e.default=component.exports;f()(component,{IconView:n(680).default,Chat:n(468).default}),f()(component,{VBtn:v.a,VCard:m.a,VCardText:_.b,VCardTitle:_.c,VCol:w.a,VIcon:x.a,VRow:y.a,VSpacer:O.a})},424:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l})),n.d(e,"c",(function(){return h}));var o=n(428),r=n(3),c=Object(r.h)("v-card__actions"),d=Object(r.h)("v-card__subtitle"),l=Object(r.h)("v-card__text"),h=Object(r.h)("v-card__title");o.a},437:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("176ff17c",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(437)},465:function(t,e,n){var o=n(22)(!1);o.push([t.i,".chat-component[data-v-c092df9e]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-c092df9e]{margin-right:.5rem;margin-bottom:1.5rem}#log-container[data-v-c092df9e]{width:100vw;max-height:calc(100vh - 172px);overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-c092df9e]{display:block}#log-container>.log-item>.name[data-v-c092df9e]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-c092df9e]{display:inline-block;padding:.5rem;text-align:left}#log-container>.log-item.me>.comment[data-v-c092df9e]{background-color:#c5e1a5}#log-container .input-form[data-v-c092df9e]{width:90vw}",""]),t.exports=o},466:function(t,e,n){var content=n(467);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5276b867",content,!0,{sourceMap:!1})},467:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=o},468:function(t,e,n){"use strict";n.r(e);var o=n(18),r=(n(59),n(64),n(12),n(30),n(9),n(2)),c=n(37),d=n(287),l=n(291),h=n(158),f=r.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;(console.log(this.room),this.room)&&h.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(o=e.$el.querySelector("#log-container"))&&(o.scrollTop=o.scrollHeight);case 4:case"end":return n.stop()}}),n)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)h.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},chatStore:function(){return Object(c.e)(l.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),v=(n(464),n(80)),m=n(92),_=n.n(m),w=(n(8),n(14),n(11),n(17),n(108)),x=n(4),y=(n(36),n(466),n(160)),O=n(40),C=n(45),j=n(66),S=r.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),k=n(124),B=n(15),R=n(3);function $(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var V=Object(B.a)(O.a,Object(k.b)(["left","bottom"]),C.a,j.a,S).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?$(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):$(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object(R.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object(R.n)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(y.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],n=[Object(R.n)(this)],o=this.$attrs,r=(o["aria-atomic"],o["aria-label"],o["aria-live"],o.role,o.title,Object(w.a)(o,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?n.unshift(e):n.push(e),t("span",{staticClass:"v-badge",attrs:r,class:this.classes},n)}}),z=n(200),P=n(428),T=n(194),E=n(1097),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"chat-component"},[n("v-slide-y-reverse-transition",[t.show?n("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return n("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[n("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),n("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?n("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[n("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[n("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),n("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[n("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"c092df9e",null);e.default=component.exports;_()(component,{VBadge:V,VBtn:z.a,VCard:P.a,VIcon:y.a,VSlideYReverseTransition:T.e,VTextField:E.a})},680:function(t,e,n){"use strict";n.r(e);n(36);var o=n(2).a.extend({props:{icon:{type:String},size:{type:Number,default:256},transpalent:{type:Boolean,default:!1}},data:function(){return{ready:!1}},mounted:function(){this.init()},methods:{init:function(){var t=this.p.ps,e=this.p.cs,n=this.$refs.canvas.getContext("2d"),o=this.size/16,r=this.size/16;n.clearRect(0,0,this.size,this.size);for(var c=0,d=0;c<16;c++,d+=r)for(var l=0,h=0;l<16;l++,h+=o){var f=t[c][l];this.transpalent&&0===f||(n.fillStyle=e[f],n.fillRect(h,d,o,r))}}},computed:{p:function(){return JSON.parse(this.icon)}}}),r=n(80),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("canvas",{ref:"canvas",attrs:{width:t.size,height:t.size}})}),[],!1,null,"62968701",null);e.default=component.exports},886:function(t,e,n){var content=n(1027);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("07ebd2a6",content,!0,{sourceMap:!1})}}]);