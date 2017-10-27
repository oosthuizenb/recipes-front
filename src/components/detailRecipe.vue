<template>
  <div class="recipe-body">
    <button @click='viewRecipes'>All recipes</button>
    <button @click='editRecipe'>Edit recipe</button>
    <div class="recipe">
      <h2>Title</h2>
      <h4>Serves: {{}}</h4>
      <h4>Ingredients</h4>
      <ul>
        <li v-for="ingredient in recipe.ingredients">{{ ingredient }}</li>
      </ul>
      <hr>
      <p>Method</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        id: this.$route.params.id,
        recipe: {'ingredients': ['olives', 'feta', 'avo'], 'id': 0}
      }
    },
    methods: {
      viewRecipes(){
        this.$router.push('/');
      },
      editRecipe(){
        this.$router.push('/recipe/edit/' + this.id)
      }
    },
    created(){
      console.log(this.id);
    }
  }
</script>

<style lang="scss" scoped>
.recipe-body{
  button{
    float: left;
  }
}
</style>
