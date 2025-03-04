# Button 按钮
## 按钮： LEButton1

::: demo 引用下方代码

```html
<template>
  <div class="box">
    <LEButton1 >按钮1</LEButton1>
  </div>
</template>
<script>
  export default {};
</script>
<style>
  .demo-content {
    background: #1c2d3b;
  }
  .box {
    display: flex;
    justify-content: center;
  }
</style>
```

:::

## 按钮： LEButton2

::: demo 引用下方代码

```html
<template>
  <div class="box">
    <LEButton2>按钮1</LEButton2>
  </div>
</template>

<script>
  export default {};
</script>
<style>
  .demo-content {
    background: #1c2d3b;
  }
  .box {
    display: flex;
    justify-content: center;
    align-items: center;

  }
</style>
```

:::

## Options

| 参数            |      说明      |  类型  |        默认值      | 可选值 |  可使用组件  |
| :--------------: | :------------: | :----: | :-------------------: | :---: | :-----------: |
| borderColor |  边框颜色  | Array  | ['#511BD6','#A98CFA']  | / |  全部  |
| width       | 宽度 | String |       100px        |  px/em/rem/% |  全部  |
| height       | 高度 | String |       40px        |  px/em/rem/% |  全部  |
| cornerColor       | 边角颜色 | String |       '#DCEFED'        |  / |  LEButton1   |
| disabled       | 是否禁用按钮 | Boolean |       false        |  / |  全部  |