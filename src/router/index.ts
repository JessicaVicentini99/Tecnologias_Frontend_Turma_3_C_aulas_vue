import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ExercioNum1View from '@/views/ExercioNum1View.vue'
import Pratica1View from '@/views/Pratica1View.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/exercicio-1',
      name: 'exercicio-1',
      component: ExercioNum1View,
    },
    {
      path: '/pratica-1',
      name: 'pratica-1',
      component: Pratica1View,
    },

  ],
})

export default router
