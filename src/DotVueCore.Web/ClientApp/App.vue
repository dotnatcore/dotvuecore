<template>
<div id="q-app">
    <q-layout>
        <toolbar slot="header"></toolbar>
        <leftdrawer></leftdrawer>
        <router-view class="layout-view"></router-view>
        <rightdrawer></rightdrawer>
    </q-layout>
</div>
</template>

<script>
import toolbar from './components/layout/toolbar.vue'
import leftdrawer from './components/layout/leftdrawer.vue'
import rightdrawer from './components/layout/rightdrawer.vue'
export default {
    name: 'app',
    components: {
        toolbar,
        leftdrawer,
        rightdrawer
    }
}
</script>

<style>
body {
    background-color: whitesmoke;
}
</style>
