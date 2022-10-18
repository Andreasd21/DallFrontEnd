import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
    path: '/info/:Id',
    name: 'info',
    component: () => import('../views/PaintingView.vue'),
    props:true

    },
    {
    path: '/login',
    name: 'login',
    component: () => import('../views/AccountLoginView.vue')
    },
  ]
})

export default router
