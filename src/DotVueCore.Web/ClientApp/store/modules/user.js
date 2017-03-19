import Vue from 'vue'
import * as types from '../mutation-types'
import api from '../utils/api'
import {API_ROOT} from '../../configs/config'

const state = {
    users: [],
    message: null,
    error: null
}
const getters = {
    users: state => state.users,
    user_error: state => state.error
}

const actions = {
    getAllUsers(context){
        return api.get(API_ROOT+'users',{},
          response=>{
            context.commit('RECIEVE_USERS', response)
          },error=>{
            context.commit('USERS_FAILURE', error)
          });
    }
}
const mutations = {
  [types.RECIEVE_USERS](state,users) {
      state.users = users
  },
  [types.USERS_FAILURE](state,error) {
      state.error = error
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}
