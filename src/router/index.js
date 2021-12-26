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

  ]
})