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
        <div v-for="(ingredient,index) in recipe.ingredients">
          <input type="text" v-model='recipe.ingredients[index]'>
          <button v-if="index > 0" @click.prevent="deleteIng(index)">x</button>
        </div>
        <br>
        <button @click.prevent="newIng">New</button>
        <label>Method</label>
        <textarea rows="8" cols="80" v-model='recipe.method'></textarea>
        <button @click.prevent="onSubmit">Submit</button>
      </form>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  data(){
    return {
      id: this.$route.params.id,
      recipe: {
        'title': '',
        'serves': '',
        'ingredients': [''],
        'method': ''
      }
    }
  },
  methods: {
    onSubmit(){
      this.recipe.ingredients = this.recipe.ingredients.join();
      // If the form is for editing, else it is for adding new recipe
      if(this.id){
        api.put('http://127.0.0.1:8000/api/recipes/' + this.id + '/', this.recipe)
          .then(response => this.viewDetail(this.id))
          .catch(error => console.log(error))
      } else {
        api.post('http://127.0.0.1:8000/api/recipes/', this.recipe, {
          headers: {
            'Authorization': 'JWT ' + localStorage.getItem('token')
          }
        })
          .then(response => {
            this.recipe = response.data;
            this.viewDetail(this.recipe.id);
          })
          .catch(error => console.log(error));
        }
    },
    deleteIng(index){
      this.recipe.ingredients.splice(index, 1);
    },
    newIng(){
      this.recipe.ingredients.push('');
    },
    viewList(){
      this.$router.push('/');
    },
    viewDetail(id){
      this.$router.push('/recipe/' + id);
    }
  },
  created(){
    if(this.id){
      api.get('http://127.0.0.1:8000/api/recipes/' + this.id)
        .then(response => {
          this.recipe = response.data;
          this.recipe.ingredients = response.data.ingredients.split(',');
        })
        .catch(error => console.log(error));
    }
  },
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
