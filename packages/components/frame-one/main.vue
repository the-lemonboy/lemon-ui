<template>
    <div
      class="l-border-box-one" ref="leFrameBox"
      :style="`box-shadow: inset 0 0 10px ${borderColor}; border: 1px solid ${borderColor[0]}; background-color:${backgroundColor}; width:${getWidth}px; height:${getHeight}px`"
    >
      <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <!-- 外角 -->
        <polyline class="l-corner-one" :stroke="cornerColor[1]" :points="`0, 25 0, 0 25, 0`" />
        <polyline class="l-corner-one" :stroke="cornerColor[1]" :points="`${getWidth - 25}, 0 ${getWidth}, 0 ${getWidth}, 25`" />
        <polyline class="l-corner-one" :stroke="cornerColor[1]" :points="`${getWidth - 25}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 25}`" />
        <polyline class="l-corner-one" :stroke="cornerColor[1]" :points="`0, ${getHeight - 25} 0, ${getHeight} 25, ${getHeight}`" />

        <polyline class="l-corner-two" :stroke="cornerColor[0]" :points="`0, 10 0, 0 10, 0`" />
        <polyline class="l-corner-two" :stroke="cornerColor[0]" :points="`${getWidth - 10}, 0 ${getWidth}, 0 ${getWidth}, 10`" />
        <polyline class="l-corner-two" :stroke="cornerColor[0]" :points="`${getWidth - 10}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 10}`" />
        <polyline class="l-corner-two" :stroke="cornerColor[0]" :points="`0, ${getHeight - 10} 0, ${getHeight} 10, ${getHeight}`" />
      </svg>
  
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
 import { converse } from '../../utils/conversion';
  import {throttle} from '../../utils/throttle-debounce.js'
  export default {
    name:'LEBorderBox1',
    props: {
      width: {
        type: String,
        default: '400px'
      },
      height: {
        type: String,
        default: '300px'
      },
      borderColor: {
        type: String,
        default: '#BCD4F5'
      },
      cornerColor:{
        type:Array,
        default:()=>{ return ['#BCD4F5','#78BCFA']}
      },
      backgroundColor: {
        type: String,
        default: 'transparent'
      }
    },
    data() {
      return {
        getWidth: converse(this.width, this.$refs.leFrameBox, 'width'),
        getHeight: converse(this.height, this.$refs.leFrameBox, 'height'),
      }
    },
    mounted() {
      window.addEventListener('resize', throttle(() => {
        this.getWidth = converse(this.width, this.$refs.leFrameBox, 'width')
        this.getHeight = converse(this.height, this.$refs.leFrameBox, 'height')
      }, 1000))
    },
    beforeDestroy() {
      window.removeEventListener('resize', throttle);
    }
  }
  </script>
  
  <style lang="scss" scoped  src="./style.scss">
  </style>
  