import { createRouter, createWebHistory } from 'vue-router'
import AppView from '@/views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/barbeiroApp',
      name: 'app',
      component: AppView,
    },
    {
      path: '/ganhos',
      name: 'ganhos',
      component: () => import('../views/GanhosView.vue'),
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },
  ],
})

export default router
