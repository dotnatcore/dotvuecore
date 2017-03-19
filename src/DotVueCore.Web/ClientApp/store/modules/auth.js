/** User store
 *
 */
import Vue from 'vue'
import * as types from '../mutation-types'
import Validation from '../../helpers/validation'
import {
    API_ROOT
} from '../../configs/config'

const {
    name,
    token,
    id
} = { ...JSON.parse(localStorage.getItem('u'))
}
const state = {
    user: {
        name: name || null,
        id: id || null,
        token: token || null
    },
    message: null,
    error: null
}

const getters = {
    username: state => state.user.name,
    token: state => state.user.token
}

const actions = {
    authenticateUser({
        commit
    }, payload) {
        const validationErrors = Validation.validateUser(payload.email, payload.password);
        return new Promise((resolve, reject) => {
            if (validationErrors) {
                return reject(validationErrors)
            }
            Vue.http.post(API_ROOT + 'auths', payload, {
                emulateJSON: false
            }).then(res => {
                // Set token on successful authentication
                if (res.body.Token) {
                    const user = {
                        token: res.body.Token,
                        name: res.body.Name,
                        id: res.body.Id
                    };
                    commit(types.AUTHENTICATE_USER, user)
                }
                // Resolve promise with a response message
                resolve({
                    message: res.body.Message
                });

            }).catch((res) => {
                // Reject promise with error message
                reject({
                    errors: {
                        message: res.body.Message
                    }
                })
            })

        })
    },
    deauthenticateUser({
        commit
    }) {
        commit(types.DEAUTHENTICATE_USER)
    }

};

const mutations = {
    [types.AUTHENTICATE_USER](state, user) {
        localStorage.setItem('u', JSON.stringify(user));
        state.user = { ...user
        }
    },
    [types.DEAUTHENTICATE_USER](state) {
        localStorage.removeItem('u')
        state.user = {}
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}
