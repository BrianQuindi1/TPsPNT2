import { createRouter, createWebHistory } from 'vue-router'
import Menu from '../components/Menu.vue'
import Catalogo from '../views/Catalogo.vue'
import FormPost from '../components/FormPost.vue'
import DetalleProducto from '../components/DetalleProducto.vue'

const routes = [
  { path: '/', name : "Home",component: Catalogo },
  { path: '/menu', name : "Menu",component: Menu },
  { path: '/productos', name : "Productos",component: Catalogo},
  { path: '/edit/:id', component: FormPost },
  { path: '/add', component: FormPost },
  { path: '/detalle/:id', component: DetalleProducto },
  { path: '/create', component: FormPost },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
