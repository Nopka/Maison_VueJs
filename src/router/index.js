import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cuisine from '../views/Cuisine.vue'
import Salon from '../views/Salon.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cuisine',
    name: 'Cuisine',
    component: Cuisine
  }, 
  {
    path: '/salon',
    name: 'Salon',
    component: Salon
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
