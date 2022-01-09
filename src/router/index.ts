import { createRouter, createWebHistory } from 'vue-router'
import AuthRouter from '@/modules/auth/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [...AuthRouter],
})

export default router
