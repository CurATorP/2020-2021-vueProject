# 2020-2021 vueProject

## 1026:
    前序准备：
        安装node.js
        安装vue/cli
        安装Element-ui

    ---在根目录下的newVue中实验
        1. 引用VUE，new VUE({})
        2. 数据视图模板： {{  }}
        3. 数据绑定：v-model
        4. 事件：v-on:    @    input、focus、blur、keyup
        5. 数据驱动视图，显示与隐藏，v-show-if-else

    使用vue创建本次项目（kaoyan）框架
    修改运行指令：npm run dev

    UI框架 ElementUI

## 1102:
    删除上次的项目框架   X

    1st：安装Nuxtjs
        1：检查 npx -v
        2：npx create-nuxt-app@2.15.0 (kaoyan)
            project name :(default)
            project description : my swell Nuxt.js project (default)
            author name:(default)
            programming language: js
            package manager: Npm
            UI framework : Element
            custom server framework : Express
            Nuxt.js modules :Axios
            linting tools : ESLint
            test framework :None
            rendering mode: SSR
            development tools :jsconfig.json
        3:项目改造
            一：npm install @babel/cli @babel/core @babel/node @babel/preset-env -D
            二：配置 .babelrc 文件 
                新建于根目录下，内容自行参考
            三: 修改启动配置 (package.json)
                将  --exec babel-node --presets @babel/env
                加到dev start 后
            四：把require改为import (index.js)
            五：添加css预处理器(需要python2.7（或以上？）的环境)
                （现有环境是python3.7.1）
                npm install node-sass@4.14.1 sass-loader@10.0.3 --save

    
    2nd：编写header与footer
         已完成header ：html css
         已完成footer ：html


## 1109:
    回顾:
        运行项目 npm run dev
        安装工具包 npm install (packageName)
        删除工具包 npm uninstall (packageName) 
        webpack 编译 assets 目录

    已完成：footer-css样式

    完成内部浏览模块一

    作业：完成类似京东左上角部分的地区选择器

## 1110:
    地址选择器大致完成 ❌ ==> 样式有问题，正在调试

## 1123:
    中期检查
    检查页面：
        首页 ：导航列表 + 地址选择 ✔
        列表页 ：页面列表 + 侧边栏 ✔
        资料列表页 ：资料列表 + 侧边栏 ✔
        详情页 ：文章详情 + 侧边栏 ✔

    没有实现的功能：
        列表页 -> 分页功能

## 1124:
    修缮地址选择 位置由index内转移到头部
    

## 1130:
    导入老师的模板
    原内容置于backup下
    主要差异：
        1：选择器前方的红色装饰
        2：地址选择器的大小处理和排版差异
    main.css变动 需要重新配置为同路径下的scss
    开始配置接口
    参看server下内容
    所需数据库位于static下

    在model中添加相应getPost方法
    post中添加相应方法

    在List中添加相应getPost方法
    
    在_id中添加相应getDetail方法
    post中添加相应方法

## 1207：
    添加school.vue所对应的接口
    yikekaoyan发生相应变化