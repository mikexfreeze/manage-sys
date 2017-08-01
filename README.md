# manage-sys

> front-end management system prototype

## 已完成通用功能
- 自动化
    - 开发环境编译
    - 生产环境编译（包括API地址定制）
        + 代码压缩
        + 异步加载
    - 支持ES6语法，支持CommenJs语法
    - 支持Sass语法，支持css组件级分割（防止污染）

- 前端路由系统
    - 404错误处理
- 权限管理系统
    - 401错误处理
    - 用户、角色、权限配置管理系统
    - 导航菜单、单个组件、元素配置（见hasAuthority.md）
- 说明文档系统
    - Nodejs后台自动更新遍历说明文档
    - 连接Github库自动更新
    - 前端自动生成树结构目录展现
- 封装组件
    - 面包屑导航
- 标签页系统
    - 详见appMain.md
- ajax请求封装
    - 详见fetch.md

- mockjs API 接口数据模拟（on branch）
    - 登录，用户信息接口模拟

## 已完成页面
- 登陆
- 注册页面
- 表格功能展示页
- 增删改查基本功能

## 计划完成功能
- EsLint代码风格化统一
- 自动发布
- 单元测试用例
- 代码自动化生成
- 从零开始的开发手册（尝试开发人员在没有培训的情况下按照手册开始开发）
- 国际化

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# 打包代码并在本地启动预览环境
npm run pre

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## 文件结构
```text
|- build/  ----------------------------- webpack配置文件
|- config/  ---------------------------- API地址配置文件
|- dist/  ------------------------------ 打包后生产环境文件
|- src/  ------------------------------- 项目源代码
    |- api  ---------------------------- api接口代码
    |- assets  ------------------------- 静态资源css、js
    |- components  --------------------- 全局公用组件
    |- directives  --------------------- 自定义全局指令
    |- filters  ------------------------ 自定义全局filters
    |- router  ------------------------- 路由文件
        |- index  ---------------------- 框架路由
        |- customRoute  ---------------- 开发使用路由
    |- store  -------------------------- 全局状态管理
    |- utils  -------------------------- 通用方法封装
        |- fetch  ---------------------- ajax封装
    |- views  -------------------------- 功能组件按照视图分类
    |- App.vue
    |- main.js  ------------------------ 入口文件
|- .babelrc  --------------------------- babel 配置文件
|- index.html  ------------------------- HTML 模板
|- package.json  ----------------------- npm 配置文件
|- README.md  -------------------------- 项目帮助文档
```

### Source Code Editing

*Text editor plugins*

#### Atom

 - [language-vue@atom.io](https://github.com/hedefalk/atom-vue) - Vue component file syntax for Atom.
 - [language-vue-component@atom.io](https://github.com/CYBAI/language-vue-component) - Adds syntax highlighting to Vue Component files in Atom.
 - [vue-autocomplete@atom.io](https://github.com/ealves-pt/atom-vue-autocomplete) - Vue.js 1.0+ autocomplete for Atom.
 - [vue-snippets@atom.io](https://github.com/ealves-pt/atom-vue-snippets) - Atom snippets for Vue component files.
 - [vue-autocompile@atom.io](https://github.com/paulpflug/vue-autocompile) - Auto compile vue file on save.
 - [lint-sass-vue@atom.io](https://github.com/fsblemos/lint-sass-vue) - Atom.io package to lint Sass/SCSS in `.vue` files.

#### Sublime Text

 - [Vue Syntax Highlight](https://github.com/vuejs/vue-syntax-highlight) - Sublime Text syntax highlighting for single-file Vue components.

#### Vim

 - [Vim Vue](https://github.com/posva/vim-vue) - Syntax Highlight for Vue.js components.

#### Visual Studio Code

 - [Vetur](https://github.com/octref/vetur) - Vue tooling for VSCode.

#### Visual Studio

 - [VuePack](https://github.com/madskristensen/VuePack) - Contains HTML Intellisense and code snippets for the Vue.js JavaScript library.

#### Brackets

 - [Brackets Vue](https://github.com/pandao/brackets-vue) - Brackets extension for Vue.js.

#### Intellij

 - [Vue.js Plugin](https://github.com/postalservice14/vuejs-plugin) - Vue.js features for the Intellij Platform (WebStorm, RubyMine, Intellij, etc).
 - [Vue.js support for WebStorm](https://github.com/JetBrains/intellij-plugins/tree/master/vuejs), IntelliJ IDEA, PhpStorm, PyCharm & RubyMine – official Vue.js support by JetBrains

#### Emacs

 - [Vue Mode](https://github.com/CodeFalling/vue-mode) - Emacs major mode for vue.js.

#### Kate

 - [Kate Syntax Files](https://github.com/mtorromeo/kate-syntax-files) - Syntax files (modified or original) for katepart (kate, kwrite, kdevelop).
