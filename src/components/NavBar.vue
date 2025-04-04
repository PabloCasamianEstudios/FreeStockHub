<template>
  <nav>
    <ul class="nav gap-x-2">
      <NavButton
        v-for="section in sections"
        :key="section"
        :title="section.title"
        :icon="section.icon"
        :color="section.color"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import NavButton from './NavButton.vue';

// sections podría volverse un array de objetos: {title, icon svg, color}}
const sections = [
  { title: 'home', icon: 'icon-home', color: 'red' },
  { title: 'colors', icon: 'icon-palette', color: 'red' },
  { title: 'icons', icon: 'icon-smile', color: 'red' },
  { title: 'typography', icon: 'icon-fontsize', color: 'green' },
  { title: 'ilustrations', icon: 'icon-brush', color: '' },
  { title: 'photos', icon: 'icon-camera', color: '' },
  { title: 'backgrounds', icon: 'icon-picture', color: '' },
  { title: 'videos', icon: 'icon-videocam', color: '' },
  { title: 'sfx', icon: 'icon-headphones-1', color: '' },
  { title: 'music', icon: 'icon-music', color: '' },
  { title: '3d models', icon: 'icon-cube', color: '' },
  { title: 'components', icon: 'icon-puzzle', color: '' },
  { title: 'libraries', icon: 'icon-book', color: '' },
  { title: 'tools', icon: 'icon-tools', color: '' },
  { title: 'ai', icon: 'icon-plug', color: '' },
  { title: 'inspirations', icon: 'icon-lightbulb', color: '' },
];
</script>

<style scoped>
.nav {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    flex: 1 1 auto;
    min-width: 200px;
    text-align: center;
  }
}
</style>
