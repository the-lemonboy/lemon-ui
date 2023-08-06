<template>
    <div class="l-border-box-five" :style="`width:${getWidth}px; height:${getHeight}px;`">
        <svg class="l-border-svg-container" :width="`${getWidth}`" :height="`${getHeight}`" >
        <defs>
            <filter id="filterId1" height="200%" width="200%" x="-100%" y="0">
          <feMorphology operator="dilate" radius="4" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="borderColor[2]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
       </defs>
            <polygon :fill="cornerColor[0]" :points="`${getWidth-55},0 ${getWidth},0 ${getWidth},55 ${getWidth-5},50 ${getWidth-5},5 ${getWidth-50},5`"></polygon>
       <polygon :fill="cornerColor[0]" :points="`0,${getHeight-55} 0,${getHeight} 55,${getHeight} 50,${getHeight-5} 5,${getHeight-5} 5,${getHeight-50}`"></polygon>
    <polyline :fill="backgroundColor" :stroke="borderColor[0]" stroke-width="0.5" :points="`0,0 ${getWidth-58},0 ${getWidth-51},8 ${getWidth-8},8 ${getWidth-8},51 ${getWidth},58 ${getWidth},${getHeight} 59,${getHeight} 50,${getHeight-8} 8,${getHeight-8} 8,${getHeight-52} 0,${getHeight-59} 0,0`"></polyline>
<polygon :fill="cornerColor[1]" :points="`${getWidth-11},11 ${getWidth-11},21 ${getWidth-21},11`"></polygon>    
<polygon :fill="cornerColor[1]" :points="`12,${getHeight-11} 22,${getHeight-11} 12,${getHeight-22}`"></polygon>
<polygon filter="url(#filterId1)" :points="`3,30 3,${getHeight-100} 2,${getHeight-100} 2,30`" :fill="borderColor[1]" ></polygon>
<polygon filter="url(#filterId1)" :points="`${getWidth-3},${getHeight-30} ${getWidth-3},100 ${getWidth-2},100 ${getWidth-2},${getHeight-30}`" :fill="borderColor[1]" ></polygon>
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
      name: 'LEBorderBox5',
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
            type:Array,
            default:()=>{return ['#EFFEFC','#72AAF5']}
          },
          backgroundColor: {
              type: String,
              default: 'transparent'
          },
      cornerColor:{
        style:Array,
        default:()=>{return ['#72AAF5','#72AAF5']}
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
  
  <style lang="scss" scoped src="./style.scss">
  </style>
  