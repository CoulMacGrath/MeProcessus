<template>
  <button class="fancy-btn">
    <div class="header">
      <slot name="header"></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </button>
</template>

<script setup lang="ts">
</script>

<style>
.fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
.no-fancy-btn {
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #050818);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
.no-btn {
  color: #ffffff;
  background: linear-gradient(315deg, #42d392 25%, #08db47);
  border: none;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 8px;
  cursor: pointer;
}
</style>