/**
 * Created by Micheal Xiao on 2017/6/14.
 */
/* layout*/
import Layout from '../views/layout/Layout';
/* permission */
const PermissionTest = resolve => require(['../views/permission-test/index'], resolve);

/* active*/
const activeMsg = resolve => import('../views/active/activeMsg/activeMsg.vue').then(function (result) {
    return result
});
// const activeMsg = resolve => require(['../views/active/activeMsg'], resolve);
const activePublic = resolve => require(['../views/active/activePublic.vue'], resolve);
const packageTable = resolve => require(['../views/active/package-table/packageTable.vue'], resolve);

//公共组件
const cButton = resolve => require(['../views/common/cButton.vue'], resolve);
const cInput = resolve => require(['../views/common/cInput.vue'], resolve);
const cSelect = resolve => require(['../views/common/cSelect.vue'], resolve);
const cDate = resolve => require(['../views/common/cDate.vue'], resolve);
const cTree = resolve => require(['../views/common/cTree.vue'], resolve);
const charts = resolve => require(['../views/common/echarts.vue'], resolve);
const upload = resolve => require(['views/common/upLoad.vue'], resolve)
const tab = resolve => require(['src/views/router-show/tab-page/page1.vue'], resolve)

// 演示页面
const list = resolve => require(['../views/demo/list/list.vue'], resolve);

// 路由展示
const tabpage = resolve => require(['../views/router-show/tab-page/tabPage.vue'], resolve);

//用户管理
const account = resolve => require(['../views/account/userManager.vue'], resolve);
const Permission = resolve => require(['../views/permission/permission.vue'], resolve);
const Roles = resolve => require(['../views/roles/roles.vue'], resolve);


export default [

    {
        path: '/permission-test',
        component: Layout,
        redirect: '/permission-test/index',
        name: '权限测试',
        icon: 'quanxian',
        meta: {role: ['ROLE_ADMIN']}, //页面需要的权限
        // noDropdown: true,
        children: [
            {
                path: 'index',
                component: PermissionTest,
                name: '权限测试页',
                meta: {role: ['ROLE_ADMIN']}  //页面需要的权限
            }]
    },
    {
        path: '/active',
        component: Layout,
        redirect: '/active/index',
        name: '活动',
        icon: 'mili_huodong',
        children: [
            {path: 'activeMsg', component: activeMsg, name: '活动管理'},
            {path: 'packageTable', component: packageTable, name: '封装表格'},
            {path: 'activePublic', component: activePublic, name: '活动发布'}
        ]
    },
    {
        path: '/common',
        component: Layout,
        redirect: '/common/cButton',
        name: '公共组件',
        icon: 'zujian',
        children: [
            {path: 'cButton', component: cButton, name: '按钮'},
            {path: 'cInput', component: cInput, name: '输入框'},
            {path: 'cSelect', component: cSelect, name: 'select选择器'},
            {path: 'cDate', component: cDate, name: '日期选择'},
            {path: 'cTree', component: cTree, name: '树形控件'},
            {path: 'echarts', component: charts, name: '图表'},
            {path: 'upload', component: upload, name: '上传控件'}
        ]
    },
    {
        path: '/demo',
        component: Layout,
        redirect: '/demo/list',
        name: '列表',
        icon: 'liebiao',
        children: [
            {path: 'list', component: list, name: '列表展示'}
        ]
    },
    {
        path: '/routerpage',
        component: Layout,
        redirect: '/routerpage/tabpage/1',
        name: '路由功能',
        icon: 'luyou',
        children: [
            {
                path: 'tabpage', component: tabpage, name: 'Tab展示',
                // redirect: '/routerpage/tabpage/1',
                children: [
                    {
                        path: ':tabId', name: 'TAB展示', components: {
                        default: tab,
                        1: tab,
                        2: tab
                    }
                    }
                ]
            },
        ]
    },
    {
        path: '/account',
        component: Layout,
        redirect: '/account/userManager',
        name: '用户与权限',
        icon: 'yonghuguanli',
        children: [
            {path: 'userManager', component: account, name: '用户管理'},
            {path: 'permission', component: Permission, name: '权限管理'},
            {path: 'roles', component: Roles, name: '角色管理'}
        ]
    },
]