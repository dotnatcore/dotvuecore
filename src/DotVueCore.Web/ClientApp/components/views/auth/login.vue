<template>
<div class="flex justify-center full-height" :class="heightSize">
<div class="card text-white text-center width-3of4 bg-width-2of5 gt-bg-width-1of4 sm-auto " id="login">
      <div class="card-title" :class="finalBgColor">
        <svg id="logo" viewBox="0 0 483 483"
             style="enable-background:new 0 0 460 460;"
             xml:space="preserve" width="128px" height="128px"
             v-html="logoMethod">
        </svg>
        <h4>{{logo}}</h4>
      </div>
      <div class="card-content bg-white ">
        <div class="stacked-label">
          <input required class="full-width" type="email" v-model="credentials.email">
          <label>Email</label>
        </div>
        <div class="stacked-label">
          <input required class="full-width" type="password" v-model="credentials.password">
          <label>Password</label>
        </div>
      </div>
      <div class="card-actions inline-block vertical-middle">
        <button class="teal fit " :class="buttonClass" @click="userLogin()">Login</button>
        <button class="red fit" :class="buttonClass" @click="userLogin()">Login Google</button>
        <button class="blue fit " :class="buttonClass" @click="sendSock()">Send</button>
      </div>
    </div>
</div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'

import Stomp from 'stompjs'
import SockJS from 'sockjs-client'
import { Platform } from 'quasar-framework'
import logoData from './logoData'
import {mapMutations} from 'vuex'
import Vivus from 'vivus'
let sock = new SockJS('/broadcast')
sock.onopen = function() {
   console.log('open')
   sock.send('test');
}
sock.onmessage = function(e) {
   console.log('message', e)
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
            },
            logos: Object.keys(logoData),
            logo: 'DotVueApp',
            bgColor: 'blue',
            toneColor: 10,
            colors: ['purple', 'blue', 'red', 'green', 'amber'],
            colorTones: ['2', '4', '6', '8', '10'],
            buttonClasses: ['normal','outline', 'clear', 'push', 'bordered', 'round'],
            buttonClass: 'normal',
            vivus: ''
        }
    },
    computed: {
        ...mapGetters([
            'getLayoutNeeded',
            'getIsLoginPage',
            'getMobileMode'
        ]),
        heightSize (){
            if (Platform.is.desktop) {
            return 'items-center'
            }
            return ''
        },
        finalBgColor () {
            return `bg-${this.bgColor}-${this.toneColor}`
        },
        logoMethod () {
            return logoData[this.logo]
        }
    },
    methods: {
      ...mapActions([
          'setLayoutNeeded',
          'setIsLoginPage',
          'setMobileMode'
      ]),
        userLogin() {
            // AUTH WILL BE CALLED with data
            this.$store.dispatch('authenticateUser', this.credentials)
                .then(res => {
                    this.loading = false
                    this.setLayoutNeeded(true)
                    this.setIsLoginPage(false)
                    this.$router.push({
                        name: 'home',
                        params: {
                        }
                    })
                })
                .catch(res => {
                    this.loading = false
                    this.errors = res.errors
                });
        },
        startAnimation () {
            this.vivus = new Vivus('logo', {
                duration: 400,
                forceRender: false
            }, function(element) {
                for (let item of element.el.children[0].children) {
                    item.setAttribute('style', 'fill:white')
                    item.setAttribute('style', 'fill:white')
                }
            })
        },
        sendSock(){
          sock.send(+new Date)
        }
    },
    mounted(){
        this.setLayoutNeeded(false)
        this.setIsLoginPage(true)
        this.startAnimation()
    }
}
</script>
<style scoped>
  .card {
    margin-bottom: 0px;
    width: 100%;
  }
  .card-content {
    min-height: 160px;
  }
  button {
    margin-bottom: 4%;
  }
  h4 {
    font-weight: 300;
  }
</style>
