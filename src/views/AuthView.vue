<template>
  <AuthLayout>
    <template #content><RouterView /></template>
  </AuthLayout>
</template>

<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<style scoped>
</style>