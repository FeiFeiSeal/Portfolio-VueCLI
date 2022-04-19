import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import About from '../views/aboutMe.vue';


const routes = [
  {
    path: '/',
    name: 'About',
    component: About
  },
  {
    path: '/DrumKit',
    name: 'DrumKit',
    component: () => import('../views/D1_DrumKit.vue')
  },
  {
    path: '/Clock',
    name: 'Clock',
    component: () => import('../views/D2_Clock.vue')
  },
  {
    path: '/Variable',
    name: 'Variable',
    component: () => import('../views/D3_variable.vue')
  },
  {
    path: '/TypeAhead',
    name: 'TypeAhead',
    component: () => import('../views/D6_TypeAhead.vue')
  },
  {
    path: '/Canvas',
    name: 'Canvas',
    component: () => import('../views/D8_Canvas.vue')
  },
  {
    path: '/TodoList',
    name: 'TodoList',
    component: () => import('../views/TodoList.vue')
  },
  {
    path: '/TainanCultureAPI',
    name: 'TainanCultureAPI',
    component: () => import('../views/TainanCultureAPI.vue')
  },
  {
    path: '/layout-kingNews',
    name: 'kingNews',
    component: () => import('../views/layout/kingNews.vue')
  },
  {
    path: '/layout-MAIKON',
    name: 'MAIKON',
    component: () => import('../views/layout/MAIKON.vue')
  },
  {
    path: '/layout-PLATE',
    name: 'PLATE',
    component: () => import('../views/layout/PLATE.vue')
  },
  {
    path: '/Other',
    name: 'Other',
    component: () => import('../views/other.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  // history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
