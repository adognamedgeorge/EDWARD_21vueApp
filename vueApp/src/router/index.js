import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Notice from '@/pages/notice'
import Phone from '@/pages/phone'
import Code from '@/pages/code'
import Book from '@/pages/telbook'
import Work from '@/pages/workplatform'
import Mine from '@/pages/mine'
import Second from '@/components/secondItem'
import Returns from '@/components/workComponents/returns'
import OrderDetail from '@/components/workComponents/orderDetail'
import ReturnDetail from '@/components/workComponents/returnDetail'
import ReturnInquire from '@/components/workComponents/returnInquire'
import Set from '@/components/set'

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
    },
    {
      path: '/book',
      name: 'Book',
      component: Book
    },
    {
      path: '/work',
      name: 'Work',
      component: Work
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/secondItem',
      name: 'Second',
      component: Second
    },
    {
      path: '/returns',
      name: 'Returns',
      component: Returns
    },
    {
      path: '/orderDetail',
      name: 'OrderDetail',
      component: OrderDetail
    },
    {
      path: '/returnDetail',
      name: 'ReturnDetail',
      component: ReturnDetail
    },
    {
      path: '/returnInquire',
      name: 'ReturnInquire',
      component: ReturnInquire
    },
    {
      path: '/set',
      name: 'Set',
      component: Set
    }
  ]
})
