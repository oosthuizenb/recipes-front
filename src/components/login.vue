<template>
  <div class="login">
    <h2>Login</h2>
    <br>
    <input type="text" placeholder="Username" v-model="login.username">
    <br>
    <input type="password" placeholder="Password" v-model="login.password">
    <br>
    <button @click.prevent="submit">Login</button>
  </div>
</template>

<script>
import api from '../api'
import { bus } from '../store'

export default {
  data() {
    return {
      login: {
        'username': '',
        'password': '',
      },
    }
  },
  methods: {
    submit(){
      api.post('http://127.0.0.1:8000/api-token-auth/', this.login)
        .then(response => {
          localStorage.setItem('token', response.data.token);
          bus.$emit('login');
          this.$router.push('/');
        })
        .catch(error => console.log(error));
    }
  },
  beforeCreate(){

  }
}
</script>

<style lang="scss" scoped>
.login {
  padding: 20px 25%;
}
</style>
