<template>
<q-drawer ref="leftDrawer">
    <div class="list no-border platform-delimiter">
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
export default {

}
</script>
<style scoped>
.toolbar {
    min-height: 70px;
}
</style>
