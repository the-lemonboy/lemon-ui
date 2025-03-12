<template>
  <div
    ref="leTitleBoxSix"
    class="l-title-border-six"
    :style="` width:${getWidth}px; height:${getHeight}px;`"
  >
    <svg class="l-border-svg-container" :width="getWidth" :height="getHeight">
      <defs>
        <filter id="filterId1" height="200%" width="200%" x="-20%" y="-20%">
          <feMorphology operator="dilate" radius="2" in="SourceAlpha" result="thicken" />
          <feGaussianBlur in="thicken" stdDeviation="3" result="blurred" />
          <feFlood :flood-color="borderColor[1]" result="glowColor" />
          <feComposite in="glowColor" in2="blurred" operator="in" result="softGlowColored" />
          <feMerge>
            <feMergeNode in="softGlowColored" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        <path
          id="pathD"
          :d="`M 0,0 L 5,${getHeight / 4} Q 20,${getHeight - 4} 70,${getHeight - 4} L ${getTitleWidth},${getHeight - 4}
      Q ${getTitleWidth + 35},${getHeight - 4} ${getTitleWidth + 45},${(getHeight * 5) / 6} 
      Q ${getTitleWidth + 60},${(getHeight * 2) / 3} ${getTitleWidth + 90},${(getHeight * 2) / 3} L ${(getWidth * 5) / 6},${(getHeight * 2) / 3}
      Q ${(getWidth * 5) / 6 + 35},${(getHeight * 2) / 3} ${(getWidth * 5) / 6 + 45},${(getHeight * 5) / 6}
      Q ${(getWidth * 5) / 6 + 55},${getHeight - 4} ${(getWidth * 5) / 6 + 90},${getHeight - 4} L ${getWidth - 70},${getHeight - 4}
      Q ${getWidth - 20},${getHeight - 4} ${getWidth - 5},${getHeight / 4} L ${getWidth},0`"
          fill="transparent"
        />

        <radialGradient id="gradient" cx="50%" cy="50%" r="50%">
          <stop offset="0%" :stop-color="borderColor[1]" stop-opacity="1" />
          <stop offset="100%" :stop-color="borderColor[1]" stop-opacity="0" />
        </radialGradient>

        <mask id="mask">
          <circle cx="0" cy="0" r="150" fill="url(#gradient)">
            <animateMotion
              :dur="`${dur}s`"
              :path="`M 0,0 L 5,${getHeight / 4} Q 20,${getHeight - 4} 70,${getHeight - 4} L ${getTitleWidth},${getHeight - 4}
      Q ${getTitleWidth + 35},${getHeight - 4} ${getTitleWidth + 45},${(getHeight * 5) / 6} 
      Q ${getTitleWidth + 60},${(getHeight * 2) / 3} ${getTitleWidth + 90},${(getHeight * 2) / 3} L ${(getWidth * 5) / 6},${(getHeight * 2) / 3}
      Q ${(getWidth * 5) / 6 + 35},${(getHeight * 2) / 3} ${(getWidth * 5) / 6 + 45},${(getHeight * 5) / 6}
      Q ${(getWidth * 5) / 6 + 55},${getHeight - 4} ${(getWidth * 5) / 6 + 90},${getHeight - 4} L ${getWidth - 70},${getHeight - 4}
      Q ${getWidth - 20},${getHeight - 4} ${getWidth - 5},${getHeight / 4} L ${getWidth},0`"
              rotate="auto"
              repeatCount="indefinite"
            />
          </circle>
        </mask>
      </defs>
      <path
        :stroke="borderColor[0]"
        :stroke-width="2"
        :fill="backgroundColor"
        :d="`M 0,0 L 5,${getHeight / 4} Q 20,${getHeight - 4} 70,${getHeight - 4} L ${getTitleWidth},${getHeight - 4}
      Q ${getTitleWidth + 35},${getHeight - 4} ${getTitleWidth + 45},${(getHeight * 5) / 6} 
      Q ${getTitleWidth + 60},${(getHeight * 2) / 3} ${getTitleWidth + 90},${(getHeight * 2) / 3} L ${(getWidth * 5) / 6},${(getHeight * 2) / 3}
      Q ${(getWidth * 5) / 6 + 35},${(getHeight * 2) / 3} ${(getWidth * 5) / 6 + 45},${(getHeight * 5) / 6}
      Q ${(getWidth * 5) / 6 + 55},${getHeight - 4} ${(getWidth * 5) / 6 + 90},${getHeight - 4} L ${getWidth - 70},${getHeight - 4}
      Q ${getWidth - 20},${getHeight - 4} ${getWidth - 5},${getHeight / 4} L ${getWidth},0`"
      ></path>
      <path
        xlink-href="#pathD"
        mask="url(#mask)"
        filter="url(#filterId1)"
        fill="none"
        stroke="#02D6B3"
        :d="`M 0,0 L 5,${getHeight / 4} Q 20,${getHeight - 4} 70,${getHeight - 4} L ${getTitleWidth},${getHeight - 4}
      Q ${getTitleWidth + 35},${getHeight - 4} ${getTitleWidth + 45},${(getHeight * 5) / 6} 
      Q ${getTitleWidth + 60},${(getHeight * 2) / 3} ${getTitleWidth + 90},${(getHeight * 2) / 3} L ${(getWidth * 5) / 6},${(getHeight * 2) / 3}
      Q ${(getWidth * 5) / 6 + 35},${(getHeight * 2) / 3} ${(getWidth * 5) / 6 + 45},${(getHeight * 5) / 6}
      Q ${(getWidth * 5) / 6 + 55},${getHeight - 4} ${(getWidth * 5) / 6 + 90},${getHeight - 4} L ${getWidth - 70},${getHeight - 4}
      Q ${getWidth - 20},${getHeight - 4} ${getWidth - 5},${getHeight / 4} L ${getWidth},0`"
      ></path>
    </svg>
    <!-- <div class="title-box-content_left" :style="leftSlotProperty">
      <slot name="title"></slot>
    </div>
    <div class="title-box-content_right" :style="rightSlotProperty">
      <slot name="timer"></slot>
    </div> -->
  </div>
</template>

<script>
import { converse } from '../../utils/conversion';
import { throttle } from '../../utils/throttle-debounce.js'

export default {
  name: 'LETitleBox6',
  props: {
    width: {
      type: String,
      default: '1920px',
    },
    titleWidth: {
      type: String,
      default: '400px',
    },
    height: {
      type: String,
      default: '80px',
    },
    backgroundColor: {
      type: String,
      default: 'transparent',
    },
    borderColor: {
      type: Array,
      default: () => ['yellow', 'blue'],
    },
    dur: {
      type: Number,
      default: 5,
    },
    leftSlotProperty: {
      type: Object,
      default: () => {
        return {
          position: 'absolute',
          left: '2.5rem',
          top: '50%',
          transform: 'translate(0,-50)',
          display: 'inline-block',
        };
      },
    },
    rightSlotProperty: {
      type: Object,
      default: () => {
        return {
          position: 'absolute',
          right: '2.5rem',
          top: '50%',
          transform: 'translate(0,-50)',
          display: 'inline-block',
        };
      },
    },
  },
  data(){
    return {
      getWidth: 0,
      getHeight: 0,
      getTitleWidth: 0,
      resizeHandler: null,
    }
  },
  methods:{
    initSize(){
      this.$nextTick(() => {
        if (this.$refs.leTitleBoxSix) {
          this.getWidth = converse(this.width, this.$refs.leTitleBoxSix, 'width', 100);
          this.getHeight = converse(this.height, this.$refs.leTitleBoxSix, 'height', 20);
          this.getTitleWidth = converse(this.titleWidth, this.$refs.leTitleBoxSix, 'width', 50);
        }
      });
    },
  },
  mounted(){
    this.initSize();
    this.resizeHandler = throttle(() => {
      this.getWidth = converse(this.width, this.$refs.leTitleBoxSix, 'width', 100);
      this.getHeight = converse(this.height, this.$refs.leTitleBoxSix, 'height', 20);
      this.getTitleWidth = converse(this.titleWidth, this.$refs.leTitleBoxSix, 'width', 50);
    }, 1000);
    window.addEventListener('resize', this.resizeHandler);
  },
  beforeDestroy() {
        window.removeEventListener('resize', this.resizeHandler);
    }
};
</script>
<style lang="scss" scoped>
.l-title-border-six {
  position: relative;
}
.l-border-svg-container {
  position: absolute;
  left: 0;
  top: 0;
}
.title-box-content {
  position: absolute;
  left: 2.5rem; /* 10 * 0.25rem (Tailwind 计算方式) */
  top: 50%;
  display: inline-block;
  transform: translateY(-50%);
}
</style>
