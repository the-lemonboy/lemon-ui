# CKView

## 组件库目录
lemonui
├─README.md
├─babel.config.js
├─npminstall-debug.log
├─package-lock.json
├─package.json
├─postcss.config.js
├─packages   //组件目录，webpack打包的也是这个目录文件
|    ├─README.md
|    ├─entry_config.js
|    ├─index.js
|    ├─utils
|    ├─components
├─lib                  //打包后的文件目录
|  ├─lemonui.css
|  ├─lemonui.css.map
|  ├─lemonui.js      //打包的全局组件
|  ├─lemonui.js.map
|  ├─packages      //各组件目录，方便组件按需导入
├─examples    //在这里面测试组件
|    ├─App.vue
|    ├─index.js
|    ├─main.js
|    ├─package.json
|    ├─utils
|    ├─components
|    ├─assets
├─docs    //文档文件
|  ├─docs
|  |  ├─README.md
|  |  ├─components   //各个组件文档
|  |  ├─.vuepress
            ├─dist
            ├─config.js   //配置文档
├─build  //webpack打包配置
|   ├─webpack.config.js
|   ├─webpack.dev.js
|   ├─webpack.lib.base.js
|   ├─webpack.lib.prod.component.js   //打包生成各个组件
|   ├─webpack.lib.prod.js    //将全部组件打包在一起
|   └webpack.prod.js


## 组件库文档

[文档地址](baidu.com)

## 组件

- [x] Button
- [x] 标题框
- [x] 边框
- [x] 加载组件

## gitlab仓库

[CKView 仓库地址](https://github.com/the-lemonboy/lemon-ui)



## npm

#### 版本管理

~~~json
```json
  "name": "ck-view",
  "version": "1.0.1",   //主版本号.次版本号.修订版本号
  "description": "可视化大屏UI库",
  "main": "lib/index.js",
```
~~~



