<template>
  <article class="card" @click="click">
    <div class="card-image">
      <img :src="resource.image" alt="" />
      <img v-if="resource.icon" :src="resource.icon" class="card-icon" />
    </div>

    <div class="card-content">
      <h1 class="title">{{ resource.title }}</h1>
      <h2 class="subtitle">
        {{ Array.isArray(resource.category) ? resource.category.join(' | ') : resource.category }}
      </h2>
      <p class="description">
        {{ resource.description }}
      </p>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: 'ItemCard',
  props: {
    resource: {
      type: Object,
      required: true,
    },
  },
  methods: {
    click() {
      window.open(this.resource.url, '_blank');
    },
  },

  mounted() {
    console.log('objeto', this.resource);
  },
};
</script>

<style>
.card {
  min-height: 150px;
  min-width: 150px;
  aspect-ratio: 1 / 1;
  width: 100%;
  max-width: 350px;
  margin: 0 auto;
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  display: flex;
  flex-direction: column;

  margin: 10px;
  cursor: pointer;

  transition: all 0.3s ease-out;
  &:hover {
    transform: scale(1.01);
    box-shadow: 0 8px 16px rgba(255, 0, 0, 0.4);

    .card-content {
      border-color: red;
    }
  }
}

.card-image {
  background-color: red;
  height: 65%;
  z-index: 10;
  overflow: hidden;
}

.card-image img:first-child {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.card-icon {
  position: relative;
  bottom: 55px;
  left: 8px;
  width: 50px;
  height: 50px;
  border-radius: 10px;
  background-color: white;
  padding: 2px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  z-index: 2;
}

.card-content {
  background-color: #333;
  color: white;
  height: 50%;
  padding: 5px 4px 10px 15px;
  overflow: hidden;
  border: 2px solid orangered;
  border-top: none;
  border-radius: 0 0 8px 8px;

  .title {
    font-size: 1.3rem;
    font-weight: bold;
    margin: 0;
    padding-bottom: -12px;
  }
  .subtitle {
    font-size: 0.7rem;
    color: #666;
    padding: 0px 0px 8px 0px;
  }
  .description {
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    height: 50%;
    color: #999;
  }
}
</style>
