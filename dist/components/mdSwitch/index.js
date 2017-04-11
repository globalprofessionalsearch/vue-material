/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueMaterial=t():e.VueMaterial=t()})(this,(function(){return (function(e){function t(c){if(n[c])return n[c].exports;var i=n[c]={i:c,l:!1,exports:{}};return e[c].call(i.exports,i,i.exports,t),i.l=!0,i.exports}var n={};return t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,c){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:c})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=342)})({0:function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},1:function(e,t){e.exports=function(e,t,n,c){var i,d=e=e||{},r=typeof e.default;"object"!==r&&"function"!==r||(i=e,d=e.default);var s="function"==typeof d?d.options:d;if(t&&(s.render=t.render,s.staticRenderFns=t.staticRenderFns),n&&(s._scopeId=n),c){var o=Object.create(s.computed||null);Object.keys(c).forEach((function(e){var t=c[e];o[e]=function(){return t}})),s.computed=o}return{esModule:i,exports:d,options:s}}},103:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var c=n(2);t.default={name:"md-switch",props:{name:String,value:Boolean,id:String,disabled:Boolean,type:{type:String,default:"button"}},mixins:[c.a],data:function(){return{leftPos:"-1px",checked:this.value}},computed:{classes:function(){return{"md-checked":Boolean(this.value),"md-disabled":this.disabled}},styles:function(){return{transform:"translate3D("+this.leftPos+", -50%, 0)"}}},watch:{checked:function(){this.setPosition()},value:function(e){this.changeState(e)}},methods:{setPosition:function(){this.leftPos=this.checked?"75%":"-1px"},changeState:function(e,t){void 0!==t?(this.$emit("change",e,t),t.defaultPrevented||(this.checked=e),this.$emit("input",this.checked,t)):this.checked=e},toggle:function(e){this.disabled||this.changeState(!this.checked,e)}},mounted:function(){this.$nextTick(this.setPosition)}},e.exports=exports.default}).call(t,n(0)(e))},144:function(e,t){},175:function(e,t){e.exports=".THEME_NAME.md-switch.md-checked .md-switch-container{background-color:ACCENT-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked .md-switch-thumb{background-color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ink-ripple{color:ACCENT-COLOR}.THEME_NAME.md-switch.md-checked .md-ripple{opacity:.38}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-container{background-color:PRIMARY-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-primary .md-switch-thumb{background-color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-primary .md-ink-ripple{color:PRIMARY-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-container{background-color:WARN-COLOR-500-0.5}.THEME_NAME.md-switch.md-checked.md-warn .md-switch-thumb{background-color:WARN-COLOR}.THEME_NAME.md-switch.md-checked.md-warn .md-ink-ripple{color:WARN-COLOR}.THEME_NAME.md-switch.md-disabled .md-switch-container,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-container{background-color:rgba(0,0,0,0.12)}.THEME_NAME.md-switch.md-disabled .md-switch-thumb,.THEME_NAME.md-switch.md-disabled.md-checked .md-switch-thumb{background-color:#bdbdbd}\n"},2:function(e,t,n){"use strict";(function(e){t.a={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(e){return!(!e||!e.$el||0===e._uid)&&(e.mdTheme||e.mdName?e:this.getClosestThemedParent(e.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var e=this.closestThemedParent.mdTheme;return e||(e=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+e}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},e.exports=exports.default}).call(t,n(0)(e))},233:function(e,t,n){n(144);var c=n(1)(n(103),n(303),null,null);e.exports=c.exports},303:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"md-switch",class:[e.themeClass,e.classes]},[n("div",{staticClass:"md-switch-container",on:{click:function(t){e.toggle(t)}}},[n("div",{staticClass:"md-switch-thumb",style:e.styles},[n("input",{attrs:{type:"checkbox",name:e.name,id:e.id,disabled:e.disabled},domProps:{value:e.value}}),e._v(" "),n("button",{staticClass:"md-switch-holder",attrs:{type:e.type}}),e._v(" "),n("md-ink-ripple",{attrs:{"md-disabled":e.disabled}})],1)]),e._v(" "),e.$slots.default?n("label",{staticClass:"md-switch-label",attrs:{for:e.id||e.name}},[e._t("default")],2):e._e()])},staticRenderFns:[]}},34:function(e,t,n){"use strict";(function(e){function c(e){e.component("md-switch",d.a),e.material.styles.push(s.a)}Object.defineProperty(t,"__esModule",{value:!0});var i=n(233),d=n.n(i),r=n(175),s=n.n(r);t.default=c,e.exports=exports.default}).call(t,n(0)(e))},342:function(e,t,n){e.exports=n(34)}})}));