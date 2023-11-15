import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

router.beforeEach((to, _, next) => {

  if (!to.matched.length) {
    next({ name: 'login' })
  }

  document.title = `${to.name as string} | SPRINT GAMING`.toUpperCase()

  next()
})

export default router
