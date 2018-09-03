# react-redex-demo
学习redux 参考官网的demo  学习理解redux流程。
开始不懂得地方已经在代码加上注释。便于理解
照葫芦画瓢~ 好记性不如烂笔头~


## 技术支持
- 前端：`react`、`redux`


## 运行步骤
项目1-原生版: ` cd/views/redux-html   ==>   点击index.html `  —— 直接运行在chrome

项目2-redux+reacrt:
1. ` cd/views/redux-html ` ——切换目录
2. ` npm install` --下载依赖
3. ` npm run build` --编译
4. ` npm run start` --运行 自己打开chrome 默认端口3000


## 项目目录结构

```
项目

    |__ views     //视图
        |
        |__redux-html    //demo1
            |   
            |__index.html   //直接script redux.js 实现功能
            
            
        |__react_reudx    //demo2
            |
            |__ node_modules 依赖
            |
            |__build    //编译出来的jS
            |
            |__public    //模板
            |
            |__src
                |__components  //组件代码
                |
                |__ reducres  //数据源处理
                |
                |__index.js   //首页


```
