# LETitleBox1 标题框
## 标题框： LETitleBox1

::: demo 引用下方代码

```html
<template>
  <div class="title-box">
    <LETitleBox1 ></LETitleBox1>
  </div>
</template>

<script scoped>
  export default {};
</script>
<style>
  .title-box {
    display: flex;
    justify-content: center;
  }
  .l-title-border-one{
    position: relative;
    margin:0 auto;
}
  /* .l-title-border-four{
      position:relative;
      height:100%;
      display:flex;
      justify-content:center;
          align-items: center;
  } */
</style>
```

:::

## 标题框： LETitleBox2

::: demo 引用下方代码

```html
<template>
  <div class="title-box" >
    <LETitleBox2></LETitleBox2>
  </div>
</template>

<script>
  export default {};
</script>
<style scoped>
  .demo-content {
    background: #1c2d3b;
  }
  .title-box {
    display: flex;
    justify-content: center;
  }
</stylecoped>
```

:::



## 标题框： LETitleBox3

::: demo !!!引用下方注释掉的代码

```html
<template>
  <div class="title-box">
    <img :src="require('./assets/titlebox3.gif')"></img>
  </div>
</template>
<style scoped>
  .demo-content {
    background: #1c2d3b;
  }
  .title-box {
    display: flex;
    justify-content: center;
  }
</style>
<!-- <template>
  <div class="box">
    <LETitleBox3></LETitleBox3>
  </div>
</template>

<script>
  export default {};
</script> -->

```

:::


## 标题框： LETitleBox4

::: demo 引用下方代码

```html
<template>
  <div class="title-box">
    <LETitleBox4></LETitleBox4>
  </div>
</template>

<script>
  export default {};
</script>
<style scoped>
  .demo-content {
    background: #1c2d3b;
  }
  .title-box {
    display: flex;
    justify-content: center;
  }
</style>
```

:::

## 标题框： LETitleBox5

::: demo ！！！引用下方注释部分的代码

```html
<template>
  <div class="box1">
    <img :src="require('./assets/titlebox5.png')"></img>
  </div>
</template>
<style scoped>
  .demo-content {
    background: #1c2d3b;
  }
  .title-box {
    display: flex;
    justify-content: center;
  }
</style>
<!-- <template>
  <div class="box">
    <img :src=./
  </div>
</template>
<template>
  <div class="box">
    <LETitleBox5></LETitleBox5>
  </div>
</template> -->
```

:::
## Options

|      参数       |     说明     |  类型  |        默认值         |   可选值    |  可使用组件  |
| :-------------: | :----------: | :----: | :-------------------: | :---------: | :----------: |
|   borderColor   |   边框颜色   | Array  | / |      /      |     全部     |
|      width      |     宽度     | String |         100px         | px/em/rem/% |     全部     |
|     height      |     高度     | String |         40px          | px/em/rem/% |     全部     |
|   cornerColor   |   边角颜色   | Array  |           /           |      /      | LEBorderBox1 |
| backgroundColor | 盒子背景颜色 | String |           /           |      /      |     全部     |
|       dur       |   动画间隔   | Number |           /           |      /      | LETitleBox1,LETitleBox4 |
|       titleWidth  |   标题的宽度   | String |           /           |      /      | LETitleBox3,LETitleBox4 |