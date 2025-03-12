<template>
  <div
    class="l-border-box-two"
    ref="leFrameBoxTwo"
    :style="`width:${getWidth}px; height:${getHeight}px;`"
  >
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <defs>
        <circle id="theCircle" :fill="borderColor[0]" r="4"></circle>
      </defs>
      <polygon
        :stroke="borderColor"
        :fill="backgroundColor"
        :points="`${getTitleHeight},0 ${getWidth - 80},1 ${getWidth - 70},10 ${getWidth - 20},10 ${getWidth - 10},1 ${getWidth},1 ${getWidth},${getHeight - getTitleHeight} ${getWidth - getTitleHeight},${getHeight} 0,${getHeight}  0,${getTitleHeight}`"
        stroke-width="1"
      ></polygon>
      <polygon
        :fill="cornerColor[0]"
        :points="`0,0 ${getTitleHeight - 8},0 0,${getTitleHeight - 8}`"
      ></polygon>
      <polygon
        :fill="cornerColor[1]"
        :points="`${getWidth},${getHeight} ${getWidth - getTitleHeight + 8},${getHeight} ${getWidth},${getHeight - getTitleHeight + 8}`"
      ></polygon>
      <!-- 右上角的四边形 -->
      <g>
        <polygon
          :fill="cornerColor[2]"
          :points="`${getWidth - 75},0 ${getWidth - 67} 0 ${getWidth - 59},7 ${getWidth - 67},7`"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          :fill="cornerColor[2]"
          :points="`${getWidth - 62},0 ${getWidth - 54} 0 ${getWidth - 46},7 ${getWidth - 54},7`"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          :fill="cornerColor[2]"
          :points="`${getWidth - 49},0 ${getWidth - 41} 0 ${getWidth - 33},7 ${getWidth - 41},7`"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>
        <polygon
          :fill="cornerColor[2]"
          :points="`${getWidth - 36},0 ${getWidth - 28} 0 ${getWidth - 20},7 ${getWidth - 28},7`"
        >
          <animate
            attributeName="opacity"
            values="1;0.7;1"
            dur="2s"
            begin="0s"
            repeatCount="indefinite"
          />
        </polygon>
      </g>
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
  name: 'LEBorderBox2',
  props: {
    width: {
      type: String,
      default: '400px',
    },
    height: {
      type: String,
      default: '300px',
    },
    titleHeight: {
      type: String,
      default: '30px',
    },
    borderColor: {
      type: String,
      default: '#00B9FF',
    },
    cornerColor: {
      type: Array,
      default: () => {
        return ['#76CFF4', '#76CFF4', '#76CFF4'];
      },
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
  data() {
    return {
      gradient: 'gradient',
      mask: 'mask',
      path: 'path',
      getTitleHeight: 0,
      getWidth: 0,
      getHeight: 0,
      resizeHandler: null,
    };
  },
  methods:{
    initSize(){
      this.$nextTick(() => {
        if (this.$refs.leFrameBoxTwo) {
          this.getWidth = converse(this.width, this.$refs.leFrameBoxTwo, 'width');
          this.getHeight = converse(this.height, this.$refs.leFrameBoxTwo, 'height');
          this.getTitleHeight = converse(this.titleHeight, this.$refs.leFrameBoxTwo, 'height');
        }
      });
    },
  },
  mounted(){
    this.initSize();
    this.resizeHandler = throttle(() => {
      this.getWidth = converse(this.width, this.$refs.leFrameBoxTwo, 'width');
      this.getHeight = converse(this.height, this.$refs.leFrameBoxTwo, 'height');
      this.getTitleHeight = converse(this.titleHeight, this.$refs.leFrameBoxTwo, 'height');
    }, 1000);
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }
};
</script>
<style lang="scss" scoped>
.l-border-box-two {
  position: relative;
  width: 100%;
  height: 100%;
}

.l-border-svg-container {
  position: absolute;
}
</style>
