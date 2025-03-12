<template>
  <div
    class="l-border-box-one"
    ref="leFrameBoxOne"
    :style="`box-shadow: inset 0 0 10px ${borderColor}; border: 1px solid ${borderColor[0]}; background-color:${backgroundColor}; width:${getWidth}px; height:${getHeight}px`"
  >
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <!-- 外角 -->
      <polyline class="l-corner-one" :stroke="cornerColor[1]" :points="`0, 25 0, 0 25, 0`" />
      <polyline
        class="l-corner-one"
        :stroke="cornerColor[1]"
        :points="`${getWidth - 25}, 0 ${getWidth}, 0 ${getWidth}, 25`"
      />
      <polyline
        class="l-corner-one"
        :stroke="cornerColor[1]"
        :points="`${getWidth - 25}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 25}`"
      />
      <polyline
        class="l-corner-one"
        :stroke="cornerColor[1]"
        :points="`0, ${getHeight - 25} 0, ${getHeight} 25, ${getHeight}`"
      />

      <polyline class="l-corner-two" :stroke="cornerColor[0]" :points="`0, 10 0, 0 10, 0`" />
      <polyline
        class="l-corner-two"
        :stroke="cornerColor[0]"
        :points="`${getWidth - 10}, 0 ${getWidth}, 0 ${getWidth}, 10`"
      />
      <polyline
        class="l-corner-two"
        :stroke="cornerColor[0]"
        :points="`${getWidth - 10}, ${getHeight} ${getWidth}, ${getHeight} ${getWidth}, ${getHeight - 10}`"
      />
      <polyline
        class="l-corner-two"
        :stroke="cornerColor[0]"
        :points="`0, ${getHeight - 10} 0, ${getHeight} 10, ${getHeight}`"
      />
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
  name: 'LEBorderBox1',
  props: {
    width: {
      type: String,
      default: '400px',
    },
    height: {
      type: String,
      default: '300px',
    },
    borderColor: {
      type: String,
      default: '#BCD4F5',
    },
    cornerColor: {
      type: Array,
      default: () => {
        return ['#BCD4F5', '#78BCFA'];
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
      resizeHandler: null,
    };
  },
  methods: {
    initSize() {
      this.$nextTick(() => {
        if (this.$refs.leFrameBoxOne) {
          this.getWidth = converse(this.width, this.$refs.leFrameBoxOne, 'width');
          this.getHeight = converse(this.height, this.$refs.leFrameBoxOne, 'height');
        }
      });
    },
  },
  mounted() {
    this.initSize();
    this.resizeHandler = throttle(() => {
      this.getWidth = converse(this.width, this.$refs.leFrameBoxOne, 'width');
      this.getHeight = converse(this.height, this.$refs.leFrameBoxOne, 'height');
    }, 1000);
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
};
</script>
<style scoped lang="scss">
.l-border-box-one {
  position: relative;
  width: 100%;
  height: 100%;

  .l-border-svg-container {
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;

    & > polyline {
      fill: none;
      stroke-linecap: round;
    }
  }

  .l-corner-one {
    stroke-width: 2;
  }

  .l-corner-two {
    stroke-width: 5;
  }

  .border-box-content {
    position: relative;
    width: 100%;
    height: 100%;
  }
}
</style>
