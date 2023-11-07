
<template>
  <v-layout ref="app" class="rounded rounded-md">
    <v-app-bar color="white" name="app-bar">
      <Topbar/>
    </v-app-bar>

    <v-navigation-drawer color="#e9edf4" permanent name="drawer">
      <div class="d-flex justify-center align-center h-100">
        <slot name="side"> </slot>
      </div>
    </v-navigation-drawer>

    <v-main> <slot name="content"> </slot> </v-main>
    <v-footer app name="footer">
      <slot name="footer"> </slot>
    </v-footer>
    <router-view></router-view>
  </v-layout>
</template>

<script setup lang="ts">
  import Topbar from './Topbar.vue';
</script>

<style scoped>
</style>