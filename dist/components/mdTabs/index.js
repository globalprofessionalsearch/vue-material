/*!
* Vue Material v0.7.1
* Made with love by Marcos Moura
* Released under the MIT License.
*/   
!(function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.VueMaterial=e():t.VueMaterial=e()})(this,(function(){return (function(t){function e(i){if(a[i])return a[i].exports;var n=a[i]={i:i,l:!1,exports:{}};return t[i].call(n.exports,n,n.exports,e),n.l=!0,n.exports}var a={};return e.m=t,e.c=a,e.i=function(t){return t},e.d=function(t,a,i){e.o(t,a)||Object.defineProperty(t,a,{configurable:!1,enumerable:!0,get:i})},e.n=function(t){var a=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(a,"a",a),a},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="/",e(e.s=344)})({0:function(t,e){t.exports=function(t){if(!t.webpackPolyfill){var e=Object.create(t);e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),Object.defineProperty(e,"exports",{enumerable:!0}),e.webpackPolyfill=1}return e}},1:function(t,e){t.exports=function(t,e,a,i){var n,s=t=t||{},o=typeof t.default;"object"!==o&&"function"!==o||(n=t,s=t.default);var r="function"==typeof s?s.options:s;if(e&&(r.render=e.render,r.staticRenderFns=e.staticRenderFns),a&&(r._scopeId=a),i){var d=Object.create(r.computed||null);Object.keys(i).forEach((function(t){var e=i[t];d[t]=function(){return e}})),r.computed=d}return{esModule:n,exports:s,options:r}}},112:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=a(5),n=a(3);e.default={name:"md-tab",props:{id:[String,Number],mdLabel:[String,Number],mdIcon:String,mdActive:Boolean,mdDisabled:Boolean,mdOptions:{default:void 0},mdTooltip:String,mdTooltipDelay:{type:String,default:"0"},mdTooltipDirection:{type:String,default:"bottom"}},data:function(){return{mounted:!1,tabId:this.id||"tab-"+a.i(i.a)(),width:"0px",left:"0px"}},watch:{mdActive:function(){this.updateTabData()},mdDisabled:function(){this.updateTabData()},mdIcon:function(){this.updateTabData()},mdOptions:{deep:!0,handler:function(){this.updateTabData()}},mdLabel:function(){this.updateTabData()},mdTooltip:function(){this.updateTabData()},mdTooltipDelay:function(){this.updateTabData()},mdTooltipDirection:function(){this.updateTabData()}},computed:{styles:function(){return{width:this.width,left:this.left}}},methods:{getTabData:function(){return{id:this.tabId,label:this.mdLabel,icon:this.mdIcon,options:this.mdOptions,active:this.mdActive,disabled:this.mdDisabled,tooltip:this.mdTooltip,tooltipDelay:this.mdTooltipDelay,tooltipDirection:this.mdTooltipDirection,ref:this}},updateTabData:function(){this.parentTabs.updateTab(this.getTabData())}},mounted:function(){var t=this.getTabData();if(this.parentTabs=a.i(n.a)(this.$parent,"md-tabs"),!this.parentTabs)throw new Error("You must wrap the md-tab in a md-tabs");this.mounted=!0,this.parentTabs.updateTab(t),this.mdActive&&this.parentTabs.setActiveTab(t)},beforeDestroy:function(){this.parentTabs.unregisterTab(this.getTabData())}},t.exports=exports.default}).call(e,a(0)(t))},113:function(t,e,a){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var i=a(2),n=a(49);e.default={name:"md-tabs",props:{mdFixed:Boolean,mdCentered:Boolean,mdRight:Boolean,mdDynamicHeight:{type:Boolean,default:!0},mdElevation:{type:[String,Number],default:0}},mixins:[i.a],data:function(){return{tabList:{},activeTab:null,activeTabNumber:0,hasIcons:!1,hasLabel:!1,transitionControl:null,transitionOff:!1,contentHeight:"0px",contentWidth:"0px"}},computed:{tabClasses:function(){return{"md-dynamic-height":this.mdDynamicHeight,"md-transition-off":this.transitionOff}},navigationClasses:function(){return{"md-has-icon":this.hasIcons,"md-has-label":this.hasLabel,"md-fixed":this.mdFixed,"md-right":!this.mdCentered&&this.mdRight,"md-centered":this.mdCentered||this.mdFixed}},indicatorClasses:function(){var t=this.lastIndicatorNumber>this.activeTabNumber;return this.lastIndicatorNumber=this.activeTabNumber,{"md-transition-off":this.transitionOff,"md-to-right":!t,"md-to-left":t}}},methods:{getHeaderClass:function(t){return{"md-active":this.activeTab===t.id,"md-disabled":t.disabled}},registerTab:function(t){this.$set(this.tabList,t.id,t)},unregisterTab:function(t){this.$delete(this.tabList,t.id)},updateTab:function(t){if(this.registerTab(t),t.active)if(t.disabled){if(Object.keys(this.tabList).length){var e=Object.keys(this.tabList),a=e.indexOf(t.id)+1,i=e[a];i?this.setActiveTab(this.tabList[i]):this.setActiveTab(this.tabList[0])}}else this.setActiveTab(t)},observeElementChanges:function(){this.parentObserver=new MutationObserver(a.i(n.a)(this.calculateOnWatch,50)),this.parentObserver.observe(this.$refs.tabContent,{childList:!0,attributes:!0,subtree:!0})},getTabIndex:function(t){return Object.keys(this.tabList).indexOf(t)},calculateIndicatorPos:function(){if(this.$refs.tabHeader&&this.$refs.tabHeader[this.activeTabNumber]){var t=this.$el.offsetWidth,e=this.$refs.tabHeader[this.activeTabNumber],a=e.offsetLeft-this.$refs.tabsContainer.scrollLeft,i=t-a-e.offsetWidth;this.$refs.indicator.style.left=a+"px",this.$refs.indicator.style.right=i+"px"}},calculateTabsWidthAndPosition:function(){var t=this.$el.offsetWidth,e=0;this.contentWidth=t*this.activeTabNumber+"px";for(var a in this.tabList){var i=this.tabList[a];i.ref.width=t+"px",i.ref.left=t*e+"px",e++}},calculateContentHeight:function(){var t=this;this.$nextTick((function(){if(Object.keys(t.tabList).length){var e=t.tabList[t.activeTab].ref.$el.offsetHeight;t.contentHeight=e+"px"}}))},calculatePosition:function(){var t=this;window.requestAnimationFrame((function(){t.calculateIndicatorPos(),t.calculateTabsWidthAndPosition(),t.calculateContentHeight()}))},debounceTransition:function(){var t=this;window.clearTimeout(this.transitionControl),this.transitionControl=window.setTimeout((function(){t.calculatePosition(),t.transitionOff=!1}),200)},calculateOnWatch:function(){this.calculatePosition(),this.debounceTransition()},calculateOnResize:function(){this.transitionOff=!0,this.calculateOnWatch()},setActiveTab:function(t){this.hasIcons=!!t.icon,this.hasLabel=!!t.label,this.activeTab=t.id,this.activeTabNumber=this.getTabIndex(this.activeTab),this.calculatePosition(),this.$emit("change",this.activeTabNumber)}},mounted:function(){var t=this;this.$nextTick((function(){if(t.observeElementChanges(),window.addEventListener("resize",t.calculateOnResize),Object.keys(t.tabList).length&&!t.activeTab){var e=Object.keys(t.tabList)[0];t.setActiveTab(t.tabList[e])}}))},beforeDestroy:function(){this.parentObserver&&this.parentObserver.disconnect(),window.removeEventListener("resize",this.calculateOnResize)}},t.exports=exports.default}).call(e,a(0)(t))},132:function(t,e){},177:function(t,e){t.exports=".THEME_NAME.md-tabs>.md-tabs-navigation{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header{color:PRIMARY-CONTRAST-0.54}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-CONTRAST}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-header.md-disabled{color:PRIMARY-CONTRAST-0.26}.THEME_NAME.md-tabs>.md-tabs-navigation .md-tab-indicator{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation{background-color:transparent;border-bottom:1px solid BACKGROUND-CONTRAST-0.12}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header{color:BACKGROUND-CONTRAST-0.54}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header:focus{color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-header.md-disabled{color:BACKGROUND-CONTRAST-0.26}.THEME_NAME.md-tabs.md-transparent>.md-tabs-navigation .md-tab-indicator{background-color:PRIMARY-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation{background-color:ACCENT-COLOR}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header{color:ACCENT-CONTRAST-0.54}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header:focus{color:ACCENT-CONTRAST}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-header.md-disabled{color:ACCENT-CONTRAST-0.26}.THEME_NAME.md-tabs.md-accent>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation{background-color:WARN-COLOR}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header{color:WARN-CONTRAST-0.54}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-active,.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header:focus{color:WARN-CONTRAST}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-header.md-disabled{color:WARN-CONTRAST-0.26}.THEME_NAME.md-tabs.md-warn>.md-tabs-navigation .md-tab-indicator{background-color:BACKGROUND-COLOR}\n"},2:function(t,e,a){"use strict";(function(t){e.a={props:{mdTheme:String},data:function(){return{closestThemedParent:!1}},methods:{getClosestThemedParent:function(t){return!(!t||!t.$el||0===t._uid)&&(t.mdTheme||t.mdName?t:this.getClosestThemedParent(t.$parent))}},computed:{themeClass:function(){if(this.mdTheme)return"md-theme-"+this.mdTheme;var t=this.closestThemedParent.mdTheme;return t||(t=this.closestThemedParent?this.closestThemedParent.mdName:this.$material.currentTheme),"md-theme-"+t}},mounted:function(){this.closestThemedParent=this.getClosestThemedParent(this.$parent),this.$material.currentTheme||this.$material.setCurrentTheme("default")}},t.exports=exports.default}).call(e,a(0)(t))},242:function(t,e,a){var i=a(1)(a(112),a(249),null,null);t.exports=i.exports},243:function(t,e,a){a(132);var i=a(1)(a(113),a(278),null,null);t.exports=i.exports},249:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"md-tab",style:t.styles,attrs:{id:t.tabId}},[t._t("default")],2)},staticRenderFns:[]}},278:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"md-tabs",class:[t.themeClass,t.tabClasses]},[a("md-whiteframe",{ref:"tabNavigation",staticClass:"md-tabs-navigation",class:t.navigationClasses,attrs:{"md-tag":"nav","md-elevation":t.mdElevation}},[a("div",{ref:"tabsContainer",staticClass:"md-tabs-navigation-container",on:{scroll:t.calculateIndicatorPos}},[t._l(t.tabList,(function(e){return a("button",{key:e.id,ref:"tabHeader",refInFor:!0,staticClass:"md-tab-header",class:t.getHeaderClass(e),attrs:{type:"button",disabled:e.disabled},on:{click:function(a){t.setActiveTab(e)}}},[a("md-ink-ripple",{attrs:{"md-disabled":e.disabled}}),t._v(" "),a("div",{staticClass:"md-tab-header-container"},[t._t("header-item",[e.icon?a("md-icon",[t._v(t._s(e.icon))]):t._e(),t._v(" "),e.label?a("span",[t._v(t._s(e.label))]):t._e()],{header:e}),t._v(" "),e.tooltip?a("md-tooltip",{attrs:{"md-direction":e.tooltipDirection,"md-delay":e.tooltipDelay}},[t._v(t._s(e.tooltip))]):t._e()],2)],1)})),t._v(" "),a("span",{ref:"indicator",staticClass:"md-tab-indicator",class:t.indicatorClasses})],2)]),t._v(" "),a("div",{ref:"tabContent",staticClass:"md-tabs-content",style:{height:t.contentHeight}},[a("div",{staticClass:"md-tabs-wrapper",style:{transform:"translate3D(-"+t.contentWidth+", 0, 0)"}},[t._t("default")],2)])],1)},staticRenderFns:[]}},3:function(t,e,a){"use strict";(function(t){var a=function t(e,a){return!(!e||!e.$el)&&(0!==e._uid&&(e.$el.classList.contains(a)?e:t(e.$parent,a)))};e.a=a,t.exports=exports.default}).call(e,a(0)(t))},344:function(t,e,a){t.exports=a(36)},36:function(t,e,a){"use strict";(function(t){function i(t){t.component("md-tabs",s.a),t.component("md-tab",r.a),t.material.styles.push(c.a)}Object.defineProperty(e,"__esModule",{value:!0});var n=a(243),s=a.n(n),o=a(242),r=a.n(o),d=a(177),c=a.n(d);e.default=i,t.exports=exports.default}).call(e,a(0)(t))},49:function(t,e,a){"use strict";(function(t){var a=function(t,e){var a=!1;return function(){a||(t.call(),a=!0,window.setTimeout((function(){a=!1}),e))}};e.a=a,t.exports=exports.default}).call(e,a(0)(t))},5:function(t,e,a){"use strict";(function(t){var a=function(){return Math.random().toString(36).slice(4)};e.a=a,t.exports=exports.default}).call(e,a(0)(t))}})}));