<template>
  <section>
    <h2>colors</h2>

    <!-- IDEALMENTE: COMPONENTE NUEVO CARD GRID AL QUE SE LE PASE UN ARRAY DE CATEGORÍAS, Y MUESTRE LOS OBJETOS QUE CUMPLEN -->
    <div class="cardGrid">
      <ItemCard v-for="(item, index) in resources" :key="index" :resource="item" />
    </div>
  </section>
</template>

<script lang="ts" setup>
import resources from '@/assets/data/colors.json';
import ItemCard from '@/components/ItemCard.vue';
</script>

<style>
.cardGrid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px; /* Adjust spacing between cards as needed */
  justify-content: center;
  padding: 0 10px;
}
</style>
