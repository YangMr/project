import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
const BookcatDetail = resolve => require(['@/components/category/BookcatDetail'], resolve)

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/bookcat/detail',
      name: 'bookcatDetail',
      component: BookcatDetail
    }
  ]
})
