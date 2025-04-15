<template>
  <div class="app max-h-screen">
    <!-- <NavBar /> -->

    <RouterView />
  </div>
</template>

<script setup lang="ts">
//import NavBar from './components/NavBar.vue';
import { RouterView } from 'vue-router';
</script>

<style lang="scss" scoped>
* {
}
.app {
  min-height: fit-content;
  margin: 0px 150px 0px 150px;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .app {
    margin: 0px 20px 0px 20px;
  }
}
</style>
