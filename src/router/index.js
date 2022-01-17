import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      meta: {layout: 'main'},
      component: () => import('@/views/Home.vue'),
      props: true
    },
    {
      path: '/basket',
      name: 'basket',
      meta: {layout: 'main'},
      component: () => import('@/views/Basket.vue'),
      props: true
    },
    {
      path: '/garage',
      name: 'garage',
      meta: {layout: 'main'},
      component: () => import('@/views/Garage.vue'),
      props: true
    },
    {
      path: '/login',
      name: 'login',
      meta: {layout: 'main'},
      component: () => import('@/views/Login.vue'),
      props: true
    },
    {
      path: '/register',
      name: 'register',
      meta: {layout: 'main'},
      component: () => import('@/views/Register.vue'),
      props: true
    }
  ]
})