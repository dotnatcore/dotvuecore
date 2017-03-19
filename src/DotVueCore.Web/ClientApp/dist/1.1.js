exports.ids = [1];
exports.modules = Array(23).concat([
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Error404": 24,
		"./Error404.vue": 24,
		"./layout/leftdrawer": 28,
		"./layout/leftdrawer.vue": 28,
		"./layout/rightdrawer": 36,
		"./layout/rightdrawer.vue": 36,
		"./layout/toolbar": 41,
		"./layout/toolbar.vue": 41,
		"./views/auth/login": 46,
		"./views/auth/login.vue": 46,
		"./views/auth/logout": 51,
		"./views/auth/logout.vue": 51,
		"./views/auth/register": 56,
		"./views/auth/register.vue": 56,
		"./views/home/cardAniversariosPorMes": 61,
		"./views/home/cardAniversariosPorMes.vue": 61,
		"./views/home/cardCadastrosPorMes": 68,
		"./views/home/cardCadastrosPorMes.vue": 68,
		"./views/home/cardPessoasPorBairro": 73,
		"./views/home/cardPessoasPorBairro.vue": 73,
		"./views/home/cardTotal": 78,
		"./views/home/cardTotal.vue": 78,
		"./views/home/home": 84,
		"./views/home/home.vue": 84,
		"./views/questiontype/questiontype": 89,
		"./views/questiontype/questiontype.vue": 89,
		"./views/user/user": 94,
		"./views/user/user.vue": 94
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 23;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(26),
	  /* template */
	  __webpack_require__(27),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\Error404.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] Error404.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 25 */,
/* 26 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  data: function data() {
	    return {
	      canGoBack: window.history.length > 1
	    };
	  },
	
	  methods: {
	    goBack: function goBack() {
	      window.history.go(-1);
	    }
	  }
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "error-page window-height window-width bg-light column items-center"
	  }, [_c('div', {
	    staticClass: "error-code bg-primary flex items-center justify-center"
	  }, [_vm._v("\n    404\n  ")]), _vm._v(" "), _c('div', [_c('div', {
	    staticClass: "error-card card bg-white column items-center justify-center"
	  }, [_c('i', {
	    staticClass: "text-grey-5"
	  }, [_vm._v("error_outline")]), _vm._v(" "), _c('p', {
	    staticClass: "caption text-center"
	  }, [_vm._v("Oops. Nothing here...")]), _vm._v(" "), _c('p', {
	    staticClass: "text-center group"
	  }, [(_vm.canGoBack) ? _c('button', {
	    staticClass: "grey push small",
	    on: {
	      "click": _vm.goBack
	    }
	  }, [_c('i', {
	    staticClass: "on-left"
	  }, [_vm._v("keyboard_arrow_left")]), _vm._v("\n          Go back\n        ")]) : _vm._e(), _vm._v(" "), _c('router-link', {
	    attrs: {
	      "to": "/"
	    }
	  }, [_c('button', {
	    staticClass: "grey push small"
	  }, [_vm._v("\n            Go home\n            "), _c('i', {
	    staticClass: "on-right"
	  }, [_vm._v("home")])])])], 1)])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(47)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(49),
	  /* template */
	  __webpack_require__(50),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\auth\\login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(48);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("56e85869", content, false);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"login.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(8);
	
	exports.default = {
	    name: "login",
	    data: function data() {
	        return {
	            credentials: {
	                email: 'rto@rto.com',
	                password: '12345678'
	            }
	        };
	    },
	    methods: {
	        userLogin: function userLogin() {
	            var _this = this;
	
	            this.$store.dispatch('authenticateUser', this.credentials).then(function (res) {
	                _this.loading = false;
	                _this.$router.push({
	                    name: 'home',
	                    params: {}
	                });
	            }).catch(function (res) {
	                _this.loading = false;
	                _this.errors = res.errors;
	            });
	        }
	    }
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Login\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-view layout-padding"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("mail")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.email),
	      expression: "credentials.email"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "placeholder": "Your email"
	    },
	    domProps: {
	      "value": (_vm.credentials.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.email = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Email")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("vpn_key")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.password),
	      expression: "credentials.password"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "type": "password",
	      "required": "",
	      "placeholder": "Your password"
	    },
	    domProps: {
	      "value": (_vm.credentials.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Password")])])])])]), _vm._v(" "), _c('button', {
	    staticClass: "primary full-width",
	    on: {
	      "click": function($event) {
	        _vm.userLogin()
	      }
	    }
	  }, [_vm._v("Login")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(52)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(54),
	  /* template */
	  __webpack_require__(55),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\auth\\logout.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] logout.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(53);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("70afaea7", content, false);

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"logout.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends2 = __webpack_require__(13);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _vuex = __webpack_require__(8);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'logout',
	    data: function data() {
	        return {};
	    },
	    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['deauthenticateUser'])),
	    mounted: function mounted() {
	        this.deauthenticateUser();
	        this.$router.push({
	            name: 'login'
	        });
	    }
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    attrs: {
	      "id": "logout"
	    }
	  })
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(57)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(59),
	  /* template */
	  __webpack_require__(60),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\auth\\register.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(58);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("21a2b96c", content, false);

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"register.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 59 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = {
	    name: "register",
	    data: function data() {
	        return {
	            credentials: {
	                name: '',
	                email: '',
	                password: ''
	            }
	        };
	    },
	    methods: {
	        submit: function submit() {
	            var credentials = {
	                name: this.credentials.name,
	                email: this.credentials.email,
	                password: this.credentials.password
	            };
	            auth.signup(this, credentials, 'jokes');
	        }
	    }
	};

