import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Notice from '@/pages/notice'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/notice',
      name: 'Notice',
      component: Notice
    }
  ]
})
