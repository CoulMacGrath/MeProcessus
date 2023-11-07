<template>
  <div class="logo-wrapper">
    <div class="logo">
      <img src="../../../assets/logo.svg" alt="" />
    </div>

    <div class="title">
      <span>Me</span>
      <span>Processes</span>
    </div>
  </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss" scoped>
.logo {
  width: 46px;
  height: 46px;

  &-wrapper {
    display: flex;
    align-items: center;
    gap: 10px;
    background: #E9EDF4;
    border-radius: 8px;
    padding: 0px 12px;
    transition: 0.2s;

    &:hover {
        box-shadow: 2px 2px 4px 0px rgba(34, 60, 80, 0.2);
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}

.title {
    display: flex;
    flex-direction: column;

    span {
        font-weight: bold;
    }
  }
</style>