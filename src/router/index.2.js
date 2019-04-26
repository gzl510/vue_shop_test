import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import Info from '@/pages/info'
import A from '@/pages/a'
import B from '@/pages/b'
import C from '@/pages/c'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
      redirect: 'Info',
      children: [
        {
          path: '/Info',
          component: Info
        },
        {
          path: '/A',
          component: A
        },
        {
          path: '/B',
          component: B
        },
        {
          path: '/C',
          component: C
        }
      ]
    }
  ]
})
