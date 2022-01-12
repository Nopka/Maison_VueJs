import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cuisine from '../views/Cuisine.vue'
import Salon from '../views/Salon.vue'
import Grenier from '../views/Grenier.vue'
import Chambre from '../views/Chambre.vue'

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
  },
  {
    path: '/grenier',
    name: 'Grenier',
    component: Grenier
  },
  {
    path: '/chambre',
    name: 'Chambre',
    component: Chambre
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
