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
import agent from '@/views/agent/agent'
import data from '@/views/agent/children/data'
import password from '@/views/agent/children/password'

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
          path: '/agent',
          name: 'agent',
          component: agent,
          redirect: '/password',
          children: [
            {
              path: '/password',
              name: 'password',
              component: password
              // children: [] // 三级路由
            },
            {
              path: '/data',
              name: 'dataA',
              component: data
            }
          ]
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
        }
      ]
    }
  ]
})