/***/ },
/* 60 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Register\r\n      ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-view layout-padding"
	  }, [_c('div', {
	    staticClass: "list"
	  }, [_c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("face")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.name),
	      expression: "credentials.name"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "placeholder": "Your name"
	    },
	    domProps: {
	      "value": (_vm.credentials.name)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.name = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Name")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("mail")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.email),
	      expression: "credentials.email"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "required": "",
	      "placeholder": "Your email"
	    },
	    domProps: {
	      "value": (_vm.credentials.email)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.email = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Email")])])])]), _vm._v(" "), _c('hr'), _vm._v(" "), _c('div', {
	    staticClass: "item three-lines"
	  }, [_c('i', {
	    staticClass: "item-primary"
	  }, [_vm._v("vpn_key")]), _vm._v(" "), _c('div', {
	    staticClass: "item-content"
	  }, [_c('div', {
	    staticClass: "stacked-label"
	  }, [_c('input', {
	    directives: [{
	      name: "model",
	      rawName: "v-model",
	      value: (_vm.credentials.password),
	      expression: "credentials.password"
	    }],
	    staticClass: "full-width",
	    attrs: {
	      "type": "password",
	      "required": "",
	      "placeholder": "Your password"
	    },
	    domProps: {
	      "value": (_vm.credentials.password)
	    },
	    on: {
	      "input": function($event) {
	        if ($event.target.composing) { return; }
	        _vm.credentials.password = $event.target.value
	      }
	    }
	  }), _vm._v(" "), _c('label', [_vm._v("Password")])])])])]), _vm._v(" "), _c('button', {
	    staticClass: "primary full-width",
	    on: {
	      "click": function($event) {
	        _vm.submit()
	      }
	    }
	  }, [_vm._v("Register")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(62)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(64),
	  /* template */
	  __webpack_require__(67),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\home\\cardAniversariosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardAniversariosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(63);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("0a53c808", content, false);

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardAniversariosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(65);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _chart = __webpack_require__(66);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getBairrosAgrupados();
	  },
	
	  computed: {
	    nomeBairros: function nomeBairros() {
	      var bairros = [];
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = (0, _getIterator3.default)((0, _keys2.default)(this.bairrosAgrupados)), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var item = _step.value;
	
	          bairros.push(format(new Date(item), 'MMM', { locale: ptLocale }));
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	
	      return bairros;
	    },
	    valoresPorBairro: function valoresPorBairro() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.bairrosAgrupados).map(function (key) {
	        return _this.bairrosAgrupados[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        labels: this.nomeBairros,
	        datasets: [{
	          data: this.valoresPorBairro,
	          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)', 'rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
	          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
	        }]
	      };
	    }
	  },
	  watch: {
	    bairrosAgrupados: function bairrosAgrupados() {
	      this.criarChart();
	    },
	    tipoGrafico: function tipoGrafico() {
	      this.chart.destroy();
	      this.criarChart();
	    }
	  },
	  data: function data() {
	    return {
	      bairrosAgrupados: {},
	      tipoGrafico: 'bar',
	      chart: ''
	    };
	  },
	
	  methods: {
	    getBairrosAgrupados: function getBairrosAgrupados() {
	      var vm = this;
	      vm.$http.get('/relatorio/aniversariantes-mes').then(function (response) {
	        vm.bairrosAgrupados = response.data;
	      });
	    },
	    criarChart: function criarChart() {
	      var ctx = document.getElementById("aniversarios-mes");
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    }
	  }
	};

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 66 */
/***/ function(module, exports) {

	module.exports = require("chart.js");

/***/ },
/* 67 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Quantidade de Aniversariantes por mês\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'bar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-bar"
	  })]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'horizontalBar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-timeline"
	  })])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content"
	  }, [_c('canvas', {
	    attrs: {
	      "id": "aniversarios-mes"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(69)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(71),
	  /* template */
	  __webpack_require__(72),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\home\\cardCadastrosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardCadastrosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(70);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("6dc53c51", content, false);

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardCadastrosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(66);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getTotalAgrupadoPorMesNoAnoEscolhido();
	  },
	
	  computed: {
	    nomeMeses: function nomeMeses() {
	      return (0, _keys2.default)(this.totalAgrupadoPorMes);
	    },
	    valoresAgrupados: function valoresAgrupados() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.totalAgrupadoPorMes).map(function (key) {
	        return _this.totalAgrupadoPorMes[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        chart: '',
	        labels: this.nomeMeses,
	        datasets: [{
	          data: this.valoresAgrupados,
	          fill: false,
	          lineTension: 0.1,
	          backgroundColor: "rgba(75,192,192, 1)",
	          borderColor: "rgba(75,192,192,1)",
	          pointHitRadius: 10
	        }]
	      };
	    }
	  },
	  watch: {
	    totalAgrupadoPorMes: function totalAgrupadoPorMes() {
	      this.criarChart();
	    },
	    ano: function ano() {
	      this.getTotalAgrupadoPorMesNoAnoEscolhido();
	      this.chart.destroy();
	
	      this.criarChart();
	    }
	  },
	  data: function data() {
	    return {
	      ano: '2016',
	      totalAgrupadoPorMes: {}
	    };
	  },
	
	  methods: {
	    getTotalAgrupadoPorMesNoAnoEscolhido: function getTotalAgrupadoPorMesNoAnoEscolhido() {
	      var vm = this;
	      vm.$http.get('pessoas/total-cadastro-agrupado-mes-por-ano/' + this.ano).then(function (response) {
	        vm.totalAgrupadoPorMes = response.data;
	      });
	    },
	    criarChart: function criarChart() {
	      var ctx = document.getElementById("cadastros-mes");
	      this.chart = new _chart2.default(ctx, {
	        type: 'line',
	        data: this.dados
	      });
	    }
	  }
	};

/***/ },
/* 72 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Cadastros por mês no ano escolhido - " + _vm._s(_vm.ano) + "\n\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.ano = '2016'
	      }
	    }
	  }, [_vm._v("2016")]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.ano = '2017'
	      }
	    }
	  }, [_vm._v("2017")])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content "
	  }, [_c('canvas', {
	    attrs: {
	      "id": "cadastros-mes"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(74)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(77),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\home\\cardPessoasPorBairro.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardPessoasPorBairro.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("2da740c3", content, false);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardPessoasPorBairro.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(66);
	
	var _chart2 = _interopRequireDefault(_chart);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  mounted: function mounted() {
	    this.getBairrosAgrupados();
	  },
	
	  computed: {
	    nomeBairros: function nomeBairros() {
	      return (0, _keys2.default)(this.bairrosAgrupados);
	    },
	    valoresPorBairro: function valoresPorBairro() {
	      var _this = this;
	
	      return (0, _keys2.default)(this.bairrosAgrupados).map(function (key) {
	        return _this.bairrosAgrupados[key];
	      });
	    },
	    dados: function dados() {
	      return {
	        labels: this.nomeBairros,
	        datasets: [{
	          data: this.valoresPorBairro,
	          backgroundColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
	          borderColor: ['rgba(255,99,132,1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)', 'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)']
	        }]
	      };
	    }
	  },
	  watch: {
	    bairrosAgrupados: function bairrosAgrupados() {
	      var ctx = document.getElementById("pessoas-bairro");
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    },
	    tipoGrafico: function tipoGrafico() {
	      var ctx = document.getElementById("pessoas-bairro");
	      this.chart.destroy();
	      this.chart = new _chart2.default(ctx, {
	        type: this.tipoGrafico,
	        data: this.dados
	      });
	    }
	  },
	  data: function data() {
	    return {
	      bairrosAgrupados: {},
	      tipoGrafico: 'horizontalBar',
	      chart: ''
	    };
	  },
	
	  methods: {
	    getBairrosAgrupados: function getBairrosAgrupados() {
	      var vm = this;
	      vm.$http.get('/endereco/bairros-agrupados').then(function (response) {
	        vm.bairrosAgrupados = response.data;
	      });
	    }
	  }
	};

/***/ },
/* 77 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card bg-white animate-scale "
	  }, [_c('div', {
	    staticClass: "card-title bg-blue text-white"
	  }, [_vm._v("\n    Quantidade de pessoas por bairro\n    "), _c('q-fab', {
	    staticClass: "float-right",
	    attrs: {
	      "icon": "keyboard_arrow_left",
	      "direction": "left",
	      "classNames": "teal"
	    }
	  }, [_c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'bar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-bar"
	  })]), _vm._v(" "), _c('q-small-fab', {
	    staticClass: "teal",
	    attrs: {
	      "icon": ""
	    },
	    nativeOn: {
	      "click": function($event) {
	        _vm.tipoGrafico = 'horizontalBar'
	      }
	    }
	  }, [_c('i', {
	    staticClass: "mdi mdi-chart-timeline"
	  })])], 1)], 1), _vm._v(" "), _vm._m(0)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card-content"
	  }, [_c('canvas', {
	    attrs: {
	      "id": "pessoas-bairro"
	    }
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(79)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(81),
	  /* template */
	  __webpack_require__(83),
	  /* scopeId */
	  "data-v-1f2b6251",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\home\\cardTotal.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardTotal.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("77895cf2", content, false);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\ni[data-v-1f2b6251] {\n  font-size: 54px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/home/cardTotal.vue?63b0e460"],"names":[],"mappings":";AAyCA;EACA,gBAAA;CACA","file":"cardTotal.vue","sourcesContent":["<template>\r\n  <div class=\"card text-white animate-scale\" :class=\"backgroundColor\">\r\n    <div class=\"card-content \">\r\n      <div class=\"row\">\r\n        <div class=\"width-1of3\">\r\n          <i>people</i>\r\n        </div>\r\n        <div class=\"width-2of3\">\r\n          <p class=\"text-italic \">{{title}}</p>\r\n          <h5>\r\n            <i-count-up\r\n              :start=\"0\"\r\n              :end=\"total\"\r\n              :decimals=\"0\"\r\n              :duration=\"2.5\"\r\n              :options=\"options\"\r\n            ></i-count-up>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import ICountUp from 'vue-countup-v2'\r\n  export default {\r\n    props: ['title', 'total', 'backgroundColor'],\r\n    data () {\r\n      return {\r\n        options: {\r\n          separator: '.'\r\n        }\r\n      }\r\n    },\r\n    components: {\r\n      ICountUp\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  i {\r\n    font-size: 54px;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueCountupV = __webpack_require__(82);
	
	var _vueCountupV2 = _interopRequireDefault(_vueCountupV);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	  props: ['title', 'total', 'backgroundColor'],
	  data: function data() {
	    return {
	      options: {
	        separator: '.'
	      }
	    };
	  },
	
	  components: {
	    ICountUp: _vueCountupV2.default
	  }
	};

