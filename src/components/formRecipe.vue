<template>
  <div class="form-recipe recipe-body">
    <button @click="viewList">View recipes</button>
    <div class="recipe">
      <h2>Add Recipe</h2>
      <form>
        <label>Title</label>
        <input type="text" v-model='recipe.title'>
        <label>Serves(amount)</label>
        <input type="text" v-model='recipe.serves'>
        <label>Ingredients</label>
        <input type="text" v-model='recipe.ingredients'>
        <label>Method</label>
        <textarea rows="8" cols="80"></textarea>
        <button @click.prevent="onSubmit">Add</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      id: this.$route.params.id,
      recipe: {
        'title': '',
        'serves': '',
        'ingredients': [],
        'method': ''
      }
    }
  },
  methods: {
    onSubmit(){
      console.log(this.recipe.title);
      this.viewList();
    },
    viewList(){
      this.$router.push('/');
    }
  }
}
</script>

<style lang="scss">
.form-recipe{
  button{
    float: none;
    margin: 10px 0;
    padding: 6px 10px;
  }

  label{
    display: block;
    padding: 10px 0;
  }

  textarea{
    max-width: 100%;
    resize: vertical;
    height: 200px;
  }
}
</style>
