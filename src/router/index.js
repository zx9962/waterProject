import Vue from 'vue'
import Router from 'vue-router'

import userFeedback from '@/views/userFeedback/userFeedback'
import week from '@/views/userFeedback/children/week'
import year from '@/views/userFeedback/children/year'
import threeMonth from '@/views/userFeedback/children/threeMonth'
import oneMonth from '@/views/userFeedback/children/oneMonth'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
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
    }
  ]
})
