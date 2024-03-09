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
  width: 60px;
  height: 60px;
  border: 5px solid #dbc194;
  border-top-color: rgba(234, 91, 27, 0.82);
  border-inline: #f4f0ef;
  border-radius: 70%;
  animation: rotate 1.2s infinite linear;
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
