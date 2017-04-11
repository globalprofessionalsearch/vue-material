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
/******/ 	return __webpack_require__(__webpack_require__.s = 343);
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

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(3);
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
  name: 'md-table',
  props: {
    mdSortType: String,
    mdSort: String
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: function data() {
    return {
      sortType: this.mdSortType,
      sortBy: this.mdSort,
      hasRowSelection: false,
      data: [],
      numberOfRows: 0,
      numberOfSelected: 0,
      selectedRows: {}
    };
  },

  methods: {
    emitSort: function emitSort(name) {
      this.sortBy = name;
      this.$emit('sort', {
        name: name,
        type: this.sortType
      });
    },
    emitSelection: function emitSelection() {
      this.$emit('select', this.selectedRows);
    }
  },
  watch: {
    data: function data() {
      this.numberOfRows = this.data.length;
    },
    selectedRows: function selectedRows() {
      this.numberOfSelected = Object.keys(this.selectedRows).length;
    },
    mdSort: function mdSort() {
      this.sortBy = this.mdSort;
      this.$emit('sortInput');
    },
    mdSortType: function mdSortType() {
      this.sortType = this.mdSortType;
      this.$emit('sortInput');
    }
  },
  mounted: function mounted() {
    this.parentCard = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table-card');

    if (this.parentCard) {
      this.parentCard.tableInstance = this;
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__ = __webpack_require__(3);
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
//




/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-alternate-header',
  props: {
    mdSelectedLabel: {
      type: String,
      default: 'selected'
    }
  },
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]],
  data: function data() {
    return {
      classes: {},
      tableInstance: {}
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.parentCard = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table-card');

    this.$nextTick((function () {
      _this.tableInstance = _this.parentCard.tableInstance;

      _this.$watch('tableInstance.numberOfSelected', (function () {
        _this.$refs.counter.textContent = _this.tableInstance.numberOfSelected;
        _this.classes = {
          'md-active': _this.tableInstance.numberOfSelected > 0
        };
      }));
    }));
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 106:
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



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-card',
  mixins: [__WEBPACK_IMPORTED_MODULE_0__core_components_mdTheme_mixin__["a" /* default */]]
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-cell',
  props: {
    mdNumeric: Boolean
  },
  data: function data() {
    return {
      hasAction: false
    };
  },
  computed: {
    classes: function classes() {
      return {
        'md-numeric': this.mdNumeric,
        'md-has-action': this.hasAction
      };
    }
  },
  mounted: function mounted() {
    if (this.$children.length > 0) {
      this.hasAction = true;
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
  name: 'md-table-edit',
  props: {
    value: [String, Number],
    mdLarge: Boolean,
    mdId: String,
    mdName: String,
    mdPlaceholder: String,
    mdMaxlength: [Number, String]
  },
  data: function data() {
    return {
      active: false
    };
  },

  computed: {
    triggerClasses: function triggerClasses() {
      return {
        'md-edited': this.value
      };
    },
    dialogClasses: function dialogClasses() {
      return {
        'md-active': this.active,
        'md-large': this.mdLarge
      };
    },
    realValue: function realValue() {
      console.log(this.value);
    }
  },
  methods: {
    openDialog: function openDialog() {
      this.active = true;
      this.$refs.input.$el.focus();
      document.addEventListener('click', this.closeDialogOnOffClick);
    },
    closeDialog: function closeDialog() {
      if (this.active) {
        this.active = false;
        this.$refs.input.$el.blur();
        document.removeEventListener('click', this.closeDialogOnOffClick);
      }
    },
    closeDialogOnOffClick: function closeDialogOnOffClick(event) {
      if (!this.$refs.dialog.contains(event.target)) {
        this.closeDialog();
      }
    },
    confirmDialog: function confirmDialog() {
      var value = this.$refs.input.$el.value;

      this.closeDialog();
      this.$emit('input', value);
      this.$emit('edited', value);
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(3);
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
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-head',
  props: {
    mdNumeric: Boolean,
    mdSortBy: String,
    mdTooltip: String
  },
  data: function data() {
    return {
      sortType: null,
      sorted: false,
      parentTable: {}
    };
  },

  computed: {
    classes: function classes() {
      var matchSort = this.hasMatchSort();

      if (!matchSort) {
        this.sorted = false;
      }

      return {
        'md-numeric': this.mdNumeric,
        'md-sortable': this.mdSortBy,
        'md-sorted': matchSort && this.sorted,
        'md-sorted-descending': matchSort && this.sortType === 'desc'
      };
    }
  },
  methods: {
    hasMatchSort: function hasMatchSort() {
      return this.parentTable.sortBy === this.mdSortBy;
    },
    changeSort: function changeSort() {
      if (this.mdSortBy) {
        if (this.sortType === 'asc' && this.sorted) {
          this.sortType = 'desc';
        } else {
          this.sortType = 'asc';
        }

        this.sorted = true;

        this.parentTable.sortType = this.sortType;
        this.parentTable.emitSort(this.mdSortBy);
      }
    },
    initSort: function initSort() {
      if (this.hasMatchSort()) {
        this.sorted = true;
        this.sortType = this.parentTable.sortType;
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.parentTable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table');
    this.initSort();
    this.parentTable.$on('sortInput', (function () {
      _this.initSort();
    }));
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
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
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-pagination',
  props: {
    mdSize: {
      type: [Number, String],
      default: 10
    },
    mdPageOptions: [Array, Boolean],
    mdPage: {
      type: [Number, String],
      default: 1
    },
    mdTotal: {
      type: [Number, String],
      default: 'Many'
    },
    mdLabel: {
      type: String,
      default: 'Rows per page'
    },
    mdSeparator: {
      type: String,
      default: 'of'
    }
  },
  data: function data() {
    return {
      subTotal: 0,
      totalItems: 0,
      currentPage: 1,
      currentSize: 0
    };
  },

  watch: {
    mdTotal: function mdTotal(val) {
      this.totalItems = isNaN(val) ? Number.MAX_SAFE_INTEGER : parseInt(val, 10);
    },
    mdSize: function mdSize(val) {
      this.currentSize = parseInt(val, 10);
    },
    mdPage: function mdPage(val) {
      this.currentPage = parseInt(val, 10);
    }
  },
  computed: {
    lastPage: function lastPage() {
      return false;
    },
    shouldDisable: function shouldDisable() {
      return this.currentSize * this.currentPage >= this.totalItems;
    }
  },
  methods: {
    emitPaginationEvent: function emitPaginationEvent() {
      if (this.canFireEvents) {
        var sub = this.currentPage * this.currentSize;

        this.subTotal = sub > this.mdTotal ? this.mdTotal : sub;
        this.$emit('pagination', {
          size: this.currentSize,
          page: this.currentPage
        });
      }
    },
    changeSize: function changeSize() {
      if (this.canFireEvents) {
        this.$emit('size', this.currentSize);
        this.emitPaginationEvent();
      }
    },
    previousPage: function previousPage() {
      if (this.canFireEvents) {
        this.currentPage--;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    },
    nextPage: function nextPage() {
      if (this.canFireEvents) {
        this.currentPage++;
        this.$emit('page', this.currentPage);
        this.emitPaginationEvent();
      }
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick((function () {
      _this.subTotal = _this.currentPage * _this.currentSize;
      _this.mdPageOptions = _this.mdPageOptions || [10, 25, 50, 100];
      _this.currentSize = _this.mdPageOptions[0];
      _this.canFireEvents = true;
    }));
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__ = __webpack_require__(3);
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



var transitionClass = 'md-transition-off';

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'md-table-row',
  props: {
    mdAutoSelect: Boolean,
    mdSelection: Boolean,
    mdItem: Object
  },
  data: function data() {
    return {
      parentTable: {},
      headRow: false,
      checkbox: false,
      index: 0
    };
  },

  computed: {
    isDisabled: function isDisabled() {
      return !this.mdSelection && !this.headRow;
    },
    hasSelection: function hasSelection() {
      return this.mdSelection || this.headRow && this.parentTable.hasRowSelection;
    },
    classes: function classes() {
      return {
        'md-selected': this.checkbox
      };
    }
  },
  watch: {
    mdItem: function mdItem(newValue, oldValue) {
      this.parentTable.data[this.index] = this.mdItem;
      this.handleMultipleSelection(newValue === oldValue);
    }
  },
  methods: {
    setSelectedRow: function setSelectedRow(value, index) {
      if (value) {
        this.parentTable.selectedRows[index] = this.parentTable.data[index];
        ++this.parentTable.numberOfSelected;
      } else {
        delete this.parentTable.selectedRows[index];
        --this.parentTable.numberOfSelected;
      }
    },
    handleSingleSelection: function handleSingleSelection(value) {
      this.setSelectedRow(value, this.index - 1);
      this.parentTable.$children[0].checkbox = this.parentTable.numberOfSelected === this.parentTable.numberOfRows;
    },
    handleMultipleSelection: function handleMultipleSelection(value) {
      var _this = this;

      if (this.parentTable.numberOfRows > 25) {
        this.parentTable.$el.classList.add(transitionClass);
      }

      this.parentTable.$children.forEach((function (row, index) {
        row.checkbox = value;

        if (!row.headRow) {
          _this.setSelectedRow(value, index - 1);
        }
      }));

      if (value) {
        this.parentTable.numberOfSelected = this.parentTable.numberOfRows;
      } else {
        this.parentTable.numberOfSelected = 0;
      }

      window.setTimeout((function () {
        return _this.parentTable.$el.classList.remove(transitionClass);
      }));
    },
    select: function select(value) {
      if (this.hasSelection) {
        if (this.headRow) {
          this.handleMultipleSelection(value);
        } else {
          this.handleSingleSelection(value);
        }

        this.parentTable.emitSelection();
      }
    },
    autoSelect: function autoSelect() {
      if (this.mdAutoSelect && this.hasSelection) {
        this.checkbox = !this.checkbox;
        this.handleSingleSelection(this.checkbox);
        this.parentTable.emitSelection();
      }
    }
  },
  mounted: function mounted() {
    this.parentTable = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__core_utils_getClosestVueParent__["a" /* default */])(this.$parent, 'md-table');

    if (this.$el.parentNode.tagName.toLowerCase() === 'thead') {
      this.headRow = true;
    } else {
      this.parentTable.numberOfRows++;
      this.index = this.parentTable.numberOfRows;

      if (this.mdSelection) {
        this.parentTable.hasRowSelection = true;
      }

      if (this.mdItem) {
        this.parentTable.data.push(this.mdItem);
      }
    }
  }
});
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 176:
/***/ (function(module, exports) {

module.exports = ".THEME_NAME.md-table-card .md-toolbar {\n  background-color: BACKGROUND-COLOR;\n  color: BACKGROUND-CONTRAST; }\n\n.THEME_NAME.md-table-alternate-header {\n  background-color: BACKGROUND-COLOR; }\n  .THEME_NAME.md-table-alternate-header .md-toolbar {\n    background-color: ACCENT-COLOR-A100-0.2;\n    color: ACCENT-CONTRAST-A100; }\n  .THEME_NAME.md-table-alternate-header .md-counter {\n    color: ACCENT-COLOR; }\n"

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

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(123)

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(104),
  /* template */
  __webpack_require__(256),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTable.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTable.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0cf99074", Component.options)
  } else {
    hotAPI.reload("data-v-0cf99074", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 235:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(105),
  /* template */
  __webpack_require__(295),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableAlternateHeader.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableAlternateHeader.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6215c943", Component.options)
  } else {
    hotAPI.reload("data-v-6215c943", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(106),
  /* template */
  __webpack_require__(251),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableCard.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableCard.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-059419a4", Component.options)
  } else {
    hotAPI.reload("data-v-059419a4", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(107),
  /* template */
  __webpack_require__(292),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableCell.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableCell.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-613ea214", Component.options)
  } else {
    hotAPI.reload("data-v-613ea214", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(108),
  /* template */
  __webpack_require__(298),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableEdit.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableEdit.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-658eff9e", Component.options)
  } else {
    hotAPI.reload("data-v-658eff9e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(109),
  /* template */
  __webpack_require__(302),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableHead.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableHead.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-78def718", Component.options)
  } else {
    hotAPI.reload("data-v-78def718", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(110),
  /* template */
  __webpack_require__(253),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTablePagination.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTablePagination.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-09f9942e", Component.options)
  } else {
    hotAPI.reload("data-v-09f9942e", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(1)(
  /* script */
  __webpack_require__(111),
  /* template */
  __webpack_require__(282),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "/home/luis/apps/vue-material/src/components/mdTable/mdTableRow.vue"
if (Component.esModule && Object.keys(Component.esModule).some((function (key) {return key !== "default" && key !== "__esModule"}))) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] mdTableRow.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4a848bf6", Component.options)
  } else {
    hotAPI.reload("data-v-4a848bf6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 251:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('md-card', {
    staticClass: "md-table-card",
    class: [_vm.themeClass]
  }, [_vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-059419a4", module.exports)
  }
}

/***/ }),

/***/ 253:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-pagination"
  }, [_c('span', {
    staticClass: "md-table-pagination-label"
  }, [_vm._v(_vm._s(_vm.mdLabel) + ":")]), _vm._v(" "), (_vm.mdPageOptions) ? _c('md-select', {
    attrs: {
      "md-menu-class": "md-pagination-select"
    },
    on: {
      "change": _vm.changeSize
    },
    model: {
      value: (_vm.currentSize),
      callback: function($$v) {
        _vm.currentSize = $$v
      },
      expression: "currentSize"
    }
  }, _vm._l((_vm.mdPageOptions), (function(amount) {
    return _c('md-option', {
      attrs: {
        "value": amount
      }
    }, [_vm._v(_vm._s(amount))])
  }))) : _vm._e(), _vm._v(" "), _c('span', [_vm._v(_vm._s(((_vm.currentPage - 1) * _vm.currentSize) + 1) + "-" + _vm._s(_vm.subTotal) + " " + _vm._s(_vm.mdSeparator) + " " + _vm._s(_vm.mdTotal))]), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-previous",
    attrs: {
      "disabled": _vm.currentPage === 1
    },
    nativeOn: {
      "click": function($event) {
        _vm.previousPage($event)
      }
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_left")])], 1), _vm._v(" "), _c('md-button', {
    staticClass: "md-icon-button md-table-pagination-next",
    attrs: {
      "disabled": _vm.shouldDisable
    },
    nativeOn: {
      "click": function($event) {
        _vm.nextPage($event)
      }
    }
  }, [_c('md-icon', [_vm._v("keyboard_arrow_right")])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-09f9942e", module.exports)
  }
}

/***/ }),

/***/ 256:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table",
    class: [_vm.themeClass]
  }, [_c('table', [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-0cf99074", module.exports)
  }
}

/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('tr', {
    staticClass: "md-table-row",
    class: _vm.classes,
    on: {
      "click": _vm.autoSelect
    }
  }, [(_vm.hasSelection) ? _c('md-table-cell', {
    staticClass: "md-table-selection"
  }, [_c('md-checkbox', {
    attrs: {
      "disabled": _vm.isDisabled
    },
    on: {
      "change": _vm.select
    },
    model: {
      value: (_vm.checkbox),
      callback: function($$v) {
        _vm.checkbox = $$v
      },
      expression: "checkbox"
    }
  })], 1) : _vm._e(), _vm._v(" "), _vm._t("default")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-4a848bf6", module.exports)
  }
}

/***/ }),

/***/ 292:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('td', {
    staticClass: "md-table-cell",
    class: _vm.classes
  }, [_c('div', {
    staticClass: "md-table-cell-container"
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-613ea214", module.exports)
  }
}

/***/ }),

/***/ 295:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-alternate-header",
    class: [_vm.themeClass, _vm.classes]
  }, [_c('md-toolbar', [_c('div', {
    staticClass: "md-counter"
  }, [_c('span', {
    ref: "counter"
  }, [_vm._v(_vm._s(_vm.tableInstance.numberOfSelected))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(_vm.mdSelectedLabel))])]), _vm._v(" "), _vm._t("default")], 2)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6215c943", module.exports)
  }
}

/***/ }),

/***/ 298:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "md-table-edit",
    on: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "esc", 27)) { return null; }
        _vm.closeDialog($event)
      }
    }
  }, [_c('div', {
    staticClass: "md-table-edit-trigger",
    class: _vm.triggerClasses,
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.openDialog($event)
      }
    }
  }, [_vm._v("\n    " + _vm._s(_vm.value || _vm.mdPlaceholder) + "\n  ")]), _vm._v(" "), _c('div', {
    ref: "dialog",
    staticClass: "md-table-dialog",
    class: _vm.dialogClasses
  }, [_c('md-input-container', [_c('md-input', {
    ref: "input",
    attrs: {
      "id": _vm.mdId,
      "name": _vm.mdName,
      "maxlength": _vm.mdMaxlength,
      "value": _vm.value,
      "placeholder": _vm.mdPlaceholder
    },
    nativeOn: {
      "keydown": function($event) {
        if (!('button' in $event) && _vm._k($event.keyCode, "enter", 13)) { return null; }
        _vm.confirmDialog($event)
      }
    }
  })], 1)], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-658eff9e", module.exports)
  }
}

