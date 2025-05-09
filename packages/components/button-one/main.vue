<template>
  <div ref="leButtonBoxOne" class="l-button-box-one" :style="`width:${cornerWidth}px; height:${cornerHeight}px;`">
    <div class="l-button-box"
      :style="`border:1.5px solid ${borderColor[0]}; box-shadow:0 0 3px ${borderColor[0]},0 0 3px ${borderColor[0]} inset`">
      <button class="l-button" :class="disabled ? 'isDisabled' : ''"
        :style="`border-color:${borderColor[1]}; width:${getWidth}px; height:${getHeight}px;`" @click="handleClick">
        <slot></slot>
      </button>
    </div>
    <!-- 四角边框 -->
    <svg class="l-button-svg-container" :width="cornerWidth" :height="cornerHeight">
      <polyline class="l-corner-one" :stroke="cornerColor" :points="`0, 10 0, 0 10, 0`" />
      <polyline class="l-corner-one" :stroke="cornerColor"
        :points="`${cornerWidth - 10}, 0 ${cornerWidth}, 0 ${cornerWidth}, 10`" />
      <polyline class="l-corner-one" :stroke="cornerColor"
        :points="`${cornerWidth - 10}, ${cornerHeight} ${cornerWidth}, ${cornerHeight} ${cornerWidth}, ${cornerHeight - 10}`" />
      <polyline class="l-corner-one" :stroke="cornerColor"
        :points="`0, ${cornerHeight - 10} 0, ${cornerHeight} 10, ${cornerHeight}`" />
    </svg>
  </div>
</template>

<script>
import { converse } from '../../utils/conversion';
import { throttle } from '../../utils/throttle-debounce.js'

export default {
  name: 'LEButton1',
  props: {
    borderColor: {
      typeof: Array,
      default: () => {
        return ['rgba(255, 255, 255, 0.702)', 'rgba(255, 255, 255, 0.702)'];
      },
    },
    width: {
      type: String,
      default: '100px',
    },
    height: {
      type: String,
      default: '40px',
    },
    cornerColor: {
      type: String,
      default: '#D7EEEA',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      getWidth: 0,
      getHeight: 0,
      cornerWidth: 0,
      cornerHeight: 0,
      resizeHandler: null,
    }
  },
  methods: {
    handleClick(evt) {
      this.$emit('click', evt);
    },
    initData() {
      this.$nextTick(() => {
        if (this.$refs.leButtonBoxOne) {
          this.getWidth = converse(this.width, this.$refs.leButtonBoxOne, 'width');
          this.getHeight = converse(this.height, this.$refs.leButtonBoxOne, 'height');
          this.cornerWidth = this.getWidth + 18;
          this.cornerHeight = this.getHeight + 18;
        }
      })
    }
  },
  mounted() {
    this.initData();
    this.resizeHandler = throttle(() => {
      this.getWidth = converse(this.width, this.$refs.leButtonBoxOne, 'width', 100);
      this.getHeight = converse(this.height, this.$refs.leButtonBoxOne, 'height');
    }, 1000);
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.resizeHandler);
  },
};
</script>
<style scoped lang="scss">
.l-button-box {
  display: inline-block;
  padding: 2px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.l-button {
  color: white;
  background-color: transparent;
  cursor: pointer;
  border-style: solid;
}

.l-button-svg-container {
  width: 100%;
  height: 100%;

  &>polyline {
    fill: none;
    stroke-linecap: round;
  }
}

.l-corner-one {
  stroke-width: 5;
}

.l-button-box-one {
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}

.isDisabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
