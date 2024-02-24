<template>
  <div class="overview-page">
    <div class="grid-container">
      <div v-for="item in items" :key="item.id" class="grid-item">
        {{ item.name }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      items: [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' },
        { id: 4, name: 'Item 4' },
        { id: 5, name: 'Item 5' },
        { id: 6, name: 'Item 6' },
        { id: 7, name: 'Item 7' },
        { id: 8, name: 'Item 8' },
        { id: 9, name: 'Item 9' },
        { id: 10, name: 'Item 10' },
        { id: 11, name: 'Item 11' },
        { id: 12, name: 'Item 12' },
        { id: 13, name: 'Item 13' },
        { id: 14, name: 'Item 14' },
        { id: 15, name: 'Item 15' },
        { id: 16, name: 'Item 16' },
        { id: 17, name: 'Item 17' },
        { id: 18, name: 'Item 18' },
      ]
    };
  }
};
</script>

<style scoped>
.overview-page {
  padding: 20px;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
}

.grid-item {
  background-color: #f0f0f0;
  padding: 20px;
  border: 1px solid #ccc;
  text-align: center;
  font-size: 50px;
}
.grid-item {
  font-style: inherit;
  color: coral;
}
</style>
