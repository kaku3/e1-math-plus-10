(window.webpackJsonp=window.webpackJsonp||[]).push([[22,14],{413:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(155),r(419),r(187)),l=r(40),c=r(123),d=r(189),h=r(45),f=r(3),m=r(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(m.a)(l.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,h.a);e.a=y.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(f.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.b:o.c},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.m)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},414:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(188),r(417),r(190)),l=r(416),c=r(87),d=r(15);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},415:function(t,e,r){"use strict";var n=r(413);e.a=n.a},416:function(t,e,r){"use strict";r(36);var n=r(2),o=r(415);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},417:function(t,e,r){var content=r(418);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("e23b7040",content,!0,{sourceMap:!1})},418:function(t,e,r){var n=r(25)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},419:function(t,e,r){var content=r(420);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("cf87dc84",content,!0,{sourceMap:!1})},420:function(t,e,r){var n=r(25)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},422:function(t,e,r){var content=r(567);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("6c7c72fe",content,!0,{sourceMap:!1})},566:function(t,e,r){"use strict";r(422)},567:function(t,e,r){var n=r(25)(!1);n.push([t.i,".rankings>*[data-v-e97e0b08]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-e97e0b08]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-e97e0b08],.rankings.rank-1 .no[data-v-e97e0b08]{font-size:1.8rem}.rankings.rank-2 .name[data-v-e97e0b08],.rankings.rank-2 .no[data-v-e97e0b08]{font-size:1.3rem}.rankings.rank-3 .name[data-v-e97e0b08],.rankings.rank-3 .no[data-v-e97e0b08]{font-size:1rem}.rankings.top10[data-v-e97e0b08]{font-weight:700}.rankings.entry[data-v-e97e0b08]{background-color:#f0f4c3}",""]),t.exports=n},575:function(t,e,r){"use strict";r.r(e);r(41),r(22),r(51),r(39),r(8),r(49),r(56),r(42);var n=r(19),o=(r(58),r(36),r(63),r(30),r(277),r(32),r(2)),l=r(154),c=r(44),d=r(275);function h(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var m=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n,o,c,d,f,m,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=l.a.firestore(),q=null,t.daily?(new Date,n=(new Date).setHours(0,0,0,0),q=r.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",n).orderBy("score",t.orderBy).limit(100)):q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){c=t.rankings[0].score,d=1,f=1,m=h(t.rankings);try{for(m.s();!(v=m.n()).done;)(y=v.value).score!=c&&(c=y.score,d=f),y.no=d,f++}catch(t){m.e(t)}finally{m.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode||"minusEndress"===this.gameMode||"mul99Endress"===this.gameMode?"desc":"asc"}}}),v=(r(566),r(91)),y=r(122),_=r.n(y),j=r(193),k=r(414),x=r(411),w=r(728),C=r(156),O=r(729),S=r(406),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(" "),r("h3",[t._v("らんきんぐ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),r("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"e97e0b08",null);e.default=component.exports;_()(component,{VBtn:j.a,VCard:k.a,VCardText:x.b,VCardTitle:x.c,VCol:w.a,VIcon:C.a,VRow:O.a,VSpacer:S.a})},576:function(t,e,r){"use strict";r.r(e);var n={extends:r(597).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(91),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},591:function(t,e,r){var map={"./af":428,"./af.js":428,"./ar":429,"./ar-dz":430,"./ar-dz.js":430,"./ar-kw":431,"./ar-kw.js":431,"./ar-ly":432,"./ar-ly.js":432,"./ar-ma":433,"./ar-ma.js":433,"./ar-sa":434,"./ar-sa.js":434,"./ar-tn":435,"./ar-tn.js":435,"./ar.js":429,"./az":436,"./az.js":436,"./be":437,"./be.js":437,"./bg":438,"./bg.js":438,"./bm":439,"./bm.js":439,"./bn":440,"./bn-bd":441,"./bn-bd.js":441,"./bn.js":440,"./bo":442,"./bo.js":442,"./br":443,"./br.js":443,"./bs":444,"./bs.js":444,"./ca":445,"./ca.js":445,"./cs":446,"./cs.js":446,"./cv":447,"./cv.js":447,"./cy":448,"./cy.js":448,"./da":449,"./da.js":449,"./de":450,"./de-at":451,"./de-at.js":451,"./de-ch":452,"./de-ch.js":452,"./de.js":450,"./dv":453,"./dv.js":453,"./el":454,"./el.js":454,"./en-au":455,"./en-au.js":455,"./en-ca":456,"./en-ca.js":456,"./en-gb":457,"./en-gb.js":457,"./en-ie":458,"./en-ie.js":458,"./en-il":459,"./en-il.js":459,"./en-in":460,"./en-in.js":460,"./en-nz":461,"./en-nz.js":461,"./en-sg":462,"./en-sg.js":462,"./eo":463,"./eo.js":463,"./es":464,"./es-do":465,"./es-do.js":465,"./es-mx":466,"./es-mx.js":466,"./es-us":467,"./es-us.js":467,"./es.js":464,"./et":468,"./et.js":468,"./eu":469,"./eu.js":469,"./fa":470,"./fa.js":470,"./fi":471,"./fi.js":471,"./fil":472,"./fil.js":472,"./fo":473,"./fo.js":473,"./fr":474,"./fr-ca":475,"./fr-ca.js":475,"./fr-ch":476,"./fr-ch.js":476,"./fr.js":474,"./fy":477,"./fy.js":477,"./ga":478,"./ga.js":478,"./gd":479,"./gd.js":479,"./gl":480,"./gl.js":480,"./gom-deva":481,"./gom-deva.js":481,"./gom-latn":482,"./gom-latn.js":482,"./gu":483,"./gu.js":483,"./he":484,"./he.js":484,"./hi":485,"./hi.js":485,"./hr":486,"./hr.js":486,"./hu":487,"./hu.js":487,"./hy-am":488,"./hy-am.js":488,"./id":489,"./id.js":489,"./is":490,"./is.js":490,"./it":491,"./it-ch":492,"./it-ch.js":492,"./it.js":491,"./ja":493,"./ja.js":493,"./jv":494,"./jv.js":494,"./ka":495,"./ka.js":495,"./kk":496,"./kk.js":496,"./km":497,"./km.js":497,"./kn":498,"./kn.js":498,"./ko":499,"./ko.js":499,"./ku":500,"./ku.js":500,"./ky":501,"./ky.js":501,"./lb":502,"./lb.js":502,"./lo":503,"./lo.js":503,"./lt":504,"./lt.js":504,"./lv":505,"./lv.js":505,"./me":506,"./me.js":506,"./mi":507,"./mi.js":507,"./mk":508,"./mk.js":508,"./ml":509,"./ml.js":509,"./mn":510,"./mn.js":510,"./mr":511,"./mr.js":511,"./ms":512,"./ms-my":513,"./ms-my.js":513,"./ms.js":512,"./mt":514,"./mt.js":514,"./my":515,"./my.js":515,"./nb":516,"./nb.js":516,"./ne":517,"./ne.js":517,"./nl":518,"./nl-be":519,"./nl-be.js":519,"./nl.js":518,"./nn":520,"./nn.js":520,"./oc-lnc":521,"./oc-lnc.js":521,"./pa-in":522,"./pa-in.js":522,"./pl":523,"./pl.js":523,"./pt":524,"./pt-br":525,"./pt-br.js":525,"./pt.js":524,"./ro":526,"./ro.js":526,"./ru":527,"./ru.js":527,"./sd":528,"./sd.js":528,"./se":529,"./se.js":529,"./si":530,"./si.js":530,"./sk":531,"./sk.js":531,"./sl":532,"./sl.js":532,"./sq":533,"./sq.js":533,"./sr":534,"./sr-cyrl":535,"./sr-cyrl.js":535,"./sr.js":534,"./ss":536,"./ss.js":536,"./sv":537,"./sv.js":537,"./sw":538,"./sw.js":538,"./ta":539,"./ta.js":539,"./te":540,"./te.js":540,"./tet":541,"./tet.js":541,"./tg":542,"./tg.js":542,"./th":543,"./th.js":543,"./tk":544,"./tk.js":544,"./tl-ph":545,"./tl-ph.js":545,"./tlh":546,"./tlh.js":546,"./tr":547,"./tr.js":547,"./tzl":548,"./tzl.js":548,"./tzm":549,"./tzm-latn":550,"./tzm-latn.js":550,"./tzm.js":549,"./ug-cn":551,"./ug-cn.js":551,"./uk":552,"./uk.js":552,"./ur":553,"./ur.js":553,"./uz":554,"./uz-latn":555,"./uz-latn.js":555,"./uz.js":554,"./vi":556,"./vi.js":556,"./x-pseudo":557,"./x-pseudo.js":557,"./yo":558,"./yo.js":558,"./zh-cn":559,"./zh-cn.js":559,"./zh-hk":560,"./zh-hk.js":560,"./zh-mo":561,"./zh-mo.js":561,"./zh-tw":562,"./zh-tw.js":562};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=591},664:function(t,e,r){"use strict";r.r(e);r(36),r(64),r(38),r(9),r(63),r(32),r(41),r(22),r(30),r(51),r(39),r(8),r(49),r(56),r(42);var n=r(2),o=r(44),l=r(276),c=r(576);function d(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return h(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return h(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var f=n.a.extend({components:{HistoryChart:c.default},props:{gameMode:{type:String,default:"modeSprint"},questionCount:{type:Number,default:10}},data:function(){return{tabNo:-1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){switch(this.tabNo=2,this.gameMode){case"modeSprint":this.tabNo=10===this.questionCount?0:1}var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);this.historyDates=t},methods:{startGame:function(t){this.$router.replace({path:"/game-plus-10/".concat(t)})},termFilteredScoreEntities:function(t){if(0==this.historyDates.length)return[];var e=this.historyDates[0].time,r=this.historyDates[this.historyDates.length-1].time1;return this.scores.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=e})).filter((function(t){return t.createdAt<r}))},sprintHistory:function(t){var e,r=[],n=[],o=d(this.historyDates);try{var l=function(){var o=e.value,l=t.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(l.length),l.length>0?n.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):n.push(0)};for(o.s();!(e=o.n()).done;)l()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"じかん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}},sprint10History:function(){return this.sprintHistory(this.sprint10Scores)},sprint30History:function(){return console.log(this.sprint30Scores),this.sprintHistory(this.sprint30Scores)},endressHistory:function(){var t,e=this.endressScores,r=[],n=[],o=d(this.historyDates);try{var l=function(){var o=t.value,l=e.filter((function(t){return o.time<=t.createdAt&&t.createdAt<o.time1}));r.push(l.length),l.length>0?n.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):n.push(0)};for(o.s();!(t=o.n()).done;)l()}catch(t){o.e(t)}finally{o.f()}return{labels:this.chartDates,datasets:[{label:"とくてん",data:n,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},computed:{scoreStore:function(){return Object(o.e)(l.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return this.termFilteredScoreEntities("modeSprint-10")},sprint30Scores:function(){return this.termFilteredScoreEntities("modeSprint-30")},endressScores:function(){return this.termFilteredScoreEntities("modeEndress")},chartOptions:function(){return{responsive:!0,maintainAspectRatio:!1,scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left"},{id:"y-axis-2",type:"linear",position:"right"}]}}}}}),m=r(91),v=r(122),y=r.n(v),_=r(193),j=r(414),k=r(411),x=r(728),w=r(156),C=r(729),O=r(406),S=r(730),z=r(746),B=r(735),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",{model:{value:t.tabNo,callback:function(e){t.tabNo=e},expression:"tabNo"}},[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint-10")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeSprint-30")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("modeEndress")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"modeEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;y()(component,{Ranking:r(575).default}),y()(component,{VBtn:_.a,VCard:j.a,VCardText:k.b,VCol:x.a,VIcon:w.a,VRow:C.a,VSpacer:O.a,VTab:S.a,VTabItem:z.a,VTabs:B.a})}}]);