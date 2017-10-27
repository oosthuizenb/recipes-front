import listRecipes from './components/listRecipes.vue'
import detailRecipe from './components/detailRecipe.vue'
import formRecipe from './components/formRecipe.vue'

export default [
  {path: '/', component: listRecipes},
  {path: '/recipe/add', component: formRecipe},
  {path: '/recipe/:id', component: detailRecipe},
  {path: '/recipe/edit/:id', component: formRecipe}
]