/***/ },
/* 82 */
/***/ function(module, exports) {

	module.exports = require("vue-countup-v2");

/***/ },
/* 83 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "card text-white animate-scale",
	    class: _vm.backgroundColor
	  }, [_c('div', {
	    staticClass: "card-content "
	  }, [_c('div', {
	    staticClass: "row"
	  }, [_vm._m(0), _vm._v(" "), _c('div', {
	    staticClass: "width-2of3"
	  }, [_c('p', {
	    staticClass: "text-italic "
	  }, [_vm._v(_vm._s(_vm.title))]), _vm._v(" "), _c('h5', [_c('i-count-up', {
	    attrs: {
	      "start": 0,
	      "end": _vm.total,
	      "decimals": 0,
	      "duration": 2.5,
	      "options": _vm.options
	    }
	  })], 1)])])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "width-1of3"
	  }, [_c('i', [_vm._v("people")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(85)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(87),
	  /* template */
	  __webpack_require__(88),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\home\\home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(86);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("33eea1d8", content, false);

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cardTotal = __webpack_require__(78);
	
	var _cardTotal2 = _interopRequireDefault(_cardTotal);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = {
	    name: 'Home',
	    mounted: function mounted() {},
	    data: function data() {
	        return {
	            totalPosts: 0,
	            totalComments: 0,
	            totalTodos: 0
	        };
	    },
	
	    computed: {
	        dataForGraph: function dataForGraph() {
	            return {
	                posts: this.totalPosts,
	                todos: this.totalTodos,
	                comments: this.totalComments
	            };
	        }
	    },
	    components: {
	        cardTotal: _cardTotal2.default
	    },
	    methods: {}
	};

/***/ },
/* 88 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Home\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Total Posts",
	      "background-color": "bg-teal-8",
	      "total": _vm.totalPosts
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Total comments",
	      "background-color": "bg-teal-8",
	      "total": _vm.totalComments
	    }
	  })], 1), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  }, [_c('cardTotal', {
	    attrs: {
	      "title": "Static total",
	      "background-color": "bg-teal-8",
	      "total": 50004
	    }
	  })], 1)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _vm._m(2)])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "width-1of2"
	  }), _vm._v(" "), _c('div', {
	    staticClass: "auto"
	  })])
	},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex wrap gutter"
	  }, [_c('div', {
	    staticClass: "width-4of5 sm-auto"
	  })])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(90)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(92),
	  /* template */
	  __webpack_require__(93),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\questiontype\\questiontype.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] questiontype.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("066783fc", content, false);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"questiontype.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(8);
	
	var _quasarFramework = __webpack_require__(4);
	
	exports.default = {
	    name: "questiontype",
	    data: function data() {
	        return {
	            config: {
	                title: 'Question Types',
	                refresh: true,
	                columnPicker: true,
	                leftStickyColumns: 1,
	                rightStickyColumns: 2,
	                bodyStyle: {
	                    maxHeight: _quasarFramework.Platform.is.mobile ? '50vh' : '500px'
	                },
	                rowHeight: '50px',
	                responsive: true,
	                pagination: {
	                    rowsPerPage: 15,
	                    options: [5, 10, 15, 30, 50, 500]
	                },
	                selection: 'single',
	                messages: {
	                    noData: '<i>warning</i> No data available to show.',
	                    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
	                }
	            },
	            columns: [{
	                label: 'Id',
	                field: 'QuestionTypeId',
	                width: '20%',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Name',
	                field: 'QuestionTypeName',
	                width: '40%',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Created Date',
	                field: 'CreatedDate',
	                width: '40%',
	                filter: true,
	                sort: 'date',
	                format: function format(value) {
	                    return new Date(value).toLocaleString();
	                }
	            }],
	
	            pagination: true,
	            rowHeight: 50,
	            bodyHeightProp: 'maxHeight',
	            bodyHeight: 500
	        };
	    },
	
	    watch: {
	        pagination: function pagination(value) {
	            if (!value) {
	                this.oldPagination = _quasarFramework.Utils.clone(this.config.pagination);
	                this.config.pagination = false;
	                return;
	            }
	
	            this.config.pagination = this.oldPagination;
	        },
	        rowHeight: function rowHeight(value) {
	            this.config.rowHeight = value + 'px';
	        },
	        bodyHeight: function bodyHeight(value) {
	            var style = {};
	            if (this.bodyHeightProp !== 'auto') {
	                style[this.bodyHeightProp] = value + 'px';
	            }
	            this.config.bodyStyle = style;
	        },
	        bodyHeightProp: function bodyHeightProp(value) {
	            var style = {};
	            if (value !== 'auto') {
	                style[value] = this.bodyHeight + 'px';
	            }
	            this.config.bodyStyle = style;
	        }
	    },
	    mounted: function mounted() {
	        this.getAllQuestionTypes();
	    },
	    computed: (0, _vuex.mapGetters)(['questiontypes']),
	    methods: (0, _vuex.mapActions)(['getAllQuestionTypes'])
	};

/***/ },
/* 93 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" Question Type\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('q-data-table', {
	    attrs: {
	      "data": _vm.questiontypes,
	      "config": _vm.config,
	      "columns": _vm.columns
	    },
	    scopedSlots: _vm._u([
	      ["col-source", function(cell) {
	        return [(cell.data === 'Audit') ? _c('span', {
	          staticClass: "label text-white bg-primary"
	        }, [_vm._v("\r\n                        Audit\r\n                        "), _c('q-tooltip', [_vm._v("Some tooltip")])], 1) : _c('span', {
	          staticClass: "label text-white bg-negative"
	        }, [_vm._v(_vm._s(cell.data))])]
	      }],
	      ["selection", function(props) {
	        return [_c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.changeMessage(props)
	            }
	          }
	        }, [_c('i', [_vm._v("edit")])]), _vm._v(" "), _c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.deleteRow(props)
	            }
	          }
	        }, [_c('i', [_vm._v("delete")])])]
	      }]
	    ])
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(95)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(97),
	  /* template */
	  __webpack_require__(98),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\github\\vuedotnetcore\\ClientApp\\components\\views\\user\\user.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("7645b35a", content, false);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"user.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(8);
	
	var _quasarFramework = __webpack_require__(4);
	
	exports.default = {
	    name: "user",
	    data: function data() {
	        return {
	            config: {
	                title: 'Users',
	                refresh: true,
	                columnPicker: true,
	                leftStickyColumns: 1,
	                rightStickyColumns: 2,
	                bodyStyle: {
	                    maxHeight: _quasarFramework.Platform.is.mobile ? '50vh' : '500px'
	                },
	                rowHeight: '50px',
	                responsive: true,
	                pagination: {
	                    rowsPerPage: 15,
	                    options: [5, 10, 15, 30, 50, 500]
	                },
	                selection: 'single',
	                messages: {
	                    noData: '<i>warning</i> No data available to show.',
	                    noDataAfterFiltering: '<i>warning</i> No results. Please refine your search terms.'
	                }
	            },
	            columns: [{
	                label: 'Id',
	                field: 'Id',
	                width: '120px',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Firstname',
	                field: 'FirstName',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Lastname',
	                field: 'LastName',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Email',
	                field: 'Email',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Login',
	                field: 'Login',
	                filter: true,
	                sort: true
	            }, {
	                label: 'UserType',
	                field: 'UserTypeId',
	                filter: true,
	                sort: true
	            }, {
	                label: 'Created Date',
	                field: 'CreatedDate',
	                filter: true,
	                sort: 'date',
	                format: function format(value) {
	                    return new Date(value).toLocaleString();
	                }
	            }],
	
	            pagination: true,
	            rowHeight: 50,
	            bodyHeightProp: 'maxHeight',
	            bodyHeight: 500
	        };
	    },
	
	    watch: {
	        pagination: function pagination(value) {
	            if (!value) {
	                this.oldPagination = _quasarFramework.Utils.clone(this.config.pagination);
	                this.config.pagination = false;
	                return;
	            }
	
	            this.config.pagination = this.oldPagination;
	        },
	        rowHeight: function rowHeight(value) {
	            this.config.rowHeight = value + 'px';
	        },
	        bodyHeight: function bodyHeight(value) {
	            var style = {};
	            if (this.bodyHeightProp !== 'auto') {
	                style[this.bodyHeightProp] = value + 'px';
	            }
	            this.config.bodyStyle = style;
	        },
	        bodyHeightProp: function bodyHeightProp(value) {
	            var style = {};
	            if (value !== 'auto') {
	                style[value] = this.bodyHeight + 'px';
	            }
	            this.config.bodyStyle = style;
	        }
	    },
	    mounted: function mounted() {
	        this.getAllUsers();
	    },
	    computed: (0, _vuex.mapGetters)(['users']),
	    methods: (0, _vuex.mapActions)(['getAllUsers'])
	};

