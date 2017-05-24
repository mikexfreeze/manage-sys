import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'

Vue.use(Router)
console.log("router")

/* layout*/
import Layout from '../views/layout/Layout';

/* login*/
import Login from '../views/login';

// dashboard
// const dashboard = resolve => require(['../views/dashboard/index'], resolve);

// dashboard
// const dashboard = resolve => require(['../views/dashboard/index'], resolve);

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
      path: '/',
      name: 'Hello',
      component: Hello
    }
  ]
})
