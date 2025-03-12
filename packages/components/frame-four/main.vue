<template>
  <div ref="leFrameBoxFour" class="l-border-box-four" :style="`width:${getWidth}px; height:${getHeight}px;`">
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <defs>
        <filter id="filterId" height="150%" width="150%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="0.1" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="borderColor[0]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <!-- 标题 -->
      <polygon
        :fill="backgroundColor"
        :stroke="borderColor[0]"
        :points="`${getWidth / 2},15 ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight / 2},15 ${getWidth / 2 - getTitleWidth / 2},${getTitleHeight / 2 + 15} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight / 2},${getTitleHeight + 15} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight / 2},${getTitleHeight + 15} ${getWidth / 2 + getTitleWidth / 2},${getTitleHeight / 2 + 15} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight / 2},15`"
      ></polygon>
      <polygon
        filter="url(#filterId)"
        :fill="backgroundColor"
        :stroke="borderColor[0]"
        :points="`${getWidth / 2 - getTitleWidth / 2 + getTitleHeight / 2},${getTitleHeight + 19} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight / 2},${getTitleHeight + 19} ${getWidth / 2 + getTitleWidth / 2 + 5},${getTitleHeight / 2 + 15} ${getWidth - 10},${getTitleHeight / 2 + 15} ${getWidth},${getTitleHeight / 2 + 25} ${getWidth},${getHeight - 20} ${getWidth - 10},${getHeight - 10} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight + 10},${getHeight - 10} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight},${getHeight - 20} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight + 10},${getHeight - 20} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight},${getHeight - 10} 10,${getHeight - 10} 0,${getHeight - 20} 0,${getTitleHeight / 2 + 25} 10,${getTitleHeight / 2 + 15} ${getWidth / 2 - getTitleWidth / 2 - 5},${getTitleHeight / 2 + 15}`"
      ></polygon>
      <polyline
        fill="transparent"
        stroke-width="1"
        :stroke="borderColor[1]"
        :points="`${getWidth},${getHeight - 10} ${getWidth - 10},${getHeight} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight + 10},${getHeight} ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight},${getHeight - 10} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight + 10},${getHeight - 10} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight},${getHeight} 10,${getHeight} 0,${getHeight - 10} `"
      ></polyline>
      <polyline
        fill="transparent"
        stroke-width="1"
        :stroke="borderColor[1]"
        :points="`0,${getTitleHeight / 2 + 20} 10,${getTitleHeight / 2 + 10} ${getWidth / 2 - getTitleWidth / 2 - 2},${getTitleHeight / 2 + 10} ${getWidth / 2 - getTitleWidth / 2 + getTitleHeight / 2 - 2},10 ${getWidth / 2 + getTitleWidth / 2 - getTitleHeight / 2 + 2},10 ${getWidth / 2 + getTitleWidth / 2 + 2},${getTitleHeight / 2 + 10} ${getWidth - 10},${getTitleHeight / 2 + 10} ${getWidth},${getTitleHeight / 2 + 20}`"
      ></polyline>
    </svg>
    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { converse } from '../../utils/conversion';
import { throttle } from '../../utils/throttle-debounce.js'

export default {
  name: 'LEBorderBox4',
  props: {
    width: {
      type: String,
      default: '400px',
    },
    height: {
      type: String,
      default: '300px',
    },
    titleWidth: {
      type: String,
      default: '200px',
    },
    titleHeight: {
      type: String,
      default: '50px',
    },
    borderColor: {
      type: Array,
      default: () => {
        return ['white', '#82D7F5'];
      },
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
  data(){
    return {
      getWidth: 0,
      getHeight: 0,
      getTitleWidth: 0,
      getTitleHeight: 0,
      resizeHandler: null,
    }
  },
  methods:{
    initSize(){
      this.$nextTick(() => {
        if (this.$refs.leFrameBoxFour) {
          this.getWidth = converse(this.width, this.$refs.leFrameBoxFour, 'width');
          this.getHeight = converse(this.height, this.$refs.leFrameBoxFour, 'height');
          this.getTitleWidth = converse(this.titleWidth, this.$refs.leFrameBoxFour, 'width', 50);
          this.getTitleHeight = converse(this.titleHeight, this.$refs.leFrameBoxFour, 'height', 50);
        }
      });
    },
  },
  mounted(){
    this.initSize();
    this.resizeHandler = throttle(() => {
      this.getWidth = converse(this.width, this.$refs.leFrameBoxFour, 'width');
      this.getHeight = converse(this.height, this.$refs.leFrameBoxFour, 'height');
      this.getTitleWidth = converse(this.titleWidth, this.$refs.leFrameBoxFour, 'width', 50);
      this.getTitleHeight = converse(this.titleHeight, this.$refs.leFrameBoxFour, 'height', 50);
    }, 1000);
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }
};
</script>
<style scoped lang="scss">
.l-border-box-four {
  position: relative;
  width: 100%;
  height: 100%;
}

.l-border-svg-container {
  position: absolute;
}

.border-box-content {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
