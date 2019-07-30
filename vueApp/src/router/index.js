import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Notice from '@/pages/notice'
import Phone from '@/pages/phone'
import Code from '@/pages/code'

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
    },
    {
      path: '/phone',
      name: 'Phone',
      component: Phone
    },
    {
      path: '/code',
      name: 'Code',
      component: Code
    }
  ]
})
