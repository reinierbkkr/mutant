import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'play',
      component: () => import('../views/PatternView.vue')
    },
    {
      path: '/newpattern',
      name: 'new pattern',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NewPatternView.vue')
    },
    {
      path: '/loadpattern',
      name: 'load pattern',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/LoadView.vue')
    }
  ]
})

export default router