/***/ },
/* 98 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "container"
	  }, [_c('div', {
	    staticClass: "toolbar",
	    slot: "header"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_c('button', {
	    directives: [{
	      name: "go-back",
	      rawName: "v-go-back",
	      value: ('/'),
	      expression: "'/'"
	    }]
	  }, [_c('i', [_vm._v("arrow_back")])]), _vm._v(" User\r\n        ")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
	    staticClass: "layout-padding "
	  }, [_c('q-data-table', {
	    attrs: {
	      "data": _vm.users,
	      "config": _vm.config,
	      "columns": _vm.columns
	    },
	    scopedSlots: _vm._u([
	      ["col-source", function(cell) {
	        return [(cell.data === 'Audit') ? _c('span', {
	          staticClass: "label text-white bg-primary"
	        }, [_vm._v("\r\n                        Audit\r\n                        "), _c('q-tooltip', [_vm._v("Some tooltip")])], 1) : _c('span', {
	          staticClass: "label text-white bg-negative"
	        }, [_vm._v(_vm._s(cell.data))])]
	      }],
	      ["selection", function(props) {
	        return [_c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.changeMessage(props)
	            }
	          }
	        }, [_c('i', [_vm._v("edit")])]), _vm._v(" "), _c('button', {
	          staticClass: "primary clear",
	          on: {
	            "click": function($event) {
	              _vm.deleteRow(props)
	            }
	          }
	        }, [_c('i', [_vm._v("delete")])])]
	      }]
	    ])
	  })], 1)])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true

/***/ }
]);;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vRXJyb3I0MDQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZT9iNjdmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlPzMwZmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/ZmVlMSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlP2ViZDYiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZT9kZmJlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZT8wZTU5Iiwid2VicGFjazovLy9sb2dvdXQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZT9lZTk4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlPzM0NzMiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/ZDgxNyIsIndlYnBhY2s6Ly8vcmVnaXN0ZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlPzQyOGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzYwZDciLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZT9lMTY0Iiwid2VicGFjazovLy9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hhcnQuanNcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlP2EzNDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlPzE5Y2QiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZT9jNzk2Iiwid2VicGFjazovLy9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlPzk2MzEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWU/ODMzOSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZT8wNTc2Iiwid2VicGFjazovLy9jYXJkUGVzc29hc1BvckJhaXJyby52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWU/OTc0OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlP2FhZmQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlPzBjNTQiLCJ3ZWJwYWNrOi8vL2NhcmRUb3RhbC52dWUiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwidnVlLWNvdW50dXAtdjJcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWU/NjQ4ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWU/MDUwMSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlP2EyZTAiLCJ3ZWJwYWNrOi8vL2hvbWUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWU/MjM1NyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZT81ODljIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlPzY3ZWEiLCJ3ZWJwYWNrOi8vL3F1ZXN0aW9udHlwZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWU/NjVkZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWU/YTQ4ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlPzAzOGEiLCJ3ZWJwYWNrOi8vL3VzZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWU/NWJmMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWlDLHVEQUF1RDtBQUN4RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ3pDQTtBQUNBO0FBQ0E7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Q0E7eUJBQ0E7dUJBRUE7QUFMQTt3QkFPQTt3QkFDQTt5QkFDQTt1QkFFQTtBQUxBO3dCQU9BO3dCQUNBO3lCQUNBO3VCQUVBO0FBTEE7d0JBT0E7d0JBQ0E7eUJBQ0E7dUJBRUE7QUFMQTt3QkFPQTt3QkFDQTt5QkFDQTt1QkFDQTtnREFDQTs0Q0FDQTtBQUlBO0FBVkE7O3lCQVdBO3dCQUNBOzZCQUNBO3lCQUVBO0FBMUVBO0FBMkVBOzs7Z0RBRUE7eUJBQ0E7K0VBQ0E7MENBQ0E7QUFDQTtBQUVBOzsyQ0FDQTtBQUNBOzhDQUNBOzZDQUNBO0FBQ0E7Z0RBQ0E7eUJBQ0E7aURBQ0E7c0RBQ0E7QUFDQTtxQ0FDQTtBQUNBO3dEQUNBO3lCQUNBO21DQUNBO2tEQUNBO0FBQ0E7cUNBQ0E7QUFFQTtBQTNCQTtpQ0E0QkE7Y0FDQTtBQUNBO3FDQUNBLENBRUE7b0NBQ0EsQ0FFQTtBQW5IQSxHOzs7Ozs7QUMzQ0EsaUJBQWdCLG1CQUFtQixhQUFhLDBCQUEwQjtBQUMxRTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQSxJQUFHO0FBQ0gsRUFBQywrQkFBK0IsYUFBYSwwQkFBMEI7QUFDdkU7QUFDQSxFQUFDO0FBQ0QsMkMiLCJmaWxlIjoiMS4xLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL0Vycm9yNDA0XCI6IDI0LFxuXHRcIi4vRXJyb3I0MDQudnVlXCI6IDI0LFxuXHRcIi4vbGF5b3V0L2xlZnRkcmF3ZXJcIjogMjgsXG5cdFwiLi9sYXlvdXQvbGVmdGRyYXdlci52dWVcIjogMjgsXG5cdFwiLi9sYXlvdXQvcmlnaHRkcmF3ZXJcIjogMzYsXG5cdFwiLi9sYXlvdXQvcmlnaHRkcmF3ZXIudnVlXCI6IDM2LFxuXHRcIi4vbGF5b3V0L3Rvb2xiYXJcIjogNDEsXG5cdFwiLi9sYXlvdXQvdG9vbGJhci52dWVcIjogNDEsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ2luXCI6IDQ2LFxuXHRcIi4vdmlld3MvYXV0aC9sb2dpbi52dWVcIjogNDYsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ291dFwiOiA1MSxcblx0XCIuL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZVwiOiA1MSxcblx0XCIuL3ZpZXdzL2F1dGgvcmVnaXN0ZXJcIjogNTYsXG5cdFwiLi92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVwiOiA1Nixcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lc1wiOiA2MSxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIjogNjEsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXNcIjogNjgsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCI6IDY4LFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyb1wiOiA3Myxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCI6IDczLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkVG90YWxcIjogNzgsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcIjogNzgsXG5cdFwiLi92aWV3cy9ob21lL2hvbWVcIjogODQsXG5cdFwiLi92aWV3cy9ob21lL2hvbWUudnVlXCI6IDg0LFxuXHRcIi4vdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZVwiOiA4OSxcblx0XCIuL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXCI6IDg5LFxuXHRcIi4vdmlld3MvdXNlci91c2VyXCI6IDk0LFxuXHRcIi4vdmlld3MvdXNlci91c2VyLnZ1ZVwiOiA5NFxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyMztcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXJyb3I0MDQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQyNzI0YTdjIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FcnJvcjQwNC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXGdpdGh1YlxcXFx2dWVkb3RuZXRjb3JlXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXEVycm9yNDA0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEVycm9yNDA0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRXJyb3I0MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA0MDRcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJ0ZXh0LWdyZXktNVwiPmVycm9yX291dGxpbmU8L2k+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHRleHQtY2VudGVyXCI+T29wcy4gTm90aGluZyBoZXJlLi4uPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgZ3JvdXBcIj5cclxuICAgICAgICAgIDxidXR0b24gdi1pZj1cImNhbkdvQmFja1wiIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwib24tbGVmdFwiPmtleWJvYXJkX2Fycm93X2xlZnQ8L2k+XHJcbiAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgR28gaG9tZVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwib24tcmlnaHRcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FuR29CYWNrOiB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEVycm9yNDA0LnZ1ZT8xYjU3ZThiMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgNDA0XFxuICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS01XCJcbiAgfSwgW192bS5fdihcImVycm9yX291dGxpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FwdGlvbiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJPb3BzLiBOb3RoaW5nIGhlcmUuLi5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgZ3JvdXBcIlxuICB9LCBbKF92bS5jYW5Hb0JhY2spID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5IHB1c2ggc21hbGxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZ29CYWNrXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib24tbGVmdFwiXG4gIH0sIFtfdm0uX3YoXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICBHbyBiYWNrXFxuICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXkgcHVzaCBzbWFsbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBHbyBob21lXFxuICAgICAgICAgICAgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvbi1yaWdodFwiXG4gIH0sIFtfdm0uX3YoXCJob21lXCIpXSldKV0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDI3MjRhN2MhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xZTAzYTEyZiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWUwM2ExMmYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcZ2l0aHViXFxcXHZ1ZWRvdG5ldGNvcmVcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcYXV0aFxcXFxsb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWUwM2ExMmYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNTZlODU4NjlcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZTAzYTEyZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwibG9naW4udnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFlMDNhMTJmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWdvLWJhY2s9XCInLydcIj5cclxuICAgICAgICAgIDxpPmFycm93X2JhY2s8L2k+XHJcbiAgICAgICAgPC9idXR0b24+IExvZ2luXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj5tYWlsPC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMuZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj52cG5fa2V5PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMucGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBmdWxsLXdpZHRoXCIgQGNsaWNrPVwidXNlckxvZ2luKClcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwibG9naW5cIixcclxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAncnRvQHJ0by5jb20nLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6ICcxMjM0NTY3OCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgdXNlckxvZ2luKCkge1xyXG4gICAgICAgICAgICAvLyBBVVRIIFdJTEwgQkUgQ0FMTEVEIHdpdGggZGF0YVxyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRlVXNlcicsIHRoaXMuY3JlZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gcmVzLmVycm9ycztcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ2luLnZ1ZT8wNzFjYWU2YiIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIixcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygncS10b29sYmFyLXRpdGxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZGRpbmdcIjogMVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiZ28tYmFja1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWdvLWJhY2tcIixcbiAgICAgIHZhbHVlOiAoJy8nKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJy8nXCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSksIF92bS5fdihcIiBMb2dpblxcclxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC12aWV3IGxheW91dC1wYWRkaW5nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIm1haWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLmVtYWlsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIGVtYWlsXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIkVtYWlsXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcInZwbl9rZXlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiWW91ciBwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBmdWxsLXdpZHRoXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS51c2VyTG9naW4oKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIkxvZ2luXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFlMDNhMTJmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yMGZjZTU5OCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ291dC52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9nb3V0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yMGZjZTU5OCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9nb3V0LnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcZ2l0aHViXFxcXHZ1ZWRvdG5ldGNvcmVcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcYXV0aFxcXFxsb2dvdXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9nb3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjBmY2U1OTghLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjcwYWZhZWE3XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjBmY2U1OTghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWVcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJsb2dvdXQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTIwZmNlNTk4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgaWQ9XCJsb2dvdXRcIj5cclxuXHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVycyxcclxuICAgIG1hcEFjdGlvbnNcclxufSBmcm9tICd2dWV4J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnbG9nb3V0JyxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAuLi5tYXBBY3Rpb25zKFtcclxuICAgICAgICAgICAgJ2RlYXV0aGVudGljYXRlVXNlcidcclxuICAgICAgICBdKVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWF1dGhlbnRpY2F0ZVVzZXIoKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ291dC52dWU/YzYxNGM4YTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxvZ291dFwiXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0yMGZjZTU5OCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LWYyOTk5NTY2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1mMjk5OTU2NiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlZG90bmV0Y29yZVxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxhdXRoXFxcXHJlZ2lzdGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHJlZ2lzdGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1mMjk5OTU2NiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIyMWEyYjk2Y1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWYyOTk5NTY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDU3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJyZWdpc3Rlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtZjI5OTk1NjYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gUmVnaXN0ZXJcclxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgIDxidXR0b24+PGk+aGVscDwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC12aWV3IGxheW91dC1wYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+ZmFjZTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+bWFpbDwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLmVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+dnBuX2tleTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLnBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgZnVsbC13aWR0aFwiIEBjbGljaz1cInN1Ym1pdCgpXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclwiLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbHMgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNyZWRlbnRpYWxzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5jcmVkZW50aWFscy5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXV0aC5zaWdudXAodGhpcywgY3JlZGVudGlhbHMsICdqb2tlcycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVnaXN0ZXIudnVlPzIwOTA1NWExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIFJlZ2lzdGVyXFxyXFxuICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC12aWV3IGxheW91dC1wYWRkaW5nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcImZhY2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMubmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZnVsbC13aWR0aFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiWW91ciBuYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfdm0uX3YoXCJOYW1lXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIm1haWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLmVtYWlsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIGVtYWlsXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIkVtYWlsXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcInZwbl9rZXlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiWW91ciBwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBmdWxsLXdpZHRoXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlJlZ2lzdGVyXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWYyOTk5NTY2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03MmYzMTRjYSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTcyZjMxNGNhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcZ2l0aHViXFxcXHZ1ZWRvdG5ldGNvcmVcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcaG9tZVxcXFxjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzJmMzE0Y2EhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIwYTUzYzgwOFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTcyZjMxNGNhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImNhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTcyZjMxNGNhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIj5cclxuICAgICAgUXVhbnRpZGFkZSBkZSBBbml2ZXJzYXJpYW50ZXMgcG9yIG3DqnNcclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwidGlwb0dyYWZpY28gPSAnYmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtYmFyXCI+PC9pPjwvcS1zbWFsbC1mYWI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdob3Jpem9udGFsQmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtdGltZWxpbmVcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgPC9xLWZhYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwiYW5pdmVyc2FyaW9zLW1lc1wiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgIHRoaXMuZ2V0QmFpcnJvc0FncnVwYWRvcygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZUJhaXJyb3MgKCl7XHJcbiAgICAgICAgbGV0IGJhaXJyb3MgPSBbXVxyXG4gICAgICAgIGZvciAobGV0IGl0ZW0gb2YgT2JqZWN0LmtleXModGhpcy5iYWlycm9zQWdydXBhZG9zKSkge1xyXG4gICAgICAgICAgYmFpcnJvcy5wdXNoKGZvcm1hdChuZXcgRGF0ZShpdGVtKSwgJ01NTScsIHtsb2NhbGU6IHB0TG9jYWxlfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBiYWlycm9zXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNQb3JCYWlycm8gKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcykubWFwKGtleSA9PiB0aGlzLmJhaXJyb3NBZ3J1cGFkb3Nba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZUJhaXJyb3MsXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgZGF0YTogdGhpcy52YWxvcmVzUG9yQmFpcnJvLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXHJcbiAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LDk5LDEzMiwxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgYmFpcnJvc0FncnVwYWRvcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfSxcclxuICAgICAgdGlwb0dyYWZpY28gKCkge1xyXG4gICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhaXJyb3NBZ3J1cGFkb3M6IHt9LFxyXG4gICAgICAgIHRpcG9HcmFmaWNvOiAnYmFyJyxcclxuICAgICAgICBjaGFydDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0QmFpcnJvc0FncnVwYWRvcyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldCgnL3JlbGF0b3Jpby9hbml2ZXJzYXJpYW50ZXMtbWVzJylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2bS5iYWlycm9zQWdydXBhZG9zID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgY3JpYXJDaGFydCAoKSB7XHJcbiAgICAgICAgbGV0IGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYW5pdmVyc2FyaW9zLW1lc1wiKVxyXG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRpcG9HcmFmaWNvLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU/MDE1NjJjOWEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSA2NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjaGFydC5qc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImNoYXJ0LmpzXCJcbi8vIG1vZHVsZSBpZCA9IDY2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgYmctd2hpdGUgYW5pbWF0ZS1zY2FsZSBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlIGJnLWJsdWUgdGV4dC13aGl0ZVwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgUXVhbnRpZGFkZSBkZSBBbml2ZXJzYXJpYW50ZXMgcG9yIG3DqnNcXG4gICAgXCIpLCBfYygncS1mYWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiLFxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXG4gICAgICBcImNsYXNzTmFtZXNcIjogXCJ0ZWFsXCJcbiAgICB9XG4gIH0sIFtfYygncS1zbWFsbC1mYWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50aXBvR3JhZmljbyA9ICdiYXInXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jaGFydC1iYXJcIlxuICB9KV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncS1zbWFsbC1mYWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS50aXBvR3JhZmljbyA9ICdob3Jpem9udGFsQmFyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktY2hhcnQtdGltZWxpbmVcIlxuICB9KV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudFwiXG4gIH0sIFtfYygnY2FudmFzJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwiYW5pdmVyc2FyaW9zLW1lc1wiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzJmMzE0Y2EhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtZTNiMGU3NjIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi1lM2IwZTc2MiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXGdpdGh1YlxcXFx2dWVkb3RuZXRjb3JlXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LWUzYjBlNzYyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNmRjNTNjNTFcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lM2IwZTc2MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi1lM2IwZTc2MiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDcwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0ge3thbm99fVxyXG5cclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTYnXCIgaWNvbj1cIlwiPjIwMTY8L3Etc21hbGwtZmFiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTcnXCIgaWNvbj1cIlwiPjIwMTc8L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwiY2FkYXN0cm9zLW1lc1wiID48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvL1xyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZU1lc2VzICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNBZ3J1cGFkb3MgKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudG90YWxBZ3J1cGFkb1Bvck1lcykubWFwKGtleSA9PiB0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXNba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjaGFydDogJycsXHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZU1lc2VzLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsb3Jlc0FncnVwYWRvcyxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsIDEpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdG90YWxBZ3J1cGFkb1Bvck1lcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfSxcclxuICAgICAgYW5vICgpIHtcclxuICAgICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuXHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFubzogJzIwMTYnLFxyXG4gICAgICAgIHRvdGFsQWdydXBhZG9Qb3JNZXM6IHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldChgcGVzc29hcy90b3RhbC1jYWRhc3Ryby1hZ3J1cGFkby1tZXMtcG9yLWFuby8ke3RoaXMuYW5vfWApXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0udG90YWxBZ3J1cGFkb1Bvck1lcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyaWFyQ2hhcnQgKCkge1xyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhZGFzdHJvcy1tZXNcIilcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/NDAwMWZlNTMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0gXCIgKyBfdm0uX3MoX3ZtLmFubykgKyBcIlxcblxcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFubyA9ICcyMDE2J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjIwMTZcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW5vID0gJzIwMTcnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMjAxN1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNhZGFzdHJvcy1tZXNcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LWUzYjBlNzYyIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFiY2UyNGNmIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYmNlMjRjZiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlZG90bmV0Y29yZVxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xYmNlMjRjZiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIyZGE3NDBjM1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFiY2UyNGNmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkUGVzc29hc1BvckJhaXJyby52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWJjZTI0Y2YhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIj5cclxuICAgICAgUXVhbnRpZGFkZSBkZSBwZXNzb2FzIHBvciBiYWlycm9cclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwidGlwb0dyYWZpY28gPSAnYmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtYmFyXCI+PC9pPjwvcS1zbWFsbC1mYWI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdob3Jpem9udGFsQmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtdGltZWxpbmVcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgPC9xLWZhYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVzc29hcy1iYWlycm9cIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldEJhaXJyb3NBZ3J1cGFkb3MoKVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vbWVCYWlycm9zICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmJhaXJyb3NBZ3J1cGFkb3MpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNQb3JCYWlycm8gKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcykubWFwKGtleSA9PiB0aGlzLmJhaXJyb3NBZ3J1cGFkb3Nba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZUJhaXJyb3MsXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgZGF0YTogdGhpcy52YWxvcmVzUG9yQmFpcnJvLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsOTksMTMyLDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBiYWlycm9zQWdydXBhZG9zICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNzb2FzLWJhaXJyb1wiKVxyXG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRpcG9HcmFmaWNvLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpcG9HcmFmaWNvICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNzb2FzLWJhaXJyb1wiKVxyXG4gICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGlwb0dyYWZpY28sXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhZG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhaXJyb3NBZ3J1cGFkb3M6IHt9LFxyXG4gICAgICAgIHRpcG9HcmFmaWNvOiAnaG9yaXpvbnRhbEJhcicsXHJcbiAgICAgICAgY2hhcnQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kaHR0cC5nZXQoJy9lbmRlcmVjby9iYWlycm9zLWFncnVwYWRvcycpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0uYmFpcnJvc0FncnVwYWRvcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzFkNjRkMzhhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICBRdWFudGlkYWRlIGRlIHBlc3NvYXMgcG9yIGJhaXJyb1xcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2JhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LWJhclwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiXG4gIH0pXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgW19jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJwZXNzb2FzLWJhaXJyb1wiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWJjZTI0Y2YhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFmMmI2MjUxJnNjb3BlZD10cnVlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFRvdGFsLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTFmMmI2MjUxIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTFmMmI2MjUxXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlZG90bmV0Y29yZVxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGNhcmRUb3RhbC52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkVG90YWwudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZjJiNjI1MSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRUb3RhbC52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNzc4OTVjZjJcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZjJiNjI1MSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuaVtkYXRhLXYtMWYyYjYyNTFdIHtcXG4gIGZvbnQtc2l6ZTogNTRweDtcXG59XFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIi8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT82M2IwZTQ2MFwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBeUNBO0VBQ0EsZ0JBQUE7Q0FDQVwiLFwiZmlsZVwiOlwiY2FyZFRvdGFsLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuICA8ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtd2hpdGUgYW5pbWF0ZS1zY2FsZVxcXCIgOmNsYXNzPVxcXCJiYWNrZ3JvdW5kQ29sb3JcXFwiPlxcclxcbiAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWNvbnRlbnQgXFxcIj5cXHJcXG4gICAgICA8ZGl2IGNsYXNzPVxcXCJyb3dcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgtMW9mM1xcXCI+XFxyXFxuICAgICAgICAgIDxpPnBlb3BsZTwvaT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwid2lkdGgtMm9mM1xcXCI+XFxyXFxuICAgICAgICAgIDxwIGNsYXNzPVxcXCJ0ZXh0LWl0YWxpYyBcXFwiPnt7dGl0bGV9fTwvcD5cXHJcXG4gICAgICAgICAgPGg1PlxcclxcbiAgICAgICAgICAgIDxpLWNvdW50LXVwXFxyXFxuICAgICAgICAgICAgICA6c3RhcnQ9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICA6ZW5kPVxcXCJ0b3RhbFxcXCJcXHJcXG4gICAgICAgICAgICAgIDpkZWNpbWFscz1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgIDpkdXJhdGlvbj1cXFwiMi41XFxcIlxcclxcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XFxcIm9wdGlvbnNcXFwiXFxyXFxuICAgICAgICAgICAgPjwvaS1jb3VudC11cD5cXHJcXG4gICAgICAgICAgPC9oNT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gIDwvZGl2PlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuXFxyXFxuPHNjcmlwdD5cXHJcXG4gIGltcG9ydCBJQ291bnRVcCBmcm9tICd2dWUtY291bnR1cC12MidcXHJcXG4gIGV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgcHJvcHM6IFsndGl0bGUnLCAndG90YWwnLCAnYmFja2dyb3VuZENvbG9yJ10sXFxyXFxuICAgIGRhdGEgKCkge1xcclxcbiAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICBvcHRpb25zOiB7XFxyXFxuICAgICAgICAgIHNlcGFyYXRvcjogJy4nXFxyXFxuICAgICAgICB9XFxyXFxuICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBjb21wb25lbnRzOiB7XFxyXFxuICAgICAgSUNvdW50VXBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuICBpIHtcXHJcXG4gICAgZm9udC1zaXplOiA1NHB4O1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xZjJiNjI1MSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgYW5pbWF0ZS1zY2FsZVwiIDpjbGFzcz1cImJhY2tncm91bmRDb2xvclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0xb2YzXCI+XHJcbiAgICAgICAgICA8aT5wZW9wbGU8L2k+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoLTJvZjNcIj5cclxuICAgICAgICAgIDxwIGNsYXNzPVwidGV4dC1pdGFsaWMgXCI+e3t0aXRsZX19PC9wPlxyXG4gICAgICAgICAgPGg1PlxyXG4gICAgICAgICAgICA8aS1jb3VudC11cFxyXG4gICAgICAgICAgICAgIDpzdGFydD1cIjBcIlxyXG4gICAgICAgICAgICAgIDplbmQ9XCJ0b3RhbFwiXHJcbiAgICAgICAgICAgICAgOmRlY2ltYWxzPVwiMFwiXHJcbiAgICAgICAgICAgICAgOmR1cmF0aW9uPVwiMi41XCJcclxuICAgICAgICAgICAgICA6b3B0aW9ucz1cIm9wdGlvbnNcIlxyXG4gICAgICAgICAgICA+PC9pLWNvdW50LXVwPlxyXG4gICAgICAgICAgPC9oNT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgaW1wb3J0IElDb3VudFVwIGZyb20gJ3Z1ZS1jb3VudHVwLXYyJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIHByb3BzOiBbJ3RpdGxlJywgJ3RvdGFsJywgJ2JhY2tncm91bmRDb2xvciddLFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgb3B0aW9uczoge1xyXG4gICAgICAgICAgc2VwYXJhdG9yOiAnLidcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgIElDb3VudFVwXHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuICBpIHtcclxuICAgIGZvbnQtc2l6ZTogNTRweDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkVG90YWwudnVlPzYzYjBlNDYwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidnVlLWNvdW50dXAtdjJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2dWUtY291bnR1cC12MlwiXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIHRleHQtd2hpdGUgYW5pbWF0ZS1zY2FsZVwiLFxuICAgIGNsYXNzOiBfdm0uYmFja2dyb3VuZENvbG9yXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyb3dcIlxuICB9LCBbX3ZtLl9tKDApLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZHRoLTJvZjNcIlxuICB9LCBbX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1pdGFsaWMgXCJcbiAgfSwgW192bS5fdihfdm0uX3MoX3ZtLnRpdGxlKSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g1JywgW19jKCdpLWNvdW50LXVwJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInN0YXJ0XCI6IDAsXG4gICAgICBcImVuZFwiOiBfdm0udG90YWwsXG4gICAgICBcImRlY2ltYWxzXCI6IDAsXG4gICAgICBcImR1cmF0aW9uXCI6IDIuNSxcbiAgICAgIFwib3B0aW9uc1wiOiBfdm0ub3B0aW9uc1xuICAgIH1cbiAgfSldLCAxKV0pXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0xb2YzXCJcbiAgfSwgW19jKCdpJywgW192bS5fdihcInBlb3BsZVwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xZjJiNjI1MSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTE2OWJhNTljIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vaG9tZS52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vaG9tZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTY5YmE1OWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2hvbWUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxnaXRodWJcXFxcdnVlZG90bmV0Y29yZVxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGhvbWUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaG9tZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xNjliYTU5YyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjMzZWVhMWQ4XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTY5YmE1OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiaG9tZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTY5YmE1OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA4NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBIb21lXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXBhZGRpbmcgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxjYXJkVG90YWwgdGl0bGU9XCJUb3RhbCBQb3N0c1wiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCJ0b3RhbFBvc3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmRUb3RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FyZFRvdGFsIHRpdGxlPVwiVG90YWwgY29tbWVudHNcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiYmctdGVhbC04XCIgOnRvdGFsPVwidG90YWxDb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmRUb3RhbCB0aXRsZT1cIlN0YXRpYyB0b3RhbFwiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCI1MDAwNFwiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHdyYXAgZ3V0dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0xb2YyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoLTRvZjUgc20tYXV0b1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbmltcG9ydCBjYXJkVG90YWwgZnJvbSAnLi9jYXJkVG90YWwudnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnSG9tZScsXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvdGFsUG9zdHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsQ29tbWVudHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsVG9kb3M6IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkYXRhRm9yR3JhcGgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0czogdGhpcy50b3RhbFBvc3RzLFxyXG4gICAgICAgICAgICAgICAgdG9kb3M6IHRoaXMudG90YWxUb2RvcyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLnRvdGFsQ29tbWVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgY2FyZFRvdGFsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGhvbWUudnVlPzMzZmQ0NGIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIEhvbWVcXHJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQtcGFkZGluZyBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IHdyYXAgZ3V0dGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0sIFtfYygnY2FyZFRvdGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgUG9zdHNcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJnLXRlYWwtOFwiLFxuICAgICAgXCJ0b3RhbFwiOiBfdm0udG90YWxQb3N0c1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdXRvXCJcbiAgfSwgW19jKCdjYXJkVG90YWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJUb3RhbCBjb21tZW50c1wiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IF92bS50b3RhbENvbW1lbnRzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF1dG9cIlxuICB9LCBbX2MoJ2NhcmRUb3RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRpYyB0b3RhbFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IDUwMDA0XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdidXR0b24nLCBbX2MoJ2knLCBbX3ZtLl92KFwiaGVscFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0xb2YyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC00b2Y1IHNtLWF1dG9cIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTY5YmE1OWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDFiYzZlNWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9xdWVzdGlvbnR5cGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDFiYzZlNWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXGdpdGh1YlxcXFx2dWVkb3RuZXRjb3JlXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXHF1ZXN0aW9udHlwZVxcXFxxdWVzdGlvbnR5cGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcXVlc3Rpb250eXBlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MWJjNmU1YyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMDY2NzgzZmNcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MWJjNmU1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwicXVlc3Rpb250eXBlLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00MWJjNmU1YyEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBRdWVzdGlvbiBUeXBlXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXBhZGRpbmcgXCI+XHJcbiAgICAgICAgPHEtZGF0YS10YWJsZSA6ZGF0YT1cInF1ZXN0aW9udHlwZXNcIiA6Y29uZmlnPVwiY29uZmlnXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY29sLXNvdXJjZVwiIHNjb3BlPVwiY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNlbGwuZGF0YSA9PT0gJ0F1ZGl0J1wiIGNsYXNzPVwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+U29tZSB0b29sdGlwPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCI+e3tjZWxsLmRhdGF9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzZWxlY3Rpb25cIiBzY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJjaGFuZ2VNZXNzYWdlKHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmVkaXQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5IGNsZWFyXCIgQGNsaWNrPVwiZGVsZXRlUm93KHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmRlbGV0ZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9xLWRhdGEtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7XHJcbiAgICBQbGF0Zm9ybSxcclxuICAgIFV0aWxzLFxyXG4gICAgVG9hc3RcclxufSBmcm9tICdxdWFzYXItZnJhbWV3b3JrJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInF1ZXN0aW9udHlwZVwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVlc3Rpb24gVHlwZXMnLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblBpY2tlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdGlja3lDb2x1bW5zOiAxLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTdGlja3lDb2x1bW5zOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9keVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBQbGF0Zm9ybS5pcy5tb2JpbGUgPyAnNTB2aCcgOiAnNTAwcHgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbNSwgMTAsIDE1LCAzMCwgNTAsIDUwMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGE6ICc8aT53YXJuaW5nPC9pPiBObyBkYXRhIGF2YWlsYWJsZSB0byBzaG93LicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhQWZ0ZXJGaWx0ZXJpbmc6ICc8aT53YXJuaW5nPC9pPiBObyByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHlvdXIgc2VhcmNoIHRlcm1zLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1F1ZXN0aW9uVHlwZUlkJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1F1ZXN0aW9uVHlwZU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZWQgRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdDcmVhdGVkRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHJvd0hlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHRQcm9wOiAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAgICAgYm9keUhlaWdodDogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcGFnaW5hdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBhZ2luYXRpb24gPSBVdGlscy5jbG9uZSh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMub2xkUGFnaW5hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm93SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0hlaWdodCA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5SGVpZ2h0UHJvcCAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt0aGlzLmJvZHlIZWlnaHRQcm9wXSA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0UHJvcCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdmFsdWVdID0gdGhpcy5ib2R5SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxRdWVzdGlvblR5cGVzKCk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoW1xyXG4gICAgICAgICdxdWVzdGlvbnR5cGVzJ1xyXG4gICAgXSksXHJcbiAgICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcclxuICAgICAgICAnZ2V0QWxsUXVlc3Rpb25UeXBlcydcclxuICAgIF0pXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbnR5cGUudnVlP2Q0OWEzZTkwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIFF1ZXN0aW9uIFR5cGVcXHJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQtcGFkZGluZyBcIlxuICB9LCBbX2MoJ3EtZGF0YS10YWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhXCI6IF92bS5xdWVzdGlvbnR5cGVzLFxuICAgICAgXCJjb25maWdcIjogX3ZtLmNvbmZpZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uc1xuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICBbXCJjb2wtc291cmNlXCIsIGZ1bmN0aW9uKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIFsoY2VsbC5kYXRhID09PSAnQXVkaXQnKSA/IF9jKCdzcGFuJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIHRleHQtd2hpdGUgYmctcHJpbWFyeVwiXG4gICAgICAgIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3EtdG9vbHRpcCcsIFtfdm0uX3YoXCJTb21lIHRvb2x0aXBcIildKV0sIDEpIDogX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1uZWdhdGl2ZVwiXG4gICAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNlbGwuZGF0YSkpXSldXG4gICAgICB9XSxcbiAgICAgIFtcInNlbGVjdGlvblwiLCBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICByZXR1cm4gW19jKCdidXR0b24nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBjbGVhclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uY2hhbmdlTWVzc2FnZShwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJlZGl0XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVSb3cocHJvcHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldKV1cbiAgICAgIH1dXG4gICAgXSlcbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTQxYmM2ZTVjIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wNDY0M2U5YyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTA0NjQzZTljIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcZ2l0aHViXFxcXHZ1ZWRvdG5ldGNvcmVcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcdXNlclxcXFx1c2VyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHVzZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA5NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDQ2NDNlOWMhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi91c2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI3NjQ1YjM1YVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA0NjQzZTljIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInVzZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTA0NjQzZTljIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gVXNlclxyXG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDxidXR0b24+PGk+aGVscDwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC1wYWRkaW5nIFwiPlxyXG4gICAgICAgIDxxLWRhdGEtdGFibGUgOmRhdGE9XCJ1c2Vyc1wiIDpjb25maWc9XCJjb25maWdcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjb2wtc291cmNlXCIgc2NvcGU9XCJjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2VsbC5kYXRhID09PSAnQXVkaXQnXCIgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdG9vbHRpcD5Tb21lIHRvb2x0aXA8L3EtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cImxhYmVsIHRleHQtd2hpdGUgYmctbmVnYXRpdmVcIj57e2NlbGwuZGF0YX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInNlbGVjdGlvblwiIHNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBjbGVhclwiIEBjbGljaz1cImNoYW5nZU1lc3NhZ2UocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZWRpdDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJkZWxldGVSb3cocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZGVsZXRlPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3EtZGF0YS10YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuaW1wb3J0IHtcclxuICAgIFBsYXRmb3JtLFxyXG4gICAgVXRpbHMsXHJcbiAgICBUb2FzdFxyXG59IGZyb20gJ3F1YXNhci1mcmFtZXdvcmsnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblBpY2tlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdGlja3lDb2x1bW5zOiAxLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTdGlja3lDb2x1bW5zOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9keVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBQbGF0Zm9ybS5pcy5tb2JpbGUgPyAnNTB2aCcgOiAnNTAwcHgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbNSwgMTAsIDE1LCAzMCwgNTAsIDUwMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGE6ICc8aT53YXJuaW5nPC9pPiBObyBkYXRhIGF2YWlsYWJsZSB0byBzaG93LicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhQWZ0ZXJGaWx0ZXJpbmc6ICc8aT53YXJuaW5nPC9pPiBObyByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHlvdXIgc2VhcmNoIHRlcm1zLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ZpcnN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdGaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTGFzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnTGFzdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVXNlclR5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnVXNlclR5cGVJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3JlYXRlZERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHJvd0hlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHRQcm9wOiAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAgICAgYm9keUhlaWdodDogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcGFnaW5hdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBhZ2luYXRpb24gPSBVdGlscy5jbG9uZSh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMub2xkUGFnaW5hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm93SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0hlaWdodCA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5SGVpZ2h0UHJvcCAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt0aGlzLmJvZHlIZWlnaHRQcm9wXSA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0UHJvcCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdmFsdWVdID0gdGhpcy5ib2R5SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxVc2VycygpO1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFtcclxuICAgICAgICAndXNlcnMnXHJcbiAgICBdKSxcclxuICAgIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xyXG4gICAgICAgICdnZXRBbGxVc2VycydcclxuICAgIF0pXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB1c2VyLnZ1ZT80N2ZhNjBmZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIixcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygncS10b29sYmFyLXRpdGxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZGRpbmdcIjogMVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiZ28tYmFja1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWdvLWJhY2tcIixcbiAgICAgIHZhbHVlOiAoJy8nKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJy8nXCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSksIF92bS5fdihcIiBVc2VyXFxyXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXBhZGRpbmcgXCJcbiAgfSwgW19jKCdxLWRhdGEtdGFibGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0udXNlcnMsXG4gICAgICBcImNvbmZpZ1wiOiBfdm0uY29uZmlnLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIFtcImNvbC1zb3VyY2VcIiwgZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gWyhjZWxsLmRhdGEgPT09ICdBdWRpdCcpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCJcbiAgICAgICAgfSwgW192bS5fdihcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncS10b29sdGlwJywgW192bS5fdihcIlNvbWUgdG9vbHRpcFwiKV0pXSwgMSkgOiBfYygnc3BhbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCJcbiAgICAgICAgfSwgW192bS5fdihfdm0uX3MoY2VsbC5kYXRhKSldKV1cbiAgICAgIH1dLFxuICAgICAgW1wic2VsZWN0aW9uXCIsIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBbX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5jaGFuZ2VNZXNzYWdlKHByb3BzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgW19jKCdpJywgW192bS5fdihcImVkaXRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByaW1hcnkgY2xlYXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVJvdyhwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJkZWxldGVcIildKV0pXVxuICAgICAgfV1cbiAgICBdKVxuICB9KV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMDQ2NDNlOWMhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSJdLCJzb3VyY2VSb290IjoiIn0=