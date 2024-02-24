<template>
  <div class="login">
    <h2>Log In</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required>
      </div>
      <div class="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Log In </button>
    </form>
    <div v-if="errorMessage" class="error">{{ errorMessage }}</div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await axios.post("https://api-url/login", {
          username: this.username,
          password: this.password
        });
        this.$router.push('/DashBoard')
        // Перенаправление на страницу Dashboard
        console.log('Вход выполнен успешно:', response.data);

        // Перенаправление
      } catch (error) {
        console.error('Ошибка при входе:', error.response.data);
        this.errorMessage = error.response.data.message;
      }
    }
  }
}
</script>
<style scoped>
.login {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #FF4E20;
  border-radius: 5px;
}
.form-group {
  margin-bottom: 15px;
}
.label {
  display: block;
  margin-bottom: 5px;
}
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #FF4E20;
  border-radius: 5px;
}
button {
  padding: 10px 20px;
  background-color: rgba(241, 175, 91, 0.92);
  color: #ff4e20;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
