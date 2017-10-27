<template>
  <div id="app">
    <!-- <list-recipes></list-recipes> -->
    <!-- <detail-recipe></detail-recipe> -->
    <!-- <form-recipe></form-recipe> -->
    <router-view></router-view>
  </div>
</template>

<script>
import listRecipes from './components/listRecipes.vue'
import detailRecipe from './components/detailRecipe.vue'
import formRecipe from './components/formRecipe.vue'

export default {
  components: {
    'list-recipes': listRecipes,
    'detail-recipe': detailRecipe,
    'form-recipe': formRecipe
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss">
.recipe-body{
  padding: 10px 25%;

  button{
    float: right;
  }

  .recipe{
    border: 1px solid grey;
    clear: both;
    cursor: pointer;
    margin: 10px 0;
    padding: 15px 20px;
    width: 100%;

    h2{
      font-size: 30px;
      padding: 20px 0px 30px 0px;
      text-align: center;
    }

    h4{
      font-size: 20px;
      padding: 15px 0;
    }

    ul{
      padding: 10px 15px;
      list-style: initial;

      li{
        padding: 4px 0;
      }
    }

    p{
      padding: 15px 0;
    }
  }
}
</style>
