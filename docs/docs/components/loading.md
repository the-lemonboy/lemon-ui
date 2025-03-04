# Loading 加载组件

<!-- 当选项过多时，使用下拉菜单展示并选择内容。 -->

## 加载: LELoading1

::: demo 引用下方代码

```html
<template>
  <div class="loader-box">
    <LELoading1 ></LELoading1>
  </div>
</template>

<script>
  export default {};
</script>
<style>
  .demo-content {
    background: #1c2d3b;
  }
  .loader-box {
    display: flex;
    justify-content: center;
  }
</style>
```

:::

## 加载: LELoading2

::: demo 引用下方代码

```html
<template>
  <div class="loader-box">
    <LELoading2 :backgroundColor="['#C0D8EE','#C0D8EE','#C0D8EE']"></LELoading2>
  </div>
</template>

<script>
  export default {};
</script>
<style>
  .demo-content {
    background: #1c2d3b;
  }
  .loader-box {
    display: flex;
    justify-content: center;
  }
</style>
```

:::

## 加载: LELoading3

::: demo 引用下方代码

```html
<template>
  <div class="loader-box">
    <LELoading3 :backgroundColor="['#C0D8EE','#C0D8EE','#C0D8EE']"></LELoading3>
  </div>
</template>

<script>
  export default {};
</script>
<style>
  .demo-content {
    background: #1c2d3b;
  }
  .loader-box {
    display: flex;
    justify-content: center;
  }
</style>
```

:::

## Options

| 参数            |      说明      |  类型  |        默认值         | 可选值 |
| --------------- | :------------: | :----: | :-------------------: | :---: |
| backgroundColor |  加载框的颜色  | Array  | ['#511BD6','#A98CFA']  |  / |
| textColor       | 加载文字的颜色 | String |       '#DCEFED'        |  / |
