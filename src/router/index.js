import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { auth } from "../firebase/config"

const requireAuth = (to, from, next)=>{
  let user = auth.currentUser;
  if (!user) {
    next({name: 'SignIn'})
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
  if (savedPosition) {
      return savedPosition
  }
  return {
    top: 0,
    behavior: "smooth"
  }
  },
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
      component: () => import('../views/CampDetailsView.vue'),
      props: true
    },
    {
      path: '/comment',
      name: 'CommentsView',
      component: () => import('../views/forms/CommentsView.vue'),
      props: true,
      beforeEnter: requireAuth
    },
    {
      path: '/addcamp',
      name: 'AddCampgroundView',
      component: () => import('@/views/forms/AddCampgroundView.vue'),
      beforeEnter: requireAuth
    },
    {
      path: '/login',
      name: 'SignIn',
      component: () => import('@/views/forms/SignIn.vue')
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: () => import('@/views/forms/SignUp.vue')
    },
  ]
})

export default router