/***/ }),

/***/ 3:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var getClosestVueParent = function getClosestVueParent($parent, cssClass) {
  if (!$parent || !$parent.$el) {
    return false;
  }

  if ($parent._uid === 0) {
    return false;
  }

  if ($parent.$el.classList.contains(cssClass)) {
    return $parent;
  }

  return getClosestVueParent($parent.$parent, cssClass);
};

/* harmony default export */ __webpack_exports__["a"] = (getClosestVueParent);
module.exports = exports["default"];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ }),

/***/ 302:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('th', {
    staticClass: "md-table-head",
    class: _vm.classes,
    on: {
      "click": _vm.changeSort
    }
  }, [_c('div', {
    staticClass: "md-table-head-container"
  }, [_c('div', {
    staticClass: "md-table-head-text md-test"
  }, [(_vm.mdSortBy) ? _c('md-icon', {
    staticClass: "md-sortable-icon"
  }, [_vm._v("arrow_upward")]) : _vm._e(), _vm._v(" "), _vm._t("default"), _vm._v(" "), (_vm.mdTooltip) ? _c('md-tooltip', [_vm._v(_vm._s(_vm.mdTooltip))]) : _vm._e()], 2), _vm._v(" "), _c('md-ink-ripple', {
    attrs: {
      "md-disabled": !_vm.mdSortBy
    }
  })], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-78def718", module.exports)
  }
}

/***/ }),

