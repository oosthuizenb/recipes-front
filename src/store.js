import Vue from 'vue'

export const bus = new Vue({})
bus.isLogged = false

bus.$on('login', function (){
  this.isLogged = true;
})

bus.$on('logout', function (){
  this.isLogged = false;
})
