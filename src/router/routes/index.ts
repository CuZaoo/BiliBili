import type { RouteRecordRaw } from 'vue-router'

/**
 * 路由配置
 * @description 所有路由都在这里集中管理
 */
const routes: RouteRecordRaw[] = [
  /**
   * 首页
   */
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/home.vue'),
    meta: {
      title: 'Home',
      needLogin: false,
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
    meta: {
      title: 'Login',
      needLogin: true,
    },
  },
  {
    path: '/video',
    name: 'video',
    component: () => import('@/views/video/video.vue'),
    meta: {
      title: 'video',
      needLogin: true,
    },
  },
  {
    path: '/video/details',
    name: 'details',
    component: () => import('@/views/video/videoDetails.vue'),
  },
  // /**
  //  * 子路由示例
  //  */
  // {
  //   path: '/foo',
  //   name: 'foo',
  //   component: () => import('@/components/TransferStation.vue'),
  //   meta: {
  //     title: 'Foo',
  //   },
  //   redirect: {
  //     name: 'bar',
  //   },
  //   children: [
  //     {
  //       path: 'bar',
  //       name: 'bar',
  //       component: () => import('@/views/foo/bar.vue'),
  //       meta: {
  //         title: 'Bar',
  //       },
  //     },
  //   ],
  // },
]

export default routes
