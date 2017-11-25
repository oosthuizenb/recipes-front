<template>
  <div class="recipe-body">
    <button @click='viewList'>All recipes</button>
    <button @click='editRecipe'>Edit</button>
    <button @click='deleteRecipe'>Delete</button>
    <div class="recipe">
      <h2>{{ recipe.title }}</h2>
      <img v-if="recipe.image != null" :src="recipe.image" alt="Recipe photo">
      <h4>Serves: {{ recipe.serves }}</h4>
      <h4>Chef: {{ recipe.owner }}</h4>
      <h4>Ingredients</h4>
      <ul>
        <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
      </ul>
      <hr>
      <p>{{ recipe.method }}</p>
    </div>
  </div>
</template>

<script>
import api from '../api'

  export default {
    data() {
      return {
        id: this.$route.params.id,
        recipe: {}
      }
    },
    methods: {
      viewList(){
        this.$router.push('/');
      },
      editRecipe(){
        this.$router.push('/recipe/edit/' + this.id)
      },
      deleteRecipe(){
        api.delete('http://127.0.0.1:8000/api/feed/' + this.id + '/')
          .then(response => this.viewList())
          .catch(error => console.log(error))
      }
    },
    created(){
      api.get('http://127.0.0.1:8000/api/feed/' + this.id)
        .then(response => {
          this.recipe = response.data;
          this.recipe.ingredients = response.data.ingredients.split(',');
        })
        .catch(error => console.log(error))

    }
  }
</script>

<style lang="scss" scoped>
.recipe-body{
  button{
    float: left;
  }

  .recipe{
    img{
      width: 100%;
    }
  }
}
</style>
