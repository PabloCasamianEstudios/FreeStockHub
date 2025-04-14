<template>
  <nav>
    <ul class="nav gap-x-2">
      <NavButton
        v-for="section in sections"
        :key="section.title"
        :title="section.title"
        :icon="section.icon"
        :color="section.color"
      />
    </ul>
  </nav>
</template>

<script lang="ts" setup>
import NavButton from './NavButton.vue';

const sections = [
  { title: 'home', icon: 'icon-home', color: ['#9e9e9e', '#616161'] },
  { title: 'colors', icon: 'icon-palette', color: ['#FF0000', '#E60000'] },
  { title: 'icons', icon: 'icon-smile', color: ['#FF3300', '#E62E00'] },
  { title: 'typography', icon: 'icon-fontsize', color: ['#FF6600', '#E65C00'] },
  { title: 'ilustrations', icon: 'icon-brush', color: ['#FF9900', '#E68A00'] },
  { title: 'photos', icon: 'icon-camera', color: ['#FFCC00', '#E6B800'] },
  { title: 'backgrounds', icon: 'icon-picture', color: ['#99CC00', '#82B800'] },
  { title: 'Animations', icon: 'icon-videocam-1', color: ['#06A034FF', '#027224FF'] },
  { title: 'videos', icon: 'icon-videocam', color: ['#3399FF', '#1A78E3'] },
  { title: 'sfx', icon: 'icon-headphones-1', color: ['#003366', '#00264D'] },
  { title: 'music', icon: 'icon-music', color: ['#6600CC', '#5900B3'] },
  { title: '3d models', icon: 'icon-cube', color: ['#9900CC', '#8C00B3'] },
  { title: 'components', icon: 'icon-puzzle', color: ['#CC3399', '#B32D82'] },
  { title: 'libraries', icon: 'icon-book', color: ['#FF66CC', '#E65AC7'] },
  { title: 'tools', icon: 'icon-tools', color: ['#6B3F2B', '#4E2A1D'] },
  { title: 'ai', icon: 'icon-plug', color: ['#2C6B3F', '#1F4F30'] },
  { title: 'inspirations', icon: 'icon-lightbulb', color: ['#FFD700', '#FFCC00'] },
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
