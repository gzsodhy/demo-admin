import { RouteRecordRaw, RouterView } from 'vue-router'

const routes:RouteRecordRaw = {
  path: 'permission',
  name: 'permission',
  component: RouterView,
  meta: {
    title: '设置'
  },
  children: [
    {
      path: 'admin',
      name: 'permission-admin',
      component: () => import('@/views/permission/admin/index.vue'),
      meta: {
        title: '管理列表'
      }
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/permission/role/index.vue'),
      meta: {
        title: '权限列表'
      }
    },
    {
      path: 'rule',
      name: 'rule',
      component: () => import('@/views/permission/rule/index.vue'),
      meta: {
        title: '角色列表'
      }
    }
  ]

}
export default routes
