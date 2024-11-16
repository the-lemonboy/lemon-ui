# Lemon-ui

## 组件库目录

## 组件库文档

[文档地址](https://the-lemonboy.github.io/lemon-ui-docs/)

## 组件

- [X] Button
- [X] 标题框
- [X] 边框
- [X] 加载组件

## gitlab仓库

[Lemon-ui 仓库地址](https://github.com/the-lemonboy/lemon-ui)

## npm

#### 版本管理

```json
  "name": "Lemon-ui",
  "version": "1.0.1", 
  "description": "可视化大屏UI库",
  "main": "lib/index.js",
```

## 安装

### 通过npm安装

```shell
npm i lemon-ui-vue2 -S
```

### 通过yarn安装

```shell
yarn add lemon-ui-vue2 -S
```

## 快速开始

### 引入Lemon-ui

你可以引入整个Lemon-ui，或是根据需要仅引入部分组件。我们先介绍如何引入完整的 Lemon-ui。

### 完整引入

在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import LemonUI from 'lemon-ui-vue2';
import 'lemon-ui-vue2/lib/lemonui.css';
import App from './App.vue';

Vue.use(LemonUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```

### 按需引入

借助 babel-plugin-component，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 babel-plugin-component：

```javascript
npm install babel-plugin-component -D
```

然后，将babel.config.js修改为

```javascripte
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    ['component',
    {
      libraryName:'lemon-ui-vue2',
      libDir:'lib/packages',
      camel2Dash:true
    },
  ],
],
}
```

接下来，如果你只希望引入部分组件，比如 BorderBox1 和 TitleBox1,那么需要在 main.js 中写入以下内容：

```javascript
import Vue from 'vue';
import { BorderBox1, BorderBox1 } from 'element-ui';
import App from './App.vue';

Vue.component(BorderBox1.name, BorderBox1);
Vue.component(TitleBox1.name, TitleBox1);
/* 或写为
 * Vue.use(BorderBox1)
 * Vue.use(TitleBox1)
 */

new Vue({
  el: '#app',
  render: h => h(App)
});
```
