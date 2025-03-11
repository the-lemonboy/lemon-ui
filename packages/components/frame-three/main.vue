<template>
  <div
    class="l-border-box-three"
    :style="` background-color:${backgroundColor}; width:${getWidth}px; height:${getHeight}px`"
  >
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <line class="l-corner" x1="0" y1="0" x2="25" y2="0" :stroke="borderColor[1]"></line>
      <line class="l-corner" x1="30" y1="0" x2="50" y2="0" :stroke="borderColor[1]"></line>
      <!-- 边框 -->
      <line
        class="border-line"
        :stroke="borderColor[0]"
        x1="50"
        y1="2"
        :x2="`${getWidth - 15}`"
        y2="2"
      ></line>
      <line
        class="border-line"
        :stroke="borderColor[0]"
        x1="0"
        y1="0"
        x2="0"
        :y2="`${getHeight}`"
      ></line>
      <line
        class="border-line"
        :stroke="borderColor[0]"
        :x1="`${getWidth}`"
        y1="0"
        :x2="`${getWidth}`"
        :y2="`${getHeight}`"
      ></line>
      <line
        class="border-line"
        :stroke="borderColor[0]"
        x1="15"
        :y1="`${getHeight - 1}`"
        :x2="`${getWidth - 50}`"
        :y2="`${getHeight - 1}`"
      ></line>
      <!-- 右上角 -->
      <line
        class="l-corner"
        :x1="`${getWidth - 15}`"
        y1="0"
        :x2="`${getWidth}`"
        y2="0"
        :stroke="borderColor[1]"
      ></line>
      <!-- 左下角 -->
      <line
        class="l-corner"
        x1="0"
        :y1="`${getHeight}`"
        x2="15"
        :y2="`${getHeight}`"
        :stroke="borderColor[1]"
      ></line>
      <!-- 右下角 -->
      <line
        class="l-corner"
        :stroke="borderColor[1]"
        :x1="`${getWidth - 50}`"
        :y1="`${getHeight}`"
        :x2="`${getWidth - 35}`"
        :y2="`${getHeight}`"
      ></line>
      <line
        class="l-corner"
        :stroke="borderColor[1]"
        :x1="`${getWidth - 30}`"
        :y1="`${getHeight}`"
        :x2="`${getWidth}`"
        :y2="`${getHeight}`"
      ></line>
      <!-- 背景颜色 -->
      <polygon
        :fill="backgroundColor"
        :points="`1,3 ${getWidth - 1},3 ${getWidth - 1},${getHeight - 3} 1,${getHeight - 3}`"
      ></polygon>
    </svg>

    <div class="border-box-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { converse } from '../../utils/conversion';

export default {
  name: 'LEBorderBox3',
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
      type: Array,
      default: () => {
        return ['gray', 'white'];
      },
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
  },
  computed: {
    getWidth() {
      return converse(this.width, this.$refs.leFrameBox, 'width');
    },
    getHeight() {
      return converse(this.height, this.$refs.leFrameBox, 'height');
    },
  },
};
</script>
<style lang="scss" scoped>
.l-border-box-three {
  position: relative;
}
.l-border-svg-container {
  position: absolute;
}
.l-corner {
  stroke-width: 6;
}
</style>
