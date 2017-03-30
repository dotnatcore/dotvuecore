import Vue from 'vue'
import * as types from '../mutation-types'
import api from '../utils/api'
import {
  API_ROOT
}
from '../../configs/config'

let state = {
  layoutNeeded: true,
  isLoginPage: false,
  mobileMode: false
}

const getters = {
  getLayoutNeeded: state => state.layoutNeeded,
  getIsLoginPage: state => state.isLoginPage,
  getMobileMode: state => state.mobileMode
}

const actions = {
  setLayoutNeeded(context, value) {
      console.log(value)
      context.commit('SET_LAYOUT_NEEDED', value)
    },
    setIsLoginPage(context, value) {
      console.log(value)
      context.commit('SET_IS_LOGIN_PAGE', value)
    },
    setMobileMode(context, value) {
      console.log(value)
      context.commit('SET_MOBILE_MODE', value)
    },
}

const mutations = {
  [types.SET_LAYOUT_NEEDED](state, value) {
    console.log(value)
    state.layoutNeeded = value
  }, [types.SET_IS_LOGIN_PAGE](state, value) {
    console.log(value)
    state.isLoginPage = value
  }, [types.SET_MOBILE_MODE](state, value) {
    console.log(value)
    state.mobileMode = value
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
