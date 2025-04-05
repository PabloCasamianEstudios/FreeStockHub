<template>
  <li>
    <div
      class="btn"
      :style="{
        '--custom-color': `${color[0]}`,
        '--custom-color-hover': `${color[1]}`,
      }"
    >
      <router-link class="btn-flex" :to="route">
        <div :class="icon" style="white"></div>
        ┋
        {{ titulo }}</router-link
      >
    </div>
  </li>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    default: 'untitled',
    required: true,
  },
  icon: {
    type: String,
    default: '',
  },
  color: {
    type: String,
    default: 'red',
  },
});

const titulo = props.title.charAt(0).toUpperCase() + props.title.slice(1);
const route = '/' + props.title;
const icon = props.icon;

console.log('$color-' + props.color + '-dark');
</script>

<style lang="scss" scoped>
@import '@/assets/variables.scss';

.btn {
  display: block;
  padding: 5px;
  background-color: var(--custom-color);
  color: white;
  text-decoration: none;
  border-radius: 5px;
  margin: 4px 0;

  transition: all 0.4s ease-in-out;
}
.btn:hover {
  background-color: var(--custom-color-hover);
  transform: scale(1.02);
}

.btn-flex {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
}
</style>
