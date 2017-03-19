require(`quasar-framework/dist/quasar.mat.css`)
require('es6-promise').polyfill()

import Vue from 'vue'
import VueResource from 'vue-resource'
import Quasar from 'quasar-framework'

import router from './configs/router'

// Store
import store from './store/store'

Vue.use(Quasar)
Vue.use(VueResource)
Vue.config.productionTip = true

// Set headers with token
Vue.http.interceptors.push((request, next) => {
  request.headers.set('Authorization', 'Bearer ' + store.getters.token)
  request.headers.set('Accept', 'application/json')
  next()
})

Quasar.start(() => {
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})
