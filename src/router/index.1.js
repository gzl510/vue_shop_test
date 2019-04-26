import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import Detail from '@/pages/detail'
import A from '@/pages/a'
import B from '@/pages/b'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage,
      redirect: '/Detail', // 设置的默认子路由
      children: [
        {
          path: '/Detail',
          component: Detail
        },
        {
          path: '/A',
          component: A
        },
        {
          path: '/B',
          component: B
        }
      ]
    }
  ]
})
