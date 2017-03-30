exports.ids = [1];
exports.modules = Array(24).concat([
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Error404": 25,
		"./Error404.vue": 25,
		"./layout/leftdrawer": 29,
		"./layout/leftdrawer.vue": 29,
		"./layout/rightdrawer": 37,
		"./layout/rightdrawer.vue": 37,
		"./layout/toolbar": 42,
		"./layout/toolbar.vue": 42,
		"./views/auth/login": 47,
		"./views/auth/login.vue": 47,
		"./views/auth/logoData": 54,
		"./views/auth/logoData.js": 54,
		"./views/auth/logout": 57,
		"./views/auth/logout.vue": 57,
		"./views/auth/register": 62,
		"./views/auth/register.vue": 62,
		"./views/home/cardAniversariosPorMes": 67,
		"./views/home/cardAniversariosPorMes.vue": 67,
		"./views/home/cardCadastrosPorMes": 73,
		"./views/home/cardCadastrosPorMes.vue": 73,
		"./views/home/cardPessoasPorBairro": 78,
		"./views/home/cardPessoasPorBairro.vue": 78,
		"./views/home/cardTotal": 83,
		"./views/home/cardTotal.vue": 83,
		"./views/home/home": 89,
		"./views/home/home.vue": 89,
		"./views/questiontype/questiontype": 94,
		"./views/questiontype/questiontype.vue": 94,
		"./views/user/user": 99,
		"./views/user/user.vue": 99
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
	webpackContext.id = 24;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(27),
	  /* template */
	  __webpack_require__(28),
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
/* 26 */,
/* 27 */
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
/* 28 */
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
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(38)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(40),
	  /* template */
	  __webpack_require__(41),
	  /* scopeId */
	  "data-v-1c1f686e",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\layout\\rightdrawer.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] rightdrawer.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(39);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("ada0bb90", content, false);

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.toolbar[data-v-1c1f686e] {\r\n    min-height: 70px;\n}\r\n", "", {"version":3,"sources":["/./ClientApp/components/layout/rightdrawer.vue?5aa119c7"],"names":[],"mappings":";AAoBA;IACA,iBAAA;CACA","file":"rightdrawer.vue","sourcesContent":["<template>\r\n  <q-drawer right-side swipe-only ref=\"rightDrawer\">\r\n    <div class=\"toolbar light\">\r\n      <q-toolbar-title :padding=\"1\">\r\n          Right-side Drawer\r\n      </q-toolbar-title>\r\n    </div>\r\n\r\n    <p style=\"padding: 25px;\" class=\"text-grey-7\">\r\n      This is yet another Drawer that does not gets displayed alongside content on\r\n      bigger screens.\r\n    </p>\r\n  </q-drawer>\r\n</template>\r\n<script>\r\nexport default {\r\n\r\n}\r\n</script>\r\n<style scoped>\r\n.toolbar {\r\n    min-height: 70px;\r\n}\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 40 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('q-drawer', {
	    ref: "rightDrawer",
	    attrs: {
	      "right-side": "",
	      "swipe-only": ""
	    }
	  }, [_c('div', {
	    staticClass: "toolbar light"
	  }, [_c('q-toolbar-title', {
	    attrs: {
	      "padding": 1
	    }
	  }, [_vm._v("\n        Right-side Drawer\n    ")])], 1), _vm._v(" "), _c('p', {
	    staticClass: "text-grey-7",
	    staticStyle: {
	      "padding": "25px"
	    }
	  }, [_vm._v("\n    This is yet another Drawer that does not gets displayed alongside content on\n    bigger screens.\n  ")])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(48)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(50),
	  /* template */
	  __webpack_require__(56),
	  /* scopeId */
	  "data-v-6b229064",
	  /* cssModules */
	  null
	)
	Component.options.__file = "D:\\DotNatCore\\DotVueCore\\src\\DotVueCore.Web\\ClientApp\\components\\views\\auth\\login.vue"
	if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
	if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}
	
	module.exports = Component.exports


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(49);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("281fb524", content, false);

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n.card[data-v-6b229064] {\n  margin-bottom: 0px;\n  width: 100%;\n}\n.card-content[data-v-6b229064] {\n  min-height: 160px;\n}\nbutton[data-v-6b229064] {\n  margin-bottom: 4%;\n}\nh4[data-v-6b229064] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/auth/login.vue?780b5c21"],"names":[],"mappings":";AAuIA;EACA,mBAAA;EACA,YAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;CACA","file":"login.vue","sourcesContent":["<template>\r\n<div class=\"flex justify-center full-height\" :class=\"heightSize\">\r\n<div class=\"card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto \" id=\"login\">\r\n      <div class=\"card-title\" :class=\"finalBgColor\">\r\n        <svg id=\"logo\" viewBox=\"0 0 483 483\"\r\n             style=\"enable-background:new 0 0 460 460;\"\r\n             xml:space=\"preserve\" width=\"128px\" height=\"128px\"\r\n             v-html=\"logoMethod\">\r\n        </svg>\r\n        <h4>{{logo}}</h4>\r\n      </div>\r\n      <div class=\"card-content bg-white \">\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"email\" v-model=\"credentials.email\">\r\n          <label>Email</label>\r\n        </div>\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"password\" v-model=\"credentials.password\">\r\n          <label>Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-actions inline-block vertical-middle\">\r\n        <button class=\"teal fit \" :class=\"buttonClass\" @click=\"userLogin()\">Login</button>\r\n        <button class=\"red fit\" :class=\"buttonClass\" @click=\"userLogin()\">Login Google</button>\r\n        <button class=\"blue fit \" :class=\"buttonClass\" @click=\"sendSock()\">Send</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n</template>\r\n<script>\r\nimport {\r\n    mapGetters,\r\n    mapActions\r\n} from 'vuex'\r\n\r\nimport Stomp from 'stompjs'\r\nimport SockJS from 'sockjs-client'\r\nimport { Platform } from 'quasar-framework'\r\nimport logoData from './logoData'\r\nimport {mapMutations} from 'vuex'\r\nimport Vivus from 'vivus'\r\nlet sock = new SockJS('/broadcast')\r\nsock.onopen = function() {\r\n   console.log('open')\r\n   sock.send('test');\r\n}\r\nsock.onmessage = function(e) {\r\n   console.log('message', e)\r\n}\r\nsock.onclose = function() {\r\n   console.log('close')\r\n}\r\nexport default {\r\n    name: \"login\",\r\n    data: function data() {\r\n        return {\r\n            credentials: {\r\n                email: 'rto@rto.com',\r\n                password: '12345678'\r\n            },\r\n            logos: Object.keys(logoData),\r\n            logo: 'DotVueApp',\r\n            bgColor: 'blue',\r\n            toneColor: 10,\r\n            colors: ['purple', 'blue', 'red', 'green', 'amber'],\r\n            colorTones: ['2', '4', '6', '8', '10'],\r\n            buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],\r\n            buttonClass: 'normal',\r\n            vivus: ''\r\n        }\r\n    },\r\n    computed: {\r\n        ...mapGetters([\r\n            'getLayoutNeeded',\r\n            'getIsLoginPage',\r\n            'getMobileMode'\r\n        ]),\r\n        heightSize (){\r\n            if (Platform.is.desktop) {\r\n            return 'items-center'\r\n            }\r\n            return ''\r\n        },\r\n        finalBgColor () {\r\n            return `bg-${this.bgColor}-${this.toneColor}`\r\n        },\r\n        logoMethod () {\r\n            return logoData[this.logo]\r\n        }\r\n    },\r\n    methods: {\r\n      ...mapActions([\r\n          'setLayoutNeeded',\r\n          'setIsLoginPage',\r\n          'setMobileMode'\r\n      ]),\r\n        userLogin() {\r\n            // AUTH WILL BE CALLED with data\r\n            this.$store.dispatch('authenticateUser', this.credentials)\r\n                .then(res => {\r\n                    this.loading = false;\r\n                    this.$router.push({\r\n                        name: 'home',\r\n                        params: {\r\n                        }\r\n                    });\r\n                })\r\n                .catch(res => {\r\n                    this.loading = false;\r\n                    this.errors = res.errors;\r\n                });\r\n        },\r\n        startAnimation () {\r\n            this.vivus = new Vivus('logo', {\r\n                duration: 400,\r\n                forceRender: false\r\n            }, function(element) {\r\n                for (let item of element.el.children[0].children) {\r\n                    item.setAttribute('style', 'fill:white')\r\n                    item.setAttribute('style', 'fill:white')\r\n                }\r\n            })\r\n        },\r\n        sendSock(){\r\n          sock.send(+new Date)\r\n        }\r\n    },\r\n    mounted(){\r\n        this.setLayoutNeeded(false)\r\n        this.setIsLoginPage(true)\r\n        this.startAnimation()\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n  .card {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n  }\r\n  .card-content {\r\n    min-height: 160px;\r\n  }\r\n  button {\r\n    margin-bottom: 4%;\r\n  }\r\n  h4 {\r\n    font-weight: 300;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _getIterator2 = __webpack_require__(51);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _extends2 = __webpack_require__(13);
	
	var _extends3 = _interopRequireDefault(_extends2);
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _vuex = __webpack_require__(8);
	
	var _stompjs = __webpack_require__(52);
	
	var _stompjs2 = _interopRequireDefault(_stompjs);
	
	var _sockjsClient = __webpack_require__(53);
	
	var _sockjsClient2 = _interopRequireDefault(_sockjsClient);
	
	var _quasarFramework = __webpack_require__(4);
	
	var _logoData = __webpack_require__(54);
	
	var _logoData2 = _interopRequireDefault(_logoData);
	
	var _vivus = __webpack_require__(55);
	
	var _vivus2 = _interopRequireDefault(_vivus);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var sock = new _sockjsClient2.default('/broadcast');
	sock.onopen = function () {
	    console.log('open');
	    sock.send('test');
	};
	sock.onmessage = function (e) {
	    console.log('message', e);
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
	            },
	            logos: (0, _keys2.default)(_logoData2.default),
	            logo: 'DotVueApp',
	            bgColor: 'blue',
	            toneColor: 10,
	            colors: ['purple', 'blue', 'red', 'green', 'amber'],
	            colorTones: ['2', '4', '6', '8', '10'],
	            buttonClasses: ['normal', 'outline', 'clear', 'push', 'bordered', 'round'],
	            buttonClass: 'normal',
	            vivus: ''
	        };
	    },
	    computed: (0, _extends3.default)({}, (0, _vuex.mapGetters)(['getLayoutNeeded', 'getIsLoginPage', 'getMobileMode']), {
	        heightSize: function heightSize() {
	            if (_quasarFramework.Platform.is.desktop) {
	                return 'items-center';
	            }
	            return '';
	        },
	        finalBgColor: function finalBgColor() {
	            return 'bg-' + this.bgColor + '-' + this.toneColor;
	        },
	        logoMethod: function logoMethod() {
	            return _logoData2.default[this.logo];
	        }
	    }),
	    methods: (0, _extends3.default)({}, (0, _vuex.mapActions)(['setLayoutNeeded', 'setIsLoginPage', 'setMobileMode']), {
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
	        startAnimation: function startAnimation() {
	            this.vivus = new _vivus2.default('logo', {
	                duration: 400,
	                forceRender: false
	            }, function (element) {
	                var _iteratorNormalCompletion = true;
	                var _didIteratorError = false;
	                var _iteratorError = undefined;
	
	                try {
	                    for (var _iterator = (0, _getIterator3.default)(element.el.children[0].children), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	                        var item = _step.value;
	
	                        item.setAttribute('style', 'fill:white');
	                        item.setAttribute('style', 'fill:white');
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
	            });
	        },
	        sendSock: function sendSock() {
	            sock.send(+new Date());
	        }
	    }),
	    mounted: function mounted() {
	        this.setLayoutNeeded(false);
	        this.setIsLoginPage(true);
	        this.startAnimation();
	    }
	};

/***/ },
/* 51 */
/***/ function(module, exports) {

	module.exports = require("babel-runtime/core-js/get-iterator");

/***/ },
/* 52 */
/***/ function(module, exports) {

	module.exports = require("stompjs");

/***/ },
/* 53 */
/***/ function(module, exports) {

	module.exports = require("sockjs-client");

/***/ },
/* 54 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.default = {
		DotVueApp: "<g>\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M259.476,280.364V247.5c0-12.958-10.542-23.5-23.5-23.5s-23.5,10.542-23.5,23.5v29.672   c0,35.757-13.173,70.087-37.094,96.665l-32.981,36.646c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.82,2.521,10.592-0.558   l32.981-36.646c26.403-29.338,40.944-67.231,40.944-106.7V247.5c0-4.687,3.813-8.5,8.5-8.5s8.5,3.813,8.5,8.5v32.864   c0,44.003-16.301,86.167-45.901,118.727l-32.149,35.364c-2.786,3.064-2.56,7.809,0.505,10.595c1.437,1.307,3.242,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l32.148-35.364C241.789,373.854,259.476,328.106,259.476,280.364z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M291.476,247.5c0-30.603-24.897-55.5-55.5-55.5s-55.5,24.897-55.5,55.5v29.672c0,27.839-10.256,54.566-28.879,75.258   l-23.447,26.053c-2.771,3.079-2.521,7.821,0.558,10.593c3.079,2.771,7.82,2.519,10.592-0.558l23.447-26.053   c21.106-23.451,32.73-53.742,32.73-85.293V247.5c0-22.332,18.168-40.5,40.5-40.5c22.332,0,40.5,18.168,40.5,40.5v32.864   c0,51.979-19.256,101.789-54.223,140.252l-27.125,29.839c-2.787,3.064-2.561,7.809,0.504,10.595c1.437,1.307,3.242,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l27.126-29.839c37.481-41.23,58.123-94.622,58.123-150.342V247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M323.476,247.5c0-48.248-39.252-87.5-87.5-87.5s-87.5,39.252-87.5,87.5v29.672c0,19.92-7.339,39.045-20.665,53.851   l-21.112,23.458c-2.771,3.079-2.521,7.821,0.558,10.593c3.078,2.771,7.821,2.519,10.592-0.558l21.112-23.458   c15.809-17.565,24.515-40.254,24.515-63.886V247.5c0-39.977,32.523-72.5,72.5-72.5s72.5,32.523,72.5,72.5v32.864   c0,59.958-22.212,117.412-62.545,161.777l-7.507,8.258c-2.786,3.065-2.56,7.809,0.505,10.595c1.437,1.306,3.243,1.95,5.042,1.95   c2.04,0,4.072-0.827,5.552-2.455l7.506-8.258c42.848-47.133,66.446-108.169,66.446-171.867V247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M116.476,247.5c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5c0-25.255,9.169-49.651,25.819-68.695   c16.495-18.867,39.134-31.205,63.746-34.741c4.1-0.589,6.946-4.391,6.357-8.49c-0.589-4.1-4.394-6.942-8.49-6.357   c-28.16,4.046-54.052,18.15-72.906,39.716C126.962,190.71,116.476,218.613,116.476,247.5z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M131.476,277.172c0-4.143-3.358-7.5-7.5-7.5s-7.5,3.357-7.5,7.5c0,12.002-4.421,23.523-12.449,32.443l-18.779,20.867   c-2.771,3.078-2.521,7.82,0.558,10.592c1.434,1.29,3.227,1.925,5.015,1.925c2.052,0,4.097-0.838,5.577-2.483l18.779-20.866   C125.687,307.971,131.476,292.886,131.476,277.172z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M340.755,344.123c-4.009-1.044-8.105,1.351-9.155,5.357c-2.769,10.579-6.213,21.096-10.24,31.258   c-1.526,3.851,0.359,8.21,4.21,9.735c0.907,0.359,1.841,0.529,2.761,0.529c2.985,0,5.808-1.795,6.975-4.739   c4.249-10.725,7.884-21.822,10.806-32.986C347.16,349.271,344.761,345.172,340.755,344.123z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M315.791,158.632c-3.081-2.771-7.823-2.517-10.592,0.563s-2.517,7.822,0.563,10.591   c22.061,19.832,34.713,48.157,34.713,77.714v32.864c0,12.473-0.86,25.042-2.557,37.359c-0.565,4.104,2.303,7.888,6.406,8.453   c0.347,0.048,0.692,0.071,1.033,0.071c3.688,0,6.903-2.722,7.42-6.478c1.79-12.993,2.698-26.251,2.698-39.406V247.5   C355.476,213.695,341.011,181.304,315.791,158.632z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M280.729,153.076c1.041,0.496,2.138,0.73,3.219,0.73c2.803,0,5.492-1.579,6.777-4.278c1.781-3.739,0.192-8.215-3.547-9.995   c-10.806-5.145-22.291-8.616-34.136-10.317c-4.106-0.585-7.901,2.258-8.49,6.357s2.257,7.901,6.357,8.49   C261.257,145.55,271.289,148.582,280.729,153.076z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M235.976,96c-2.806,0-5.644,0.078-8.437,0.232c-4.136,0.228-7.304,3.766-7.076,7.901c0.229,4.136,3.763,7.321,7.902,7.075   c2.519-0.139,5.079-0.209,7.61-0.209c75.266,0,136.5,61.233,136.5,136.5v32.864c0,4.143,3.358,7.5,7.5,7.5s7.5-3.357,7.5-7.5V247.5   C387.476,163.963,319.513,96,235.976,96z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M153.972,136.693c1.477,0,2.97-0.436,4.275-1.343c12.478-8.677,26.182-15.155,40.733-19.258   c3.987-1.124,6.308-5.268,5.184-9.254s-5.269-6.304-9.254-5.184c-16.16,4.556-31.376,11.749-45.226,21.379   c-3.401,2.365-4.241,7.039-1.876,10.439C149.265,135.57,151.599,136.693,153.972,136.693z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M99.476,277.172V247.5c0-34.89,13.213-68.118,37.205-93.565c2.841-3.014,2.702-7.76-0.312-10.602   s-7.761-2.701-10.602,0.312C99.14,171.886,84.476,208.77,84.476,247.5v29.672c0,4.083-1.504,8.002-4.234,11.035l-9.248,10.275   c-2.771,3.079-2.521,7.821,0.558,10.592c1.433,1.291,3.227,1.926,5.015,1.926c2.052,0,4.096-0.837,5.577-2.482l9.248-10.275   C96.605,292.449,99.476,284.966,99.476,277.172z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M409.951,189.104c-8.226-24.446-21.299-46.531-38.856-65.642c-2.803-3.05-7.547-3.252-10.597-0.449   c-3.05,2.803-3.251,7.547-0.449,10.598c16.127,17.554,28.134,37.834,35.686,60.276c1.054,3.133,3.976,5.11,7.107,5.11   c0.793,0,1.6-0.127,2.393-0.394C409.16,197.282,411.272,193.029,409.951,189.104z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M295.247,73.822c-3.917-1.341-8.183,0.748-9.524,4.668c-1.341,3.919,0.749,8.183,4.668,9.523   c16.538,5.659,32.065,13.857,46.15,24.369c1.347,1.005,2.92,1.489,4.48,1.489c2.286,0,4.544-1.041,6.017-3.015   c2.478-3.319,1.794-8.019-1.525-10.496C330.176,88.916,313.264,79.986,295.247,73.822z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M119.442,125.908C150.991,95.659,192.377,79,235.976,79c8.096,0,16.237,0.583,24.196,1.731   c4.103,0.598,7.903-2.252,8.495-6.352c0.592-4.1-2.251-7.902-6.351-8.494C253.648,64.635,244.786,64,235.976,64   c-47.487,0-92.56,18.141-126.915,51.081c-34.248,32.838-54.277,76.905-56.397,124.084c-0.186,4.138,3.018,7.644,7.155,7.829   c0.115,0.006,0.229,0.008,0.343,0.008c3.987,0,7.306-3.14,7.487-7.163C69.594,196.527,87.988,156.066,119.442,125.908z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M235.976,32c-16.772,0-33.485,1.944-49.674,5.778c-4.031,0.954-6.524,4.996-5.57,9.026c0.955,4.03,4.997,6.524,9.027,5.569   C204.817,48.809,220.366,47,235.976,47c54.996,0,106.332,21.911,144.55,61.695c1.473,1.533,3.439,2.305,5.41,2.305   c1.869,0,3.741-0.694,5.195-2.091c2.987-2.87,3.083-7.618,0.213-10.604c-19.913-20.729-43.304-37.036-69.522-48.465   C294.666,38.002,265.783,32,235.976,32z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M67.507,125.404c1.372,1.074,3.001,1.595,4.619,1.595c2.227,0,4.431-0.987,5.91-2.876   c21.375-27.302,49.515-48.717,81.377-61.932c3.826-1.587,5.642-5.975,4.055-9.801s-5.977-5.644-9.801-4.055   c-34.241,14.201-64.478,37.21-87.441,66.539C63.672,118.137,64.246,122.851,67.507,125.404z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M131.983,38.725c1.094,0,2.205-0.24,3.255-0.748C166.816,22.73,200.709,15,235.976,15c18.378,0,36.682,2.162,54.401,6.426   c4.025,0.966,8.077-1.51,9.046-5.537c0.969-4.027-1.51-8.078-5.538-9.047C275.019,2.302,255.535,0,235.976,0   c-37.544,0-73.631,8.232-107.259,24.469c-3.73,1.801-5.294,6.285-3.493,10.015C126.517,37.163,129.195,38.725,131.983,38.725z\" />\n    <path fill=\"none\" stroke=\"#FFFFFF\" stroke-width=\"6\" d=\"M321.724,31.383c7.732,3.079,15.385,6.619,22.746,10.52c1.119,0.594,2.321,0.875,3.505,0.875   c2.688,0,5.287-1.449,6.633-3.99c1.939-3.66,0.545-8.199-3.115-10.139c-7.837-4.153-15.986-7.922-24.22-11.201   c-3.849-1.533-8.21,0.345-9.743,4.192C315.998,25.488,317.876,29.851,321.724,31.383z\" />\n    </svg>",
		Keytronic: "<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M478.665,72c0-39.704-32.296-72-72-72c-19.704,0-38.496,8.184-52,22.288C341.161,8.184,322.369,0,302.665,0    c-39.704,0-72,32.296-72,72c0,24.752,12.456,47.36,33.376,60.688L275.353,144L134.665,284.688l-26.344-26.344    c-3.128-3.128-8.184-3.128-11.312,0l-32,32c-3.128,3.128-3.128,8.184,0,11.312L91.353,328l-12.688,12.688l-26.344-26.344    c-3.128-3.128-8.184-3.128-11.312,0l-33,33c-3.128,3.128-3.128,8.184,0,11.312L34.353,385L4.345,415.008    c-3.128,3.128-3.128,8.184,0,11.312l52,52c1.56,1.56,3.608,2.344,5.656,2.344s4.096-0.784,5.656-2.344l51.008-51.008    l26.344,26.344c3.128,3.128,8.184,3.128,11.312,0l40-40c3.128-3.128,3.128-8.184,0-11.312L169.977,376l168.688-168.688    l7.312,7.312C359.305,235.544,381.913,248,406.665,248c39.704,0,72-32.296,72-72c0-19.704-8.184-38.496-22.288-52    C470.481,110.496,478.665,91.704,478.665,72z M462.665,176c0,30.872-25.128,56-56,56c-19.488,0-37.272-9.944-47.584-26.6    c-0.328-0.52-0.712-1.008-1.152-1.448l-13.608-13.608c-3.128-3.128-8.184-3.128-11.312,0l-180,180    c-3.128,3.128-3.128,8.184,0,11.312L179.353,408l-28.688,28.688l-26.344-26.344c-3.128-3.128-8.184-3.128-11.312,0l-51.008,51.008    l-40.688-40.688l30.008-30.008c3.128-3.128,3.128-8.184,0-11.312L24.977,353l21.688-21.688l26.344,26.344    c3.128,3.128,8.184,3.128,11.312,0l24-24c3.128-3.128,3.128-8.184,0-11.312L81.977,296l20.688-20.688l26.344,26.344    c3.128,3.128,8.184,3.128,11.312,0l152-152c3.128-3.128,3.128-8.184,0-11.312l-17.608-17.608c-0.44-0.44-0.92-0.824-1.448-1.152    c-16.656-10.312-26.6-28.096-26.6-47.584c0-30.872,25.128-56,56-56c17.96,0,34.968,8.768,45.504,23.456c3,4.184,10,4.184,13,0    C371.697,24.768,388.705,16,406.665,16c30.872,0,56,25.128,56,56c0,17.96-8.768,34.968-23.456,45.504    c-2.096,1.504-3.336,3.92-3.336,6.496s1.24,5,3.336,6.496C453.897,141.032,462.665,158.04,462.665,176z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"173.811\" y=\"228.009\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -91.1265 252.0189)\" width=\"169.678\" height=\"16\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"163.35\" y=\"311.983\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -175.1045 217.2252)\" width=\"22.624\" height=\"16\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M406.665,40c-17.648,0-32,14.352-32,32s14.352,32,32,32s32-14.352,32-32S424.313,40,406.665,40z M406.665,88    c-8.824,0-16-7.176-16-16s7.176-16,16-16c8.824,0,16,7.176,16,16S415.489,88,406.665,88z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"310.663\" y=\"92.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 19.8046 255.7854)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"342.661\" y=\"124.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 6.5493 287.7842)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<rect fill=\"none\" stroke-width=\"6\" x=\"374.659\" y=\"156.674\" transform=\"matrix(0.7071 -0.7071 0.7071 0.7071 -6.706 319.7831)\" width=\"16\" height=\"22.624\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M470.665,344h-14.032c-0.44-1.112-0.896-2.216-1.392-3.328l9.928-9.928c3.128-3.128,3.128-8.184,0-11.312l-33.936-33.936    c-3.128-3.128-8.184-3.128-11.312,0l-9.928,9.928c-1.112-0.496-2.216-0.952-3.328-1.392V280c0-4.424-3.576-8-8-8h-48    c-4.424,0-8,3.576-8,8v14.032c-1.112,0.44-2.216,0.896-3.328,1.392l-9.928-9.928c-3.128-3.128-8.184-3.128-11.312,0    l-33.936,33.936c-3.128,3.128-3.128,8.184,0,11.312l9.928,9.928c-0.496,1.112-0.952,2.216-1.392,3.328h-14.032    c-4.424,0-8,3.576-8,8v48c0,4.424,3.576,8,8,8h14.032c0.44,1.112,0.896,2.216,1.392,3.328l-9.928,9.928    c-3.128,3.128-3.128,8.184,0,11.312l33.936,33.936c3.128,3.128,8.184,3.128,11.312,0l9.928-9.928    c1.112,0.496,2.216,0.952,3.328,1.392V472c0,4.424,3.576,8,8,8h48c4.424,0,8-3.576,8-8v-14.032    c1.112-0.44,2.216-0.896,3.328-1.392l9.928,9.928c3.128,3.128,8.184,3.128,11.312,0l33.936-33.936    c3.128-3.128,3.128-8.184,0-11.312l-9.928-9.928c0.496-1.112,0.952-2.216,1.392-3.328h14.032c4.424,0,8-3.576,8-8v-48    C478.665,347.576,475.089,344,470.665,344z M462.665,392h-11.672c-3.496,0-6.576,2.264-7.632,5.592    c-1.216,3.864-2.856,7.8-4.88,11.672c-1.616,3.104-1.032,6.888,1.44,9.36l8.288,8.288l-22.624,22.624l-8.288-8.288    c-2.472-2.472-6.256-3.056-9.36-1.44c-3.872,2.024-7.808,3.664-11.672,4.88c-3.336,1.064-5.6,4.144-5.6,7.64V464h-32v-11.672    c0-3.496-2.264-6.576-5.592-7.632c-3.864-1.216-7.8-2.856-11.672-4.88c-3.104-1.616-6.88-1.032-9.36,1.44l-8.288,8.288    l-22.624-22.624l8.288-8.288c2.472-2.472,3.056-6.256,1.44-9.36c-2.024-3.872-3.664-7.808-4.88-11.672    c-1.064-3.336-4.144-5.6-7.64-5.6h-11.672v-32h11.672c3.496,0,6.576-2.264,7.632-5.592c1.216-3.864,2.856-7.8,4.88-11.672    c1.616-3.104,1.032-6.888-1.44-9.36l-8.288-8.288l22.624-22.624l8.288,8.288c2.48,2.48,6.256,3.048,9.36,1.44    c3.872-2.024,7.808-3.664,11.672-4.88c3.336-1.064,5.6-4.144,5.6-7.64V288h32v11.672c0,3.496,2.264,6.576,5.592,7.632    c3.864,1.216,7.8,2.856,11.672,4.88c3.104,1.608,6.888,1.04,9.36-1.44l8.288-8.288l22.624,22.624l-8.288,8.288    c-2.472,2.472-3.056,6.256-1.44,9.36c2.024,3.872,3.664,7.808,4.88,11.672c1.064,3.336,4.144,5.6,7.64,5.6h11.672V392z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M374.665,328c-26.472,0-48,21.528-48,48s21.528,48,48,48s48-21.528,48-48S401.137,328,374.665,328z M374.665,408    c-17.648,0-32-14.352-32-32s14.352-32,32-32s32,14.352,32,32S392.313,408,374.665,408z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M54.665,168h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24v-16    C65.433,192,54.665,181.232,54.665,168z M46.665,208.248c-2.336-3.144-5.104-5.912-8.248-8.248    c3.144-2.336,5.912-5.104,8.248-8.248c2.336,3.144,5.104,5.912,8.248,8.248C51.769,202.336,49.001,205.104,46.665,208.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M150.665,120h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24v-16    C161.433,144,150.665,133.232,150.665,120z M142.665,160.248c-2.336-3.144-5.104-5.912-8.248-8.248    c3.144-2.336,5.912-5.104,8.248-8.248c2.336,3.144,5.104,5.912,8.248,8.248C147.769,154.336,145.001,157.104,142.665,160.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n<g>\n\t<g>\n\t\t<path fill=\"none\" stroke-width=\"6\" d=\"M70.665,48h-16c0,13.232-10.768,24-24,24v16c13.232,0,24,10.768,24,24h16c0-13.232,10.768-24,24-24V72    C81.433,72,70.665,61.232,70.665,48z M62.665,88.248c-2.336-3.144-5.104-5.912-8.248-8.248c3.144-2.336,5.912-5.104,8.248-8.248    c2.336,3.144,5.104,5.912,8.248,8.248C67.769,82.336,65.001,85.104,62.665,88.248z\" stroke=\"#FFFFFF\"/>\n\t</g>\n</g>\n  ",
		Molectron: "\n    <path stroke=\"#FFFFFF\" fill=\"none\" stroke-width=\"6\" d=\"m398.559,166.02c-8.85-3.404-18.292-6.493-28.22-9.265 2.563-9.984 4.609-19.706 6.087-29.073 7.689-48.757-0.808-82.959-23.925-96.306-6.72-3.88-14.443-5.848-22.954-5.848-26.882,0-60.85,19.965-95.118,53.681-7.486-7.352-15.006-14.105-22.502-20.167-38.379-31.038-72.25-40.781-95.365-27.434-14.856,8.577-23.891,26.093-26.126,50.652-0.376,4.125 2.664,7.773 6.789,8.148 4.138,0.382 7.772-2.664 8.148-6.789 1.238-13.594 5.484-31.398 18.688-39.021 17.11-9.881 45.699-0.365 78.434,26.106 7.143,5.776 14.314,12.217 21.461,19.233-14.373,15.293-28.676,32.894-42.41,52.347-24.16,2.199-47.172,5.888-68.291,10.948-3.698-14.376-6.238-28.093-7.491-40.827-0.405-4.122-4.059-7.134-8.198-6.729-4.122,0.405-7.135,4.076-6.729,8.198 1.326,13.474 4.008,27.966 7.917,43.133-9.596,2.706-18.73,5.712-27.311,9.012-46.072,17.72-71.443,42.18-71.443,68.873s25.371,51.153 71.441,68.872c8.85,3.404 18.292,6.493 28.22,9.265-2.563,9.984-4.609,19.706-6.087,29.073-7.689,48.757 0.808,82.959 23.925,96.306 6.72,3.88 14.443,5.848 22.954,5.848 26.573,0 60.071-19.516 93.938-52.531 7.255,7.086 14.54,13.609 21.803,19.482 27.161,21.966 52.059,33.266 72.489,33.265 8.438-0.001 16.119-1.93 22.876-5.831 23.117-13.347 31.614-47.549 23.925-96.306-1.477-9.366-3.523-19.087-6.086-29.07 15.439-4.252 29.64-9.26 42.218-14.96 3.773-1.71 5.445-6.154 3.735-9.927-1.71-3.773-6.155-5.446-9.927-3.735-11.912,5.398-25.377,10.15-40.042,14.192-6.063-20.261-14.137-41.412-23.976-62.808 10.281-22.122 18.685-44.004 24.943-64.936 55.665,15.586 88.651,40.202 88.651,63.801 0,15.247-13.296,27.827-24.45,35.694-3.385,2.388-4.193,7.067-1.806,10.452 2.388,3.386 7.067,4.193 10.452,1.806 20.153-14.215 30.804-30.797 30.804-47.952 0-26.693-25.371-51.153-71.441-68.872zm-69.013-125.491c5.844,7.10543e-15 11.044,1.291 15.454,3.838 17.112,9.88 23.166,39.396 16.607,80.979-1.405,8.907-3.35,18.159-5.789,27.669-21.207-5.028-44.299-8.68-68.532-10.835-13.596-19.242-27.866-36.839-42.375-52.253 2.655-2.618 5.312-5.158 7.964-7.602 29.252-26.953 56.48-41.796 76.671-41.796zm-95.096,60.152c11.317,12.062 22.5,25.517 33.323,40.102-10.769-0.587-21.712-0.891-32.773-0.891-11.431,0-22.738,0.321-33.855,0.947 10.808-14.56 22.006-28.07 33.305-40.158zm-.053,269.657c-11.718-12.42-23.296-26.341-34.486-41.466 11.514,0.674 23.234,1.02 35.089,1.02 11.419,0 22.732-0.333 33.871-0.969-11.18,15.064-22.777,29.01-34.474,41.415zm.603-55.446c-16.115,0-31.578-0.624-46.314-1.784-8.277-12.076-16.284-24.78-23.907-37.984-7.503-12.995-14.405-26.107-20.657-39.155 6.49-13.661 13.707-27.412 21.596-41.077 7.64-13.232 15.75-26.063 24.177-38.307 14.374-1.099 29.429-1.693 45.105-1.693 15.273,0 29.956,0.564 43.994,1.609 8.434,12.267 16.59,25.185 24.349,38.623 7.85,13.597 15.034,27.279 21.5,40.873-6.219,12.942-13.091,25.957-20.56,38.894-7.625,13.207-15.72,26.015-24.13,38.239-14.716,1.158-29.83,1.762-45.153,1.762zm-65.615-3.655c-18.453-2.132-35.582-5.129-51.205-8.81 4.744-15.789 10.758-32.16 17.929-48.79 4.898,9.688 10.128,19.373 15.679,28.987 5.668,9.818 11.549,19.371 17.597,28.613zm1.19-152.829c-6.111,9.318-12.078,18.991-17.847,28.984-5.933,10.276-11.499,20.61-16.677,30.928-7.543-17.318-13.858-34.376-18.788-50.749 16.203-3.859 34.042-6.983 53.312-9.163zm-155.575,76.484c0-23.472 32.634-47.951 87.757-63.55 6.235,20.802 14.601,42.62 24.805,64.647-9.813,21.362-17.865,42.477-23.913,62.705-55.663-15.587-88.649-40.203-88.649-63.802zm125.454,194.363c-5.844,0-11.044-1.291-15.454-3.838-17.112-9.88-23.166-39.396-16.607-80.979 1.405-8.907 3.35-18.159 5.789-27.669 20.518,4.865 42.8,8.441 66.173,10.619 13.951,19.807 28.618,37.883 43.53,53.648-2.254,2.201-4.509,4.348-6.76,6.423-29.252,26.954-56.48,41.796-76.671,41.796zm220.214-84.584c6.559,41.583 0.505,71.099-16.607,80.979-17.113,9.879-45.699,0.364-78.434-26.106-6.893-5.574-13.814-11.767-20.712-18.499 14.761-15.578 29.462-33.603 43.563-53.579 23.432-2.151 45.822-5.697 66.389-10.509 2.445,9.526 4.394,18.793 5.801,27.714zm-9.83-42.153c-16.064,3.733-33.311,6.67-51.339,8.745 6.085-9.283 12.027-18.918 17.773-28.871 5.517-9.556 10.713-19.161 15.579-28.757 7.195,16.66 13.228,33.063 17.987,48.883zm-17.918-84.145c-5.152-10.259-10.688-20.532-16.587-30.749-5.818-10.078-11.859-19.878-18.077-29.348 19.355,2.146 37.276,5.243 53.564,9.081-4.955,16.493-11.302,33.623-18.9,51.016z\"/>\n    <path stroke=\"#FFFFFF\" fill=\"none\" stroke-width=\"6\" d=\"m235,197.392c-20.678,0-37.5,16.822-37.5,37.5s16.822,37.5 37.5,37.5 37.5-16.822 37.5-37.5-16.822-37.5-37.5-37.5zm0,60c-12.406,0-22.5-10.094-22.5-22.5s10.094-22.5 22.5-22.5 22.5,10.094 22.5,22.5-10.094,22.5-22.5,22.5z\"/>\n  "
	
	};

/***/ },
/* 55 */
/***/ function(module, exports) {

	module.exports = require("vivus");

/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    staticClass: "flex justify-center full-height",
	    class: _vm.heightSize
	  }, [_c('div', {
	    staticClass: "card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto ",
	    attrs: {
	      "id": "login"
	    }
	  }, [_c('div', {
	    staticClass: "card-title",
	    class: _vm.finalBgColor
	  }, [_c('svg', {
	    staticStyle: {
	      "enable-background": "new 0 0 460 460"
	    },
	    attrs: {
	      "id": "logo",
	      "viewBox": "0 0 483 483",
	      "xml:space": "preserve",
	      "width": "128px",
	      "height": "128px"
	    },
	    domProps: {
	      "innerHTML": _vm._s(_vm.logoMethod)
	    }
	  }), _vm._v(" "), _c('h4', [_vm._v(_vm._s(_vm.logo))])]), _vm._v(" "), _c('div', {
	    staticClass: "card-content bg-white "
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
	      "type": "email"
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
	  }), _vm._v(" "), _c('label', [_vm._v("Email")])]), _vm._v(" "), _c('div', {
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
	      "required": "",
	      "type": "password"
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
	  }), _vm._v(" "), _c('label', [_vm._v("Password")])])]), _vm._v(" "), _c('div', {
	    staticClass: "card-actions inline-block vertical-middle"
	  }, [_c('button', {
	    staticClass: "teal fit ",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.userLogin()
	      }
	    }
	  }, [_vm._v("Login")]), _vm._v(" "), _c('button', {
	    staticClass: "red fit",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.userLogin()
	      }
	    }
	  }, [_vm._v("Login Google")]), _vm._v(" "), _c('button', {
	    staticClass: "blue fit ",
	    class: _vm.buttonClass,
	    on: {
	      "click": function($event) {
	        _vm.sendSock()
	      }
	    }
	  }, [_vm._v("Send")])])])])
	},staticRenderFns: []}
	module.exports.render._withStripped = true

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(58)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(60),
	  /* template */
	  __webpack_require__(61),
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
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(59);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("4019d224", content, false);

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"logout.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 60 */
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
/* 61 */
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(63)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(65),
	  /* template */
	  __webpack_require__(66),
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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(64);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("02b4265a", content, false);

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"register.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 65 */
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
/* 66 */
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(68)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(70),
	  /* template */
	  __webpack_require__(72),
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(69);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("1ed61eb6", content, false);

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardAniversariosPorMes.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _getIterator2 = __webpack_require__(51);
	
	var _getIterator3 = _interopRequireDefault(_getIterator2);
	
	var _chart = __webpack_require__(71);
	
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
/* 71 */
/***/ function(module, exports) {

	module.exports = require("chart.js");

/***/ },
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(74)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(76),
	  /* template */
	  __webpack_require__(77),
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(75);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("4b45621c", content, false);

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardCadastrosPorMes.vue","sourceRoot":"webpack://"}]);
	
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
	
	var _chart = __webpack_require__(71);
	
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
/* 77 */
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(79)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(81),
	  /* template */
	  __webpack_require__(82),
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(80);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("51cd2172", content, false);

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cardPessoasPorBairro.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _keys = __webpack_require__(16);
	
	var _keys2 = _interopRequireDefault(_keys);
	
	var _chart = __webpack_require__(71);
	
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
/* 82 */
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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(84)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(86),
	  /* template */
	  __webpack_require__(88),
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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(85);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("73f7eb42", content, false);

