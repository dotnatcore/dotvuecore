<template>
<q-drawer ref="leftDrawer" v-show="getLayoutNeeded">
    <div class="list no-border platform-delimiter light-paragraph">
        <div class="list-label">Dashboard</div>
        <q-drawer-link icon="home" :to="{path: '/', exact: true}">Home</q-drawer-link>
        <q-collapsible icon="inbox" label="Master">
            <q-drawer-link icon="alarm" :to="{path: '/questiontype', exact: true}">Question Type</q-drawer-link>
            <q-drawer-link icon="question_answer" :to="{path: '/user', exact: true}">User</q-drawer-link>
        </q-collapsible>
        <div class="list-label">Profile</div>
        <q-drawer-link icon="exit_to_app":to="{path: '/logout', exact: true}">Logout</q-drawer-link>
    </div>
</q-drawer>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
      ...mapGetters(['getLayoutNeeded'])
    }
}
</script>
<style scoped>
.toolbar {
    min-height: 70px;
}
.fixed-bottom {
  margin-bottom: 1%;
}
.list-label:first-child{
  line-height: 50px;
}
.router-link-active {
  color: #027be3;
  background-color: #dadada !important;
  border-right: 2px solid #027be3;
}
.router-link-active .item-primary{
  color: #027be3;
}
.fixed-bottom a img {
  width: 25px;
  height: 25px;
}
</style>
