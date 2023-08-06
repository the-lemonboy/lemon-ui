<template>
  <div class="l-title-border-one">
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
        <defs>
            <linearGradient id="gradient1" x1="0" x2="0" y1="0" y2="1">
        <stop offset="0%" :stop-color="borderColor[0]"/>
        <stop offset="100%" :stop-color="borderColor[1]"/>
      </linearGradient>
      <linearGradient id="gradient2">
        <stop offset="0%" :stop-color="borderColor[1]" stop-opacity="0.8"/>
        <stop offset="100%" :stop-color="borderColor[0]" stop-opacity="0.5"/>
      </linearGradient>

      <animate id="opacityId" attributeName="fill-opacity" values="0;1;0" dur="5s" repeatCount="indefinite" />
        </defs>
        <g>
        <polygon :fill="`url(#gradient1)`" :points="`0,0 10,0 20,${getHeight} 10,${getHeight}`"></polygon>
<!-- 右边框 -->
<path :fill="`url(#gradient2)`" :d="`M 20,0 Q 26,${getHeight+2}  60,${getHeight}  L ${getWidth},${getHeight} ${getWidth},0 `"></path>
        </g>
        <g>
            <polygon fill="#6EE2F4" :points="`${getWidth-15},${getHeight/2} ${getWidth-25},${getHeight/2+10} ${getWidth-25},${getHeight/2+5} ${getWidth-20},${getHeight/2} ${getWidth-25},${getHeight/2-5} ${getWidth-25},${getHeight/2-10}`">
                <animate attributeName="fill-opacity" values="1;0.2;1" :dur="`${dur}s`" repeatCount="indefinite" />
            </polygon>
            <polygon fill="#ACF5F1" :points="`${getWidth-25},${getHeight/2} ${getWidth-35},${getHeight/2+10} ${getWidth-35},${getHeight/2+5} ${getWidth-30},${getHeight/2} ${getWidth-35},${getHeight/2-5} ${getWidth-35},${getHeight/2-10}`">
                <animate attributeName="fill-opacity" values="0.2;1;0.2" :dur="`${dur}s`" repeatCount="indefinite" />
            </polygon>
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
    name:"LETitleBox1",
    props: {
        width: {
            type: String,
            default: '400px'
        },
        height: {
            type: String,
            default: '40px'
        },
        backgroundColor: {
            type: String,
            default: 'transparent'
        },
        borderColor: {
            type: Array,
            default: () => { return ['#5B14DC', '#D6C3F7'] }
        },
        dur: {
            type: Number,
            default: 2
        }
    },
    data() {
        return {
            getWidth: converse(this.width, this.$refs.leTitleBox, 'width', 100),
            getHeight: converse(this.height, this.$refs.leTitleBox, 'height', 20),        }
    },
    mounted() {
        window.addEventListener('resize', throttle(() => {
            this.getWidth = converse(this.width, this.$refs.leTitleBox, 'width', 100)
            this.getHeight = converse(this.height, this.$refs.leTitleBox, 'height', 20)
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
    left: 0;
    top: 0;
}
.title-box-content{
    position: relative;
    left: 40px;
}

</style>