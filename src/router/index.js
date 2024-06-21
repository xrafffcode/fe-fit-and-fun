import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home,
      meta: { requiresAuth: false }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/trial',
      name: 'trial',
      component: () => import('@/views/trial.vue'),
      meta: { requiresAuth: false }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('@/views/attendance.vue'),
      meta: { requiresAuth: true },
    },
    {
      path: '/attendance-history',
      name: 'attendance-history',
      component: () => import('@/views/attendance-history.vue'),
      meta: { requiresAuth: true },
    }
  ]
})


router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()

  window.scrollTo(0, 0)

  if (to.meta.requiresAuth) {
    try {
      if (!authStore.user) {
        await authStore.checkAuth()
      }

      next()
    } catch (error) {
      next({ name: 'home' })
    }
  } else {
    next()
  }
})

export default router
