<template>
  <div class="recipe-body">
    <button @click="addRecipe">Add Recipe</button>
    <button @click="allRecipes" v-if="isMine">All recipes</button>
    <button @click="myRecipes" v-if="!isMine && isLogged">My Recipes</button>
    <button @click="logout" v-if="isLogged">Logout</button>
    <button @click="login" v-else>Login</button>
    <button @click="refreshToken">Refresh</button>
    <div v-for="(recipe, index) in recipes" :key="recipe.id" @click="viewRecipe(recipe.id)" class="recipe">
      <h2>{{ recipe.title }}</h2>
      <h4>Serves: {{ recipe.serves }}</h4>
      <h4>Chef: {{ recipe.owner }}</h4>
    </div>
  </div>
</template>

<script>
import api from '../api'
import {bus} from '../store'

export default {
  data() {
    return {
      isLogged: bus.isLogged,
      isMine: false,
      recipes: []
    }
  },
  methods: {
    viewRecipe(id) {
      this.$router.push('/recipe/' + id);
    },
    addRecipe(){
      this.$router.push('/recipe/add');
    },
    myRecipes(){
      api.get('http://127.0.0.1:8000/api/recipes/', {
        headers: {
          'Authorization': 'JWT ' + localStorage.getItem('token')
        }
      })
        .then(response => {
          this.recipes = response.data;
          this.isMine = true;
        })
        .catch(error => console.log(error))
    },
    allRecipes(){
      api.get('http://127.0.0.1:8000/api/feed/')
        .then(response => {
          this.recipes = response.data;
          this.isMine = false;
        })
        .catch(error => console.log(error))
    },
    login(){
      this.$router.push('/login');
    },
    logout(){
      localStorage.setItem('token', '');
      bus.$emit('logout');
      this.$router.go();
    },
    refreshToken(){
      api.post('http://127.0.0.1:8000/api-token-refresh/',{
        token: localStorage.getItem('token')
      })
        .then(response => {
          localStorage.setItem('token', response.data.token);
        })
        .catch(error => console.log(error));
    }
  },
  created(){
    api.get('http://127.0.0.1:8000/api/feed/')
      .then(response => this.recipes = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style lang="scss" scoped>

</style>
