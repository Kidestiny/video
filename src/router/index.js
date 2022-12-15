import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index/Index'
import Seevideo from '@/pages/seevideo/Seevideo'
import Upfile from '@/pages/upfile/Upfile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/seevideo',
      name: 'Seevideo',
      component: Seevideo
    },
    {
      path: '/upfile',
      name: 'Upfile',
      component: Upfile
    }
  ]
})
