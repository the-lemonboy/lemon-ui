<template>
    <div id="screen-adaptive">
        <div class="wrapper" ref="screenAdapteRef">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name:'LEScreenAdaptive',
    props: {
        width: {
            type: Number,
            default: 1920
        },
        height: {
            type: Number,
            default: 1080
        },
        bodyOverflowHidden: {
            type: Boolean,
            default: true
        }

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
            observer: ''
        }
    },
    // mounted() {
    //     // nextTick(async () => {
    //     //     await initScreen()
    //     // })
    //     // this.listenerDom()
    //     window.addEventListener('resize', this.initScreen)
    // },
    methods: {
        debounce(fn, delay) {
    let timer;
    return function (...args) {
      if (timer) clearTimeout(timer);
  
      timer = setTimeout(() => {
        if (typeof fn === 'function') {
          fn.apply(null, args);
        }
        clearTimeout(timer);
      }, delay > 0 ? delay : 100);
    }
  },
        initSize() {
            return new Promise(resolve => {
                this.$nextTick(() => {
                    const dom = this.$refs.screenAdapteRef;
                    this.curWidth = dom ? dom.clientWidth : 0;
                    this.curHeight = dom ? dom.clientHeight : 0;
                    // this.adapteScreen();
                    console.log(this.curWidth + "=====curwidth")
                    resolve()
                })
            })
        },
        initBodyStyle() {
            if (this.bodyOverflowHidden) {
                this.bodyOverflow = document.body.style.overflow
                document.body.style.overflow = 'hidden'
            }
        },
        updateSize() {
            const dom = this.$refs.screenAdapteRef;
            const { width, height } = this
            if (width && height) {
                dom.style.width = `${width}px`
                dom.style.height = `${height}px`
            }
        },
        autoScale(scale) {
            //   if (!props.autoScale) return
            const dom = this.$refs.screenAdapteRef;
            // const {currentWidth,currentHeight} = this
            this.domWidth = dom.clientWidth
            this.domHeight = dom.clientHeight
            this.rootWidth = document.body.clientWidth
            this.rootHeight = document.body.clientHeight
            dom.style.transform = `scale(${scale},${scale})`
            let mx = Math.max((this.domWidth - this.rootWidth * scale) / 2, 0)
            let my = Math.max((this.domHeight - this.rootHeight * scale) / 2, 0)
            //   if (typeof props.autoScale === 'object') {
            //     !props.autoScale.x && (mx = 0)
            //     !props.autoScale.y && (my = 0)
            //   }
              dom.style.margin = `${my}px ${mx}px`
        },
        updateScale() {
            // 获取真实视口尺寸
            const { width, height } = this
            const currentWidth = document.body.clientWidth
            const currentHeight = document.body.clientHeight
            // 获取大屏最终的宽高
            const realWidth = width || 1920
            const realHeight = height || 1080
            // 计算缩放比例
            const widthScale = currentWidth / +realWidth
            const heightScale = currentHeight / +realHeight
            // 若要铺满全屏，则按照各自比例缩放
            // if (props.fullScreen) {
            //   el.value!.style.transform = `scale(${widthScale},${heightScale})`
            //   return false
            // }
            // 按照宽高最小比例进行缩放
            const scale = Math.min(widthScale, heightScale)
            this.autoScale(scale)
        },

        onResize() {
                this.initSize()
            this.updateSize()
            this.updateScale()

        },
        
        initMutationObserver() {
            const dom = this.$refs.screenAdapteRef;
            const observer = (this.observer = new MutationObserver(() => {
                this.debounce(this.onResize(),1000)
            }))
            observer.observe(dom, {
                attributes: true,
                attributeFilter: ['style'],
                attributeOldValue: true
            })
        },
        // listenerDom() {
        //     let self = this
        //     const dom = this.$refs.screenAdapteRef;
        //     // const bindDebounce = debounce(, 1000, true)
        //     // const observerDom = observerDomResize(dom, bindDebounce);
        //     window.addEventListener('resize', self.initScreen())
        // },
        adapteScreen() {
            this.$nextTick(() => {
                const { curWidth, curHeight, width, height } = this;
                const dom = this.$refs.screenAdapteRef;
                const scaleWidth = curWidth / width;
                const scaleHeight = curHeight / height;
                const scaleVal = Math.min(scaleWidth, scaleHeight);
                dom.style.transform = `scale(${scaleVal},${scaleVal})`;
                let mx = Math.max((curWidth - width * scaleVal) / 2, 0)
                let my = Math.max((curHeight - height * scaleVal) / 2, 0)
                dom.style.margin = `${my}px ${mx}px`
            })
        },
        handleClick(evt){
        this.$emit('click', evt);
    },
    },

    mounted() {
        this.initBodyStyle()
        window.addEventListener('resize', this.debounce(()=>{this.onResize()},1000))
        this.$nextTick(async () => {
            await this.initSize()
            this.updateSize()
            this.updateScale()

            this.initMutationObserver()
        })
    }
}
</script>

<style lang="scss" scoped>
#screen-adaptive {
    overflow: hidden;
    background-size: 100% 100%;
    background-color: #000;
    width: 100vw;
    height: 100vh;
}

.wrapper {
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
