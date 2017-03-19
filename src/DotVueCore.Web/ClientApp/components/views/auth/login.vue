<template>
<div class="container">
    <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
            <button v-go-back="'/'">
          <i>arrow_back</i>
        </button> Login
        </q-toolbar-title>
        <button><i>help</i></button>
    </div>
    <div class="layout-view layout-padding">
        <div class="list">
            <div class="item three-lines">
                <i class="item-primary">mail</i>
                <div class="item-content">
                    <div class="stacked-label">
                        <input v-model="credentials.email" required placeholder="Your email" class="full-width">
                        <label>Email</label>
                    </div>
                </div>
            </div>
            <hr>
            <div class="item three-lines">
                <i class="item-primary">vpn_key</i>
                <div class="item-content">
                    <div class="stacked-label">
                        <input v-model="credentials.password" type="password" required placeholder="Your password" class="full-width">
                        <label>Password</label>
                    </div>
                </div>
            </div>
        </div>
        <button class="primary full-width" @click="userLogin()">Login</button>
        <br/>
        <button class="primary full-width" @click="sendSock()">Send</button>
    </div>
</div>
</template>
<script>
import {
    mapActions
} from 'vuex'

import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
let sock = new SockJS('/broadcast')
sock.onopen = function() {
   console.log('open')
   sock.send('test');
}
sock.onmessage = function(e) {
   console.log('message', e.data)
}
sock.onclose = function() {
   console.log('close')
}
export default {
    name: "login",
    data: function data() {
        return {
            credentials: {
                email: 'rto@rto.com',
                password: '12345678'
            }
        }
    },
    methods: {
        userLogin() {
            // AUTH WILL BE CALLED with data
            this.$store.dispatch('authenticateUser', this.credentials)
                .then(res => {
                    this.loading = false;
                    this.$router.push({
                        name: 'home',
                        params: {
                        }
                    });
                })
                .catch(res => {
                    this.loading = false;
                    this.errors = res.errors;
                });
        },
        sendSock(){
          sock.send('test'+new Date+0)
        }
    },
    mounted: function mounted() {
    }
}
</script>
<style>

</style>
