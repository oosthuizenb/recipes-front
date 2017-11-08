import Vue from 'vue'
import axios from 'axios'
import VueRouter from 'vue-router'

import Routes from './routes'
import App from './App.vue'

Vue.prototype.axios = axios

Vue.use(VueRouter)

const router = new VueRouter({
  routes: Routes,
  mode: 'history'
})

export const bus = new Vue({})


new Vue({
  el: '#app',
  render: h => h(App),
  router: router
})
