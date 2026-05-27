import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Pratica1View from '@/views/Pratica1View.vue'
import ExercicioNum1View from '@/views/exercicios/ExercioNum1View.vue'
import ExercicioNum3View from '@/views/exercicios/ExercioNum3View.vue'
import ExercicioNum4View from '@/views/exercicios/ExercioNum4View.vue'
import ExercicioNum2View from '@/views/exercicios/ExercioNum2View.vue'
import HooksView from '@/views/HooksView.vue'
import ExerciciosListView from '@/views/exercicios/ExerciciosListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/exercicios/:numero?',
      name: 'exercicios',
      component: ExerciciosListView,
    },
    {
      path: '/exercicio-1',
      name: 'exercicio-1',
      component: ExercicioNum1View,
    },
    {
      path: '/exercicio-2',
      name: 'exercicio-2',
      component: ExercicioNum2View,
    },
    {
      path: '/exercicio-3',
      name: 'exercicio-3',
      component: ExercicioNum3View,
    },
    {
      path: '/exercicio-4',
      name: 'exercicio-4',
      component: ExercicioNum4View,
    },
    {
      path: '/pratica-1',
      name: 'pratica-1',
      component: Pratica1View,
    },
    {
      path: '/hooks',
      name: 'hooks',
      component: HooksView,
    },
  ],
})

export default router
