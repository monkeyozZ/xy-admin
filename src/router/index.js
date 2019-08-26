import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '首页', icon: 'dashboard', affix: true }
    }]
  },

  {
    path: '/generalize',
    component: Layout,
    redirect: '/generalize/page',
    name: 'Generalize',
    meta: { title: '推广管理', icon: 'generalize' },
    children: [
      {
        path: 'page',
        name: 'Page',
        component: () => import('@/views/generalize/page'),
        meta: { title: '推广页面', icon: 'page' }
      },
      {
        path: 'place',
        name: 'Place',
        component: () => import('@/views/generalize/place'),
        meta: { title: '渠道管理', icon: 'place' }
      },
      {
        path: 'link',
        name: 'Link',
        component: () => import('@/views/generalize/link'),
        meta: { title: '推广链接', icon: 'link' }
      }
    ]
  },
  {
    path: '/data',
    component: Layout,
    redirect: '/data/realtime',
    name: 'Data',
    meta: { title: '数据管理', icon: 'data' },
    children: [
      {
        path: 'realtime',
        name: 'Realtime',
        component: () => import('@/views/data/realtime'),
        meta: { title: '实时数据', icon: 'realtime' }
      },
      {
        path: 'realtimeStatistics',
        name: 'RealtimeStatistics',
        component: () => import('@/views/data/realtimeStatistics'),
        meta: { title: '实时数据统计', icon: 'realtimeStatistics' }
      },
      {
        path: 'external',
        name: 'External',
        component: () => import('@/views/data/external'),
        meta: { title: '外部数据', icon: 'external' }
      },
      {
        path: 'externalStatistics',
        name: 'ExternalStatistics',
        component: () => import('@/views/data/externalStatistics'),
        meta: { title: '外部数据统计', icon: 'externalStatistics' }
      },
      {
        path: 'port',
        name: 'Port',
        component: () => import('@/views/data/port'),
        meta: { title: '接口测试数据', icon: 'port' }
      }
    ]
  },
  {
    path: '/uv',
    component: Layout,
    redirect: '/uv/index',
    name: 'Uv',
    meta: { title: 'uv统计', icon: 'uv' },
    children: [
      {
        path: 'details',
        name: 'UvDetails',
        component: () => import('@/views/uv/details'),
        meta: { title: 'uv明细', icon: 'uvDetails' }
      }
    ]
  },
  {
    path: '/supermarket',
    component: Layout,
    redirect: '/supermarket/proManage',
    name: 'Supermarket',
    meta: { title: '贷超产品', icon: 'supermarket' },
    children: [
      {
        path: 'promanage',
        name: 'ProManage',
        component: () => import('@/views/supermarket/proManage'),
        meta: { title: '产品管理', icon: 'promanage' }
      },
      {
        path: 'clickdetails',
        name: 'ClickDetails',
        component: () => import('@/views/supermarket/clickDetails'),
        meta: { title: '产品点击明细', icon: 'clickdetails' }
      },
      {
        path: 'clickstatistics',
        name: 'ClickStatistics',
        component: () => import('@/views/supermarket/clickStatistics'),
        meta: { title: '产品点击统计', icon: 'clickstatistics' }
      }
    ]
  },
  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'example' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/tree/index'),
        meta: { title: 'Tree', icon: 'tree' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/nested/menu2/index'),
        meta: { title: 'menu2' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'https://panjiachen.github.io/vue-element-admin-site/#/',
        meta: { title: 'External Link', icon: 'link' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const asyncRoutes = []

const createRouter = () => new Router({
  mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
