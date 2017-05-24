// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'normalize.css/normalize.css';// normalize.css 样式格式化
import 'element-ui/lib/theme-default/index.css' //element默认样式
import 'styles/index.scss'; // 全局自定义的css样式
import 'assets/iconfont/iconfont'; // iconfont
import 'components/Icon-svg/index'; // 封装的svg组件

import Vue from 'vue'
import App from './App'
import router from './router';
import VueRouter from 'vue-router'
import store from './store';
import ElementUI from 'element-ui';

Vue.config.productionTip = false
Vue.use(ElementUI)

console.log("main")
router.beforeEach((to, from, next) => {
  if (store.getters.roles.length === 0) { // 判断当前用户是否已拉取完user_info信息
    store.dispatch('GetInfo').then(res => { // 拉取user_info
      const roles = res.data.role;
      console.log("获取的用户信息")
      console.log(res)
      next();//resolve 钩子
    })
  }
});

const app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
