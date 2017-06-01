import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)

/* layout*/
import Layout from '../views/layout/Layout';

/* login*/
import Login from '../views/login';

// dashboard
// const dashboard = resolve => require(['../views/dashboard/index'], resolve);

// dashboard
// const dashboard = resolve => require(['../views/dashboard/index'], resolve);

/* permission */
const Permission = resolve => require(['../views/permission/index'], resolve);

/* active*/
// const activeMsg = import('../views/active/activeMsg').then(function(activeMsg) {
//   return activeMsg
// })
const activeMsg = resolve => import('../views/active/activeMsg/activeMsg.vue').then(function (result) {
  return result
});
// const activeMsg = resolve => require(['../views/active/activeMsg'], resolve);
const activePublic = resolve => require(['../views/active/activePublic.vue'], resolve);

//公共组件
const cButton = resolve => require(['../views/common/cButton.vue'], resolve);
const cInput = resolve => require(['../views/common/cInput.vue'], resolve);
const cSelect = resolve => require(['../views/common/cSelect.vue'], resolve);
const cDate = resolve => require(['../views/common/cDate.vue'], resolve);
const cTree = resolve => require(['../views/common/cTree.vue'], resolve);
const charts = resolve => require(['../views/common/echarts.vue'], resolve);

// 演示页面
const list = resolve => require(['../views/demo/list/list.vue'], resolve);

/* error page*/
const Err404 = resolve => require(['../views/error/404'], resolve);
const Err401 = resolve => require(['../views/error/401'], resolve);

export default new Router({
  routes: [
    { path: '/login', component: Login, hidden: true },
    {
      path: '/',
      component: Layout,
      // redirect: '/dashboard',
      name: '首页',
      hidden: true,
      // children: [{ path: 'dashboard', component: dashboard }]
    },
    {
      path: '/permission',
      component: Layout,
      redirect: '/permission/index',
      name: '权限测试',
      icon: 'quanxian',
      meta: { role: ['ROLE_ADMIN'] }, //页面需要的权限
      // noDropdown: true,
      children: [
        {
          path: 'index',
          component: Permission,
          name: '权限测试页',
          meta: { role: ['ROLE_ADMIN'] }  //页面需要的权限
        }]
    },
    {
      path: '/active',
      component: Layout,
      redirect: '/active/index',
      name: '活动',
      icon: 'zujian',
      children: [
        { path: 'activeMsg', component: activeMsg, name: '活动管理' },
        { path: 'activePublic', component: activePublic, name: '活动发布' }
      ]
    },{
      path: '/common',
      component: Layout,
      redirect: '/common/cButton',
      name: '公共组件',
      icon: 'zujian',
      children: [
        { path: 'cButton', component: cButton, name: '按钮' },
        { path: 'cInput', component: cInput, name: '输入框' },
        { path: 'cSelect', component: cSelect, name: 'select选择器' },
        { path: 'cDate', component: cDate, name: '日期选择' },
        { path: 'cTree', component: cTree, name: '树形控件' },
        { path: 'echarts', component: charts, name: '图表' }
      ]
    },{
      path: '/demo',
      component: Layout,
      redirect: '/demo/list',
      name: '列表展示',
      icon: 'zujian',
      children: [
        { path: 'list', component: list, name: '列表展示' }
      ]
    },

    { path: '/404', component: Err404, hidden: true },
    { path: '/401', component: Err401, hidden: true },
    { path: '*', redirect: '/404', hidden: true }
  ]
})

