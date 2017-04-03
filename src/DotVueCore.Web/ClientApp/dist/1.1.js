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
	exports.push([module.id, "\n.card[data-v-6b229064] {\n  margin-bottom: 0px;\n  width: 100%;\n}\n.card-content[data-v-6b229064] {\n  min-height: 160px;\n}\nbutton[data-v-6b229064] {\n  margin-bottom: 4%;\n}\nh4[data-v-6b229064] {\n  font-weight: 300;\n}\n", "", {"version":3,"sources":["/./ClientApp/components/views/auth/login.vue?b68fa372"],"names":[],"mappings":";AAyIA;EACA,mBAAA;EACA,YAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,kBAAA;CACA;AACA;EACA,iBAAA;CACA","file":"login.vue","sourcesContent":["<template>\r\n<div class=\"flex justify-center full-height\" :class=\"heightSize\">\r\n<div class=\"card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto \" id=\"login\">\r\n      <div class=\"card-title\" :class=\"finalBgColor\">\r\n        <svg id=\"logo\" viewBox=\"0 0 483 483\"\r\n             style=\"enable-background:new 0 0 460 460;\"\r\n             xml:space=\"preserve\" width=\"128px\" height=\"128px\"\r\n             v-html=\"logoMethod\">\r\n        </svg>\r\n        <h4>{{logo}}</h4>\r\n      </div>\r\n      <div class=\"card-content bg-white \">\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"email\" v-model=\"credentials.email\">\r\n          <label>Email</label>\r\n        </div>\r\n        <div class=\"stacked-label\">\r\n          <input required class=\"full-width\" type=\"password\" v-model=\"credentials.password\">\r\n          <label>Password</label>\r\n        </div>\r\n      </div>\r\n      <div class=\"card-actions inline-block vertical-middle\">\r\n        <button class=\"teal fit \" :class=\"buttonClass\" @click=\"userLogin()\">Login</button>\r\n        <button class=\"red fit\" :class=\"buttonClass\" @click=\"userLogin()\">Login Google</button>\r\n        <button class=\"blue fit \" :class=\"buttonClass\" @click=\"sendSock()\">Send</button>\r\n      </div>\r\n    </div>\r\n</div>\r\n</template>\r\n<script>\r\nimport {\r\n    mapGetters,\r\n    mapActions\r\n} from 'vuex'\r\n\r\nimport Stomp from 'stompjs'\r\nimport SockJS from 'sockjs-client'\r\nimport { Platform } from 'quasar-framework'\r\nimport logoData from './logoData'\r\nimport {mapMutations} from 'vuex'\r\nimport Vivus from 'vivus'\r\nlet sock = new SockJS('/broadcast')\r\nsock.onopen = function() {\r\n   console.log('open')\r\n   sock.send('test');\r\n}\r\nsock.onmessage = function(e) {\r\n   console.log('message', e)\r\n}\r\nsock.onclose = function() {\r\n   console.log('close')\r\n}\r\nexport default {\r\n    name: \"login\",\r\n    data: function data() {\r\n        return {\r\n            credentials: {\r\n                email: 'rto@rto.com',\r\n                password: '12345678'\r\n            },\r\n            logos: Object.keys(logoData),\r\n            logo: 'DotVueApp',\r\n            bgColor: 'blue',\r\n            toneColor: 10,\r\n            colors: ['purple', 'blue', 'red', 'green', 'amber'],\r\n            colorTones: ['2', '4', '6', '8', '10'],\r\n            buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],\r\n            buttonClass: 'normal',\r\n            vivus: ''\r\n        }\r\n    },\r\n    computed: {\r\n        ...mapGetters([\r\n            'getLayoutNeeded',\r\n            'getIsLoginPage',\r\n            'getMobileMode'\r\n        ]),\r\n        heightSize (){\r\n            if (Platform.is.desktop) {\r\n            return 'items-center'\r\n            }\r\n            return ''\r\n        },\r\n        finalBgColor () {\r\n            return `bg-${this.bgColor}-${this.toneColor}`\r\n        },\r\n        logoMethod () {\r\n            return logoData[this.logo]\r\n        }\r\n    },\r\n    methods: {\r\n      ...mapActions([\r\n          'setLayoutNeeded',\r\n          'setIsLoginPage',\r\n          'setMobileMode'\r\n      ]),\r\n        userLogin() {\r\n            // AUTH WILL BE CALLED with data\r\n            this.$store.dispatch('authenticateUser', this.credentials)\r\n                .then(res => {\r\n                    this.loading = false\r\n                    this.setLayoutNeeded(true)\r\n                    this.setIsLoginPage(false)\r\n                    this.$router.push({\r\n                        name: 'home',\r\n                        params: {\r\n                        }\r\n                    })\r\n                })\r\n                .catch(res => {\r\n                    this.loading = false\r\n                    this.errors = res.errors\r\n                });\r\n        },\r\n        startAnimation () {\r\n            this.vivus = new Vivus('logo', {\r\n                duration: 400,\r\n                forceRender: false\r\n            }, function(element) {\r\n                for (let item of element.el.children[0].children) {\r\n                    item.setAttribute('style', 'fill:white')\r\n                    item.setAttribute('style', 'fill:white')\r\n                }\r\n            })\r\n        },\r\n        sendSock(){\r\n          sock.send(+new Date)\r\n        }\r\n    },\r\n    mounted(){\r\n        this.setLayoutNeeded(false)\r\n        this.setIsLoginPage(true)\r\n        this.startAnimation()\r\n    }\r\n}\r\n</script>\r\n<style scoped>\r\n  .card {\r\n    margin-bottom: 0px;\r\n    width: 100%;\r\n  }\r\n  .card-content {\r\n    min-height: 160px;\r\n  }\r\n  button {\r\n    margin-bottom: 4%;\r\n  }\r\n  h4 {\r\n    font-weight: 300;\r\n  }\r\n</style>\r\n"],"sourceRoot":"webpack://"}]);
	
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
	                _this.setLayoutNeeded(true);
	                _this.setIsLoginPage(false);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZSIsIndlYnBhY2s6Ly8vRXJyb3I0MDQudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZT82ZDg4Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZT9kMWRlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWU/MjkzMyIsIndlYnBhY2s6Ly8vcmlnaHRkcmF3ZXIudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWU/ODIxZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZT9jNzZkIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9naW4udnVlPzE3NGEiLCJ3ZWJwYWNrOi8vL2xvZ2luLnZ1ZSIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic3RvbXBqc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInNvY2tqcy1jbGllbnRcIiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ29EYXRhLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInZpdnVzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/Njk3OSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzkwZWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzAyM2YiLCJ3ZWJwYWNrOi8vL2xvZ291dC52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlPzI4OGUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/MmQ1NiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZT81NmVmIiwid2VicGFjazovLy9yZWdpc3Rlci52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9yZWdpc3Rlci52dWU/NzM1ZiIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWU/ZmM0MyIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzk1ODMiLCJ3ZWJwYWNrOi8vL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcImNoYXJ0LmpzXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZT9iYzViIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZT8yZmI3Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/OGY5ZSIsIndlYnBhY2s6Ly8vY2FyZENhZGFzdHJvc1Bvck1lcy52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZT81MmE0Iiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzdhMjUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWU/ZTlhNCIsIndlYnBhY2s6Ly8vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlPzMyMWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT8yYmVmIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZT9iNzg1Iiwid2VicGFjazovLy9jYXJkVG90YWwudnVlIiwid2VicGFjazovLy9leHRlcm5hbCBcInZ1ZS1jb3VudHVwLXYyXCIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlPzQxMGEiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlPzc2MzkiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9ob21lLnZ1ZT85NWE1Iiwid2VicGFjazovLy9ob21lLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlPzgwNmUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWU/Mjg4MSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZT8wOWM2Iiwid2VicGFjazovLy9xdWVzdGlvbnR5cGUudnVlIiwid2VicGFjazovLy8uL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlPzZjYzIiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlP2RkMzUiLCJ3ZWJwYWNrOi8vLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZT9jYjFlIiwid2VicGFjazovLy91c2VyLnZ1ZSIsIndlYnBhY2s6Ly8vLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlPzUyZmUiXSwibmFtZXMiOlsiRG90VnVlQXBwIiwiS2V5dHJvbmljIiwiTW9sZWN0cm9uIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFpQyx1REFBdUQ7QUFDeEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdGQUErRSxpREFBaUQsSUFBSTtBQUNwSSxvQ0FBbUM7O0FBRW5DOzs7Ozs7Ozs7Ozs7Ozt5QkNlQTs7MENBR0E7QUFGQTtBQUdBOzs7K0JBRUE7MEJBQ0E7QUFFQTtBQUpBO0FBTkEsRzs7Ozs7O0FDNUJBLGlCQUFnQixtQkFBbUIsYUFBYSwwQkFBMEI7QUFDMUU7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0g7QUFDQSxJQUFHO0FBQ0gsRUFBQztBQUNELDJDOzs7Ozs7Ozs7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QTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUDtBQUNBLElBQUc7QUFDSCxFQUFDLCtCQUErQixhQUFhLDBCQUEwQjtBQUN2RTtBQUNBLEVBQUM7QUFDRCwyQyIsImZpbGUiOiIxLjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgbWFwID0ge1xuXHRcIi4vRXJyb3I0MDRcIjogMjUsXG5cdFwiLi9FcnJvcjQwNC52dWVcIjogMjUsXG5cdFwiLi9sYXlvdXQvbGVmdGRyYXdlclwiOiAyOSxcblx0XCIuL2xheW91dC9sZWZ0ZHJhd2VyLnZ1ZVwiOiAyOSxcblx0XCIuL2xheW91dC9yaWdodGRyYXdlclwiOiAzNyxcblx0XCIuL2xheW91dC9yaWdodGRyYXdlci52dWVcIjogMzcsXG5cdFwiLi9sYXlvdXQvdG9vbGJhclwiOiA0Mixcblx0XCIuL2xheW91dC90b29sYmFyLnZ1ZVwiOiA0Mixcblx0XCIuL3ZpZXdzL2F1dGgvbG9naW5cIjogNDcsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ2luLnZ1ZVwiOiA0Nyxcblx0XCIuL3ZpZXdzL2F1dGgvbG9nb0RhdGFcIjogNTQsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ29EYXRhLmpzXCI6IDU0LFxuXHRcIi4vdmlld3MvYXV0aC9sb2dvdXRcIjogNTcsXG5cdFwiLi92aWV3cy9hdXRoL2xvZ291dC52dWVcIjogNTcsXG5cdFwiLi92aWV3cy9hdXRoL3JlZ2lzdGVyXCI6IDYyLFxuXHRcIi4vdmlld3MvYXV0aC9yZWdpc3Rlci52dWVcIjogNjIsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXNcIjogNjcsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCI6IDY3LFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzXCI6IDczLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiOiA3Myxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm9cIjogNzgsXG5cdFwiLi92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiOiA3OCxcblx0XCIuL3ZpZXdzL2hvbWUvY2FyZFRvdGFsXCI6IDgzLFxuXHRcIi4vdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXCI6IDgzLFxuXHRcIi4vdmlld3MvaG9tZS9ob21lXCI6IDg5LFxuXHRcIi4vdmlld3MvaG9tZS9ob21lLnZ1ZVwiOiA4OSxcblx0XCIuL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGVcIjogOTQsXG5cdFwiLi92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVwiOiA5NCxcblx0XCIuL3ZpZXdzL3VzZXIvdXNlclwiOiA5OSxcblx0XCIuL3ZpZXdzL3VzZXIvdXNlci52dWVcIjogOTlcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjQ7XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzIF5cXC5cXC8uKiRcbi8vIG1vZHVsZSBpZCA9IDI0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsInZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL0Vycm9yNDA0LnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi04YWNiODI5ZSEuLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vRXJyb3I0MDQudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXEVycm9yNDA0LnZ1ZVwiXG5pZiAoQ29tcG9uZW50LmVzTW9kdWxlICYmIE9iamVjdC5rZXlzKENvbXBvbmVudC5lc01vZHVsZSkuc29tZShmdW5jdGlvbiAoa2V5KSB7cmV0dXJuIGtleSAhPT0gXCJkZWZhdWx0XCIgJiYga2V5ICE9PSBcIl9fZXNNb2R1bGVcIn0pKSB7Y29uc29sZS5lcnJvcihcIm5hbWVkIGV4cG9ydHMgYXJlIG5vdCBzdXBwb3J0ZWQgaW4gKi52dWUgZmlsZXMuXCIpfVxuaWYgKENvbXBvbmVudC5vcHRpb25zLmZ1bmN0aW9uYWwpIHtjb25zb2xlLmVycm9yKFwiW3Z1ZS1sb2FkZXJdIEVycm9yNDA0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvRXJyb3I0MDQudnVlXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiPlxyXG4gICAgICA0MDRcclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgICAgPGkgY2xhc3M9XCJ0ZXh0LWdyZXktNVwiPmVycm9yX291dGxpbmU8L2k+XHJcbiAgICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHRleHQtY2VudGVyXCI+T29wcy4gTm90aGluZyBoZXJlLi4uPC9wPlxyXG4gICAgICAgIDxwIGNsYXNzPVwidGV4dC1jZW50ZXIgZ3JvdXBcIj5cclxuICAgICAgICAgIDxidXR0b24gdi1pZj1cImNhbkdvQmFja1wiIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCIgQGNsaWNrPVwiZ29CYWNrXCI+XHJcbiAgICAgICAgICAgIDxpIGNsYXNzPVwib24tbGVmdFwiPmtleWJvYXJkX2Fycm93X2xlZnQ8L2k+XHJcbiAgICAgICAgICAgIEdvIGJhY2tcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgPHJvdXRlci1saW5rIHRvPVwiL1wiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZ3JleSBwdXNoIHNtYWxsXCI+XHJcbiAgICAgICAgICAgICAgR28gaG9tZVxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwib24tcmlnaHRcIj5ob21lPC9pPlxyXG4gICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgIDwvcm91dGVyLWxpbms+XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGRhdGEgKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FuR29CYWNrOiB3aW5kb3cuaGlzdG9yeS5sZW5ndGggPiAxXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBnb0JhY2sgKCkge1xyXG4gICAgICB3aW5kb3cuaGlzdG9yeS5nbygtMSlcclxuICAgIH1cclxuICB9XHJcbn1cclxuPC9zY3JpcHQ+XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIEVycm9yNDA0LnZ1ZT8xYjU3ZThiMyIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLXBhZ2Ugd2luZG93LWhlaWdodCB3aW5kb3ctd2lkdGggYmctbGlnaHQgY29sdW1uIGl0ZW1zLWNlbnRlclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNvZGUgYmctcHJpbWFyeSBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgNDA0XFxuICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImVycm9yLWNhcmQgY2FyZCBiZy13aGl0ZSBjb2x1bW4gaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCJcbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtZ3JleS01XCJcbiAgfSwgW192bS5fdihcImVycm9yX291dGxpbmVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FwdGlvbiB0ZXh0LWNlbnRlclwiXG4gIH0sIFtfdm0uX3YoXCJPb3BzLiBOb3RoaW5nIGhlcmUuLi5cIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1jZW50ZXIgZ3JvdXBcIlxuICB9LCBbKF92bS5jYW5Hb0JhY2spID8gX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJncmV5IHB1c2ggc21hbGxcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBfdm0uZ29CYWNrXG4gICAgfVxuICB9LCBbX2MoJ2knLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwib24tbGVmdFwiXG4gIH0sIFtfdm0uX3YoXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIpXSksIF92bS5fdihcIlxcbiAgICAgICAgICBHbyBiYWNrXFxuICAgICAgICBcIildKSA6IF92bS5fZSgpLCBfdm0uX3YoXCIgXCIpLCBfYygncm91dGVyLWxpbmsnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidG9cIjogXCIvXCJcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImdyZXkgcHVzaCBzbWFsbFwiXG4gIH0sIFtfdm0uX3YoXCJcXG4gICAgICAgICAgICBHbyBob21lXFxuICAgICAgICAgICAgXCIpLCBfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJvbi1yaWdodFwiXG4gIH0sIFtfdm0uX3YoXCJob21lXCIpXSldKV0pXSwgMSldKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbXX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtOGFjYjgyOWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL0Vycm9yNDA0LnZ1ZVxuLy8gbW9kdWxlIGlkID0gMjhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi0xYzFmNjg2ZSZzY29wZWQ9dHJ1ZSEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL3JpZ2h0ZHJhd2VyLnZ1ZVwiKVxuXG52YXIgQ29tcG9uZW50ID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvY29tcG9uZW50LW5vcm1hbGl6ZXJcIikoXG4gIC8qIHNjcmlwdCAqL1xuICByZXF1aXJlKFwiISFiYWJlbC1sb2FkZXIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c2NyaXB0JmluZGV4PTAhLi9yaWdodGRyYXdlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMWMxZjY4NmUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3JpZ2h0ZHJhd2VyLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBcImRhdGEtdi0xYzFmNjg2ZVwiLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFxsYXlvdXRcXFxccmlnaHRkcmF3ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmlnaHRkcmF3ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy9sYXlvdXQvcmlnaHRkcmF3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAzN1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMWMxZjY4NmUmc2NvcGVkPXRydWUhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9yaWdodGRyYXdlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiYWRhMGJiOTBcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xYzFmNjg2ZSZzY29wZWQ9dHJ1ZSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL2xheW91dC9yaWdodGRyYXdlci52dWVcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbi50b29sYmFyW2RhdGEtdi0xYzFmNjg2ZV0ge1xcclxcbiAgICBtaW4taGVpZ2h0OiA3MHB4O1xcbn1cXHJcXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZT81YWExMTljN1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiO0FBb0JBO0lBQ0EsaUJBQUE7Q0FDQVwiLFwiZmlsZVwiOlwicmlnaHRkcmF3ZXIudnVlXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIjx0ZW1wbGF0ZT5cXHJcXG4gIDxxLWRyYXdlciByaWdodC1zaWRlIHN3aXBlLW9ubHkgcmVmPVxcXCJyaWdodERyYXdlclxcXCI+XFxyXFxuICAgIDxkaXYgY2xhc3M9XFxcInRvb2xiYXIgbGlnaHRcXFwiPlxcclxcbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XFxcIjFcXFwiPlxcclxcbiAgICAgICAgICBSaWdodC1zaWRlIERyYXdlclxcclxcbiAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxcclxcbiAgICA8L2Rpdj5cXHJcXG5cXHJcXG4gICAgPHAgc3R5bGU9XFxcInBhZGRpbmc6IDI1cHg7XFxcIiBjbGFzcz1cXFwidGV4dC1ncmV5LTdcXFwiPlxcclxcbiAgICAgIFRoaXMgaXMgeWV0IGFub3RoZXIgRHJhd2VyIHRoYXQgZG9lcyBub3QgZ2V0cyBkaXNwbGF5ZWQgYWxvbmdzaWRlIGNvbnRlbnQgb25cXHJcXG4gICAgICBiaWdnZXIgc2NyZWVucy5cXHJcXG4gICAgPC9wPlxcclxcbiAgPC9xLWRyYXdlcj5cXHJcXG48L3RlbXBsYXRlPlxcclxcbjxzY3JpcHQ+XFxyXFxuZXhwb3J0IGRlZmF1bHQge1xcclxcblxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbi50b29sYmFyIHtcXHJcXG4gICAgbWluLWhlaWdodDogNzBweDtcXHJcXG59XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTFjMWY2ODZlJnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvbGF5b3V0L3JpZ2h0ZHJhd2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gMzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG4gIDxxLWRyYXdlciByaWdodC1zaWRlIHN3aXBlLW9ubHkgcmVmPVwicmlnaHREcmF3ZXJcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJ0b29sYmFyIGxpZ2h0XCI+XHJcbiAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICBSaWdodC1zaWRlIERyYXdlclxyXG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxwIHN0eWxlPVwicGFkZGluZzogMjVweDtcIiBjbGFzcz1cInRleHQtZ3JleS03XCI+XHJcbiAgICAgIFRoaXMgaXMgeWV0IGFub3RoZXIgRHJhd2VyIHRoYXQgZG9lcyBub3QgZ2V0cyBkaXNwbGF5ZWQgYWxvbmdzaWRlIGNvbnRlbnQgb25cclxuICAgICAgYmlnZ2VyIHNjcmVlbnMuXHJcbiAgICA8L3A+XHJcbiAgPC9xLWRyYXdlcj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG5cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlIHNjb3BlZD5cclxuLnRvb2xiYXIge1xyXG4gICAgbWluLWhlaWdodDogNzBweDtcclxufVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmlnaHRkcmF3ZXIudnVlPzVhYTExOWM3IiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdxLWRyYXdlcicsIHtcbiAgICByZWY6IFwicmlnaHREcmF3ZXJcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyaWdodC1zaWRlXCI6IFwiXCIsXG4gICAgICBcInN3aXBlLW9ubHlcIjogXCJcIlxuICAgIH1cbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhciBsaWdodFwiXG4gIH0sIFtfYygncS10b29sYmFyLXRpdGxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZGRpbmdcIjogMVxuICAgIH1cbiAgfSwgW192bS5fdihcIlxcbiAgICAgICAgUmlnaHQtc2lkZSBEcmF3ZXJcXG4gICAgXCIpXSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3AnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidGV4dC1ncmV5LTdcIixcbiAgICBzdGF0aWNTdHlsZToge1xuICAgICAgXCJwYWRkaW5nXCI6IFwiMjVweFwiXG4gICAgfVxuICB9LCBbX3ZtLl92KFwiXFxuICAgIFRoaXMgaXMgeWV0IGFub3RoZXIgRHJhd2VyIHRoYXQgZG9lcyBub3QgZ2V0cyBkaXNwbGF5ZWQgYWxvbmdzaWRlIGNvbnRlbnQgb25cXG4gICAgYmlnZ2VyIHNjcmVlbnMuXFxuICBcIildKV0pXG59LHN0YXRpY1JlbmRlckZuczogW119XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTFjMWY2ODZlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy9sYXlvdXQvcmlnaHRkcmF3ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA0MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTZiMjI5MDY0JnNjb3BlZD10cnVlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ2luLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi02YjIyOTA2NCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vbG9naW4udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIFwiZGF0YS12LTZiMjI5MDY0XCIsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGF1dGhcXFxcbG9naW4udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9naW4udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZiMjI5MDY0JnNjb3BlZD10cnVlIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vbG9naW4udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjI4MWZiNTI0XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNmIyMjkwNjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ2luLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNDhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuLmNhcmRbZGF0YS12LTZiMjI5MDY0XSB7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuLmNhcmQtY29udGVudFtkYXRhLXYtNmIyMjkwNjRdIHtcXG4gIG1pbi1oZWlnaHQ6IDE2MHB4O1xcbn1cXG5idXR0b25bZGF0YS12LTZiMjI5MDY0XSB7XFxuICBtYXJnaW4tYm90dG9tOiA0JTtcXG59XFxuaDRbZGF0YS12LTZiMjI5MDY0XSB7XFxuICBmb250LXdlaWdodDogMzAwO1xcbn1cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wiLy4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWU/YjY4ZmEzNzJcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlJQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtDQUNBO0FBQ0E7RUFDQSxrQkFBQTtDQUNBO0FBQ0E7RUFDQSxpQkFBQTtDQUNBXCIsXCJmaWxlXCI6XCJsb2dpbi52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbjxkaXYgY2xhc3M9XFxcImZsZXgganVzdGlmeS1jZW50ZXIgZnVsbC1oZWlnaHRcXFwiIDpjbGFzcz1cXFwiaGVpZ2h0U2l6ZVxcXCI+XFxyXFxuPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHdpZHRoLTNvZjQgYmctd2lkdGgtMm9mNSBndC1iZy13aWR0aC0xb2Y0IHNtLWF1dG8gXFxcIiBpZD1cXFwibG9naW5cXFwiPlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiIDpjbGFzcz1cXFwiZmluYWxCZ0NvbG9yXFxcIj5cXHJcXG4gICAgICAgIDxzdmcgaWQ9XFxcImxvZ29cXFwiIHZpZXdCb3g9XFxcIjAgMCA0ODMgNDgzXFxcIlxcclxcbiAgICAgICAgICAgICBzdHlsZT1cXFwiZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0NjAgNDYwO1xcXCJcXHJcXG4gICAgICAgICAgICAgeG1sOnNwYWNlPVxcXCJwcmVzZXJ2ZVxcXCIgd2lkdGg9XFxcIjEyOHB4XFxcIiBoZWlnaHQ9XFxcIjEyOHB4XFxcIlxcclxcbiAgICAgICAgICAgICB2LWh0bWw9XFxcImxvZ29NZXRob2RcXFwiPlxcclxcbiAgICAgICAgPC9zdmc+XFxyXFxuICAgICAgICA8aDQ+e3tsb2dvfX08L2g0PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtY29udGVudCBiZy13aGl0ZSBcXFwiPlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhY2tlZC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzcz1cXFwiZnVsbC13aWR0aFxcXCIgdHlwZT1cXFwiZW1haWxcXFwiIHYtbW9kZWw9XFxcImNyZWRlbnRpYWxzLmVtYWlsXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdiBjbGFzcz1cXFwic3RhY2tlZC1sYWJlbFxcXCI+XFxyXFxuICAgICAgICAgIDxpbnB1dCByZXF1aXJlZCBjbGFzcz1cXFwiZnVsbC13aWR0aFxcXCIgdHlwZT1cXFwicGFzc3dvcmRcXFwiIHYtbW9kZWw9XFxcImNyZWRlbnRpYWxzLnBhc3N3b3JkXFxcIj5cXHJcXG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxkaXYgY2xhc3M9XFxcImNhcmQtYWN0aW9ucyBpbmxpbmUtYmxvY2sgdmVydGljYWwtbWlkZGxlXFxcIj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInRlYWwgZml0IFxcXCIgOmNsYXNzPVxcXCJidXR0b25DbGFzc1xcXCIgQGNsaWNrPVxcXCJ1c2VyTG9naW4oKVxcXCI+TG9naW48L2J1dHRvbj5cXHJcXG4gICAgICAgIDxidXR0b24gY2xhc3M9XFxcInJlZCBmaXRcXFwiIDpjbGFzcz1cXFwiYnV0dG9uQ2xhc3NcXFwiIEBjbGljaz1cXFwidXNlckxvZ2luKClcXFwiPkxvZ2luIEdvb2dsZTwvYnV0dG9uPlxcclxcbiAgICAgICAgPGJ1dHRvbiBjbGFzcz1cXFwiYmx1ZSBmaXQgXFxcIiA6Y2xhc3M9XFxcImJ1dHRvbkNsYXNzXFxcIiBAY2xpY2s9XFxcInNlbmRTb2NrKClcXFwiPlNlbmQ8L2J1dHRvbj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuPC9kaXY+XFxyXFxuPC90ZW1wbGF0ZT5cXHJcXG48c2NyaXB0PlxcclxcbmltcG9ydCB7XFxyXFxuICAgIG1hcEdldHRlcnMsXFxyXFxuICAgIG1hcEFjdGlvbnNcXHJcXG59IGZyb20gJ3Z1ZXgnXFxyXFxuXFxyXFxuaW1wb3J0IFN0b21wIGZyb20gJ3N0b21wanMnXFxyXFxuaW1wb3J0IFNvY2tKUyBmcm9tICdzb2NranMtY2xpZW50J1xcclxcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAncXVhc2FyLWZyYW1ld29yaydcXHJcXG5pbXBvcnQgbG9nb0RhdGEgZnJvbSAnLi9sb2dvRGF0YSdcXHJcXG5pbXBvcnQge21hcE11dGF0aW9uc30gZnJvbSAndnVleCdcXHJcXG5pbXBvcnQgVml2dXMgZnJvbSAndml2dXMnXFxyXFxubGV0IHNvY2sgPSBuZXcgU29ja0pTKCcvYnJvYWRjYXN0JylcXHJcXG5zb2NrLm9ub3BlbiA9IGZ1bmN0aW9uKCkge1xcclxcbiAgIGNvbnNvbGUubG9nKCdvcGVuJylcXHJcXG4gICBzb2NrLnNlbmQoJ3Rlc3QnKTtcXHJcXG59XFxyXFxuc29jay5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XFxyXFxuICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlKVxcclxcbn1cXHJcXG5zb2NrLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcXHJcXG4gICBjb25zb2xlLmxvZygnY2xvc2UnKVxcclxcbn1cXHJcXG5leHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIG5hbWU6IFxcXCJsb2dpblxcXCIsXFxyXFxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XFxyXFxuICAgICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XFxyXFxuICAgICAgICAgICAgICAgIGVtYWlsOiAncnRvQHJ0by5jb20nLFxcclxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogJzEyMzQ1Njc4J1xcclxcbiAgICAgICAgICAgIH0sXFxyXFxuICAgICAgICAgICAgbG9nb3M6IE9iamVjdC5rZXlzKGxvZ29EYXRhKSxcXHJcXG4gICAgICAgICAgICBsb2dvOiAnRG90VnVlQXBwJyxcXHJcXG4gICAgICAgICAgICBiZ0NvbG9yOiAnYmx1ZScsXFxyXFxuICAgICAgICAgICAgdG9uZUNvbG9yOiAxMCxcXHJcXG4gICAgICAgICAgICBjb2xvcnM6IFsncHVycGxlJywgJ2JsdWUnLCAncmVkJywgJ2dyZWVuJywgJ2FtYmVyJ10sXFxyXFxuICAgICAgICAgICAgY29sb3JUb25lczogWycyJywgJzQnLCAnNicsICc4JywgJzEwJ10sXFxyXFxuICAgICAgICAgICAgYnV0dG9uQ2xhc3NlczogWydub3JtYWwnLCdvdXRsaW5lJywgJ2NsZWFyJywgJ3B1c2gnLCAnYm9yZGVyZWQnLCAncm91bmQnXSxcXHJcXG4gICAgICAgICAgICBidXR0b25DbGFzczogJ25vcm1hbCcsXFxyXFxuICAgICAgICAgICAgdml2dXM6ICcnXFxyXFxuICAgICAgICB9XFxyXFxuICAgIH0sXFxyXFxuICAgIGNvbXB1dGVkOiB7XFxyXFxuICAgICAgICAuLi5tYXBHZXR0ZXJzKFtcXHJcXG4gICAgICAgICAgICAnZ2V0TGF5b3V0TmVlZGVkJyxcXHJcXG4gICAgICAgICAgICAnZ2V0SXNMb2dpblBhZ2UnLFxcclxcbiAgICAgICAgICAgICdnZXRNb2JpbGVNb2RlJ1xcclxcbiAgICAgICAgXSksXFxyXFxuICAgICAgICBoZWlnaHRTaXplICgpe1xcclxcbiAgICAgICAgICAgIGlmIChQbGF0Zm9ybS5pcy5kZXNrdG9wKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuICdpdGVtcy1jZW50ZXInXFxyXFxuICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIHJldHVybiAnJ1xcclxcbiAgICAgICAgfSxcXHJcXG4gICAgICAgIGZpbmFsQmdDb2xvciAoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIGBiZy0ke3RoaXMuYmdDb2xvcn0tJHt0aGlzLnRvbmVDb2xvcn1gXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgbG9nb01ldGhvZCAoKSB7XFxyXFxuICAgICAgICAgICAgcmV0dXJuIGxvZ29EYXRhW3RoaXMubG9nb11cXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbWV0aG9kczoge1xcclxcbiAgICAgIC4uLm1hcEFjdGlvbnMoW1xcclxcbiAgICAgICAgICAnc2V0TGF5b3V0TmVlZGVkJyxcXHJcXG4gICAgICAgICAgJ3NldElzTG9naW5QYWdlJyxcXHJcXG4gICAgICAgICAgJ3NldE1vYmlsZU1vZGUnXFxyXFxuICAgICAgXSksXFxyXFxuICAgICAgICB1c2VyTG9naW4oKSB7XFxyXFxuICAgICAgICAgICAgLy8gQVVUSCBXSUxMIEJFIENBTExFRCB3aXRoIGRhdGFcXHJcXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRlVXNlcicsIHRoaXMuY3JlZGVudGlhbHMpXFxyXFxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZVxcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMYXlvdXROZWVkZWQodHJ1ZSlcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0SXNMb2dpblBhZ2UoZmFsc2UpXFxyXFxuICAgICAgICAgICAgICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hvbWUnLFxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cXHJcXG4gICAgICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICAgICAgICAgIC5jYXRjaChyZXMgPT4ge1xcclxcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcXHJcXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZXJyb3JzID0gcmVzLmVycm9yc1xcclxcbiAgICAgICAgICAgICAgICB9KTtcXHJcXG4gICAgICAgIH0sXFxyXFxuICAgICAgICBzdGFydEFuaW1hdGlvbiAoKSB7XFxyXFxuICAgICAgICAgICAgdGhpcy52aXZ1cyA9IG5ldyBWaXZ1cygnbG9nbycsIHtcXHJcXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcXHJcXG4gICAgICAgICAgICAgICAgZm9yY2VSZW5kZXI6IGZhbHNlXFxyXFxuICAgICAgICAgICAgfSwgZnVuY3Rpb24oZWxlbWVudCkge1xcclxcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW1lbnQuZWwuY2hpbGRyZW5bMF0uY2hpbGRyZW4pIHtcXHJcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOndoaXRlJylcXHJcXG4gICAgICAgICAgICAgICAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsICdmaWxsOndoaXRlJylcXHJcXG4gICAgICAgICAgICAgICAgfVxcclxcbiAgICAgICAgICAgIH0pXFxyXFxuICAgICAgICB9LFxcclxcbiAgICAgICAgc2VuZFNvY2soKXtcXHJcXG4gICAgICAgICAgc29jay5zZW5kKCtuZXcgRGF0ZSlcXHJcXG4gICAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgbW91bnRlZCgpe1xcclxcbiAgICAgICAgdGhpcy5zZXRMYXlvdXROZWVkZWQoZmFsc2UpXFxyXFxuICAgICAgICB0aGlzLnNldElzTG9naW5QYWdlKHRydWUpXFxyXFxuICAgICAgICB0aGlzLnN0YXJ0QW5pbWF0aW9uKClcXHJcXG4gICAgfVxcclxcbn1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgLmNhcmQge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgLmNhcmQtY29udGVudCB7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDE2MHB4O1xcclxcbiAgfVxcclxcbiAgYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogNCU7XFxyXFxuICB9XFxyXFxuICBoNCB7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICB9XFxyXFxuPC9zdHlsZT5cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTZiMjI5MDY0JnNjb3BlZD10cnVlIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDQ5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImZsZXgganVzdGlmeS1jZW50ZXIgZnVsbC1oZWlnaHRcIiA6Y2xhc3M9XCJoZWlnaHRTaXplXCI+XHJcbjxkaXYgY2xhc3M9XCJjYXJkIHRleHQtd2hpdGUgdGV4dC1jZW50ZXIgd2lkdGgtM29mNCBiZy13aWR0aC0yb2Y1IGd0LWJnLXdpZHRoLTFvZjQgc20tYXV0byBcIiBpZD1cImxvZ2luXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlXCIgOmNsYXNzPVwiZmluYWxCZ0NvbG9yXCI+XHJcbiAgICAgICAgPHN2ZyBpZD1cImxvZ29cIiB2aWV3Qm94PVwiMCAwIDQ4MyA0ODNcIlxyXG4gICAgICAgICAgICAgc3R5bGU9XCJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQ2MCA0NjA7XCJcclxuICAgICAgICAgICAgIHhtbDpzcGFjZT1cInByZXNlcnZlXCIgd2lkdGg9XCIxMjhweFwiIGhlaWdodD1cIjEyOHB4XCJcclxuICAgICAgICAgICAgIHYtaHRtbD1cImxvZ29NZXRob2RcIj5cclxuICAgICAgICA8L3N2Zz5cclxuICAgICAgICA8aDQ+e3tsb2dvfX08L2g0PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudCBiZy13aGl0ZSBcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzPVwiZnVsbC13aWR0aFwiIHR5cGU9XCJlbWFpbFwiIHYtbW9kZWw9XCJjcmVkZW50aWFscy5lbWFpbFwiPlxyXG4gICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tlZC1sYWJlbFwiPlxyXG4gICAgICAgICAgPGlucHV0IHJlcXVpcmVkIGNsYXNzPVwiZnVsbC13aWR0aFwiIHR5cGU9XCJwYXNzd29yZFwiIHYtbW9kZWw9XCJjcmVkZW50aWFscy5wYXNzd29yZFwiPlxyXG4gICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMgaW5saW5lLWJsb2NrIHZlcnRpY2FsLW1pZGRsZVwiPlxyXG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJ0ZWFsIGZpdCBcIiA6Y2xhc3M9XCJidXR0b25DbGFzc1wiIEBjbGljaz1cInVzZXJMb2dpbigpXCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicmVkIGZpdFwiIDpjbGFzcz1cImJ1dHRvbkNsYXNzXCIgQGNsaWNrPVwidXNlckxvZ2luKClcIj5Mb2dpbiBHb29nbGU8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYmx1ZSBmaXQgXCIgOmNsYXNzPVwiYnV0dG9uQ2xhc3NcIiBAY2xpY2s9XCJzZW5kU29jaygpXCI+U2VuZDwvYnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuXHJcbmltcG9ydCBTdG9tcCBmcm9tICdzdG9tcGpzJ1xyXG5pbXBvcnQgU29ja0pTIGZyb20gJ3NvY2tqcy1jbGllbnQnXHJcbmltcG9ydCB7IFBsYXRmb3JtIH0gZnJvbSAncXVhc2FyLWZyYW1ld29yaydcclxuaW1wb3J0IGxvZ29EYXRhIGZyb20gJy4vbG9nb0RhdGEnXHJcbmltcG9ydCB7bWFwTXV0YXRpb25zfSBmcm9tICd2dWV4J1xyXG5pbXBvcnQgVml2dXMgZnJvbSAndml2dXMnXHJcbmxldCBzb2NrID0gbmV3IFNvY2tKUygnL2Jyb2FkY2FzdCcpXHJcbnNvY2sub25vcGVuID0gZnVuY3Rpb24oKSB7XHJcbiAgIGNvbnNvbGUubG9nKCdvcGVuJylcclxuICAgc29jay5zZW5kKCd0ZXN0Jyk7XHJcbn1cclxuc29jay5vbm1lc3NhZ2UgPSBmdW5jdGlvbihlKSB7XHJcbiAgIGNvbnNvbGUubG9nKCdtZXNzYWdlJywgZSlcclxufVxyXG5zb2NrLm9uY2xvc2UgPSBmdW5jdGlvbigpIHtcclxuICAgY29uc29sZS5sb2coJ2Nsb3NlJylcclxufVxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcImxvZ2luXCIsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBlbWFpbDogJ3J0b0BydG8uY29tJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnMTIzNDU2NzgnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGxvZ29zOiBPYmplY3Qua2V5cyhsb2dvRGF0YSksXHJcbiAgICAgICAgICAgIGxvZ286ICdEb3RWdWVBcHAnLFxyXG4gICAgICAgICAgICBiZ0NvbG9yOiAnYmx1ZScsXHJcbiAgICAgICAgICAgIHRvbmVDb2xvcjogMTAsXHJcbiAgICAgICAgICAgIGNvbG9yczogWydwdXJwbGUnLCAnYmx1ZScsICdyZWQnLCAnZ3JlZW4nLCAnYW1iZXInXSxcclxuICAgICAgICAgICAgY29sb3JUb25lczogWycyJywgJzQnLCAnNicsICc4JywgJzEwJ10sXHJcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzZXM6IFsnbm9ybWFsJywnb3V0bGluZScsICdjbGVhcicsICdwdXNoJywgJ2JvcmRlcmVkJywgJ3JvdW5kJ10sXHJcbiAgICAgICAgICAgIGJ1dHRvbkNsYXNzOiAnbm9ybWFsJyxcclxuICAgICAgICAgICAgdml2dXM6ICcnXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgLi4ubWFwR2V0dGVycyhbXHJcbiAgICAgICAgICAgICdnZXRMYXlvdXROZWVkZWQnLFxyXG4gICAgICAgICAgICAnZ2V0SXNMb2dpblBhZ2UnLFxyXG4gICAgICAgICAgICAnZ2V0TW9iaWxlTW9kZSdcclxuICAgICAgICBdKSxcclxuICAgICAgICBoZWlnaHRTaXplICgpe1xyXG4gICAgICAgICAgICBpZiAoUGxhdGZvcm0uaXMuZGVza3RvcCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2l0ZW1zLWNlbnRlcidcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJydcclxuICAgICAgICB9LFxyXG4gICAgICAgIGZpbmFsQmdDb2xvciAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgYmctJHt0aGlzLmJnQ29sb3J9LSR7dGhpcy50b25lQ29sb3J9YFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgbG9nb01ldGhvZCAoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBsb2dvRGF0YVt0aGlzLmxvZ29dXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgLi4ubWFwQWN0aW9ucyhbXHJcbiAgICAgICAgICAnc2V0TGF5b3V0TmVlZGVkJyxcclxuICAgICAgICAgICdzZXRJc0xvZ2luUGFnZScsXHJcbiAgICAgICAgICAnc2V0TW9iaWxlTW9kZSdcclxuICAgICAgXSksXHJcbiAgICAgICAgdXNlckxvZ2luKCkge1xyXG4gICAgICAgICAgICAvLyBBVVRIIFdJTEwgQkUgQ0FMTEVEIHdpdGggZGF0YVxyXG4gICAgICAgICAgICB0aGlzLiRzdG9yZS5kaXNwYXRjaCgnYXV0aGVudGljYXRlVXNlcicsIHRoaXMuY3JlZGVudGlhbHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRMYXlvdXROZWVkZWQodHJ1ZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldElzTG9naW5QYWdlKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuJHJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogJ2hvbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVycm9ycyA9IHJlcy5lcnJvcnNcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnRBbmltYXRpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZpdnVzID0gbmV3IFZpdnVzKCdsb2dvJywge1xyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcclxuICAgICAgICAgICAgICAgIGZvcmNlUmVuZGVyOiBmYWxzZVxyXG4gICAgICAgICAgICB9LCBmdW5jdGlvbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpdGVtIG9mIGVsZW1lbnQuZWwuY2hpbGRyZW5bMF0uY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZmlsbDp3aGl0ZScpXHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2ZpbGw6d2hpdGUnKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VuZFNvY2soKXtcclxuICAgICAgICAgIHNvY2suc2VuZCgrbmV3IERhdGUpXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKXtcclxuICAgICAgICB0aGlzLnNldExheW91dE5lZWRlZChmYWxzZSlcclxuICAgICAgICB0aGlzLnNldElzTG9naW5QYWdlKHRydWUpXHJcbiAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigpXHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgLmNhcmQge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG4gIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgbWluLWhlaWdodDogMTYwcHg7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICB9XHJcbiAgaDQge1xyXG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICB9XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBsb2dpbi52dWU/YjY4ZmEzNzIiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2NvcmUtanMvZ2V0LWl0ZXJhdG9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9jb3JlLWpzL2dldC1pdGVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSA1MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzdG9tcGpzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic3RvbXBqc1wiXG4vLyBtb2R1bGUgaWQgPSA1MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NranMtY2xpZW50XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwic29ja2pzLWNsaWVudFwiXG4vLyBtb2R1bGUgaWQgPSA1M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvKiBlc2xpbnQtZGlzYWJsZSAqL1xuZXhwb3J0IGRlZmF1bHQge1xuICBEb3RWdWVBcHA6IGA8Zz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yNTkuNDc2LDI4MC4zNjRWMjQ3LjVjMC0xMi45NTgtMTAuNTQyLTIzLjUtMjMuNS0yMy41cy0yMy41LDEwLjU0Mi0yMy41LDIzLjV2MjkuNjcyICAgYzAsMzUuNzU3LTEzLjE3Myw3MC4wODctMzcuMDk0LDk2LjY2NWwtMzIuOTgxLDM2LjY0NmMtMi43NzEsMy4wNzktMi41MjEsNy44MjEsMC41NTgsMTAuNTkzYzMuMDc4LDIuNzcxLDcuODIsMi41MjEsMTAuNTkyLTAuNTU4ICAgbDMyLjk4MS0zNi42NDZjMjYuNDAzLTI5LjMzOCw0MC45NDQtNjcuMjMxLDQwLjk0NC0xMDYuN1YyNDcuNWMwLTQuNjg3LDMuODEzLTguNSw4LjUtOC41czguNSwzLjgxMyw4LjUsOC41djMyLjg2NCAgIGMwLDQ0LjAwMy0xNi4zMDEsODYuMTY3LTQ1LjkwMSwxMTguNzI3bC0zMi4xNDksMzUuMzY0Yy0yLjc4NiwzLjA2NC0yLjU2LDcuODA5LDAuNTA1LDEwLjU5NWMxLjQzNywxLjMwNywzLjI0MiwxLjk1LDUuMDQyLDEuOTUgICBjMi4wNCwwLDQuMDcyLTAuODI3LDUuNTUyLTIuNDU1bDMyLjE0OC0zNS4zNjRDMjQxLjc4OSwzNzMuODU0LDI1OS40NzYsMzI4LjEwNiwyNTkuNDc2LDI4MC4zNjR6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yOTEuNDc2LDI0Ny41YzAtMzAuNjAzLTI0Ljg5Ny01NS41LTU1LjUtNTUuNXMtNTUuNSwyNC44OTctNTUuNSw1NS41djI5LjY3MmMwLDI3LjgzOS0xMC4yNTYsNTQuNTY2LTI4Ljg3OSw3NS4yNTggICBsLTIzLjQ0NywyNi4wNTNjLTIuNzcxLDMuMDc5LTIuNTIxLDcuODIxLDAuNTU4LDEwLjU5M2MzLjA3OSwyLjc3MSw3LjgyLDIuNTE5LDEwLjU5Mi0wLjU1OGwyMy40NDctMjYuMDUzICAgYzIxLjEwNi0yMy40NTEsMzIuNzMtNTMuNzQyLDMyLjczLTg1LjI5M1YyNDcuNWMwLTIyLjMzMiwxOC4xNjgtNDAuNSw0MC41LTQwLjVjMjIuMzMyLDAsNDAuNSwxOC4xNjgsNDAuNSw0MC41djMyLjg2NCAgIGMwLDUxLjk3OS0xOS4yNTYsMTAxLjc4OS01NC4yMjMsMTQwLjI1MmwtMjcuMTI1LDI5LjgzOWMtMi43ODcsMy4wNjQtMi41NjEsNy44MDksMC41MDQsMTAuNTk1YzEuNDM3LDEuMzA3LDMuMjQyLDEuOTUsNS4wNDIsMS45NSAgIGMyLjA0LDAsNC4wNzItMC44MjcsNS41NTItMi40NTVsMjcuMTI2LTI5LjgzOWMzNy40ODEtNDEuMjMsNTguMTIzLTk0LjYyMiw1OC4xMjMtMTUwLjM0MlYyNDcuNXpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTMyMy40NzYsMjQ3LjVjMC00OC4yNDgtMzkuMjUyLTg3LjUtODcuNS04Ny41cy04Ny41LDM5LjI1Mi04Ny41LDg3LjV2MjkuNjcyYzAsMTkuOTItNy4zMzksMzkuMDQ1LTIwLjY2NSw1My44NTEgICBsLTIxLjExMiwyMy40NThjLTIuNzcxLDMuMDc5LTIuNTIxLDcuODIxLDAuNTU4LDEwLjU5M2MzLjA3OCwyLjc3MSw3LjgyMSwyLjUxOSwxMC41OTItMC41NThsMjEuMTEyLTIzLjQ1OCAgIGMxNS44MDktMTcuNTY1LDI0LjUxNS00MC4yNTQsMjQuNTE1LTYzLjg4NlYyNDcuNWMwLTM5Ljk3NywzMi41MjMtNzIuNSw3Mi41LTcyLjVzNzIuNSwzMi41MjMsNzIuNSw3Mi41djMyLjg2NCAgIGMwLDU5Ljk1OC0yMi4yMTIsMTE3LjQxMi02Mi41NDUsMTYxLjc3N2wtNy41MDcsOC4yNThjLTIuNzg2LDMuMDY1LTIuNTYsNy44MDksMC41MDUsMTAuNTk1YzEuNDM3LDEuMzA2LDMuMjQzLDEuOTUsNS4wNDIsMS45NSAgIGMyLjA0LDAsNC4wNzItMC44MjcsNS41NTItMi40NTVsNy41MDYtOC4yNThjNDIuODQ4LTQ3LjEzMyw2Ni40NDYtMTA4LjE2OSw2Ni40NDYtMTcxLjg2N1YyNDcuNXpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTExNi40NzYsMjQ3LjVjMCw0LjE0MywzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTcsNy41LTcuNWMwLTI1LjI1NSw5LjE2OS00OS42NTEsMjUuODE5LTY4LjY5NSAgIGMxNi40OTUtMTguODY3LDM5LjEzNC0zMS4yMDUsNjMuNzQ2LTM0Ljc0MWM0LjEtMC41ODksNi45NDYtNC4zOTEsNi4zNTctOC40OWMtMC41ODktNC4xLTQuMzk0LTYuOTQyLTguNDktNi4zNTcgICBjLTI4LjE2LDQuMDQ2LTU0LjA1MiwxOC4xNS03Mi45MDYsMzkuNzE2QzEyNi45NjIsMTkwLjcxLDExNi40NzYsMjE4LjYxMywxMTYuNDc2LDI0Ny41elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMTMxLjQ3NiwyNzcuMTcyYzAtNC4xNDMtMy4zNTgtNy41LTcuNS03LjVzLTcuNSwzLjM1Ny03LjUsNy41YzAsMTIuMDAyLTQuNDIxLDIzLjUyMy0xMi40NDksMzIuNDQzbC0xOC43NzksMjAuODY3ICAgYy0yLjc3MSwzLjA3OC0yLjUyMSw3LjgyLDAuNTU4LDEwLjU5MmMxLjQzNCwxLjI5LDMuMjI3LDEuOTI1LDUuMDE1LDEuOTI1YzIuMDUyLDAsNC4wOTctMC44MzgsNS41NzctMi40ODNsMTguNzc5LTIwLjg2NiAgIEMxMjUuNjg3LDMwNy45NzEsMTMxLjQ3NiwyOTIuODg2LDEzMS40NzYsMjc3LjE3MnpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTM0MC43NTUsMzQ0LjEyM2MtNC4wMDktMS4wNDQtOC4xMDUsMS4zNTEtOS4xNTUsNS4zNTdjLTIuNzY5LDEwLjU3OS02LjIxMywyMS4wOTYtMTAuMjQsMzEuMjU4ICAgYy0xLjUyNiwzLjg1MSwwLjM1OSw4LjIxLDQuMjEsOS43MzVjMC45MDcsMC4zNTksMS44NDEsMC41MjksMi43NjEsMC41MjljMi45ODUsMCw1LjgwOC0xLjc5NSw2Ljk3NS00LjczOSAgIGM0LjI0OS0xMC43MjUsNy44ODQtMjEuODIyLDEwLjgwNi0zMi45ODZDMzQ3LjE2LDM0OS4yNzEsMzQ0Ljc2MSwzNDUuMTcyLDM0MC43NTUsMzQ0LjEyM3pcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTMxNS43OTEsMTU4LjYzMmMtMy4wODEtMi43NzEtNy44MjMtMi41MTctMTAuNTkyLDAuNTYzcy0yLjUxNyw3LjgyMiwwLjU2MywxMC41OTEgICBjMjIuMDYxLDE5LjgzMiwzNC43MTMsNDguMTU3LDM0LjcxMyw3Ny43MTR2MzIuODY0YzAsMTIuNDczLTAuODYsMjUuMDQyLTIuNTU3LDM3LjM1OWMtMC41NjUsNC4xMDQsMi4zMDMsNy44ODgsNi40MDYsOC40NTMgICBjMC4zNDcsMC4wNDgsMC42OTIsMC4wNzEsMS4wMzMsMC4wNzFjMy42ODgsMCw2LjkwMy0yLjcyMiw3LjQyLTYuNDc4YzEuNzktMTIuOTkzLDIuNjk4LTI2LjI1MSwyLjY5OC0zOS40MDZWMjQ3LjUgICBDMzU1LjQ3NiwyMTMuNjk1LDM0MS4wMTEsMTgxLjMwNCwzMTUuNzkxLDE1OC42MzJ6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yODAuNzI5LDE1My4wNzZjMS4wNDEsMC40OTYsMi4xMzgsMC43MywzLjIxOSwwLjczYzIuODAzLDAsNS40OTItMS41NzksNi43NzctNC4yNzhjMS43ODEtMy43MzksMC4xOTItOC4yMTUtMy41NDctOS45OTUgICBjLTEwLjgwNi01LjE0NS0yMi4yOTEtOC42MTYtMzQuMTM2LTEwLjMxN2MtNC4xMDYtMC41ODUtNy45MDEsMi4yNTgtOC40OSw2LjM1N3MyLjI1Nyw3LjkwMSw2LjM1Nyw4LjQ5ICAgQzI2MS4yNTcsMTQ1LjU1LDI3MS4yODksMTQ4LjU4MiwyODAuNzI5LDE1My4wNzZ6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yMzUuOTc2LDk2Yy0yLjgwNiwwLTUuNjQ0LDAuMDc4LTguNDM3LDAuMjMyYy00LjEzNiwwLjIyOC03LjMwNCwzLjc2Ni03LjA3Niw3LjkwMWMwLjIyOSw0LjEzNiwzLjc2Myw3LjMyMSw3LjkwMiw3LjA3NSAgIGMyLjUxOS0wLjEzOSw1LjA3OS0wLjIwOSw3LjYxLTAuMjA5Yzc1LjI2NiwwLDEzNi41LDYxLjIzMywxMzYuNSwxMzYuNXYzMi44NjRjMCw0LjE0MywzLjM1OCw3LjUsNy41LDcuNXM3LjUtMy4zNTcsNy41LTcuNVYyNDcuNSAgIEMzODcuNDc2LDE2My45NjMsMzE5LjUxMyw5NiwyMzUuOTc2LDk2elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMTUzLjk3MiwxMzYuNjkzYzEuNDc3LDAsMi45Ny0wLjQzNiw0LjI3NS0xLjM0M2MxMi40NzgtOC42NzcsMjYuMTgyLTE1LjE1NSw0MC43MzMtMTkuMjU4ICAgYzMuOTg3LTEuMTI0LDYuMzA4LTUuMjY4LDUuMTg0LTkuMjU0cy01LjI2OS02LjMwNC05LjI1NC01LjE4NGMtMTYuMTYsNC41NTYtMzEuMzc2LDExLjc0OS00NS4yMjYsMjEuMzc5ICAgYy0zLjQwMSwyLjM2NS00LjI0MSw3LjAzOS0xLjg3NiwxMC40MzlDMTQ5LjI2NSwxMzUuNTcsMTUxLjU5OSwxMzYuNjkzLDE1My45NzIsMTM2LjY5M3pcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTk5LjQ3NiwyNzcuMTcyVjI0Ny41YzAtMzQuODksMTMuMjEzLTY4LjExOCwzNy4yMDUtOTMuNTY1YzIuODQxLTMuMDE0LDIuNzAyLTcuNzYtMC4zMTItMTAuNjAyICAgcy03Ljc2MS0yLjcwMS0xMC42MDIsMC4zMTJDOTkuMTQsMTcxLjg4Niw4NC40NzYsMjA4Ljc3LDg0LjQ3NiwyNDcuNXYyOS42NzJjMCw0LjA4My0xLjUwNCw4LjAwMi00LjIzNCwxMS4wMzVsLTkuMjQ4LDEwLjI3NSAgIGMtMi43NzEsMy4wNzktMi41MjEsNy44MjEsMC41NTgsMTAuNTkyYzEuNDMzLDEuMjkxLDMuMjI3LDEuOTI2LDUuMDE1LDEuOTI2YzIuMDUyLDAsNC4wOTYtMC44MzcsNS41NzctMi40ODJsOS4yNDgtMTAuMjc1ICAgQzk2LjYwNSwyOTIuNDQ5LDk5LjQ3NiwyODQuOTY2LDk5LjQ3NiwyNzcuMTcyelwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNDA5Ljk1MSwxODkuMTA0Yy04LjIyNi0yNC40NDYtMjEuMjk5LTQ2LjUzMS0zOC44NTYtNjUuNjQyYy0yLjgwMy0zLjA1LTcuNTQ3LTMuMjUyLTEwLjU5Ny0wLjQ0OSAgIGMtMy4wNSwyLjgwMy0zLjI1MSw3LjU0Ny0wLjQ0OSwxMC41OThjMTYuMTI3LDE3LjU1NCwyOC4xMzQsMzcuODM0LDM1LjY4Niw2MC4yNzZjMS4wNTQsMy4xMzMsMy45NzYsNS4xMSw3LjEwNyw1LjExICAgYzAuNzkzLDAsMS42LTAuMTI3LDIuMzkzLTAuMzk0QzQwOS4xNiwxOTcuMjgyLDQxMS4yNzIsMTkzLjAyOSw0MDkuOTUxLDE4OS4xMDR6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0yOTUuMjQ3LDczLjgyMmMtMy45MTctMS4zNDEtOC4xODMsMC43NDgtOS41MjQsNC42NjhjLTEuMzQxLDMuOTE5LDAuNzQ5LDguMTgzLDQuNjY4LDkuNTIzICAgYzE2LjUzOCw1LjY1OSwzMi4wNjUsMTMuODU3LDQ2LjE1LDI0LjM2OWMxLjM0NywxLjAwNSwyLjkyLDEuNDg5LDQuNDgsMS40ODljMi4yODYsMCw0LjU0NC0xLjA0MSw2LjAxNy0zLjAxNSAgIGMyLjQ3OC0zLjMxOSwxLjc5NC04LjAxOS0xLjUyNS0xMC40OTZDMzMwLjE3Niw4OC45MTYsMzEzLjI2NCw3OS45ODYsMjk1LjI0Nyw3My44MjJ6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0xMTkuNDQyLDEyNS45MDhDMTUwLjk5MSw5NS42NTksMTkyLjM3Nyw3OSwyMzUuOTc2LDc5YzguMDk2LDAsMTYuMjM3LDAuNTgzLDI0LjE5NiwxLjczMSAgIGM0LjEwMywwLjU5OCw3LjkwMy0yLjI1Miw4LjQ5NS02LjM1MmMwLjU5Mi00LjEtMi4yNTEtNy45MDItNi4zNTEtOC40OTRDMjUzLjY0OCw2NC42MzUsMjQ0Ljc4Niw2NCwyMzUuOTc2LDY0ICAgYy00Ny40ODcsMC05Mi41NiwxOC4xNDEtMTI2LjkxNSw1MS4wODFjLTM0LjI0OCwzMi44MzgtNTQuMjc3LDc2LjkwNS01Ni4zOTcsMTI0LjA4NGMtMC4xODYsNC4xMzgsMy4wMTgsNy42NDQsNy4xNTUsNy44MjkgICBjMC4xMTUsMC4wMDYsMC4yMjksMC4wMDgsMC4zNDMsMC4wMDhjMy45ODcsMCw3LjMwNi0zLjE0LDcuNDg3LTcuMTYzQzY5LjU5NCwxOTYuNTI3LDg3Ljk4OCwxNTYuMDY2LDExOS40NDIsMTI1LjkwOHpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTIzNS45NzYsMzJjLTE2Ljc3MiwwLTMzLjQ4NSwxLjk0NC00OS42NzQsNS43NzhjLTQuMDMxLDAuOTU0LTYuNTI0LDQuOTk2LTUuNTcsOS4wMjZjMC45NTUsNC4wMyw0Ljk5Nyw2LjUyNCw5LjAyNyw1LjU2OSAgIEMyMDQuODE3LDQ4LjgwOSwyMjAuMzY2LDQ3LDIzNS45NzYsNDdjNTQuOTk2LDAsMTA2LjMzMiwyMS45MTEsMTQ0LjU1LDYxLjY5NWMxLjQ3MywxLjUzMywzLjQzOSwyLjMwNSw1LjQxLDIuMzA1ICAgYzEuODY5LDAsMy43NDEtMC42OTQsNS4xOTUtMi4wOTFjMi45ODctMi44NywzLjA4My03LjYxOCwwLjIxMy0xMC42MDRjLTE5LjkxMy0yMC43MjktNDMuMzA0LTM3LjAzNi02OS41MjItNDguNDY1ICAgQzI5NC42NjYsMzguMDAyLDI2NS43ODMsMzIsMjM1Ljk3NiwzMnpcIiAvPlxuICAgIDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlPVwiI0ZGRkZGRlwiIHN0cm9rZS13aWR0aD1cIjZcIiBkPVwiTTY3LjUwNywxMjUuNDA0YzEuMzcyLDEuMDc0LDMuMDAxLDEuNTk1LDQuNjE5LDEuNTk1YzIuMjI3LDAsNC40MzEtMC45ODcsNS45MS0yLjg3NiAgIGMyMS4zNzUtMjcuMzAyLDQ5LjUxNS00OC43MTcsODEuMzc3LTYxLjkzMmMzLjgyNi0xLjU4Nyw1LjY0Mi01Ljk3NSw0LjA1NS05LjgwMXMtNS45NzctNS42NDQtOS44MDEtNC4wNTUgICBjLTM0LjI0MSwxNC4yMDEtNjQuNDc4LDM3LjIxLTg3LjQ0MSw2Ni41MzlDNjMuNjcyLDExOC4xMzcsNjQuMjQ2LDEyMi44NTEsNjcuNTA3LDEyNS40MDR6XCIgLz5cbiAgICA8cGF0aCBmaWxsPVwibm9uZVwiIHN0cm9rZT1cIiNGRkZGRkZcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk0xMzEuOTgzLDM4LjcyNWMxLjA5NCwwLDIuMjA1LTAuMjQsMy4yNTUtMC43NDhDMTY2LjgxNiwyMi43MywyMDAuNzA5LDE1LDIzNS45NzYsMTVjMTguMzc4LDAsMzYuNjgyLDIuMTYyLDU0LjQwMSw2LjQyNiAgIGM0LjAyNSwwLjk2Niw4LjA3Ny0xLjUxLDkuMDQ2LTUuNTM3YzAuOTY5LTQuMDI3LTEuNTEtOC4wNzgtNS41MzgtOS4wNDdDMjc1LjAxOSwyLjMwMiwyNTUuNTM1LDAsMjM1Ljk3NiwwICAgYy0zNy41NDQsMC03My42MzEsOC4yMzItMTA3LjI1OSwyNC40NjljLTMuNzMsMS44MDEtNS4yOTQsNi4yODUtMy40OTMsMTAuMDE1QzEyNi41MTcsMzcuMTYzLDEyOS4xOTUsMzguNzI1LDEzMS45ODMsMzguNzI1elwiIC8+XG4gICAgPHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2U9XCIjRkZGRkZGXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMzIxLjcyNCwzMS4zODNjNy43MzIsMy4wNzksMTUuMzg1LDYuNjE5LDIyLjc0NiwxMC41MmMxLjExOSwwLjU5NCwyLjMyMSwwLjg3NSwzLjUwNSwwLjg3NSAgIGMyLjY4OCwwLDUuMjg3LTEuNDQ5LDYuNjMzLTMuOTljMS45MzktMy42NiwwLjU0NS04LjE5OS0zLjExNS0xMC4xMzljLTcuODM3LTQuMTUzLTE1Ljk4Ni03LjkyMi0yNC4yMi0xMS4yMDEgICBjLTMuODQ5LTEuNTMzLTguMjEsMC4zNDUtOS43NDMsNC4xOTJDMzE1Ljk5OCwyNS40ODgsMzE3Ljg3NiwyOS44NTEsMzIxLjcyNCwzMS4zODN6XCIgLz5cbiAgICA8L3N2Zz5gLFxuICBLZXl0cm9uaWM6IGA8Zz5cblx0PGc+XG5cdFx0PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk00NzguNjY1LDcyYzAtMzkuNzA0LTMyLjI5Ni03Mi03Mi03MmMtMTkuNzA0LDAtMzguNDk2LDguMTg0LTUyLDIyLjI4OEMzNDEuMTYxLDguMTg0LDMyMi4zNjksMCwzMDIuNjY1LDAgICAgYy0zOS43MDQsMC03MiwzMi4yOTYtNzIsNzJjMCwyNC43NTIsMTIuNDU2LDQ3LjM2LDMzLjM3Niw2MC42ODhMMjc1LjM1MywxNDRMMTM0LjY2NSwyODQuNjg4bC0yNi4zNDQtMjYuMzQ0ICAgIGMtMy4xMjgtMy4xMjgtOC4xODQtMy4xMjgtMTEuMzEyLDBsLTMyLDMyYy0zLjEyOCwzLjEyOC0zLjEyOCw4LjE4NCwwLDExLjMxMkw5MS4zNTMsMzI4bC0xMi42ODgsMTIuNjg4bC0yNi4zNDQtMjYuMzQ0ICAgIGMtMy4xMjgtMy4xMjgtOC4xODQtMy4xMjgtMTEuMzEyLDBsLTMzLDMzYy0zLjEyOCwzLjEyOC0zLjEyOCw4LjE4NCwwLDExLjMxMkwzNC4zNTMsMzg1TDQuMzQ1LDQxNS4wMDggICAgYy0zLjEyOCwzLjEyOC0zLjEyOCw4LjE4NCwwLDExLjMxMmw1Miw1MmMxLjU2LDEuNTYsMy42MDgsMi4zNDQsNS42NTYsMi4zNDRzNC4wOTYtMC43ODQsNS42NTYtMi4zNDRsNTEuMDA4LTUxLjAwOCAgICBsMjYuMzQ0LDI2LjM0NGMzLjEyOCwzLjEyOCw4LjE4NCwzLjEyOCwxMS4zMTIsMGw0MC00MGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMkwxNjkuOTc3LDM3NmwxNjguNjg4LTE2OC42ODggICAgbDcuMzEyLDcuMzEyQzM1OS4zMDUsMjM1LjU0NCwzODEuOTEzLDI0OCw0MDYuNjY1LDI0OGMzOS43MDQsMCw3Mi0zMi4yOTYsNzItNzJjMC0xOS43MDQtOC4xODQtMzguNDk2LTIyLjI4OC01MiAgICBDNDcwLjQ4MSwxMTAuNDk2LDQ3OC42NjUsOTEuNzA0LDQ3OC42NjUsNzJ6IE00NjIuNjY1LDE3NmMwLDMwLjg3Mi0yNS4xMjgsNTYtNTYsNTZjLTE5LjQ4OCwwLTM3LjI3Mi05Ljk0NC00Ny41ODQtMjYuNiAgICBjLTAuMzI4LTAuNTItMC43MTItMS4wMDgtMS4xNTItMS40NDhsLTEzLjYwOC0xMy42MDhjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwbC0xODAsMTgwICAgIGMtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJMMTc5LjM1Myw0MDhsLTI4LjY4OCwyOC42ODhsLTI2LjM0NC0yNi4zNDRjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwbC01MS4wMDgsNTEuMDA4ICAgIGwtNDAuNjg4LTQwLjY4OGwzMC4wMDgtMzAuMDA4YzMuMTI4LTMuMTI4LDMuMTI4LTguMTg0LDAtMTEuMzEyTDI0Ljk3NywzNTNsMjEuNjg4LTIxLjY4OGwyNi4zNDQsMjYuMzQ0ICAgIGMzLjEyOCwzLjEyOCw4LjE4NCwzLjEyOCwxMS4zMTIsMGwyNC0yNGMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMkw4MS45NzcsMjk2bDIwLjY4OC0yMC42ODhsMjYuMzQ0LDI2LjM0NCAgICBjMy4xMjgsMy4xMjgsOC4xODQsMy4xMjgsMTEuMzEyLDBsMTUyLTE1MmMzLjEyOC0zLjEyOCwzLjEyOC04LjE4NCwwLTExLjMxMmwtMTcuNjA4LTE3LjYwOGMtMC40NC0wLjQ0LTAuOTItMC44MjQtMS40NDgtMS4xNTIgICAgYy0xNi42NTYtMTAuMzEyLTI2LjYtMjguMDk2LTI2LjYtNDcuNTg0YzAtMzAuODcyLDI1LjEyOC01Niw1Ni01NmMxNy45NiwwLDM0Ljk2OCw4Ljc2OCw0NS41MDQsMjMuNDU2YzMsNC4xODQsMTAsNC4xODQsMTMsMCAgICBDMzcxLjY5NywyNC43NjgsMzg4LjcwNSwxNiw0MDYuNjY1LDE2YzMwLjg3MiwwLDU2LDI1LjEyOCw1Niw1NmMwLDE3Ljk2LTguNzY4LDM0Ljk2OC0yMy40NTYsNDUuNTA0ICAgIGMtMi4wOTYsMS41MDQtMy4zMzYsMy45Mi0zLjMzNiw2LjQ5NnMxLjI0LDUsMy4zMzYsNi40OTZDNDUzLjg5NywxNDEuMDMyLDQ2Mi42NjUsMTU4LjA0LDQ2Mi42NjUsMTc2elwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cmVjdCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiB4PVwiMTczLjgxMVwiIHk9XCIyMjguMDA5XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTkxLjEyNjUgMjUyLjAxODkpXCIgd2lkdGg9XCIxNjkuNjc4XCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgeD1cIjE2My4zNVwiIHk9XCIzMTEuOTgzXCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTE3NS4xMDQ1IDIxNy4yMjUyKVwiIHdpZHRoPVwiMjIuNjI0XCIgaGVpZ2h0PVwiMTZcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk00MDYuNjY1LDQwYy0xNy42NDgsMC0zMiwxNC4zNTItMzIsMzJzMTQuMzUyLDMyLDMyLDMyczMyLTE0LjM1MiwzMi0zMlM0MjQuMzEzLDQwLDQwNi42NjUsNDB6IE00MDYuNjY1LDg4ICAgIGMtOC44MjQsMC0xNi03LjE3Ni0xNi0xNnM3LjE3Ni0xNiwxNi0xNmM4LjgyNCwwLDE2LDcuMTc2LDE2LDE2UzQxNS40ODksODgsNDA2LjY2NSw4OHpcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHJlY3QgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgeD1cIjMxMC42NjNcIiB5PVwiOTIuNjc0XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgMTkuODA0NiAyNTUuNzg1NClcIiB3aWR0aD1cIjE2XCIgaGVpZ2h0PVwiMjIuNjI0XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxyZWN0IGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIHg9XCIzNDIuNjYxXCIgeT1cIjEyNC42NzRcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMC43MDcxIC0wLjcwNzEgMC43MDcxIDAuNzA3MSA2LjU0OTMgMjg3Ljc4NDIpXCIgd2lkdGg9XCIxNlwiIGhlaWdodD1cIjIyLjYyNFwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbjxnPlxuXHQ8Zz5cblx0XHQ8cmVjdCBmaWxsPVwibm9uZVwiIHN0cm9rZS13aWR0aD1cIjZcIiB4PVwiMzc0LjY1OVwiIHk9XCIxNTYuNjc0XCIgdHJhbnNmb3JtPVwibWF0cml4KDAuNzA3MSAtMC43MDcxIDAuNzA3MSAwLjcwNzEgLTYuNzA2IDMxOS43ODMxKVwiIHdpZHRoPVwiMTZcIiBoZWlnaHQ9XCIyMi42MjRcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk00NzAuNjY1LDM0NGgtMTQuMDMyYy0wLjQ0LTEuMTEyLTAuODk2LTIuMjE2LTEuMzkyLTMuMzI4bDkuOTI4LTkuOTI4YzMuMTI4LTMuMTI4LDMuMTI4LTguMTg0LDAtMTEuMzEybC0zMy45MzYtMzMuOTM2ICAgIGMtMy4xMjgtMy4xMjgtOC4xODQtMy4xMjgtMTEuMzEyLDBsLTkuOTI4LDkuOTI4Yy0xLjExMi0wLjQ5Ni0yLjIxNi0wLjk1Mi0zLjMyOC0xLjM5MlYyODBjMC00LjQyNC0zLjU3Ni04LTgtOGgtNDggICAgYy00LjQyNCwwLTgsMy41NzYtOCw4djE0LjAzMmMtMS4xMTIsMC40NC0yLjIxNiwwLjg5Ni0zLjMyOCwxLjM5MmwtOS45MjgtOS45MjhjLTMuMTI4LTMuMTI4LTguMTg0LTMuMTI4LTExLjMxMiwwICAgIGwtMzMuOTM2LDMzLjkzNmMtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJsOS45MjgsOS45MjhjLTAuNDk2LDEuMTEyLTAuOTUyLDIuMjE2LTEuMzkyLDMuMzI4aC0xNC4wMzIgICAgYy00LjQyNCwwLTgsMy41NzYtOCw4djQ4YzAsNC40MjQsMy41NzYsOCw4LDhoMTQuMDMyYzAuNDQsMS4xMTIsMC44OTYsMi4yMTYsMS4zOTIsMy4zMjhsLTkuOTI4LDkuOTI4ICAgIGMtMy4xMjgsMy4xMjgtMy4xMjgsOC4xODQsMCwxMS4zMTJsMzMuOTM2LDMzLjkzNmMzLjEyOCwzLjEyOCw4LjE4NCwzLjEyOCwxMS4zMTIsMGw5LjkyOC05LjkyOCAgICBjMS4xMTIsMC40OTYsMi4yMTYsMC45NTIsMy4zMjgsMS4zOTJWNDcyYzAsNC40MjQsMy41NzYsOCw4LDhoNDhjNC40MjQsMCw4LTMuNTc2LDgtOHYtMTQuMDMyICAgIGMxLjExMi0wLjQ0LDIuMjE2LTAuODk2LDMuMzI4LTEuMzkybDkuOTI4LDkuOTI4YzMuMTI4LDMuMTI4LDguMTg0LDMuMTI4LDExLjMxMiwwbDMzLjkzNi0zMy45MzYgICAgYzMuMTI4LTMuMTI4LDMuMTI4LTguMTg0LDAtMTEuMzEybC05LjkyOC05LjkyOGMwLjQ5Ni0xLjExMiwwLjk1Mi0yLjIxNiwxLjM5Mi0zLjMyOGgxNC4wMzJjNC40MjQsMCw4LTMuNTc2LDgtOHYtNDggICAgQzQ3OC42NjUsMzQ3LjU3Niw0NzUuMDg5LDM0NCw0NzAuNjY1LDM0NHogTTQ2Mi42NjUsMzkyaC0xMS42NzJjLTMuNDk2LDAtNi41NzYsMi4yNjQtNy42MzIsNS41OTIgICAgYy0xLjIxNiwzLjg2NC0yLjg1Niw3LjgtNC44OCwxMS42NzJjLTEuNjE2LDMuMTA0LTEuMDMyLDYuODg4LDEuNDQsOS4zNmw4LjI4OCw4LjI4OGwtMjIuNjI0LDIyLjYyNGwtOC4yODgtOC4yODggICAgYy0yLjQ3Mi0yLjQ3Mi02LjI1Ni0zLjA1Ni05LjM2LTEuNDRjLTMuODcyLDIuMDI0LTcuODA4LDMuNjY0LTExLjY3Miw0Ljg4Yy0zLjMzNiwxLjA2NC01LjYsNC4xNDQtNS42LDcuNjRWNDY0aC0zMnYtMTEuNjcyICAgIGMwLTMuNDk2LTIuMjY0LTYuNTc2LTUuNTkyLTcuNjMyYy0zLjg2NC0xLjIxNi03LjgtMi44NTYtMTEuNjcyLTQuODhjLTMuMTA0LTEuNjE2LTYuODgtMS4wMzItOS4zNiwxLjQ0bC04LjI4OCw4LjI4OCAgICBsLTIyLjYyNC0yMi42MjRsOC4yODgtOC4yODhjMi40NzItMi40NzIsMy4wNTYtNi4yNTYsMS40NC05LjM2Yy0yLjAyNC0zLjg3Mi0zLjY2NC03LjgwOC00Ljg4LTExLjY3MiAgICBjLTEuMDY0LTMuMzM2LTQuMTQ0LTUuNi03LjY0LTUuNmgtMTEuNjcydi0zMmgxMS42NzJjMy40OTYsMCw2LjU3Ni0yLjI2NCw3LjYzMi01LjU5MmMxLjIxNi0zLjg2NCwyLjg1Ni03LjgsNC44OC0xMS42NzIgICAgYzEuNjE2LTMuMTA0LDEuMDMyLTYuODg4LTEuNDQtOS4zNmwtOC4yODgtOC4yODhsMjIuNjI0LTIyLjYyNGw4LjI4OCw4LjI4OGMyLjQ4LDIuNDgsNi4yNTYsMy4wNDgsOS4zNiwxLjQ0ICAgIGMzLjg3Mi0yLjAyNCw3LjgwOC0zLjY2NCwxMS42NzItNC44OGMzLjMzNi0xLjA2NCw1LjYtNC4xNDQsNS42LTcuNjRWMjg4aDMydjExLjY3MmMwLDMuNDk2LDIuMjY0LDYuNTc2LDUuNTkyLDcuNjMyICAgIGMzLjg2NCwxLjIxNiw3LjgsMi44NTYsMTEuNjcyLDQuODhjMy4xMDQsMS42MDgsNi44ODgsMS4wNCw5LjM2LTEuNDRsOC4yODgtOC4yODhsMjIuNjI0LDIyLjYyNGwtOC4yODgsOC4yODggICAgYy0yLjQ3MiwyLjQ3Mi0zLjA1Niw2LjI1Ni0xLjQ0LDkuMzZjMi4wMjQsMy44NzIsMy42NjQsNy44MDgsNC44OCwxMS42NzJjMS4wNjQsMy4zMzYsNC4xNDQsNS42LDcuNjQsNS42aDExLjY3MlYzOTJ6XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMzc0LjY2NSwzMjhjLTI2LjQ3MiwwLTQ4LDIxLjUyOC00OCw0OHMyMS41MjgsNDgsNDgsNDhzNDgtMjEuNTI4LDQ4LTQ4UzQwMS4xMzcsMzI4LDM3NC42NjUsMzI4eiBNMzc0LjY2NSw0MDggICAgYy0xNy42NDgsMC0zMi0xNC4zNTItMzItMzJzMTQuMzUyLTMyLDMyLTMyczMyLDE0LjM1MiwzMiwzMlMzOTIuMzEzLDQwOCwzNzQuNjY1LDQwOHpcIiBzdHJva2U9XCIjRkZGRkZGXCIvPlxuXHQ8L2c+XG48L2c+XG48Zz5cblx0PGc+XG5cdFx0PHBhdGggZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIk01NC42NjUsMTY4aC0xNmMwLDEzLjIzMi0xMC43NjgsMjQtMjQsMjR2MTZjMTMuMjMyLDAsMjQsMTAuNzY4LDI0LDI0aDE2YzAtMTMuMjMyLDEwLjc2OC0yNCwyNC0yNHYtMTYgICAgQzY1LjQzMywxOTIsNTQuNjY1LDE4MS4yMzIsNTQuNjY1LDE2OHogTTQ2LjY2NSwyMDguMjQ4Yy0yLjMzNi0zLjE0NC01LjEwNC01LjkxMi04LjI0OC04LjI0OCAgICBjMy4xNDQtMi4zMzYsNS45MTItNS4xMDQsOC4yNDgtOC4yNDhjMi4zMzYsMy4xNDQsNS4xMDQsNS45MTIsOC4yNDgsOC4yNDhDNTEuNzY5LDIwMi4zMzYsNDkuMDAxLDIwNS4xMDQsNDYuNjY1LDIwOC4yNDh6XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNMTUwLjY2NSwxMjBoLTE2YzAsMTMuMjMyLTEwLjc2OCwyNC0yNCwyNHYxNmMxMy4yMzIsMCwyNCwxMC43NjgsMjQsMjRoMTZjMC0xMy4yMzIsMTAuNzY4LTI0LDI0LTI0di0xNiAgICBDMTYxLjQzMywxNDQsMTUwLjY2NSwxMzMuMjMyLDE1MC42NjUsMTIweiBNMTQyLjY2NSwxNjAuMjQ4Yy0yLjMzNi0zLjE0NC01LjEwNC01LjkxMi04LjI0OC04LjI0OCAgICBjMy4xNDQtMi4zMzYsNS45MTItNS4xMDQsOC4yNDgtOC4yNDhjMi4zMzYsMy4xNDQsNS4xMDQsNS45MTIsOC4yNDgsOC4yNDhDMTQ3Ljc2OSwxNTQuMzM2LDE0NS4wMDEsMTU3LjEwNCwxNDIuNjY1LDE2MC4yNDh6XCIgc3Ryb2tlPVwiI0ZGRkZGRlwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG5cdDxnPlxuXHRcdDxwYXRoIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJNNzAuNjY1LDQ4aC0xNmMwLDEzLjIzMi0xMC43NjgsMjQtMjQsMjR2MTZjMTMuMjMyLDAsMjQsMTAuNzY4LDI0LDI0aDE2YzAtMTMuMjMyLDEwLjc2OC0yNCwyNC0yNFY3MiAgICBDODEuNDMzLDcyLDcwLjY2NSw2MS4yMzIsNzAuNjY1LDQ4eiBNNjIuNjY1LDg4LjI0OGMtMi4zMzYtMy4xNDQtNS4xMDQtNS45MTItOC4yNDgtOC4yNDhjMy4xNDQtMi4zMzYsNS45MTItNS4xMDQsOC4yNDgtOC4yNDggICAgYzIuMzM2LDMuMTQ0LDUuMTA0LDUuOTEyLDguMjQ4LDguMjQ4QzY3Ljc2OSw4Mi4zMzYsNjUuMDAxLDg1LjEwNCw2Mi42NjUsODguMjQ4elwiIHN0cm9rZT1cIiNGRkZGRkZcIi8+XG5cdDwvZz5cbjwvZz5cbiAgYCxcbiAgTW9sZWN0cm9uOiBgXG4gICAgPHBhdGggc3Ryb2tlPVwiI0ZGRkZGRlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLXdpZHRoPVwiNlwiIGQ9XCJtMzk4LjU1OSwxNjYuMDJjLTguODUtMy40MDQtMTguMjkyLTYuNDkzLTI4LjIyLTkuMjY1IDIuNTYzLTkuOTg0IDQuNjA5LTE5LjcwNiA2LjA4Ny0yOS4wNzMgNy42ODktNDguNzU3LTAuODA4LTgyLjk1OS0yMy45MjUtOTYuMzA2LTYuNzItMy44OC0xNC40NDMtNS44NDgtMjIuOTU0LTUuODQ4LTI2Ljg4MiwwLTYwLjg1LDE5Ljk2NS05NS4xMTgsNTMuNjgxLTcuNDg2LTcuMzUyLTE1LjAwNi0xNC4xMDUtMjIuNTAyLTIwLjE2Ny0zOC4zNzktMzEuMDM4LTcyLjI1LTQwLjc4MS05NS4zNjUtMjcuNDM0LTE0Ljg1Niw4LjU3Ny0yMy44OTEsMjYuMDkzLTI2LjEyNiw1MC42NTItMC4zNzYsNC4xMjUgMi42NjQsNy43NzMgNi43ODksOC4xNDggNC4xMzgsMC4zODIgNy43NzItMi42NjQgOC4xNDgtNi43ODkgMS4yMzgtMTMuNTk0IDUuNDg0LTMxLjM5OCAxOC42ODgtMzkuMDIxIDE3LjExLTkuODgxIDQ1LjY5OS0wLjM2NSA3OC40MzQsMjYuMTA2IDcuMTQzLDUuNzc2IDE0LjMxNCwxMi4yMTcgMjEuNDYxLDE5LjIzMy0xNC4zNzMsMTUuMjkzLTI4LjY3NiwzMi44OTQtNDIuNDEsNTIuMzQ3LTI0LjE2LDIuMTk5LTQ3LjE3Miw1Ljg4OC02OC4yOTEsMTAuOTQ4LTMuNjk4LTE0LjM3Ni02LjIzOC0yOC4wOTMtNy40OTEtNDAuODI3LTAuNDA1LTQuMTIyLTQuMDU5LTcuMTM0LTguMTk4LTYuNzI5LTQuMTIyLDAuNDA1LTcuMTM1LDQuMDc2LTYuNzI5LDguMTk4IDEuMzI2LDEzLjQ3NCA0LjAwOCwyNy45NjYgNy45MTcsNDMuMTMzLTkuNTk2LDIuNzA2LTE4LjczLDUuNzEyLTI3LjMxMSw5LjAxMi00Ni4wNzIsMTcuNzItNzEuNDQzLDQyLjE4LTcxLjQ0Myw2OC44NzNzMjUuMzcxLDUxLjE1MyA3MS40NDEsNjguODcyYzguODUsMy40MDQgMTguMjkyLDYuNDkzIDI4LjIyLDkuMjY1LTIuNTYzLDkuOTg0LTQuNjA5LDE5LjcwNi02LjA4NywyOS4wNzMtNy42ODksNDguNzU3IDAuODA4LDgyLjk1OSAyMy45MjUsOTYuMzA2IDYuNzIsMy44OCAxNC40NDMsNS44NDggMjIuOTU0LDUuODQ4IDI2LjU3MywwIDYwLjA3MS0xOS41MTYgOTMuOTM4LTUyLjUzMSA3LjI1NSw3LjA4NiAxNC41NCwxMy42MDkgMjEuODAzLDE5LjQ4MiAyNy4xNjEsMjEuOTY2IDUyLjA1OSwzMy4yNjYgNzIuNDg5LDMzLjI2NSA4LjQzOC0wLjAwMSAxNi4xMTktMS45MyAyMi44NzYtNS44MzEgMjMuMTE3LTEzLjM0NyAzMS42MTQtNDcuNTQ5IDIzLjkyNS05Ni4zMDYtMS40NzctOS4zNjYtMy41MjMtMTkuMDg3LTYuMDg2LTI5LjA3IDE1LjQzOS00LjI1MiAyOS42NC05LjI2IDQyLjIxOC0xNC45NiAzLjc3My0xLjcxIDUuNDQ1LTYuMTU0IDMuNzM1LTkuOTI3LTEuNzEtMy43NzMtNi4xNTUtNS40NDYtOS45MjctMy43MzUtMTEuOTEyLDUuMzk4LTI1LjM3NywxMC4xNS00MC4wNDIsMTQuMTkyLTYuMDYzLTIwLjI2MS0xNC4xMzctNDEuNDEyLTIzLjk3Ni02Mi44MDggMTAuMjgxLTIyLjEyMiAxOC42ODUtNDQuMDA0IDI0Ljk0My02NC45MzYgNTUuNjY1LDE1LjU4NiA4OC42NTEsNDAuMjAyIDg4LjY1MSw2My44MDEgMCwxNS4yNDctMTMuMjk2LDI3LjgyNy0yNC40NSwzNS42OTQtMy4zODUsMi4zODgtNC4xOTMsNy4wNjctMS44MDYsMTAuNDUyIDIuMzg4LDMuMzg2IDcuMDY3LDQuMTkzIDEwLjQ1MiwxLjgwNiAyMC4xNTMtMTQuMjE1IDMwLjgwNC0zMC43OTcgMzAuODA0LTQ3Ljk1MiAwLTI2LjY5My0yNS4zNzEtNTEuMTUzLTcxLjQ0MS02OC44NzJ6bS02OS4wMTMtMTI1LjQ5MWM1Ljg0NCw3LjEwNTQzZS0xNSAxMS4wNDQsMS4yOTEgMTUuNDU0LDMuODM4IDE3LjExMiw5Ljg4IDIzLjE2NiwzOS4zOTYgMTYuNjA3LDgwLjk3OS0xLjQwNSw4LjkwNy0zLjM1LDE4LjE1OS01Ljc4OSwyNy42NjktMjEuMjA3LTUuMDI4LTQ0LjI5OS04LjY4LTY4LjUzMi0xMC44MzUtMTMuNTk2LTE5LjI0Mi0yNy44NjYtMzYuODM5LTQyLjM3NS01Mi4yNTMgMi42NTUtMi42MTggNS4zMTItNS4xNTggNy45NjQtNy42MDIgMjkuMjUyLTI2Ljk1MyA1Ni40OC00MS43OTYgNzYuNjcxLTQxLjc5NnptLTk1LjA5Niw2MC4xNTJjMTEuMzE3LDEyLjA2MiAyMi41LDI1LjUxNyAzMy4zMjMsNDAuMTAyLTEwLjc2OS0wLjU4Ny0yMS43MTItMC44OTEtMzIuNzczLTAuODkxLTExLjQzMSwwLTIyLjczOCwwLjMyMS0zMy44NTUsMC45NDcgMTAuODA4LTE0LjU2IDIyLjAwNi0yOC4wNyAzMy4zMDUtNDAuMTU4em0tLjA1MywyNjkuNjU3Yy0xMS43MTgtMTIuNDItMjMuMjk2LTI2LjM0MS0zNC40ODYtNDEuNDY2IDExLjUxNCwwLjY3NCAyMy4yMzQsMS4wMiAzNS4wODksMS4wMiAxMS40MTksMCAyMi43MzItMC4zMzMgMzMuODcxLTAuOTY5LTExLjE4LDE1LjA2NC0yMi43NzcsMjkuMDEtMzQuNDc0LDQxLjQxNXptLjYwMy01NS40NDZjLTE2LjExNSwwLTMxLjU3OC0wLjYyNC00Ni4zMTQtMS43ODQtOC4yNzctMTIuMDc2LTE2LjI4NC0yNC43OC0yMy45MDctMzcuOTg0LTcuNTAzLTEyLjk5NS0xNC40MDUtMjYuMTA3LTIwLjY1Ny0zOS4xNTUgNi40OS0xMy42NjEgMTMuNzA3LTI3LjQxMiAyMS41OTYtNDEuMDc3IDcuNjQtMTMuMjMyIDE1Ljc1LTI2LjA2MyAyNC4xNzctMzguMzA3IDE0LjM3NC0xLjA5OSAyOS40MjktMS42OTMgNDUuMTA1LTEuNjkzIDE1LjI3MywwIDI5Ljk1NiwwLjU2NCA0My45OTQsMS42MDkgOC40MzQsMTIuMjY3IDE2LjU5LDI1LjE4NSAyNC4zNDksMzguNjIzIDcuODUsMTMuNTk3IDE1LjAzNCwyNy4yNzkgMjEuNSw0MC44NzMtNi4yMTksMTIuOTQyLTEzLjA5MSwyNS45NTctMjAuNTYsMzguODk0LTcuNjI1LDEzLjIwNy0xNS43MiwyNi4wMTUtMjQuMTMsMzguMjM5LTE0LjcxNiwxLjE1OC0yOS44MywxLjc2Mi00NS4xNTMsMS43NjJ6bS02NS42MTUtMy42NTVjLTE4LjQ1My0yLjEzMi0zNS41ODItNS4xMjktNTEuMjA1LTguODEgNC43NDQtMTUuNzg5IDEwLjc1OC0zMi4xNiAxNy45MjktNDguNzkgNC44OTgsOS42ODggMTAuMTI4LDE5LjM3MyAxNS42NzksMjguOTg3IDUuNjY4LDkuODE4IDExLjU0OSwxOS4zNzEgMTcuNTk3LDI4LjYxM3ptMS4xOS0xNTIuODI5Yy02LjExMSw5LjMxOC0xMi4wNzgsMTguOTkxLTE3Ljg0NywyOC45ODQtNS45MzMsMTAuMjc2LTExLjQ5OSwyMC42MS0xNi42NzcsMzAuOTI4LTcuNTQzLTE3LjMxOC0xMy44NTgtMzQuMzc2LTE4Ljc4OC01MC43NDkgMTYuMjAzLTMuODU5IDM0LjA0Mi02Ljk4MyA1My4zMTItOS4xNjN6bS0xNTUuNTc1LDc2LjQ4NGMwLTIzLjQ3MiAzMi42MzQtNDcuOTUxIDg3Ljc1Ny02My41NSA2LjIzNSwyMC44MDIgMTQuNjAxLDQyLjYyIDI0LjgwNSw2NC42NDctOS44MTMsMjEuMzYyLTE3Ljg2NSw0Mi40NzctMjMuOTEzLDYyLjcwNS01NS42NjMtMTUuNTg3LTg4LjY0OS00MC4yMDMtODguNjQ5LTYzLjgwMnptMTI1LjQ1NCwxOTQuMzYzYy01Ljg0NCwwLTExLjA0NC0xLjI5MS0xNS40NTQtMy44MzgtMTcuMTEyLTkuODgtMjMuMTY2LTM5LjM5Ni0xNi42MDctODAuOTc5IDEuNDA1LTguOTA3IDMuMzUtMTguMTU5IDUuNzg5LTI3LjY2OSAyMC41MTgsNC44NjUgNDIuOCw4LjQ0MSA2Ni4xNzMsMTAuNjE5IDEzLjk1MSwxOS44MDcgMjguNjE4LDM3Ljg4MyA0My41Myw1My42NDgtMi4yNTQsMi4yMDEtNC41MDksNC4zNDgtNi43Niw2LjQyMy0yOS4yNTIsMjYuOTU0LTU2LjQ4LDQxLjc5Ni03Ni42NzEsNDEuNzk2em0yMjAuMjE0LTg0LjU4NGM2LjU1OSw0MS41ODMgMC41MDUsNzEuMDk5LTE2LjYwNyw4MC45NzktMTcuMTEzLDkuODc5LTQ1LjY5OSwwLjM2NC03OC40MzQtMjYuMTA2LTYuODkzLTUuNTc0LTEzLjgxNC0xMS43NjctMjAuNzEyLTE4LjQ5OSAxNC43NjEtMTUuNTc4IDI5LjQ2Mi0zMy42MDMgNDMuNTYzLTUzLjU3OSAyMy40MzItMi4xNTEgNDUuODIyLTUuNjk3IDY2LjM4OS0xMC41MDkgMi40NDUsOS41MjYgNC4zOTQsMTguNzkzIDUuODAxLDI3LjcxNHptLTkuODMtNDIuMTUzYy0xNi4wNjQsMy43MzMtMzMuMzExLDYuNjctNTEuMzM5LDguNzQ1IDYuMDg1LTkuMjgzIDEyLjAyNy0xOC45MTggMTcuNzczLTI4Ljg3MSA1LjUxNy05LjU1NiAxMC43MTMtMTkuMTYxIDE1LjU3OS0yOC43NTcgNy4xOTUsMTYuNjYgMTMuMjI4LDMzLjA2MyAxNy45ODcsNDguODgzem0tMTcuOTE4LTg0LjE0NWMtNS4xNTItMTAuMjU5LTEwLjY4OC0yMC41MzItMTYuNTg3LTMwLjc0OS01LjgxOC0xMC4wNzgtMTEuODU5LTE5Ljg3OC0xOC4wNzctMjkuMzQ4IDE5LjM1NSwyLjE0NiAzNy4yNzYsNS4yNDMgNTMuNTY0LDkuMDgxLTQuOTU1LDE2LjQ5My0xMS4zMDIsMzMuNjIzLTE4LjksNTEuMDE2elwiLz5cbiAgICA8cGF0aCBzdHJva2U9XCIjRkZGRkZGXCIgZmlsbD1cIm5vbmVcIiBzdHJva2Utd2lkdGg9XCI2XCIgZD1cIm0yMzUsMTk3LjM5MmMtMjAuNjc4LDAtMzcuNSwxNi44MjItMzcuNSwzNy41czE2LjgyMiwzNy41IDM3LjUsMzcuNSAzNy41LTE2LjgyMiAzNy41LTM3LjUtMTYuODIyLTM3LjUtMzcuNS0zNy41em0wLDYwYy0xMi40MDYsMC0yMi41LTEwLjA5NC0yMi41LTIyLjVzMTAuMDk0LTIyLjUgMjIuNS0yMi41IDIyLjUsMTAuMDk0IDIyLjUsMjIuNS0xMC4wOTQsMjIuNS0yMi41LDIyLjV6XCIvPlxuICBgXG5cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvbG9nb0RhdGEuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ2aXZ1c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInZpdnVzXCJcbi8vIG1vZHVsZSBpZCA9IDU1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXgganVzdGlmeS1jZW50ZXIgZnVsbC1oZWlnaHRcIixcbiAgICBjbGFzczogX3ZtLmhlaWdodFNpemVcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB0ZXh0LXdoaXRlIHRleHQtY2VudGVyIHdpZHRoLTNvZjQgYmctd2lkdGgtMm9mNSBndC1iZy13aWR0aC0xb2Y0IHNtLWF1dG8gXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2dpblwiXG4gICAgfVxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLXRpdGxlXCIsXG4gICAgY2xhc3M6IF92bS5maW5hbEJnQ29sb3JcbiAgfSwgW19jKCdzdmcnLCB7XG4gICAgc3RhdGljU3R5bGU6IHtcbiAgICAgIFwiZW5hYmxlLWJhY2tncm91bmRcIjogXCJuZXcgMCAwIDQ2MCA0NjBcIlxuICAgIH0sXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWRcIjogXCJsb2dvXCIsXG4gICAgICBcInZpZXdCb3hcIjogXCIwIDAgNDgzIDQ4M1wiLFxuICAgICAgXCJ4bWw6c3BhY2VcIjogXCJwcmVzZXJ2ZVwiLFxuICAgICAgXCJ3aWR0aFwiOiBcIjEyOHB4XCIsXG4gICAgICBcImhlaWdodFwiOiBcIjEyOHB4XCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcImlubmVySFRNTFwiOiBfdm0uX3MoX3ZtLmxvZ29NZXRob2QpXG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2g0JywgW192bS5fdihfdm0uX3MoX3ZtLmxvZ28pKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1jb250ZW50IGJnLXdoaXRlIFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMuZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJ0eXBlXCI6IFwiZW1haWxcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX3ZtLl92KFwiRW1haWxcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5wYXNzd29yZClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5wYXNzd29yZCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX3ZtLl92KFwiUGFzc3dvcmRcIildKV0pXSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC1hY3Rpb25zIGlubGluZS1ibG9jayB2ZXJ0aWNhbC1taWRkbGVcIlxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsIGZpdCBcIixcbiAgICBjbGFzczogX3ZtLmJ1dHRvbkNsYXNzLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXNlckxvZ2luKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2dpblwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInJlZCBmaXRcIixcbiAgICBjbGFzczogX3ZtLmJ1dHRvbkNsYXNzLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udXNlckxvZ2luKClcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfdm0uX3YoXCJMb2dpbiBHb29nbGVcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJibHVlIGZpdCBcIixcbiAgICBjbGFzczogX3ZtLmJ1dHRvbkNsYXNzLFxuICAgIG9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uc2VuZFNvY2soKVxuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIlNlbmRcIildKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi02YjIyOTA2NCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dpbi52dWVcbi8vIG1vZHVsZSBpZCA9IDU2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2xvZ291dC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2xvZ291dC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcYXV0aFxcXFxsb2dvdXQudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gbG9nb3V0LnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDY0MDg0OWYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9sb2dvdXQudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjQwMTlkMjI0XCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNDY0MDg0OWYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL2xvZ291dC52dWVcbi8vIG1vZHVsZSBpZCA9IDU4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJsb2dvdXQudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTQ2NDA4NDlmIS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA1OVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgaWQ9XCJsb2dvdXRcIj5cclxuXHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQge1xyXG4gICAgbWFwR2V0dGVycyxcclxuICAgIG1hcEFjdGlvbnNcclxufSBmcm9tICd2dWV4J1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnbG9nb3V0JyxcclxuICAgIGRhdGE6IGZ1bmN0aW9uIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICAuLi5tYXBBY3Rpb25zKFtcclxuICAgICAgICAgICAgJ2RlYXV0aGVudGljYXRlVXNlcidcclxuICAgICAgICBdKVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5kZWF1dGhlbnRpY2F0ZVVzZXIoKTtcclxuICAgICAgICB0aGlzLiRyb3V0ZXIucHVzaCh7XHJcbiAgICAgICAgICAgIG5hbWU6ICdsb2dpbidcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGxvZ291dC52dWU/YzYxNGM4YTQiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImxvZ291dFwiXG4gICAgfVxuICB9KVxufSxzdGF0aWNSZW5kZXJGbnM6IFtdfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi00NjQwODQ5ZiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvYXV0aC9sb2dvdXQudnVlXG4vLyBtb2R1bGUgaWQgPSA2MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTI5OTFmZGY4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3JlZ2lzdGVyLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0yOTkxZmRmOCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGF1dGhcXFxccmVnaXN0ZXIudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gcmVnaXN0ZXIudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjJcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTI5OTFmZGY4IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcmVnaXN0ZXIudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjAyYjQyNjVhXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMjk5MWZkZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9hdXRoL3JlZ2lzdGVyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcInJlZ2lzdGVyLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0yOTkxZmRmOCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2NFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBSZWdpc3RlclxyXG4gICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGlzdFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj5mYWNlPC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMubmFtZVwiIHJlcXVpcmVkIHBsYWNlaG9sZGVyPVwiWW91ciBuYW1lXCIgY2xhc3M9XCJmdWxsLXdpZHRoXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsYWJlbD5OYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj5tYWlsPC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMuZW1haWxcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgZW1haWxcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPkVtYWlsPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhyPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbSB0aHJlZS1saW5lc1wiPlxyXG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpdGVtLXByaW1hcnlcIj52cG5fa2V5PC9pPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdGFja2VkLWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB2LW1vZGVsPVwiY3JlZGVudGlhbHMucGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiByZXF1aXJlZCBwbGFjZWhvbGRlcj1cIllvdXIgcGFzc3dvcmRcIiBjbGFzcz1cImZ1bGwtd2lkdGhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsPlBhc3N3b3JkPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBmdWxsLXdpZHRoXCIgQGNsaWNrPVwic3VibWl0KClcIj5SZWdpc3RlcjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbjwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcInJlZ2lzdGVyXCIsXHJcbiAgICBkYXRhOiBmdW5jdGlvbiBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnJyxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiAnJyxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiAnJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBzdWJtaXQoKSB7XHJcbiAgICAgICAgICAgIHZhciBjcmVkZW50aWFscyA9IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IHRoaXMuY3JlZGVudGlhbHMubmFtZSxcclxuICAgICAgICAgICAgICAgIGVtYWlsOiB0aGlzLmNyZWRlbnRpYWxzLmVtYWlsLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMuY3JlZGVudGlhbHMucGFzc3dvcmRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhdXRoLnNpZ251cCh0aGlzLCBjcmVkZW50aWFscywgJ2pva2VzJylcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZWdpc3Rlci52dWU/MjA5MDU1YTEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgUmVnaXN0ZXJcXHJcXG4gICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXZpZXcgbGF5b3V0LXBhZGRpbmdcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsaXN0XCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwiZmFjZVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLm5hbWUpLFxuICAgICAgZXhwcmVzc2lvbjogXCJjcmVkZW50aWFscy5uYW1lXCJcbiAgICB9XSxcbiAgICBzdGF0aWNDbGFzczogXCJmdWxsLXdpZHRoXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIG5hbWVcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5uYW1lKVxuICAgIH0sXG4gICAgb246IHtcbiAgICAgIFwiaW5wdXRcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgIGlmICgkZXZlbnQudGFyZ2V0LmNvbXBvc2luZykgeyByZXR1cm47IH1cbiAgICAgICAgX3ZtLmNyZWRlbnRpYWxzLm5hbWUgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIk5hbWVcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwibWFpbFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLmVtYWlsKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMuZW1haWxcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJyZXF1aXJlZFwiOiBcIlwiLFxuICAgICAgXCJwbGFjZWhvbGRlclwiOiBcIllvdXIgZW1haWxcIlxuICAgIH0sXG4gICAgZG9tUHJvcHM6IHtcbiAgICAgIFwidmFsdWVcIjogKF92bS5jcmVkZW50aWFscy5lbWFpbClcbiAgICB9LFxuICAgIG9uOiB7XG4gICAgICBcImlucHV0XCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBpZiAoJGV2ZW50LnRhcmdldC5jb21wb3NpbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgIF92bS5jcmVkZW50aWFscy5lbWFpbCA9ICRldmVudC50YXJnZXQudmFsdWVcbiAgICAgIH1cbiAgICB9XG4gIH0pLCBfdm0uX3YoXCIgXCIpLCBfYygnbGFiZWwnLCBbX3ZtLl92KFwiRW1haWxcIildKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2hyJyksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiaXRlbSB0aHJlZS1saW5lc1wiXG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJpdGVtLXByaW1hcnlcIlxuICB9LCBbX3ZtLl92KFwidnBuX2tleVwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcIml0ZW0tY29udGVudFwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInN0YWNrZWQtbGFiZWxcIlxuICB9LCBbX2MoJ2lucHV0Jywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcIm1vZGVsXCIsXG4gICAgICByYXdOYW1lOiBcInYtbW9kZWxcIixcbiAgICAgIHZhbHVlOiAoX3ZtLmNyZWRlbnRpYWxzLnBhc3N3b3JkKSxcbiAgICAgIGV4cHJlc3Npb246IFwiY3JlZGVudGlhbHMucGFzc3dvcmRcIlxuICAgIH1dLFxuICAgIHN0YXRpY0NsYXNzOiBcImZ1bGwtd2lkdGhcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJ0eXBlXCI6IFwicGFzc3dvcmRcIixcbiAgICAgIFwicmVxdWlyZWRcIjogXCJcIixcbiAgICAgIFwicGxhY2Vob2xkZXJcIjogXCJZb3VyIHBhc3N3b3JkXCJcbiAgICB9LFxuICAgIGRvbVByb3BzOiB7XG4gICAgICBcInZhbHVlXCI6IChfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQpXG4gICAgfSxcbiAgICBvbjoge1xuICAgICAgXCJpbnB1dFwiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgaWYgKCRldmVudC50YXJnZXQuY29tcG9zaW5nKSB7IHJldHVybjsgfVxuICAgICAgICBfdm0uY3JlZGVudGlhbHMucGFzc3dvcmQgPSAkZXZlbnQudGFyZ2V0LnZhbHVlXG4gICAgICB9XG4gICAgfVxuICB9KSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2xhYmVsJywgW192bS5fdihcIlBhc3N3b3JkXCIpXSldKV0pXSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2J1dHRvbicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGZ1bGwtd2lkdGhcIixcbiAgICBvbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLnN1Ym1pdCgpXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiUmVnaXN0ZXJcIildKV0pXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtMjk5MWZkZjghLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2F1dGgvcmVnaXN0ZXIudnVlXG4vLyBtb2R1bGUgaWQgPSA2NlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdkNzczNzA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2Q3NzM3MDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNjdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdkNzczNzA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiMWVkNjFlYjZcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY4XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkQW5pdmVyc2FyaW9zUG9yTWVzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03ZDc3MzcwNiEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZEFuaXZlcnNhcmlvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDY5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIFF1YW50aWRhZGUgZGUgQW5pdmVyc2FyaWFudGVzIHBvciBtw6pzXHJcbiAgICAgIDxxLWZhYiBpY29uPVwia2V5Ym9hcmRfYXJyb3dfbGVmdFwiIGRpcmVjdGlvbj1cImxlZnRcIiBjbGFzcz1cImZsb2F0LXJpZ2h0XCIgY2xhc3NOYW1lcz1cInRlYWxcIj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cInRpcG9HcmFmaWNvID0gJ2JhcidcIiBpY29uPVwiXCI+PGkgY2xhc3M9XCJtZGkgbWRpLWNoYXJ0LWJhclwiPjwvaT48L3Etc21hbGwtZmFiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwidGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcIiBpY29uPVwiXCI+PGkgY2xhc3M9XCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCI+PC9pPjwvcS1zbWFsbC1mYWI+XHJcbiAgICAgIDwvcS1mYWI+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cclxuICAgICAgPGNhbnZhcyBpZD1cImFuaXZlcnNhcmlvcy1tZXNcIj48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldEJhaXJyb3NBZ3J1cGFkb3MoKVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgIG5vbWVCYWlycm9zICgpe1xyXG4gICAgICAgIGxldCBiYWlycm9zID0gW11cclxuICAgICAgICBmb3IgKGxldCBpdGVtIG9mIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcykpIHtcclxuICAgICAgICAgIGJhaXJyb3MucHVzaChmb3JtYXQobmV3IERhdGUoaXRlbSksICdNTU0nLCB7bG9jYWxlOiBwdExvY2FsZX0pKVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYmFpcnJvc1xyXG4gICAgICB9LFxyXG4gICAgICB2YWxvcmVzUG9yQmFpcnJvICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmJhaXJyb3NBZ3J1cGFkb3MpLm1hcChrZXkgPT4gdGhpcy5iYWlycm9zQWdydXBhZG9zW2tleV0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGRhZG9zICgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgbGFiZWxzOiB0aGlzLm5vbWVCYWlycm9zLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsb3Jlc1BvckJhaXJybyxcclxuICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBbXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCA5OSwgMTMyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNTQsIDE2MiwgMjM1LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMjU1LCAyMDYsIDg2LCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoNzUsIDE5MiwgMTkyLCAxKScsXHJcbiAgICAgICAgICAgICAgJ3JnYmEoMTUzLCAxMDIsIDI1NSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMTU5LCA2NCwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH0sXHJcbiAgICAgIHRpcG9HcmFmaWNvICgpIHtcclxuICAgICAgICB0aGlzLmNoYXJ0LmRlc3Ryb3koKVxyXG4gICAgICAgIHRoaXMuY3JpYXJDaGFydCgpXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhICgpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBiYWlycm9zQWdydXBhZG9zOiB7fSxcclxuICAgICAgICB0aXBvR3JhZmljbzogJ2JhcicsXHJcbiAgICAgICAgY2hhcnQ6ICcnXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldEJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCB2bSA9IHRoaXNcclxuICAgICAgICB2bS4kaHR0cC5nZXQoJy9yZWxhdG9yaW8vYW5pdmVyc2FyaWFudGVzLW1lcycpXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0uYmFpcnJvc0FncnVwYWRvcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyaWFyQ2hhcnQgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFuaXZlcnNhcmlvcy1tZXNcIilcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy50aXBvR3JhZmljbyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuZGFkb3NcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZT5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGNhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlPzAxNTYyYzlhIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hhcnQuanNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjaGFydC5qc1wiXG4vLyBtb2R1bGUgaWQgPSA3MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIFF1YW50aWRhZGUgZGUgQW5pdmVyc2FyaWFudGVzIHBvciBtw6pzXFxuICAgIFwiKSwgX2MoJ3EtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImtleWJvYXJkX2Fycm93X2xlZnRcIixcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJjbGFzc05hbWVzXCI6IFwidGVhbFwiXG4gICAgfVxuICB9LCBbX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnYmFyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktY2hhcnQtYmFyXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCJcbiAgfSldKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImFuaXZlcnNhcmlvcy1tZXNcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTdkNzczNzA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRBbml2ZXJzYXJpb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3MlxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTAxNjUzYWM0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtMDE2NTNhYzQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTAxNjUzYWM0IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiNGI0NTYyMWNcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDc0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJjYXJkQ2FkYXN0cm9zUG9yTWVzLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0wMTY1M2FjNCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZENhZGFzdHJvc1Bvck1lcy52dWVcbi8vIG1vZHVsZSBpZCA9IDc1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCBiZy13aGl0ZSBhbmltYXRlLXNjYWxlIFwiPlxyXG4gICAgPGRpdiBjbGFzcz1cImNhcmQtdGl0bGUgYmctYmx1ZSB0ZXh0LXdoaXRlXCI+XHJcbiAgICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0ge3thbm99fVxyXG5cclxuICAgICAgPHEtZmFiIGljb249XCJrZXlib2FyZF9hcnJvd19sZWZ0XCIgZGlyZWN0aW9uPVwibGVmdFwiIGNsYXNzPVwiZmxvYXQtcmlnaHRcIiBjbGFzc05hbWVzPVwidGVhbFwiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTYnXCIgaWNvbj1cIlwiPjIwMTY8L3Etc21hbGwtZmFiPlxyXG4gICAgICAgIDxxLXNtYWxsLWZhYiBjbGFzcz1cInRlYWxcIiBAY2xpY2submF0aXZlPVwiYW5vID0gJzIwMTcnXCIgaWNvbj1cIlwiPjIwMTc8L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50IFwiPlxyXG4gICAgICA8Y2FudmFzIGlkPVwiY2FkYXN0cm9zLW1lc1wiID48L2NhbnZhcz5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuICAvL1xyXG4gIC8qIGVzbGludC1kaXNhYmxlICovXHJcbiAgaW1wb3J0IENoYXJ0IGZyb20gJ2NoYXJ0LmpzJ1xyXG4gIGV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1vdW50ZWQgKCkge1xyXG4gICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZU1lc2VzICgpe1xyXG4gICAgICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXMpXHJcbiAgICAgIH0sXHJcbiAgICAgIHZhbG9yZXNBZ3J1cGFkb3MgKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMudG90YWxBZ3J1cGFkb1Bvck1lcykubWFwKGtleSA9PiB0aGlzLnRvdGFsQWdydXBhZG9Qb3JNZXNba2V5XSlcclxuICAgICAgfSxcclxuICAgICAgZGFkb3MgKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBjaGFydDogJycsXHJcbiAgICAgICAgICBsYWJlbHM6IHRoaXMubm9tZU1lc2VzLFxyXG4gICAgICAgICAgZGF0YXNldHM6IFt7XHJcbiAgICAgICAgICAgIGRhdGE6IHRoaXMudmFsb3Jlc0FncnVwYWRvcyxcclxuICAgICAgICAgICAgZmlsbDogZmFsc2UsXHJcbiAgICAgICAgICAgIGxpbmVUZW5zaW9uOiAwLjEsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDc1LDE5MiwxOTIsIDEpXCIsXHJcbiAgICAgICAgICAgIGJvcmRlckNvbG9yOiBcInJnYmEoNzUsMTkyLDE5MiwxKVwiLFxyXG4gICAgICAgICAgICBwb2ludEhpdFJhZGl1czogMTBcclxuICAgICAgICAgIH1dXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgdG90YWxBZ3J1cGFkb1Bvck1lcyAoKSB7XHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfSxcclxuICAgICAgYW5vICgpIHtcclxuICAgICAgICB0aGlzLmdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbygpXHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuXHJcbiAgICAgICAgdGhpcy5jcmlhckNoYXJ0KClcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGFubzogJzIwMTYnLFxyXG4gICAgICAgIHRvdGFsQWdydXBhZG9Qb3JNZXM6IHt9XHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgIGdldFRvdGFsQWdydXBhZG9Qb3JNZXNOb0Fub0VzY29saGlkbyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldChgcGVzc29hcy90b3RhbC1jYWRhc3Ryby1hZ3J1cGFkby1tZXMtcG9yLWFuby8ke3RoaXMuYW5vfWApXHJcbiAgICAgICAgICAudGhlbihmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdm0udG90YWxBZ3J1cGFkb1Bvck1lcyA9IHJlc3BvbnNlLmRhdGFcclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0sXHJcbiAgICAgIGNyaWFyQ2hhcnQgKCkge1xyXG4gICAgICAgIHZhciBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhZGFzdHJvcy1tZXNcIilcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogJ2xpbmUnLFxyXG4gICAgICAgICAgZGF0YTogdGhpcy5kYWRvc1xyXG4gICAgICAgIH0pXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlPlxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZENhZGFzdHJvc1Bvck1lcy52dWU/NDAwMWZlNTMiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIENhZGFzdHJvcyBwb3IgbcOqcyBubyBhbm8gZXNjb2xoaWRvIC0gXCIgKyBfdm0uX3MoX3ZtLmFubykgKyBcIlxcblxcbiAgICBcIiksIF9jKCdxLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbG9hdC1yaWdodFwiLFxuICAgIGF0dHJzOiB7XG4gICAgICBcImljb25cIjogXCJrZXlib2FyZF9hcnJvd19sZWZ0XCIsXG4gICAgICBcImRpcmVjdGlvblwiOiBcImxlZnRcIixcbiAgICAgIFwiY2xhc3NOYW1lc1wiOiBcInRlYWxcIlxuICAgIH1cbiAgfSwgW19jKCdxLXNtYWxsLWZhYicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0ZWFsXCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcIlwiXG4gICAgfSxcbiAgICBuYXRpdmVPbjoge1xuICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgX3ZtLmFubyA9ICcyMDE2J1xuICAgICAgfVxuICAgIH1cbiAgfSwgW192bS5fdihcIjIwMTZcIildKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0uYW5vID0gJzIwMTcnXG4gICAgICB9XG4gICAgfVxuICB9LCBbX3ZtLl92KFwiMjAxN1wiKV0pXSwgMSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNhcmQtY29udGVudCBcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcImNhZGFzdHJvcy1tZXNcIlxuICAgIH1cbiAgfSldKVxufV19XG5tb2R1bGUuZXhwb3J0cy5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXIuanM/aWQ9ZGF0YS12LTAxNjUzYWM0IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRDYWRhc3Ryb3NQb3JNZXMudnVlXG4vLyBtb2R1bGUgaWQgPSA3N1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTEwNDY0NGZhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiKSxcbiAgLyogdGVtcGxhdGUgKi9cbiAgcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyP2lkPWRhdGEtdi0xMDQ2NDRmYSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXGhvbWVcXFxcY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTEwNDY0NGZhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjUxY2QyMTcyXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtMTA0NjQ0ZmEhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVxuLy8gbW9kdWxlIGlkID0gNzlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSgpO1xuLy8gaW1wb3J0c1xuXG5cbi8vIG1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXFxuXCIsIFwiXCIsIHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJcIixcImZpbGVcIjpcImNhcmRQZXNzb2FzUG9yQmFpcnJvLnZ1ZVwiLFwic291cmNlUm9vdFwiOlwid2VicGFjazovL1wifV0pO1xuXG4vLyBleHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi0xMDQ2NDRmYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFBlc3NvYXNQb3JCYWlycm8udnVlXG4vLyBtb2R1bGUgaWQgPSA4MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImNhcmQgYmctd2hpdGUgYW5pbWF0ZS1zY2FsZSBcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRpdGxlIGJnLWJsdWUgdGV4dC13aGl0ZVwiPlxyXG4gICAgICBRdWFudGlkYWRlIGRlIHBlc3NvYXMgcG9yIGJhaXJyb1xyXG4gICAgICA8cS1mYWIgaWNvbj1cImtleWJvYXJkX2Fycm93X2xlZnRcIiBkaXJlY3Rpb249XCJsZWZ0XCIgY2xhc3M9XCJmbG9hdC1yaWdodFwiIGNsYXNzTmFtZXM9XCJ0ZWFsXCI+XHJcbiAgICAgICAgPHEtc21hbGwtZmFiIGNsYXNzPVwidGVhbFwiIEBjbGljay5uYXRpdmU9XCJ0aXBvR3JhZmljbyA9ICdiYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC1iYXJcIj48L2k+PC9xLXNtYWxsLWZhYj5cclxuICAgICAgICA8cS1zbWFsbC1mYWIgY2xhc3M9XCJ0ZWFsXCIgQGNsaWNrLm5hdGl2ZT1cInRpcG9HcmFmaWNvID0gJ2hvcml6b250YWxCYXInXCIgaWNvbj1cIlwiPjxpIGNsYXNzPVwibWRpIG1kaS1jaGFydC10aW1lbGluZVwiPjwvaT48L3Etc21hbGwtZmFiPlxyXG4gICAgICA8L3EtZmFiPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+XHJcbiAgICAgIDxjYW52YXMgaWQ9XCJwZXNzb2FzLWJhaXJyb1wiPjwvY2FudmFzPlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbiAgLyogZXNsaW50LWRpc2FibGUgKi9cclxuICBpbXBvcnQgQ2hhcnQgZnJvbSAnY2hhcnQuanMnXHJcbiAgZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbW91bnRlZCAoKSB7XHJcbiAgICAgIHRoaXMuZ2V0QmFpcnJvc0FncnVwYWRvcygpXHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgbm9tZUJhaXJyb3MgKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuYmFpcnJvc0FncnVwYWRvcylcclxuICAgICAgfSxcclxuICAgICAgdmFsb3Jlc1BvckJhaXJybyAoKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5iYWlycm9zQWdydXBhZG9zKS5tYXAoa2V5ID0+IHRoaXMuYmFpcnJvc0FncnVwYWRvc1trZXldKVxyXG4gICAgICB9LFxyXG4gICAgICBkYWRvcyAoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGxhYmVsczogdGhpcy5ub21lQmFpcnJvcyxcclxuICAgICAgICAgIGRhdGFzZXRzOiBbe1xyXG4gICAgICAgICAgICBkYXRhOiB0aGlzLnZhbG9yZXNQb3JCYWlycm8sXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgOTksIDEzMiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICBib3JkZXJDb2xvcjogW1xyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSw5OSwxMzIsMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDU0LCAxNjIsIDIzNSwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDI1NSwgMjA2LCA4NiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDc1LCAxOTIsIDE5MiwgMSknLFxyXG4gICAgICAgICAgICAgICdyZ2JhKDE1MywgMTAyLCAyNTUsIDEpJyxcclxuICAgICAgICAgICAgICAncmdiYSgyNTUsIDE1OSwgNjQsIDEpJ1xyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgICB9XVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgIGJhaXJyb3NBZ3J1cGFkb3MgKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc3NvYXMtYmFpcnJvXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydCA9IG5ldyBDaGFydChjdHgsIHtcclxuICAgICAgICAgIHR5cGU6IHRoaXMudGlwb0dyYWZpY28sXHJcbiAgICAgICAgICBkYXRhOiB0aGlzLmRhZG9zXHJcbiAgICAgICAgfSlcclxuICAgICAgfSxcclxuICAgICAgdGlwb0dyYWZpY28gKCkge1xyXG4gICAgICAgIGxldCBjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBlc3NvYXMtYmFpcnJvXCIpXHJcbiAgICAgICAgdGhpcy5jaGFydC5kZXN0cm95KClcclxuICAgICAgICB0aGlzLmNoYXJ0ID0gbmV3IENoYXJ0KGN0eCwge1xyXG4gICAgICAgICAgdHlwZTogdGhpcy50aXBvR3JhZmljbyxcclxuICAgICAgICAgIGRhdGE6IHRoaXMuZGFkb3NcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgZGF0YSAoKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgYmFpcnJvc0FncnVwYWRvczoge30sXHJcbiAgICAgICAgdGlwb0dyYWZpY286ICdob3Jpem9udGFsQmFyJyxcclxuICAgICAgICBjaGFydDogJydcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgZ2V0QmFpcnJvc0FncnVwYWRvcyAoKSB7XHJcbiAgICAgICAgbGV0IHZtID0gdGhpc1xyXG4gICAgICAgIHZtLiRodHRwLmdldCgnL2VuZGVyZWNvL2JhaXJyb3MtYWdydXBhZG9zJylcclxuICAgICAgICAgIC50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICB2bS5iYWlycm9zQWdydXBhZG9zID0gcmVzcG9uc2UuZGF0YVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGU+XHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBjYXJkUGVzc29hc1BvckJhaXJyby52dWU/MWQ2NGQzOGEiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkIGJnLXdoaXRlIGFuaW1hdGUtc2NhbGUgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZC10aXRsZSBiZy1ibHVlIHRleHQtd2hpdGVcIlxuICB9LCBbX3ZtLl92KFwiXFxuICAgIFF1YW50aWRhZGUgZGUgcGVzc29hcyBwb3IgYmFpcnJvXFxuICAgIFwiKSwgX2MoJ3EtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsb2F0LXJpZ2h0XCIsXG4gICAgYXR0cnM6IHtcbiAgICAgIFwiaWNvblwiOiBcImtleWJvYXJkX2Fycm93X2xlZnRcIixcbiAgICAgIFwiZGlyZWN0aW9uXCI6IFwibGVmdFwiLFxuICAgICAgXCJjbGFzc05hbWVzXCI6IFwidGVhbFwiXG4gICAgfVxuICB9LCBbX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnYmFyJ1xuICAgICAgfVxuICAgIH1cbiAgfSwgW19jKCdpJywge1xuICAgIHN0YXRpY0NsYXNzOiBcIm1kaSBtZGktY2hhcnQtYmFyXCJcbiAgfSldKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ3Etc21hbGwtZmFiJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRlYWxcIixcbiAgICBhdHRyczoge1xuICAgICAgXCJpY29uXCI6IFwiXCJcbiAgICB9LFxuICAgIG5hdGl2ZU9uOiB7XG4gICAgICBcImNsaWNrXCI6IGZ1bmN0aW9uKCRldmVudCkge1xuICAgICAgICBfdm0udGlwb0dyYWZpY28gPSAnaG9yaXpvbnRhbEJhcidcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtfYygnaScsIHtcbiAgICBzdGF0aWNDbGFzczogXCJtZGkgbWRpLWNoYXJ0LXRpbWVsaW5lXCJcbiAgfSldKV0sIDEpXSwgMSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0pXG59LHN0YXRpY1JlbmRlckZuczogW2Z1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnRcIlxuICB9LCBbX2MoJ2NhbnZhcycsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJpZFwiOiBcInBlc3NvYXMtYmFpcnJvXCJcbiAgICB9XG4gIH0pXSlcbn1dfVxubW9kdWxlLmV4cG9ydHMucmVuZGVyLl93aXRoU3RyaXBwZWQgPSB0cnVlXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvbGliL3RlbXBsYXRlLWNvbXBpbGVyLmpzP2lkPWRhdGEtdi0xMDQ2NDRmYSEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT10ZW1wbGF0ZSZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkUGVzc29hc1BvckJhaXJyby52dWVcbi8vIG1vZHVsZSBpZCA9IDgyXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2NhcmRUb3RhbC52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNGZiNGExZjQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL2NhcmRUb3RhbC52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgXCJkYXRhLXYtNGZiNGExZjRcIixcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxcaG9tZVxcXFxjYXJkVG90YWwudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gY2FyZFRvdGFsLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvaG9tZS9jYXJkVG90YWwudnVlXG4vLyBtb2R1bGUgaWQgPSA4M1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCIvLyBzdHlsZS1sb2FkZXI6IEFkZHMgc29tZSBjc3MgdG8gdGhlIERPTSBieSBhZGRpbmcgYSA8c3R5bGU+IHRhZ1xuXG4vLyBsb2FkIHRoZSBzdHlsZXNcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9jYXJkVG90YWwudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjczZjdlYjQyXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDg0XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcbmlbZGF0YS12LTRmYjRhMWY0XSB7XFxuICBmb250LXNpemU6IDU0cHg7XFxufVxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWU/NjNiMGU0NjBcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIjtBQXlDQTtFQUNBLGdCQUFBO0NBQ0FcIixcImZpbGVcIjpcImNhcmRUb3RhbC52dWVcIixcInNvdXJjZXNDb250ZW50XCI6W1wiPHRlbXBsYXRlPlxcclxcbiAgPGRpdiBjbGFzcz1cXFwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcXFwiIDpjbGFzcz1cXFwiYmFja2dyb3VuZENvbG9yXFxcIj5cXHJcXG4gICAgPGRpdiBjbGFzcz1cXFwiY2FyZC1jb250ZW50IFxcXCI+XFxyXFxuICAgICAgPGRpdiBjbGFzcz1cXFwicm93XFxcIj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoLTFvZjNcXFwiPlxcclxcbiAgICAgICAgICA8aT5wZW9wbGU8L2k+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXYgY2xhc3M9XFxcIndpZHRoLTJvZjNcXFwiPlxcclxcbiAgICAgICAgICA8cCBjbGFzcz1cXFwidGV4dC1pdGFsaWMgXFxcIj57e3RpdGxlfX08L3A+XFxyXFxuICAgICAgICAgIDxoNT5cXHJcXG4gICAgICAgICAgICA8aS1jb3VudC11cFxcclxcbiAgICAgICAgICAgICAgOnN0YXJ0PVxcXCIwXFxcIlxcclxcbiAgICAgICAgICAgICAgOmVuZD1cXFwidG90YWxcXFwiXFxyXFxuICAgICAgICAgICAgICA6ZGVjaW1hbHM9XFxcIjBcXFwiXFxyXFxuICAgICAgICAgICAgICA6ZHVyYXRpb249XFxcIjIuNVxcXCJcXHJcXG4gICAgICAgICAgICAgIDpvcHRpb25zPVxcXCJvcHRpb25zXFxcIlxcclxcbiAgICAgICAgICAgID48L2ktY291bnQtdXA+XFxyXFxuICAgICAgICAgIDwvaDU+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L2Rpdj5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICA8L2Rpdj5cXHJcXG48L3RlbXBsYXRlPlxcclxcblxcclxcbjxzY3JpcHQ+XFxyXFxuICBpbXBvcnQgSUNvdW50VXAgZnJvbSAndnVlLWNvdW50dXAtdjInXFxyXFxuICBleHBvcnQgZGVmYXVsdCB7XFxyXFxuICAgIHByb3BzOiBbJ3RpdGxlJywgJ3RvdGFsJywgJ2JhY2tncm91bmRDb2xvciddLFxcclxcbiAgICBkYXRhICgpIHtcXHJcXG4gICAgICByZXR1cm4ge1xcclxcbiAgICAgICAgb3B0aW9uczoge1xcclxcbiAgICAgICAgICBzZXBhcmF0b3I6ICcuJ1xcclxcbiAgICAgICAgfVxcclxcbiAgICAgIH1cXHJcXG4gICAgfSxcXHJcXG4gICAgY29tcG9uZW50czoge1xcclxcbiAgICAgIElDb3VudFVwXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG48L3NjcmlwdD5cXHJcXG48c3R5bGUgc2NvcGVkPlxcclxcbiAgaSB7XFxyXFxuICAgIGZvbnQtc2l6ZTogNTRweDtcXHJcXG4gIH1cXHJcXG48L3N0eWxlPlxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQmc2NvcGVkPXRydWUhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2NhcmRUb3RhbC52dWVcbi8vIG1vZHVsZSBpZCA9IDg1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcIiA6Y2xhc3M9XCJiYWNrZ3JvdW5kQ29sb3JcIj5cclxuICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnQgXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwid2lkdGgtMW9mM1wiPlxyXG4gICAgICAgICAgPGk+cGVvcGxlPC9pPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0yb2YzXCI+XHJcbiAgICAgICAgICA8cCBjbGFzcz1cInRleHQtaXRhbGljIFwiPnt7dGl0bGV9fTwvcD5cclxuICAgICAgICAgIDxoNT5cclxuICAgICAgICAgICAgPGktY291bnQtdXBcclxuICAgICAgICAgICAgICA6c3RhcnQ9XCIwXCJcclxuICAgICAgICAgICAgICA6ZW5kPVwidG90YWxcIlxyXG4gICAgICAgICAgICAgIDpkZWNpbWFscz1cIjBcIlxyXG4gICAgICAgICAgICAgIDpkdXJhdGlvbj1cIjIuNVwiXHJcbiAgICAgICAgICAgICAgOm9wdGlvbnM9XCJvcHRpb25zXCJcclxuICAgICAgICAgICAgPjwvaS1jb3VudC11cD5cclxuICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4gIGltcG9ydCBJQ291bnRVcCBmcm9tICd2dWUtY291bnR1cC12MidcclxuICBleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBwcm9wczogWyd0aXRsZScsICd0b3RhbCcsICdiYWNrZ3JvdW5kQ29sb3InXSxcclxuICAgIGRhdGEgKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIG9wdGlvbnM6IHtcclxuICAgICAgICAgIHNlcGFyYXRvcjogJy4nXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czoge1xyXG4gICAgICBJQ291bnRVcFxyXG4gICAgfVxyXG4gIH1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZSBzY29wZWQ+XHJcbiAgaSB7XHJcbiAgICBmb250LXNpemU6IDU0cHg7XHJcbiAgfVxyXG48L3N0eWxlPlxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gY2FyZFRvdGFsLnZ1ZT82M2IwZTQ2MCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInZ1ZS1jb3VudHVwLXYyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwidnVlLWNvdW50dXAtdjJcIlxuLy8gbW9kdWxlIGlkID0gODdcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY2FyZCB0ZXh0LXdoaXRlIGFuaW1hdGUtc2NhbGVcIixcbiAgICBjbGFzczogX3ZtLmJhY2tncm91bmRDb2xvclxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjYXJkLWNvbnRlbnQgXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwicm93XCJcbiAgfSwgW192bS5fbSgwKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0yb2YzXCJcbiAgfSwgW19jKCdwJywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRleHQtaXRhbGljIFwiXG4gIH0sIFtfdm0uX3YoX3ZtLl9zKF92bS50aXRsZSkpXSksIF92bS5fdihcIiBcIiksIF9jKCdoNScsIFtfYygnaS1jb3VudC11cCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJzdGFydFwiOiAwLFxuICAgICAgXCJlbmRcIjogX3ZtLnRvdGFsLFxuICAgICAgXCJkZWNpbWFsc1wiOiAwLFxuICAgICAgXCJkdXJhdGlvblwiOiAyLjUsXG4gICAgICBcIm9wdGlvbnNcIjogX3ZtLm9wdGlvbnNcbiAgICB9XG4gIH0pXSwgMSldKV0pXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwid2lkdGgtMW9mM1wiXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJwZW9wbGVcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNGZiNGExZjQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvY2FyZFRvdGFsLnZ1ZVxuLy8gbW9kdWxlIGlkID0gODhcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiXG4vKiBzdHlsZXMgKi9cbnJlcXVpcmUoXCIhIXZ1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIhY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyP2lkPWRhdGEtdi03MzBlMDM1ZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL2hvbWUudnVlXCIpLFxuICAvKiB0ZW1wbGF0ZSAqL1xuICByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvdGVtcGxhdGUtY29tcGlsZXI/aWQ9ZGF0YS12LTczMGUwMzVkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXRlbXBsYXRlJmluZGV4PTAhLi9ob21lLnZ1ZVwiKSxcbiAgLyogc2NvcGVJZCAqL1xuICBudWxsLFxuICAvKiBjc3NNb2R1bGVzICovXG4gIG51bGxcbilcbkNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwiRDpcXFxcRG90TmF0Q29yZVxcXFxEb3RWdWVDb3JlXFxcXHNyY1xcXFxEb3RWdWVDb3JlLldlYlxcXFxDbGllbnRBcHBcXFxcY29tcG9uZW50c1xcXFx2aWV3c1xcXFxob21lXFxcXGhvbWUudnVlXCJcbmlmIChDb21wb25lbnQuZXNNb2R1bGUgJiYgT2JqZWN0LmtleXMoQ29tcG9uZW50LmVzTW9kdWxlKS5zb21lKGZ1bmN0aW9uIChrZXkpIHtyZXR1cm4ga2V5ICE9PSBcImRlZmF1bHRcIiAmJiBrZXkgIT09IFwiX19lc01vZHVsZVwifSkpIHtjb25zb2xlLmVycm9yKFwibmFtZWQgZXhwb3J0cyBhcmUgbm90IHN1cHBvcnRlZCBpbiAqLnZ1ZSBmaWxlcy5cIil9XG5pZiAoQ29tcG9uZW50Lm9wdGlvbnMuZnVuY3Rpb25hbCkge2NvbnNvbGUuZXJyb3IoXCJbdnVlLWxvYWRlcl0gaG9tZS52dWU6IGZ1bmN0aW9uYWwgY29tcG9uZW50cyBhcmUgbm90IHN1cHBvcnRlZCB3aXRoIHRlbXBsYXRlcywgdGhleSBzaG91bGQgdXNlIHJlbmRlciBmdW5jdGlvbnMuXCIpfVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbXBvbmVudC5leHBvcnRzXG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDg5XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIi8vIHN0eWxlLWxvYWRlcjogQWRkcyBzb21lIGNzcyB0byB0aGUgRE9NIGJ5IGFkZGluZyBhIDxzdHlsZT4gdGFnXG5cbi8vIGxvYWQgdGhlIHN0eWxlc1xudmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcz9zb3VyY2VNYXAhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03MzBlMDM1ZCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL2hvbWUudnVlXCIpO1xuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbi8vIGFkZCBDU1MgdG8gU1NSIGNvbnRleHRcbnJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlc1NlcnZlci5qc1wiKShcIjQyZjllYmNiXCIsIGNvbnRlbnQsIGZhbHNlKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vdnVlLWxvYWRlci9+L3Z1ZS1zdHlsZS1sb2FkZXIhLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5MFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwiaG9tZS52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9ob21lL2hvbWUudnVlXG4vLyBtb2R1bGUgaWQgPSA5MVxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCI8dGVtcGxhdGU+XHJcbjxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgIDxkaXYgc2xvdD1cImhlYWRlclwiIGNsYXNzPVwidG9vbGJhclwiPlxyXG4gICAgICAgIDxxLXRvb2xiYXItdGl0bGUgOnBhZGRpbmc9XCIxXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gdi1nby1iYWNrPVwiJy8nXCI+XHJcbiAgICAgICAgICA8aT5hcnJvd19iYWNrPC9pPlxyXG4gICAgICAgIDwvYnV0dG9uPiBIb21lXHJcbiAgICAgICAgPC9xLXRvb2xiYXItdGl0bGU+XHJcbiAgICAgICAgPGJ1dHRvbj48aT5oZWxwPC9pPjwvYnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzPVwibGF5b3V0LXBhZGRpbmcgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgICAgIDxjYXJkVG90YWwgdGl0bGU9XCJUb3RhbCBQb3N0c1wiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCJ0b3RhbFBvc3RzXCI+XHJcbiAgICAgICAgICAgICAgICA8L2NhcmRUb3RhbD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRvXCI+XHJcbiAgICAgICAgICAgICAgICA8Y2FyZFRvdGFsIHRpdGxlPVwiVG90YWwgY29tbWVudHNcIiBiYWNrZ3JvdW5kLWNvbG9yPVwiYmctdGVhbC04XCIgOnRvdGFsPVwidG90YWxDb21tZW50c1wiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgPGNhcmRUb3RhbCB0aXRsZT1cIlN0YXRpYyB0b3RhbFwiIGJhY2tncm91bmQtY29sb3I9XCJiZy10ZWFsLThcIiA6dG90YWw9XCI1MDAwNFwiPlxyXG4gICAgICAgICAgICAgICAgPC9jYXJkVG90YWw+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4IHdyYXAgZ3V0dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aWR0aC0xb2YyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dG9cIj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImZsZXggd3JhcCBndXR0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpZHRoLTRvZjUgc20tYXV0b1wiPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdCB0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCI+XHJcbmltcG9ydCBjYXJkVG90YWwgZnJvbSAnLi9jYXJkVG90YWwudnVlJ1xyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiAnSG9tZScsXHJcbiAgICBtb3VudGVkKCkge1xyXG5cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHRvdGFsUG9zdHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsQ29tbWVudHM6IDAsXHJcbiAgICAgICAgICAgIHRvdGFsVG9kb3M6IDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBkYXRhRm9yR3JhcGgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3N0czogdGhpcy50b3RhbFBvc3RzLFxyXG4gICAgICAgICAgICAgICAgdG9kb3M6IHRoaXMudG90YWxUb2RvcyxcclxuICAgICAgICAgICAgICAgIGNvbW1lbnRzOiB0aGlzLnRvdGFsQ29tbWVudHNcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7XHJcbiAgICAgICAgY2FyZFRvdGFsXHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG5cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGhvbWUudnVlPzMzZmQ0NGIzIiwibW9kdWxlLmV4cG9ydHM9e3JlbmRlcjpmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiY29udGFpbmVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwidG9vbGJhclwiLFxuICAgIHNsb3Q6IFwiaGVhZGVyXCJcbiAgfSwgW19jKCdxLXRvb2xiYXItdGl0bGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwicGFkZGluZ1wiOiAxXG4gICAgfVxuICB9LCBbX2MoJ2J1dHRvbicsIHtcbiAgICBkaXJlY3RpdmVzOiBbe1xuICAgICAgbmFtZTogXCJnby1iYWNrXCIsXG4gICAgICByYXdOYW1lOiBcInYtZ28tYmFja1wiLFxuICAgICAgdmFsdWU6ICgnLycpLFxuICAgICAgZXhwcmVzc2lvbjogXCInLydcIlxuICAgIH1dXG4gIH0sIFtfYygnaScsIFtfdm0uX3YoXCJhcnJvd19iYWNrXCIpXSldKSwgX3ZtLl92KFwiIEhvbWVcXHJcXG4gICAgICAgIFwiKV0pLCBfdm0uX3YoXCIgXCIpLCBfdm0uX20oMCldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJsYXlvdXQtcGFkZGluZyBcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJmbGV4IHdyYXAgZ3V0dGVyXCJcbiAgfSwgW19jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0sIFtfYygnY2FyZFRvdGFsJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInRpdGxlXCI6IFwiVG90YWwgUG9zdHNcIixcbiAgICAgIFwiYmFja2dyb3VuZC1jb2xvclwiOiBcImJnLXRlYWwtOFwiLFxuICAgICAgXCJ0b3RhbFwiOiBfdm0udG90YWxQb3N0c1xuICAgIH1cbiAgfSldLCAxKSwgX3ZtLl92KFwiIFwiKSwgX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJhdXRvXCJcbiAgfSwgW19jKCdjYXJkVG90YWwnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwidGl0bGVcIjogXCJUb3RhbCBjb21tZW50c1wiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IF92bS50b3RhbENvbW1lbnRzXG4gICAgfVxuICB9KV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImF1dG9cIlxuICB9LCBbX2MoJ2NhcmRUb3RhbCcsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJ0aXRsZVwiOiBcIlN0YXRpYyB0b3RhbFwiLFxuICAgICAgXCJiYWNrZ3JvdW5kLWNvbG9yXCI6IFwiYmctdGVhbC04XCIsXG4gICAgICBcInRvdGFsXCI6IDUwMDA0XG4gICAgfVxuICB9KV0sIDEpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgxKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDIpXSldKVxufSxzdGF0aWNSZW5kZXJGbnM6IFtmdW5jdGlvbiAoKXt2YXIgX3ZtPXRoaXM7dmFyIF9oPV92bS4kY3JlYXRlRWxlbWVudDt2YXIgX2M9X3ZtLl9zZWxmLl9jfHxfaDtcbiAgcmV0dXJuIF9jKCdidXR0b24nLCBbX2MoJ2knLCBbX3ZtLl92KFwiaGVscFwiKV0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC0xb2YyXCJcbiAgfSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwiYXV0b1wiXG4gIH0pXSlcbn0sZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImZsZXggd3JhcCBndXR0ZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ3aWR0aC00b2Y1IHNtLWF1dG9cIlxuICB9KV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNzMwZTAzNWQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL2hvbWUvaG9tZS52dWVcbi8vIG1vZHVsZSBpZCA9IDkzXG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIlxuLyogc3R5bGVzICovXG5yZXF1aXJlKFwiISF2dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyIWNzcy1sb2FkZXI/c291cmNlTWFwIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlcj9pZD1kYXRhLXYtNThjYzJlMDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9xdWVzdGlvbnR5cGUudnVlXCIpXG5cbnZhciBDb21wb25lbnQgPSByZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9jb21wb25lbnQtbm9ybWFsaXplclwiKShcbiAgLyogc2NyaXB0ICovXG4gIHJlcXVpcmUoXCIhIWJhYmVsLWxvYWRlciEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc2VsZWN0b3I/dHlwZT1zY3JpcHQmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtNThjYzJlMDYhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3F1ZXN0aW9udHlwZS52dWVcIiksXG4gIC8qIHNjb3BlSWQgKi9cbiAgbnVsbCxcbiAgLyogY3NzTW9kdWxlcyAqL1xuICBudWxsXG4pXG5Db21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkQ6XFxcXERvdE5hdENvcmVcXFxcRG90VnVlQ29yZVxcXFxzcmNcXFxcRG90VnVlQ29yZS5XZWJcXFxcQ2xpZW50QXBwXFxcXGNvbXBvbmVudHNcXFxcdmlld3NcXFxccXVlc3Rpb250eXBlXFxcXHF1ZXN0aW9udHlwZS52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSBxdWVzdGlvbnR5cGUudnVlOiBmdW5jdGlvbmFsIGNvbXBvbmVudHMgYXJlIG5vdCBzdXBwb3J0ZWQgd2l0aCB0ZW1wbGF0ZXMsIHRoZXkgc2hvdWxkIHVzZSByZW5kZXIgZnVuY3Rpb25zLlwiKX1cblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb25lbnQuZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy9xdWVzdGlvbnR5cGUvcXVlc3Rpb250eXBlLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTRcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vcXVlc3Rpb250eXBlLnZ1ZVwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG4vLyBhZGQgQ1NTIHRvIFNTUiBjb250ZXh0XG5yZXF1aXJlKFwiIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXNTZXJ2ZXIuanNcIikoXCI2M2I4NmM4M1wiLCBjb250ZW50LCBmYWxzZSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3Z1ZS1sb2FkZXIvfi92dWUtc3R5bGUtbG9hZGVyIS4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk1XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanNcIikoKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIlxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblxcblwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiXCIsXCJmaWxlXCI6XCJxdWVzdGlvbnR5cGUudnVlXCIsXCJzb3VyY2VSb290XCI6XCJ3ZWJwYWNrOi8vXCJ9XSk7XG5cbi8vIGV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9jc3MtbG9hZGVyP3NvdXJjZU1hcCEuL34vdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTU4Y2MyZTA2IS4vfi92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvcXVlc3Rpb250eXBlL3F1ZXN0aW9udHlwZS52dWVcbi8vIG1vZHVsZSBpZCA9IDk2XG4vLyBtb2R1bGUgY2h1bmtzID0gMSIsIjx0ZW1wbGF0ZT5cclxuPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxyXG4gICAgPGRpdiBzbG90PVwiaGVhZGVyXCIgY2xhc3M9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgPHEtdG9vbGJhci10aXRsZSA6cGFkZGluZz1cIjFcIj5cclxuICAgICAgICAgICAgPGJ1dHRvbiB2LWdvLWJhY2s9XCInLydcIj5cclxuICAgICAgICAgIDxpPmFycm93X2JhY2s8L2k+XHJcbiAgICAgICAgPC9idXR0b24+IFF1ZXN0aW9uIFR5cGVcclxuICAgICAgICA8L3EtdG9vbGJhci10aXRsZT5cclxuICAgICAgICA8YnV0dG9uPjxpPmhlbHA8L2k+PC9idXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQtcGFkZGluZyBcIj5cclxuICAgICAgICA8cS1kYXRhLXRhYmxlIDpkYXRhPVwicXVlc3Rpb250eXBlc1wiIDpjb25maWc9XCJjb25maWdcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjb2wtc291cmNlXCIgc2NvcGU9XCJjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2VsbC5kYXRhID09PSAnQXVkaXQnXCIgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdG9vbHRpcD5Tb21lIHRvb2x0aXA8L3EtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cImxhYmVsIHRleHQtd2hpdGUgYmctbmVnYXRpdmVcIj57e2NlbGwuZGF0YX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInNlbGVjdGlvblwiIHNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBjbGVhclwiIEBjbGljaz1cImNoYW5nZU1lc3NhZ2UocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZWRpdDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJkZWxldGVSb3cocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZGVsZXRlPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3EtZGF0YS10YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuaW1wb3J0IHtcclxuICAgIFBsYXRmb3JtLFxyXG4gICAgVXRpbHMsXHJcbiAgICBUb2FzdFxyXG59IGZyb20gJ3F1YXNhci1mcmFtZXdvcmsnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwicXVlc3Rpb250eXBlXCIsXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNvbmZpZzoge1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6ICdRdWVzdGlvbiBUeXBlcycsXHJcbiAgICAgICAgICAgICAgICByZWZyZXNoOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgY29sdW1uUGlja2VyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGVmdFN0aWNreUNvbHVtbnM6IDEsXHJcbiAgICAgICAgICAgICAgICByaWdodFN0aWNreUNvbHVtbnM6IDIsXHJcbiAgICAgICAgICAgICAgICBib2R5U3R5bGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXhIZWlnaHQ6IFBsYXRmb3JtLmlzLm1vYmlsZSA/ICc1MHZoJyA6ICc1MDBweCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByb3dIZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBwYWdpbmF0aW9uOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcm93c1BlclBhZ2U6IDE1LFxyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IFs1LCAxMCwgMTUsIDMwLCA1MCwgNTAwXVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHNlbGVjdGlvbjogJ3NpbmdsZScsXHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlczoge1xyXG4gICAgICAgICAgICAgICAgICAgIG5vRGF0YTogJzxpPndhcm5pbmc8L2k+IE5vIGRhdGEgYXZhaWxhYmxlIHRvIHNob3cuJyxcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGFBZnRlckZpbHRlcmluZzogJzxpPndhcm5pbmc8L2k+IE5vIHJlc3VsdHMuIFBsZWFzZSByZWZpbmUgeW91ciBzZWFyY2ggdGVybXMuJ1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb2x1bW5zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUXVlc3Rpb25UeXBlSWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ05hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnUXVlc3Rpb25UeXBlTmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6ICc0MCUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnQ3JlYXRlZCBEYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0NyZWF0ZWREYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzQwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6ICdkYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtYXQodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHZhbHVlKS50b0xvY2FsZVN0cmluZygpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdLFxyXG5cclxuICAgICAgICAgICAgcGFnaW5hdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgcm93SGVpZ2h0OiA1MCxcclxuICAgICAgICAgICAgYm9keUhlaWdodFByb3A6ICdtYXhIZWlnaHQnLFxyXG4gICAgICAgICAgICBib2R5SGVpZ2h0OiA1MDBcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBwYWdpbmF0aW9uKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICghdmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub2xkUGFnaW5hdGlvbiA9IFV0aWxzLmNsb25lKHRoaXMuY29uZmlnLnBhZ2luYXRpb24pXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbmZpZy5wYWdpbmF0aW9uID0gdGhpcy5vbGRQYWdpbmF0aW9uXHJcbiAgICAgICAgfSxcclxuICAgICAgICByb3dIZWlnaHQodmFsdWUpIHtcclxuICAgICAgICAgICAgdGhpcy5jb25maWcucm93SGVpZ2h0ID0gdmFsdWUgKyAncHgnXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmJvZHlIZWlnaHRQcm9wICE9PSAnYXV0bycpIHtcclxuICAgICAgICAgICAgICAgIHN0eWxlW3RoaXMuYm9keUhlaWdodFByb3BdID0gdmFsdWUgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYm9keVN0eWxlID0gc3R5bGVcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHlIZWlnaHRQcm9wKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGxldCBzdHlsZSA9IHt9XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt2YWx1ZV0gPSB0aGlzLmJvZHlIZWlnaHQgKyAncHgnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb25maWcuYm9keVN0eWxlID0gc3R5bGVcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbW91bnRlZDogZnVuY3Rpb24gbW91bnRlZCgpIHtcclxuICAgICAgICB0aGlzLmdldEFsbFF1ZXN0aW9uVHlwZXMoKTtcclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDogbWFwR2V0dGVycyhbXHJcbiAgICAgICAgJ3F1ZXN0aW9udHlwZXMnXHJcbiAgICBdKSxcclxuICAgIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xyXG4gICAgICAgICdnZXRBbGxRdWVzdGlvblR5cGVzJ1xyXG4gICAgXSlcclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG5cclxuPC9zdHlsZT5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHF1ZXN0aW9udHlwZS52dWU/ZDQ5YTNlOTAiLCJtb2R1bGUuZXhwb3J0cz17cmVuZGVyOmZ1bmN0aW9uICgpe3ZhciBfdm09dGhpczt2YXIgX2g9X3ZtLiRjcmVhdGVFbGVtZW50O3ZhciBfYz1fdm0uX3NlbGYuX2N8fF9oO1xuICByZXR1cm4gX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJjb250YWluZXJcIlxuICB9LCBbX2MoJ2RpdicsIHtcbiAgICBzdGF0aWNDbGFzczogXCJ0b29sYmFyXCIsXG4gICAgc2xvdDogXCJoZWFkZXJcIlxuICB9LCBbX2MoJ3EtdG9vbGJhci10aXRsZScsIHtcbiAgICBhdHRyczoge1xuICAgICAgXCJwYWRkaW5nXCI6IDFcbiAgICB9XG4gIH0sIFtfYygnYnV0dG9uJywge1xuICAgIGRpcmVjdGl2ZXM6IFt7XG4gICAgICBuYW1lOiBcImdvLWJhY2tcIixcbiAgICAgIHJhd05hbWU6IFwidi1nby1iYWNrXCIsXG4gICAgICB2YWx1ZTogKCcvJyksXG4gICAgICBleHByZXNzaW9uOiBcIicvJ1wiXG4gICAgfV1cbiAgfSwgW19jKCdpJywgW192bS5fdihcImFycm93X2JhY2tcIildKV0pLCBfdm0uX3YoXCIgUXVlc3Rpb24gVHlwZVxcclxcbiAgICAgICAgXCIpXSksIF92bS5fdihcIiBcIiksIF92bS5fbSgwKV0sIDEpLCBfdm0uX3YoXCIgXCIpLCBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImxheW91dC1wYWRkaW5nIFwiXG4gIH0sIFtfYygncS1kYXRhLXRhYmxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcImRhdGFcIjogX3ZtLnF1ZXN0aW9udHlwZXMsXG4gICAgICBcImNvbmZpZ1wiOiBfdm0uY29uZmlnLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIFtcImNvbC1zb3VyY2VcIiwgZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gWyhjZWxsLmRhdGEgPT09ICdBdWRpdCcpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCJcbiAgICAgICAgfSwgW192bS5fdihcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncS10b29sdGlwJywgW192bS5fdihcIlNvbWUgdG9vbHRpcFwiKV0pXSwgMSkgOiBfYygnc3BhbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCJcbiAgICAgICAgfSwgW192bS5fdihfdm0uX3MoY2VsbC5kYXRhKSldKV1cbiAgICAgIH1dLFxuICAgICAgW1wic2VsZWN0aW9uXCIsIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBbX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5jaGFuZ2VNZXNzYWdlKHByb3BzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgW19jKCdpJywgW192bS5fdihcImVkaXRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByaW1hcnkgY2xlYXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVJvdyhwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJkZWxldGVcIildKV0pXVxuICAgICAgfV1cbiAgICBdKVxuICB9KV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtNThjYzJlMDYhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3F1ZXN0aW9udHlwZS9xdWVzdGlvbnR5cGUudnVlXG4vLyBtb2R1bGUgaWQgPSA5OFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJcbi8qIHN0eWxlcyAqL1xucmVxdWlyZShcIiEhdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlciFjc3MtbG9hZGVyP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXI/aWQ9ZGF0YS12LTdjMjliNmRkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIilcblxudmFyIENvbXBvbmVudCA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2NvbXBvbmVudC1ub3JtYWxpemVyXCIpKFxuICAvKiBzY3JpcHQgKi9cbiAgcmVxdWlyZShcIiEhYmFiZWwtbG9hZGVyIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvcj90eXBlPXNjcmlwdCZpbmRleD0wIS4vdXNlci52dWVcIiksXG4gIC8qIHRlbXBsYXRlICovXG4gIHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlcj9pZD1kYXRhLXYtN2MyOWI2ZGQhLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL3VzZXIudnVlXCIpLFxuICAvKiBzY29wZUlkICovXG4gIG51bGwsXG4gIC8qIGNzc01vZHVsZXMgKi9cbiAgbnVsbFxuKVxuQ29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJEOlxcXFxEb3ROYXRDb3JlXFxcXERvdFZ1ZUNvcmVcXFxcc3JjXFxcXERvdFZ1ZUNvcmUuV2ViXFxcXENsaWVudEFwcFxcXFxjb21wb25lbnRzXFxcXHZpZXdzXFxcXHVzZXJcXFxcdXNlci52dWVcIlxuaWYgKENvbXBvbmVudC5lc01vZHVsZSAmJiBPYmplY3Qua2V5cyhDb21wb25lbnQuZXNNb2R1bGUpLnNvbWUoZnVuY3Rpb24gKGtleSkge3JldHVybiBrZXkgIT09IFwiZGVmYXVsdFwiICYmIGtleSAhPT0gXCJfX2VzTW9kdWxlXCJ9KSkge2NvbnNvbGUuZXJyb3IoXCJuYW1lZCBleHBvcnRzIGFyZSBub3Qgc3VwcG9ydGVkIGluICoudnVlIGZpbGVzLlwiKX1cbmlmIChDb21wb25lbnQub3B0aW9ucy5mdW5jdGlvbmFsKSB7Y29uc29sZS5lcnJvcihcIlt2dWUtbG9hZGVyXSB1c2VyLnZ1ZTogZnVuY3Rpb25hbCBjb21wb25lbnRzIGFyZSBub3Qgc3VwcG9ydGVkIHdpdGggdGVtcGxhdGVzLCB0aGV5IHNob3VsZCB1c2UgcmVuZGVyIGZ1bmN0aW9ucy5cIil9XG5cbm1vZHVsZS5leHBvcnRzID0gQ29tcG9uZW50LmV4cG9ydHNcblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vQ2xpZW50QXBwL2NvbXBvbmVudHMvdmlld3MvdXNlci91c2VyLnZ1ZVxuLy8gbW9kdWxlIGlkID0gOTlcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzP3NvdXJjZU1hcCEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvc3R5bGUtcmV3cml0ZXIuanM/aWQ9ZGF0YS12LTdjMjliNmRkIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9zZWxlY3Rvci5qcz90eXBlPXN0eWxlcyZpbmRleD0wIS4vdXNlci52dWVcIik7XG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gYWRkIENTUyB0byBTU1IgY29udGV4dFxucmVxdWlyZShcIiEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9ub2RlX21vZHVsZXMvdnVlLXN0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzU2VydmVyLmpzXCIpKFwiYTUxNDY1YmFcIiwgY29udGVudCwgZmFsc2UpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL34vdnVlLXN0eWxlLWxvYWRlciEuL34vY3NzLWxvYWRlcj9zb3VyY2VNYXAhLi9+L3Z1ZS1sb2FkZXIvbGliL3N0eWxlLXJld3JpdGVyLmpzP2lkPWRhdGEtdi03YzI5YjZkZCEuL34vdnVlLWxvYWRlci9saWIvc2VsZWN0b3IuanM/dHlwZT1zdHlsZXMmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwMFxuLy8gbW9kdWxlIGNodW5rcyA9IDEiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cXG5cIiwgXCJcIiwge1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W10sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIlwiLFwiZmlsZVwiOlwidXNlci52dWVcIixcInNvdXJjZVJvb3RcIjpcIndlYnBhY2s6Ly9cIn1dKTtcblxuLy8gZXhwb3J0c1xuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2Nzcy1sb2FkZXI/c291cmNlTWFwIS4vfi92dWUtbG9hZGVyL2xpYi9zdHlsZS1yZXdyaXRlci5qcz9pZD1kYXRhLXYtN2MyOWI2ZGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9c3R5bGVzJmluZGV4PTAhLi9DbGllbnRBcHAvY29tcG9uZW50cy92aWV3cy91c2VyL3VzZXIudnVlXG4vLyBtb2R1bGUgaWQgPSAxMDFcbi8vIG1vZHVsZSBjaHVua3MgPSAxIiwiPHRlbXBsYXRlPlxyXG48ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICA8ZGl2IHNsb3Q9XCJoZWFkZXJcIiBjbGFzcz1cInRvb2xiYXJcIj5cclxuICAgICAgICA8cS10b29sYmFyLXRpdGxlIDpwYWRkaW5nPVwiMVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIHYtZ28tYmFjaz1cIicvJ1wiPlxyXG4gICAgICAgICAgPGk+YXJyb3dfYmFjazwvaT5cclxuICAgICAgICA8L2J1dHRvbj4gVXNlclxyXG4gICAgICAgIDwvcS10b29sYmFyLXRpdGxlPlxyXG4gICAgICAgIDxidXR0b24+PGk+aGVscDwvaT48L2J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzcz1cImxheW91dC1wYWRkaW5nIFwiPlxyXG4gICAgICAgIDxxLWRhdGEtdGFibGUgOmRhdGE9XCJ1c2Vyc1wiIDpjb25maWc9XCJjb25maWdcIiA6Y29sdW1ucz1cImNvbHVtbnNcIj5cclxuICAgICAgICAgICAgPHRlbXBsYXRlIHNsb3Q9XCJjb2wtc291cmNlXCIgc2NvcGU9XCJjZWxsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiY2VsbC5kYXRhID09PSAnQXVkaXQnXCIgY2xhc3M9XCJsYWJlbCB0ZXh0LXdoaXRlIGJnLXByaW1hcnlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXVkaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgPHEtdG9vbHRpcD5Tb21lIHRvb2x0aXA8L3EtdG9vbHRpcD5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtZWxzZSBjbGFzcz1cImxhYmVsIHRleHQtd2hpdGUgYmctbmVnYXRpdmVcIj57e2NlbGwuZGF0YX19PC9zcGFuPlxyXG4gICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICA8dGVtcGxhdGUgc2xvdD1cInNlbGVjdGlvblwiIHNjb3BlPVwicHJvcHNcIj5cclxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwicHJpbWFyeSBjbGVhclwiIEBjbGljaz1cImNoYW5nZU1lc3NhZ2UocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZWRpdDwvaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInByaW1hcnkgY2xlYXJcIiBAY2xpY2s9XCJkZWxldGVSb3cocHJvcHMpXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGk+ZGVsZXRlPC9pPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8L3EtZGF0YS10YWJsZT5cclxuICAgIDwvZGl2PlxyXG48L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IHtcclxuICAgIG1hcEdldHRlcnMsXHJcbiAgICBtYXBBY3Rpb25zXHJcbn0gZnJvbSAndnVleCdcclxuaW1wb3J0IHtcclxuICAgIFBsYXRmb3JtLFxyXG4gICAgVXRpbHMsXHJcbiAgICBUb2FzdFxyXG59IGZyb20gJ3F1YXNhci1mcmFtZXdvcmsnXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwidXNlclwiLFxyXG4gICAgZGF0YSgpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjb25maWc6IHtcclxuICAgICAgICAgICAgICAgIHRpdGxlOiAnVXNlcnMnLFxyXG4gICAgICAgICAgICAgICAgcmVmcmVzaDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGNvbHVtblBpY2tlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxlZnRTdGlja3lDb2x1bW5zOiAxLFxyXG4gICAgICAgICAgICAgICAgcmlnaHRTdGlja3lDb2x1bW5zOiAyLFxyXG4gICAgICAgICAgICAgICAgYm9keVN0eWxlOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiBQbGF0Zm9ybS5pcy5tb2JpbGUgPyAnNTB2aCcgOiAnNTAwcHgnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcm93SGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgcGFnaW5hdGlvbjoge1xyXG4gICAgICAgICAgICAgICAgICAgIHJvd3NQZXJQYWdlOiAxNSxcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiBbNSwgMTAsIDE1LCAzMCwgNTAsIDUwMF1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzZWxlY3Rpb246ICdzaW5nbGUnLFxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBub0RhdGE6ICc8aT53YXJuaW5nPC9pPiBObyBkYXRhIGF2YWlsYWJsZSB0byBzaG93LicsXHJcbiAgICAgICAgICAgICAgICAgICAgbm9EYXRhQWZ0ZXJGaWx0ZXJpbmc6ICc8aT53YXJuaW5nPC9pPiBObyByZXN1bHRzLiBQbGVhc2UgcmVmaW5lIHlvdXIgc2VhcmNoIHRlcm1zLidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29sdW1uczogW3tcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ0lkJyxcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzEyMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXI6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgc29ydDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogJ0ZpcnN0bmFtZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICdGaXJzdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTGFzdG5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnTGFzdE5hbWUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnRW1haWwnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnTG9naW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiAnVXNlclR5cGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnVXNlclR5cGVJZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIHNvcnQ6IHRydWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6ICdDcmVhdGVkIERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAnQ3JlYXRlZERhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBzb3J0OiAnZGF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZSkudG9Mb2NhbGVTdHJpbmcoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXSxcclxuXHJcbiAgICAgICAgICAgIHBhZ2luYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgIHJvd0hlaWdodDogNTAsXHJcbiAgICAgICAgICAgIGJvZHlIZWlnaHRQcm9wOiAnbWF4SGVpZ2h0JyxcclxuICAgICAgICAgICAgYm9keUhlaWdodDogNTAwXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgcGFnaW5hdGlvbih2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAoIXZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm9sZFBhZ2luYXRpb24gPSBVdGlscy5jbG9uZSh0aGlzLmNvbmZpZy5wYWdpbmF0aW9uKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb25maWcucGFnaW5hdGlvbiA9IHRoaXMub2xkUGFnaW5hdGlvblxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcm93SGVpZ2h0KHZhbHVlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLnJvd0hlaWdodCA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keUhlaWdodCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodGhpcy5ib2R5SGVpZ2h0UHJvcCAhPT0gJ2F1dG8nKSB7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVt0aGlzLmJvZHlIZWlnaHRQcm9wXSA9IHZhbHVlICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5SGVpZ2h0UHJvcCh2YWx1ZSkge1xyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fVxyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICdhdXRvJykge1xyXG4gICAgICAgICAgICAgICAgc3R5bGVbdmFsdWVdID0gdGhpcy5ib2R5SGVpZ2h0ICsgJ3B4J1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29uZmlnLmJvZHlTdHlsZSA9IHN0eWxlXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1vdW50ZWQ6IGZ1bmN0aW9uIG1vdW50ZWQoKSB7XHJcbiAgICAgICAgdGhpcy5nZXRBbGxVc2VycygpO1xyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiBtYXBHZXR0ZXJzKFtcclxuICAgICAgICAndXNlcnMnXHJcbiAgICBdKSxcclxuICAgIG1ldGhvZHM6IG1hcEFjdGlvbnMoW1xyXG4gICAgICAgICdnZXRBbGxVc2VycydcclxuICAgIF0pXHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuXHJcbjwvc3R5bGU+XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB1c2VyLnZ1ZT80N2ZhNjBmZCIsIm1vZHVsZS5leHBvcnRzPXtyZW5kZXI6ZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcImNvbnRhaW5lclwiXG4gIH0sIFtfYygnZGl2Jywge1xuICAgIHN0YXRpY0NsYXNzOiBcInRvb2xiYXJcIixcbiAgICBzbG90OiBcImhlYWRlclwiXG4gIH0sIFtfYygncS10b29sYmFyLXRpdGxlJywge1xuICAgIGF0dHJzOiB7XG4gICAgICBcInBhZGRpbmdcIjogMVxuICAgIH1cbiAgfSwgW19jKCdidXR0b24nLCB7XG4gICAgZGlyZWN0aXZlczogW3tcbiAgICAgIG5hbWU6IFwiZ28tYmFja1wiLFxuICAgICAgcmF3TmFtZTogXCJ2LWdvLWJhY2tcIixcbiAgICAgIHZhbHVlOiAoJy8nKSxcbiAgICAgIGV4cHJlc3Npb246IFwiJy8nXCJcbiAgICB9XVxuICB9LCBbX2MoJ2knLCBbX3ZtLl92KFwiYXJyb3dfYmFja1wiKV0pXSksIF92bS5fdihcIiBVc2VyXFxyXFxuICAgICAgICBcIildKSwgX3ZtLl92KFwiIFwiKSwgX3ZtLl9tKDApXSwgMSksIF92bS5fdihcIiBcIiksIF9jKCdkaXYnLCB7XG4gICAgc3RhdGljQ2xhc3M6IFwibGF5b3V0LXBhZGRpbmcgXCJcbiAgfSwgW19jKCdxLWRhdGEtdGFibGUnLCB7XG4gICAgYXR0cnM6IHtcbiAgICAgIFwiZGF0YVwiOiBfdm0udXNlcnMsXG4gICAgICBcImNvbmZpZ1wiOiBfdm0uY29uZmlnLFxuICAgICAgXCJjb2x1bW5zXCI6IF92bS5jb2x1bW5zXG4gICAgfSxcbiAgICBzY29wZWRTbG90czogX3ZtLl91KFtcbiAgICAgIFtcImNvbC1zb3VyY2VcIiwgZnVuY3Rpb24oY2VsbCkge1xuICAgICAgICByZXR1cm4gWyhjZWxsLmRhdGEgPT09ICdBdWRpdCcpID8gX2MoJ3NwYW4nLCB7XG4gICAgICAgICAgc3RhdGljQ2xhc3M6IFwibGFiZWwgdGV4dC13aGl0ZSBiZy1wcmltYXJ5XCJcbiAgICAgICAgfSwgW192bS5fdihcIlxcclxcbiAgICAgICAgICAgICAgICAgICAgICAgIEF1ZGl0XFxyXFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIpLCBfYygncS10b29sdGlwJywgW192bS5fdihcIlNvbWUgdG9vbHRpcFwiKV0pXSwgMSkgOiBfYygnc3BhbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJsYWJlbCB0ZXh0LXdoaXRlIGJnLW5lZ2F0aXZlXCJcbiAgICAgICAgfSwgW192bS5fdihfdm0uX3MoY2VsbC5kYXRhKSldKV1cbiAgICAgIH1dLFxuICAgICAgW1wic2VsZWN0aW9uXCIsIGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICAgIHJldHVybiBbX2MoJ2J1dHRvbicsIHtcbiAgICAgICAgICBzdGF0aWNDbGFzczogXCJwcmltYXJ5IGNsZWFyXCIsXG4gICAgICAgICAgb246IHtcbiAgICAgICAgICAgIFwiY2xpY2tcIjogZnVuY3Rpb24oJGV2ZW50KSB7XG4gICAgICAgICAgICAgIF92bS5jaGFuZ2VNZXNzYWdlKHByb3BzKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSwgW19jKCdpJywgW192bS5fdihcImVkaXRcIildKV0pLCBfdm0uX3YoXCIgXCIpLCBfYygnYnV0dG9uJywge1xuICAgICAgICAgIHN0YXRpY0NsYXNzOiBcInByaW1hcnkgY2xlYXJcIixcbiAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgXCJjbGlja1wiOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgX3ZtLmRlbGV0ZVJvdyhwcm9wcylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sIFtfYygnaScsIFtfdm0uX3YoXCJkZWxldGVcIildKV0pXVxuICAgICAgfV1cbiAgICBdKVxuICB9KV0sIDEpXSlcbn0sc3RhdGljUmVuZGVyRm5zOiBbZnVuY3Rpb24gKCl7dmFyIF92bT10aGlzO3ZhciBfaD1fdm0uJGNyZWF0ZUVsZW1lbnQ7dmFyIF9jPV92bS5fc2VsZi5fY3x8X2g7XG4gIHJldHVybiBfYygnYnV0dG9uJywgW19jKCdpJywgW192bS5fdihcImhlbHBcIildKV0pXG59XX1cbm1vZHVsZS5leHBvcnRzLnJlbmRlci5fd2l0aFN0cmlwcGVkID0gdHJ1ZVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi92dWUtbG9hZGVyL2xpYi90ZW1wbGF0ZS1jb21waWxlci5qcz9pZD1kYXRhLXYtN2MyOWI2ZGQhLi9+L3Z1ZS1sb2FkZXIvbGliL3NlbGVjdG9yLmpzP3R5cGU9dGVtcGxhdGUmaW5kZXg9MCEuL0NsaWVudEFwcC9jb21wb25lbnRzL3ZpZXdzL3VzZXIvdXNlci52dWVcbi8vIG1vZHVsZSBpZCA9IDEwM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9