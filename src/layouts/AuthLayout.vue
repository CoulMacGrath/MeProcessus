
<template>
  <!-- <v-layout  ref="app" class="rounded rounded-md"> -->
  <!-- <v-main> -->
  <div class="auth_wrapper">
    <div class="auth_content">
      <div class="logo">
        <MainLogo />
      </div>

      <slot name="content"></slot>
    </div>
  </div>
  <!-- </v-main> -->
  <!-- </v-layout> -->
</template>
  
<script setup lang="ts">
import MainLogo from './_components/main/MainLogo.vue'
</script>
  
<style scoped lang="scss">
html {
  overflow: hidden !important;
}
.auth {
  &_wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: count;
    width: 100%;
    height: 100vh;
    overflow-y: hidden;
    background: rgb(0, 0, 0);
    background: linear-gradient(333deg, rgba(0, 0, 0, 1) 35%, rgba(255, 255, 255, 1) 100%);
  }
  &_content {
    display: flex;
    flex-direction: column;
    padding: 36px;
    min-width: 500px;
    background-color: #cad2e2;
    border-radius: 20px 20px;
    gap: 10px;
  }
}

.logo-wrapper {
  justify-content: left;
}
</style>