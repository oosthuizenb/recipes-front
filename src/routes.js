import listRecipes from './components/RecipeList.vue'
import detailRecipe from './components/RecipeDetail.vue'
import formRecipe from './components/RecipeForm.vue'
import login from './components/Login.vue'

export default [
  {path: '/', component: listRecipes},
  {path: '/login', component: login},
  {path: '/recipe/add', component: formRecipe},
  {path: '/recipe/:id', component: detailRecipe},
  {path: '/recipe/edit/:id', component: formRecipe},
]
