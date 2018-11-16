import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/story',
      name: 'story',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Story.vue')
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: () => import('./views/Introduction.vue')
    },
    {
      path: '/character',
      name: 'character',
      component: () => import('./views/Character.vue')
    },
    {
      path: '/hint',
      name: 'hint',
      component: () => import('./views/Hint.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('./views/Team.vue')
    },
  ]
})
