(window.webpackJsonp=window.webpackJsonp||[]).push([[15,16],{636:function(t,e,n){var content=n(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("aa818dbe",content,!0,{sourceMap:!1})},654:function(t,e,n){var content=n(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("63c9496b",content,!0,{sourceMap:!1})},655:function(t,e,n){var r=n(22)(!1);r.push([t.i,'.theme--light.v-snack__wrapper{color:rgba(0,0,0,.87)}.theme--dark.v-snack__wrapper{color:#fff}.v-sheet.v-snack__wrapper{border-radius:4px}.v-sheet.v-snack__wrapper:not(.v-sheet--outlined){box-shadow:0 3px 5px -1px rgba(0,0,0,.2),0 6px 10px 0 rgba(0,0,0,.14),0 1px 18px 0 rgba(0,0,0,.12)}.v-sheet.v-snack__wrapper.v-sheet--shaped{border-radius:24px 4px}.v-snack{bottom:0;display:flex;font-size:.875rem;justify-content:center;left:0;pointer-events:none;right:0;top:0;width:100%}.v-snack:not(.v-snack--absolute){height:100vh;position:fixed;z-index:1000}.v-snack:not(.v-snack--centered):not(.v-snack--top){align-items:flex-end}.v-snack__wrapper{align-items:center;border-color:currentColor!important;display:flex;margin:8px;max-width:672px;min-height:48px;min-width:344px;padding:0;pointer-events:auto;position:relative;transition-duration:.15s;transition-property:opacity,transform;transition-timing-function:cubic-bezier(0,0,.2,1)}.v-snack__wrapper.theme--dark{background-color:#333;color:hsla(0,0%,100%,.87)}.v-snack__content{flex-grow:1;font-size:.875rem;font-weight:400;letter-spacing:.0178571429em;line-height:1.25rem;margin-right:auto;padding:14px 16px;text-align:left;text-align:initial}.v-snack__action{align-items:center;align-self:center;display:flex}.v-snack__action .v-ripple__container{display:none}.v-application--is-ltr .v-snack__action{margin-right:8px}.v-application--is-rtl .v-snack__action{margin-left:8px}.v-snack__action>.v-snack__btn.v-btn{padding:0 8px}.v-snack__btn{margin:0;min-width:auto}.v-snack--absolute{height:100%;position:absolute;z-index:1}.v-snack--centered{align-items:center}.v-snack--left{justify-content:flex-start;right:auto}.v-snack--multi-line .v-snack__wrapper{min-height:68px}.v-snack--right{justify-content:flex-end;left:auto}.v-snack:not(.v-snack--has-background) .v-snack__wrapper{box-shadow:none!important}.v-snack--bottom{top:auto}.v-snack--text .v-snack__wrapper:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;pointer-events:none;position:absolute;right:0;top:0}.v-snack--top{align-items:flex-start;bottom:auto}.v-snack--vertical .v-snack__wrapper{flex-direction:column}.v-snack--vertical .v-snack__wrapper .v-snack__action{align-self:flex-end;margin-bottom:8px}.v-snack-transition-enter.v-snack__wrapper{transform:scale(.8)}.v-snack-transition-enter.v-snack__wrapper,.v-snack-transition-leave-to.v-snack__wrapper{opacity:0}',""]),t.exports=r},656:function(t,e,n){"use strict";n(636)},657:function(t,e,n){var r=n(22)(!1);r.push([t.i,".pixel-container[data-v-63885bcd]{position:relative;padding:8px 0}.pixel-container table[data-v-63885bcd]{margin:auto;width:320px;border-spacing:1}.pixel-container .pixel[data-v-63885bcd]{width:18px;height:18px}.palette-container[data-v-63885bcd]{font-size:0}.palette-container .palette[data-v-63885bcd]{display:inline-block;cursor:pointer;width:12.5%;height:32px;border:1px solid hsla(0,0%,100%,.5)}.palette-container .palette.active[data-v-63885bcd]{border:2px solid hsla(0,0%,100%,.8)}.v-color-picker[data-v-63885bcd]{position:absolute;left:8px;bottom:8px}",""]),t.exports=r},683:function(t,e,n){"use strict";n.r(e);n(30);var r=n(2).a.extend({props:{name:{type:String,default:"ゲスト"}},data:function(){return{valid:!1,showUpdateMessage:!1}},methods:{updateName:function(){this.$emit("update-name",this.name),this.showUpdateMessage=!0}}}),o=n(80),c=n(92),l=n.n(c),d=n(199),h=n(423),v=n(421),f=n(4),m=(n(58),n(81),n(201),n(9),n(11),n(73),n(94),n(12),n(8),n(14),n(17),n(15)),_=n(99),k=n(128);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y=Object(m.a)(_.a,Object(k.b)("form")).extend({name:"v-form",provide:function(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:function(){return{inputs:[],watchers:[],errorBag:{}}},watch:{errorBag:{handler:function(t){var e=Object.values(t).includes(!0);this.$emit("input",!e)},deep:!0,immediate:!0}},methods:{watchInput:function(input){var t=this,e=function(input){return input.$watch("hasError",(function(e){t.$set(t.errorBag,input._uid,e)}),{immediate:!0})},n={_uid:input._uid,valid:function(){},shouldValidate:function(){}};return this.lazyValidation?n.shouldValidate=input.$watch("shouldValidate",(function(r){r&&(t.errorBag.hasOwnProperty(input._uid)||(n.valid=e(input)))})):n.valid=e(input),n},validate:function(){return 0===this.inputs.filter((function(input){return!input.validate(!0)})).length},reset:function(){this.inputs.forEach((function(input){return input.reset()})),this.resetErrorBag()},resetErrorBag:function(){var t=this;this.lazyValidation&&setTimeout((function(){t.errorBag={}}),0)},resetValidation:function(){this.inputs.forEach((function(input){return input.resetValidation()})),this.resetErrorBag()},register:function(input){this.inputs.push(input),this.watchers.push(this.watchInput(input))},unregister:function(input){var t=this.inputs.find((function(i){return i._uid===input._uid}));if(t){var e=this.watchers.find((function(i){return i._uid===t._uid}));e&&(e.valid(),e.shouldValidate()),this.watchers=this.watchers.filter((function(i){return i._uid!==t._uid})),this.inputs=this.inputs.filter((function(i){return i._uid!==t._uid})),this.$delete(this.errorBag,t._uid)}}},render:function(t){var e=this;return t("form",{staticClass:"v-form",attrs:w({novalidate:!0},this.attrs$),on:{submit:function(t){return e.$emit("submit",t)}}},this.$slots.default)}}),O=(n(36),n(654),n(77)),B=n(38),j=n(44),C=n(66),E=n(124),V=n(3),P=n(10),T=Object(m.a)(O.a,B.a,C.a,Object(E.b)(["absolute","bottom","left","right","top"])).extend({name:"v-snackbar",props:{app:Boolean,centered:Boolean,contentClass:{type:String,default:""},multiLine:Boolean,text:Boolean,timeout:{type:[Number,String],default:5e3},transition:{type:[Boolean,String],default:"v-snack-transition",validator:function(t){return"string"==typeof t||!1===t}},vertical:Boolean},data:function(){return{activeTimeout:-1}},computed:{classes:function(){return{"v-snack--absolute":this.absolute,"v-snack--active":this.isActive,"v-snack--bottom":this.bottom||!this.top,"v-snack--centered":this.centered,"v-snack--has-background":this.hasBackground,"v-snack--left":this.left,"v-snack--multi-line":this.multiLine&&!this.vertical,"v-snack--right":this.right,"v-snack--text":this.text,"v-snack--top":this.top,"v-snack--vertical":this.vertical}},hasBackground:function(){return!this.text&&!this.outlined},isDark:function(){return this.hasBackground?!this.light:j.a.options.computed.isDark.call(this)},styles:function(){if(this.absolute)return{};var t=this.$vuetify.application,e=t.bar,n=t.bottom,footer=t.footer,r=t.insetFooter,o=t.left,c=t.right,l=t.top;return{paddingBottom:Object(V.f)(n+footer+r),paddingLeft:this.app?Object(V.f)(o):void 0,paddingRight:this.app?Object(V.f)(c):void 0,paddingTop:Object(V.f)(e+l)}}},watch:{isActive:"setTimeout",timeout:"setTimeout"},mounted:function(){this.isActive&&this.setTimeout()},created:function(){this.$attrs.hasOwnProperty("auto-height")&&Object(P.e)("auto-height",this),0==this.timeout&&Object(P.d)('timeout="0"',"-1",this)},methods:{genActions:function(){return this.$createElement("div",{staticClass:"v-snack__action "},[Object(V.n)(this,"action",{attrs:{class:"v-snack__btn"}})])},genContent:function(){return this.$createElement("div",{staticClass:"v-snack__content",class:Object(f.a)({},this.contentClass,!0),attrs:{role:"status","aria-live":"polite"}},[Object(V.n)(this)])},genWrapper:function(){var t=this,data=(this.hasBackground?this.setBackgroundColor:this.setTextColor)(this.color,{staticClass:"v-snack__wrapper",class:O.a.options.computed.classes.call(this),directives:[{name:"show",value:this.isActive}],on:{mouseenter:function(){return window.clearTimeout(t.activeTimeout)},mouseleave:this.setTimeout}});return this.$createElement("div",data,[this.genContent(),this.genActions()])},genTransition:function(){return this.$createElement("transition",{props:{name:this.transition}},[this.genWrapper()])},setTimeout:function(){var t=this;window.clearTimeout(this.activeTimeout);var e=Number(this.timeout);this.isActive&&![0,-1].includes(e)&&(this.activeTimeout=window.setTimeout((function(){t.isActive=!1}),e))}},render:function(t){return t("div",{staticClass:"v-snack",class:this.classes,style:this.styles},[!1!==this.transition?this.genTransition():this.genWrapper()])}}),$=n(417),A=n(881),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-text",[n("v-form",{model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[n("v-text-field",{attrs:{label:"にっくねーむ"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v("\n    * 個人を特定できる名前を登録しないでください\n  ")],1),t._v(" "),n("v-card-actions",[n("v-spacer"),t._v(" "),n("v-btn",{attrs:{color:"primary"},on:{click:t.updateName}},[t._v("こうしん")])],1),t._v(" "),n("v-snackbar",{model:{value:t.showUpdateMessage,callback:function(e){t.showUpdateMessage=e},expression:"showUpdateMessage"}},[t._v("\n    こうしんしました\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VBtn:d.a,VCard:h.a,VCardActions:v.a,VCardText:v.b,VForm:y,VSnackbar:T,VSpacer:$.a,VTextField:A.a})},684:function(t,e,n){"use strict";n.r(e);n(162);var r=n(2).a.extend({data:function(){return{ps:[],cs:[],ca:0,colorEdit:!1,tool:2}},mounted:function(){this.ps=[[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,0,11,11,11,11,11,11,11,11,11,11,0,0,0,0],[0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,11,4,11,11,11,11,4,11,11,11,11,0,0],[0,0,11,11,11,11,4,11,11,11,11,4,11,11,11,11,0,0],[0,0,11,11,11,11,4,11,11,11,11,4,11,11,11,11,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,11,11,11,11,11,11,11,11,11,11,11,0,0],[0,0,11,11,11,4,4,4,4,4,4,4,4,11,11,11,0,0],[0,0,0,11,11,11,11,11,11,11,11,11,11,11,11,0,0,0],[0,0,0,0,11,11,11,11,11,11,11,11,11,11,0,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]],this.cs=["#000000","#F44336","#E91E63","#9C27B0","#673AB7","#3F51B5","#2196F3","#03A9F4","#00BCD4","#4CAF50","#8BC34A","#CDDC39","#FFEB3B","#FFC107","#FF9800","#FF5722"]},methods:{paletteStyle:function(t){return{backgroundColor:this.cs[t]}},pixelStyle:function(t,e){return{backgroundColor:this.cs[this.ps[e][t]]}},selectPalette:function(t){t!=this.ca?this.ca=t:this.colorEdit=!this.colorEdit},tapPixel:function(t,e){switch(this.tool){case 0:for(var n=e-2;n<e+2;n++){var r=Math.max(0,n);r=Math.min(r,15);for(var o=t-2;o<t+2;o++){var c=Math.max(0,o);c=Math.min(c,15),this.setPixel(c,r)}}break;case 1:for(var l=t-2;l<t+2;l++){var d=Math.max(0,l);d=Math.min(d,15),this.setPixel(d,e)}break;case 2:for(var h=e-2;h<e+2;h++){var v=Math.max(0,h);v=Math.min(v,15),this.setPixel(t,v)}break;case 3:this.setPixel(t,e)}this.cs.splice(this.ca,1,this.cs[this.ca])},setPixel:function(t,e){this.ps[e].splice(t,1,this.ca)}}}),o=(n(656),n(80)),c=n(92),l=n.n(c),d=n(199),h=n(883),v=n(423),f=n(421),m=n(869),_=n(160),k=n(417),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",[n("v-card-actions",[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-content-save")])],1),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn-toggle",{model:{value:t.tool,callback:function(e){t.tool=e},expression:"tool"}},[n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-square-medium")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-border-horizontal")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-border-vertical")])],1),t._v(" "),n("v-btn",{attrs:{icon:""}},[n("v-icon",{attrs:{large:""}},[t._v("mdi-pencil")])],1)],1)],1),t._v(" "),n("div",{staticClass:"pixel-container"},[n("table",t._l(t.ps,(function(e,r){return n("tr",{key:r},t._l(e,(function(col,e){return n("td",{key:e,staticClass:"pixel",style:t.pixelStyle(e,r),on:{pointerdown:function(n){return t.tapPixel(e,r)}}})})),0)})),0),t._v(" "),t.colorEdit?n("v-color-picker",{attrs:{elevation:"8"},model:{value:t.cs[t.ca],callback:function(e){t.$set(t.cs,t.ca,e)},expression:"cs[ca]"}}):t._e()],1),t._v(" "),n("div",{staticClass:"palette-container"},t._l(t.cs,(function(e,i){return n("div",{key:i,staticClass:"palette",class:{active:i==t.ca},style:t.paletteStyle(i),on:{pointerdown:function(e){return t.selectPalette(i)}}})})),0)],1)}),[],!1,null,"63885bcd",null);e.default=component.exports;l()(component,{VBtn:d.a,VBtnToggle:h.a,VCard:v.a,VCardActions:f.a,VColorPicker:m.a,VIcon:_.a,VSpacer:k.a})},770:function(t,e,n){"use strict";n.r(e);n(30);var r=n(2),o=n(45),c=n(284),l=r.a.extend({data:function(){return{name:""}},mounted:function(){this.name=this.accountStore.account.name},methods:{updateName:function(t){""!==t&&(this.name=t,this.accountStore.update({name:t}))}},computed:{accountStore:function(){return Object(o.e)(c.default,this.$store)}}}),d=n(80),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("AccountName",{attrs:{name:t.name},on:{"update-name":t.updateName}}),t._v(" "),n("AccountIconEditor")],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AccountName:n(683).default,AccountIconEditor:n(684).default})}}]);