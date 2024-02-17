import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import AuthView from '../views/AuthView.vue'
import LoginView from '../views/LoginView.vue'
import RegView from '../views/RegView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },

    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/auth',
      name: 'auth',
      component: AuthView,
      children: [
        {
          path: 'login',
          name: 'Login',
          component: LoginView
        },
        {
          path: 'reg',
          name: 'Reg',
          component: RegView
        }
      ]
    }
  ]
})
import { useCounterStore } from '@/stores/user/auth.ts'
import { ref } from 'vue'
router.beforeEach(async (to, from, next) => {
  const { checkAuth } = useCounterStore()
  const isAuthenticated = await checkAuth()

  console.log(isAuthenticated);

  if (to.name !== 'Login' && !isAuthenticated) next({ name: 'Login' })
  else next()
})

export default router
