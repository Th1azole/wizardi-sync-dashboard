<script setup lang="ts">

import { RouterLink } from 'vue-router'
</script>

<template>
  <h1 class="TempSign">Temp navigation</h1>
  <div class="TempNavigator">

    <nav>
      <RouterLink to="/Login">Login</RouterLink>
      <RouterLink to="/DashBoard">DashBoard</RouterLink>
    </nav>
  </div>
</template>

<style scoped>
.TempSign{
  position: absolute;
  margin-right: 8px;
  top: 1px;
  right: 0;
  font-weight: normal;
  font-size: 20px;
  color: #ed471a;
}
.TempNavigator {
  position: absolute;
  margin-right: 5%;
  top: 15px;
  right: 0;
  width: 100px;
  height: auto;
  color: #eb8a71;
}
nav {
  width: 10%;
  font-size: 20px;
  text-align: center;
  margin-top: 3rem;
}
nav a.router-link-exact-active {
  color: rgb(233, 48, 0);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
  color: rgb(240, 116, 84);
}

nav a {
  display: inline-block;
  padding: 0 1.5rem;
  color: #ee9d89;
  border-left: 1px solid #eb693d;
}

</style>