<template>
  <div class="app">
    <NavBar />

    <RouterView />
  </div>
</template>

<script setup lang="ts">
import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<style scoped>
.app {
  margin: 15px 200px 0 200px;
  align-items: center;
  justify-content: center;
}
</style>
