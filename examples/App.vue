<template>
  <div>
    <carousel indicator-position="outside">
    <carouselItem v-for="item in 4" :key="item">
      <h3>{{ item }}</h3>
    </carouselItem>
  </carousel>
  </div>
</template>

<script>
// import carousel from '@/components/carousel/src/main.vue'
// import carousel from '@/components/carousel1/src/main.vue'
import carousel from './components/carousel1/main.vue'
import carouselItem from './components/carousel1/item.vue'
// import carouselItem from './components/carousel/main.vue'

export default {
components:{
  carousel,
  carouselItem
}
}
</script>

<style>
body{
  background: rgb(2, 2, 43);
}
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>