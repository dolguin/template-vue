import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/:pathName(.*)', component: () => import('@/views/error/404.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
