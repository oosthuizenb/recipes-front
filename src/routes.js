import listRecipes from './components/listRecipes.vue'
import detailRecipe from './components/detailRecipe.vue'
import formRecipe from './components/formRecipe.vue'
import login from './components/login.vue'

export default [
  {path: '/', component: listRecipes},
  {path: '/login', component: login},
  {path: '/recipe/add', component: formRecipe},
  {path: '/recipe/:id', component: detailRecipe},
  {path: '/recipe/edit/:id', component: formRecipe},
]
