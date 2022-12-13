import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/campgrounds',
      name: 'campgrounds',
      component: () => import('../views/CampGroundsView.vue')
    },
    {
      path: '/camps/:id',
      name: 'CampDetailsView',
      component: () => import('../views/CampDetailsView.vue')
    },
    {
      path: '/comment',
      name: 'CommentsView',
      component: () => import('../views/forms/CommentsView.vue')
    },
    {
      path: '/addcamp',
      name: 'AddCampgroundView',
      component: () => import('@/views/forms/AddCampgroundView.vue')
    },
  ]
})

export default router
