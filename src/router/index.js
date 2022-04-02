import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import D1 from '../views/D1_DrumKit.vue';


const routes = [
  {
    path: '/',
    name: 'D1',
    component: D1
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
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: [{ path: '/:pathMatch(.*)', component: NotFoundComponent }],
})

export default router
