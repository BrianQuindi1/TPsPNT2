import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import Menu from '../components/Menu.vue'
const routes = [
  { path: '/holamundo', name : "Home",component: Home },
  { path: '/menu', name : "Menu",component: Menu },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
