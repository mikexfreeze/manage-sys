// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css';// normalize.css 样式格式化
import 'element-ui/lib/theme-default/index.css' //element默认样式
import 'assets/styles/index.scss'; // 全局自定义的css样式
import 'assets/styles/commen.css';
import 'assets/iconfont/iconfont'; // iconfont
import 'components/Icon-svg/index'; // 封装的svg组件
import './directives'; // 自定义指令
import 'components'; // 自定义全局组件

import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui';

import App from './App'
import router from './router';

import store from './store';
import permission from 'store/permission';
import * as filters from './filters'; // 全局vue filter
Vue.config.productionTip = false
Vue.use(ElementUI)
require('babel-core/register');
// register global utility filters.
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
});

const whiteList = ['/login', '/authredirect', '/reset', '/sendpwd','/register'];// 不重定向白名单
router.beforeEach((to, from, next) => {
  // console.log("循环计数")
  if (store.getters.token) { // 判断是否有token
    // console.log("有token")

    hasUserInfo()
      .then(function () {
        if (to.meta && to.meta.role) {// 判断即将进入的页面是否需要权限
          if (hasPermission(store.getters.roles, to.meta.role)) { // 判断权限
            next(); // 有权限
          } else {
            next({ path: '/401', query: { noGoBack: true } }); // 无权限
          }
        }else{
          next() //不需要权限
        }
      },function () {
        store.dispatch('FedLogOut').then(() => {
          next({ path: '/login' })
        });
        // next('/login'); // 获取用户信息失败重定向到登录页
      })



  } else {
    if (whiteList.indexOf(to.path) !== -1) { // 在免登录白名单，直接进入
      next()
    } else {
      next('/login'); // 否则全部重定向到登录页
      // NProgress.done(); // 在hash模式下 改变手动改变hash 重定向回来 不会触发afterEach 暂时hack方案 ps：history模式下无问题，可删除该行！
    }
  }

});



// permissiom judge
function hasPermission(roles, permissionRoles) {
  // if (roles.indexOf('USER_ADMIN') >= 0) return true; // admin权限 直接通过
  return roles.some(role => permissionRoles.indexOf(role) >= 0)
}

function hasUserInfo(){
  return new Promise((reslove, reject)=>{

    if (store.getters.roles.length < 1) { // 判断当前用户是否已拉取完user_info信息
      store.dispatch('GetInfo').then(res => { // 拉取user_info
        const roles = res.data.role;
        // console.log("获取的用户信息")
        // console.log(res)
        permission.init({ // 初始化权限
          roles: store.getters.roles,
          router: router.options.routes
        })
        reslove()
      },function () {
        reject()
      })
    }else{
      permission.init({ // 初始化权限
        roles: store.getters.roles,
        router: router.options.routes
      })
      // console.log("有role信息")
      reslove()
    }
  })

}

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

export default app
//刷新浏览器时重新定向到首页
// router.push({path:'/'})