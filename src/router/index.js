import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/Home.vue'
import Headquarters from '../views/Home/Headquarters'
import External from '../views/Home/External'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: Home
  },
  // 首页
  {
    path: '/home',
    component: () => import('../views/Home/index'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: Home
      },
      {
        path: '/headquarters',
        name: 'Headquarters',
        component: Headquarters
      },
      {
        path: '/external',
        name: 'External',
        component: External
      }
    ]
  },
  // 新闻资讯
  {
    path: '/news',
    component: () => import('../views/News/layout'),
    children: [
      {
        path: '/news',
        name: 'News',
        component: () => import('@/views/News/Index')
      },
      {
        path: '/news/details',
        name: 'Details',
        component: () => import('@/views/News/Details')
      }
    ]
  },
  // 概括
  {
    path: '/about',
    component: () => import('../views/About/layout'),
    children: [
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/About/About'),
        meta: { title: '概括' }
      },
      {
        path: '/motto',
        name: 'Motto',
        component: () => import('@/views/About/Motto'),
        meta: { title: '座右铭' }
      },
      {
        path: '/mission',
        name: 'Mission',
        component: () => import('@/views/About/Mission'),
        meta: { title: '使命' }
      },
      {
        path: '/superiority',
        name: 'Superiority',
        component: () => import('@/views/About/Superiority'),
        meta: { title: '优势' }
      },
      {
        path: '/socialService',
        name: 'SocialService',
        component: () => import('@/views/About/SocialService'),
        meta: { title: '社会服务' }
      }
    ]
  },
  // 民商法学队
  {
    path: '/team',
    component: () => import('../views/Team/layout'),
    children: [
      {
        path: '/team',
        name: 'Team',
        component: () => import('@/views/Team/TeamDesc')
      },
      {
        path: '/teamDesc',
        name: 'TeamDesc',
        component: () => import('@/views/Team/TeamDesc')
      },
      {
        path: '/teamLeader',
        name: 'TeamLeader',
        component: () => import('@/views/Team/TeamLeader')
      },
      {
        path: '/teamMember',
        name: 'TeamMember',
        component: () => import('@/views/Team/TeamMember')
      },
      {
        path: '/teamService',
        name: 'TeamService',
        component: () => import('@/views/Team/TeamService')
      }
    ]
  },
  //
  {
    path: '/customer',
    name: 'Customer',
    component: () => import('@/views/Customer')
  },
  // 服务领域
  {
    path: '/service',
    component: () => import('../views/Service/layout'),
    children: [
      {
        path: '/service',
        name: 'Service',
        component: () => import('@/views/Service/Service')
      },
      {
        path: '/service/details',
        name: 'ServicesDetails',
        component: () => import('@/views/Service/Details')
      }
    ]
  },
  // 在线咨询
  {
    path: '/consultation',
    name: 'Consultation',
    component: () => import('@/views/Consultation')
  },
  // 金鹏荣誉
  {
    path: '/honor',
    name: 'honor',
    component: () => import('@/views/Honor')
  },
  // 联系我们
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('@/views/Contact')
  }
]

const router = new VueRouter({
  routes
})

export default router
