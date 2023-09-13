import Vue from 'vue'
import Router from 'vue-router'
<<<<<<< HEAD
import portrayal from '@/views/portrayal/portrayal'
=======
<<<<<<< HEAD
// import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import homePage from '@/views/home/homePage'
import login from '@/views/login/login'
=======
// import homePage from '@/views/home/homePage'
<<<<<<< HEAD
import equipment from '@/views/equipment/equipment'
=======
import generalize from '@/views/generalize/generalize'
=======

import userFeedback from '@/views/userFeedback/userFeedback'
import week from '@/views/userFeedback/children/week'
import year from '@/views/userFeedback/children/year'
import threeMonth from '@/views/userFeedback/children/threeMonth'
import oneMonth from '@/views/userFeedback/children/oneMonth'
>>>>>>> affea4620a8e7c30a4795c8f17bc946e3bbbc362
>>>>>>> a6468cc5487a049dfed9244792072f491cc9e234
>>>>>>> 2e3c86295f8782234bd0a6c89f7ce8245450aa77
>>>>>>> 92c7d5fcdea939d7e158f0754d34be6c9a0981a8

Vue.use(Router)

export default new Router({
  routes: [
<<<<<<< HEAD
  // {
  //   path: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/',
  //   name: 'homePage',
  //   component: homePage
  // },
    {
      path: '/equip',
      name: 'equipment',
      component: equipment
=======
<<<<<<< HEAD
    {
      path: '/portrayal',
      name: 'portrayal',
      component: portrayal
=======
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
<<<<<<< HEAD
      path: '/',
      name: 'homePage',
      component: homePage
    },
    {
      path: '/login',
      name: 'login',
      component: login
=======
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
>>>>>>> a6468cc5487a049dfed9244792072f491cc9e234
>>>>>>> 2e3c86295f8782234bd0a6c89f7ce8245450aa77
>>>>>>> 92c7d5fcdea939d7e158f0754d34be6c9a0981a8
    }
  ]
})
