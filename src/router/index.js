import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import home from '@/views/home.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/about.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/views/contact.vue')
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

      const userPermissions = authStore.user?.permissions || []

      if (to.meta.permissions) {
        const hasPermission = to.meta.permissions.every(permission => userPermissions.includes(permission))
        if (!hasPermission) {
          next({ name: '403' })

          return
        }
      }

      next()
    } catch (error) {
      next({ name: 'login' })
    }
  } else if (to.meta.requiresUnauth && authStore.token) {
    next({ name: 'dashboard' })
  } else {
    next()
  }
})


export default router
