import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth'
import questiontype from './modules/questiontype'
import user from './modules/user'

import middlewares from './middlewares'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug

export default new Vuex.Store({
    modules: {
        auth,
        user,
        questiontype
    },
    strict: debug,
    middlewares
})
