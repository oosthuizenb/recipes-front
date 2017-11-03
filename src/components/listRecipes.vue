<template>
  <div class="recipe-body">
    <button @click="addRecipe">Add Recipe</button>
    <div v-for="(recipe, index) in recipes" :key="recipe.id" @click="viewRecipe(recipe.id)" class="recipe">
      <h2>{{ recipe.title }}</h2>
      <h4>Serves: {{ recipe.serves }}</h4>
    </div>
  </div>
</template>

<script>
import api from '../api'

  export default {
    data() {
      return {
        recipes: []
      }
    },
    methods: {
      viewRecipe(id) {
        console.log(this.recipes);
        this.$router.push('/recipe/' + id);
      },
      addRecipe(){
        this.$router.push('/recipe/add');
      }
  },
  created(){
    api.get('http://127.0.0.1:8000/api/recipes/')
      .then(response => this.recipes = response.data)
      .catch(error => console.log(error));
  }
}
</script>

<style lang="scss" scoped>

</style>
