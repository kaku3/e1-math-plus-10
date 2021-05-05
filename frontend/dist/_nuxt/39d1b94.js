(window.webpackJsonp=window.webpackJsonp||[]).push([[39,25,48],{427:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(159),r(433),r(194)),l=r(40),c=r(124),d=r(195),h=r(45),m=r(3),f=r(15);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var y=Object(f.a)(l.a,Object(c.b)(["absolute","fixed","top","bottom"]),d.a,h.a);e.a=y.extend({name:"v-progress-linear",props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data:function(){return{internalLazyValue:this.value||0}},computed:{__cachedBackground:function(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar:function(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType:function(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer:function(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate:function(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:Object(m.f)(this.normalizedValue,"%")}}))},__cachedIndeterminate:function(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream:function(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:Object(m.f)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle:function(){var t;return t={opacity:null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity)},Object(n.a)(t,this.isReversed?"right":"left",Object(m.f)(this.normalizedValue,"%")),Object(n.a)(t,"width",Object(m.f)(this.normalizedBuffer-this.normalizedValue,"%")),t},classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped},this.themeClasses)},computedTransition:function(){return this.indeterminate?o.b:o.d},isReversed:function(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer:function(){return this.normalize(this.bufferValue)},normalizedValue:function(){return this.normalize(this.internalLazyValue)},reactive:function(){return Boolean(this.$listeners.change)},styles:function(){var t={};return this.active||(t.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(t.width=Object(m.f)(this.normalizedBuffer,"%")),t}},methods:{genContent:function(){var slot=Object(m.n)(this,"default",{value:this.internalLazyValue});return slot?this.$createElement("div",{staticClass:"v-progress-linear__content"},slot):null},genListeners:function(){var t=this.$listeners;return this.reactive&&(t.click=this.onClick),t},genProgressBar:function(t){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:Object(n.a)({},t,!0)}))},onClick:function(t){if(this.reactive){var e=this.$el.getBoundingClientRect().width;this.internalValue=t.offsetX/e*100}},normalize:function(t){return t<0?0:t>100?100:parseFloat(t)}},render:function(t){return t("div",{staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,style:{bottom:this.bottom?0:void 0,height:this.active?Object(m.f)(this.height):0,top:this.top?0:void 0},on:this.genListeners()},[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}})},428:function(t,e,r){"use strict";r(12),r(8),r(9),r(14),r(11),r(17);var n=r(4),o=(r(36),r(196),r(431),r(197)),l=r(430),c=r(89),d=r(15);function h(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function m(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?h(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):h(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l.a,c.a,o.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes:function(){return m(m({"v-card":!0},c.a.options.computed.classes.call(this)),{},{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised},o.a.options.computed.classes.call(this))},styles:function(){var style=m({},o.a.options.computed.styles.call(this));return this.img&&(style.background='url("'.concat(this.img,'") center center / cover no-repeat')),style}},methods:{genProgress:function(){var t=l.a.options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),r=e.tag,data=e.data;return data.style=this.styles,this.isClickable&&(data.attrs=data.attrs||{},data.attrs.tabindex=0),t(r,this.setBackgroundColor(this.color,data),[this.genProgress(),this.$slots.default])}})},429:function(t,e,r){"use strict";var n=r(427);e.a=n.a},430:function(t,e,r){"use strict";r(36);var n=r(2),o=r(429);e.a=n.a.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress:function(){return!1===this.loading?null:this.$slots.progress||this.$createElement(o.a,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},431:function(t,e,r){var content=r(432);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("e23b7040",content,!0,{sourceMap:!1})},432:function(t,e,r){var n=r(22)(!1);n.push([t.i,'.theme--light.v-card{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-card .v-card__subtitle,.theme--light.v-card>.v-card__text{color:rgba(0,0,0,.6)}.theme--dark.v-card{background-color:#1e1e1e;color:#fff}.theme--dark.v-card .v-card__subtitle,.theme--dark.v-card>.v-card__text{color:hsla(0,0%,100%,.7)}.v-sheet.v-card{border-radius:4px}.v-sheet.v-card:not(.v-sheet--outlined){box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-sheet.v-card.v-sheet--shaped{border-radius:24px 4px}.v-card{border-width:thin;display:block;max-width:100%;outline:none;text-decoration:none;transition-property:box-shadow,opacity;word-wrap:break-word;position:relative;white-space:normal}.v-card>.v-card__progress+:not(.v-btn):not(.v-chip),.v-card>:first-child:not(.v-btn):not(.v-chip){border-top-left-radius:inherit;border-top-right-radius:inherit}.v-card>:last-child:not(.v-btn):not(.v-chip){border-bottom-left-radius:inherit;border-bottom-right-radius:inherit}.v-card__progress{top:0;left:0;right:0;overflow:hidden}.v-card__subtitle+.v-card__text{padding-top:0}.v-card__subtitle,.v-card__text{font-size:.875rem;font-weight:400;line-height:1.375rem;letter-spacing:.0071428571em}.v-card__subtitle,.v-card__text,.v-card__title{padding:16px}.v-card__title{align-items:center;display:flex;flex-wrap:wrap;font-size:1.25rem;font-weight:500;letter-spacing:.0125em;line-height:2rem;word-break:break-all}.v-card__title+.v-card__subtitle,.v-card__title+.v-card__text{padding-top:0}.v-card__title+.v-card__subtitle{margin-top:-16px}.v-card__text{width:100%}.v-card__actions{align-items:center;display:flex;padding:8px}.v-card__actions>.v-btn.v-btn{padding:0 8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn+.v-btn{margin-left:8px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--left{margin-left:4px}.v-application--is-ltr .v-card__actions>.v-btn.v-btn .v-icon--right{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn+.v-btn{margin-right:8px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--left{margin-right:4px}.v-application--is-rtl .v-card__actions>.v-btn.v-btn .v-icon--right{margin-left:4px}.v-card--flat{box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)!important}.v-sheet.v-card--hover{cursor:pointer;transition:box-shadow .4s cubic-bezier(.25,.8,.25,1)}.v-sheet.v-card--hover:focus,.v-sheet.v-card--hover:hover{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}.v-card--link,.v-card--link .v-chip{cursor:pointer}.v-card--link:focus:before{opacity:.08}.v-card--link:before{background:currentColor;bottom:0;content:"";left:0;opacity:0;pointer-events:none;position:absolute;right:0;top:0;transition:opacity .2s}.v-card--disabled{pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.v-card--disabled>:not(.v-card__progress){opacity:.6;transition:inherit}.v-card--loading{overflow:hidden}.v-card--raised{box-shadow:0 5px 5px -3px rgba(0,0,0,.2),0 8px 10px 1px rgba(0,0,0,.14),0 3px 14px 2px rgba(0,0,0,.12)}',""]),t.exports=n},433:function(t,e,r){var content=r(434);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("cf87dc84",content,!0,{sourceMap:!1})},434:function(t,e,r){var n=r(22)(!1);n.push([t.i,".theme--light.v-progress-linear{color:rgba(0,0,0,.87)}.theme--dark.v-progress-linear{color:#fff}.v-progress-linear{background:transparent;overflow:hidden;position:relative;transition:.2s cubic-bezier(.4,0,.6,1);width:100%}.v-progress-linear__buffer{height:inherit;left:0;position:absolute;top:0;transition:inherit;width:100%}.v-progress-linear--reverse .v-progress-linear__buffer{left:auto;right:0}.v-progress-linear__background{bottom:0;left:0;position:absolute;top:0;transition:inherit}.v-progress-linear--reverse .v-progress-linear__background{left:auto;right:0}.v-progress-linear__content{align-items:center;display:flex;height:100%;left:0;justify-content:center;position:absolute;top:0;width:100%}.v-progress-linear--reverse .v-progress-linear__content{left:auto;right:0}.v-progress-linear__determinate{height:inherit;left:0;position:absolute;transition:inherit}.v-progress-linear--reverse .v-progress-linear__determinate{left:auto;right:0}.v-progress-linear .v-progress-linear__indeterminate .long,.v-progress-linear .v-progress-linear__indeterminate .short{background-color:inherit;bottom:0;height:inherit;left:0;position:absolute;right:auto;top:0;width:auto;will-change:left,right}.v-progress-linear .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-ltr;animation-name:indeterminate-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-ltr;animation-name:indeterminate-short-ltr;-webkit-animation-duration:2.2s;animation-duration:2.2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--reverse .v-progress-linear__indeterminate .long,.v-progress-linear--reverse .v-progress-linear__indeterminate .short{left:auto;right:0}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:indeterminate-rtl;animation-name:indeterminate-rtl}.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:indeterminate-short-rtl;animation-name:indeterminate-short-rtl}.v-progress-linear__stream{-webkit-animation:stream-ltr .25s linear infinite;animation:stream-ltr .25s linear infinite;border-color:currentColor;border-top:4px dotted;bottom:0;left:auto;right:-8px;opacity:.3;pointer-events:none;position:absolute;top:calc(50% - 2px);transition:inherit}.v-progress-linear--reverse .v-progress-linear__stream{-webkit-animation:stream-rtl .25s linear infinite;animation:stream-rtl .25s linear infinite;left:-8px;right:auto}.v-progress-linear__wrapper{overflow:hidden;position:relative;transition:inherit}.v-progress-linear--absolute,.v-progress-linear--fixed{left:0;z-index:1}.v-progress-linear--absolute{position:absolute}.v-progress-linear--fixed{position:fixed}.v-progress-linear--reactive .v-progress-linear__content{pointer-events:none}.v-progress-linear--rounded{border-radius:4px}.v-progress-linear--striped .v-progress-linear__determinate{background-image:linear-gradient(135deg,hsla(0,0%,100%,.25) 25%,transparent 0,transparent 50%,hsla(0,0%,100%,.25) 0,hsla(0,0%,100%,.25) 75%,transparent 0,transparent);background-size:40px 40px;background-repeat:repeat}.v-progress-linear--query .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-ltr;animation-name:query-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-ltr;animation-name:query-short-ltr;-webkit-animation-duration:2s;animation-duration:2s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .long{-webkit-animation-name:query-rtl;animation-name:query-rtl}.v-progress-linear--query.v-progress-linear--reverse .v-progress-linear__indeterminate--active .short{-webkit-animation-name:query-short-rtl;animation-name:query-short-rtl}@-webkit-keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@keyframes indeterminate-ltr{0%{left:-90%;right:100%}60%{left:-90%;right:100%}to{left:100%;right:-35%}}@-webkit-keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@keyframes indeterminate-rtl{0%{left:100%;right:-90%}60%{left:100%;right:-90%}to{left:-35%;right:100%}}@-webkit-keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@keyframes indeterminate-short-ltr{0%{left:-200%;right:100%}60%{left:107%;right:-8%}to{left:107%;right:-8%}}@-webkit-keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@keyframes indeterminate-short-rtl{0%{left:100%;right:-200%}60%{left:-8%;right:107%}to{left:-8%;right:107%}}@-webkit-keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@keyframes query-ltr{0%{right:-90%;left:100%}60%{right:-90%;left:100%}to{right:100%;left:-35%}}@-webkit-keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@keyframes query-rtl{0%{right:100%;left:-90%}60%{right:100%;left:-90%}to{right:-35%;left:100%}}@-webkit-keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@keyframes query-short-ltr{0%{right:-200%;left:100%}60%{right:107%;left:-8%}to{right:107%;left:-8%}}@-webkit-keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@keyframes query-short-rtl{0%{right:100%;left:-200%}60%{right:-8%;left:107%}to{right:-8%;left:107%}}@-webkit-keyframes stream-ltr{to{transform:translateX(-8px)}}@keyframes stream-ltr{to{transform:translateX(-8px)}}@-webkit-keyframes stream-rtl{to{transform:translateX(8px)}}@keyframes stream-rtl{to{transform:translateX(8px)}}",""]),t.exports=n},436:function(t,e,r){"use strict";r.d(e,"c",(function(){return n})),r.d(e,"e",(function(){return o})),r.d(e,"b",(function(){return l})),r.d(e,"f",(function(){return c})),r.d(e,"g",(function(){return d})),r.d(e,"a",(function(){return h})),r.d(e,"d",(function(){return m}));r(438),r(36),r(288),r(32);function n(t){return Number.isInteger(t)?"".concat(t):t.toFixed(2)}function o(t){return Number.isInteger(t)?t>0?"+".concat(t):"".concat(t):t>0?"+".concat(t.toFixed(2)):"".concat(t.toFixed(2))}function l(t,e){return"modeEndress"!==t&&"modeSingle"!==t&&"minusEndress"!==t&&"mul99Endress"!==t&&"mul1xEndress"!==t&&"mul9xEndress"!==t?e.toFixed(2):e}function c(t,e){return"modeEndress"==t||"modeSingle"==t||"minusEndress"==t||"mul99Endress"==t||"mul1xEndress"==t?t:"".concat(t,"-").concat(e)}function d(t){return"modeEndress"===t||"modeSingle"===t||"minusEndress"===t||"mul99Endress"===t||"mul1xEndress"==t||"mul9xEndress"==t?"desc":"asc"}function h(t){switch(t){case"modeSprint-10":case"minusSprint-10":case"mul99Sprint-10":case"mul1xSprint-10":case"mul9xSprint-10":return"10問モード";case"modeSprint-30":case"minusSprint-30":case"mul99Sprint-30":case"mul1xSprint-30":case"mul9xSprint-30":return"30問モード";case"modeEndress":case"minusEndress":case"mul99Endress":case"mul1xEndress":case"mul9xEndress":return"たいきゅうモード";case"modeSingle":return"ヒトケタス"}}function m(t){switch(t){case"modeSprint-10":return"たして１０ 10問モード";case"modeSprint-30":return"たして１０ 30問モード";case"modeEndress":return"たして１０ たいきゅうモード";case"modeSingle":return"ヒトケタス";case"minusSprint-10":return"ひきざん２０ 10問モード";case"minusSprint-30":return"ひきざん２０ 30問モード";case"minusEndress":return"ひきざん２０ たいきゅうモード";case"mul99Sprint-10":return"かけざん９９ 10問モード";case"mul99Sprint-30":return"かけざん９９ 30問モード";case"mul99Endress":return"かけざん９９ たいきゅうモード";case"mul1xSprint-10":return"かけざん１ｘ 10問モード";case"mul1xSprint-30":return"かけざん１ｘ 30問モード";case"mul1xEndress":return"かけざん１ｘ たいきゅうモード";case"mul9xSprint-10":return"かけざん９ｘ 10問モード";case"mul9xSprint-30":return"かけざん９ｘ 30問モード";case"mul9xEndress":return"かけざん９ｘ たいきゅうモード"}}},443:function(t,e,r){var content=r(620);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(23).default)("dcbd2ea6",content,!0,{sourceMap:!1})},619:function(t,e,r){"use strict";r(443)},620:function(t,e,r){var n=r(22)(!1);n.push([t.i,".rankings>*[data-v-6b8e6e58]{padding:.5rem;font-size:.8rem}.rankings+.rankings[data-v-6b8e6e58]{margin-top:.25rem;border-top:1px solid #e0e0e0}.rankings.rank-1 .name[data-v-6b8e6e58],.rankings.rank-1 .no[data-v-6b8e6e58]{font-size:1.8rem}.rankings.rank-2 .name[data-v-6b8e6e58],.rankings.rank-2 .no[data-v-6b8e6e58]{font-size:1.3rem}.rankings.rank-3 .name[data-v-6b8e6e58],.rankings.rank-3 .no[data-v-6b8e6e58]{font-size:1rem}.rankings.top10[data-v-6b8e6e58]{font-weight:700}.rankings.entry[data-v-6b8e6e58]{background-color:#f0f4c3}.rankings:nth-child(n+21)>*[data-v-6b8e6e58]{padding:.25rem .5rem;font-size:.6rem}.rankings:nth-child(n+51)>*[data-v-6b8e6e58]{padding:.1rem .5rem;font-size:.5rem}",""]),t.exports=n},625:function(t,e,r){"use strict";r.r(e);r(43),r(24),r(52),r(41),r(8),r(50),r(57),r(42);var n=r(18),o=(r(59),r(36),r(64),r(30),r(2)),l=r(158),c=r(37),d=r(287),h=r(436);function m(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return f(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return f(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,c=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){c=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(c)throw o}}}}function f(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var v=o.a.extend({props:{gameMode:{type:String,default:"modeEndress"},questionCount:{type:Number,default:0}},data:function(){return{daily:!0,rankings:[]}},mounted:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.getRankings();case 2:case"end":return e.stop()}}),e)})))()},methods:{getRankings:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,q,n,o,c,d,h,f,v,y;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,r=l.a.firestore(),q=null,t.daily?(new Date,n=(new Date).setHours(0,0,0,0),q=r.collection("scores").where("mode","==",t.displayGameMode).where("createdAt","==",n).orderBy("score",t.orderBy).limit(100)):q=r.collection("scores").where("mode","==",t.displayGameMode).orderBy("score",t.orderBy).limit(100),e.next=6,q.get();case 6:if(o=e.sent,t.rankings=o.docs.map((function(t){var e=t.data();return e.no=0,e})),t.rankings.length>0){c=t.rankings[0].score,d=1,h=1,f=m(t.rankings);try{for(f.s();!(v=f.n()).done;)(y=v.value).score!=c&&(c=y.score,d=h),y.no=d,h++}catch(t){f.e(t)}finally{f.f()}}e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})))()},toggle:function(){this.daily=!this.daily,this.getRankings()},isMe:function(t){return t.name==this.accountStore.account.name},displayScore:function(t){return Object(h.b)(this.gameMode,t)}},computed:{accountStore:function(){return Object(c.e)(d.default,this.$store)},displayGameMode:function(){return Object(h.f)(this.gameMode,this.questionCount)},orderBy:function(){return Object(h.g)(this.gameMode)}}}),y=(r(619),r(80)),_=r(92),j=r.n(_),k=r(200),x=r(428),w=r(424),S=r(1047),O=r(160),C=r(1048),z=r(421),component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[r("v-icon",[t._v("mdi-crown")]),t._v(" "),r("h3",[t._v("らんきんぐ")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:t.daily},on:{click:function(e){return t.toggle()}}},[t._v("きょう")]),t._v(" "),r("v-btn",{attrs:{color:"accent",small:"",disabled:!t.daily},on:{click:function(e){return t.toggle()}}},[t._v("ぜんぶ")])],1),t._v(" "),r("v-card-text",t._l(t.rankings,(function(e,i){return r("v-row",{key:i,staticClass:"rankings",class:{entry:t.isMe(e),"rank-1":1==e.no,"rank-2":2==e.no,"rank-3":3==e.no,top10:e.no<=10}},[r("v-col",{staticClass:"no",attrs:{cols:"auto"}},[t._v(t._s(e.no))]),t._v(" "),r("v-col",{staticClass:"name",attrs:{cols:"mr-auto"}},[t._v(t._s(e.name))]),t._v(" "),r("v-col",{staticClass:"value",attrs:{cols:"auto"}},[t._v(t._s(t.displayScore(e.score)))])],1)})),1)],1)}),[],!1,null,"6b8e6e58",null);e.default=component.exports;j()(component,{VBtn:k.a,VCard:x.a,VCardText:w.b,VCardTitle:w.c,VCol:S.a,VIcon:O.a,VRow:C.a,VSpacer:z.a})},626:function(t,e,r){"use strict";r.r(e);var n={extends:r(674).a,props:["data","options"],mounted:function(){this.renderChart(this.data,this.options)}},o=r(80),component=Object(o.a)(n,undefined,undefined,!1,null,null,null);e.default=component.exports},629:function(t,e,r){"use strict";r.d(e,"a",(function(){return d}));r(43),r(24),r(30),r(52),r(41),r(8),r(50),r(57),r(42);var n=r(25),o=r(33);r(9),r(64);function l(t,e){var r;if("undefined"==typeof Symbol||null==t[Symbol.iterator]){if(Array.isArray(t)||(r=function(t,e){if(!t)return;if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(t,e)}(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var i=0,n=function(){};return{s:n,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l=!0,d=!1;return{s:function(){r=t[Symbol.iterator]()},n:function(){var t=r.next();return l=t.done,t},e:function(t){d=!0,o=t},f:function(){try{l||null==r.return||r.return()}finally{if(d)throw o}}}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,r=new Array(e);i<e;i++)r[i]=t[i];return r}var d=function(){function t(){Object(n.a)(this,t)}return Object(o.a)(t,null,[{key:"getHistoryDates",value:function(){var t=[],e=new Date;e.setHours(0,0,0),e.setMilliseconds(0),e.setDate(e.getDate()-30);for(var i=0;i<32;i++)t.push({month:e.getMonth()+1,date:e.getDate(),time:e.getTime(),time1:e.getTime()+864e5}),e.setDate(e.getDate()+1);return t}},{key:"sprintHistory",value:function(e,r,n){var o=t.getSprintHistory(e,n),l=o._counts,c=o._scores;return t.chartObject(r,c,l)}},{key:"termFilteredScoreEntities",value:function(t,e,r){if(0==r.length)return[];var n=r[0].time,o=r[r.length-1].time1;return e.filter((function(e){return e.mode===t})).filter((function(t){return t.createdAt>=n})).filter((function(t){return t.createdAt<o}))}},{key:"getSprintHistory",value:function(t,e){var r,n=[],o=[],c=l(e);try{var d=function(){var e=r.value,l=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));n.push(l.length),l.length>0?o.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.min(a,t)}))):o.push(0)};for(c.s();!(r=c.n()).done;)d()}catch(t){c.e(t)}finally{c.f()}return{_counts:n,_scores:o}}},{key:"getEndressHistory",value:function(t,e){var r,n=[],o=[],c=l(e);try{var d=function(){var e=r.value,l=t.filter((function(t){return e.time<=t.createdAt&&t.createdAt<e.time1}));n.push(l.length),l.length>0?o.push(l.map((function(t){return t.score})).reduce((function(a,t){return Math.max(a,t)}))):o.push(0)};for(c.s();!(r=c.n()).done;)d()}catch(t){c.e(t)}finally{c.f()}return{_counts:n,_scores:o}}},{key:"chartObject",value:function(t,e,r){return{labels:t,datasets:[{label:"じかん",data:e,borderColor:"#FFC107",backgroundColor:"transparent",yAxisID:"y-axis-1"},{label:"かいすう",data:r,borderColor:"#009688",backgroundColor:"transparent",yAxisID:"y-axis-2"}]}}},{key:"chartOptions",value:function(){var t="#888",e="#ddd";return{responsive:!0,maintainAspectRatio:!1,legend:{fontColor:t},scales:{yAxes:[{id:"y-axis-1",type:"linear",position:"left",ticks:{fontColor:t},gridLines:{display:!1,color:e}},{id:"y-axis-2",type:"linear",position:"right",ticks:{fontColor:t},gridLines:{display:!1,color:e}}],xAxes:[{ticks:{fontColor:t},gridLines:{color:"#ddd"}}]}}}}]),t}()},670:function(t,e,r){var map={"./af":470,"./af.js":470,"./ar":471,"./ar-dz":472,"./ar-dz.js":472,"./ar-kw":473,"./ar-kw.js":473,"./ar-ly":474,"./ar-ly.js":474,"./ar-ma":475,"./ar-ma.js":475,"./ar-sa":476,"./ar-sa.js":476,"./ar-tn":477,"./ar-tn.js":477,"./ar.js":471,"./az":478,"./az.js":478,"./be":479,"./be.js":479,"./bg":480,"./bg.js":480,"./bm":481,"./bm.js":481,"./bn":482,"./bn-bd":483,"./bn-bd.js":483,"./bn.js":482,"./bo":484,"./bo.js":484,"./br":485,"./br.js":485,"./bs":486,"./bs.js":486,"./ca":487,"./ca.js":487,"./cs":488,"./cs.js":488,"./cv":489,"./cv.js":489,"./cy":490,"./cy.js":490,"./da":491,"./da.js":491,"./de":492,"./de-at":493,"./de-at.js":493,"./de-ch":494,"./de-ch.js":494,"./de.js":492,"./dv":495,"./dv.js":495,"./el":496,"./el.js":496,"./en-au":497,"./en-au.js":497,"./en-ca":498,"./en-ca.js":498,"./en-gb":499,"./en-gb.js":499,"./en-ie":500,"./en-ie.js":500,"./en-il":501,"./en-il.js":501,"./en-in":502,"./en-in.js":502,"./en-nz":503,"./en-nz.js":503,"./en-sg":504,"./en-sg.js":504,"./eo":505,"./eo.js":505,"./es":506,"./es-do":507,"./es-do.js":507,"./es-mx":508,"./es-mx.js":508,"./es-us":509,"./es-us.js":509,"./es.js":506,"./et":510,"./et.js":510,"./eu":511,"./eu.js":511,"./fa":512,"./fa.js":512,"./fi":513,"./fi.js":513,"./fil":514,"./fil.js":514,"./fo":515,"./fo.js":515,"./fr":516,"./fr-ca":517,"./fr-ca.js":517,"./fr-ch":518,"./fr-ch.js":518,"./fr.js":516,"./fy":519,"./fy.js":519,"./ga":520,"./ga.js":520,"./gd":521,"./gd.js":521,"./gl":522,"./gl.js":522,"./gom-deva":523,"./gom-deva.js":523,"./gom-latn":524,"./gom-latn.js":524,"./gu":525,"./gu.js":525,"./he":526,"./he.js":526,"./hi":527,"./hi.js":527,"./hr":528,"./hr.js":528,"./hu":529,"./hu.js":529,"./hy-am":530,"./hy-am.js":530,"./id":531,"./id.js":531,"./is":532,"./is.js":532,"./it":533,"./it-ch":534,"./it-ch.js":534,"./it.js":533,"./ja":535,"./ja.js":535,"./jv":536,"./jv.js":536,"./ka":537,"./ka.js":537,"./kk":538,"./kk.js":538,"./km":539,"./km.js":539,"./kn":540,"./kn.js":540,"./ko":541,"./ko.js":541,"./ku":542,"./ku.js":542,"./ky":543,"./ky.js":543,"./lb":544,"./lb.js":544,"./lo":545,"./lo.js":545,"./lt":546,"./lt.js":546,"./lv":547,"./lv.js":547,"./me":548,"./me.js":548,"./mi":549,"./mi.js":549,"./mk":550,"./mk.js":550,"./ml":551,"./ml.js":551,"./mn":552,"./mn.js":552,"./mr":553,"./mr.js":553,"./ms":554,"./ms-my":555,"./ms-my.js":555,"./ms.js":554,"./mt":556,"./mt.js":556,"./my":557,"./my.js":557,"./nb":558,"./nb.js":558,"./ne":559,"./ne.js":559,"./nl":560,"./nl-be":561,"./nl-be.js":561,"./nl.js":560,"./nn":562,"./nn.js":562,"./oc-lnc":563,"./oc-lnc.js":563,"./pa-in":564,"./pa-in.js":564,"./pl":565,"./pl.js":565,"./pt":566,"./pt-br":567,"./pt-br.js":567,"./pt.js":566,"./ro":568,"./ro.js":568,"./ru":569,"./ru.js":569,"./sd":570,"./sd.js":570,"./se":571,"./se.js":571,"./si":572,"./si.js":572,"./sk":573,"./sk.js":573,"./sl":574,"./sl.js":574,"./sq":575,"./sq.js":575,"./sr":576,"./sr-cyrl":577,"./sr-cyrl.js":577,"./sr.js":576,"./ss":578,"./ss.js":578,"./sv":579,"./sv.js":579,"./sw":580,"./sw.js":580,"./ta":581,"./ta.js":581,"./te":582,"./te.js":582,"./tet":583,"./tet.js":583,"./tg":584,"./tg.js":584,"./th":585,"./th.js":585,"./tk":586,"./tk.js":586,"./tl-ph":587,"./tl-ph.js":587,"./tlh":588,"./tlh.js":588,"./tr":589,"./tr.js":589,"./tzl":590,"./tzl.js":590,"./tzm":591,"./tzm-latn":592,"./tzm-latn.js":592,"./tzm.js":591,"./ug-cn":593,"./ug-cn.js":593,"./uk":594,"./uk.js":594,"./ur":595,"./ur.js":595,"./uz":596,"./uz-latn":597,"./uz-latn.js":597,"./uz.js":596,"./vi":598,"./vi.js":598,"./x-pseudo":599,"./x-pseudo.js":599,"./yo":600,"./yo.js":600,"./zh-cn":601,"./zh-cn.js":601,"./zh-hk":602,"./zh-hk.js":602,"./zh-mo":603,"./zh-mo.js":603,"./zh-tw":604,"./zh-tw.js":604};function n(t){var e=o(t);return r(e)}function o(t){if(!r.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}n.keys=function(){return Object.keys(map)},n.resolve=o,t.exports=n,n.id=670},892:function(t,e,r){"use strict";r.r(e);r(36),r(65),r(39),r(64),r(32);var n=r(2),o=r(629),l=r(37),c=r(289),d=r(626),h=n.a.extend({components:{HistoryChart:d.default},props:{gameMode:{type:String,default:"modeSprint"},questionCount:{type:Number,default:10}},data:function(){return{tabNo:-1,chartStyle:{width:"100%",height:"30vh"},historyDates:[]}},mounted:function(){switch(this.tabNo=2,this.gameMode){case"mul9xSprint":this.tabNo=10===this.questionCount?0:1}this.historyDates=o.a.getHistoryDates()},methods:{startGame:function(t){this.$router.replace({path:"/game-mul-9x/".concat(t)})},sprint10History:function(){return o.a.sprintHistory(this.sprint10Scores,this.chartDates,this.historyDates)},sprint30History:function(){return o.a.sprintHistory(this.sprint30Scores,this.chartDates,this.historyDates)},endressHistory:function(){var t=o.a.getEndressHistory(this.endressScores,this.historyDates),e=t._counts,r=t._scores;return o.a.chartObject(this.chartDates,r,e)}},computed:{scoreStore:function(){return Object(l.e)(c.default,this.$store)},scores:function(){return this.scoreStore.scores||[]},chartDates:function(){return this.historyDates.map((function(t){return"".concat(t.month,"/").concat(t.date)}))},sprint10Scores:function(){return o.a.termFilteredScoreEntities("mul9xSprint-10",this.scores,this.historyDates)},sprint30Scores:function(){return o.a.termFilteredScoreEntities("mul9xSprint-30",this.scores,this.historyDates)},endressScores:function(){return o.a.termFilteredScoreEntities("mul9xEndress",this.scores,this.historyDates)},chartOptions:function(){return o.a.chartOptions()}}}),m=r(80),f=r(92),v=r.n(f),y=r(200),_=r(428),j=r(424),k=r(1047),x=r(160),w=r(1048),S=r(421),O=r(727),C=r(728),z=r(744),component=Object(m.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-tabs",{model:{value:t.tabNo,callback:function(e){t.tabNo=e},expression:"tabNo"}},[r("v-tab",[t._v("10問モード")]),t._v(" "),r("v-tab",[t._v("30問モード")]),t._v(" "),r("v-tab",[t._v("たいきゅうモード")]),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint10History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("10問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("mul9xSprint-10")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"mul9xSprint",questionCount:10}})],1),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.sprint30History(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("30問がんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("mul9xSprint-30")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"mul9xSprint",questionCount:30}})],1),t._v(" "),r("v-tab-item",{staticClass:"green lighten-5"},[r("HistoryChart",{staticClass:"mt-4",style:t.chartStyle,attrs:{data:t.endressHistory(),options:t.chartOptions}}),t._v(" "),r("v-card-text",[r("v-row",{staticClass:"mt-2 mb-2"},[r("v-col",{staticClass:"text-subtitle-2",attrs:{cols:"auto"}},[t._v("じかんぎれまでがんばる")]),t._v(" "),r("v-spacer"),t._v(" "),r("v-col",{attrs:{cols:"auto"}},[r("v-btn",{attrs:{color:"primary"},on:{click:function(e){return t.startGame("mul9xEndress")}}},[r("v-icon",[t._v("mdi-play")]),t._v("はじめる")],1)],1)],1)],1),t._v(" "),r("Ranking",{attrs:{gameMode:"mul9xEndress",questionCount:-1}})],1)],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{Ranking:r(625).default}),v()(component,{VBtn:y.a,VCard:_.a,VCardText:j.b,VCol:k.a,VIcon:x.a,VRow:w.a,VSpacer:S.a,VTab:O.a,VTabItem:C.a,VTabs:z.a})}}]);