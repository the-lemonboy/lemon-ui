## 打包

- 全局引入
- 按需加载，需要引入 css
- 真正按需加载

在 webpack 中，程序读取文件,现在是写在 `entry_config.js` 文件中的

## 使用过程中遇到的问题

1. `npm run serve` 报错 Module build failed. No ESLint configuration found.

```javascript
// vue.config.js
module.exports = {
  chainWebpack: (config) => config.resolve.symlinks(false),
}
```