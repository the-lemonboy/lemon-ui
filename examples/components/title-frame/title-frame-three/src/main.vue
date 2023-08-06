<template>
  <div class="l-title-border-three" ref="leTitleBox">
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <defs>
        <filter id="filterId1" height="200%" width="200%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="borderColor[0]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <filter id="filterId2" height="150%" width="150%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="borderColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>

        <path
            id="pathD"
            :d="`M 20,${getHeight-30} L ${getWidth/2-getTitleWidth/2},${getHeight-30} ${getWidth/2-getTitleWidth/2+30},${getHeight-5}  ${getWidth/2+getTitleWidth/2-30},${getHeight-5} ${getWidth/2+getTitleWidth/2},${getHeight-30} ${getWidth-20} ${getHeight-30}`"
            fill="transparent"
          />

          <radialGradient
            id="gradient"
            cx="50%" cy="50%" r="50%"
          >
            <stop
              offset="0%" :stop-color="borderColor[0]"
              stop-opacity="1"
            />
            <stop
              offset="100%" :stop-color="borderColor[0]"
              stop-opacity="0"
            />
          </radialGradient>
  
          <mask id="mask">
            <circle cx="0" cy="0" r="150" fill="url(#gradient)">
              <animateMotion
                :dur="`${dur}s`"
                :path="`M 20,${getHeight-30} L ${getWidth/2-getTitleWidth/2},${getHeight-30} ${getWidth/2-getTitleWidth/2+30},${getHeight}  ${getWidth/2+getTitleWidth/2-30},${getHeight} ${getWidth/2+getTitleWidth/2},${getHeight-30} ${getWidth-20} ${getHeight-30}`"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
      </defs>
      <path filter="url(#filterId2)"  fill="none" :d="`M 0 ${getHeight-30}  L ${getWidth/2-getTitleWidth/2} ${getHeight-30} ${getWidth/2-getTitleWidth/2+30},${getHeight-5}  ${getWidth/2+getTitleWidth/2-30},${getHeight-5} ${getWidth/2+getTitleWidth/2},${getHeight-30} ${getWidth},${getHeight-30}`" :stroke="borderColor[0]"></path>

    <path  xlink-href="#pathD" mask="url(#mask)" filter="url(#filterId1)" fill="none" :d="`M 0 ${getHeight-30}  L ${getWidth/2-getTitleWidth/2} ${getHeight-30} ${getWidth/2-getTitleWidth/2+30},${getHeight-5}  ${getWidth/2+getTitleWidth/2-30},${getHeight-5} ${getWidth/2+getTitleWidth/2},${getHeight-30} ${getWidth},${getHeight-30}`" stroke="#02D6B3"></path>
     <use x="5" y="10" xlink:href="rect1"></use>
     <!-- 左边四边形 -->
     <g>
     <polygon :fill="borderColor[1]" :points="`10,${getHeight-25} 20,${getHeight-25} 30,${getHeight-5} 20,${getHeight-5}`"></polygon>
     <polygon opacity="0.8" :fill="borderColor[1]" :points="`25,${getHeight-25} 35,${getHeight-25} 45,${getHeight-5} 35,${getHeight-5}`"></polygon>
     <polygon opacity="0.6"  :fill="borderColor[1]" :points="`40,${getHeight-25} 50,${getHeight-25} 60,${getHeight-5} 50,${getHeight-5}`"></polygon>
    </g>
    <g>
      <!-- 右边四边形 -->
     <polygon :fill="borderColor[1]" :points="`${getWidth-10},${getHeight-25} ${getWidth-20},${getHeight-25} ${getWidth-30},${getHeight-5} ${getWidth-20},${getHeight-5}`"></polygon>
     <polygon opacity="0.8" :fill="borderColor[1]" :points="`${getWidth-25},${getHeight-25} ${getWidth-35},${getHeight-25} ${getWidth-45},${getHeight-5} ${getWidth-35},${getHeight-5}`"></polygon>
     <polygon opacity="0.6" :fill="borderColor[1]" :points="`${getWidth-40},${getHeight-25} ${getWidth-50},${getHeight-25} ${getWidth-60},${getHeight-5} ${getWidth-50},${getHeight-5}`"></polygon>
     
    </g>
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
  name:"LETitleBox3",
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
      default: '300px'
    },
    dur: {
      type: Number,
      default: 3
    },
    borderColor: {
      type: Array,
      default: () => { return ['yellow', 'blue'] }
    }
  },
  data(){
       return {
        getWidth:converse(this.width, this.$refs.leTitleBox, 'width',300),
        getHeight:converse(this.height, this.$refs.leTitleBox, 'height',20),
        getTitleWidth:converse(this.titleWidth,this.$refs.leTitleBox,'width',50)
       }
    },
mounted(){
        window.addEventListener('resize', throttle(()=>{
            this.getWidth=converse(this.width, this.$refs.leTitleBox, 'width',300)
        this.getHeight=converse(this.height, this.$refs.leTitleBox, 'height',20)
        this.getTitleWidth=converse(this.titleWidth,this.$refs.leTitleBox,'width',50)
        },1000))
},
beforeDestroy(){
    window.removeEventListener('resize', throttle);
}
}
</script>

<style lang="scss" scoped>
.l-border-svg-container{
  position: absolute;
}

</style>