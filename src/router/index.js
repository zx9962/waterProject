import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
// import homePage from '@/views/home/homePage'
import generalize from '@/views/generalize/generalize'
=======

import userFeedback from '@/views/userFeedback/userFeedback'
import week from '@/views/userFeedback/children/week'
import year from '@/views/userFeedback/children/year'
import threeMonth from '@/views/userFeedback/children/threeMonth'
import oneMonth from '@/views/userFeedback/children/oneMonth'
>>>>>>> affea4620a8e7c30a4795c8f17bc946e3bbbc362

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
<<<<<<< HEAD
    // {
    //   path: '/',
    //   name: 'homePage',
    //   component: homePage
    // }
    {
      path: '/generalize',
      name: 'generalize',
      component: generalize
=======
    {
      path: '/userFeedback',
      name: 'userFeedback',
      component: userFeedback,
      children: [
        {
          path: 'week',
          component: week
        },
        {
          path: 'year',
          component: year
        },
        {
          path: 'threeMonth',
          component: threeMonth
        },
        {
          path: 'oneMonth',
          component: oneMonth
        }
      ]
>>>>>>> affea4620a8e7c30a4795c8f17bc946e3bbbc362
    }
  ]
})
