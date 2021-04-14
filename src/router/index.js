import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import MyMemes from '../views/MyMemes.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/MyMemes',
    name: 'MyMemes',
    component: MyMemes
  }
]

const router = new VueRouter({
  routes
})

export default router
