import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'
import Login from '@/views/login/login.vue'
import Admin from '@/views/admin/index.vue'
// import Dashboard from '@/views/admin/dashboard/index.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/login', component: Login },
  {
    path: '/admin',
    component: Admin,
    children: [
      { path: '', component: () => import('@/views/admin/dashboard/index.vue') }
      // { path: 'dashboard', component: () => import('@/views/admin/dashboard/index.vue') }
    ]
  },
  { path: '/:pathName(.*)', component: () => import('@/views/error/404.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
