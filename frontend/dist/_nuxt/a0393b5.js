(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{412:function(t,e,o){var content=o(557);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("20f66928",content,!0,{sourceMap:!1})},556:function(t,e,o){"use strict";o(412)},557:function(t,e,o){var n=o(24)(!1);n.push([t.i,".chat-component[data-v-2a59ccc4]{position:fixed;right:0;bottom:0;text-align:right}.toggle-show-icon[data-v-2a59ccc4]{margin-right:.5rem;margin-bottom:.5rem}#log-container[data-v-2a59ccc4]{width:100vw;max-height:60vh;overflow:auto;background-color:rgba(0,0,0,.25)}#log-container>.log-item[data-v-2a59ccc4]{display:block}#log-container>.log-item>.name[data-v-2a59ccc4]{font-size:.8rem;font-weight:700}#log-container>.log-item>.comment[data-v-2a59ccc4]{display:inline-block;padding:.5rem}#log-container>.log-item.me>.comment[data-v-2a59ccc4]{background-color:#c5e1a5}#log-container .input-form[data-v-2a59ccc4]{width:90vw}",""]),t.exports=n},558:function(t,e,o){var content=o(559);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(25).default)("5276b867",content,!0,{sourceMap:!1})},559:function(t,e,o){var n=o(24)(!1);n.push([t.i,'.theme--light.v-badge .v-badge__badge:after{border-color:#fff}.theme--dark.v-badge .v-badge__badge:after{border-color:#1e1e1e}.v-badge{position:relative}.v-badge,.v-badge__badge{display:inline-block;line-height:1}.v-badge__badge{border-radius:10px;color:#fff;font-size:12px;height:20px;letter-spacing:0;min-width:20px;padding:4px 6px;pointer-events:auto;position:absolute;text-align:center;text-indent:0;top:auto;transition:.3s cubic-bezier(.25,.8,.5,1);white-space:nowrap}.v-application--is-ltr .v-badge__badge{right:auto}.v-application--is-rtl .v-badge__badge{left:auto}.v-badge__badge .v-icon{color:inherit;font-size:12px;margin:0 -2px}.v-badge__badge .v-img{height:12px;width:12px}.v-badge__wrapper{flex:0 1;height:100%;left:0;pointer-events:none;position:absolute;top:0;width:100%}.v-badge--avatar .v-badge__badge{padding:0}.v-badge--avatar .v-badge__badge .v-avatar{height:20px!important;min-width:0!important;max-width:20px!important}.v-badge--bordered .v-badge__badge:after{border-radius:inherit;border-width:2px;border-style:solid;bottom:0;content:"";left:0;position:absolute;right:0;top:0;transform:scale(1.15)}.v-badge--dot .v-badge__badge{border-radius:4.5px;height:9px;min-width:0;padding:0;width:9px}.v-badge--dot .v-badge__badge:after{border-width:1.5px}.v-badge--icon .v-badge__badge{padding:4px 6px}.v-badge--inline{align-items:center;display:inline-flex;justify-content:center}.v-badge--inline .v-badge__badge,.v-badge--inline .v-badge__wrapper{position:relative}.v-badge--inline .v-badge__wrapper{margin:0 4px}.v-badge--tile .v-badge__badge{border-radius:0}',""]),t.exports=n},563:function(t,e,o){"use strict";o.r(e);var n=o(23),r=(o(72),o(62),o(12),o(31),o(8),o(2)),c=o(44),l=o(272),d=o(276),h=o(154),f=r.a.extend({props:{room:{type:String,default:""}},data:function(){return{show:!1,chatRead:null,comment:"",logs:[]}},mounted:function(){this.getLogs()},methods:{toggleShow:function(){var t=this;console.log("test"),this.show=!this.show,this.$nextTick((function(){t.show&&t.logs.length>0&&t.updateChatRead(t.logs[t.logs.length-1])}))},getLogs:function(){var t=this;this.room&&h.a.database().ref(this.room).orderByChild("createdAt").limitToLast(10).on("value",(function(data){if(data){var e=data.val();e&&(t.logs=Object.keys(e).map((function(t){return e[t]})))}t.show&&t.updateChatRead(t.logs[t.logs.length-1])}))},updateChatRead:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:e.chatRead={room:e.room,timestamp:t.createdAt},e.chatStore.updateChatRead(e.chatRead),(n=e.$el.querySelector("#log-container"))&&(n.scrollTop=n.scrollHeight);case 4:case"end":return o.stop()}}),o)})))()},postComment:function(){if(this.comment&&!(this.comment.length>140)){if(this.room)h.a.database().ref(this.room).push({name:this.accountStore.account.name,comment:this.comment,createdAt:(new Date).getTime()});this.comment=""}},isMe:function(t){return t.name===this.accountStore.account.name}},computed:{accountStore:function(){return Object(c.e)(l.default,this.$store)},chatStore:function(){return Object(c.e)(d.default,this.$store)},showIconColor:function(){return this.show?"accent":"primary"},unreadCount:function(){var t=this.chatRead;return t?this.logs.filter((function(e){return e.createdAt>t.timestamp})).length:0}}}),m=(o(556),o(91)),v=o(122),_=o.n(v),w=(o(9),o(13),o(11),o(17),o(106)),x=o(4),y=(o(36),o(558),o(157)),O=o(39),C=o(43),j=o(66),S=r.a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),k=o(123),B=o(14),$=o(3);function R(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}var P=Object(B.a)(O.a,Object(k.b)(["left","bottom"]),C.a,j.a,S).extend({name:"v-badge",props:{avatar:Boolean,bordered:Boolean,color:{type:String,default:"primary"},content:{required:!1},dot:Boolean,label:{type:String,default:"$vuetify.badge"},icon:String,inline:Boolean,offsetX:[Number,String],offsetY:[Number,String],overlap:Boolean,tile:Boolean,transition:{type:String,default:"scale-rotate-transition"},value:{default:!0}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?R(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):R(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-badge--avatar":this.avatar,"v-badge--bordered":this.bordered,"v-badge--bottom":this.bottom,"v-badge--dot":this.dot,"v-badge--icon":null!=this.icon,"v-badge--inline":this.inline,"v-badge--left":this.left,"v-badge--overlap":this.overlap,"v-badge--tile":this.tile},this.themeClasses)},computedBottom:function(){return this.bottom?"auto":this.computedYOffset},computedLeft:function(){return this.isRtl?this.left?this.computedXOffset:"auto":this.left?"auto":this.computedXOffset},computedRight:function(){return this.isRtl?this.left?"auto":this.computedXOffset:this.left?this.computedXOffset:"auto"},computedTop:function(){return this.bottom?this.computedYOffset:"auto"},computedXOffset:function(){return this.calcPosition(this.offsetX)},computedYOffset:function(){return this.calcPosition(this.offsetY)},isRtl:function(){return this.$vuetify.rtl},offset:function(){return this.overlap?this.dot?8:12:this.dot?2:4},styles:function(){return this.inline?{}:{bottom:this.computedBottom,left:this.computedLeft,right:this.computedRight,top:this.computedTop}}},methods:{calcPosition:function(t){return"calc(100% - ".concat(Object($.f)(t||this.offset),")")},genBadge:function(){var t=this.$vuetify.lang,label=this.$attrs["aria-label"]||t.t(this.label),data=this.setBackgroundColor(this.color,{staticClass:"v-badge__badge",style:this.styles,attrs:{"aria-atomic":this.$attrs["aria-atomic"]||"true","aria-label":label,"aria-live":this.$attrs["aria-live"]||"polite",title:this.$attrs.title,role:this.$attrs.role||"status"},directives:[{name:"show",value:this.isActive}]}),e=this.$createElement("span",data,[this.genBadgeContent()]);return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e},genBadgeContent:function(){if(!this.dot){var slot=Object($.l)(this,"badge");return slot||(this.content?String(this.content):this.icon?this.$createElement(y.a,this.icon):void 0)}},genBadgeWrapper:function(){return this.$createElement("span",{staticClass:"v-badge__wrapper"},[this.genBadge()])}},render:function(t){var e=[this.genBadgeWrapper()],o=[Object($.l)(this)],n=this.$attrs,r=(n["aria-atomic"],n["aria-label"],n["aria-live"],n.role,n.title,Object(w.a)(n,["aria-atomic","aria-label","aria-live","role","title"]));return this.inline&&this.left?o.unshift(e):o.push(e),t("span",{staticClass:"v-badge",attrs:r,class:this.classes},o)}}),T=o(199),E=o(408),X=o(186),A=o(640),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"chat-component"},[o("v-slide-y-reverse-transition",[t.show?o("div",{attrs:{id:"log-container"}},t._l(t.logs,(function(e,i){return o("div",{key:i,staticClass:"log-item",class:{me:t.isMe(e)},attrs:{id:"id-"+e.createdAt}},[o("div",{staticClass:"name"},[t._v(t._s(e.name))]),t._v(" "),o("v-card",{staticClass:"comment rounded-lg",attrs:{elevation:"2"}},[t._v(t._s(e.comment))])],1)})),0):t._e()]),t._v(" "),t.show?o("v-card",{staticClass:"input-form",attrs:{elevation:"2"}},[o("v-text-field",{attrs:{placeholder:"コメント",counter:"140",outlined:"",dense:""},scopedSlots:t._u([{key:"append",fn:function(){return[o("v-btn",{attrs:{icon:""},on:{click:function(e){return t.postComment()}}},[o("v-icon",[t._v("mdi-send")])],1)]},proxy:!0}],null,!1,418245475),model:{value:t.comment,callback:function(e){t.comment=e},expression:"comment"}})],1):t._e(),t._v(" "),o("v-badge",{staticClass:"toggle-show-icon",attrs:{content:t.unreadCount,value:t.unreadCount,bordered:"",color:"info",overlap:""}},[o("v-btn",{attrs:{fab:"",dark:"",small:"",color:t.showIconColor},on:{click:function(e){return t.toggleShow()}}},[o("v-icon",[t._v("mdi-chat")])],1)],1)],1)}),[],!1,null,"2a59ccc4",null);e.default=component.exports;_()(component,{VBadge:P,VBtn:T.a,VCard:E.a,VIcon:y.a,VSlideYReverseTransition:X.d,VTextField:A.a})}}]);