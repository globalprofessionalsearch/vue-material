(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory();
	else
		root["VueMaterial"] = factory();
})(this, (function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 321);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = function(originalModule) {
	if(!originalModule.webpackPolyfill) {
		var module = Object.create(originalModule);
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		Object.defineProperty(module, "exports", {
			enumerable: true,
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  scopeId,
  cssModules
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  // inject cssModules
  if (cssModules) {
    var computed = Object.create(options.computed || null)
    Object.keys(cssModules).forEach((function (key) {
      var module = cssModules[key]
      computed[key] = function () { return module }
    }))
    options.computed = computed
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 122:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;



function install(Vue) {
  Vue.component('md-button-toggle', __WEBPACK_IMPORTED_MODULE_0__mdButtonToggle_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdButtonToggle_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-button-toggle .md-button:after {\n  width: 1px;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  content: \" \"; }\n\n.THEME_NAME.md-button-toggle .md-toggle {\n  color: BACKGROUND-CONTRAST-0.54;\n  background-color: BACKGROUND-CONTRAST-0.26; }\n  .THEME_NAME.md-button-toggle .md-toggle:hover:not([disabled]) {\n    background-color: BACKGROUND-CONTRAST-0.38; }\n  .THEME_NAME.md-button-toggle .md-toggle + .md-toggle:after {\n    background-color: BACKGROUND-CONTRAST-0.12; }\n\n.THEME_NAME.md-button-toggle.md-primary .md-toggle {\n  color: PRIMARY-CONTRAST;\n  background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-button-toggle.md-primary .md-toggle:hover:not([disabled]) {\n    background-color: PRIMARY-COLOR; }\n  .THEME_NAME.md-button-toggle.md-primary .md-toggle + .md-toggle:after {\n    background-color: PRIMARY-COLOR-600; }\n\n.THEME_NAME.md-button-toggle.md-accent .md-toggle {\n  color: ACCENT-CONTRAST;\n  background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-button-toggle.md-accent .md-toggle:hover:not([disabled]) {\n    background-color: ACCENT-COLOR; }\n  .THEME_NAME.md-button-toggle.md-accent .md-toggle + .md-toggle:after {\n    background-color: ACCENT-COLOR-600; }\n\n.THEME_NAME.md-button-toggle.md-warn .md-toggle {\n  color: WARN-CONTRAST;\n  background-color: WARN-COLOR; }\n  .THEME_NAME.md-button-toggle.md-warn .md-toggle:hover:not([disabled]) {\n    background-color: WARN-COLOR; }\n  .THEME_NAME.md-button-toggle.md-warn .md-toggle + .md-toggle:after {\n    background-color: WARN-COLOR-600; }\n\n.THEME_NAME.md-button-toggle [disabled] {\n  color: rgba(0, 0, 0, 0.26); }\n  .THEME_NAME.md-button-toggle [disabled].md-toggle {\n    color: BACKGROUND-CONTRAST-0.2;\n    background-color: rgba(0, 0, 0, 0.26); }\n"

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(122)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(55),
  /* template */
  __webpack_require__(255),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdButtonToggle/mdButtonToggle.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdButtonToggle.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c5891b8", Component.options)
  } else {
    hotAPI.reload("data-v-0c5891b8", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony default export */ __webpack_exports__["a"] = ({
  props: {
    mdTheme: String
  },
  data: function data() {
    return {
      closestThemedParent: false
    };
  },
  methods: {
    getClosestThemedParent: function getClosestThemedParent($parent) {
      if (!$parent || !$parent.$el || $parent._uid === 0) {
        return false;
      }

      if ($parent.mdTheme || $parent.mdName) {
        return $parent;
      }

      return this.getClosestThemedParent($parent.$parent);
    }
  },
  computed: {
    themeClass: function themeClass() {
      if (this.mdTheme) {
        return 'md-theme-' + this.mdTheme;
      }

      var theme = this.closestThemedParent.mdTheme;

      if (!theme) {
        if (this.closestThemedParent) {
          theme = this.closestThemedParent.mdName;
        } else {
          theme = this.$material.currentTheme;
        }
      }

      return 'md-theme-' + theme;
    }
  },
  mounted: function mounted() {
    this.closestThemedParent = this.getClosestThemedParent(this.$parent);

    if (!this.$material.currentTheme) {
      this.$material.setCurrentTheme('default');
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 255:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-button-toggle",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0c5891b8", module.exports)
  }
}

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
//
//
//
//
//
//
//
//



var onClickButton = void 0;

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-button-toggle',
  props: {
    mdSingle: Boolean
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  mounted: function mounted() {
    var _this = this;

    this.$children.forEach((function (child) {
      var element = child.$el;
      var toggleClass = 'md-toggle';

      onClickButton = function onClickButton() {
        if (_this.mdSingle) {
          _this.$children.forEach((function (child) {
            child.$el.classList.remove(toggleClass);
          }));

          element.classList.add(toggleClass);
        } else {
          element.classList.toggle(toggleClass);
        }
      };

      if (element && element.classList.contains('md-button')) {
        element.addEventListener('click', onClickButton);
      }
    }));
  },
  beforeDestroy: function beforeDestroy() {
    this.$children.forEach((function (child) {
      var element = child.$el;

      if (element && element.classList.contains('md-button')) {
        element.removeEventListener('click', onClickButton);
      }
    }));
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ })

/******/ });
}));