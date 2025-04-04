<template>
  <li>
    <div
      class="btn"
      :style="{
        '--custom-color': color,
        '--custom-color-hover': color ? color + '10' : 'var(--custom-color)',
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
    default: '',
  },
});

const titulo = props.title.charAt(0).toUpperCase() + props.title.slice(1);
const route = '/' + props.title;
const icon = props.icon;
</script>

<style lang="scss" scoped>
$color-btn: var(--custom-color);

.btn {
  display: block;
  padding: 5px;
  background-color: $color-btn;
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
