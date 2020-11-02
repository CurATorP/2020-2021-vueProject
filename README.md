# School

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
    1：修改运行指令：npm run dev

    UI框架 ElementUI

## 1102:
    删除上次的项目框架   X

    安装Nuxtjs
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
    {
        "env": {
            "test": {
                "presets": [
                    [
                    "@babel/preset-env",
                        {
                            "targets": {
                                "node": "current"
                            }
                        }
                    ]
                ]
            }
        }
    }
       三: 修改启动配置 (package.json)
           将  --exec babel-node --presets @babel/env
           加到dev start 后
       四：把require改为import (index.js)
       五：添加css预处理器(需要python2.7（或以上？）的环境)
           环境是python3.7.1
        
           npm install node-sass@4.14.1 sass-loader@10.0.3 --save

    
    编写header与footer
        
        