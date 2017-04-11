(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("vue"));
	else if(typeof define === 'function' && define.amd)
		define(["vue"], factory);
	else if(typeof exports === 'object')
		exports["VueMaterial"] = factory(require("vue"));
	else
		root["VueMaterial"] = factory(root["Vue"]);
})(this, (function(__WEBPACK_EXTERNAL_MODULE_315__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = 338);
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

/***/ 150:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME .md-snackbar .md-ink-ripple, .THEME_NAME.md-snackbar .md-ink-ripple {\n  color: #fff; }\n"

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

/***/ 229:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(150)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(99),
  /* template */
  __webpack_require__(310),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdSnackbar/mdSnackbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdSnackbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-b6cb8878", Component.options)
  } else {
    hotAPI.reload("data-v-b6cb8878", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;



function install(Vue) {
  Vue.component('md-snackbar', __WEBPACK_IMPORTED_MODULE_0__mdSnackbar_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_1__mdSnackbar_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 310:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-snackbar",
    class: [_vm.themeClass, _vm.classes],
    attrs: {
      "id": _vm.snackbarId
    },
    on: {
      "mouseenter": _vm.pauseTimeout,
      "mouseleave": _vm.resumeTimeout
    }
  }, [_c('div', {
    ref: "container",
    staticClass: "md-snackbar-container"
  }, [_c('div', {
    staticClass: "md-snackbar-content"
  }, [_vm._t("default")], 2)])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-b6cb8878", module.exports)
  }
}

/***/ }),

/***/ 315:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_315__;

/***/ }),

/***/ 338:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(30);


/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {function transitionEndEventName() {
  var el = document.createElement('span');
  var transitions = {
    transition: 'transitionend',
    OTransition: 'oTransitionEnd',
    MozTransition: 'transitionend',
    WebkitTransition: 'webkitTransitionEnd'
  };

  for (var transition in transitions) {
    if (el.style[transition] !== undefined) {
      return transitions[transition];
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (transitionEndEventName());
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);


var manager = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
  data: function data() {
    return {
      current: null
    };
  }
});

/* harmony default export */ __webpack_exports__["a"] = (manager);
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var uniqueId = function uniqueId() {
  return Math.random().toString(36).slice(4);
};

/* harmony default export */ __webpack_exports__["a"] = (uniqueId);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 99:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__manager__ = __webpack_require__(43);
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-snackbar',
  props: {
    id: [String, Number],
    mdPosition: {
      type: String,
      default: 'bottom center'
    },
    mdDuration: {
      type: [String, Number],
      default: 4000
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_2__core_components_mdTheme_mixin__["a" /* default */]],
  data: function data() {
    return {
      snackbarId: this.id || 'snackbar-' + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_uniqueId__["a" /* default */])(),
      active: false,
      rootElement: {},
      snackbarElement: {},
      directionClass: null,
      closeTimeout: null
    };
  },

  computed: {
    classes: function classes() {
      var cssClasses = {
        'md-active': this.active
      };

      this.directionClass = this.mdPosition.replace(/ /g, '-');

      cssClasses['md-position-' + this.directionClass] = true;

      return cssClasses;
    }
  },
  watch: {
    active: function active(_active) {
      var directionClass = 'md-has-toast-' + this.directionClass;
      var toastClass = 'md-has-toast';

      if (_active) {
        document.body.classList.add(directionClass);
        document.body.classList.add(toastClass);
      } else {
        document.body.classList.remove(directionClass);
        document.body.classList.remove(toastClass);
      }
    }
  },
  methods: {
    removeElement: function removeElement() {
      if (document.body.contains(this.snackbarElement)) {
        var activeRipple = this.snackbarElement.querySelector('.md-ripple.md-active');

        if (activeRipple) {
          activeRipple.classList.remove('md-active');
        }

        document.body.removeChild(this.snackbarElement);
      }
    },
    open: function open() {
      if (__WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current) {
        __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current.close();
      }

      __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current = this;
      document.body.appendChild(this.snackbarElement);
      window.getComputedStyle(this.$refs.container).backgroundColor;
      this.active = true;
      this.$emit('open');
      this.closeTimeout = window.setTimeout(this.close, this.mdDuration);
      this.timeoutStartedAt = Date.now();
    },
    close: function close() {
      var _this = this;

      if (this.$refs.container) {
        var removeElement = function removeElement() {
          _this.$refs.container.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
          _this.removeElement();
        };

        __WEBPACK_IMPORTED_MODULE_3__manager__["a" /* default */].current = null;
        this.active = false;
        this.$emit('close');
        this.$refs.container.removeEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
        this.$refs.container.addEventListener(__WEBPACK_IMPORTED_MODULE_1__core_utils_transitionEndEventName__["a" /* default */], removeElement);
        window.clearTimeout(this.closeTimeout);
        this.pendingDuration = this.mdDuration;
      }
    },
    pauseTimeout: function pauseTimeout() {
      this.pendingDuration = this.pendingDuration - (Date.now() - this.timeoutStartedAt);
      this.timeoutStartedAt = 0;
      window.clearTimeout(this.closeTimeout);
    },
    resumeTimeout: function resumeTimeout() {
      this.timeoutStartedAt = Date.now();
      this.closeTimeout = window.setTimeout(this.close, this.pendingDuration);
    }
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick((function () {
      _this2.snackbarElement = _this2.$el;
      _this2.snackbarElement.parentNode.removeChild(_this2.snackbarElement);
      _this2.timeoutStartedAt = 0;
      _this2.pendingDuration = _this2.mdDuration;
    }));
  },
  beforeDestroy: function beforeDestroy() {
    window.clearTimeout(this.closeTimeout);
    this.removeElement();
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ })

/******/ });
}));