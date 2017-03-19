<template>
  <q-drawer right-side swipe-only ref="rightDrawer">
    <div class="toolbar light">
      <q-toolbar-title :padding="1">
          Right-side Drawer
      </q-toolbar-title>
    </div>

    <p style="padding: 25px;" class="text-grey-7">
      This is yet another Drawer that does not gets displayed alongside content on
      bigger screens.
    </p>
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
