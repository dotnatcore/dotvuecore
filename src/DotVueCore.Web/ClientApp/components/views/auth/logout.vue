<template>
<div id="logout">

</div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
export default {
    name: 'logout',
    data: function data() {
        return {

        }
    },
    methods: {
        ...mapActions([
            'deauthenticateUser'
        ])
    },
    mounted() {
        this.deauthenticateUser();
        this.$router.push({
            name: 'login'
        });
    }
}
</script>
<style>

</style>
