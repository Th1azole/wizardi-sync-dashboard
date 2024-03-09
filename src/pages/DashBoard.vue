<template>
  <div>
    <div class="sidebar">
      <div v-if="dataLoaded">
        <ul class="platform-list">
          <li v-for="(platform, id) in dataList.platforms" :key="id" class="platform-item" @click="handleItemClick(platform)">
            {{ platform.title }}
          </li>
        </ul>
      </div>
      <gear-loader v-else></gear-loader>
    </div>
    <PlatformPreview v-if="dataLoaded" />
  </div>
</template>

<script>
import axios from 'axios';
import GearLoader from '@/pages/components/gear.vue'
import PlatformPreview from '@/pages/components/PlatformPreview.vue'

export default {
  components: { PlatformPreview, GearLoader },
  data() {
    return {
      dataList: [],
      dataLoaded: false,
      selectedItem: null // Выбранный товар
    };
  },
  async created() {
    await this.connect();
  },
  methods: {
    async connect() {
      try  {
        const response = await axios.get(import.meta.env.VITE_DASHBOARD_URL)
        this.dataList = response.data;
        this.dataLoaded = true;
      } catch (error) {
        alert(error)
      }
    },
    handleItemClick(platform) {
      this.selectedItem = platform.selectedItem;
    }
  }
}
</script>

<style scoped>
.sidebar {
  position: fixed;
  left: 0;
  top: 20px;
  bottom: 0;
  width: 200px;
  padding-top: 20px;
}

.platform-list {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.platform-item {
  cursor: pointer;
  padding: 10px;
  transition: background-color 0.5s;
  border-bottom: 1px solid #ccc;
}

.platform-item:last-child {
  border-bottom: none;
}

.platform-item:hover {
  background-color: #e5967b;
  border-left: 5px solid rgba(177, 55, 4, 0.7);
}
</style>
