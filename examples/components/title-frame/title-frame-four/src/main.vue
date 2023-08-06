<template>
  <div class="l-title-border-four" ref="leTitleBox">
 
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <defs>
            <filter id="filterId1" height="200%" width="200%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="2" result="blurred" />
          <feFlood :flood-color="borderColor[0]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <linearGradient id="Gradient1">
        <stop  offset="0%" :stop-color="borderColor[1]"/>
        <stop  offset="30%" :stop-color="borderColor[1]" stop-opacity="0.6"/>
        <stop  offset="50%" :stop-color="borderColor[1]" stop-opacity="0.4"/>
        <stop  offset="100%" :stop-color="borderColor[1]" stop-opacity="0.1"/>
      </linearGradient>
      <linearGradient id="Gradient2">
        <stop  offset="0%" :stop-color="borderColor[1]" stop-opacity="0.1"/>
        <stop  offset="30%" :stop-color="borderColor[1]"  stop-opacity="0.4"/>
        <stop  offset="50%" :stop-color="borderColor[1]" stop-opacity="0.6"/>
        <stop  offset="100%" :stop-color="borderColor[1]" />
      </linearGradient>
    </defs>
     <path fill="none" :stroke="borderColor[0]" filter="url(#filterId1)"   :d="`M 0,2 L ${getTitleWidth},2 C ${getTitleWidth+20},2 ${getTitleWidth+20},${getHeight-2} ${getTitleWidth+40},${getHeight-2} L ${getTitleWidth+50},${getHeight-2}`"></path>
     <!-- 左边开头 -->
     <!-- <rect :fill="borderColor[0]" x="0" y="10" width="10" :height="`${getHeight-10}`"></rect> -->
     <polygon fill="url(#Gradient1)" :points="`${getTitleWidth+50},${getHeight-1} ${getWidth},${getHeight-1} ${getWidth},${getHeight/2} ${getTitleWidth+40},${getHeight/2}`"></polygon>
     <rect :fill="borderColor[0]" :x="`${getWidth-15}`" :y="`${getHeight/2-10}`" width="15" height="6"></rect>
     <!-- <line stroke="url(#Gradient1)" :x1="`${getWidth-15}`" :y1="`${getHeight/2-7}`" :x2="`${getTitleWidth+40}`" :y2="`${getHeight/2-7}`"></line> -->
     <rect :x="`${getWidth-15}`" :y="`${getHeight/2-7}`" width="100" height="1" fill="url(#Gradient2)" >
        <animate
          attributeName="x"
          :from="`${getWidth-15}`"
          :to="`${getTitleWidth+40}`"
          :dur="`${dur}s`"
          calcMode="spline"
          keyTimes="0;1"
          keySplines="0.42,0,0.58,1"
          repeatCount="indefinite"
        />
      </rect>
    </svg>
    <div class="title-box-content">
        <slot></slot>
      </div>
  </div>
</template>

<script>
import {converse} from '@/utils/conversion.js'
import {throttle} from '@/utils/throttle-debounce.js'
export default {
    name:"LETitleBox4",
  props: {
    width: {
      type: String,
      default: '300px'
    },
    height: {
      type: String,
      default: '30px'
    },
    titleWidth: {
      type: String,
      default: '150px'
    },
    dur: {
      type: Number,
      default: 3
    },
    lineColor: {
      type: String,
      default: '#FAF800'
    },
    borderColor: {
      type: Array,
      default: () => { return ['#7AB9F5', '#7AB9F5'] }
    }
  },
  data(){
        return {
            getWidth: converse(this.width, this.$refs.leTitleBox, 'width', 300),
            getHeight: converse(this.height, this.$refs.leTitleBox, 'height', 30),
            getTitleWidth: converse(this.titleWidth, this.$refs.leTitleBox, 'width', 50)
        }
    },
    mounted() {
        window.addEventListener('resize', throttle(() => {
            this.getWidth = converse(this.width, this.$refs.leTitleBox, 'width', 300)
            this.getHeight = converse(this.height, this.$refs.leTitleBox, 'height', 30)
            this.getTitleWidth = converse(this.titleWidth, this.$refs.leTitleBox, 'width', 50)
        }, 1000))
    },
    beforeDestroy() {
        window.removeEventListener('resize', throttle);
    }
}
</script>

<style lang="scss" scoped>
.l-border-svg-container{
    position: absolute;
}
</style>