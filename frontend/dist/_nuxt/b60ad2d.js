(window.webpackJsonp=window.webpackJsonp||[]).push([[28,23,27,29,30,32],{423:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(195),r(428),r(196)),l=r(427),c=r(89),d=r(15);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return f(f({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=f({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},424:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(159),r(430),r(193)),l=r(39),c=r(124),d=r(194),h=r(45),f=r(3),v=r(15);function m(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(v.a)(l.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,h.a);e.a=y.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(f.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(f.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(f.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(f.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):m(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.b:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(f.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(f.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(f.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},426:function(t,e,r){"use strict";var n=r(424);e.a=n.a},427:function(t,e,r){"use strict";r(36);var n=r(2),o=r(426);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},428:function(t,e,r){var content=r(429);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},429:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},430:function(t,e,r){var content=r(431);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("cf87dc84",content,!0,{sourceMap:!1})},431:function(t,e,r){var n=r(22)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},449:function(t,e,r){var content=r(596);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("790e65ca",content,!0,{sourceMap:!1})},595:function(t,e,r){"use strict";r(449)},596:function(t,e,r){var n=r(22)(!1);n.push([t.i,".rankings>*[data-v-31c13230]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-31c13230]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-31c13230],.rankings.rank-1 .no[data-v-31c13230]{font-size:1.8rem}.rankings.rank-2 .name[data-v-31c13230],.rankings.rank-2 .no[data-v-31c13230]{font-size:1.3rem}.rankings.rank-3 .name[data-v-31c13230],.rankings.rank-3 .no[data-v-31c13230]{font-size:1rem}.rankings.top10[data-v-31c13230]{font-weight:700}.rankings.entry[data-v-31c13230]{background-color:#f0f4c3}.rankings:nth-child(n+21)>*[data-v-31c13230]{padding:.25rem .5rem;font-size:.6rem}.rankings:nth-child(n+51)>*[data-v-31c13230]{padding:.1rem .5rem;font-size:.5rem}",""]),t.exports=n},603:function(t,e,r){"use strict";r.r(e);r(42),r(24),r(52),r(41),r(8),r(50),r(57),r(43);var n=r(18),o=(r(59),r(36),r(64),r(30),r(285),r(32),r(2)),l=r(158),c=r(37),d=r(284);function h(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n,o,c,d,f,v,m,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=l.a.firestore(),q=null,t.daily?(new Date,n=(new Date).setHours(0,0,0,0),q=r.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",n).orderBy("score",t.orderBy).limit(100)):q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){c=t.rankings[0].score,d=1,f=1,v=h(t.rankings);try{for(v.s();!(m=v.n()).done;)(y=m.value).score!=c&&(c=y.score,d=f),y.no=d,f++}catch(t){v.e(t)}finally{v.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return"modeEndress"!==this.gameMode&&"modeSingle"!==this.gameMode&&"minusEndress"!==this.gameMode&&"mul99Endress"!==this.gameMode?t.toFixed(2):t}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},displayGameMode:function(){return"modeEndress"==this.gameMode||"modeSingle"==this.gameMode||"minusEndress"==this.gameMode||"mul99Endress"==this.gameMode?this.gameMode:"".concat(this.gameMode,"-").concat(this.questionCount)},orderBy:function(){return"modeEndress"===this.gameMode||"modeSingle"===this.gameMode||"minusEndress"===this.gameMode||"mul99Endress"===this.gameMode?"desc":"asc"}}}),m=(r(595),r(80)),y=r(92),_=r.n(y),j=r(199),k=r(423),x=r(421),w=r(876),O=r(160),C=r(877),S=r(417),component=Object(m.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(" "),r("h3",[t._v("らんきんぐ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),r("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"31c13230",null);e.default=component.exports;_()(component,{VBtn:j.a,VCard:k.a,VCardText:x.b,VCardTitle:x.c,VCol:w.a,VIcon:O.a,VRow:C.a,VSpacer:S.a})},604:function(t,e,r){"use strict";r.r(e);var n={extends:r(643).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(80),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},606:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(42),r(24),r(30),r(52),r(41),r(8),r(50),r(57),r(43);var n=r(25),o=r(34);r(9),r(64);function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,null,[{key:"getHistoryDates",value:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);return t}},{key:"sprintHistory",value:function(e,r,n){var o=t.getSprintHistory(e,n),l=o._counts,c=o._scores;return t.chartObject(r,c,l)}},{key:"termFilteredScoreEntities",value:function(t,e,r){if(0==r.length)return[];var n=r[0].time,o=r[r.length-1].time1;return e.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=n})).filter((function(t){return t.createdAt<o}))}},{key:"getSprintHistory",value:function(t,e){var r,n=[],o=[],c=l(e);try{var d=function(){var e=r.value,l=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));n.push(l.length),l.length>0?o.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):o.push(0)};for(c.s();!(r=c.n()).done;)d()}catch(t){c.e(t)}finally{c.f()}return{_counts:n,_scores:o}}},{key:"getEndressHistory",value:function(t,e){var r,n=[],o=[],c=l(e);try{var d=function(){var e=r.value,l=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));n.push(l.length),l.length>0?o.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):o.push(0)};for(c.s();!(r=c.n()).done;)d()}catch(t){c.e(t)}finally{c.f()}return{_counts:n,_scores:o}}},{key:"chartObject",value:function(t,e,r){return{labels:t,datasets:[{label:"じかん",data:e,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},{key:"chartOptions",value:function(){var t="#888",e="#ddd";return{responsive:!0,maintainAspectRatio:!1,legend:{fontColor:t},scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left",ticks:{fontColor:t},gridLines:{display:!1,color:e}},{id:"y-axis-2",type:"linear",position:"right",ticks:{fontColor:t},gridLines:{display:!1,color:e}}],xAxes:[{ticks:{fontColor:t},gridLines:{color:"#ddd"}}]}}}}]),t}()},636:function(t,e,r){var map={"./af":458,"./af.js":458,"./ar":459,"./ar-dz":460,"./ar-dz.js":460,"./ar-kw":461,"./ar-kw.js":461,"./ar-ly":462,"./ar-ly.js":462,"./ar-ma":463,"./ar-ma.js":463,"./ar-sa":464,"./ar-sa.js":464,"./ar-tn":465,"./ar-tn.js":465,"./ar.js":459,"./az":466,"./az.js":466,"./be":467,"./be.js":467,"./bg":468,"./bg.js":468,"./bm":469,"./bm.js":469,"./bn":470,"./bn-bd":471,"./bn-bd.js":471,"./bn.js":470,"./bo":472,"./bo.js":472,"./br":473,"./br.js":473,"./bs":474,"./bs.js":474,"./ca":475,"./ca.js":475,"./cs":476,"./cs.js":476,"./cv":477,"./cv.js":477,"./cy":478,"./cy.js":478,"./da":479,"./da.js":479,"./de":480,"./de-at":481,"./de-at.js":481,"./de-ch":482,"./de-ch.js":482,"./de.js":480,"./dv":483,"./dv.js":483,"./el":484,"./el.js":484,"./en-au":485,"./en-au.js":485,"./en-ca":486,"./en-ca.js":486,"./en-gb":487,"./en-gb.js":487,"./en-ie":488,"./en-ie.js":488,"./en-il":489,"./en-il.js":489,"./en-in":490,"./en-in.js":490,"./en-nz":491,"./en-nz.js":491,"./en-sg":492,"./en-sg.js":492,"./eo":493,"./eo.js":493,"./es":494,"./es-do":495,"./es-do.js":495,"./es-mx":496,"./es-mx.js":496,"./es-us":497,"./es-us.js":497,"./es.js":494,"./et":498,"./et.js":498,"./eu":499,"./eu.js":499,"./fa":500,"./fa.js":500,"./fi":501,"./fi.js":501,"./fil":502,"./fil.js":502,"./fo":503,"./fo.js":503,"./fr":504,"./fr-ca":505,"./fr-ca.js":505,"./fr-ch":506,"./fr-ch.js":506,"./fr.js":504,"./fy":507,"./fy.js":507,"./ga":508,"./ga.js":508,"./gd":509,"./gd.js":509,"./gl":510,"./gl.js":510,"./gom-deva":511,"./gom-deva.js":511,"./gom-latn":512,"./gom-latn.js":512,"./gu":513,"./gu.js":513,"./he":514,"./he.js":514,"./hi":515,"./hi.js":515,"./hr":516,"./hr.js":516,"./hu":517,"./hu.js":517,"./hy-am":518,"./hy-am.js":518,"./id":519,"./id.js":519,"./is":520,"./is.js":520,"./it":521,"./it-ch":522,"./it-ch.js":522,"./it.js":521,"./ja":523,"./ja.js":523,"./jv":524,"./jv.js":524,"./ka":525,"./ka.js":525,"./kk":526,"./kk.js":526,"./km":527,"./km.js":527,"./kn":528,"./kn.js":528,"./ko":529,"./ko.js":529,"./ku":530,"./ku.js":530,"./ky":531,"./ky.js":531,"./lb":532,"./lb.js":532,"./lo":533,"./lo.js":533,"./lt":534,"./lt.js":534,"./lv":535,"./lv.js":535,"./me":536,"./me.js":536,"./mi":537,"./mi.js":537,"./mk":538,"./mk.js":538,"./ml":539,"./ml.js":539,"./mn":540,"./mn.js":540,"./mr":541,"./mr.js":541,"./ms":542,"./ms-my":543,"./ms-my.js":543,"./ms.js":542,"./mt":544,"./mt.js":544,"./my":545,"./my.js":545,"./nb":546,"./nb.js":546,"./ne":547,"./ne.js":547,"./nl":548,"./nl-be":549,"./nl-be.js":549,"./nl.js":548,"./nn":550,"./nn.js":550,"./oc-lnc":551,"./oc-lnc.js":551,"./pa-in":552,"./pa-in.js":552,"./pl":553,"./pl.js":553,"./pt":554,"./pt-br":555,"./pt-br.js":555,"./pt.js":554,"./ro":556,"./ro.js":556,"./ru":557,"./ru.js":557,"./sd":558,"./sd.js":558,"./se":559,"./se.js":559,"./si":560,"./si.js":560,"./sk":561,"./sk.js":561,"./sl":562,"./sl.js":562,"./sq":563,"./sq.js":563,"./sr":564,"./sr-cyrl":565,"./sr-cyrl.js":565,"./sr.js":564,"./ss":566,"./ss.js":566,"./sv":567,"./sv.js":567,"./sw":568,"./sw.js":568,"./ta":569,"./ta.js":569,"./te":570,"./te.js":570,"./tet":571,"./tet.js":571,"./tg":572,"./tg.js":572,"./th":573,"./th.js":573,"./tk":574,"./tk.js":574,"./tl-ph":575,"./tl-ph.js":575,"./tlh":576,"./tlh.js":576,"./tr":577,"./tr.js":577,"./tzl":578,"./tzl.js":578,"./tzm":579,"./tzm-latn":580,"./tzm-latn.js":580,"./tzm.js":579,"./ug-cn":581,"./ug-cn.js":581,"./uk":582,"./uk.js":582,"./ur":583,"./ur.js":583,"./uz":584,"./uz-latn":585,"./uz-latn.js":585,"./uz.js":584,"./vi":586,"./vi.js":586,"./x-pseudo":587,"./x-pseudo.js":587,"./yo":588,"./yo.js":588,"./zh-cn":589,"./zh-cn.js":589,"./zh-hk":590,"./zh-hk.js":590,"./zh-mo":591,"./zh-mo.js":591,"./zh-tw":592,"./zh-tw.js":592};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=636},778:function(t,e,r){"use strict";r.r(e);r(36),r(65),r(40),r(64),r(32);var n=r(2),o=r(606),l=r(37),c=r(286),d=r(604),h=n.a.extend({components:{HistoryChart:d.default},props:{gameMode:{type:String,default:"minusSprint"},questionCount:{type:Number,default:10}},data:function(){return{tabNo:-1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){switch(this.tabNo=2,this.gameMode){case"minusSprint":this.tabNo=10===this.questionCount?0:1}this.historyDates=o.a.getHistoryDates()},methods:{startGame:function(t){this.$router.replace({path:"/game-minus-20/".concat(t)})},sprint10History:function(){return o.a.sprintHistory(this.sprint10Scores,this.chartDates,this.historyDates)},sprint30History:function(){return console.log(this.sprint30Scores),o.a.sprintHistory(this.sprint30Scores,this.chartDates,this.historyDates)},endressHistory:function(){var t=o.a.getEndressHistory(this.endressScores,this.historyDates),e=t._counts,r=t._scores;return o.a.chartObject(this.chartDates,r,e)}},computed:{scoreStore:function(){return Object(l.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return o.a.termFilteredScoreEntities("minusSprint-10",this.scores,this.historyDates)},sprint30Scores:function(){return o.a.termFilteredScoreEntities("minusSprint-30",this.scores,this.historyDates)},endressScores:function(){return o.a.termFilteredScoreEntities("minusEndress",this.scores,this.historyDates)},chartOptions:function(){return o.a.chartOptions()}}}),f=r(80),v=r(92),m=r.n(v),y=r(199),_=r(423),j=r(421),k=r(876),x=r(160),w=r(877),O=r(417),C=r(713),S=r(735),z=r(731),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",{model:{value:t.tabNo,callback:function(e){t.tabNo=e},expression:"tabNo"}},[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("minusSprint-10")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"minusSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("minusSprint-30")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"minusSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("minusEndress")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"minusEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{Ranking:r(603).default}),m()(component,{VBtn:y.a,VCard:_.a,VCardText:j.b,VCol:k.a,VIcon:x.a,VRow:w.a,VSpacer:O.a,VTab:C.a,VTabItem:S.a,VTabs:z.a})}}]);