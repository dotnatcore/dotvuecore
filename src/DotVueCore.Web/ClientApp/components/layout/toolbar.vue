<template>
<div class="toolbar"  v-show="getLayoutNeeded">
    <q-ajax-bar color="#80cbc4"></q-ajax-bar>
    <!--<button class="left-drawer-opener">
          <i>menu</i>
    </button>-->
    <router-link :to="'/'" v-if="$router.currentRoute.meta.backButton">
        <button>
        <i>arrow_back</i>
      </button>
    </router-link>
    <button class="hide-on-drawer-visible" @click="$parent.$children[1].$refs.leftDrawer.open()" v-else>
      <i>menu</i>
    </button>
    <q-toolbar-title :padding="1">
        DotVueApp
    </q-toolbar-title>
    <button>
      <span class="label bg-primary text-white">
        <i class="on-left animate-bounce">mail</i>
        10
      </span>
    </button>
    <button @click="$refs.rightDrawer.open()">
        <i>assignment</i>
    </button>
    <button class="right-drawer-opener">
          <i>more_vert</i>
    </button>
    <button><i>tv</i></button>
    <button><i>supervisor_account</i></button>
</div>
</template>
<script>
import { mapMutations, mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters(['getLayoutNeeded'])
    },
    methods: {
      ...mapMutations(['setMobileMode'])
    }
}
</script>
<style scoped>
.toolbar {
    height: 50px;
    background-color: #0288d1 !important;
}
.right-itens a{
    margin-right: 10px;
  }
</style>
