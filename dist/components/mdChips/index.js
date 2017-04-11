/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(i){if(n[i])return n[i].exports;var d=n[i]={i:i,l:!1,exports:{}};return e[i].call(d.exports,d,d.exports,t),d.l=!0,d.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=324)})({0:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},1:function(e,t){e.exports=function(e,t,n,i){var d,s=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(d=e,s=e.default);var c="function"==typeof s?s.options:s;if(t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns),n&&(c._scopeId=n),i){var o=Object.create(c.computed||null);Object.keys(i).forEach((function(e){var t=i[e];o[e]=function(){return t}})),c.computed=o}return{esModule:d,exports:s,options:c}}},139:function(e,t){},159:function(e,t){e.exports=".THEME_NAME.md-chip{background-color:BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-chip.md-deletable:hover,.THEME_NAME.md-chip.md-deletable:focus,.THEME_NAME.md-chip.md-editable:hover,.THEME_NAME.md-chip.md-editable:focus{background-color:BACKGROUND-CONTRAST-0.54;color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-deletable:hover .md-delete,.THEME_NAME.md-chip.md-deletable:focus .md-delete,.THEME_NAME.md-chip.md-editable:hover .md-delete,.THEME_NAME.md-chip.md-editable:focus .md-delete{color:BACKGROUND-COLOR}.THEME_NAME.md-chip .md-delete{color:BACKGROUND-CONTRAST-0.38}.THEME_NAME.md-chip .md-delete .md-ripple{color:BACKGROUND-COLOR}.THEME_NAME.md-chip.md-primary{color:PRIMARY-CONTRAST;background-color:PRIMARY-COLOR}.THEME_NAME.md-chip.md-accent{color:ACCENT-CONTRAST;background-color:ACCENT-COLOR}.THEME_NAME.md-chip.md-warn{color:WARN-CONTRAST;background-color:WARN-COLOR}\n"},16:function(e,t,n){"use strict";(function(e){function i(e){e.component("md-chips",s.a),e.component("md-chip",c.a),e.material.styles.push(l.a)}Object.defineProperty(t,"__esModule",{value:!0});var d=n(198),s=n.n(d),r=n(197),c=n.n(r),o=n(159),l=n.n(o);t.default=i,e.exports=exports.default}).call(t,n(0)(e))},197:function(e,t,n){var i=n(1)(n(67),n(272),null,null);e.exports=i.exports},198:function(e,t,n){n(139);var i=n(1)(n(68),n(289),null,null);e.exports=i.exports},2:function(e,t,n){"use strict";(function(e){t.a={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=exports.default}).call(t,n(0)(e))},272:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-chip",class:[e.themeClass,e.classes],attrs:{tabindex:"0"}},[n("div",{staticClass:"md-chip-container",on:{click:function(t){!e.disabled&&e.mdEditable&&e.$emit("edit")}}},[e._t("default")],2),e._v(" "),e.mdDeletable?n("md-button",{staticClass:"md-icon-button md-dense md-delete",attrs:{tabindex:"-1"},nativeOn:{click:function(t){!e.disabled&&e.$emit("delete")},keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;!e.disabled&&e.$emit("delete")}}},[n("md-icon",{staticClass:"md-icon-delete"},[e._v("cancel")])],1):e._e()],1)},staticRenderFns:[]}},289:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-chips",class:[e.themeClass,e.classes]},[n("md-input-container",{nativeOn:{click:function(t){e.applyInputFocus(t)}}},[e._l(e.selectedChips,(function(t){return n("md-chip",{attrs:{"md-deletable":!e.mdStatic,"md-editable":!e.mdStatic,disabled:e.disabled},on:{delete:function(n){e.deleteChip(t)},edit:function(n){e.editChip(t)}}},[e._t("default",null,{value:t})],2)})),e._v(" "),n("md-input",{directives:[{name:"show",rawName:"v-show",value:!e.mdStatic,expression:"!mdStatic"}],ref:"input",attrs:{type:e.mdInputType,placeholder:e.mdInputPlaceholder,id:e.inputId,name:e.mdInputName,disabled:e.disabled,tabindex:"0"},nativeOn:{keydown:[function(t){if(!("button"in t)&&e._k(t.keyCode,"delete",[8,46]))return null;e.deleteLastChip(t)},function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;t.preventDefault(),e.addChip(t)}]},model:{value:e.currentChip,callback:function(t){e.currentChip=t},expression:"currentChip"}})],2)],1)},staticRenderFns:[]}},324:function(e,t,n){e.exports=n(16)},5:function(e,t,n){"use strict";(function(e){var n=function(){return Math.random().toString(36).slice(4)};t.a=n,e.exports=exports.default}).call(t,n(0)(e))},67:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(2);t.default={name:"md-chip",props:{disabled:Boolean,mdDeletable:Boolean,mdEditable:Boolean},mixins:[i.a],computed:{classes:function(){return{"md-deletable":this.mdDeletable,"md-disabled":this.disabled,"md-editable":this.mdEditable}}}},e.exports=exports.default}).call(t,n(0)(e))},68:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),d=n(5);t.default={name:"md-chips",props:{value:Array,disabled:Boolean,mdInputId:String,mdInputName:String,mdInputPlaceholder:String,mdInputType:{type:String,default:"text"},mdStatic:Boolean,mdMax:{type:Number,default:1/0}},mixins:[i.a],data:function(){return{currentChip:null,selectedChips:this.value,inputId:this.mdInputId||"chips-"+n.i(d.a)()}},watch:{value:function(e){this.selectedChips=e}},computed:{classes:function(){return{"md-static":this.mdStatic,"md-disabled":this.disabled}}},methods:{applyInputFocus:function(){var e=this;this.$nextTick((function(){e.$refs.input.$el.focus()}))},addChip:function(){if(this.currentChip&&this.selectedChips.length<this.mdMax){var e=this.currentChip.trim();this.selectedChips.indexOf(e)<0&&(this.selectedChips.push(e),this.currentChip=null,this.$emit("input",this.selectedChips),this.$emit("change",this.selectedChips),this.applyInputFocus())}},deleteChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.$emit("change",this.selectedChips),this.applyInputFocus()},editChip:function(e){var t=this.selectedChips.indexOf(e);t>=0&&this.selectedChips.splice(t,1),this.currentChip=e,this.$emit("change",this.selectedChips),this.applyInputFocus()},deleteLastChip:function(){this.currentChip||(this.selectedChips.pop(),this.$emit("change",this.selectedChips),this.applyInputFocus())}}},e.exports=exports.default}).call(t,n(0)(e))}})}));