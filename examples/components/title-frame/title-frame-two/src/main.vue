<template>
  <div class="l-title-border-two" ref="leTitleBox" :style="`width:${getWidth}px; height:${getHeight}px;`">
    <svg class="l-border-svg-top-container" :width="getWidth" :height="getHeight">
        <defs><!--  -->
    <g id="circleId">
       <circle :fill="`${borderColor}`" r="4"></circle>
    </g>
    <g id="rectId">
        <rect :fill="`${borderColor}`" width="30" height="6" rx="3"></rect>
    </g>
</defs>
<use x="5" y="4" xlink:href="#circleId"></use>
<use x="15" y="1" xlink:href="#rectId"></use>
<use x="55" y="4" xlink:href="#circleId"></use>
<line class="line-one" x1="59" y1="4" x2="100" y2="4" :stroke="`${borderColor}`"></line>
<line class="line-two" x1="100" y1="4" :x2="`${getWidth-110}`" y2="4"  :stroke="`${borderColor}`"></line>
<line class="line-one" :x1="`${getWidth-70}`" y1="4" :x2="`${getWidth-110}`" y2="4" :stroke="`${borderColor}`"></line>
<use :x="`${getWidth-70}`" y="4" xlink:href="#circleId"></use>
<use :x="`${getWidth-60}`" y="1" xlink:href="#rectId"></use>
<use :x="`${getWidth-20}`" y="4" xlink:href="#circleId"></use>

<!-- 下边框 -->
<use x="5" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<use x="15" :y="`${getHeight-8}`" xlink:href="#rectId"></use>
<use x="55" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<line class="line-one" x1="59" :y1="`${getHeight-4}`" x2="100" :y2="`${getHeight-4}`" :stroke="`${borderColor}`"></line>
<line class="line-two" x1="100" :y1="`${getHeight-4}`" :x2="`${getWidth-110}`" :y2="`${getHeight-4}`"  :stroke="`${borderColor}`"></line>
<line class="line-one" :x1="`${getWidth-70}`" :y1="`${getHeight-4}`" :x2="`${getWidth-110}`" :y2="`${getHeight-4}`" :stroke="`${borderColor}`"></line>
<use :x="`${getWidth-70}`" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
<use :x="`${getWidth-60}`" :y="`${getHeight-8}`" xlink:href="#rectId"></use>
<use :x="`${getWidth-20}`" :y="`${getHeight-4}`" xlink:href="#circleId"></use>
    </svg>
    <div class="title-box-content" :style="`line-height: ${getHeight}px;`">
        <slot></slot>
      </div>
    </div>
</template>
<script>
import { converse } from '@/utils/conversion.js'
import {throttle} from '@/utils/throttle-debounce.js'
export default {
    name:"LeTitleBox2",
    props: {
        width: {
            type: String,
            default: '300px'
        },
        height: {
            type: String,
            default: '50px'
        },
        backgroundColor: {
            type: String,
            default: 'transparent'
        },
        borderColor: {
            type: String,
            default: 'orange'
        }
    },

    data() {
        return {
            getWidth: converse(this.width, this.$refs.leTitleBox, 'width', 200),
            getHeight: converse(this.height, this.$refs.leTitleBox, 'height', 20),
        }
    },
    mounted() {
        window.addEventListener('resize', throttle(() => {
            this.getWidth = converse(this.width, this.$refs.leTitleBox, 'width', 200)
            this.getHeight = converse(this.height, this.$refs.leTitleBox, 'height', 20)
        }, 1000))
    },
    beforeDestroy() {
        window.removeEventListener('resize', throttle);
    }
}

</script>

<style lang="scss" scoped>
.l-title-border-two{
    position: relative;
.l-border-svg-top-container{
   position:absolute;
}
}
</style>