/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\ni[data-v-4fb4a1f4] {\n  font-size: 54px;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/home/cardTotal.vue?63b0e460"],"names":[],"mappings":";AAyCA;EACA,gBAAA;CACA","file":"cardTotal.vue","sourcesContent":["<template>\r\n  <div class=\"card text-white animate-scale\" :class=\"backgroundColor\">\r\n    <div class=\"card-content \">\r\n      <div class=\"row\">\r\n        <div class=\"width-1of3\">\r\n          <i>people</i>\r\n        </div>\r\n        <div class=\"width-2of3\">\r\n          <p class=\"text-italic \">{{title}}</p>\r\n          <h5>\r\n            <i-count-up\r\n              :start=\"0\"\r\n              :end=\"total\"\r\n              :decimals=\"0\"\r\n              :duration=\"2.5\"\r\n              :options=\"options\"\r\n            ></i-count-up>\r\n          </h5>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</template>\r\n\r\n<script>\r\n  import ICountUp from 'vue-countup-v2'\r\n  export default {\r\n    props: ['title', 'total', 'backgroundColor'],\r\n    data () {\r\n      return {\r\n        options: {\r\n          separator: '.'\r\n        }\r\n      }\r\n    },\r\n    components: {\r\n      ICountUp\r\n    }\r\n  }\r\n</script>\r\n<style scoped>\r\n  i {\r\n    font-size: 54px;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _vueCountupV = __webpack_require__(87);
	
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
/* 87 */
/***/ function(module, exports) {

	module.exports = require("vue-countup-v2");

/***/ },
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(90)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(92),
	  /* template */
	  __webpack_require__(93),
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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(91);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("42f9ebcb", content, false);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"home.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _cardTotal = __webpack_require__(83);
	
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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(95)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(97),
	  /* template */
	  __webpack_require__(98),
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(96);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("63b86c83", content, false);

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"questiontype.vue","sourceRoot":"webpack://"}]);
	
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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	
	/* styles */
	__webpack_require__(100)
	
	var Component = __webpack_require__(26)(
	  /* script */
	  __webpack_require__(102),
	  /* template */
	  __webpack_require__(103),
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag
	
	// load the styles
	var content = __webpack_require__(101);
	if(typeof content === 'string') content = [[module.id, content, '']];
	if(content.locals) module.exports = content.locals;
	// add CSS to SSR context
	__webpack_require__(33)("a51465ba", content, false);

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(32)();
	// imports
	
	
	// module
	exports.push([module.id, "\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"user.vue","sourceRoot":"webpack://"}]);
	
	// exports


/***/ },
/* 102 */
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
/* 103 */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vRXJyb3I0MDQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZT82ZDg4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZT9kMWRlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWU/MjkzMyIsIndlYnBhY2s6Ly8vcmlnaHRkcmF3ZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWU/ODIxZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZT9jNzZkIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlPzE3NGEiLCJ3ZWJwYWNrOi8vL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvbXBqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tqcy1jbGllbnRcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ29EYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZpdnVzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/Njk3OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzkwZWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzAyM2YiLCJ3ZWJwYWNrOi8vL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzI4OGUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/MmQ1NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZT81NmVmIiwid2VicGFjazovLy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/NzM1ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU/ZmM0MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzk1ODMiLCJ3ZWJwYWNrOi8vL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYXJ0LmpzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZT9iYzViIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZT8yZmI3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/OGY5ZSIsIndlYnBhY2s6Ly8vY2FyZENhZGFzdHJvc1Bvck1lcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZT81MmE0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzdhMjUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWU/ZTlhNCIsIndlYnBhY2s6Ly8vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzMyMWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT8yYmVmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT9iNzg1Iiwid2VicGFjazovLy9jYXJkVG90YWwudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1jb3VudHVwLXYyXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlPzQxMGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlPzc2MzkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZT85NWE1Iiwid2VicGFjazovLy9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlPzgwNmUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWU/Mjg4MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZT8wOWM2Iiwid2VicGFjazovLy9xdWVzdGlvbnR5cGUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlPzZjYzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlP2RkMzUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZT9jYjFlIiwid2VicGFjazovLy91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlPzUyZmUiXSwibmFtZXMiOlsiRG90VnVlQXBwIiwiS2V5dHJvbmljIiwiTW9sZWN0cm9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7Ozs7Ozs7Ozt5QkNlQTs7MENBR0E7QUFGQTtBQUdBOzs7K0JBRUE7MEJBQ0E7QUFFQTtBQUpBO0FBTkEsRzs7Ozs7O0FDNUJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7Ozs7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LElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVCxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNILEVBQUMsK0JBQStCLGFBQWEsMEJBQTBCO0FBQ3ZFO0FBQ0EsRUFBQztBQUNELDJDIiwiZmlsZSI6IjEuMS5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBtYXAgPSB7XG5cdFwiLi9FcnJvcjQwNFwiOiAyNSxcblx0XCIuL0Vycm9yNDA0LnZ1ZVwiOiAyNSxcblx0XCIuL2xheW91dC9sZWZ0ZHJhd2VyXCI6IDI5LFxuXHRcIi4vbGF5b3V0L2xlZnRkcmF3ZXIudnVlXCI6IDI5LFxuXHRcIi4vbGF5b3V0L3JpZ2h0ZHJhd2VyXCI6IDM3LFxuXHRcIi4vbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZVwiOiAzNyxcblx0XCIuL2xheW91dC90b29sYmFyXCI6IDQyLFxuXHRcIi4vbGF5b3V0L3Rvb2xiYXIudnVlXCI6IDQyLFxuXHRcIi4vdmlld3MvYXV0aC9sb2dpblwiOiA0Nyxcblx0XCIuL3ZpZXdzL2F1dGgvbG9naW4udnVlXCI6IDQ3LFxuXHRcIi4vdmlld3MvYXV0aC9sb2dvRGF0YVwiOiA1NCxcblx0XCIuL3ZpZXdzL2F1dGgvbG9nb0RhdGEuanNcIjogNTQsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ291dFwiOiA1Nyxcblx0XCIuL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZVwiOiA1Nyxcblx0XCIuL3ZpZXdzL2F1dGgvcmVnaXN0ZXJcIjogNjIsXG5cdFwiLi92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVwiOiA2Mixcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lc1wiOiA2Nyxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIjogNjcsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXNcIjogNzMsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCI6IDczLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyb1wiOiA3OCxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCI6IDc4LFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkVG90YWxcIjogODMsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcIjogODMsXG5cdFwiLi92aWV3cy9ob21lL2hvbWVcIjogODksXG5cdFwiLi92aWV3cy9ob21lL2hvbWUudnVlXCI6IDg5LFxuXHRcIi4vdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZVwiOiA5NCxcblx0XCIuL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXCI6IDk0LFxuXHRcIi4vdmlld3MvdXNlci91c2VyXCI6IDk5LFxuXHRcIi4vdmlld3MvdXNlci91c2VyLnZ1ZVwiOiA5OVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyNDtcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMgXlxcLlxcLy4qJFxuLy8gbW9kdWxlIGlkID0gMjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwidmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vRXJyb3I0MDQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LThhY2I4MjllIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9FcnJvcjQwNC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcRXJyb3I0MDQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gRXJyb3I0MDQudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9FcnJvcjQwNC52dWVcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiZXJyb3ItcGFnZSB3aW5kb3ctaGVpZ2h0IHdpbmRvdy13aWR0aCBiZy1saWdodCBjb2x1bW4gaXRlbXMtY2VudGVyXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItY29kZSBiZy1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDQwNFxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiZXJyb3ItY2FyZCBjYXJkIGJnLXdoaXRlIGNvbHVtbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgICA8aSBjbGFzcz1cInRleHQtZ3JleS01XCI+ZXJyb3Jfb3V0bGluZTwvaT5cclxuICAgICAgICA8cCBjbGFzcz1cImNhcHRpb24gdGV4dC1jZW50ZXJcIj5Pb3BzLiBOb3RoaW5nIGhlcmUuLi48L3A+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWNlbnRlciBncm91cFwiPlxyXG4gICAgICAgICAgPGJ1dHRvbiB2LWlmPVwiY2FuR29CYWNrXCIgY2xhc3M9XCJncmV5IHB1c2ggc21hbGxcIiBAY2xpY2s9XCJnb0JhY2tcIj5cclxuICAgICAgICAgICAgPGkgY2xhc3M9XCJvbi1sZWZ0XCI+a2V5Ym9hcmRfYXJyb3dfbGVmdDwvaT5cclxuICAgICAgICAgICAgR28gYmFja1xyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8cm91dGVyLWxpbmsgdG89XCIvXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJncmV5IHB1c2ggc21hbGxcIj5cclxuICAgICAgICAgICAgICBHbyBob21lXHJcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJvbi1yaWdodFwiPmhvbWU8L2k+XHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9yb3V0ZXItbGluaz5cclxuICAgICAgICA8L3A+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgZGF0YSAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYW5Hb0JhY2s6IHdpbmRvdy5oaXN0b3J5Lmxlbmd0aCA+IDFcclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGdvQmFjayAoKSB7XHJcbiAgICAgIHdpbmRvdy5oaXN0b3J5LmdvKC0xKVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG48L3NjcmlwdD5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gRXJyb3I0MDQudnVlPzFiNTdlOGIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItcGFnZSB3aW5kb3ctaGVpZ2h0IHdpbmRvdy13aWR0aCBiZy1saWdodCBjb2x1bW4gaXRlbXMtY2VudGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItY29kZSBiZy1wcmltYXJ5IGZsZXggaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICA0MDRcXG4gIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2JywgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZXJyb3ItY2FyZCBjYXJkIGJnLXdoaXRlIGNvbHVtbiBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmV5LTVcIlxuICB9LCBbX3ZtLl92KFwiZXJyb3Jfb3V0bGluZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXB0aW9uIHRleHQtY2VudGVyXCJcbiAgfSwgW192bS5fdihcIk9vcHMuIE5vdGhpbmcgaGVyZS4uLlwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWNlbnRlciBncm91cFwiXG4gIH0sIFsoX3ZtLmNhbkdvQmFjaykgPyBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXkgcHVzaCBzbWFsbFwiLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IF92bS5nb0JhY2tcbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvbi1sZWZ0XCJcbiAgfSwgW192bS5fdihcImtleWJvYXJkX2Fycm93X2xlZnRcIildKSwgX3ZtLl92KFwiXFxuICAgICAgICAgIEdvIGJhY2tcXG4gICAgICAgIFwiKV0pIDogX3ZtLl9lKCksIF92bS5fdihcIiBcIiksIF9jKCdyb3V0ZXItbGluaycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0b1wiOiBcIi9cIlxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZ3JleSBwdXNoIHNtYWxsXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgICAgIEdvIGhvbWVcXG4gICAgICAgICAgICBcIiksIF9jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm9uLXJpZ2h0XCJcbiAgfSwgW192bS5fdihcImhvbWVcIildKV0pXSldLCAxKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi04YWNiODI5ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRXJyb3I0MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAyOFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTFjMWY2ODZlJnNjb3BlZD10cnVlIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmlnaHRkcmF3ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JpZ2h0ZHJhd2VyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xYzFmNjg2ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmlnaHRkcmF3ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTFjMWY2ODZlXCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXGxheW91dFxcXFxyaWdodGRyYXdlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSByaWdodGRyYXdlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xYzFmNjg2ZSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3JpZ2h0ZHJhd2VyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCJhZGEwYmI5MFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFjMWY2ODZlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLnRvb2xiYXJbZGF0YS12LTFjMWY2ODZlXSB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDcwcHg7XFxufVxcclxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy9sYXlvdXQvcmlnaHRkcmF3ZXIudnVlPzVhYTExOWM3XCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUFvQkE7SUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJyaWdodGRyYXdlci52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPHEtZHJhd2VyIHJpZ2h0LXNpZGUgc3dpcGUtb25seSByZWY9XFxcInJpZ2h0RHJhd2VyXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwidG9vbGJhciBsaWdodFxcXCI+XFxyXFxuICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cXFwiMVxcXCI+XFxyXFxuICAgICAgICAgIFJpZ2h0LXNpZGUgRHJhd2VyXFxyXFxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XFxyXFxuICAgIDwvZGl2PlxcclxcblxcclxcbiAgICA8cCBzdHlsZT1cXFwicGFkZGluZzogMjVweDtcXFwiIGNsYXNzPVxcXCJ0ZXh0LWdyZXktN1xcXCI+XFxyXFxuICAgICAgVGhpcyBpcyB5ZXQgYW5vdGhlciBEcmF3ZXIgdGhhdCBkb2VzIG5vdCBnZXRzIGRpc3BsYXllZCBhbG9uZ3NpZGUgY29udGVudCBvblxcclxcbiAgICAgIGJpZ2dlciBzY3JlZW5zLlxcclxcbiAgICA8L3A+XFxyXFxuICA8L3EtZHJhd2VyPlxcclxcbjwvdGVtcGxhdGU+XFxyXFxuPHNjcmlwdD5cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuXFxyXFxufVxcclxcbjwvc2NyaXB0PlxcclxcbjxzdHlsZSBzY29wZWQ+XFxyXFxuLnRvb2xiYXIge1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xcclxcbn1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMxZjY4NmUmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9sYXlvdXQvcmlnaHRkcmF3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzOVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPHEtZHJhd2VyIHJpZ2h0LXNpZGUgc3dpcGUtb25seSByZWY9XCJyaWdodERyYXdlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cInRvb2xiYXIgbGlnaHRcIj5cclxuICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgIFJpZ2h0LXNpZGUgRHJhd2VyXHJcbiAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHAgc3R5bGU9XCJwYWRkaW5nOiAyNXB4O1wiIGNsYXNzPVwidGV4dC1ncmV5LTdcIj5cclxuICAgICAgVGhpcyBpcyB5ZXQgYW5vdGhlciBEcmF3ZXIgdGhhdCBkb2VzIG5vdCBnZXRzIGRpc3BsYXllZCBhbG9uZ3NpZGUgY29udGVudCBvblxyXG4gICAgICBiaWdnZXIgc2NyZWVucy5cclxuICAgIDwvcD5cclxuICA8L3EtZHJhd2VyPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcblxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4udG9vbGJhciB7XHJcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xyXG59XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByaWdodGRyYXdlci52dWU/NWFhMTE5YzciLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ3EtZHJhd2VyJywge1xuICAgIHJlZjogXCJyaWdodERyYXdlclwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJpZ2h0LXNpZGVcIjogXCJcIixcbiAgICAgIFwic3dpcGUtb25seVwiOiBcIlwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyIGxpZ2h0XCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgICAgICBSaWdodC1zaWRlIERyYXdlclxcbiAgICBcIildKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWdyZXktN1wiLFxuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcInBhZGRpbmdcIjogXCIyNXB4XCJcbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgVGhpcyBpcyB5ZXQgYW5vdGhlciBEcmF3ZXIgdGhhdCBkb2VzIG5vdCBnZXRzIGRpc3BsYXllZCBhbG9uZ3NpZGUgY29udGVudCBvblxcbiAgICBiaWdnZXIgc2NyZWVucy5cXG4gIFwiKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMWMxZjY4NmUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDQxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNmIyMjkwNjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vbG9naW4udnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTZiMjI5MDY0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dpbi52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNmIyMjkwNjRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcYXV0aFxcXFxsb2dpbi52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBsb2dpbi52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmIyMjkwNjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dpbi52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMjgxZmI1MjRcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YjIyOTA2NCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uY2FyZFtkYXRhLXYtNmIyMjkwNjRdIHtcXG4gIG1hcmdpbi1ib3R0b206IDBweDtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG4uY2FyZC1jb250ZW50W2RhdGEtdi02YjIyOTA2NF0ge1xcbiAgbWluLWhlaWdodDogMTYwcHg7XFxufVxcbmJ1dHRvbltkYXRhLXYtNmIyMjkwNjRdIHtcXG4gIG1hcmdpbi1ib3R0b206IDQlO1xcbn1cXG5oNFtkYXRhLXYtNmIyMjkwNjRdIHtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZT83ODBiNWMyMVwiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBdUlBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0NBQ0E7QUFDQTtFQUNBLGtCQUFBO0NBQ0E7QUFDQTtFQUNBLGtCQUFBO0NBQ0E7QUFDQTtFQUNBLGlCQUFBO0NBQ0FcIixcImZpbGVcIjpcImxvZ2luLnZ1ZVwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI8dGVtcGxhdGU+XFxyXFxuPGRpdiBjbGFzcz1cXFwiZmxleCBqdXN0aWZ5LWNlbnRlciBmdWxsLWhlaWdodFxcXCIgOmNsYXNzPVxcXCJoZWlnaHRTaXplXFxcIj5cXHJcXG48ZGl2IGNsYXNzPVxcXCJjYXJkIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgd2lkdGgtM29mNCBiZy13aWR0aC0yb2Y1IGd0LWJnLXdpZHRoLTFvZjQgc20tYXV0byBcXFwiIGlkPVxcXCJsb2dpblxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCIgOmNsYXNzPVxcXCJmaW5hbEJnQ29sb3JcXFwiPlxcclxcbiAgICAgICAgPHN2ZyBpZD1cXFwibG9nb1xcXCIgdmlld0JveD1cXFwiMCAwIDQ4MyA0ODNcXFwiXFxyXFxuICAgICAgICAgICAgIHN0eWxlPVxcXCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MCA0NjA7XFxcIlxcclxcbiAgICAgICAgICAgICB4bWw6c3BhY2U9XFxcInByZXNlcnZlXFxcIiB3aWR0aD1cXFwiMTI4cHhcXFwiIGhlaWdodD1cXFwiMTI4cHhcXFwiXFxyXFxuICAgICAgICAgICAgIHYtaHRtbD1cXFwibG9nb01ldGhvZFxcXCI+XFxyXFxuICAgICAgICA8L3N2Zz5cXHJcXG4gICAgICAgIDxoND57e2xvZ299fTwvaDQ+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50IGJnLXdoaXRlIFxcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGFja2VkLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzPVxcXCJmdWxsLXdpZHRoXFxcIiB0eXBlPVxcXCJlbWFpbFxcXCIgdi1tb2RlbD1cXFwiY3JlZGVudGlhbHMuZW1haWxcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWw+RW1haWw8L2xhYmVsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJzdGFja2VkLWxhYmVsXFxcIj5cXHJcXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzPVxcXCJmdWxsLXdpZHRoXFxcIiB0eXBlPVxcXCJwYXNzd29yZFxcXCIgdi1tb2RlbD1cXFwiY3JlZGVudGlhbHMucGFzc3dvcmRcXFwiPlxcclxcbiAgICAgICAgICA8bGFiZWw+UGFzc3dvcmQ8L2xhYmVsPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1hY3Rpb25zIGlubGluZS1ibG9jayB2ZXJ0aWNhbC1taWRkbGVcXFwiPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwidGVhbCBmaXQgXFxcIiA6Y2xhc3M9XFxcImJ1dHRvbkNsYXNzXFxcIiBAY2xpY2s9XFxcInVzZXJMb2dpbigpXFxcIj5Mb2dpbjwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwicmVkIGZpdFxcXCIgOmNsYXNzPVxcXCJidXR0b25DbGFzc1xcXCIgQGNsaWNrPVxcXCJ1c2VyTG9naW4oKVxcXCI+TG9naW4gR29vZ2xlPC9idXR0b24+XFxyXFxuICAgICAgICA8YnV0dG9uIGNsYXNzPVxcXCJibHVlIGZpdCBcXFwiIDpjbGFzcz1cXFwiYnV0dG9uQ2xhc3NcXFwiIEBjbGljaz1cXFwic2VuZFNvY2soKVxcXCI+U2VuZDwvYnV0dG9uPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L2Rpdj5cXHJcXG48L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQ+XFxyXFxuaW1wb3J0IHtcXHJcXG4gICAgbWFwR2V0dGVycyxcXHJcXG4gICAgbWFwQWN0aW9uc1xcclxcbn0gZnJvbSAndnVleCdcXHJcXG5cXHJcXG5pbXBvcnQgU3RvbXAgZnJvbSAnc3RvbXBqcydcXHJcXG5pbXBvcnQgU29ja0pTIGZyb20gJ3NvY2tqcy1jbGllbnQnXFxyXFxuaW1wb3J0IHsgUGxhdGZvcm0gfSBmcm9tICdxdWFzYXItZnJhbWV3b3JrJ1xcclxcbmltcG9ydCBsb2dvRGF0YSBmcm9tICcuL2xvZ29EYXRhJ1xcclxcbmltcG9ydCB7bWFwTXV0YXRpb25zfSBmcm9tICd2dWV4J1xcclxcbmltcG9ydCBWaXZ1cyBmcm9tICd2aXZ1cydcXHJcXG5sZXQgc29jayA9IG5ldyBTb2NrSlMoJy9icm9hZGNhc3QnKVxcclxcbnNvY2sub25vcGVuID0gZnVuY3Rpb24oKSB7XFxyXFxuICAgY29uc29sZS5sb2coJ29wZW4nKVxcclxcbiAgIHNvY2suc2VuZCgndGVzdCcpO1xcclxcbn1cXHJcXG5zb2NrLm9ubWVzc2FnZSA9IGZ1bmN0aW9uKGUpIHtcXHJcXG4gICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUpXFxyXFxufVxcclxcbnNvY2sub25jbG9zZSA9IGZ1bmN0aW9uKCkge1xcclxcbiAgIGNvbnNvbGUubG9nKCdjbG9zZScpXFxyXFxufVxcclxcbmV4cG9ydCBkZWZhdWx0IHtcXHJcXG4gICAgbmFtZTogXFxcImxvZ2luXFxcIixcXHJcXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcXHJcXG4gICAgICAgIHJldHVybiB7XFxyXFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6IHtcXHJcXG4gICAgICAgICAgICAgICAgZW1haWw6ICdydG9AcnRvLmNvbScsXFxyXFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2NzgnXFxyXFxuICAgICAgICAgICAgfSxcXHJcXG4gICAgICAgICAgICBsb2dvczogT2JqZWN0LmtleXMobG9nb0RhdGEpLFxcclxcbiAgICAgICAgICAgIGxvZ286ICdEb3RWdWVBcHAnLFxcclxcbiAgICAgICAgICAgIGJnQ29sb3I6ICdibHVlJyxcXHJcXG4gICAgICAgICAgICB0b25lQ29sb3I6IDEwLFxcclxcbiAgICAgICAgICAgIGNvbG9yczogWydwdXJwbGUnLCAnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAnYW1iZXInXSxcXHJcXG4gICAgICAgICAgICBjb2xvclRvbmVzOiBbJzInLCAnNCcsICc2JywgJzgnLCAnMTAnXSxcXHJcXG4gICAgICAgICAgICBidXR0b25DbGFzc2VzOiBbJ25vcm1hbCcsJ291dGxpbmUnLCAnY2xlYXInLCAncHVzaCcsICdib3JkZXJlZCcsICdyb3VuZCddLFxcclxcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzOiAnbm9ybWFsJyxcXHJcXG4gICAgICAgICAgICB2aXZ1czogJydcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcHV0ZWQ6IHtcXHJcXG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1xcclxcbiAgICAgICAgICAgICdnZXRMYXlvdXROZWVkZWQnLFxcclxcbiAgICAgICAgICAgICdnZXRJc0xvZ2luUGFnZScsXFxyXFxuICAgICAgICAgICAgJ2dldE1vYmlsZU1vZGUnXFxyXFxuICAgICAgICBdKSxcXHJcXG4gICAgICAgIGhlaWdodFNpemUgKCl7XFxyXFxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzLmRlc2t0b3ApIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4gJ2l0ZW1zLWNlbnRlcidcXHJcXG4gICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgcmV0dXJuICcnXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgZmluYWxCZ0NvbG9yICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4gYGJnLSR7dGhpcy5iZ0NvbG9yfS0ke3RoaXMudG9uZUNvbG9yfWBcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBsb2dvTWV0aG9kICgpIHtcXHJcXG4gICAgICAgICAgICByZXR1cm4gbG9nb0RhdGFbdGhpcy5sb2dvXVxcclxcbiAgICAgICAgfVxcclxcbiAgICB9LFxcclxcbiAgICBtZXRob2RzOiB7XFxyXFxuICAgICAgLi4ubWFwQWN0aW9ucyhbXFxyXFxuICAgICAgICAgICdzZXRMYXlvdXROZWVkZWQnLFxcclxcbiAgICAgICAgICAnc2V0SXNMb2dpblBhZ2UnLFxcclxcbiAgICAgICAgICAnc2V0TW9iaWxlTW9kZSdcXHJcXG4gICAgICBdKSxcXHJcXG4gICAgICAgIHVzZXJMb2dpbigpIHtcXHJcXG4gICAgICAgICAgICAvLyBBVVRIIFdJTEwgQkUgQ0FMTEVEIHdpdGggZGF0YVxcclxcbiAgICAgICAgICAgIHRoaXMuJHN0b3JlLmRpc3BhdGNoKCdhdXRoZW50aWNhdGVVc2VyJywgdGhpcy5jcmVkZW50aWFscylcXHJcXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdob21lJyxcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICB9XFxyXFxuICAgICAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgICAgICAgICAgfSlcXHJcXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gcmVzLmVycm9ycztcXHJcXG4gICAgICAgICAgICAgICAgfSk7XFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgc3RhcnRBbmltYXRpb24gKCkge1xcclxcbiAgICAgICAgICAgIHRoaXMudml2dXMgPSBuZXcgVml2dXMoJ2xvZ28nLCB7XFxyXFxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXFxyXFxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyOiBmYWxzZVxcclxcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKGVsZW1lbnQpIHtcXHJcXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlbGVtZW50LmVsLmNoaWxkcmVuWzBdLmNoaWxkcmVuKSB7XFxyXFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpXFxyXFxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpXFxyXFxuICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICB9KVxcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIHNlbmRTb2NrKCl7XFxyXFxuICAgICAgICAgIHNvY2suc2VuZCgrbmV3IERhdGUpXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIG1vdW50ZWQoKXtcXHJcXG4gICAgICAgIHRoaXMuc2V0TGF5b3V0TmVlZGVkKGZhbHNlKVxcclxcbiAgICAgICAgdGhpcy5zZXRJc0xvZ2luUGFnZSh0cnVlKVxcclxcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigpXFxyXFxuICAgIH1cXHJcXG59XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIC5jYXJkIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC5jYXJkLWNvbnRlbnQge1xcclxcbiAgICBtaW4taGVpZ2h0OiAxNjBweDtcXHJcXG4gIH1cXHJcXG4gIGJ1dHRvbiB7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDQlO1xcclxcbiAgfVxcclxcbiAgaDQge1xcclxcbiAgICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgfVxcclxcbjwvc3R5bGU+XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi02YjIyOTA2NCZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA0OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJmbGV4IGp1c3RpZnktY2VudGVyIGZ1bGwtaGVpZ2h0XCIgOmNsYXNzPVwiaGVpZ2h0U2l6ZVwiPlxyXG48ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHdpZHRoLTNvZjQgYmctd2lkdGgtMm9mNSBndC1iZy13aWR0aC0xb2Y0IHNtLWF1dG8gXCIgaWQ9XCJsb2dpblwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZVwiIDpjbGFzcz1cImZpbmFsQmdDb2xvclwiPlxyXG4gICAgICAgIDxzdmcgaWQ9XCJsb2dvXCIgdmlld0JveD1cIjAgMCA0ODMgNDgzXCJcclxuICAgICAgICAgICAgIHN0eWxlPVwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwO1wiXHJcbiAgICAgICAgICAgICB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHdpZHRoPVwiMTI4cHhcIiBoZWlnaHQ9XCIxMjhweFwiXHJcbiAgICAgICAgICAgICB2LWh0bWw9XCJsb2dvTWV0aG9kXCI+XHJcbiAgICAgICAgPC9zdmc+XHJcbiAgICAgICAgPGg0Pnt7bG9nb319PC9oND5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgYmctd2hpdGUgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrZWQtbGFiZWxcIj5cclxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiB0eXBlPVwiZW1haWxcIiB2LW1vZGVsPVwiY3JlZGVudGlhbHMuZW1haWxcIj5cclxuICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrZWQtbGFiZWxcIj5cclxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzcz1cImZ1bGwtd2lkdGhcIiB0eXBlPVwicGFzc3dvcmRcIiB2LW1vZGVsPVwiY3JlZGVudGlhbHMucGFzc3dvcmRcIj5cclxuICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zIGlubGluZS1ibG9jayB2ZXJ0aWNhbC1taWRkbGVcIj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwidGVhbCBmaXQgXCIgOmNsYXNzPVwiYnV0dG9uQ2xhc3NcIiBAY2xpY2s9XCJ1c2VyTG9naW4oKVwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInJlZCBmaXRcIiA6Y2xhc3M9XCJidXR0b25DbGFzc1wiIEBjbGljaz1cInVzZXJMb2dpbigpXCI+TG9naW4gR29vZ2xlPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJsdWUgZml0IFwiIDpjbGFzcz1cImJ1dHRvbkNsYXNzXCIgQGNsaWNrPVwic2VuZFNvY2soKVwiPlNlbmQ8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcblxyXG5pbXBvcnQgU3RvbXAgZnJvbSAnc3RvbXBqcydcclxuaW1wb3J0IFNvY2tKUyBmcm9tICdzb2NranMtY2xpZW50J1xyXG5pbXBvcnQgeyBQbGF0Zm9ybSB9IGZyb20gJ3F1YXNhci1mcmFtZXdvcmsnXHJcbmltcG9ydCBsb2dvRGF0YSBmcm9tICcuL2xvZ29EYXRhJ1xyXG5pbXBvcnQge21hcE11dGF0aW9uc30gZnJvbSAndnVleCdcclxuaW1wb3J0IFZpdnVzIGZyb20gJ3ZpdnVzJ1xyXG5sZXQgc29jayA9IG5ldyBTb2NrSlMoJy9icm9hZGNhc3QnKVxyXG5zb2NrLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xyXG4gICBjb25zb2xlLmxvZygnb3BlbicpXHJcbiAgIHNvY2suc2VuZCgndGVzdCcpO1xyXG59XHJcbnNvY2sub25tZXNzYWdlID0gZnVuY3Rpb24oZSkge1xyXG4gICBjb25zb2xlLmxvZygnbWVzc2FnZScsIGUpXHJcbn1cclxuc29jay5vbmNsb3NlID0gZnVuY3Rpb24oKSB7XHJcbiAgIGNvbnNvbGUubG9nKCdjbG9zZScpXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJsb2dpblwiLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgZW1haWw6ICdydG9AcnRvLmNvbScsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJzEyMzQ1Njc4J1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBsb2dvczogT2JqZWN0LmtleXMobG9nb0RhdGEpLFxyXG4gICAgICAgICAgICBsb2dvOiAnRG90VnVlQXBwJyxcclxuICAgICAgICAgICAgYmdDb2xvcjogJ2JsdWUnLFxyXG4gICAgICAgICAgICB0b25lQ29sb3I6IDEwLFxyXG4gICAgICAgICAgICBjb2xvcnM6IFsncHVycGxlJywgJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2FtYmVyJ10sXHJcbiAgICAgICAgICAgIGNvbG9yVG9uZXM6IFsnMicsICc0JywgJzYnLCAnOCcsICcxMCddLFxyXG4gICAgICAgICAgICBidXR0b25DbGFzc2VzOiBbJ25vcm1hbCcsJ291dGxpbmUnLCAnY2xlYXInLCAncHVzaCcsICdib3JkZXJlZCcsICdyb3VuZCddLFxyXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ25vcm1hbCcsXHJcbiAgICAgICAgICAgIHZpdnVzOiAnJ1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIC4uLm1hcEdldHRlcnMoW1xyXG4gICAgICAgICAgICAnZ2V0TGF5b3V0TmVlZGVkJyxcclxuICAgICAgICAgICAgJ2dldElzTG9naW5QYWdlJyxcclxuICAgICAgICAgICAgJ2dldE1vYmlsZU1vZGUnXHJcbiAgICAgICAgXSksXHJcbiAgICAgICAgaGVpZ2h0U2l6ZSAoKXtcclxuICAgICAgICAgICAgaWYgKFBsYXRmb3JtLmlzLmRlc2t0b3ApIHtcclxuICAgICAgICAgICAgcmV0dXJuICdpdGVtcy1jZW50ZXInXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICcnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBmaW5hbEJnQ29sb3IgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYGJnLSR7dGhpcy5iZ0NvbG9yfS0ke3RoaXMudG9uZUNvbG9yfWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGxvZ29NZXRob2QgKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbG9nb0RhdGFbdGhpcy5sb2dvXVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIC4uLm1hcEFjdGlvbnMoW1xyXG4gICAgICAgICAgJ3NldExheW91dE5lZWRlZCcsXHJcbiAgICAgICAgICAnc2V0SXNMb2dpblBhZ2UnLFxyXG4gICAgICAgICAgJ3NldE1vYmlsZU1vZGUnXHJcbiAgICAgIF0pLFxyXG4gICAgICAgIHVzZXJMb2dpbigpIHtcclxuICAgICAgICAgICAgLy8gQVVUSCBXSUxMIEJFIENBTExFRCB3aXRoIGRhdGFcclxuICAgICAgICAgICAgdGhpcy4kc3RvcmUuZGlzcGF0Y2goJ2F1dGhlbnRpY2F0ZVVzZXInLCB0aGlzLmNyZWRlbnRpYWxzKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6ICdob21lJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2gocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHJlcy5lcnJvcnM7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy52aXZ1cyA9IG5ldyBWaXZ1cygnbG9nbycsIHtcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXHJcbiAgICAgICAgICAgICAgICBmb3JjZVJlbmRlcjogZmFsc2VcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBlbGVtZW50LmVsLmNoaWxkcmVuWzBdLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKVxyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOndoaXRlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbmRTb2NrKCl7XHJcbiAgICAgICAgICBzb2NrLnNlbmQoK25ldyBEYXRlKVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCl7XHJcbiAgICAgICAgdGhpcy5zZXRMYXlvdXROZWVkZWQoZmFsc2UpXHJcbiAgICAgICAgdGhpcy5zZXRJc0xvZ2luUGFnZSh0cnVlKVxyXG4gICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIC5jYXJkIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAuY2FyZC1jb250ZW50IHtcclxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xyXG4gIH1cclxuICBidXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgfVxyXG4gIGg0IHtcclxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gbG9naW4udnVlPzc4MGI1YzIxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvY29yZS1qcy9nZXQtaXRlcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gNTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic3RvbXBqc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInN0b21wanNcIlxuLy8gbW9kdWxlIGlkID0gNTJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwic29ja2pzLWNsaWVudFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInNvY2tqcy1jbGllbnRcIlxuLy8gbW9kdWxlIGlkID0gNTNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLyogZXNsaW50LWRpc2FibGUgKi9cbmV4cG9ydCBkZWZhdWx0IHtcbiAgRG90VnVlQXBwOiBgPGc+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMjU5LjQ3NiwyODAuMzY0VjI0Ny41YzAtMTIuOTU4LTEwLjU0Mi0yMy41LTIzLjUtMjMuNXMtMjMuNSwxMC41NDItMjMuNSwyMy41djI5LjY3MiAgIGMwLDM1Ljc1Ny0xMy4xNzMsNzAuMDg3LTM3LjA5NCw5Ni42NjVsLTMyLjk4MSwzNi42NDZjLTIuNzcxLDMuMDc5LTIuNTIxLDcuODIxLDAuNTU4LDEwLjU5M2MzLjA3OCwyLjc3MSw3LjgyLDIuNTIxLDEwLjU5Mi0wLjU1OCAgIGwzMi45ODEtMzYuNjQ2YzI2LjQwMy0yOS4zMzgsNDAuOTQ0LTY3LjIzMSw0MC45NDQtMTA2LjdWMjQ3LjVjMC00LjY4NywzLjgxMy04LjUsOC41LTguNXM4LjUsMy44MTMsOC41LDguNXYzMi44NjQgICBjMCw0NC4wMDMtMTYuMzAxLDg2LjE2Ny00NS45MDEsMTE4LjcyN2wtMzIuMTQ5LDM1LjM2NGMtMi43ODYsMy4wNjQtMi41Niw3LjgwOSwwLjUwNSwxMC41OTVjMS40MzcsMS4zMDcsMy4yNDIsMS45NSw1LjA0MiwxLjk1ICAgYzIuMDQsMCw0LjA3Mi0wLjgyNyw1LjU1Mi0yLjQ1NWwzMi4xNDgtMzUuMzY0QzI0MS43ODksMzczLjg1NCwyNTkuNDc2LDMyOC4xMDYsMjU5LjQ3NiwyODAuMzY0elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMjkxLjQ3NiwyNDcuNWMwLTMwLjYwMy0yNC44OTctNTUuNS01NS41LTU1LjVzLTU1LjUsMjQuODk3LTU1LjUsNTUuNXYyOS42NzJjMCwyNy44MzktMTAuMjU2LDU0LjU2Ni0yOC44NzksNzUuMjU4ICAgbC0yMy40NDcsMjYuMDUzYy0yLjc3MSwzLjA3OS0yLjUyMSw3LjgyMSwwLjU1OCwxMC41OTNjMy4wNzksMi43NzEsNy44MiwyLjUxOSwxMC41OTItMC41NThsMjMuNDQ3LTI2LjA1MyAgIGMyMS4xMDYtMjMuNDUxLDMyLjczLTUzLjc0MiwzMi43My04NS4yOTNWMjQ3LjVjMC0yMi4zMzIsMTguMTY4LTQwLjUsNDAuNS00MC41YzIyLjMzMiwwLDQwLjUsMTguMTY4LDQwLjUsNDAuNXYzMi44NjQgICBjMCw1MS45NzktMTkuMjU2LDEwMS43ODktNTQuMjIzLDE0MC4yNTJsLTI3LjEyNSwyOS44MzljLTIuNzg3LDMuMDY0LTIuNTYxLDcuODA5LDAuNTA0LDEwLjU5NWMxLjQzNywxLjMwNywzLjI0MiwxLjk1LDUuMDQyLDEuOTUgICBjMi4wNCwwLDQuMDcyLTAuODI3LDUuNTUyLTIuNDU1bDI3LjEyNi0yOS44MzljMzcuNDgxLTQxLjIzLDU4LjEyMy05NC42MjIsNTguMTIzLTE1MC4zNDJWMjQ3LjV6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0zMjMuNDc2LDI0Ny41YzAtNDguMjQ4LTM5LjI1Mi04Ny41LTg3LjUtODcuNXMtODcuNSwzOS4yNTItODcuNSw4Ny41djI5LjY3MmMwLDE5LjkyLTcuMzM5LDM5LjA0NS0yMC42NjUsNTMuODUxICAgbC0yMS4xMTIsMjMuNDU4Yy0yLjc3MSwzLjA3OS0yLjUyMSw3LjgyMSwwLjU1OCwxMC41OTNjMy4wNzgsMi43NzEsNy44MjEsMi41MTksMTAuNTkyLTAuNTU4bDIxLjExMi0yMy40NTggICBjMTUuODA5LTE3LjU2NSwyNC41MTUtNDAuMjU0LDI0LjUxNS02My44ODZWMjQ3LjVjMC0zOS45NzcsMzIuNTIzLTcyLjUsNzIuNS03Mi41czcyLjUsMzIuNTIzLDcyLjUsNzIuNXYzMi44NjQgICBjMCw1OS45NTgtMjIuMjEyLDExNy40MTItNjIuNTQ1LDE2MS43NzdsLTcuNTA3LDguMjU4Yy0yLjc4NiwzLjA2NS0yLjU2LDcuODA5LDAuNTA1LDEwLjU5NWMxLjQzNywxLjMwNiwzLjI0MywxLjk1LDUuMDQyLDEuOTUgICBjMi4wNCwwLDQuMDcyLTAuODI3LDUuNTUyLTIuNDU1bDcuNTA2LTguMjU4YzQyLjg0OC00Ny4xMzMsNjYuNDQ2LTEwOC4xNjksNjYuNDQ2LTE3MS44NjdWMjQ3LjV6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0xMTYuNDc2LDI0Ny41YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjVjMC0yNS4yNTUsOS4xNjktNDkuNjUxLDI1LjgxOS02OC42OTUgICBjMTYuNDk1LTE4Ljg2NywzOS4xMzQtMzEuMjA1LDYzLjc0Ni0zNC43NDFjNC4xLTAuNTg5LDYuOTQ2LTQuMzkxLDYuMzU3LTguNDljLTAuNTg5LTQuMS00LjM5NC02Ljk0Mi04LjQ5LTYuMzU3ICAgYy0yOC4xNiw0LjA0Ni01NC4wNTIsMTguMTUtNzIuOTA2LDM5LjcxNkMxMjYuOTYyLDE5MC43MSwxMTYuNDc2LDIxOC42MTMsMTE2LjQ3NiwyNDcuNXpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTEzMS40NzYsMjc3LjE3MmMwLTQuMTQzLTMuMzU4LTcuNS03LjUtNy41cy03LjUsMy4zNTctNy41LDcuNWMwLDEyLjAwMi00LjQyMSwyMy41MjMtMTIuNDQ5LDMyLjQ0M2wtMTguNzc5LDIwLjg2NyAgIGMtMi43NzEsMy4wNzgtMi41MjEsNy44MiwwLjU1OCwxMC41OTJjMS40MzQsMS4yOSwzLjIyNywxLjkyNSw1LjAxNSwxLjkyNWMyLjA1MiwwLDQuMDk3LTAuODM4LDUuNTc3LTIuNDgzbDE4Ljc3OS0yMC44NjYgICBDMTI1LjY4NywzMDcuOTcxLDEzMS40NzYsMjkyLjg4NiwxMzEuNDc2LDI3Ny4xNzJ6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0zNDAuNzU1LDM0NC4xMjNjLTQuMDA5LTEuMDQ0LTguMTA1LDEuMzUxLTkuMTU1LDUuMzU3Yy0yLjc2OSwxMC41NzktNi4yMTMsMjEuMDk2LTEwLjI0LDMxLjI1OCAgIGMtMS41MjYsMy44NTEsMC4zNTksOC4yMSw0LjIxLDkuNzM1YzAuOTA3LDAuMzU5LDEuODQxLDAuNTI5LDIuNzYxLDAuNTI5YzIuOTg1LDAsNS44MDgtMS43OTUsNi45NzUtNC43MzkgICBjNC4yNDktMTAuNzI1LDcuODg0LTIxLjgyMiwxMC44MDYtMzIuOTg2QzM0Ny4xNiwzNDkuMjcxLDM0NC43NjEsMzQ1LjE3MiwzNDAuNzU1LDM0NC4xMjN6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0zMTUuNzkxLDE1OC42MzJjLTMuMDgxLTIuNzcxLTcuODIzLTIuNTE3LTEwLjU5MiwwLjU2M3MtMi41MTcsNy44MjIsMC41NjMsMTAuNTkxICAgYzIyLjA2MSwxOS44MzIsMzQuNzEzLDQ4LjE1NywzNC43MTMsNzcuNzE0djMyLjg2NGMwLDEyLjQ3My0wLjg2LDI1LjA0Mi0yLjU1NywzNy4zNTljLTAuNTY1LDQuMTA0LDIuMzAzLDcuODg4LDYuNDA2LDguNDUzICAgYzAuMzQ3LDAuMDQ4LDAuNjkyLDAuMDcxLDEuMDMzLDAuMDcxYzMuNjg4LDAsNi45MDMtMi43MjIsNy40Mi02LjQ3OGMxLjc5LTEyLjk5MywyLjY5OC0yNi4yNTEsMi42OTgtMzkuNDA2VjI0Ny41ICAgQzM1NS40NzYsMjEzLjY5NSwzNDEuMDExLDE4MS4zMDQsMzE1Ljc5MSwxNTguNjMyelwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMjgwLjcyOSwxNTMuMDc2YzEuMDQxLDAuNDk2LDIuMTM4LDAuNzMsMy4yMTksMC43M2MyLjgwMywwLDUuNDkyLTEuNTc5LDYuNzc3LTQuMjc4YzEuNzgxLTMuNzM5LDAuMTkyLTguMjE1LTMuNTQ3LTkuOTk1ICAgYy0xMC44MDYtNS4xNDUtMjIuMjkxLTguNjE2LTM0LjEzNi0xMC4zMTdjLTQuMTA2LTAuNTg1LTcuOTAxLDIuMjU4LTguNDksNi4zNTdzMi4yNTcsNy45MDEsNi4zNTcsOC40OSAgIEMyNjEuMjU3LDE0NS41NSwyNzEuMjg5LDE0OC41ODIsMjgwLjcyOSwxNTMuMDc2elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMjM1Ljk3Niw5NmMtMi44MDYsMC01LjY0NCwwLjA3OC04LjQzNywwLjIzMmMtNC4xMzYsMC4yMjgtNy4zMDQsMy43NjYtNy4wNzYsNy45MDFjMC4yMjksNC4xMzYsMy43NjMsNy4zMjEsNy45MDIsNy4wNzUgICBjMi41MTktMC4xMzksNS4wNzktMC4yMDksNy42MS0wLjIwOWM3NS4yNjYsMCwxMzYuNSw2MS4yMzMsMTM2LjUsMTM2LjV2MzIuODY0YzAsNC4xNDMsMy4zNTgsNy41LDcuNSw3LjVzNy41LTMuMzU3LDcuNS03LjVWMjQ3LjUgICBDMzg3LjQ3NiwxNjMuOTYzLDMxOS41MTMsOTYsMjM1Ljk3Niw5NnpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTE1My45NzIsMTM2LjY5M2MxLjQ3NywwLDIuOTctMC40MzYsNC4yNzUtMS4zNDNjMTIuNDc4LTguNjc3LDI2LjE4Mi0xNS4xNTUsNDAuNzMzLTE5LjI1OCAgIGMzLjk4Ny0xLjEyNCw2LjMwOC01LjI2OCw1LjE4NC05LjI1NHMtNS4yNjktNi4zMDQtOS4yNTQtNS4xODRjLTE2LjE2LDQuNTU2LTMxLjM3NiwxMS43NDktNDUuMjI2LDIxLjM3OSAgIGMtMy40MDEsMi4zNjUtNC4yNDEsNy4wMzktMS44NzYsMTAuNDM5QzE0OS4yNjUsMTM1LjU3LDE1MS41OTksMTM2LjY5MywxNTMuOTcyLDEzNi42OTN6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk05OS40NzYsMjc3LjE3MlYyNDcuNWMwLTM0Ljg5LDEzLjIxMy02OC4xMTgsMzcuMjA1LTkzLjU2NWMyLjg0MS0zLjAxNCwyLjcwMi03Ljc2LTAuMzEyLTEwLjYwMiAgIHMtNy43NjEtMi43MDEtMTAuNjAyLDAuMzEyQzk5LjE0LDE3MS44ODYsODQuNDc2LDIwOC43Nyw4NC40NzYsMjQ3LjV2MjkuNjcyYzAsNC4wODMtMS41MDQsOC4wMDItNC4yMzQsMTEuMDM1bC05LjI0OCwxMC4yNzUgICBjLTIuNzcxLDMuMDc5LTIuNTIxLDcuODIxLDAuNTU4LDEwLjU5MmMxLjQzMywxLjI5MSwzLjIyNywxLjkyNiw1LjAxNSwxLjkyNmMyLjA1MiwwLDQuMDk2LTAuODM3LDUuNTc3LTIuNDgybDkuMjQ4LTEwLjI3NSAgIEM5Ni42MDUsMjkyLjQ0OSw5OS40NzYsMjg0Ljk2Niw5OS40NzYsMjc3LjE3MnpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTQwOS45NTEsMTg5LjEwNGMtOC4yMjYtMjQuNDQ2LTIxLjI5OS00Ni41MzEtMzguODU2LTY1LjY0MmMtMi44MDMtMy4wNS03LjU0Ny0zLjI1Mi0xMC41OTctMC40NDkgICBjLTMuMDUsMi44MDMtMy4yNTEsNy41NDctMC40NDksMTAuNTk4YzE2LjEyNywxNy41NTQsMjguMTM0LDM3LjgzNCwzNS42ODYsNjAuMjc2YzEuMDU0LDMuMTMzLDMuOTc2LDUuMTEsNy4xMDcsNS4xMSAgIGMwLjc5MywwLDEuNi0wLjEyNywyLjM5My0wLjM5NEM0MDkuMTYsMTk3LjI4Miw0MTEuMjcyLDE5My4wMjksNDA5Ljk1MSwxODkuMTA0elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMjk1LjI0Nyw3My44MjJjLTMuOTE3LTEuMzQxLTguMTgzLDAuNzQ4LTkuNTI0LDQuNjY4Yy0xLjM0MSwzLjkxOSwwLjc0OSw4LjE4Myw0LjY2OCw5LjUyMyAgIGMxNi41MzgsNS42NTksMzIuMDY1LDEzLjg1Nyw0Ni4xNSwyNC4zNjljMS4zNDcsMS4wMDUsMi45MiwxLjQ4OSw0LjQ4LDEuNDg5YzIuMjg2LDAsNC41NDQtMS4wNDEsNi4wMTctMy4wMTUgICBjMi40NzgtMy4zMTksMS43OTQtOC4wMTktMS41MjUtMTAuNDk2QzMzMC4xNzYsODguOTE2LDMxMy4yNjQsNzkuOTg2LDI5NS4yNDcsNzMuODIyelwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMTE5LjQ0MiwxMjUuOTA4QzE1MC45OTEsOTUuNjU5LDE5Mi4zNzcsNzksMjM1Ljk3Niw3OWM4LjA5NiwwLDE2LjIzNywwLjU4MywyNC4xOTYsMS43MzEgICBjNC4xMDMsMC41OTgsNy45MDMtMi4yNTIsOC40OTUtNi4zNTJjMC41OTItNC4xLTIuMjUxLTcuOTAyLTYuMzUxLTguNDk0QzI1My42NDgsNjQuNjM1LDI0NC43ODYsNjQsMjM1Ljk3Niw2NCAgIGMtNDcuNDg3LDAtOTIuNTYsMTguMTQxLTEyNi45MTUsNTEuMDgxYy0zNC4yNDgsMzIuODM4LTU0LjI3Nyw3Ni45MDUtNTYuMzk3LDEyNC4wODRjLTAuMTg2LDQuMTM4LDMuMDE4LDcuNjQ0LDcuMTU1LDcuODI5ICAgYzAuMTE1LDAuMDA2LDAuMjI5LDAuMDA4LDAuMzQzLDAuMDA4YzMuOTg3LDAsNy4zMDYtMy4xNCw3LjQ4Ny03LjE2M0M2OS41OTQsMTk2LjUyNyw4Ny45ODgsMTU2LjA2NiwxMTkuNDQyLDEyNS45MDh6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yMzUuOTc2LDMyYy0xNi43NzIsMC0zMy40ODUsMS45NDQtNDkuNjc0LDUuNzc4Yy00LjAzMSwwLjk1NC02LjUyNCw0Ljk5Ni01LjU3LDkuMDI2YzAuOTU1LDQuMDMsNC45OTcsNi41MjQsOS4wMjcsNS41NjkgICBDMjA0LjgxNyw0OC44MDksMjIwLjM2Niw0NywyMzUuOTc2LDQ3YzU0Ljk5NiwwLDEwNi4zMzIsMjEuOTExLDE0NC41NSw2MS42OTVjMS40NzMsMS41MzMsMy40MzksMi4zMDUsNS40MSwyLjMwNSAgIGMxLjg2OSwwLDMuNzQxLTAuNjk0LDUuMTk1LTIuMDkxYzIuOTg3LTIuODcsMy4wODMtNy42MTgsMC4yMTMtMTAuNjA0Yy0xOS45MTMtMjAuNzI5LTQzLjMwNC0zNy4wMzYtNjkuNTIyLTQ4LjQ2NSAgIEMyOTQuNjY2LDM4LjAwMiwyNjUuNzgzLDMyLDIzNS45NzYsMzJ6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk02Ny41MDcsMTI1LjQwNGMxLjM3MiwxLjA3NCwzLjAwMSwxLjU5NSw0LjYxOSwxLjU5NWMyLjIyNywwLDQuNDMxLTAuOTg3LDUuOTEtMi44NzYgICBjMjEuMzc1LTI3LjMwMiw0OS41MTUtNDguNzE3LDgxLjM3Ny02MS45MzJjMy44MjYtMS41ODcsNS42NDItNS45NzUsNC4wNTUtOS44MDFzLTUuOTc3LTUuNjQ0LTkuODAxLTQuMDU1ICAgYy0zNC4yNDEsMTQuMjAxLTY0LjQ3OCwzNy4yMS04Ny40NDEsNjYuNTM5QzYzLjY3MiwxMTguMTM3LDY0LjI0NiwxMjIuODUxLDY3LjUwNywxMjUuNDA0elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMTMxLjk4MywzOC43MjVjMS4wOTQsMCwyLjIwNS0wLjI0LDMuMjU1LTAuNzQ4QzE2Ni44MTYsMjIuNzMsMjAwLjcwOSwxNSwyMzUuOTc2LDE1YzE4LjM3OCwwLDM2LjY4MiwyLjE2Miw1NC40MDEsNi40MjYgICBjNC4wMjUsMC45NjYsOC4wNzctMS41MSw5LjA0Ni01LjUzN2MwLjk2OS00LjAyNy0xLjUxLTguMDc4LTUuNTM4LTkuMDQ3QzI3NS4wMTksMi4zMDIsMjU1LjUzNSwwLDIzNS45NzYsMCAgIGMtMzcuNTQ0LDAtNzMuNjMxLDguMjMyLTEwNy4yNTksMjQuNDY5Yy0zLjczLDEuODAxLTUuMjk0LDYuMjg1LTMuNDkzLDEwLjAxNUMxMjYuNTE3LDM3LjE2MywxMjkuMTk1LDM4LjcyNSwxMzEuOTgzLDM4LjcyNXpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTMyMS43MjQsMzEuMzgzYzcuNzMyLDMuMDc5LDE1LjM4NSw2LjYxOSwyMi43NDYsMTAuNTJjMS4xMTksMC41OTQsMi4zMjEsMC44NzUsMy41MDUsMC44NzUgICBjMi42ODgsMCw1LjI4Ny0xLjQ0OSw2LjYzMy0zLjk5YzEuOTM5LTMuNjYsMC41NDUtOC4xOTktMy4xMTUtMTAuMTM5Yy03LjgzNy00LjE1My0xNS45ODYtNy45MjItMjQuMjItMTEuMjAxICAgYy0zLjg0OS0xLjUzMy04LjIxLDAuMzQ1LTkuNzQzLDQuMTkyQzMxNS45OTgsMjUuNDg4LDMxNy44NzYsMjkuODUxLDMyMS43MjQsMzEuMzgzelwiIC8+XG4gICAgPC9zdmc+YCxcbiAgS2V5dHJvbmljOiBgPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNDc4LjY2NSw3MmMwLTM5LjcwNC0zMi4yOTYtNzItNzItNzJjLTE5LjcwNCwwLTM4LjQ5Niw4LjE4NC01MiwyMi4yODhDMzQxLjE2MSw4LjE4NCwzMjIuMzY5LDAsMzAyLjY2NSwwICAgIGMtMzkuNzA0LDAtNzIsMzIuMjk2LTcyLDcyYzAsMjQuNzUyLDEyLjQ1Niw0Ny4zNiwzMy4zNzYsNjAuNjg4TDI3NS4zNTMsMTQ0TDEzNC42NjUsMjg0LjY4OGwtMjYuMzQ0LTI2LjM0NCAgICBjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwbC0zMiwzMmMtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJMOTEuMzUzLDMyOGwtMTIuNjg4LDEyLjY4OGwtMjYuMzQ0LTI2LjM0NCAgICBjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwbC0zMywzM2MtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJMMzQuMzUzLDM4NUw0LjM0NSw0MTUuMDA4ICAgIGMtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJsNTIsNTJjMS41NiwxLjU2LDMuNjA4LDIuMzQ0LDUuNjU2LDIuMzQ0czQuMDk2LTAuNzg0LDUuNjU2LTIuMzQ0bDUxLjAwOC01MS4wMDggICAgbDI2LjM0NCwyNi4zNDRjMy4xMjgsMy4xMjgsOC4xODQsMy4xMjgsMTEuMzEyLDBsNDAtNDBjMy4xMjgtMy4xMjgsMy4xMjgtOC4xODQsMC0xMS4zMTJMMTY5Ljk3NywzNzZsMTY4LjY4OC0xNjguNjg4ICAgIGw3LjMxMiw3LjMxMkMzNTkuMzA1LDIzNS41NDQsMzgxLjkxMywyNDgsNDA2LjY2NSwyNDhjMzkuNzA0LDAsNzItMzIuMjk2LDcyLTcyYzAtMTkuNzA0LTguMTg0LTM4LjQ5Ni0yMi4yODgtNTIgICAgQzQ3MC40ODEsMTEwLjQ5Niw0NzguNjY1LDkxLjcwNCw0NzguNjY1LDcyeiBNNDYyLjY2NSwxNzZjMCwzMC44NzItMjUuMTI4LDU2LTU2LDU2Yy0xOS40ODgsMC0zNy4yNzItOS45NDQtNDcuNTg0LTI2LjYgICAgYy0wLjMyOC0wLjUyLTAuNzEyLTEuMDA4LTEuMTUyLTEuNDQ4bC0xMy42MDgtMTMuNjA4Yy0zLjEyOC0zLjEyOC04LjE4NC0zLjEyOC0xMS4zMTIsMGwtMTgwLDE4MCAgICBjLTMuMTI4LDMuMTI4LTMuMTI4LDguMTg0LDAsMTEuMzEyTDE3OS4zNTMsNDA4bC0yOC42ODgsMjguNjg4bC0yNi4zNDQtMjYuMzQ0Yy0zLjEyOC0zLjEyOC04LjE4NC0zLjEyOC0xMS4zMTIsMGwtNTEuMDA4LDUxLjAwOCAgICBsLTQwLjY4OC00MC42ODhsMzAuMDA4LTMwLjAwOGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMkwyNC45NzcsMzUzbDIxLjY4OC0yMS42ODhsMjYuMzQ0LDI2LjM0NCAgICBjMy4xMjgsMy4xMjgsOC4xODQsMy4xMjgsMTEuMzEyLDBsMjQtMjRjMy4xMjgtMy4xMjgsMy4xMjgtOC4xODQsMC0xMS4zMTJMODEuOTc3LDI5NmwyMC42ODgtMjAuNjg4bDI2LjM0NCwyNi4zNDQgICAgYzMuMTI4LDMuMTI4LDguMTg0LDMuMTI4LDExLjMxMiwwbDE1Mi0xNTJjMy4xMjgtMy4xMjgsMy4xMjgtOC4xODQsMC0xMS4zMTJsLTE3LjYwOC0xNy42MDhjLTAuNDQtMC40NC0wLjkyLTAuODI0LTEuNDQ4LTEuMTUyICAgIGMtMTYuNjU2LTEwLjMxMi0yNi42LTI4LjA5Ni0yNi42LTQ3LjU4NGMwLTMwLjg3MiwyNS4xMjgtNTYsNTYtNTZjMTcuOTYsMCwzNC45NjgsOC43NjgsNDUuNTA0LDIzLjQ1NmMzLDQuMTg0LDEwLDQuMTg0LDEzLDAgICAgQzM3MS42OTcsMjQuNzY4LDM4OC43MDUsMTYsNDA2LjY2NSwxNmMzMC44NzIsMCw1NiwyNS4xMjgsNTYsNTZjMCwxNy45Ni04Ljc2OCwzNC45NjgtMjMuNDU2LDQ1LjUwNCAgICBjLTIuMDk2LDEuNTA0LTMuMzM2LDMuOTItMy4zMzYsNi40OTZzMS4yNCw1LDMuMzM2LDYuNDk2QzQ1My44OTcsMTQxLjAzMiw0NjIuNjY1LDE1OC4wNCw0NjIuNjY1LDE3NnpcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgeD1cIjE3My44MTFcIiB5PVwiMjI4LjAwOVwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC05MS4xMjY1IDI1Mi4wMTg5KVwiIHdpZHRoPVwiMTY5LjY3OFwiIGhlaWdodD1cIjE2XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxyZWN0IGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIHg9XCIxNjMuMzVcIiB5PVwiMzExLjk4M1wiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC0xNzUuMTA0NSAyMTcuMjI1MilcIiB3aWR0aD1cIjIyLjYyNFwiIGhlaWdodD1cIjE2XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNDA2LjY2NSw0MGMtMTcuNjQ4LDAtMzIsMTQuMzUyLTMyLDMyczE0LjM1MiwzMiwzMiwzMnMzMi0xNC4zNTIsMzItMzJTNDI0LjMxMyw0MCw0MDYuNjY1LDQweiBNNDA2LjY2NSw4OCAgICBjLTguODI0LDAtMTYtNy4xNzYtMTYtMTZzNy4xNzYtMTYsMTYtMTZjOC44MjQsMCwxNiw3LjE3NiwxNiwxNlM0MTUuNDg5LDg4LDQwNi42NjUsODh6XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxyZWN0IGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIHg9XCIzMTAuNjYzXCIgeT1cIjkyLjY3NFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIDE5LjgwNDYgMjU1Ljc4NTQpXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjIyLjYyNFwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cmVjdCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiB4PVwiMzQyLjY2MVwiIHk9XCIxMjQuNjc0XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgNi41NDkzIDI4Ny43ODQyKVwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyMi42MjRcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgeD1cIjM3NC42NTlcIiB5PVwiMTU2LjY3NFwiIHRyYW5zZm9ybT1cIm1hdHJpeCgwLjcwNzEgLTAuNzA3MSAwLjcwNzEgMC43MDcxIC02LjcwNiAzMTkuNzgzMSlcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjIuNjI0XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNDcwLjY2NSwzNDRoLTE0LjAzMmMtMC40NC0xLjExMi0wLjg5Ni0yLjIxNi0xLjM5Mi0zLjMyOGw5LjkyOC05LjkyOGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMmwtMzMuOTM2LTMzLjkzNiAgICBjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwbC05LjkyOCw5LjkyOGMtMS4xMTItMC40OTYtMi4yMTYtMC45NTItMy4zMjgtMS4zOTJWMjgwYzAtNC40MjQtMy41NzYtOC04LThoLTQ4ICAgIGMtNC40MjQsMC04LDMuNTc2LTgsOHYxNC4wMzJjLTEuMTEyLDAuNDQtMi4yMTYsMC44OTYtMy4zMjgsMS4zOTJsLTkuOTI4LTkuOTI4Yy0zLjEyOC0zLjEyOC04LjE4NC0zLjEyOC0xMS4zMTIsMCAgICBsLTMzLjkzNiwzMy45MzZjLTMuMTI4LDMuMTI4LTMuMTI4LDguMTg0LDAsMTEuMzEybDkuOTI4LDkuOTI4Yy0wLjQ5NiwxLjExMi0wLjk1MiwyLjIxNi0xLjM5MiwzLjMyOGgtMTQuMDMyICAgIGMtNC40MjQsMC04LDMuNTc2LTgsOHY0OGMwLDQuNDI0LDMuNTc2LDgsOCw4aDE0LjAzMmMwLjQ0LDEuMTEyLDAuODk2LDIuMjE2LDEuMzkyLDMuMzI4bC05LjkyOCw5LjkyOCAgICBjLTMuMTI4LDMuMTI4LTMuMTI4LDguMTg0LDAsMTEuMzEybDMzLjkzNiwzMy45MzZjMy4xMjgsMy4xMjgsOC4xODQsMy4xMjgsMTEuMzEyLDBsOS45MjgtOS45MjggICAgYzEuMTEyLDAuNDk2LDIuMjE2LDAuOTUyLDMuMzI4LDEuMzkyVjQ3MmMwLDQuNDI0LDMuNTc2LDgsOCw4aDQ4YzQuNDI0LDAsOC0zLjU3Niw4LTh2LTE0LjAzMiAgICBjMS4xMTItMC40NCwyLjIxNi0wLjg5NiwzLjMyOC0xLjM5Mmw5LjkyOCw5LjkyOGMzLjEyOCwzLjEyOCw4LjE4NCwzLjEyOCwxMS4zMTIsMGwzMy45MzYtMzMuOTM2ICAgIGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMmwtOS45MjgtOS45MjhjMC40OTYtMS4xMTIsMC45NTItMi4yMTYsMS4zOTItMy4zMjhoMTQuMDMyYzQuNDI0LDAsOC0zLjU3Niw4LTh2LTQ4ICAgIEM0NzguNjY1LDM0Ny41NzYsNDc1LjA4OSwzNDQsNDcwLjY2NSwzNDR6IE00NjIuNjY1LDM5MmgtMTEuNjcyYy0zLjQ5NiwwLTYuNTc2LDIuMjY0LTcuNjMyLDUuNTkyICAgIGMtMS4yMTYsMy44NjQtMi44NTYsNy44LTQuODgsMTEuNjcyYy0xLjYxNiwzLjEwNC0xLjAzMiw2Ljg4OCwxLjQ0LDkuMzZsOC4yODgsOC4yODhsLTIyLjYyNCwyMi42MjRsLTguMjg4LTguMjg4ICAgIGMtMi40NzItMi40NzItNi4yNTYtMy4wNTYtOS4zNi0xLjQ0Yy0zLjg3MiwyLjAyNC03LjgwOCwzLjY2NC0xMS42NzIsNC44OGMtMy4zMzYsMS4wNjQtNS42LDQuMTQ0LTUuNiw3LjY0VjQ2NGgtMzJ2LTExLjY3MiAgICBjMC0zLjQ5Ni0yLjI2NC02LjU3Ni01LjU5Mi03LjYzMmMtMy44NjQtMS4yMTYtNy44LTIuODU2LTExLjY3Mi00Ljg4Yy0zLjEwNC0xLjYxNi02Ljg4LTEuMDMyLTkuMzYsMS40NGwtOC4yODgsOC4yODggICAgbC0yMi42MjQtMjIuNjI0bDguMjg4LTguMjg4YzIuNDcyLTIuNDcyLDMuMDU2LTYuMjU2LDEuNDQtOS4zNmMtMi4wMjQtMy44NzItMy42NjQtNy44MDgtNC44OC0xMS42NzIgICAgYy0xLjA2NC0zLjMzNi00LjE0NC01LjYtNy42NC01LjZoLTExLjY3MnYtMzJoMTEuNjcyYzMuNDk2LDAsNi41NzYtMi4yNjQsNy42MzItNS41OTJjMS4yMTYtMy44NjQsMi44NTYtNy44LDQuODgtMTEuNjcyICAgIGMxLjYxNi0zLjEwNCwxLjAzMi02Ljg4OC0xLjQ0LTkuMzZsLTguMjg4LTguMjg4bDIyLjYyNC0yMi42MjRsOC4yODgsOC4yODhjMi40OCwyLjQ4LDYuMjU2LDMuMDQ4LDkuMzYsMS40NCAgICBjMy44NzItMi4wMjQsNy44MDgtMy42NjQsMTEuNjcyLTQuODhjMy4zMzYtMS4wNjQsNS42LTQuMTQ0LDUuNi03LjY0VjI4OGgzMnYxMS42NzJjMCwzLjQ5NiwyLjI2NCw2LjU3Niw1LjU5Miw3LjYzMiAgICBjMy44NjQsMS4yMTYsNy44LDIuODU2LDExLjY3Miw0Ljg4YzMuMTA0LDEuNjA4LDYuODg4LDEuMDQsOS4zNi0xLjQ0bDguMjg4LTguMjg4bDIyLjYyNCwyMi42MjRsLTguMjg4LDguMjg4ICAgIGMtMi40NzIsMi40NzItMy4wNTYsNi4yNTYtMS40NCw5LjM2YzIuMDI0LDMuODcyLDMuNjY0LDcuODA4LDQuODgsMTEuNjcyYzEuMDY0LDMuMzM2LDQuMTQ0LDUuNiw3LjY0LDUuNmgxMS42NzJWMzkyelwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTM3NC42NjUsMzI4Yy0yNi40NzIsMC00OCwyMS41MjgtNDgsNDhzMjEuNTI4LDQ4LDQ4LDQ4czQ4LTIxLjUyOCw0OC00OFM0MDEuMTM3LDMyOCwzNzQuNjY1LDMyOHogTTM3NC42NjUsNDA4ICAgIGMtMTcuNjQ4LDAtMzItMTQuMzUyLTMyLTMyczE0LjM1Mi0zMiwzMi0zMnMzMiwxNC4zNTIsMzIsMzJTMzkyLjMxMyw0MDgsMzc0LjY2NSw0MDh6XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNTQuNjY1LDE2OGgtMTZjMCwxMy4yMzItMTAuNzY4LDI0LTI0LDI0djE2YzEzLjIzMiwwLDI0LDEwLjc2OCwyNCwyNGgxNmMwLTEzLjIzMiwxMC43NjgtMjQsMjQtMjR2LTE2ICAgIEM2NS40MzMsMTkyLDU0LjY2NSwxODEuMjMyLDU0LjY2NSwxNjh6IE00Ni42NjUsMjA4LjI0OGMtMi4zMzYtMy4xNDQtNS4xMDQtNS45MTItOC4yNDgtOC4yNDggICAgYzMuMTQ0LTIuMzM2LDUuOTEyLTUuMTA0LDguMjQ4LTguMjQ4YzIuMzM2LDMuMTQ0LDUuMTA0LDUuOTEyLDguMjQ4LDguMjQ4QzUxLjc2OSwyMDIuMzM2LDQ5LjAwMSwyMDUuMTA0LDQ2LjY2NSwyMDguMjQ4elwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTE1MC42NjUsMTIwaC0xNmMwLDEzLjIzMi0xMC43NjgsMjQtMjQsMjR2MTZjMTMuMjMyLDAsMjQsMTAuNzY4LDI0LDI0aDE2YzAtMTMuMjMyLDEwLjc2OC0yNCwyNC0yNHYtMTYgICAgQzE2MS40MzMsMTQ0LDE1MC42NjUsMTMzLjIzMiwxNTAuNjY1LDEyMHogTTE0Mi42NjUsMTYwLjI0OGMtMi4zMzYtMy4xNDQtNS4xMDQtNS45MTItOC4yNDgtOC4yNDggICAgYzMuMTQ0LTIuMzM2LDUuOTEyLTUuMTA0LDguMjQ4LTguMjQ4YzIuMzM2LDMuMTQ0LDUuMTA0LDUuOTEyLDguMjQ4LDguMjQ4QzE0Ny43NjksMTU0LjMzNiwxNDUuMDAxLDE1Ny4xMDQsMTQyLjY2NSwxNjAuMjQ4elwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTcwLjY2NSw0OGgtMTZjMCwxMy4yMzItMTAuNzY4LDI0LTI0LDI0djE2YzEzLjIzMiwwLDI0LDEwLjc2OCwyNCwyNGgxNmMwLTEzLjIzMiwxMC43NjgtMjQsMjQtMjRWNzIgICAgQzgxLjQzMyw3Miw3MC42NjUsNjEuMjMyLDcwLjY2NSw0OHogTTYyLjY2NSw4OC4yNDhjLTIuMzM2LTMuMTQ0LTUuMTA0LTUuOTEyLTguMjQ4LTguMjQ4YzMuMTQ0LTIuMzM2LDUuOTEyLTUuMTA0LDguMjQ4LTguMjQ4ICAgIGMyLjMzNiwzLjE0NCw1LjEwNCw1LjkxMiw4LjI0OCw4LjI0OEM2Ny43NjksODIuMzM2LDY1LjAwMSw4NS4xMDQsNjIuNjY1LDg4LjI0OHpcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG4gIGAsXG4gIE1vbGVjdHJvbjogYFxuICAgIDxwYXRoIHN0cm9rZT1cIiNGRkZGRkZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwibTM5OC41NTksMTY2LjAyYy04Ljg1LTMuNDA0LTE4LjI5Mi02LjQ5My0yOC4yMi05LjI2NSAyLjU2My05Ljk4NCA0LjYwOS0xOS43MDYgNi4wODctMjkuMDczIDcuNjg5LTQ4Ljc1Ny0wLjgwOC04Mi45NTktMjMuOTI1LTk2LjMwNi02LjcyLTMuODgtMTQuNDQzLTUuODQ4LTIyLjk1NC01Ljg0OC0yNi44ODIsMC02MC44NSwxOS45NjUtOTUuMTE4LDUzLjY4MS03LjQ4Ni03LjM1Mi0xNS4wMDYtMTQuMTA1LTIyLjUwMi0yMC4xNjctMzguMzc5LTMxLjAzOC03Mi4yNS00MC43ODEtOTUuMzY1LTI3LjQzNC0xNC44NTYsOC41NzctMjMuODkxLDI2LjA5My0yNi4xMjYsNTAuNjUyLTAuMzc2LDQuMTI1IDIuNjY0LDcuNzczIDYuNzg5LDguMTQ4IDQuMTM4LDAuMzgyIDcuNzcyLTIuNjY0IDguMTQ4LTYuNzg5IDEuMjM4LTEzLjU5NCA1LjQ4NC0zMS4zOTggMTguNjg4LTM5LjAyMSAxNy4xMS05Ljg4MSA0NS42OTktMC4zNjUgNzguNDM0LDI2LjEwNiA3LjE0Myw1Ljc3NiAxNC4zMTQsMTIuMjE3IDIxLjQ2MSwxOS4yMzMtMTQuMzczLDE1LjI5My0yOC42NzYsMzIuODk0LTQyLjQxLDUyLjM0Ny0yNC4xNiwyLjE5OS00Ny4xNzIsNS44ODgtNjguMjkxLDEwLjk0OC0zLjY5OC0xNC4zNzYtNi4yMzgtMjguMDkzLTcuNDkxLTQwLjgyNy0wLjQwNS00LjEyMi00LjA1OS03LjEzNC04LjE5OC02LjcyOS00LjEyMiwwLjQwNS03LjEzNSw0LjA3Ni02LjcyOSw4LjE5OCAxLjMyNiwxMy40NzQgNC4wMDgsMjcuOTY2IDcuOTE3LDQzLjEzMy05LjU5NiwyLjcwNi0xOC43Myw1LjcxMi0yNy4zMTEsOS4wMTItNDYuMDcyLDE3LjcyLTcxLjQ0Myw0Mi4xOC03MS40NDMsNjguODczczI1LjM3MSw1MS4xNTMgNzEuNDQxLDY4Ljg3MmM4Ljg1LDMuNDA0IDE4LjI5Miw2LjQ5MyAyOC4yMiw5LjI2NS0yLjU2Myw5Ljk4NC00LjYwOSwxOS43MDYtNi4wODcsMjkuMDczLTcuNjg5LDQ4Ljc1NyAwLjgwOCw4Mi45NTkgMjMuOTI1LDk2LjMwNiA2LjcyLDMuODggMTQuNDQzLDUuODQ4IDIyLjk1NCw1Ljg0OCAyNi41NzMsMCA2MC4wNzEtMTkuNTE2IDkzLjkzOC01Mi41MzEgNy4yNTUsNy4wODYgMTQuNTQsMTMuNjA5IDIxLjgwMywxOS40ODIgMjcuMTYxLDIxLjk2NiA1Mi4wNTksMzMuMjY2IDcyLjQ4OSwzMy4yNjUgOC40MzgtMC4wMDEgMTYuMTE5LTEuOTMgMjIuODc2LTUuODMxIDIzLjExNy0xMy4zNDcgMzEuNjE0LTQ3LjU0OSAyMy45MjUtOTYuMzA2LTEuNDc3LTkuMzY2LTMuNTIzLTE5LjA4Ny02LjA4Ni0yOS4wNyAxNS40MzktNC4yNTIgMjkuNjQtOS4yNiA0Mi4yMTgtMTQuOTYgMy43NzMtMS43MSA1LjQ0NS02LjE1NCAzLjczNS05LjkyNy0xLjcxLTMuNzczLTYuMTU1LTUuNDQ2LTkuOTI3LTMuNzM1LTExLjkxMiw1LjM5OC0yNS4zNzcsMTAuMTUtNDAuMDQyLDE0LjE5Mi02LjA2My0yMC4yNjEtMTQuMTM3LTQxLjQxMi0yMy45NzYtNjIuODA4IDEwLjI4MS0yMi4xMjIgMTguNjg1LTQ0LjAwNCAyNC45NDMtNjQuOTM2IDU1LjY2NSwxNS41ODYgODguNjUxLDQwLjIwMiA4OC42NTEsNjMuODAxIDAsMTUuMjQ3LTEzLjI5NiwyNy44MjctMjQuNDUsMzUuNjk0LTMuMzg1LDIuMzg4LTQuMTkzLDcuMDY3LTEuODA2LDEwLjQ1MiAyLjM4OCwzLjM4NiA3LjA2Nyw0LjE5MyAxMC40NTIsMS44MDYgMjAuMTUzLTE0LjIxNSAzMC44MDQtMzAuNzk3IDMwLjgwNC00Ny45NTIgMC0yNi42OTMtMjUuMzcxLTUxLjE1My03MS40NDEtNjguODcyem0tNjkuMDEzLTEyNS40OTFjNS44NDQsNy4xMDU0M2UtMTUgMTEuMDQ0LDEuMjkxIDE1LjQ1NCwzLjgzOCAxNy4xMTIsOS44OCAyMy4xNjYsMzkuMzk2IDE2LjYwNyw4MC45NzktMS40MDUsOC45MDctMy4zNSwxOC4xNTktNS43ODksMjcuNjY5LTIxLjIwNy01LjAyOC00NC4yOTktOC42OC02OC41MzItMTAuODM1LTEzLjU5Ni0xOS4yNDItMjcuODY2LTM2LjgzOS00Mi4zNzUtNTIuMjUzIDIuNjU1LTIuNjE4IDUuMzEyLTUuMTU4IDcuOTY0LTcuNjAyIDI5LjI1Mi0yNi45NTMgNTYuNDgtNDEuNzk2IDc2LjY3MS00MS43OTZ6bS05NS4wOTYsNjAuMTUyYzExLjMxNywxMi4wNjIgMjIuNSwyNS41MTcgMzMuMzIzLDQwLjEwMi0xMC43NjktMC41ODctMjEuNzEyLTAuODkxLTMyLjc3My0wLjg5MS0xMS40MzEsMC0yMi43MzgsMC4zMjEtMzMuODU1LDAuOTQ3IDEwLjgwOC0xNC41NiAyMi4wMDYtMjguMDcgMzMuMzA1LTQwLjE1OHptLS4wNTMsMjY5LjY1N2MtMTEuNzE4LTEyLjQyLTIzLjI5Ni0yNi4zNDEtMzQuNDg2LTQxLjQ2NiAxMS41MTQsMC42NzQgMjMuMjM0LDEuMDIgMzUuMDg5LDEuMDIgMTEuNDE5LDAgMjIuNzMyLTAuMzMzIDMzLjg3MS0wLjk2OS0xMS4xOCwxNS4wNjQtMjIuNzc3LDI5LjAxLTM0LjQ3NCw0MS40MTV6bS42MDMtNTUuNDQ2Yy0xNi4xMTUsMC0zMS41NzgtMC42MjQtNDYuMzE0LTEuNzg0LTguMjc3LTEyLjA3Ni0xNi4yODQtMjQuNzgtMjMuOTA3LTM3Ljk4NC03LjUwMy0xMi45OTUtMTQuNDA1LTI2LjEwNy0yMC42NTctMzkuMTU1IDYuNDktMTMuNjYxIDEzLjcwNy0yNy40MTIgMjEuNTk2LTQxLjA3NyA3LjY0LTEzLjIzMiAxNS43NS0yNi4wNjMgMjQuMTc3LTM4LjMwNyAxNC4zNzQtMS4wOTkgMjkuNDI5LTEuNjkzIDQ1LjEwNS0xLjY5MyAxNS4yNzMsMCAyOS45NTYsMC41NjQgNDMuOTk0LDEuNjA5IDguNDM0LDEyLjI2NyAxNi41OSwyNS4xODUgMjQuMzQ5LDM4LjYyMyA3Ljg1LDEzLjU5NyAxNS4wMzQsMjcuMjc5IDIxLjUsNDAuODczLTYuMjE5LDEyLjk0Mi0xMy4wOTEsMjUuOTU3LTIwLjU2LDM4Ljg5NC03LjYyNSwxMy4yMDctMTUuNzIsMjYuMDE1LTI0LjEzLDM4LjIzOS0xNC43MTYsMS4xNTgtMjkuODMsMS43NjItNDUuMTUzLDEuNzYyem0tNjUuNjE1LTMuNjU1Yy0xOC40NTMtMi4xMzItMzUuNTgyLTUuMTI5LTUxLjIwNS04LjgxIDQuNzQ0LTE1Ljc4OSAxMC43NTgtMzIuMTYgMTcuOTI5LTQ4Ljc5IDQuODk4LDkuNjg4IDEwLjEyOCwxOS4zNzMgMTUuNjc5LDI4Ljk4NyA1LjY2OCw5LjgxOCAxMS41NDksMTkuMzcxIDE3LjU5NywyOC42MTN6bTEuMTktMTUyLjgyOWMtNi4xMTEsOS4zMTgtMTIuMDc4LDE4Ljk5MS0xNy44NDcsMjguOTg0LTUuOTMzLDEwLjI3Ni0xMS40OTksMjAuNjEtMTYuNjc3LDMwLjkyOC03LjU0My0xNy4zMTgtMTMuODU4LTM0LjM3Ni0xOC43ODgtNTAuNzQ5IDE2LjIwMy0zLjg1OSAzNC4wNDItNi45ODMgNTMuMzEyLTkuMTYzem0tMTU1LjU3NSw3Ni40ODRjMC0yMy40NzIgMzIuNjM0LTQ3Ljk1MSA4Ny43NTctNjMuNTUgNi4yMzUsMjAuODAyIDE0LjYwMSw0Mi42MiAyNC44MDUsNjQuNjQ3LTkuODEzLDIxLjM2Mi0xNy44NjUsNDIuNDc3LTIzLjkxMyw2Mi43MDUtNTUuNjYzLTE1LjU4Ny04OC42NDktNDAuMjAzLTg4LjY0OS02My44MDJ6bTEyNS40NTQsMTk0LjM2M2MtNS44NDQsMC0xMS4wNDQtMS4yOTEtMTUuNDU0LTMuODM4LTE3LjExMi05Ljg4LTIzLjE2Ni0zOS4zOTYtMTYuNjA3LTgwLjk3OSAxLjQwNS04LjkwNyAzLjM1LTE4LjE1OSA1Ljc4OS0yNy42NjkgMjAuNTE4LDQuODY1IDQyLjgsOC40NDEgNjYuMTczLDEwLjYxOSAxMy45NTEsMTkuODA3IDI4LjYxOCwzNy44ODMgNDMuNTMsNTMuNjQ4LTIuMjU0LDIuMjAxLTQuNTA5LDQuMzQ4LTYuNzYsNi40MjMtMjkuMjUyLDI2Ljk1NC01Ni40OCw0MS43OTYtNzYuNjcxLDQxLjc5NnptMjIwLjIxNC04NC41ODRjNi41NTksNDEuNTgzIDAuNTA1LDcxLjA5OS0xNi42MDcsODAuOTc5LTE3LjExMyw5Ljg3OS00NS42OTksMC4zNjQtNzguNDM0LTI2LjEwNi02Ljg5My01LjU3NC0xMy44MTQtMTEuNzY3LTIwLjcxMi0xOC40OTkgMTQuNzYxLTE1LjU3OCAyOS40NjItMzMuNjAzIDQzLjU2My01My41NzkgMjMuNDMyLTIuMTUxIDQ1LjgyMi01LjY5NyA2Ni4zODktMTAuNTA5IDIuNDQ1LDkuNTI2IDQuMzk0LDE4Ljc5MyA1LjgwMSwyNy43MTR6bS05LjgzLTQyLjE1M2MtMTYuMDY0LDMuNzMzLTMzLjMxMSw2LjY3LTUxLjMzOSw4Ljc0NSA2LjA4NS05LjI4MyAxMi4wMjctMTguOTE4IDE3Ljc3My0yOC44NzEgNS41MTctOS41NTYgMTAuNzEzLTE5LjE2MSAxNS41NzktMjguNzU3IDcuMTk1LDE2LjY2IDEzLjIyOCwzMy4wNjMgMTcuOTg3LDQ4Ljg4M3ptLTE3LjkxOC04NC4xNDVjLTUuMTUyLTEwLjI1OS0xMC42ODgtMjAuNTMyLTE2LjU4Ny0zMC43NDktNS44MTgtMTAuMDc4LTExLjg1OS0xOS44NzgtMTguMDc3LTI5LjM0OCAxOS4zNTUsMi4xNDYgMzcuMjc2LDUuMjQzIDUzLjU2NCw5LjA4MS00Ljk1NSwxNi40OTMtMTEuMzAyLDMzLjYyMy0xOC45LDUxLjAxNnpcIi8+XG4gICAgPHBhdGggc3Ryb2tlPVwiI0ZGRkZGRlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJtMjM1LDE5Ny4zOTJjLTIwLjY3OCwwLTM3LjUsMTYuODIyLTM3LjUsMzcuNXMxNi44MjIsMzcuNSAzNy41LDM3LjUgMzcuNS0xNi44MjIgMzcuNS0zNy41LTE2LjgyMi0zNy41LTM3LjUtMzcuNXptMCw2MGMtMTIuNDA2LDAtMjIuNS0xMC4wOTQtMjIuNS0yMi41czEwLjA5NC0yMi41IDIyLjUtMjIuNSAyMi41LDEwLjA5NCAyMi41LDIyLjUtMTAuMDk0LDIyLjUtMjIuNSwyMi41elwiLz5cbiAgYFxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ29EYXRhLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidml2dXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJ2aXZ1c1wiXG4vLyBtb2R1bGUgaWQgPSA1NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IGp1c3RpZnktY2VudGVyIGZ1bGwtaGVpZ2h0XCIsXG4gICAgY2xhc3M6IF92bS5oZWlnaHRTaXplXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC13aGl0ZSB0ZXh0LWNlbnRlciB3aWR0aC0zb2Y0IGJnLXdpZHRoLTJvZjUgZ3QtYmctd2lkdGgtMW9mNCBzbS1hdXRvIFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibG9naW5cIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZVwiLFxuICAgIGNsYXNzOiBfdm0uZmluYWxCZ0NvbG9yXG4gIH0sIFtfYygnc3ZnJywge1xuICAgIHN0YXRpY1N0eWxlOiB7XG4gICAgICBcImVuYWJsZS1iYWNrZ3JvdW5kXCI6IFwibmV3IDAgMCA0NjAgNDYwXCJcbiAgICB9LFxuICAgIGF0dHJzOiB7XG4gICAgICBcImlkXCI6IFwibG9nb1wiLFxuICAgICAgXCJ2aWV3Qm94XCI6IFwiMCAwIDQ4MyA0ODNcIixcbiAgICAgIFwieG1sOnNwYWNlXCI6IFwicHJlc2VydmVcIixcbiAgICAgIFwid2lkdGhcIjogXCIxMjhweFwiLFxuICAgICAgXCJoZWlnaHRcIjogXCIxMjhweFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJpbm5lckhUTUxcIjogX3ZtLl9zKF92bS5sb2dvTWV0aG9kKVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdoNCcsIFtfdm0uX3YoX3ZtLl9zKF92bS5sb2dvKSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBiZy13aGl0ZSBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLmVtYWlsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwidHlwZVwiOiBcImVtYWlsXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIkVtYWlsXCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSldKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtYWN0aW9ucyBpbmxpbmUtYmxvY2sgdmVydGljYWwtbWlkZGxlXCJcbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVhbCBmaXQgXCIsXG4gICAgY2xhc3M6IF92bS5idXR0b25DbGFzcyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVzZXJMb2dpbigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9naW5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJyZWQgZml0XCIsXG4gICAgY2xhc3M6IF92bS5idXR0b25DbGFzcyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnVzZXJMb2dpbigpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiTG9naW4gR29vZ2xlXCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYmx1ZSBmaXQgXCIsXG4gICAgY2xhc3M6IF92bS5idXR0b25DbGFzcyxcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnNlbmRTb2NrKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJTZW5kXCIpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNmIyMjkwNjQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlXG4vLyBtb2R1bGUgaWQgPSA1NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9nb3V0LnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9sb2dvdXQudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGF1dGhcXFxcbG9nb3V0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGxvZ291dC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9nb3V0LnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI0MDE5ZDIyNFwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwibG9nb3V0LnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi00NjQwODQ5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGlkPVwibG9nb3V0XCI+XHJcblxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ2xvZ291dCcsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcblxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgLi4ubWFwQWN0aW9ucyhbXHJcbiAgICAgICAgICAgICdkZWF1dGhlbnRpY2F0ZVVzZXInXHJcbiAgICAgICAgXSlcclxuICAgIH0sXHJcbiAgICBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZGVhdXRoZW50aWNhdGVVc2VyKCk7XHJcbiAgICAgICAgdGhpcy4kcm91dGVyLnB1c2goe1xyXG4gICAgICAgICAgICBuYW1lOiAnbG9naW4nXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dvdXQudnVlP2M2MTRjOGE0IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2dvdXRcIlxuICAgIH1cbiAgfSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNDY0MDg0OWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb3V0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0yOTkxZmRmOCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yZWdpc3Rlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMjk5MWZkZjghLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxhdXRoXFxcXHJlZ2lzdGVyLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIHJlZ2lzdGVyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDYyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTkxZmRmOCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCIwMmI0MjY1YVwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5OTFmZGY4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcbi8vIG1vZHVsZSBpZCA9IDYzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJyZWdpc3Rlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk5MWZkZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gUmVnaXN0ZXJcclxuICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgIDxidXR0b24+PGk+aGVscDwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC12aWV3IGxheW91dC1wYWRkaW5nXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+ZmFjZTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLm5hbWVcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgbmFtZVwiIGNsYXNzPVwiZnVsbC13aWR0aFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWw+TmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+bWFpbDwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLmVtYWlsXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIGVtYWlsXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5FbWFpbDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxocj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0gdGhyZWUtbGluZXNcIj5cclxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaXRlbS1wcmltYXJ5XCI+dnBuX2tleTwvaT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdi1tb2RlbD1cImNyZWRlbnRpYWxzLnBhc3N3b3JkXCIgdHlwZT1cInBhc3N3b3JkXCIgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJZb3VyIHBhc3N3b3JkXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5QYXNzd29yZDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgZnVsbC13aWR0aFwiIEBjbGljaz1cInN1Ym1pdCgpXCI+UmVnaXN0ZXI8L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJyZWdpc3RlclwiLFxyXG4gICAgZGF0YTogZnVuY3Rpb24gZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjcmVkZW50aWFsczoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJycsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJycsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJydcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgc3VibWl0KCkge1xyXG4gICAgICAgICAgICB2YXIgY3JlZGVudGlhbHMgPSB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiB0aGlzLmNyZWRlbnRpYWxzLm5hbWUsXHJcbiAgICAgICAgICAgICAgICBlbWFpbDogdGhpcy5jcmVkZW50aWFscy5lbWFpbCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiB0aGlzLmNyZWRlbnRpYWxzLnBhc3N3b3JkXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXV0aC5zaWdudXAodGhpcywgY3JlZGVudGlhbHMsICdqb2tlcycpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVnaXN0ZXIudnVlPzIwOTA1NWExIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIFJlZ2lzdGVyXFxyXFxuICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC12aWV3IGxheW91dC1wYWRkaW5nXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGlzdFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcImZhY2VcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5uYW1lKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMubmFtZVwiXG4gICAgfV0sXG4gICAgc3RhdGljQ2xhc3M6IFwiZnVsbC13aWR0aFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiWW91ciBuYW1lXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMubmFtZSlcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5uYW1lID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfdm0uX3YoXCJOYW1lXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcIm1haWxcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5lbWFpbCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLmVtYWlsXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIGVtYWlsXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMuZW1haWwpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMuZW1haWwgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIkVtYWlsXCIpXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdocicpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0gdGhyZWUtbGluZXNcIlxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbS1wcmltYXJ5XCJcbiAgfSwgW192bS5fdihcInZwbl9rZXlcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJzdGFja2VkLWxhYmVsXCJcbiAgfSwgW19jKCdpbnB1dCcsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJtb2RlbFwiLFxuICAgICAgcmF3TmFtZTogXCJ2LW1vZGVsXCIsXG4gICAgICB2YWx1ZTogKF92bS5jcmVkZW50aWFscy5wYXNzd29yZCksXG4gICAgICBleHByZXNzaW9uOiBcImNyZWRlbnRpYWxzLnBhc3N3b3JkXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwidHlwZVwiOiBcInBhc3N3b3JkXCIsXG4gICAgICBcInJlcXVpcmVkXCI6IFwiXCIsXG4gICAgICBcInBsYWNlaG9sZGVyXCI6IFwiWW91ciBwYXNzd29yZFwiXG4gICAgfSxcbiAgICBkb21Qcm9wczoge1xuICAgICAgXCJ2YWx1ZVwiOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkID0gJGV2ZW50LnRhcmdldC52YWx1ZVxuICAgICAgfVxuICAgIH1cbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdsYWJlbCcsIFtfdm0uX3YoXCJQYXNzd29yZFwiKV0pXSldKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdidXR0b24nLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBmdWxsLXdpZHRoXCIsXG4gICAgb246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5zdWJtaXQoKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlJlZ2lzdGVyXCIpXSldKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTI5OTFmZGY4IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjZcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03ZDc3MzcwNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdkNzczNzA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGNhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjFlZDYxZWI2XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2Q3NzM3MDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2Q3NzM3MDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA2OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgYmctd2hpdGUgYW5pbWF0ZS1zY2FsZSBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGJnLWJsdWUgdGV4dC13aGl0ZVwiPlxyXG4gICAgICBRdWFudGlkYWRlIGRlIEFuaXZlcnNhcmlhbnRlcyBwb3IgbcOqc1xyXG4gICAgICA8cS1mYWIgaWNvbj1cImtleWJvYXJkX2Fycm93X2xlZnRcIiBkaXJlY3Rpb249XCJsZWZ0XCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiIGNsYXNzTmFtZXM9XCJ0ZWFsXCI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdiYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC1iYXJcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cInRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiPjwvaT48L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJhbml2ZXJzYXJpb3MtbWVzXCI+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gIGltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcydcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgdGhpcy5nZXRCYWlycm9zQWdydXBhZG9zKClcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICBub21lQmFpcnJvcyAoKXtcclxuICAgICAgICBsZXQgYmFpcnJvcyA9IFtdXHJcbiAgICAgICAgZm9yIChsZXQgaXRlbSBvZiBPYmplY3Qua2V5cyh0aGlzLmJhaXJyb3NBZ3J1cGFkb3MpKSB7XHJcbiAgICAgICAgICBiYWlycm9zLnB1c2goZm9ybWF0KG5ldyBEYXRlKGl0ZW0pLCAnTU1NJywge2xvY2FsZTogcHRMb2NhbGV9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGJhaXJyb3NcclxuICAgICAgfSxcclxuICAgICAgdmFsb3Jlc1BvckJhaXJybyAoKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5iYWlycm9zQWdydXBhZG9zKS5tYXAoa2V5ID0+IHRoaXMuYmFpcnJvc0FncnVwYWRvc1trZXldKVxyXG4gICAgICB9LFxyXG4gICAgICBkYWRvcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsczogdGhpcy5ub21lQmFpcnJvcyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnZhbG9yZXNQb3JCYWlycm8sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsOTksMTMyLDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBiYWlycm9zQWdydXBhZG9zICgpIHtcclxuICAgICAgICB0aGlzLmNyaWFyQ2hhcnQoKVxyXG4gICAgICB9LFxyXG4gICAgICB0aXBvR3JhZmljbyAoKSB7XHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuICAgICAgICB0aGlzLmNyaWFyQ2hhcnQoKVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFpcnJvc0FncnVwYWRvczoge30sXHJcbiAgICAgICAgdGlwb0dyYWZpY286ICdiYXInLFxyXG4gICAgICAgIGNoYXJ0OiAnJ1xyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRCYWlycm9zQWdydXBhZG9zICgpIHtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzXHJcbiAgICAgICAgdm0uJGh0dHAuZ2V0KCcvcmVsYXRvcmlvL2FuaXZlcnNhcmlhbnRlcy1tZXMnKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZtLmJhaXJyb3NBZ3J1cGFkb3MgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBjcmlhckNoYXJ0ICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhbml2ZXJzYXJpb3MtbWVzXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGlwb0dyYWZpY28sXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhZG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZT8wMTU2MmM5YSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoYXJ0LmpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2hhcnQuanNcIlxuLy8gbW9kdWxlIGlkID0gNzFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICBRdWFudGlkYWRlIGRlIEFuaXZlcnNhcmlhbnRlcyBwb3IgbcOqc1xcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2JhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LWJhclwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiXG4gIH0pXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgW19jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJhbml2ZXJzYXJpb3MtbWVzXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0wMTY1M2FjNCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTAxNjUzYWM0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGNhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZENhZGFzdHJvc1Bvck1lcy52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDczXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjRiNDU2MjFjXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDE2NTNhYzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMDE2NTNhYzQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgYmctd2hpdGUgYW5pbWF0ZS1zY2FsZSBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGJnLWJsdWUgdGV4dC13aGl0ZVwiPlxyXG4gICAgICBDYWRhc3Ryb3MgcG9yIG3DqnMgbm8gYW5vIGVzY29saGlkbyAtIHt7YW5vfX1cclxuXHJcbiAgICAgIDxxLWZhYiBpY29uPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIGRpcmVjdGlvbj1cImxlZnRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgY2xhc3NOYW1lcz1cInRlYWxcIj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cImFubyA9ICcyMDE2J1wiIGljb249XCJcIj4yMDE2PC9xLXNtYWxsLWZhYj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cImFubyA9ICcyMDE3J1wiIGljb249XCJcIj4yMDE3PC9xLXNtYWxsLWZhYj5cclxuICAgICAgPC9xLWZhYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBcIj5cclxuICAgICAgPGNhbnZhcyBpZD1cImNhZGFzdHJvcy1tZXNcIiA+PC9jYW52YXM+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbiAgLy9cclxuICAvKiBlc2xpbnQtZGlzYWJsZSAqL1xyXG4gIGltcG9ydCBDaGFydCBmcm9tICdjaGFydC5qcydcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtb3VudGVkICgpIHtcclxuICAgICAgdGhpcy5nZXRUb3RhbEFncnVwYWRvUG9yTWVzTm9Bbm9Fc2NvbGhpZG8oKVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vbWVNZXNlcyAoKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy50b3RhbEFncnVwYWRvUG9yTWVzKVxyXG4gICAgICB9LFxyXG4gICAgICB2YWxvcmVzQWdydXBhZG9zICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXMpLm1hcChrZXkgPT4gdGhpcy50b3RhbEFncnVwYWRvUG9yTWVzW2tleV0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhZG9zICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgY2hhcnQ6ICcnLFxyXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLm5vbWVNZXNlcyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnZhbG9yZXNBZ3J1cGFkb3MsXHJcbiAgICAgICAgICAgIGZpbGw6IGZhbHNlLFxyXG4gICAgICAgICAgICBsaW5lVGVuc2lvbjogMC4xLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSg3NSwxOTIsMTkyLCAxKVwiLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsMSlcIixcclxuICAgICAgICAgICAgcG9pbnRIaXRSYWRpdXM6IDEwXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIHRvdGFsQWdydXBhZG9Qb3JNZXMgKCkge1xyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIGFubyAoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRUb3RhbEFncnVwYWRvUG9yTWVzTm9Bbm9Fc2NvbGhpZG8oKVxyXG4gICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpXHJcblxyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBhbm86ICcyMDE2JyxcclxuICAgICAgICB0b3RhbEFncnVwYWRvUG9yTWVzOiB7fVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICBnZXRUb3RhbEFncnVwYWRvUG9yTWVzTm9Bbm9Fc2NvbGhpZG8gKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kaHR0cC5nZXQoYHBlc3NvYXMvdG90YWwtY2FkYXN0cm8tYWdydXBhZG8tbWVzLXBvci1hbm8vJHt0aGlzLmFub31gKVxyXG4gICAgICAgICAgLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgIHZtLnRvdGFsQWdydXBhZG9Qb3JNZXMgPSByZXNwb25zZS5kYXRhXHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9LFxyXG4gICAgICBjcmlhckNoYXJ0ICgpIHtcclxuICAgICAgICB2YXIgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYWRhc3Ryb3MtbWVzXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6ICdsaW5lJyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuZGFkb3NcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmRDYWRhc3Ryb3NQb3JNZXMudnVlPzQwMDFmZTUzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICBDYWRhc3Ryb3MgcG9yIG3DqnMgbm8gYW5vIGVzY29saGlkbyAtIFwiICsgX3ZtLl9zKF92bS5hbm8pICsgXCJcXG5cXG4gICAgXCIpLCBfYygncS1mYWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxvYXQtcmlnaHRcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiLFxuICAgICAgXCJkaXJlY3Rpb25cIjogXCJsZWZ0XCIsXG4gICAgICBcImNsYXNzTmFtZXNcIjogXCJ0ZWFsXCJcbiAgICB9XG4gIH0sIFtfYygncS1zbWFsbC1mYWInLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGVhbFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJcIlxuICAgIH0sXG4gICAgbmF0aXZlT246IHtcbiAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIF92bS5hbm8gPSAnMjAxNidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCIyMDE2XCIpXSksIF92bS5fdihcIiBcIiksIF9jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFubyA9ICcyMDE3J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjIwMTdcIildKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnQgXCJcbiAgfSwgW19jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJjYWRhc3Ryb3MtbWVzXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xMDQ2NDRmYSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMTA0NjQ0ZmEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDc4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMDQ2NDRmYSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI1MWNkMjE3MlwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTEwNDY0NGZhIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDc5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkUGVzc29hc1BvckJhaXJyby52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTA0NjQ0ZmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIj5cclxuICAgICAgUXVhbnRpZGFkZSBkZSBwZXNzb2FzIHBvciBiYWlycm9cclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwidGlwb0dyYWZpY28gPSAnYmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtYmFyXCI+PC9pPjwvcS1zbWFsbC1mYWI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdob3Jpem9udGFsQmFyJ1wiIGljb249XCJcIj48aSBjbGFzcz1cIm1kaSBtZGktY2hhcnQtdGltZWxpbmVcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgPC9xLWZhYj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwicGVzc29hcy1iYWlycm9cIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldEJhaXJyb3NBZ3J1cGFkb3MoKVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vbWVCYWlycm9zICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmJhaXJyb3NBZ3J1cGFkb3MpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNQb3JCYWlycm8gKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcykubWFwKGtleSA9PiB0aGlzLmJhaXJyb3NBZ3J1cGFkb3Nba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZUJhaXJyb3MsXHJcbiAgICAgICAgICBkYXRhc2V0czogW3tcclxuICAgICAgICAgICAgZGF0YTogdGhpcy52YWxvcmVzUG9yQmFpcnJvLFxyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDk5LCAxMzIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgYm9yZGVyQ29sb3I6IFtcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsOTksMTMyLDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg1NCwgMTYyLCAyMzUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDIwNiwgODYsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSg3NSwgMTkyLCAxOTIsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgxNTMsIDEwMiwgMjU1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAxNTksIDY0LCAxKSdcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgICAgfV1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICBiYWlycm9zQWdydXBhZG9zICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNzb2FzLWJhaXJyb1wiKVxyXG4gICAgICAgIHRoaXMuY2hhcnQgPSBuZXcgQ2hhcnQoY3R4LCB7XHJcbiAgICAgICAgICB0eXBlOiB0aGlzLnRpcG9HcmFmaWNvLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpcG9HcmFmaWNvICgpIHtcclxuICAgICAgICBsZXQgY3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwZXNzb2FzLWJhaXJyb1wiKVxyXG4gICAgICAgIHRoaXMuY2hhcnQuZGVzdHJveSgpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGlwb0dyYWZpY28sXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhZG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGJhaXJyb3NBZ3J1cGFkb3M6IHt9LFxyXG4gICAgICAgIHRpcG9HcmFmaWNvOiAnaG9yaXpvbnRhbEJhcicsXHJcbiAgICAgICAgY2hhcnQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kaHR0cC5nZXQoJy9lbmRlcmVjby9iYWlycm9zLWFncnVwYWRvcycpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0uYmFpcnJvc0FncnVwYWRvcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzFkNjRkMzhhIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCJcbiAgfSwgW192bS5fdihcIlxcbiAgICBRdWFudGlkYWRlIGRlIHBlc3NvYXMgcG9yIGJhaXJyb1xcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2JhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LWJhclwiXG4gIH0pXSksIF92bS5fdihcIiBcIiksIF9jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXG4gICAgICB9XG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiXG4gIH0pXSldLCAxKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50XCJcbiAgfSwgW19jKCdjYW52YXMnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJwZXNzb2FzLWJhaXJyb1wiXG4gICAgfVxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMTA0NjQ0ZmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTRmYjRhMWY0JnNjb3BlZD10cnVlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFRvdGFsLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTRmYjRhMWY0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTRmYjRhMWY0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZFRvdGFsLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGNhcmRUb3RhbC52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRmYjRhMWY0JnNjb3BlZD10cnVlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFRvdGFsLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI3M2Y3ZWI0MlwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRmYjRhMWY0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5pW2RhdGEtdi00ZmI0YTFmNF0ge1xcbiAgZm9udC1zaXplOiA1NHB4O1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlPzYzYjBlNDYwXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCI7QUF5Q0E7RUFDQSxnQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJjYXJkVG90YWwudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxkaXYgY2xhc3M9XFxcImNhcmQgdGV4dC13aGl0ZSBhbmltYXRlLXNjYWxlXFxcIiA6Y2xhc3M9XFxcImJhY2tncm91bmRDb2xvclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudCBcXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcInJvd1xcXCI+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aC0xb2YzXFxcIj5cXHJcXG4gICAgICAgICAgPGk+cGVvcGxlPC9pPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2IGNsYXNzPVxcXCJ3aWR0aC0yb2YzXFxcIj5cXHJcXG4gICAgICAgICAgPHAgY2xhc3M9XFxcInRleHQtaXRhbGljIFxcXCI+e3t0aXRsZX19PC9wPlxcclxcbiAgICAgICAgICA8aDU+XFxyXFxuICAgICAgICAgICAgPGktY291bnQtdXBcXHJcXG4gICAgICAgICAgICAgIDpzdGFydD1cXFwiMFxcXCJcXHJcXG4gICAgICAgICAgICAgIDplbmQ9XFxcInRvdGFsXFxcIlxcclxcbiAgICAgICAgICAgICAgOmRlY2ltYWxzPVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgOmR1cmF0aW9uPVxcXCIyLjVcXFwiXFxyXFxuICAgICAgICAgICAgICA6b3B0aW9ucz1cXFwib3B0aW9uc1xcXCJcXHJcXG4gICAgICAgICAgICA+PC9pLWNvdW50LXVwPlxcclxcbiAgICAgICAgICA8L2g1PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG5cXHJcXG48c2NyaXB0PlxcclxcbiAgaW1wb3J0IElDb3VudFVwIGZyb20gJ3Z1ZS1jb3VudHVwLXYyJ1xcclxcbiAgZXhwb3J0IGRlZmF1bHQge1xcclxcbiAgICBwcm9wczogWyd0aXRsZScsICd0b3RhbCcsICdiYWNrZ3JvdW5kQ29sb3InXSxcXHJcXG4gICAgZGF0YSAoKSB7XFxyXFxuICAgICAgcmV0dXJuIHtcXHJcXG4gICAgICAgIG9wdGlvbnM6IHtcXHJcXG4gICAgICAgICAgc2VwYXJhdG9yOiAnLidcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXBvbmVudHM6IHtcXHJcXG4gICAgICBJQ291bnRVcFxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuPC9zY3JpcHQ+XFxyXFxuPHN0eWxlIHNjb3BlZD5cXHJcXG4gIGkge1xcclxcbiAgICBmb250LXNpemU6IDU0cHg7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTRmYjRhMWY0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBhbmltYXRlLXNjYWxlXCIgOmNsYXNzPVwiYmFja2dyb3VuZENvbG9yXCI+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoLTFvZjNcIj5cclxuICAgICAgICAgIDxpPnBlb3BsZTwvaT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGgtMm9mM1wiPlxyXG4gICAgICAgICAgPHAgY2xhc3M9XCJ0ZXh0LWl0YWxpYyBcIj57e3RpdGxlfX08L3A+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICAgIDxpLWNvdW50LXVwXHJcbiAgICAgICAgICAgICAgOnN0YXJ0PVwiMFwiXHJcbiAgICAgICAgICAgICAgOmVuZD1cInRvdGFsXCJcclxuICAgICAgICAgICAgICA6ZGVjaW1hbHM9XCIwXCJcclxuICAgICAgICAgICAgICA6ZHVyYXRpb249XCIyLjVcIlxyXG4gICAgICAgICAgICAgIDpvcHRpb25zPVwib3B0aW9uc1wiXHJcbiAgICAgICAgICAgID48L2ktY291bnQtdXA+XHJcbiAgICAgICAgICA8L2g1PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICBpbXBvcnQgSUNvdW50VXAgZnJvbSAndnVlLWNvdW50dXAtdjInXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgcHJvcHM6IFsndGl0bGUnLCAndG90YWwnLCAnYmFja2dyb3VuZENvbG9yJ10sXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgICBzZXBhcmF0b3I6ICcuJ1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHtcclxuICAgICAgSUNvdW50VXBcclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG48c3R5bGUgc2NvcGVkPlxyXG4gIGkge1xyXG4gICAgZm9udC1zaXplOiA1NHB4O1xyXG4gIH1cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmRUb3RhbC52dWU/NjNiMGU0NjAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2dWUtY291bnR1cC12MlwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZ1ZS1jb3VudHVwLXYyXCJcbi8vIG1vZHVsZSBpZCA9IDg3XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQgdGV4dC13aGl0ZSBhbmltYXRlLXNjYWxlXCIsXG4gICAgY2xhc3M6IF92bS5iYWNrZ3JvdW5kQ29sb3JcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50IFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJvd1wiXG4gIH0sIFtfdm0uX20oMCksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtMm9mM1wiXG4gIH0sIFtfYygncCcsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZXh0LWl0YWxpYyBcIlxuICB9LCBbX3ZtLl92KF92bS5fcyhfdm0udGl0bGUpKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnaDUnLCBbX2MoJ2ktY291bnQtdXAnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwic3RhcnRcIjogMCxcbiAgICAgIFwiZW5kXCI6IF92bS50b3RhbCxcbiAgICAgIFwiZGVjaW1hbHNcIjogMCxcbiAgICAgIFwiZHVyYXRpb25cIjogMi41LFxuICAgICAgXCJvcHRpb25zXCI6IF92bS5vcHRpb25zXG4gICAgfVxuICB9KV0sIDEpXSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIndpZHRoLTFvZjNcIlxuICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwicGVvcGxlXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTRmYjRhMWY0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDg4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNzMwZTAzNWQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ob21lLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9ob21lLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi03MzBlMDM1ZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vaG9tZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcaG9tZVxcXFxob21lLnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIGhvbWUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA4OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9ob21lLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI0MmY5ZWJjYlwiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTczMGUwMzVkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImhvbWUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTczMGUwMzVkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gSG9tZVxyXG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDxidXR0b24+PGk+aGVscDwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC1wYWRkaW5nIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHdyYXAgZ3V0dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FyZFRvdGFsIHRpdGxlPVwiVG90YWwgUG9zdHNcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiYmctdGVhbC04XCIgOnRvdGFsPVwidG90YWxQb3N0c1wiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmRUb3RhbCB0aXRsZT1cIlRvdGFsIGNvbW1lbnRzXCIgYmFja2dyb3VuZC1jb2xvcj1cImJnLXRlYWwtOFwiIDp0b3RhbD1cInRvdGFsQ29tbWVudHNcIj5cclxuICAgICAgICAgICAgICAgIDwvY2FyZFRvdGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxjYXJkVG90YWwgdGl0bGU9XCJTdGF0aWMgdG90YWxcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiYmctdGVhbC04XCIgOnRvdGFsPVwiNTAwMDRcIj5cclxuICAgICAgICAgICAgICAgIDwvY2FyZFRvdGFsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleCB3cmFwIGd1dHRlclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGgtMW9mMlwiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHdyYXAgZ3V0dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC00b2Y1IHNtLWF1dG9cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQgdHlwZT1cInRleHQvamF2YXNjcmlwdFwiPlxyXG5pbXBvcnQgY2FyZFRvdGFsIGZyb20gJy4vY2FyZFRvdGFsLnZ1ZSdcclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogJ0hvbWUnLFxyXG4gICAgbW91bnRlZCgpIHtcclxuXHJcbiAgICB9LFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB0b3RhbFBvc3RzOiAwLFxyXG4gICAgICAgICAgICB0b3RhbENvbW1lbnRzOiAwLFxyXG4gICAgICAgICAgICB0b3RhbFRvZG9zOiAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgZGF0YUZvckdyYXBoKCkge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcG9zdHM6IHRoaXMudG90YWxQb3N0cyxcclxuICAgICAgICAgICAgICAgIHRvZG9zOiB0aGlzLnRvdGFsVG9kb3MsXHJcbiAgICAgICAgICAgICAgICBjb21tZW50czogdGhpcy50b3RhbENvbW1lbnRzXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICAgIGNhcmRUb3RhbFxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBob21lLnZ1ZT8zM2ZkNDRiMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIixcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygncS10b29sYmFyLXRpdGxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZGRpbmdcIjogMVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiZ28tYmFja1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWdvLWJhY2tcIixcbiAgICAgIHZhbHVlOiAoJy8nKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJy8nXCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSksIF92bS5fdihcIiBIb21lXFxyXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXBhZGRpbmcgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiZmxleCB3cmFwIGd1dHRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF1dG9cIlxuICB9LCBbX2MoJ2NhcmRUb3RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlRvdGFsIFBvc3RzXCIsXG4gICAgICBcImJhY2tncm91bmQtY29sb3JcIjogXCJiZy10ZWFsLThcIixcbiAgICAgIFwidG90YWxcIjogX3ZtLnRvdGFsUG9zdHNcbiAgICB9XG4gIH0pXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0sIFtfYygnY2FyZFRvdGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgY29tbWVudHNcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJnLXRlYWwtOFwiLFxuICAgICAgXCJ0b3RhbFwiOiBfdm0udG90YWxDb21tZW50c1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdXRvXCJcbiAgfSwgW19jKCdjYXJkVG90YWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJTdGF0aWMgdG90YWxcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJnLXRlYWwtOFwiLFxuICAgICAgXCJ0b3RhbFwiOiA1MDAwNFxuICAgIH1cbiAgfSldLCAxKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgyKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IHdyYXAgZ3V0dGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtMW9mMlwiXG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF1dG9cIlxuICB9KV0pXG59LGZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IHdyYXAgZ3V0dGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtNG9mNSBzbS1hdXRvXCJcbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTczMGUwMzVkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcXVlc3Rpb250eXBlLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9xdWVzdGlvbnR5cGUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9xdWVzdGlvbnR5cGUudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXHF1ZXN0aW9udHlwZVxcXFxxdWVzdGlvbnR5cGUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcXVlc3Rpb250eXBlLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01OGNjMmUwNiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNjNiODZjODNcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01OGNjMmUwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwicXVlc3Rpb250eXBlLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi01OGNjMmUwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBRdWVzdGlvbiBUeXBlXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXBhZGRpbmcgXCI+XHJcbiAgICAgICAgPHEtZGF0YS10YWJsZSA6ZGF0YT1cInF1ZXN0aW9udHlwZXNcIiA6Y29uZmlnPVwiY29uZmlnXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY29sLXNvdXJjZVwiIHNjb3BlPVwiY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNlbGwuZGF0YSA9PT0gJ0F1ZGl0J1wiIGNsYXNzPVwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+U29tZSB0b29sdGlwPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCI+e3tjZWxsLmRhdGF9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzZWxlY3Rpb25cIiBzY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJjaGFuZ2VNZXNzYWdlKHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmVkaXQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5IGNsZWFyXCIgQGNsaWNrPVwiZGVsZXRlUm93KHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmRlbGV0ZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9xLWRhdGEtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7XHJcbiAgICBQbGF0Zm9ybSxcclxuICAgIFV0aWxzLFxyXG4gICAgVG9hc3RcclxufSBmcm9tICdxdWFzYXItZnJhbWV3b3JrJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInF1ZXN0aW9udHlwZVwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnUXVlc3Rpb24gVHlwZXMnLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblBpY2tlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdGlja3lDb2x1bW5zOiAxLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTdGlja3lDb2x1bW5zOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9keVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBQbGF0Zm9ybS5pcy5tb2JpbGUgPyAnNTB2aCcgOiAnNTAwcHgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbNSwgMTAsIDE1LCAzMCwgNTAsIDUwMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGE6ICc8aT53YXJuaW5nPC9pPiBObyBkYXRhIGF2YWlsYWJsZSB0byBzaG93LicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhQWZ0ZXJGaWx0ZXJpbmc6ICc8aT53YXJuaW5nPC9pPiBObyByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHlvdXIgc2VhcmNoIHRlcm1zLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1F1ZXN0aW9uVHlwZUlkJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdOYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1F1ZXN0aW9uVHlwZU5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnNDAlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0NyZWF0ZWQgRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdDcmVhdGVkRGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHJvd0hlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHRQcm9wOiAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAgICAgYm9keUhlaWdodDogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcGFnaW5hdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBhZ2luYXRpb24gPSBVdGlscy5jbG9uZSh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMub2xkUGFnaW5hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm93SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0hlaWdodCA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5SGVpZ2h0UHJvcCAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt0aGlzLmJvZHlIZWlnaHRQcm9wXSA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0UHJvcCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdmFsdWVdID0gdGhpcy5ib2R5SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxRdWVzdGlvblR5cGVzKCk7XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IG1hcEdldHRlcnMoW1xyXG4gICAgICAgICdxdWVzdGlvbnR5cGVzJ1xyXG4gICAgXSksXHJcbiAgICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcclxuICAgICAgICAnZ2V0QWxsUXVlc3Rpb25UeXBlcydcclxuICAgIF0pXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBxdWVzdGlvbnR5cGUudnVlP2Q0OWEzZTkwIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIFF1ZXN0aW9uIFR5cGVcXHJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQtcGFkZGluZyBcIlxuICB9LCBbX2MoJ3EtZGF0YS10YWJsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJkYXRhXCI6IF92bS5xdWVzdGlvbnR5cGVzLFxuICAgICAgXCJjb25maWdcIjogX3ZtLmNvbmZpZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uc1xuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICBbXCJjb2wtc291cmNlXCIsIGZ1bmN0aW9uKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIFsoY2VsbC5kYXRhID09PSAnQXVkaXQnKSA/IF9jKCdzcGFuJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIHRleHQtd2hpdGUgYmctcHJpbWFyeVwiXG4gICAgICAgIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3EtdG9vbHRpcCcsIFtfdm0uX3YoXCJTb21lIHRvb2x0aXBcIildKV0sIDEpIDogX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1uZWdhdGl2ZVwiXG4gICAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNlbGwuZGF0YSkpXSldXG4gICAgICB9XSxcbiAgICAgIFtcInNlbGVjdGlvblwiLCBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICByZXR1cm4gW19jKCdidXR0b24nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBjbGVhclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uY2hhbmdlTWVzc2FnZShwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJlZGl0XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVSb3cocHJvcHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldKV1cbiAgICAgIH1dXG4gICAgXSlcbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOThcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03YzI5YjZkZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3VzZXIudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTdjMjliNmRkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi91c2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFx1c2VyXFxcXHVzZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gdXNlci52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDk5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YzI5YjZkZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3VzZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcImE1MTQ2NWJhXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2MyOWI2ZGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDBcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInVzZXIudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdjMjliNmRkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMTAxXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWdvLWJhY2s9XCInLydcIj5cclxuICAgICAgICAgIDxpPmFycm93X2JhY2s8L2k+XHJcbiAgICAgICAgPC9idXR0b24+IFVzZXJcclxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8YnV0dG9uPjxpPmhlbHA8L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtcGFkZGluZyBcIj5cclxuICAgICAgICA8cS1kYXRhLXRhYmxlIDpkYXRhPVwidXNlcnNcIiA6Y29uZmlnPVwiY29uZmlnXCIgOmNvbHVtbnM9XCJjb2x1bW5zXCI+XHJcbiAgICAgICAgICAgIDx0ZW1wbGF0ZSBzbG90PVwiY29sLXNvdXJjZVwiIHNjb3BlPVwiY2VsbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cImNlbGwuZGF0YSA9PT0gJ0F1ZGl0J1wiIGNsYXNzPVwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxxLXRvb2x0aXA+U29tZSB0b29sdGlwPC9xLXRvb2x0aXA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWVsc2UgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCI+e3tjZWxsLmRhdGF9fTwvc3Bhbj5cclxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJzZWxlY3Rpb25cIiBzY29wZT1cInByb3BzXCI+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJjaGFuZ2VNZXNzYWdlKHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmVkaXQ8L2k+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJwcmltYXJ5IGNsZWFyXCIgQGNsaWNrPVwiZGVsZXRlUm93KHByb3BzKVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpPmRlbGV0ZTwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPC9xLWRhdGEtdGFibGU+XHJcbiAgICA8L2Rpdj5cclxuPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7XHJcbiAgICBtYXBHZXR0ZXJzLFxyXG4gICAgbWFwQWN0aW9uc1xyXG59IGZyb20gJ3Z1ZXgnXHJcbmltcG9ydCB7XHJcbiAgICBQbGF0Zm9ybSxcclxuICAgIFV0aWxzLFxyXG4gICAgVG9hc3RcclxufSBmcm9tICdxdWFzYXItZnJhbWV3b3JrJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInVzZXJcIixcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogJ1VzZXJzJyxcclxuICAgICAgICAgICAgICAgIHJlZnJlc2g6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5QaWNrZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsZWZ0U3RpY2t5Q29sdW1uczogMSxcclxuICAgICAgICAgICAgICAgIHJpZ2h0U3RpY2t5Q29sdW1uczogMixcclxuICAgICAgICAgICAgICAgIGJvZHlTdHlsZToge1xyXG4gICAgICAgICAgICAgICAgICAgIG1heEhlaWdodDogUGxhdGZvcm0uaXMubW9iaWxlID8gJzUwdmgnIDogJzUwMHB4J1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJvd0hlaWdodDogJzUwcHgnLFxyXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHBhZ2luYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICByb3dzUGVyUGFnZTogMTUsXHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogWzUsIDEwLCAxNSwgMzAsIDUwLCA1MDBdXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgc2VsZWN0aW9uOiAnc2luZ2xlJyxcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhOiAnPGk+d2FybmluZzwvaT4gTm8gZGF0YSBhdmFpbGFibGUgdG8gc2hvdy4nLFxyXG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YUFmdGVyRmlsdGVyaW5nOiAnPGk+d2FybmluZzwvaT4gTm8gcmVzdWx0cy4gUGxlYXNlIHJlZmluZSB5b3VyIHNlYXJjaCB0ZXJtcy4nXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbHVtbnM6IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICcxMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdGaXJzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnRmlyc3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xhc3RuYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0xhc3ROYW1lJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0VtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0VtYWlsJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0xvZ2luJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ1VzZXJUeXBlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ1VzZXJUeXBlSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogJ2RhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbmV3IERhdGUodmFsdWUpLnRvTG9jYWxlU3RyaW5nKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF0sXHJcblxyXG4gICAgICAgICAgICBwYWdpbmF0aW9uOiB0cnVlLFxyXG4gICAgICAgICAgICByb3dIZWlnaHQ6IDUwLFxyXG4gICAgICAgICAgICBib2R5SGVpZ2h0UHJvcDogJ21heEhlaWdodCcsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHQ6IDUwMFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHBhZ2luYXRpb24odmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vbGRQYWdpbmF0aW9uID0gVXRpbHMuY2xvbmUodGhpcy5jb25maWcucGFnaW5hdGlvbilcclxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnBhZ2luYXRpb24gPSB0aGlzLm9sZFBhZ2luYXRpb25cclxuICAgICAgICB9LFxyXG4gICAgICAgIHJvd0hlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5yb3dIZWlnaHQgPSB2YWx1ZSArICdweCdcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge31cclxuICAgICAgICAgICAgaWYgKHRoaXMuYm9keUhlaWdodFByb3AgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdGhpcy5ib2R5SGVpZ2h0UHJvcF0gPSB2YWx1ZSArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5ib2R5U3R5bGUgPSBzdHlsZVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodFByb3AodmFsdWUpIHtcclxuICAgICAgICAgICAgbGV0IHN0eWxlID0ge31cclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlW3ZhbHVlXSA9IHRoaXMuYm9keUhlaWdodCArICdweCdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5ib2R5U3R5bGUgPSBzdHlsZVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtb3VudGVkOiBmdW5jdGlvbiBtb3VudGVkKCkge1xyXG4gICAgICAgIHRoaXMuZ2V0QWxsVXNlcnMoKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyhbXHJcbiAgICAgICAgJ3VzZXJzJ1xyXG4gICAgXSksXHJcbiAgICBtZXRob2RzOiBtYXBBY3Rpb25zKFtcclxuICAgICAgICAnZ2V0QWxsVXNlcnMnXHJcbiAgICBdKVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcblxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gdXNlci52dWU/NDdmYTYwZmQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgVXNlclxcclxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC1wYWRkaW5nIFwiXG4gIH0sIFtfYygncS1kYXRhLXRhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLnVzZXJzLFxuICAgICAgXCJjb25maWdcIjogX3ZtLmNvbmZpZyxcbiAgICAgIFwiY29sdW1uc1wiOiBfdm0uY29sdW1uc1xuICAgIH0sXG4gICAgc2NvcGVkU2xvdHM6IF92bS5fdShbXG4gICAgICBbXCJjb2wtc291cmNlXCIsIGZ1bmN0aW9uKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIFsoY2VsbC5kYXRhID09PSAnQXVkaXQnKSA/IF9jKCdzcGFuJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcImxhYmVsIHRleHQtd2hpdGUgYmctcHJpbWFyeVwiXG4gICAgICAgIH0sIFtfdm0uX3YoXCJcXHJcXG4gICAgICAgICAgICAgICAgICAgICAgICBBdWRpdFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiKSwgX2MoJ3EtdG9vbHRpcCcsIFtfdm0uX3YoXCJTb21lIHRvb2x0aXBcIildKV0sIDEpIDogX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1uZWdhdGl2ZVwiXG4gICAgICAgIH0sIFtfdm0uX3YoX3ZtLl9zKGNlbGwuZGF0YSkpXSldXG4gICAgICB9XSxcbiAgICAgIFtcInNlbGVjdGlvblwiLCBmdW5jdGlvbihwcm9wcykge1xuICAgICAgICByZXR1cm4gW19jKCdidXR0b24nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwicHJpbWFyeSBjbGVhclwiLFxuICAgICAgICAgIG9uOiB7XG4gICAgICAgICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICAgICAgICBfdm0uY2hhbmdlTWVzc2FnZShwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJlZGl0XCIpXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5kZWxldGVSb3cocHJvcHMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiZGVsZXRlXCIpXSldKV1cbiAgICAgIH1dXG4gICAgXSlcbiAgfSldLCAxKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2J1dHRvbicsIFtfYygnaScsIFtfdm0uX3YoXCJoZWxwXCIpXSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdjMjliNmRkIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==