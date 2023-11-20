import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import { useTokenStore } from '@/stores/tokenStore'

const tokenStore = useTokenStore()
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        noAuth: true
      }
    },
    {
      path: '/account/login',
      name: 'login',
      component: LoginView,
      meta: {
        noAuth: true
      }
    },
    {
      path: '/account/logout',
      name: 'logout',
      component: () => import('../views/LogoutView.vue')
    },
    {
      path: '/admin/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.noAuth || tokenStore.authFromLocal()) {
    next()
  } else {
    router.push('/account/login')
  }
})

export default router
