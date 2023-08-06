<template>
    <div class="l-border-box-four" :style="`width:${getWidth}px; height:${getHeight}px;`">
        <svg class="l-border-svg-container" :width="`${getWidth}`" :height="`${getHeight}`">
        <defs>
          <path
            :id="path"
            :d="pathD"
            fill="transparent"
          />
          <radialGradient
            :id="gradient"
            cx="50%" cy="50%" r="50%"
          >
            <stop
              offset="0%" stop-color="#fff"
              stop-opacity="1"
            />
            <stop
              offset="100%" stop-color="#fff"
              stop-opacity="0"
            />
          </radialGradient>
  
          <mask :id="mask">
            <circle cx="0" cy="0" r="150" :fill="`url(#${gradient})`">
              <animateMotion
                :dur="`${dur}s`"
                :path="pathD"
                rotate="auto"
                repeatCount="indefinite"
              />
            </circle>
          </mask>
        </defs>
  
        <polygon :fill="backgroundColor" :points="`5, 5 ${getWidth - 5}, 5 ${getWidth - 5} ${getHeight - 5} 5, ${getHeight - 5}`" />
  
        <use
          :stroke="borderColor[0]"
          stroke-getWidth="1"
          :xlink:href="`#${path}`"
        />
  
        <use
          :stroke="borderColor[1]"
          stroke-width="3"
          :xlink:href="`#${path}`"
          :mask="`url(#${mask})`"
        >
          <animate
            attributeName="stroke-dasharray"
            :from="`0, ${length}`"
            :to="`${length}, 0`"
            :dur="`${dur}s`"
            repeatCount="indefinite"
          />
        </use>
      </svg>
  
      <div class="border-box-content">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script> 
 import { converse } from '../../utils/conversion';
  import {throttle} from '../../utils/throttle-debounce.js'
  export default {
      name: 'LEBorderBox4',
      props: {
          width: {
              type: String,
              default: '400px'
          },
          height: {
              type: String,
              default: '300px'
          },
          borderColor: {
              type: Array,
              default: () => { return ['#D1DADA', '#82D7F5'] }
          },
          backgroundColor: {
              type: String,
              default: 'transparent'
          },
          dur: {
              type: Number,
              default: 5
          },
          reverse: {
              type: Boolean,
              default: true
          }
      },
      computed: {
          length() {
              const width = this.getWidth;
              const height = this.getHeight;
              return (width + height - 5) * 2
          },
          pathD() {
              const reverse = this.reverse;
              const width = this.getWidth;
              const height = this.getHeight;

              if (reverse) return `M 2.5, 2.5 L 2.5, ${height - 2.5} L ${width - 2.5}, ${height - 2.5} L ${width - 2.5}, 2.5 L 2.5, 2.5`

              return `M2.5, 2.5 L${width - 2.5}, 2.5 L${width - 2.5}, ${height - 2.5} L2.5, ${height - 2.5} L2.5, 2.5`
          }
      },
      data() {
      return {
        gradient: 'gradient',
        mask: 'mask',
        path: 'path',
        getWidth: converse(this.width, this.$refs.leFrameBox, 'width'),
        getHeight: converse(this.height, this.$refs.leFrameBox, 'height'),
      }
    },
    mounted() {
      window.addEventListener('resize', throttle(() => {
        this.getWidth = converse(this.width, this.$refs.leFrameBox, 'width')
        this.getHeight = converse(this.height, this.$refs.leFrameBox, 'height')
      }, 1000))
    },
    beforeDestroy() {
      window.removeEventListener('resize', throttle);
    }
  }
  </script>
  
  <style lang="scss" scoped  src="./style.scss">
  </style>
  