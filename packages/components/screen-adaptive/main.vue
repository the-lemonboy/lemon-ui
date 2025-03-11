<template>
  <div id="screen-adaptive">
    <div class="le-wrapper" ref="screenAdapteRef">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LEScreenAdaptive',
  props: {
    width: {
      type: Number,
      default: 1920,
    },
    height: {
      type: Number,
      default: 1080,
    },
    bodyOverflowHidden: {
      type: Boolean,
      default: true,
    },
    fullScreen: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      currentWidth: '',
      currentHeight: '',
      domWidth: '',
      domHeight: '',
      rootWidth: '',
      rootHeight: '',
      bodyOverflow: '',
      observer: '',
    };
  },
  methods: {
    debounce(fn, delay) {
      let timer;
      return function (...args) {
        if (timer) clearTimeout(timer);

        timer = setTimeout(
          () => {
            if (typeof fn === 'function') {
              fn.apply(null, args);
            }
            clearTimeout(timer);
          },
          delay > 0 ? delay : 100,
        );
      };
    },
    initSize() {
      return new Promise((resolve) => {
        this.$nextTick(() => {
          const dom = this.$refs.screenAdapteRef;
          this.curWidth = dom ? dom.clientWidth : 0;
          this.curHeight = dom ? dom.clientHeight : 0;
          resolve();
        });
      });
    },
    initBodyStyle() {
      if (this.bodyOverflowHidden) {
        this.bodyOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
      }
    },
    updateSize() {
      this.$nextTick(() => {
        const dom = this.$refs.screenAdapteRef;
        const { width, height } = this;
        if (width && height) {
          dom.style.width = `${width}px`;
          dom.style.height = `${height}px`;
        }
      });
    },
    autoScale(scale) {
      this.$nextTick(() => {
        const dom = this.$refs.screenAdapteRef;
        this.domWidth = dom.clientWidth;
        this.domHeight = dom.clientHeight;
        this.rootWidth = document.body.clientWidth;
        this.rootHeight = document.body.clientHeight;
        dom.style.transform = `scale(${scale},${scale})`;
      });
    },
    updateScale() {
      // 获取真实视口尺寸
      const { width, height } = this;
      const currentWidth = document.body.clientWidth;
      const currentHeight = document.body.clientHeight;
      // 获取大屏最终的宽高
      const realWidth = width || 1920;
      const realHeight = height || 1080;
      // 计算缩放比例
      const widthScale = currentWidth / +realWidth;
      const heightScale = currentHeight / +realHeight;
      if (this.fullScreen) {
        this.autoScale(widthScale);
      } else {
        // 按照宽高最小比例进行缩放
        const scale = Math.min(widthScale, heightScale);
        this.autoScale(scale);
      }
    },

    onResize() {
      this.initSize();
      this.updateSize();
      this.updateScale();
    },

    initMutationObserver() {
      const dom = this.$refs.screenAdapteRef;
      const observer = (this.observer = new MutationObserver(() => {
        this.debounce(this.onResize(), 1000);
      }));
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],
        attributeOldValue: true,
      });
    },
  },

  mounted() {
    this.initBodyStyle();
    window.addEventListener(
      'resize',
      this.debounce(() => {
        this.onResize();
      }, 1000),
    );
    this.$nextTick(async () => {
      await this.initSize();
      this.updateSize();
      this.updateScale();
      this.initMutationObserver();
    });
  },
};
</script>

<style lang="scss">
#screen-adaptive {
  overflow: hidden;
  background-size: 100% 100%;
  background-color: #000;
  width: 100vw;
  height: 100vh;
}

.le-wrapper {
  /* width: 1920px;
    height: 1080px; */
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 500ms;
  position: relative;
  overflow: hidden;
  z-index: 100;
  transform-origin: top left;
}
</style>
