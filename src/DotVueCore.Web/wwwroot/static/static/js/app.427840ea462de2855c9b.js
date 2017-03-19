webpackJsonp([3,1],{0:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=n(9),a=r(s),o=n(341),u=r(o),i=n(35),l=r(i),c=n(183),d=r(c),f=n(40),_=r(f);n(306),n(305).polyfill(),a.default.use(l.default),a.default.use(u.default),a.default.config.productionTip=!0,a.default.http.interceptors.push(function(e,t){e.headers.set("Authorization","Bearer "+_.default.getters.token),e.headers.set("Accept","application/json"),t()}),l.default.start(function(){new a.default({el:"#q-app",router:d.default,store:_.default,render:function(e){return e(n(325))}})})},22:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.API_ROOT="http://localhost:3001/api/"},23:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.RECIEVE_QUESTION_TYPES="RECIEVE_QUESTION_TYPES",t.QUESTION_TYPES_FAILURE="QUESTION_TYPES_FAILURE",t.QUESTION_TYPES_SUCCESS="QUESTION_TYPES_SUCCESS",t.AUTHENTICATE_USER="AUTHENTICATE_USER",t.DEAUTHENTICATE_USER="DEAUTHENTICATE_USER",t.RECIEVE_USERS="RECIEVE_USERS",t.USERS_FAILURE="USERS_FAILURE",t.USERS_SUCCESS="USERS_SUCCESS"},36:function(e,t,n){n(312);var r=n(2)(n(191),n(332),"data-v-392ee6be",null);e.exports=r.exports},37:function(e,t,n){n(314);var r=n(2)(n(192),n(334),"data-v-418b25f4",null);e.exports=r.exports},38:function(e,t,n){n(318);var r=n(2)(n(193),n(338),"data-v-9f5e583c",null);e.exports=r.exports},40:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(9),a=r(s),o=n(15),u=r(o),i=n(186),l=r(i),c=n(187),d=r(c),f=n(188),_=r(f),p=n(185),v=r(p),h=!1;a.default.use(u.default),a.default.config.debug=h,t.default=new u.default.Store({modules:{auth:l.default,user:_.default,questiontype:d.default},strict:h,middlewares:v.default})},41:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(9),a=r(s);t.default={get:function(e,t,n,r){return a.default.http.get(e,t).then(function(e){n(e.data)}).catch(function(e){r(e)})},post:function(e,t,n,r){return a.default.http.post(e,t).then(function(e){n(e.data)}).catch(function(e){r(e)})},patch:function(e,t,n,r){return a.default.http.patch(e,t).then(function(e){n(e.data)}).catch(function(e){r(e)})},delete:function(e,t,n,r){return a.default.http.delete(e,t).then(function(e){n(e.data)}).catch(function(e){r(e)})}}},183:function(e,t,n){(function(e){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function s(e){return function(t){return n.e(0,function(n){var r=[n(182)("./"+e)];t.apply(null,r)}.bind(this))}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(9),o=r(a),u=n(342),i=r(u),l=n(40),c=r(l);o.default.use(i.default);var d=new i.default({mode:"history",base:e,routes:[{name:"home",path:"/",component:s("views/home/home"),meta:{requiresAuth:!0}},{name:"user",path:"/user",component:s("views/user/user"),meta:{requiresAuth:!0}},{name:"login",path:"/login",component:s("views/auth/login"),meta:{requiresAuth:!1}},{name:"logout",path:"/logout",component:s("views/auth/logout"),meta:{requiresAuth:!1}},{name:"register",path:"/register",component:s("views/auth/register"),meta:{requiresAuth:!1}},{name:"questiontype",path:"/questiontype",component:s("views/questiontype/questiontype"),meta:{requiresAuth:!0}},{name:"error404",path:"*",component:s("Error404")}]});d.beforeEach(function(e,t,n){var r=e.meta.requiresAuth,s=!!c.default.getters.token;r&&!s?n({name:"login"}):n()}),t.default=d}).call(t,"/")},184:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var s=n(16),a=r(s),o={errors:{emailInvalid:"Please, provide correct email.",passwordShort:"Password should be at least 8 characters long.",passwordInvalid:"Password can contain only listed special characters: !@#$%^&*()",passwordMismatch:"Passwords do no match.",nameInvalid:"Name should not contain special characters.",captchaInvalid:"Please, verify that you are no robot."},validateUser:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:null,o={},u=this.validateEmail(e),i=this.validatePassword(t),l=this.validateComparePasswords(t,n),c=this.validateName(r),d=this.validateCaptcha(s);return u&&(o.email=u),!i&&l&&(o.password=l),i&&(o.password=i),c&&(o.name=c),d&&(o.message=d),0!==(0,a.default)(o).length&&{errors:o}},validateEmail:function(e){var t=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;return e&&!t.test(e)?this.errors.emailInvalid:null},validatePassword:function(e){var t=/([><{}":;\s,|\\\/_+])/g;return e&&e.length<8?this.errors.passwordShort:e&&t.test(e)?this.errors.passwordInvalid:null},validateComparePasswords:function(e,t){return e&&t&&e!==t?this.errors.passwordMismatch:null},validateName:function(e){var t=/^[a-zA-Z ]{2,30}$/;return e&&!t.test(e)?this.errors.nameInvalid:null},validateCaptcha:function(e){return null===e||e.length?null:this.errors.captchaInvalid}};e.exports=o},185:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(343);r(s);t.default=[]},186:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(24),u=s(o),i=n(205),l=s(i),c=n(208),d=s(c),f=n(42),_=s(f),p=n(9),v=s(p),h=n(23),j=r(h),m=n(184),E=s(m),b=n(22),g=(0,_.default)({},JSON.parse(localStorage.getItem("u"))),y=g.name,S=g.token,w=g.id,T={user:{name:y||null,id:w||null,token:S||null},message:null,error:null},U={username:function(e){return e.user.name},token:function(e){return e.user.token}},I={authenticateUser:function(e,t){var n=e.commit,r=E.default.validateUser(t.email,t.password);return new d.default(function(e,s){return r?s(r):void v.default.http.post(b.API_ROOT+"auths",t,{emulateJSON:!1}).then(function(t){if(t.body.Token){var r={token:t.body.Token,name:t.body.Name,id:t.body.Id};n(j.AUTHENTICATE_USER,r)}e({message:t.body.Message})}).catch(function(e){s({errors:{message:e.body.Message}})})})},deauthenticateUser:function(e){var t=e.commit;t(j.DEAUTHENTICATE_USER)}},k=(a={},(0,u.default)(a,j.AUTHENTICATE_USER,function(e,t){localStorage.setItem("u",(0,l.default)(t)),e.user=(0,_.default)({},t)}),(0,u.default)(a,j.DEAUTHENTICATE_USER,function(e){localStorage.removeItem("u"),e.user={}}),a);t.default={state:T,getters:U,actions:I,mutations:k}},187:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(24),u=s(o),i=n(9),l=(s(i),n(23)),c=r(l),d=n(41),f=s(d),_=n(22),p={questiontypes:[],message:null,error:null},v={questiontypes:function(e){return e.questiontypes},question_type_errors:function(e){return e.error}},h={getAllQuestionTypes:function(e){return f.default.get(_.API_ROOT+"questiontypes",{},function(t){e.commit("RECIEVE_QUESTION_TYPES",t)},function(t){e.commit("QUESTION_TYPES_FAILURE",t)})}},j=(a={},(0,u.default)(a,c.RECIEVE_QUESTION_TYPES,function(e,t){e.questiontypes=t}),(0,u.default)(a,c.QUESTION_TYPES_FAILURE,function(e,t){e.error=t}),a);t.default={state:p,getters:v,actions:h,mutations:j}},188:function(e,t,n){"use strict";function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function s(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a,o=n(24),u=s(o),i=n(9),l=(s(i),n(23)),c=r(l),d=n(41),f=s(d),_=n(22),p={users:[],message:null,error:null},v={users:function(e){return e.users},user_error:function(e){return e.error}},h={getAllUsers:function(e){return f.default.get(_.API_ROOT+"users",{},function(t){e.commit("RECIEVE_USERS",t)},function(t){e.commit("USERS_FAILURE",t)})}},j=(a={},(0,u.default)(a,c.RECIEVE_USERS,function(e,t){e.users=t}),(0,u.default)(a,c.USERS_FAILURE,function(e,t){e.error=t}),a);t.default={state:p,getters:v,actions:h,mutations:j}},189:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=n(38),a=r(s),o=n(36),u=r(o),i=n(37),l=r(i);t.default={name:"app",components:{toolbar:a.default,leftdrawer:u.default,rightdrawer:l.default}}},191:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},192:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},193:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={}},306:function(e,t){},312:function(e,t){},314:function(e,t){},318:function(e,t){},320:function(e,t){},322:function(e,t,n){function r(e){return n(s(e))}function s(e){return a[e]||function(){throw new Error("Cannot find module '"+e+"'.")}()}var a={"./af":57,"./af.js":57,"./ar":64,"./ar-dz":58,"./ar-dz.js":58,"./ar-kw":59,"./ar-kw.js":59,"./ar-ly":60,"./ar-ly.js":60,"./ar-ma":61,"./ar-ma.js":61,"./ar-sa":62,"./ar-sa.js":62,"./ar-tn":63,"./ar-tn.js":63,"./ar.js":64,"./az":65,"./az.js":65,"./be":66,"./be.js":66,"./bg":67,"./bg.js":67,"./bn":68,"./bn.js":68,"./bo":69,"./bo.js":69,"./br":70,"./br.js":70,"./bs":71,"./bs.js":71,"./ca":72,"./ca.js":72,"./cs":73,"./cs.js":73,"./cv":74,"./cv.js":74,"./cy":75,"./cy.js":75,"./da":76,"./da.js":76,"./de":79,"./de-at":77,"./de-at.js":77,"./de-ch":78,"./de-ch.js":78,"./de.js":79,"./dv":80,"./dv.js":80,"./el":81,"./el.js":81,"./en-au":82,"./en-au.js":82,"./en-ca":83,"./en-ca.js":83,"./en-gb":84,"./en-gb.js":84,"./en-ie":85,"./en-ie.js":85,"./en-nz":86,"./en-nz.js":86,"./eo":87,"./eo.js":87,"./es":89,"./es-do":88,"./es-do.js":88,"./es.js":89,"./et":90,"./et.js":90,"./eu":91,"./eu.js":91,"./fa":92,"./fa.js":92,"./fi":93,"./fi.js":93,"./fo":94,"./fo.js":94,"./fr":97,"./fr-ca":95,"./fr-ca.js":95,"./fr-ch":96,"./fr-ch.js":96,"./fr.js":97,"./fy":98,"./fy.js":98,"./gd":99,"./gd.js":99,"./gl":100,"./gl.js":100,"./gom-latn":101,"./gom-latn.js":101,"./he":102,"./he.js":102,"./hi":103,"./hi.js":103,"./hr":104,"./hr.js":104,"./hu":105,"./hu.js":105,"./hy-am":106,"./hy-am.js":106,"./id":107,"./id.js":107,"./is":108,"./is.js":108,"./it":109,"./it.js":109,"./ja":110,"./ja.js":110,"./jv":111,"./jv.js":111,"./ka":112,"./ka.js":112,"./kk":113,"./kk.js":113,"./km":114,"./km.js":114,"./kn":115,"./kn.js":115,"./ko":116,"./ko.js":116,"./ky":117,"./ky.js":117,"./lb":118,"./lb.js":118,"./lo":119,"./lo.js":119,"./lt":120,"./lt.js":120,"./lv":121,"./lv.js":121,"./me":122,"./me.js":122,"./mi":123,"./mi.js":123,"./mk":124,"./mk.js":124,"./ml":125,"./ml.js":125,"./mr":126,"./mr.js":126,"./ms":128,"./ms-my":127,"./ms-my.js":127,"./ms.js":128,"./my":129,"./my.js":129,"./nb":130,"./nb.js":130,"./ne":131,"./ne.js":131,"./nl":133,"./nl-be":132,"./nl-be.js":132,"./nl.js":133,"./nn":134,"./nn.js":134,"./pa-in":135,"./pa-in.js":135,"./pl":136,"./pl.js":136,"./pt":138,"./pt-br":137,"./pt-br.js":137,"./pt.js":138,"./ro":139,"./ro.js":139,"./ru":140,"./ru.js":140,"./sd":141,"./sd.js":141,"./se":142,"./se.js":142,"./si":143,"./si.js":143,"./sk":144,"./sk.js":144,"./sl":145,"./sl.js":145,"./sq":146,"./sq.js":146,"./sr":148,"./sr-cyrl":147,"./sr-cyrl.js":147,"./sr.js":148,"./ss":149,"./ss.js":149,"./sv":150,"./sv.js":150,"./sw":151,"./sw.js":151,"./ta":152,"./ta.js":152,"./te":153,"./te.js":153,"./tet":154,"./tet.js":154,"./th":155,"./th.js":155,"./tl-ph":156,"./tl-ph.js":156,"./tlh":157,"./tlh.js":157,"./tr":158,"./tr.js":158,"./tzl":159,"./tzl.js":159,"./tzm":161,"./tzm-latn":160,"./tzm-latn.js":160,"./tzm.js":161,"./uk":162,"./uk.js":162,"./ur":163,"./ur.js":163,"./uz":165,"./uz-latn":164,"./uz-latn.js":164,"./uz.js":165,"./vi":166,"./vi.js":166,"./x-pseudo":167,"./x-pseudo.js":167,"./yo":168,"./yo.js":168,"./zh-cn":169,"./zh-cn.js":169,"./zh-hk":170,"./zh-hk.js":170,"./zh-tw":171,"./zh-tw.js":171};r.keys=function(){return Object.keys(a)},r.resolve=s,e.exports=r,r.id=322},325:function(e,t,n){n(320);var r=n(2)(n(189),n(340),null,null);e.exports=r.exports},332:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-drawer",{ref:"leftDrawer"},[n("div",{staticClass:"list no-border platform-delimiter"},[n("div",{staticClass:"list-label"},[e._v("Dashboard")]),e._v(" "),n("q-drawer-link",{attrs:{icon:"home",to:{path:"/",exact:!0}}},[e._v("Home")]),e._v(" "),n("q-collapsible",{attrs:{icon:"inbox",label:"Master"}},[n("q-drawer-link",{attrs:{icon:"alarm",to:{path:"/questiontype",exact:!0}}},[e._v("Question Type")]),e._v(" "),n("q-drawer-link",{attrs:{icon:"question_answer",to:{path:"/user",exact:!0}}},[e._v("User")])],1),e._v(" "),n("div",{staticClass:"list-label"},[e._v("Profile")]),e._v(" "),n("q-drawer-link",{attrs:{icon:"exit_to_app",to:{path:"/logout",exact:!0}}},[e._v("Logout")])],1)])},staticRenderFns:[]}},334:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-drawer",{ref:"rightDrawer",attrs:{"right-side":"","swipe-only":""}},[n("div",{staticClass:"toolbar light"},[n("q-toolbar-title",{attrs:{padding:1}},[e._v("\n        Right-side Drawer\n    ")])],1),e._v(" "),n("p",{staticClass:"text-grey-7",staticStyle:{padding:"25px"}},[e._v("\n    This is yet another Drawer that does not gets displayed alongside content on\n    bigger screens.\n  ")])])},staticRenderFns:[]}},338:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"toolbar"},[n("q-ajax-bar",{attrs:{color:"#80cbc4"}}),e._v(" "),e.$router.currentRoute.meta.backButton?n("router-link",{attrs:{to:"/"}},[n("button",[n("i",[e._v("arrow_back")])])]):n("button",{staticClass:"hide-on-drawer-visible",on:{click:function(t){e.$parent.$children[1].$refs.leftDrawer.open()}}},[n("i",[e._v("menu")])]),e._v(" "),n("q-toolbar-title",{attrs:{padding:1}},[e._v("\r\n        DotVueApp\r\n    ")]),e._v(" "),e._m(0),e._v(" "),n("button",{on:{click:function(t){e.$refs.rightDrawer.open()}}},[n("i",[e._v("assignment")])]),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),e._m(3)],1)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[n("span",{staticClass:"label bg-primary text-white"},[n("i",{staticClass:"on-left animate-bounce"},[e._v("mail")]),e._v("\r\n        10\r\n      ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"right-drawer-opener"},[n("i",[e._v("more_vert")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[n("i",[e._v("tv")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",[n("i",[e._v("supervisor_account")])])}]}},340:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"q-app"}},[n("q-layout",[n("toolbar",{slot:"header"}),e._v(" "),n("leftdrawer"),e._v(" "),n("router-view",{staticClass:"layout-view"}),e._v(" "),n("rightdrawer")],1)],1)},staticRenderFns:[]}},345:function(e,t){},346:function(e,t){}});
//# sourceMappingURL=app.427840ea462de2855c9b.js.map