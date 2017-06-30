# 学习路线Q&A
> 本文档旨在为前端基础薄弱的同学在学习道路上提供帮助

## Node.js安装
- 安装包及源码地址：https://nodejs.org/en/download/
##### 检查版本 node --version，如果显示“node不是内部或外部命令”
A：可能是Node的环境变量配置为题
- 检查PATH环境变量是否配置了Node.js，点击开始=》运行=》输入"cmd" => 输入命令"path"，输出结果类似如下示例
``` bash
PATH=C:\oraclexe\app\oracle\product\10.2.0\server\bin;C:\Windows\system32;
C:\Windows;C:\Windows\System32\Wbem;C:\Windows\System32\WindowsPowerShell\v1.0\;
c:\python32\python;C:\MinGW\bin;C:\Program Files\GTK2-Runtime\lib;
C:\Program Files\MySQL\MySQL Server 5.5\bin;C:\Program Files\nodejs\;
C:\Users\rg\AppData\Roaming\npm
```
检查输出结果中：**C:\Program Files\nodejs\\;** 配置路径是否正确
- 尝试把C:\Program Files\nodejs\;最后的 \ 去掉


## Git安装及使用
- 安装包下载地址：https://git-scm.com/downloads
- 完成安装之后，就可以使用命令行的 git 工具。右键点击Vue搭建的项目文件，
选择‘Git Bash Here’，弹出Git命令窗口。

## Vue.js安装及项目搭建
- 独立版本：我们可以在Vue.js官网上下载 vue.min.js 。官网：http://cn.vuejs.org/
- Vue.js提供一个官方命令行工具，可用于快速搭建大型单页应用。
``` bash
# 全局安装vue-cli
$ npm install -g vue-cli

# 创建基于 webpack 模板的新项目
$ vue init webpack <project-name>

# 接下来是一些配置，默认回车即可

# 项目启动
  cd <project-name>
  npm install  此过程可能比较长，请耐心等待
  npm run dev
```
 成功执行以上命令后访问 http://localhost:8080/

 如果出现如下警告：
``` bash
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@^1.0.0 (node_modules\chokidar\node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.0.17: wanted {"os":"darwin","arch":"any"}
(current: {"os":"win32","arch":"x64"})
```
原因是因为： fsevent是mac osx系统的，在win或者Linux下使用了，
所以会有警告，忽略即可。意思就是你已经安装成功了。