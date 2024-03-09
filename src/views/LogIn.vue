<template>
  <div class="center">
    <h1>Sign In</h1>
    <form @submit.prevent="signIn">
      <div class="txt_field">
        <input type="text" v-model="login" required :maxlength="40" :minlength="10">
        <label>Username</label>
        <span></span>
      </div>
      <div class="txt_field">
        <input type="password" v-model="password" required :maxlength="30" :minlength="12">
        <label>Password</label>
        <span></span>
      </div>
      <input type="submit" value="Login">
    </form>
  </div>
</template>

<script>
import axios from 'axios';
import router from '@/router/index.ts';
import Cookies from 'js-cookie';

export default {
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    signIn: async function() {
      try {
        if (this.login.length < 10 || this.login.length > 40) {
          alert('Username must be between 10 and 40 characters.')
          return
        }
        if (this.password.length < 12 || this.password.length > 30) {
          alert('Password must be between 12 and 30 characters.')
          return
        }

        const response = await axios.post(import.meta.env.VITE_SIGN_IN_URL, {
          login: this.login,
          password: this.password
        }, {
          withCredentials: false,
          headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json'
          }})

        if (response.status === 201) {
          const { access_token, refresh_token } = response.data
          Cookies.set('access_token', access_token, { expires: 7 })
          Cookies.set('refresh_token', refresh_token, { expires: 7 })
          await router.push('/DashBoard')
          console.log(response)
        }

      } catch
        (error)
        {
          console.error('Login error:', error)
        }
      }
    }
  }
</script>

<style>
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 400px;
  background: rgb(255, 255, 255);
  border-radius: 25px;
  font-family: SHARY-BOLD,Bold,serif;
}

.center h1 {
  margin-top: 5px;
  text-align: center;
  padding: 0 0 20px 0;
  border-bottom: 1px solid silver;
}

.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}

.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}

.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.3s;
}

.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #ff4e20;
  transition: 0.3s;
}

.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #ff4e20;
}

.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}


input[type="submit"] {
  width: 100%;
  height: 50px;
  border: 3px solid;
  background: #ff4e20;
  font-size: 18px;
  border-radius: 25px;
  font-weight: 700;
  color: #e9f4fb;
  outline: none;
  cursor: pointer;
  margin-top: 1em;
}

input[type="submit"]:hover {
  border-color: #d93f00;
  background-color: #d93f00;
  transition: 0.5s;
}
</style>
