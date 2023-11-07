<template>
  <div class="topbar-wrapper">
    <MainLogo />
    <Signbar />
    <MainProfileVue/>
  </div>
</template>

<script setup lang="ts">
import Signbar from './_components/main/Signbar.vue'
import MainLogo from './_components/main/MainLogo.vue'
import MainProfileVue from './_components/main/MainProfile.vue'
</script>

<style lang="scss" scoped>
.topbar {
  &-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    padding: 0px 16px;
  }
}
</style>