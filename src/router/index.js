import Vue from 'vue'
import Router from 'vue-router'
//import Home from '@/views/Home.vue'
import DevStratux from '@/components/DevStratux'

Vue.use(Router)

export default new Router({
  mode: process.env.CORDOVA_PLATFORM ? 'hash' : 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'DevStratux',
      component: DevStratux
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    }
  ]
})
