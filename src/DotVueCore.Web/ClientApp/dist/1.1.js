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
		"./views/auth/logout": 53,
		"./views/auth/logout.vue": 53,
		"./views/auth/register": 58,
		"./views/auth/register.vue": 58,
		"./views/home/cardAniversariosPorMes": 63,
		"./views/home/cardAniversariosPorMes.vue": 63,
		"./views/home/cardCadastrosPorMes": 70,
		"./views/home/cardCadastrosPorMes.vue": 70,
		"./views/home/cardPessoasPorBairro": 75,
		"./views/home/cardPessoasPorBairro.vue": 75,
		"./views/home/cardTotal": 80,
		"./views/home/cardTotal.vue": 80,
		"./views/home/home": 86,
		"./views/home/home.vue": 86,
		"./views/questiontype/questiontype": 91,
		"./views/questiontype/questiontype.vue": 91,
		"./views/user/user": 96,
		"./views/user/user.vue": 96
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
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\Error404.vue"
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
	  __webpack_require__(52),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\login.vue"
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
	__webpack_require__(32)("7f3d1223", content, false);

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"login.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _vuex = __webpack_require__(8);
	
	var _stompjs = __webpack_require__(50);
	
	var _stompjs2 = _interopRequireDefault(_stompjs);
	
	var _sockjsClient = __webpack_require__(51);
	
	var _sockjsClient2 = _interopRequireDefault(_sockjsClient);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sock = new _sockjsClient2.default('/broadcast');
	sock.onopen = function () {
	    console.log('open');
	    sock.send('test');
	};
	sock.onmessage = function (e) {
	    console.log('message', e.data);
	};
	sock.onclose = function () {
	    console.log('close');
	};
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
	        },
	        sendSock: function sendSock() {
	            sock.send('test' + new Date() + 0);
	        }
	    },
	    mounted: function mounted() {}
	};

/***/ },
/* 50 */
/***/ function(module, exports) {

	module.exports = require("stompjs");

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("sockjs-client");

/***/ },
/* 52 */
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
	  }, [_vm._v("Login")]), _vm._v(" "), _c('br'), _vm._v(" "), _c('button', {
	    staticClass: "primary full-width",
	    on: {
	      "click": function($event) {
	        _vm.sendSock()
	      }
	    }
	  }, [_vm._v("Send")])])])
	},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('button', [_c('i', [_vm._v("help")])])
	}]}
	module.exports.render._withStripped = true

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(54)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(56),
	  /* template */
	  __webpack_require__(57),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\logout.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] logout.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(55);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("4019d224", content, false);

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"logout.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 56 */
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
/* 57 */
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(59)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(61),
	  /* template */
	  __webpack_require__(62),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\register.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] register.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(60);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("02b4265a", content, false);

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"register.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 61 */
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
/* 62 */
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(64)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(66),
	  /* template */
	  __webpack_require__(69),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardAniversariosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardAniversariosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(65);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("1ed61eb6", content, false);

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardAniversariosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(67);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _chart = __webpack_require__(68);
	
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
/* 67 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 68 */
/***/ function(module, exports) {

	module.exports = require("chart.js");

/***/ },
/* 69 */
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(71)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(73),
	  /* template */
	  __webpack_require__(74),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardCadastrosPorMes.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardCadastrosPorMes.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(72);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("4b45621c", content, false);

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardCadastrosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(68);
	
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
/* 74 */
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(76)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(78),
	  /* template */
	  __webpack_require__(79),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardPessoasPorBairro.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardPessoasPorBairro.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(77);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("51cd2172", content, false);

