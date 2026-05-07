import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pratica1View from '@/views/Pratica1View.vue'
import ExercicioNum1View from '@/views/exercicios/ExercioNum1View.vue'
import ExercicioNum3View from '@/views/exercicios/ExercioNum3View.vue'

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
      component: ExercicioNum1View,
    },
    {
      path: '/exercicio-3',
      name: 'exercicio-3',
      component: ExercicioNum3View,
    },
    
    {
      path: '/pratica-1',
      name: 'pratica-1',
      component: Pratica1View,
    },

  ],
})

export default router
