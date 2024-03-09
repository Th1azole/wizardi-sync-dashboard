<template>
  <div class="gradient-background"></div>
</template>

<script lang="ts">
export default {
  name: 'AnimatedBackground'
}
</script>

<style scoped>
.gradient-background {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(to top, rgba(249, 63, 63, 0.2), rgba(255, 255, 255, 0.1));
}
</style>
