
<template>
  <div>
    <div v-if="dataLoaded">
      <ul>
        <li v-for="(item, index) in dataList" :key="index">{{ item }}</li>
      </ul>
    </div>
    <gear-loader v-else>
      <p>Загрузка данных...</p>
    </gear-loader>
  </div>
</template>
<script>
import axios from 'axios';
import GearLoader from '@/pages/components/gear.vue'

export default {
  components: { GearLoader },
  data() {
    return {
      dataList: [],
      dataLoaded: false
    };
  },
  async created() {
    await this.connect();
  },
  methods: {
    async connect() {
      try {
        const response = await axios.get("https://2cee-196-240-54-4.ngrok-free.app/", {
          headers: {
            'ngrok-skip-browser-warning': 'skip-browser-warning'
          }
        });
        this.dataList=response.data.message;
        this.dataLoaded = true;
      } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
      }
    }
  }
}
</script>
