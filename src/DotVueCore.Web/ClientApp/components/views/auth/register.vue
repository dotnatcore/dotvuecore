<template>
<div class="container">
    <div slot="header" class="toolbar">
        <q-toolbar-title :padding="1">
            <button v-go-back="'/'">
          <i>arrow_back</i>
        </button> Register
      </q-toolbar-title>
      <button><i>help</i></button>
    </div>
    <div class="layout-view layout-padding">
        <div class="list">
            <div class="item three-lines">
                <i class="item-primary">face</i>
                <div class="item-content">
                    <div class="stacked-label">
                        <input v-model="credentials.name" required placeholder="Your name" class="full-width">
                        <label>Name</label>
                    </div>
                </div>
            </div>
            <hr>
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
        <button class="primary full-width" @click="submit()">Register</button>
    </div>
</div>
</template>
<script>
export default {
    name: "register",
    data: function data() {
        return {
            credentials: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submit() {
            var credentials = {
                name: this.credentials.name,
                email: this.credentials.email,
                password: this.credentials.password
            }
            auth.signup(this, credentials, 'jokes')
        }
    }
}
</script>
<style>

</style>
