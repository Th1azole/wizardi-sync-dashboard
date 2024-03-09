<template>
  <div class="container">
    <div class="card" v-for="(product, index) in products" :key="index" :style="{ '--clr': getRandomColor() }">
      <div class="content">
        <h2>{{ product.name }}</h2>
        <p>{{ product.description }}</p>
      </div>
      <div class="button-wrapper">
        <a href="#">More</a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const getRandomColor = () => {
  const colors = ['#009688', '#FF3E7F', '#03A9F4', '#F44336', '#673AB7'];
  return colors[Math.floor(Math.random() * colors.length)];
}
const products = ref([
  { id: 1, name: 'Товар 1', description: 'Описание товара 1' },
  { id: 2, name: 'Товар 2', description: 'Описание товара 2' },
  { id: 3, name: 'Товар 3', description: 'Описание товара 3' },
  { id: 4, name: 'Товар 4', description: 'Описание товара 4' },
  { id: 5, name: 'Товар 5', description: 'Описание товара 5' },
  { id: 6, name: 'Товар 6', description: 'Описание товара 6' },
  { id: 7, name: 'Товар 7', description: 'Описание товара 7' },
  { id: 8, name: 'Товар 8', description: 'Описание товара 8' },
]);

</script>

<style scoped>
.container {
  max-width: 1280px;
  position: relative;
  left: 200px;
  top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
  min-height: 100vh;
}

.card {
  position: relative;
  width: calc(25% - 40px);
  height: 300px;
  margin-right: 10px;
  background: #ffffff;
  border-radius: 20px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  overflow: hidden;
  transition: height 1s;
}

.card:hover {
  height: 330px;
}

.content {
  padding: 20px;
}

.content h2 {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 10px;
  color: #cccccc;
}

.content p {
  font-size: 0.9rem;
  color: #333;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}

.button-wrapper {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  text-align: center;
}

.button-wrapper a {
  display: inline-block;
  padding: 8px 20px;
  background-color: #cccccc;
  color: #FFF;
  text-decoration: none;
  border-radius: 20px;
  transition: opacity 0.3s;
}

.button-wrapper a:hover {
  opacity: 0.8;
}

@media (max-width: 1024px) {
  .card {
    width: calc(33.333% - 40px);
  }
}

@media (max-width: 768px) {
  .card {
    width: calc(50% - 40px);
  }
}

@media (max-width: 480px) {
  .card {
    width: calc(100% - 40px);
  }
}
</style>
