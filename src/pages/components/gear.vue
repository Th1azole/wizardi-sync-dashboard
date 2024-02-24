<template>
  <div class="loader">
    <div class="gear"></div>
  </div>
</template>

<script>
export default {
  name: 'GearLoader'
}
</script>

<style>
.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gear {
  width: 50px;
  height: 50px;
  border: 5px solid #ffd080;
  border-top-color: rgba(248, 151, 108, 0.82);
  border-radius: 50%;
  animation: rotate 1s infinite linear;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
