<template>
  <div class="l-title-border-five" ref="leTitleBox">
    <svg class="l-border-svg-cantainer" :width="getWidth" :height="getHeight">
        <defs>
            <!-- 左边 -->
            <linearGradient id="Gradient1">
        <stop offset="0%" :stop-color="borderColor[0]" />
        <stop offset="50%" :stop-color="borderColor[1]" />
        <stop offset="100%" :stop-color="borderColor[0]" />
      </linearGradient>  

      <!-- 中间左右的渐变 -->
      <linearGradient id="Gradient2" >
        <stop class="stop1" offset="0%" :stop-color="borderColor[0]" />
        <stop class="stop2" offset="50%" :stop-color="borderColor[1]" />
        <stop class="stop2" offset="100%" :stop-color="borderColor[0]" stop-opacity="0.8"/>
      </linearGradient>     
      <!-- 中间 -->
      <linearGradient id="Gradient3" x1="0%" y1="0%" x2="0" y2="100%" >
        <stop offset="0%" :stop-color="borderColor[0]" stop-opacity="0.5"/>
        <stop offset="50%" :stop-color="borderColor[0]" />
        <stop  offset="100%" :stop-color="borderColor[1]"/>
      </linearGradient>    
        </defs>
    <path  fill="none" stroke="url(#Gradient1)" :d="`M 0 15 L 100 15 C 120,15 120,${getHeight/2+10} 150,${getHeight/2+10} L ${getWidth/2-getTitleWidth/2-40},${getHeight/2+10} C ${getWidth/2-getTitleWidth/2-20},${getHeight/2+10} ${getWidth/2-getTitleWidth/2-10},${getHeight-5} ${getWidth/2-getTitleWidth/2-12},${getHeight-10}`" stroke-width="2" stroke-linecap="round"></path>
    <path fill="none" stroke="url(#Gradient2)" :d="`M ${getWidth/2-getTitleWidth/2-150},${getHeight/2} L ${getWidth/2-getTitleWidth/2},${getHeight/2} C ${getWidth/2-getTitleWidth/2+30},${getHeight/2}  ${getWidth/2-getTitleWidth/2+30},${getHeight-5} ${getWidth/2-getTitleWidth/2+50},${getHeight-5}  L${getWidth/2-getTitleWidth/2+80},${getHeight-5}`" stroke-width="5" stroke-linecap="round"></path>
    <path  fill="none" stroke="url(#Gradient1)" :d="`M ${getWidth} 15 L ${getWidth-100} 15 C ${getWidth-120},15 ${getWidth-120},${getHeight/2+10} ${getWidth-150},${getHeight/2+10} L ${getWidth/2+getTitleWidth/2+40},${getHeight/2+10}  C ${getWidth/2+getTitleWidth/2+20},${getHeight/2+10} ${getWidth/2+getTitleWidth/2+10},${getHeight-10} ${getWidth/2+getTitleWidth/2+10},${getHeight-10}`" stroke-width="2" stroke-linecap="round"></path>
    <path fill="none" stroke="url(#Gradient2)" :d="`M ${getWidth/2+getTitleWidth/2+150},${getHeight/2} L ${getWidth/2+getTitleWidth/2},${getHeight/2} C ${getWidth/2+getTitleWidth/2-30},${getHeight/2}  ${getWidth/2+getTitleWidth/2-30},${getHeight-5} ${getWidth/2+getTitleWidth/2-50},${getHeight-5}  L${getWidth/2+getTitleWidth/2-80},${getHeight-5}`" stroke-width="5" stroke-linecap="round"></path>
    <!-- 中间 -->
    <polygon fill="url(#Gradient3)" :points="`${getWidth/2-50},${getHeight-10} ${getWidth/2+50},${getHeight-10} ${getWidth/2+55},${getHeight} ${getWidth/2-55},${getHeight}`"></polygon>
    <g>
       <polygon :fill="borderColor[0]" :points="`145,${getHeight/2-20} 150,${getHeight/2-15} 145,${getHeight/2-10} 140,${getHeight/2-15}`"></polygon>
       <polygon :fill="borderColor[1]" :points="`160,${getHeight/2-20} 165,${getHeight/2-15} 160,${getHeight/2-10} 155,${getHeight/2-15}`"></polygon>
       <polygon fill="red" :points="`175,${getHeight/2-20} 180,${getHeight/2-15} 175,${getHeight/2-10} 170,${getHeight/2-15}`"></polygon>
       <!-- <rect fill="white" width="50" height="5" x="200" :y="`${getHeight/2-17}`"></rect>
       <rect fill="white" width="50" height="5" x="280" :y="`${getHeight/2-17}`"></rect>
       <rect fill="white" width="50" height="5" x="360" :y="`${getHeight/2-17}`"></rect> -->
    </g>
    <g>
       <polygon :fill="borderColor[0]" :points="`${getWidth-145},${getHeight/2-20} ${getWidth-150},${getHeight/2-15} ${getWidth-145},${getHeight/2-10} ${getWidth-140},${getHeight/2-15}`"></polygon>
       <polygon :fill="borderColor[1]" :points="`${getWidth-160},${getHeight/2-20} ${getWidth-165},${getHeight/2-15} ${getWidth-160},${getHeight/2-10} ${getWidth-155},${getHeight/2-15}`"></polygon>
       <polygon fill="red" :points="`${getWidth-175},${getHeight/2-20} ${getWidth-180},${getHeight/2-15} ${getWidth-175},${getHeight/2-10} ${getWidth-170},${getHeight/2-15}`"></polygon>
       <!-- <rect fill="white" width="50" height="5" :x="`${getWidth-250}`" :y="`${getHeight/2-17}`"></rect>
       <rect fill="white" width="50" height="5" :x="`${getWidth-330}`" :y="`${getHeight/2-17}`"></rect>
       <rect fill="white" width="50" height="5" :x="`${getWidth-410}`" :y="`${getHeight/2-17}`"></rect> -->
    </g>
</svg>
  </div>
</template>

<script>
import {converse} from '@/utils/conversion.js'
import {throttle} from '@/utils/throttle-debounce.js'
export default {
    name:"LETitleBox5",
    props: {
        width: {
            type: String,
            default: '100vw'
        },
        height: {
            type: String,
            default: '80px'
        },
        titleWidth: {
      type: String,
      default: '500px'
    },
        backgroundColor: {
            type: String,
            default: 'transparent'
        },
        borderColor: {
            type: Array,
            default: () => { return ['#F1F3FE', '#0D01F5'] }
        },
    },
    data(){
       return {
        getWidth:converse(this.width, this.$refs.leTitleBox, 'width',1200),
        getHeight:converse(this.height, this.$refs.leTitleBox, 'height',80),
        getTitleWidth:converse(this.titleWidth,this.$refs.leTitleBox,'width',100)
       }
    },
mounted(){
        window.addEventListener('resize', throttle(()=>{
            this.getWidth=converse(this.width, this.$refs.leTitleBox, 'width',1200)
        this.getHeight=converse(this.height, this.$refs.leTitleBox, 'height',80)
        this.getTitleWidth=converse(this.titleWidth,this.$refs.leTitleBox,'width',100)
        },1000))
},
beforeDestroy(){
    window.removeEventListener('resize', throttle);
}
}
</script>

<style>

</style>