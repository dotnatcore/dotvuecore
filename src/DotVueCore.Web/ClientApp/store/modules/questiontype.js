import Vue from 'vue'
import * as types from '../mutation-types'
import api from '../utils/api'
import {API_ROOT} from '../../configs/config'

const state = {
    questiontypes: [],
    message: null,
    error: null
}
const getters = {
    questiontypes: state => state.questiontypes,
    question_type_errors: state => state.error
}

const actions = {
    getAllQuestionTypes(context){
        return api.get(API_ROOT+'questiontypes',{},
          response=>{
            context.commit('RECIEVE_QUESTION_TYPES', response)
          },error=>{
            context.commit('QUESTION_TYPES_FAILURE', error)
          });
    }
}
const mutations = {
  [types.RECIEVE_QUESTION_TYPES](state,questiontypes) {
      state.questiontypes = questiontypes
  },
  [types.QUESTION_TYPES_FAILURE](state,error) {
      state.error = error
  }
}

export default {
    state,
    getters,
    actions,
    mutations
}
