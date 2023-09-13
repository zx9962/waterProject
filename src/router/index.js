import Vue from 'vue'
import Router from 'vue-router'
import portrayal from '@/views/portrayal/portrayal'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/portrayal',
      name: 'portrayal',
      component: portrayal
    }
  ]
})
