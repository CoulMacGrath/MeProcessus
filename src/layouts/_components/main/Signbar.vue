
<template>
  <div class="navbar-wrapper">
    <v-btn
      :class="['navbar-btn', path === item.path ? 'active': '']"
      :key="k"
      v-for="(item, k) in roads"
      variant="plain"
      :to="item.path"
    >
      {{ item.name }}
    </v-btn>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

const roads = [
  {
    name: 'Home',
    path: '/'
  },
  {
    name: 'About',
    path: '/about'
  }
]

const route = useRoute()

const path = computed(() => route.path)
</script>

<style lang="scss" scoped>
.navbar {
  &-wrapper {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  &-btn {
    letter-spacing: 0;
    text-transform: none;
    font-weight: bold;
    color: black;
  }

  .active {
    background-color: red;
  }
}

</style>