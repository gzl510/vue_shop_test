import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import IndexPage from '@/pages/index'
import DetailPage from '@/pages/detail'
import OrderList from '@/pages/orderList'
import Forecast from '@/pages/details/forecast'
import Analysis from '@/pages/details/analysis'
import Count from '@/pages/details/count'
import Publish from '@/pages/details/publish'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: IndexPage
    },
    {
      path: '/orderList',
      component: OrderList
    },
    {
      path: '/detail',
      component: DetailPage,
      redirect: '/detail/analysis',
      children: [
        {
          path: 'forecast',
          component: Forecast
        },
        {
          path: 'analysis',
          component: Analysis
        },
        {
          path: 'count',
          component: Count
        },
        {
          path: 'publish',
          component: Publish
        }
      ]
    }
  ]
})