/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardPessoasPorBairro.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(68);
	
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
/* 79 */
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(81)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(83),
	  /* template */
	  __webpack_require__(85),
	  /* scopeId */
	  "data-v-4fb4a1f4",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\cardTotal.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] cardTotal.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(82);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("73f7eb42", content, false);

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\ni[data-v-4fb4a1f4] {\n  font-size: 54px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/home/cardTotal.vue?63b0e460"],"names":[],"mappings":";AAyCA;EACA,gBAAA;CACA","file":"cardTotal.vue","sourcesContent":["<template>\r\n  <div class=\"card text-white animate-scale\" :class=\"backgroundColor\">\r\n    <div class=\"card-content \">\r\n      <div class=\"row\">\r\n        <div class=\"width-1of3\">\r\n          <i>people</i>\r\n        </div>\r\n        <div class=\"width-2of3\">\r\n          <p class=\"text-italic \">{{title}}</p>\r\n          <h5>\r\n            <i-count-up\r\n              :start=\"0\"\r\n              :end=\"total\"\r\n              :decimals=\"0\"\r\n              :duration=\"2.5\"\r\n              :options=\"options\"\r\n            ></i-count-up>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import ICountUp from 'vue-countup-v2'\r\n  export default {\r\n    props: ['title', 'total', 'backgroundColor'],\r\n    data () {\r\n      return {\r\n        options: {\r\n          separator: '.'\r\n        }\r\n      }\r\n    },\r\n    components: {\r\n      ICountUp\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  i {\r\n    font-size: 54px;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueCountupV = __webpack_require__(84);
	
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
/* 84 */
/***/ function(module, exports) {

	module.exports = require("vue-countup-v2");

/***/ },
/* 85 */
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(87)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(89),
	  /* template */
	  __webpack_require__(90),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\home\\home.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] home.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(88);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("42f9ebcb", content, false);

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cardTotal = __webpack_require__(80);
	
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
/* 90 */
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
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(92)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(94),
	  /* template */
	  __webpack_require__(95),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\questiontype\\questiontype.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] questiontype.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(93);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("63b86c83", content, false);

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"questiontype.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 94 */
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
/* 95 */
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(97)
	
	var Component = __webpack_require__(25)(
	  /* script */
	  __webpack_require__(99),
	  /* template */
	  __webpack_require__(100),
	  /* scopeId */
	  null,
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\user\\user.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] user.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(98);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(32)("a51465ba", content, false);

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(31)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"user.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 99 */
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
/* 100 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vRXJyb3I0MDQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZT82ZDg4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlPzQ0ZDQiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/NmI3YSIsIndlYnBhY2s6Ly8vbG9naW4udnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcInN0b21wanNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJzb2NranMtY2xpZW50XCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/Njk3OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzkwZWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzAyM2YiLCJ3ZWJwYWNrOi8vL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzI4OGUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/MmQ1NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZT81NmVmIiwid2VicGFjazovLy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/NzM1ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU/ZmM0MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzk1ODMiLCJ3ZWJwYWNrOi8vL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGFydC5qc1wiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU/YmM1YiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/MmZiNyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlPzhmOWUiLCJ3ZWJwYWNrOi8vL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/NTJhNCIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZT83YTI1Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlP2U5YTQiLCJ3ZWJwYWNrOi8vL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZT8zMjFlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWU/MmJlZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWU/Yjc4NSIsIndlYnBhY2s6Ly8vY2FyZFRvdGFsLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ2dWUtY291bnR1cC12MlwiIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT80MTBhIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZT83NjM5Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWU/OTVhNSIsIndlYnBhY2s6Ly8vaG9tZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZT84MDZlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlPzI4ODEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWU/MDljNiIsIndlYnBhY2s6Ly8vcXVlc3Rpb250eXBlLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZT82Y2MyIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZT9kZDM1Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWU/Y2IxZSIsIndlYnBhY2s6Ly8vdXNlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZT81MmZlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNILEVBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0EsRUFBQztBQUNELDJDIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9FcnJvcjQwNFwiOiAyNCxcblx0XCIuL0Vycm9yNDA0LnZ1ZVwiOiAyNCxcblx0XCIuL2xheW91dC9sZWZ0ZHJhd2VyXCI6IDI4LFxuXHRcIi4vbGF5b3V0L2xlZnRkcmF3ZXIudnVlXCI6IDI4LFxuXHRcIi4vbGF5b3V0L3JpZ2h0ZHJhd2VyXCI6IDM2LFxuXHRcIi4vbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZVwiOiAzNixcblx0XCIuL2xheW91dC90b29sYmFyXCI6IDQxLFxuXHRcIi4vbGF5b3V0L3Rvb2xiYXIudnVlXCI6IDQxLFxuXHRcIi4vdmlld3MvYXV0aC9sb2dpblwiOiA0Nixcblx0XCIuL3ZpZXdzL2F1dGgvbG9naW4udnVlXCI6IDQ2LFxuXHRcIi4vdmlld3MvYXV0aC9sb2dvdXRcIjogNTMsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ291dC52dWVcIjogNTMsXG5cdFwiLi92aWV3cy9hdXRoL3JlZ2lzdGVyXCI6IDU4LFxuXHRcIi4vdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcIjogNTgsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXNcIjogNjMsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCI6IDYzLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzXCI6IDcwLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiOiA3MCxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm9cIjogNzUsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiOiA3NSxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFRvdGFsXCI6IDgwLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXCI6IDgwLFxuXHRcIi4vdmlld3MvaG9tZS9ob21lXCI6IDg2LFxuXHRcIi4vdmlld3MvaG9tZS9ob21lLnZ1ZVwiOiA4Nixcblx0XCIuL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGVcIjogOTEsXG5cdFwiLi92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVwiOiA5MSxcblx0XCIuL3ZpZXdzL3VzZXIvdXNlclwiOiA5Nixcblx0XCIuL3ZpZXdzL3VzZXIvdXNlci52dWVcIjogOTZcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjM7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzIF5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Vycm9yNDA0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04YWNiODI5ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXJyb3I0MDQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXEVycm9yNDA0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEVycm9yNDA0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRXJyb3I0MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA0MDRcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJ0ZXh0LWdyZXktNVwiPmVycm9yX291dGxpbmU8L2k+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHRleHQtY2VudGVyXCI+T29wcy4gTm90aGluZyBoZXJlLi4uPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgZ3JvdXBcIj5cclxuICAgICAgICAgIDxidXR0b24gdi1pZj1cImNhbkdvQmFja1wiIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwib24tbGVmdFwiPmtleWJvYXJkX2Fycm93X2xlZnQ8L2k+XHJcbiAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgR28gaG9tZVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwib24tcmlnaHRcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FuR29CYWNrOiB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEVycm9yNDA0LnZ1ZT8xYjU3ZThiMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgNDA0XFxuICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS01XCJcbiAgfSwgW192bS5fdihcImVycm9yX291dGxpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FwdGlvbiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJPb3BzLiBOb3RoaW5nIGhlcmUuLi5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgZ3JvdXBcIlxuICB9LCBbKF92bS5jYW5Hb0JhY2spID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5IHB1c2ggc21hbGxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZ29CYWNrXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib24tbGVmdFwiXG4gIH0sIFtfdm0uX3YoXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICBHbyBiYWNrXFxuICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXkgcHVzaCBzbWFsbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBHbyBob21lXFxuICAgICAgICAgICAgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvbi1yaWdodFwiXG4gIH0sIFtfdm0uX3YoXCJob21lXCIpXSldKV0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOGFjYjgyOWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi02YjIyOTA2NCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dpbi52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNmIyMjkwNjQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxhdXRoXFxcXGxvZ2luLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvZ2luLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YjIyOTA2NCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI3ZjNkMTIyM1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZiMjI5MDY0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmIyMjkwNjQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gTG9naW5cclxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8YnV0dG9uPjxpPmhlbHA8L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtdmlldyBsYXlvdXQtcGFkZGluZ1wiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsaXN0XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHRocmVlLWxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIml0ZW0tcHJpbWFyeVwiPm1haWw8L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrZWQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjcmVkZW50aWFscy5lbWFpbFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiWW91ciBlbWFpbFwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8aHI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtIHRocmVlLWxpbmVzXCI+XHJcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cIml0ZW0tcHJpbWFyeVwiPnZwbl9rZXk8L2k+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrZWQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGlucHV0IHYtbW9kZWw9XCJjcmVkZW50aWFscy5wYXNzd29yZFwiIHR5cGU9XCJwYXNzd29yZFwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiWW91ciBwYXNzd29yZFwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5IGZ1bGwtd2lkdGhcIiBAY2xpY2s9XCJ1c2VyTG9naW4oKVwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPGJyLz5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBmdWxsLXdpZHRoXCIgQGNsaWNrPVwic2VuZFNvY2soKVwiPlNlbmQ8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEFjdGlvbnNcclxufSBmcm9tICd2dWV4J1xyXG5cclxuaW1wb3J0IFN0b21wIGZyb20gJ3N0b21wanMnXHJcbmltcG9ydCBTb2NrSlMgZnJvbSAnc29ja2pzLWNsaWVudCdcclxubGV0IHNvY2sgPSBuZXcgU29ja0pTKCcvYnJvYWRjYXN0Jylcclxuc29jay5vbm9wZW4gPSBmdW5jdGlvbigpIHtcclxuICAgY29uc29sZS5sb2coJ29wZW4nKVxyXG4gICBzb2NrLnNlbmQoJ3Rlc3QnKTtcclxufVxyXG5zb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcclxuICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpXHJcbn1cclxuc29jay5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgIGNvbnNvbGUubG9nKCdjbG9zZScpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJsb2dpblwiLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdydG9AcnRvLmNvbScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJzEyMzQ1Njc4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICB1c2VyTG9naW4oKSB7XHJcbiAgICAgICAgICAgIC8vIEFVVEggV0lMTCBCRSBDQUxMRUQgd2l0aCBkYXRhXHJcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGVVc2VyJywgdGhpcy5jcmVkZW50aWFscylcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiAnaG9tZScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lcnJvcnMgPSByZXMuZXJyb3JzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZW5kU29jaygpe1xyXG4gICAgICAgICAgc29jay5zZW5kKCd0ZXN0JytuZXcgRGF0ZSswKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9naW4udnVlPzFmMjYxYTAyIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvbXBqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0b21wanNcIlxuLy8gbW9kdWxlIGlkID0gNTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2pzLWNsaWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNvY2tqcy1jbGllbnRcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIExvZ2luXFxyXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwibWFpbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMuZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIllvdXIgZW1haWxcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX3ZtLl92KFwiRW1haWxcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwidnBuX2tleVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIHBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGZ1bGwtd2lkdGhcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVzZXJMb2dpbigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9naW5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2JyJyksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBmdWxsLXdpZHRoXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zZW5kU29jaygpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiU2VuZFwiKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdidXR0b24nLCBbX2MoJ2knLCBbX3ZtLl92KFwiaGVscFwiKV0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YjIyOTA2NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDUyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ291dC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ291dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcYXV0aFxcXFxsb2dvdXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9nb3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjQwMTlkMjI0XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDY0MDg0OWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWVcbi8vIG1vZHVsZSBpZCA9IDU0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJsb2dvdXQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgaWQ9XCJsb2dvdXRcIj5cclxuXHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVycyxcclxuICAgIG1hcEFjdGlvbnNcclxufSBmcm9tICd2dWV4J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnbG9nb3V0JyxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAuLi5tYXBBY3Rpb25zKFtcclxuICAgICAgICAgICAgJ2RlYXV0aGVudGljYXRlVXNlcidcclxuICAgICAgICBdKVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWF1dGhlbnRpY2F0ZVVzZXIoKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ291dC52dWU/YzYxNGM4YTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxvZ291dFwiXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NjQwODQ5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI5OTFmZGY4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yOTkxZmRmOCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGF1dGhcXFxccmVnaXN0ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmVnaXN0ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5OTFmZGY4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjAyYjQyNjVhXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk5MWZkZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInJlZ2lzdGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTkxZmRmOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBSZWdpc3RlclxyXG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj5mYWNlPC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMubmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj5tYWlsPC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMuZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj52cG5fa2V5PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMucGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBmdWxsLXdpZHRoXCIgQGNsaWNrPVwic3VibWl0KClcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyXCIsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFscyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY3JlZGVudGlhbHMubmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdXRoLnNpZ251cCh0aGlzLCBjcmVkZW50aWFscywgJ2pva2VzJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZWdpc3Rlci52dWU/MjA5MDU1YTEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgUmVnaXN0ZXJcXHJcXG4gICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiZmFjZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjcmVkZW50aWFscy5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIG5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNyZWRlbnRpYWxzLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIk5hbWVcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwibWFpbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMuZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIllvdXIgZW1haWxcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX3ZtLl92KFwiRW1haWxcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwidnBuX2tleVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIHBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGZ1bGwtd2lkdGhcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmVnaXN0ZXJcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk5MWZkZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdkNzczNzA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2Q3NzM3MDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdkNzczNzA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMWVkNjFlYjZcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIFF1YW50aWRhZGUgZGUgQW5pdmVyc2FyaWFudGVzIHBvciBtw6pzXHJcbiAgICAgIDxxLWZhYiBpY29uPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIGRpcmVjdGlvbj1cImxlZnRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgY2xhc3NOYW1lcz1cInRlYWxcIj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cInRpcG9HcmFmaWNvID0gJ2JhcidcIiBpY29uPVwiXCI+PGkgY2xhc3M9XCJtZGkgbWRpLWNoYXJ0LWJhclwiPjwvaT48L3Etc21hbGwtZmFiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwidGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcIiBpY29uPVwiXCI+PGkgY2xhc3M9XCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCI+PC9pPjwvcS1zbWFsbC1mYWI+XHJcbiAgICAgIDwvcS1mYWI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgPGNhbnZhcyBpZD1cImFuaXZlcnNhcmlvcy1tZXNcIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldEJhaXJyb3NBZ3J1cGFkb3MoKVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vbWVCYWlycm9zICgpe1xyXG4gICAgICAgIGxldCBiYWlycm9zID0gW11cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcykpIHtcclxuICAgICAgICAgIGJhaXJyb3MucHVzaChmb3JtYXQobmV3IERhdGUoaXRlbSksICdNTU0nLCB7bG9jYWxlOiBwdExvY2FsZX0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFpcnJvc1xyXG4gICAgICB9LFxyXG4gICAgICB2YWxvcmVzUG9yQmFpcnJvICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmJhaXJyb3NBZ3J1cGFkb3MpLm1hcChrZXkgPT4gdGhpcy5iYWlycm9zQWdydXBhZG9zW2tleV0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhZG9zICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLm5vbWVCYWlycm9zLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsb3Jlc1BvckJhaXJybyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpcG9HcmFmaWNvICgpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWlycm9zQWdydXBhZG9zOiB7fSxcclxuICAgICAgICB0aXBvR3JhZmljbzogJ2JhcicsXHJcbiAgICAgICAgY2hhcnQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kaHR0cC5nZXQoJy9yZWxhdG9yaW8vYW5pdmVyc2FyaWFudGVzLW1lcycpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0uYmFpcnJvc0FncnVwYWRvcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyaWFyQ2hhcnQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaXZlcnNhcmlvcy1tZXNcIilcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy50aXBvR3JhZmljbyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuZGFkb3NcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzAxNTYyYzlhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhcnQuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFydC5qc1wiXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIFF1YW50aWRhZGUgZGUgQW5pdmVyc2FyaWFudGVzIHBvciBtw6pzXFxuICAgIFwiKSwgX2MoJ3EtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImtleWJvYXJkX2Fycm93X2xlZnRcIixcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJjbGFzc05hbWVzXCI6IFwidGVhbFwiXG4gICAgfVxuICB9LCBbX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnYmFyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktY2hhcnQtYmFyXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCJcbiAgfSldKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImFuaXZlcnNhcmlvcy1tZXNcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdkNzczNzA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTAxNjUzYWM0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDE2NTNhYzQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAxNjUzYWM0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNGI0NTYyMWNcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDcxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDcyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0ge3thbm99fVxyXG5cclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTYnXCIgaWNvbj1cIlwiPjIwMTY8L3Etc21hbGwtZmFiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTcnXCIgaWNvbj1cIlwiPjIwMTc8L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwiY2FkYXN0cm9zLW1lc1wiID48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvL1xyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZU1lc2VzICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNBZ3J1cGFkb3MgKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudG90YWxBZ3J1cGFkb1Bvck1lcykubWFwKGtleSA9PiB0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXNba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjaGFydDogJycsXHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZU1lc2VzLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsb3Jlc0FncnVwYWRvcyxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsIDEpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdG90YWxBZ3J1cGFkb1Bvck1lcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfSxcclxuICAgICAgYW5vICgpIHtcclxuICAgICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuXHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFubzogJzIwMTYnLFxyXG4gICAgICAgIHRvdGFsQWdydXBhZG9Qb3JNZXM6IHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldChgcGVzc29hcy90b3RhbC1jYWRhc3Ryby1hZ3J1cGFkby1tZXMtcG9yLWFuby8ke3RoaXMuYW5vfWApXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0udG90YWxBZ3J1cGFkb1Bvck1lcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyaWFyQ2hhcnQgKCkge1xyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhZGFzdHJvcy1tZXNcIilcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/NDAwMWZlNTMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0gXCIgKyBfdm0uX3MoX3ZtLmFubykgKyBcIlxcblxcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFubyA9ICcyMDE2J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjIwMTZcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW5vID0gJzIwMTcnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMjAxN1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNhZGFzdHJvcy1tZXNcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTAxNjUzYWM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTEwNDY0NGZhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMDQ2NDRmYSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTEwNDY0NGZhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjUxY2QyMTcyXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTA0NjQ0ZmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMDQ2NDRmYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgYmctd2hpdGUgYW5pbWF0ZS1zY2FsZSBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGJnLWJsdWUgdGV4dC13aGl0ZVwiPlxyXG4gICAgICBRdWFudGlkYWRlIGRlIHBlc3NvYXMgcG9yIGJhaXJyb1xyXG4gICAgICA8cS1mYWIgaWNvbj1cImtleWJvYXJkX2Fycm93X2xlZnRcIiBkaXJlY3Rpb249XCJsZWZ0XCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiIGNsYXNzTmFtZXM9XCJ0ZWFsXCI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdiYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC1iYXJcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cInRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiPjwvaT48L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwZXNzb2FzLWJhaXJyb1wiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgIHRoaXMuZ2V0QmFpcnJvc0FncnVwYWRvcygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZUJhaXJyb3MgKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcylcclxuICAgICAgfSxcclxuICAgICAgdmFsb3Jlc1BvckJhaXJybyAoKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5iYWlycm9zQWdydXBhZG9zKS5tYXAoa2V5ID0+IHRoaXMuYmFpcnJvc0FncnVwYWRvc1trZXldKVxyXG4gICAgICB9LFxyXG4gICAgICBkYWRvcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsczogdGhpcy5ub21lQmFpcnJvcyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnZhbG9yZXNQb3JCYWlycm8sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc3NvYXMtYmFpcnJvXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGlwb0dyYWZpY28sXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhZG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGlwb0dyYWZpY28gKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc3NvYXMtYmFpcnJvXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy50aXBvR3JhZmljbyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuZGFkb3NcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFpcnJvc0FncnVwYWRvczoge30sXHJcbiAgICAgICAgdGlwb0dyYWZpY286ICdob3Jpem9udGFsQmFyJyxcclxuICAgICAgICBjaGFydDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0QmFpcnJvc0FncnVwYWRvcyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldCgnL2VuZGVyZWNvL2JhaXJyb3MtYWdydXBhZG9zJylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2bS5iYWlycm9zQWdydXBhZG9zID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkUGVzc29hc1BvckJhaXJyby52dWU/MWQ2NGQzOGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIFF1YW50aWRhZGUgZGUgcGVzc29hcyBwb3IgYmFpcnJvXFxuICAgIFwiKSwgX2MoJ3EtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImtleWJvYXJkX2Fycm93X2xlZnRcIixcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJjbGFzc05hbWVzXCI6IFwidGVhbFwiXG4gICAgfVxuICB9LCBbX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnYmFyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktY2hhcnQtYmFyXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCJcbiAgfSldKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInBlc3NvYXMtYmFpcnJvXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMDQ2NDRmYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRUb3RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGZiNGExZjQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRUb3RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNGZiNGExZjRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcaG9tZVxcXFxjYXJkVG90YWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZFRvdGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjczZjdlYjQyXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDgxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmlbZGF0YS12LTRmYjRhMWY0XSB7XFxuICBmb250LXNpemU6IDU0cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWU/NjNiMGU0NjBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtFQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcImNhcmRUb3RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcXFwiIDpjbGFzcz1cXFwiYmFja2dyb3VuZENvbG9yXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50IFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoLTFvZjNcXFwiPlxcclxcbiAgICAgICAgICA8aT5wZW9wbGU8L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoLTJvZjNcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1pdGFsaWMgXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgIDxoNT5cXHJcXG4gICAgICAgICAgICA8aS1jb3VudC11cFxcclxcbiAgICAgICAgICAgICAgOnN0YXJ0PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgOmVuZD1cXFwidG90YWxcXFwiXFxyXFxuICAgICAgICAgICAgICA6ZGVjaW1hbHM9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICA6ZHVyYXRpb249XFxcIjIuNVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgID48L2ktY291bnQtdXA+XFxyXFxuICAgICAgICAgIDwvaDU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgSUNvdW50VXAgZnJvbSAndnVlLWNvdW50dXAtdjInXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIHByb3BzOiBbJ3RpdGxlJywgJ3RvdGFsJywgJ2JhY2tncm91bmRDb2xvciddLFxcclxcbiAgICBkYXRhICgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgb3B0aW9uczoge1xcclxcbiAgICAgICAgICBzZXBhcmF0b3I6ICcuJ1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgIElDb3VudFVwXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcIiA6Y2xhc3M9XCJiYWNrZ3JvdW5kQ29sb3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGgtMW9mM1wiPlxyXG4gICAgICAgICAgPGk+cGVvcGxlPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0yb2YzXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtaXRhbGljIFwiPnt7dGl0bGV9fTwvcD5cclxuICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgPGktY291bnQtdXBcclxuICAgICAgICAgICAgICA6c3RhcnQ9XCIwXCJcclxuICAgICAgICAgICAgICA6ZW5kPVwidG90YWxcIlxyXG4gICAgICAgICAgICAgIDpkZWNpbWFscz1cIjBcIlxyXG4gICAgICAgICAgICAgIDpkdXJhdGlvbj1cIjIuNVwiXHJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgPjwvaS1jb3VudC11cD5cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBJQ291bnRVcCBmcm9tICd2dWUtY291bnR1cC12MidcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd0aXRsZScsICd0b3RhbCcsICdiYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHNlcGFyYXRvcjogJy4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJQ291bnRVcFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZFRvdGFsLnZ1ZT82M2IwZTQ2MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1jb3VudHVwLXYyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLWNvdW50dXAtdjJcIlxuLy8gbW9kdWxlIGlkID0gODRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcIixcbiAgICBjbGFzczogX3ZtLmJhY2tncm91bmRDb2xvclxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnQgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0yb2YzXCJcbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtaXRhbGljIFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfYygnaS1jb3VudC11cCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzdGFydFwiOiAwLFxuICAgICAgXCJlbmRcIjogX3ZtLnRvdGFsLFxuICAgICAgXCJkZWNpbWFsc1wiOiAwLFxuICAgICAgXCJkdXJhdGlvblwiOiAyLjUsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLm9wdGlvbnNcbiAgICB9XG4gIH0pXSwgMSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtMW9mM1wiXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJwZW9wbGVcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODVcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03MzBlMDM1ZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hvbWUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTczMGUwMzVkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ob21lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGhvbWUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaG9tZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03MzBlMDM1ZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjQyZjllYmNiXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA4N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiaG9tZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA4OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBIb21lXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXBhZGRpbmcgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxjYXJkVG90YWwgdGl0bGU9XCJUb3RhbCBQb3N0c1wiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCJ0b3RhbFBvc3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmRUb3RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FyZFRvdGFsIHRpdGxlPVwiVG90YWwgY29tbWVudHNcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiYmctdGVhbC04XCIgOnRvdGFsPVwidG90YWxDb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmRUb3RhbCB0aXRsZT1cIlN0YXRpYyB0b3RhbFwiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCI1MDAwNFwiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHdyYXAgZ3V0dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0xb2YyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoLTRvZjUgc20tYXV0b1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbmltcG9ydCBjYXJkVG90YWwgZnJvbSAnLi9jYXJkVG90YWwudnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnSG9tZScsXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvdGFsUG9zdHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsQ29tbWVudHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsVG9kb3M6IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkYXRhRm9yR3JhcGgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0czogdGhpcy50b3RhbFBvc3RzLFxyXG4gICAgICAgICAgICAgICAgdG9kb3M6IHRoaXMudG90YWxUb2RvcyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLnRvdGFsQ29tbWVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgY2FyZFRvdGFsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGhvbWUudnVlPzMzZmQ0NGIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIEhvbWVcXHJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQtcGFkZGluZyBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IHdyYXAgZ3V0dGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0sIFtfYygnY2FyZFRvdGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgUG9zdHNcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJnLXRlYWwtOFwiLFxuICAgICAgXCJ0b3RhbFwiOiBfdm0udG90YWxQb3N0c1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdXRvXCJcbiAgfSwgW19jKCdjYXJkVG90YWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJUb3RhbCBjb21tZW50c1wiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IF92bS50b3RhbENvbW1lbnRzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF1dG9cIlxuICB9LCBbX2MoJ2NhcmRUb3RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRpYyB0b3RhbFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IDUwMDA0XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdidXR0b24nLCBbX2MoJ2knLCBbX3ZtLl92KFwiaGVscFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0xb2YyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC00b2Y1IHNtLWF1dG9cIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkwXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNThjYzJlMDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9xdWVzdGlvbnR5cGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNThjYzJlMDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxccXVlc3Rpb250eXBlXFxcXHF1ZXN0aW9udHlwZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbnR5cGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcXVlc3Rpb250eXBlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI2M2I4NmM4M1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJxdWVzdGlvbnR5cGUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWdvLWJhY2s9XCInLydcIj5cclxuICAgICAgICAgIDxpPmFycm93X2JhY2s8L2k+XHJcbiAgICAgICAgPC9idXR0b24+IFF1ZXN0aW9uIFR5cGVcclxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8YnV0dG9uPjxpPmhlbHA8L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtcGFkZGluZyBcIj5cclxuICAgICAgICA8cS1kYXRhLXRhYmxlIDpkYXRhPVwicXVlc3Rpb250eXBlc1wiIDpjb25maWc9XCJjb25maWdcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjb2wtc291cmNlXCIgc2NvcGU9XCJjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2VsbC5kYXRhID09PSAnQXVkaXQnXCIgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdG9vbHRpcD5Tb21lIHRvb2x0aXA8L3EtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cImxhYmVsIHRleHQtd2hpdGUgYmctbmVnYXRpdmVcIj57e2NlbGwuZGF0YX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInNlbGVjdGlvblwiIHNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBjbGVhclwiIEBjbGljaz1cImNoYW5nZU1lc3NhZ2UocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZWRpdDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJkZWxldGVSb3cocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZGVsZXRlPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3EtZGF0YS10YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuaW1wb3J0IHtcclxuICAgIFBsYXRmb3JtLFxyXG4gICAgVXRpbHMsXHJcbiAgICBUb2FzdFxyXG59IGZyb20gJ3F1YXNhci1mcmFtZXdvcmsnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicXVlc3Rpb250eXBlXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWVzdGlvbiBUeXBlcycsXHJcbiAgICAgICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0aWNreUNvbHVtbnM6IDEsXHJcbiAgICAgICAgICAgICAgICByaWdodFN0aWNreUNvbHVtbnM6IDIsXHJcbiAgICAgICAgICAgICAgICBib2R5U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFBsYXRmb3JtLmlzLm1vYmlsZSA/ICc1MHZoJyA6ICc1MDBweCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFs1LCAxMCwgMTUsIDMwLCA1MCwgNTAwXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YTogJzxpPndhcm5pbmc8L2k+IE5vIGRhdGEgYXZhaWxhYmxlIHRvIHNob3cuJyxcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGFBZnRlckZpbHRlcmluZzogJzxpPndhcm5pbmc8L2k+IE5vIHJlc3VsdHMuIFBsZWFzZSByZWZpbmUgeW91ciBzZWFyY2ggdGVybXMuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUXVlc3Rpb25UeXBlSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUXVlc3Rpb25UeXBlTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZVN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcm93SGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgYm9keUhlaWdodFByb3A6ICdtYXhIZWlnaHQnLFxyXG4gICAgICAgICAgICBib2R5SGVpZ2h0OiA1MDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBwYWdpbmF0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUGFnaW5hdGlvbiA9IFV0aWxzLmNsb25lKHRoaXMuY29uZmlnLnBhZ2luYXRpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5vbGRQYWdpbmF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3dIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucm93SGVpZ2h0ID0gdmFsdWUgKyAncHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlIZWlnaHRQcm9wICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlW3RoaXMuYm9keUhlaWdodFByb3BdID0gdmFsdWUgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYm9keVN0eWxlID0gc3R5bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlIZWlnaHRQcm9wKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt2YWx1ZV0gPSB0aGlzLmJvZHlIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYm9keVN0eWxlID0gc3R5bGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldEFsbFF1ZXN0aW9uVHlwZXMoKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyhbXHJcbiAgICAgICAgJ3F1ZXN0aW9udHlwZXMnXHJcbiAgICBdKSxcclxuICAgIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xyXG4gICAgICAgICdnZXRBbGxRdWVzdGlvblR5cGVzJ1xyXG4gICAgXSlcclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9udHlwZS52dWU/ZDQ5YTNlOTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgUXVlc3Rpb24gVHlwZVxcclxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC1wYWRkaW5nIFwiXG4gIH0sIFtfYygncS1kYXRhLXRhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLnF1ZXN0aW9udHlwZXMsXG4gICAgICBcImNvbmZpZ1wiOiBfdm0uY29uZmlnLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIFtcImNvbC1zb3VyY2VcIiwgZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gWyhjZWxsLmRhdGEgPT09ICdBdWRpdCcpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCJcbiAgICAgICAgfSwgW192bS5fdihcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncS10b29sdGlwJywgW192bS5fdihcIlNvbWUgdG9vbHRpcFwiKV0pXSwgMSkgOiBfYygnc3BhbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCJcbiAgICAgICAgfSwgW192bS5fdihfdm0uX3MoY2VsbC5kYXRhKSldKV1cbiAgICAgIH1dLFxuICAgICAgW1wic2VsZWN0aW9uXCIsIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBbX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5jaGFuZ2VNZXNzYWdlKHByb3BzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgW19jKCdpJywgW192bS5fdihcImVkaXRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByaW1hcnkgY2xlYXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVJvdyhwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJkZWxldGVcIildKV0pXVxuICAgICAgfV1cbiAgICBdKVxuICB9KV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNThjYzJlMDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdjMjliNmRkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2MyOWI2ZGQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXHVzZXJcXFxcdXNlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB1c2VyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdjMjliNmRkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiYTUxNDY1YmFcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YzI5YjZkZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDk3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJ1c2VyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YzI5YjZkZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDk4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWdvLWJhY2s9XCInLydcIj5cclxuICAgICAgICAgIDxpPmFycm93X2JhY2s8L2k+XHJcbiAgICAgICAgPC9idXR0b24+IFVzZXJcclxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8YnV0dG9uPjxpPmhlbHA8L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtcGFkZGluZyBcIj5cclxuICAgICAgICA8cS1kYXRhLXRhYmxlIDpkYXRhPVwidXNlcnNcIiA6Y29uZmlnPVwiY29uZmlnXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY29sLXNvdXJjZVwiIHNjb3BlPVwiY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNlbGwuZGF0YSA9PT0gJ0F1ZGl0J1wiIGNsYXNzPVwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+U29tZSB0b29sdGlwPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCI+e3tjZWxsLmRhdGF9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzZWxlY3Rpb25cIiBzY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJjaGFuZ2VNZXNzYWdlKHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmVkaXQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5IGNsZWFyXCIgQGNsaWNrPVwiZGVsZXRlUm93KHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmRlbGV0ZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9xLWRhdGEtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7XHJcbiAgICBQbGF0Zm9ybSxcclxuICAgIFV0aWxzLFxyXG4gICAgVG9hc3RcclxufSBmcm9tICdxdWFzYXItZnJhbWV3b3JrJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5QaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZWZ0U3RpY2t5Q29sdW1uczogMSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0U3RpY2t5Q29sdW1uczogMixcclxuICAgICAgICAgICAgICAgIGJvZHlTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogUGxhdGZvcm0uaXMubW9iaWxlID8gJzUwdmgnIDogJzUwMHB4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogWzUsIDEwLCAxNSwgMzAsIDUwLCA1MDBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiAnc2luZ2xlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhOiAnPGk+d2FybmluZzwvaT4gTm8gZGF0YSBhdmFpbGFibGUgdG8gc2hvdy4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YUFmdGVyRmlsdGVyaW5nOiAnPGk+d2FybmluZzwvaT4gTm8gcmVzdWx0cy4gUGxlYXNlIHJlZmluZSB5b3VyIHNlYXJjaCB0ZXJtcy4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGaXJzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnRmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xhc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0xhc3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0VtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1VzZXJUeXBlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1VzZXJUeXBlSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICByb3dIZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICBib2R5SGVpZ2h0UHJvcDogJ21heEhlaWdodCcsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHQ6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHBhZ2luYXRpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQYWdpbmF0aW9uID0gVXRpbHMuY2xvbmUodGhpcy5jb25maWcucGFnaW5hdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLm9sZFBhZ2luYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvd0hlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5yb3dIZWlnaHQgPSB2YWx1ZSArICdweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge31cclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9keUhlaWdodFByb3AgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdGhpcy5ib2R5SGVpZ2h0UHJvcF0gPSB2YWx1ZSArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5ib2R5U3R5bGUgPSBzdHlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodFByb3AodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge31cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlW3ZhbHVlXSA9IHRoaXMuYm9keUhlaWdodCArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5ib2R5U3R5bGUgPSBzdHlsZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyhbXHJcbiAgICAgICAgJ3VzZXJzJ1xyXG4gICAgXSksXHJcbiAgICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcclxuICAgICAgICAnZ2V0QWxsVXNlcnMnXHJcbiAgICBdKVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdXNlci52dWU/NDdmYTYwZmQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgVXNlclxcclxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC1wYWRkaW5nIFwiXG4gIH0sIFtfYygncS1kYXRhLXRhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLnVzZXJzLFxuICAgICAgXCJjb25maWdcIjogX3ZtLmNvbmZpZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uc1xuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICBbXCJjb2wtc291cmNlXCIsIGZ1bmN0aW9uKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIFsoY2VsbC5kYXRhID09PSAnQXVkaXQnKSA/IF9jKCdzcGFuJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIHRleHQtd2hpdGUgYmctcHJpbWFyeVwiXG4gICAgICAgIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3EtdG9vbHRpcCcsIFtfdm0uX3YoXCJTb21lIHRvb2x0aXBcIildKV0sIDEpIDogX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1uZWdhdGl2ZVwiXG4gICAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNlbGwuZGF0YSkpXSldXG4gICAgICB9XSxcbiAgICAgIFtcInNlbGVjdGlvblwiLCBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICByZXR1cm4gW19jKCdidXR0b24nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBjbGVhclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uY2hhbmdlTWVzc2FnZShwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJlZGl0XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVSb3cocHJvcHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldKV1cbiAgICAgIH1dXG4gICAgXSlcbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdjMjliNmRkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==