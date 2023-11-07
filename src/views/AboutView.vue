<template>
  <MainLayout>
    <template #nav> Navbar </template>
    <template #content> Hello from about page </template>
    <template #side>Sidebar</template>
    <template #footer> Footer </template>
  </MainLayout>
</template>

<script setup lang="ts">
import MainLayout from '@/layouts/MainLayout.vue'
</script>


<style>
</style>
