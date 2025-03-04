## 屏幕自适应

### 将需要自适应的内容放入容器中即可根据屏幕分辨率自适应。默认宽度：1920px,默认高度：1080px


```html
<template>
  <div>
  <LEScreenAdaptive width="1920" height="1080">content</LEScreenAdaptive>
  </div>
</template>

<script>
  export default {
  
  }
</script>
<style>
</style>
```
:::


## Options

| 参数            |      说明      |  类型  |        默认值         | 可选值 |
| --------------- | :------------: | :----: | :-------------------: | :---: |
| width |  屏幕宽度  | Array  | 1920 |  / |
| height       | 屏幕长度 | String |      1080     |  / |
| fullScreen       | 自适应是否占满屏幕 | Boolean |      false     |  true/false |
