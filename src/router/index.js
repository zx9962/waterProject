import Vue from 'vue'
import Router from 'vue-router'
import portrayal from '@/views/portrayal/portrayal'
import homePage from '@/views/home/homePage'
import login from '@/views/login/login'
import equipment from '@/views/equipment/equipment'
import generalize from '@/views/generalize/generalize'
import userFeedback from '@/views/userFeedback/userFeedback'
import week from '@/views/userFeedback/children/week'
import year from '@/views/userFeedback/children/year'
import threeMonth from '@/views/userFeedback/children/threeMonth'
import oneMonth from '@/views/userFeedback/children/oneMonth'
import dataAnalysis from '@/views/dataAnalysis/dataAnalysis'
import d1 from '@/views/dataAnalysis/children/d1'
import d2 from '@/views/dataAnalysis/children/d2'
import d3 from '@/views/dataAnalysis/children/d3'
import d4 from '@/views/dataAnalysis/children/d4'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/home',
      name: 'homePage',
      component: homePage,
      children: [
        {
          path: '/equip',
          name: 'equipment',
          component: equipment
        },
        {
          path: '/portrayal',
          name: 'portrayal',
          component: portrayal
        },
        {
          path: '/generalize',
          name: 'generalize',
          component: generalize
        },
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
        },
        {
          path: '/dataAnalysis',
          name: 'dataAnalysis',
          component: dataAnalysis,
          redirect: '/dataAnalysis/d1',
          children: [
            {
              path: 'd1',
              component: d1
            },
            {
              path: 'd2',
              component: d2
            },
            {
              path: 'd3',
              component: d3
            },
            {
              path: 'd4',
              component: d4
            }
          ]
        }
      ]
    }
  ]
})
