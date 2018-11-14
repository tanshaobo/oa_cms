import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

const Main = r => require.ensure([], () => r(require('@/page/Main/Main')), 'mian') // 主结构
const Organization = r => require.ensure([], () => r(require('@/page/Organization/Organization')), 'organization') // 组织架构
const StaffInfo = r => require.ensure([], () => r(require('@/page/Organization/children/StaffInfo')), 'staffInfo') // 组织架构下员工信息
const OperateRecord = r => require.ensure([], () => r(require('@/page/Organization/children/OperateRecord')), 'operateRecord') // 组织架构下历史记录

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/Main'
    },
    {
      path: '/Main',
      component: Main,
      children: [
        {
          path: '',
          redirect: '/Organization'
        },
        {
          path: '/Organization',
          component: Organization
        },
        {
          path: '/Organization/StaffInfo',
          component: StaffInfo
        },
        {
          path: '/Organization/OperateRecord',
          component: OperateRecord
        }
      ]
    }
  ],
  mode: routerMode
})

//  router.beforeEach((to, from, next) => {
//    if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
//      if (store.state.token) { // 通过vuex state获取当前的token是否存在
//        next()
//      } else {
//        next({
//          path: '/login',
//          query: {redirect: to.fullPath} // 将跳转的路由path作为参数，登录成功后跳转到该路由
//        })
//      }
//    } else {
//      next()
//    }
//  })

export default router