/***/ 343:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(35);


/***/ }),

/***/ 35:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTable_vue__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mdTable_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__mdTable_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdTable_theme__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mdTable_theme___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__mdTable_theme__);
/* harmony export (immutable) */ __webpack_exports__["default"] = install;










function install(Vue) {
  Vue.component('md-table', __WEBPACK_IMPORTED_MODULE_0__mdTable_vue___default.a);
  Vue.component('md-table-header', {
    functional: true,
    render: function render(h, scope) {
      return h('thead', {
        staticClass: 'md-table-header'
      }, scope.children);
    }
  });
  Vue.component('md-table-body', {
    functional: true,
    render: function render(h, scope) {
      return h('tbody', {
        staticClass: 'md-table-body'
      }, scope.children);
    }
  });
  Vue.component('md-table-row', __WEBPACK_IMPORTED_MODULE_1__mdTableRow_vue___default.a);
  Vue.component('md-table-head', __WEBPACK_IMPORTED_MODULE_2__mdTableHead_vue___default.a);
  Vue.component('md-table-cell', __WEBPACK_IMPORTED_MODULE_3__mdTableCell_vue___default.a);
  Vue.component('md-table-edit', __WEBPACK_IMPORTED_MODULE_4__mdTableEdit_vue___default.a);
  Vue.component('md-table-card', __WEBPACK_IMPORTED_MODULE_5__mdTableCard_vue___default.a);
  Vue.component('md-table-pagination', __WEBPACK_IMPORTED_MODULE_7__mdTablePagination_vue___default.a);
  Vue.component('md-table-alternate-header', __WEBPACK_IMPORTED_MODULE_6__mdTableAlternateHeader_vue___default.a);

  Vue.material.styles.push(__WEBPACK_IMPORTED_MODULE_8__mdTable_theme___default.a);
}
module.exports = exports['default'];
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(0)(module)))

/***/ })

/******/ });
}));