<script setup lang="ts">
import {RouterView } from 'vue-router'
import AnimatedBackground from '@/pages/components/Background.vue'
import TempNavigation from '@/pages/components/TempNavigation.vue'
</script>
<template>
  <div>
    <temp-navigation></temp-navigation>
    <AnimatedBackground/>
    <RouterView />
  </div>
</template>

<style scoped>
</style>
