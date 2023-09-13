import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
// import homePage from '@/views/home/homePage'
import generalize from '@/views/generalize/generalize'

Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   redirect: '/home'
    // },
    // {
    //   path: '/',
    //   name: 'homePage',
    //   component: homePage
    // }
    {
      path: '/generalize',
      name: 'generalize',
      component: generalize
    }
  ]
})
