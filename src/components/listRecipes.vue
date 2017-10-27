<template>
  <div class="recipe-body">
    <button @click="addRecipe">Add Recipe</button>
    <div v-for="recipe in recipes" :key="recipe.id" @click="viewRecipe(recipe.id)" class="recipe">
      <h2>Title</h2>
      <h4>Serves: {{}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        recipes: [
          {'ingredients': ['olives', 'feta', 'avo'], 'id': 0},
          {'ingredients': ['olives', 'feta', 'avo'], 'id': 0},
          {'ingredients': ['olives', 'feta', 'avo'], 'id': 0}
        ]
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

  }
}
</script>

<style lang="scss" scoped>

</style>
