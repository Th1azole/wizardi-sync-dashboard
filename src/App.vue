<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
  <header>
    <div class="wrapper">
      <img alt="Vue logo" class="logo" src="@/assets/logo.jpg"  />
      <nav>
        <RouterLink to="/OverviewField">OverviewField</RouterLink>
        <RouterLink to="/Login">Login</RouterLink>
        <RouterLink to="/DashBoard">DashBoard</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 2.5;
  max-height: 100vh;
}
.wrapper{
  position: absolute;
  top: 10px;
  left: 12px;
  width: 100px;
  height: auto;
}
nav {
  width: 10%;
  font-size: 20px;
  text-align: center;
  margin-top: 2rem;

}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 1;
}
</style>
