(window.webpackJsonp=window.webpackJsonp||[]).push([[91,48],{1093:function(t,e,n){"use strict";n.r(e);n(30);var o=n(2),r=n(37),c=n(287),l=n(158),v=o.a.extend({data:function(){return{title:"",message:"",showMessage:!1,saved:!1}},methods:{onSave:function(t){if(""===this.title)return this.message="タイトルをつけてください",void(this.showMessage=!0);l.a.firestore().collection("pixelIcons").add(Object.assign({name:this.accountStore.account.name,title:this.title},t)),this.message="こうしんしました",this.showMessage=!0,this.saved=!0}},computed:{accountStore:function(){return Object(r.e)(c.default,this.$store)}}}),d=n(80),h=n(92),f=n.n(h),m=n(200),_=n(1076),x=n(160),k=n(1077),w=n(765),y=n(1102),component=Object(d.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.saved?t._e():n("v-text-field",{attrs:{label:"タイトル"},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}}),t._v(" "),t.saved?t._e():n("IconEditor",{on:{save:t.onSave}}),t._v(" "),n("v-row",{staticClass:"mt-8",attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{to:"/"}},[n("v-icon",[t._v("mdi-home-circle")]),t._v("ほーむ\n      ")],1)],1),t._v(" "),n("v-col",{attrs:{cols:"auto"}},[n("v-btn",{attrs:{to:"/pixel16/"}},[n("v-icon",[t._v("mdi-view-module")]),t._v("いちらん\n      ")],1)],1)],1),t._v(" "),n("v-snackbar",{model:{value:t.showMessage,callback:function(e){t.showMessage=e},expression:"showMessage"}},[t._v("\n    "+t._s(t.message)+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;f()(component,{IconEditor:n(762).default}),f()(component,{VBtn:m.a,VCol:_.a,VIcon:x.a,VRow:k.a,VSnackbar:w.a,VTextField:y.a})},685:function(t,e,n){var content=n(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("9f64b428",content,!0,{sourceMap:!1})},691:function(t,e,n){var content=n(692);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("63c9496b",content,!0,{sourceMap:!1})},692:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=o},700:function(t,e,n){"use strict";n(685)},701:function(t,e,n){var o=n(22)(!1);o.push([t.i,'.pixel-container[data-v-4dd9250d]{position:relative;padding:8px 0}.pixel-container table[data-v-4dd9250d]{margin:auto;width:320px;border-collapse:collapse}@media screen and (min-width:768px){.pixel-container table[data-v-4dd9250d]{width:640px}}.pixel-container table td[data-v-4dd9250d]{border:1px solid hsla(0,0%,100%,.5)}.pixel-container .pixel[data-v-4dd9250d]{height:18px}.pixel-container .pixel.c0[data-v-4dd9250d]:before{display:block;float:left;width:0;height:16px;line-height:1;color:#fff;text-align:center;content:"-"}@media screen and (min-width:768px){.pixel-container .pixel[data-v-4dd9250d]{height:32px}.pixel-container .pixel.c0[data-v-4dd9250d]:before{height:30px}}.palette-container[data-v-4dd9250d]{font-size:0}.palette-container .palette[data-v-4dd9250d]{position:relative;display:inline-block;cursor:pointer;width:12.5%;height:32px;border:1px solid hsla(0,0%,100%,.5)}.palette-container .palette.active[data-v-4dd9250d]{border:2px solid hsla(0,0%,100%,.8)}.palette-container .palette[data-v-4dd9250d]:first-child:before{position:absolute;width:100%;font-size:1rem;color:#fff;text-align:center;content:"-"}.v-color-picker[data-v-4dd9250d]{position:absolute;left:8px;bottom:8px}',""]),t.exports=o},762:function(t,e,n){"use strict";n.r(e);var o=n(68),r=(n(290),n(163),n(32),n(43),n(9),n(2).a.extend({props:{icon:{type:String,default:JSON.stringify({ps:[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],[0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,3,8,3,3,3,3,8,3,3,3,3,0],[0,3,3,3,3,8,3,3,3,3,8,3,3,3,3,0],[0,3,3,3,3,8,3,3,3,3,8,3,3,3,3,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,3,3,3,3,3,3,3,3,3,3,3,0],[0,3,3,3,8,8,8,8,8,8,8,8,3,3,3,0],[0,0,3,3,3,3,3,3,3,3,3,3,3,3,0,0],[0,0,0,3,3,3,3,3,3,3,3,3,3,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],cs:["#000000","#FFFFFF","#FF0000","#FFFF00","#00FF00","#00FFFF","#0000FF","#FF00FF","#222222","#880000","#888800","#008800","#008888","#000088","#880088","#FFE1CD"]})}},data:function(){return{ps:[],cs:[],ca:0,range:Array(2),currentRangePosition:0,colorEdit:!1,tool:5,penSize:1,saved:!1}},mounted:function(){var t=JSON.parse(this.icon);this.ps=t.ps,this.cs=t.cs},methods:{paletteStyle:function(t){return{backgroundColor:this.cs[t]}},pixelStyle:function(t,e){return{backgroundColor:this.cs[this.ps[e][t]]}},selectPalette:function(t){t!=this.ca||0===t?this.ca=t:this.colorEdit=!this.colorEdit},tapPixel:function(t,e){var n=this;switch(console.log({x:t,y:e}),this.tool){case 1:this.fill(this.ps[e][t],t,e);break;case 2:if(this.updateRange(t,e)){var o=this.range[0],r=o.x,c=o.y,l=this.range[1],v=l.x,d=l.y;r>v&&(r=this.range[1].x,v=this.range[0].x),c>d&&(c=this.range[1].y,d=this.range[0].y);for(var h=c;h<=d;h++)for(var f=r;f<=v;f++)this.setPixel(f,h)}break;case 3:this.updateRange(t,e)&&this.bresenham(this.range[0].x,this.range[0].y,this.range[1].x,this.range[1].y,(function(t,e){n.setPixel(t,e)}));break;case 5:1===this.penSize?this.setPixel(t,e):this.setPixels(t,e)}this.cs.splice(this.ca,1,this.cs[this.ca])},setPixels:function(t,e){for(var h2=this.penSize,n=Math.max(0,e-0);n<Math.min(e+h2,16);n++)for(var o=Math.max(0,t-0);o<Math.min(t+h2,16);o++)this.setPixel(o,n)},setPixel:function(t,e){this.ps[e].splice(t,1,this.ca)},fill:function(t,e,n){this.ps[n][e]===t&&(this.ps[n][e]=this.ca,n>0&&this.fill(t,e,n-1),n<15&&this.fill(t,e,n+1),e>0&&this.fill(t,e-1,n),e<15&&this.fill(t,e+1,n))},moveX:function(t){var e=Array();if(t<0)for(var n=0;n<16;n++){var p=this.ps[n][0];e.push([].concat(Object(o.a)(this.ps[n].slice(1)),[p]))}else for(var r=0;r<16;r++){var c=this.ps[r][15];e.push([c].concat(Object(o.a)(this.ps[r].slice(0,15))))}this.ps=e,console.log(e)},moveY:function(t){for(var e=Array(),n=0;n<16;n++)e.push(this.ps[(n-t+16)%16]);this.ps=e},setPenSize:function(t){this.penSize=t,this.tool=5,console.log({size:t})},initRange:function(){this.currentRangePosition=0},updateRange:function(t,e){return this.range[this.currentRangePosition++]={x:t,y:e},this.currentRangePosition%=2,0==this.currentRangePosition},bresenham:function(t,e,n,o,r){for(var c=Math.abs(n-t),l=Math.abs(o-e),v=t<n?1:-1,d=e<o?1:-1,h=c-l;r(t,e),t!=n||e!=o;){var f=h<<1;f>-l&&(h-=l,t+=v),f<c&&(h+=c,e+=d)}},onSave:function(){if(console.log("save"),!this.isNull){var t=sessionStorage.getItem("uid")||"",e=new Date;this.$emit("save",{uid:t,icon:JSON.stringify({ps:this.ps,cs:this.cs}),timestamp:e.getTime(),createdAt:e.setHours(0,0,0,0)})}}},computed:{isNull:function(){return 0==this.ps.filter((function(t){return 0!==t.reduce((function(t,e){return t+e}))})).length}}})),c=(n(700),n(80)),l=n(92),v=n.n(l),d=n(200),h=n(1072),f=n(428),m=n(424),_=n(1081),x=n(160),k=n(184),w=n(119),y=n(1104),S=n(421),component=Object(c.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""},on:{click:t.onSave}},[t._v("mdi-content-save")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn-toggle",{attrs:{mandatory:""},model:{value:t.tool,callback:function(e){t.tool=e},expression:"tool"}},[n("v-menu",{attrs:{"offset-y":"","close-on-content-click":!1},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{large:""}},[t._v("mdi-cursor-move")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){return t.moveY(-1)}}},[n("v-icon",[t._v("mdi-arrow-up")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.moveY(1)}}},[n("v-icon",[t._v("mdi-arrow-down")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.moveX(-1)}}},[n("v-icon",[t._v("mdi-arrow-left")])],1),t._v(" "),n("v-list-item",{on:{click:function(e){return t.moveX(1)}}},[n("v-icon",[t._v("mdi-arrow-right")])],1)],1)],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-bucket")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.initRange}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-rectangle")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:t.initRange}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-vector-line")])],1),t._v(" "),n("v-menu",{attrs:{"offset-y":""},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on,r=e.attrs;return[n("v-btn",t._g(t._b({attrs:{icon:""}},"v-btn",r,!1),o),[n("v-icon",{attrs:{large:""}},[t._v("mdi-pencil-plus")])],1)]}}])},[t._v(" "),n("v-list",[n("v-list-item",{on:{click:function(e){return t.setPenSize(1)}}},[t._v("1")]),t._v(" "),n("v-list-item",{on:{click:function(e){return t.setPenSize(2)}}},[t._v("2")]),t._v(" "),n("v-list-item",{on:{click:function(e){return t.setPenSize(3)}}},[t._v("3")]),t._v(" "),n("v-list-item",{on:{click:function(e){return t.setPenSize(4)}}},[t._v("4")])],1)],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-pencil")])],1)],1)],1),t._v(" "),n("div",{staticClass:"pixel-container"},[n("table",t._l(t.ps,(function(e,o){return n("tr",{key:o},t._l(e,(function(col,e){return n("td",{key:e,class:"pixel c"+t.ps[o][e],style:t.pixelStyle(e,o),on:{pointerdown:function(n){return t.tapPixel(e,o)}}})})),0)})),0),t._v(" "),t.colorEdit?n("v-color-picker",{attrs:{elevation:"8"},model:{value:t.cs[t.ca],callback:function(e){t.$set(t.cs,t.ca,e)},expression:"cs[ca]"}}):t._e()],1),t._v(" "),n("div",{staticClass:"palette-container"},t._l(t.cs,(function(e,i){return n("div",{key:i,staticClass:"palette",class:{active:i==t.ca},style:t.paletteStyle(i),on:{pointerdown:function(e){return t.selectPalette(i)}}})})),0)],1)}),[],!1,null,"4dd9250d",null);e.default=component.exports;v()(component,{VBtn:d.a,VBtnToggle:h.a,VCard:f.a,VCardActions:m.a,VColorPicker:_.a,VIcon:x.a,VList:k.a,VListItem:w.a,VMenu:y.a,VSpacer:S.a})},765:function(t,e,n){"use strict";var o=n(4),r=(n(36),n(58),n(73),n(691),n(77)),c=n(40),l=n(45),v=n(66),d=n(124),h=n(15),f=n(3),m=n(10);e.a=Object(h.a)(r.a,c.a,v.a,Object(d.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:l.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,o=t.insetFooter,r=t.left,c=t.right,l=t.top;return{paddingBottom:Object(f.f)(n+footer+o),paddingLeft:this.app?Object(f.f)(r):void 0,paddingRight:this.app?Object(f.f)(c):void 0,paddingTop:Object(f.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(m.e)("auto-height",this),0==this.timeout&&Object(m.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(f.n)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(o.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(f.n)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:r.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}})}}]);