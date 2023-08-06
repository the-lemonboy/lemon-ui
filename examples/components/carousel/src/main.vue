<template>
    <div class="dv-scroll-board" >
      <div class="header" v-if="header.length" :style="`background-color: ${headerBGC};`">
        <div
          class="header-item"
          v-for="(headerItem, i) in header"
          :key="`${headerItem}${i}`"
          :style="`
            height: ${headerHeight}px;
            line-height: ${headerHeight}px;
            width: ${widths[i]}px;
          `"
          :align="aligns[i]"
          v-html="headerItem"
        />
      </div>
  
      <div
      
        class="rows"
        :style="`height: ${height - (header.length ? headerHeight : 0)}px;`"
      >
        <div
          class="row-item"
          v-for="(row, ri) in rows"
          :key="`${row.toString()}${row.scroll}`"
          :style="`
            height: ${heights[ri]}px;
            line-height: ${heights[ri]}px;
            background-color: ${[row.rowIndex % 2 === 0 ? 'evenRowBGC' : 'oddRowBGC']};
          `"
        >
          <div
            class="ceil"
            v-for="(ceil, ci) in row.ceils"
            :key="`${ceil}${ri}${ci}`"
            :style="`width: ${widths[ci]}px;`"
            :align="aligns[ci]"
            v-html="ceil"
            @click="emitEvent('click', ri, ci, row, ceil)"
            @mouseenter="handleHover(true, ri, ci, row, ceil)"
            @mouseleave="handleHover(false)"
          />
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
//   import autoResize from '../../../mixin/autoResize'
  
//   import { deepMerge } from '@jiaminghi/charts/lib/util/index'
  
//   import { deepClone } from '@jiaminghi/c-render/lib/plugin/util'
  
  export default {
    // name: 'DvScrollBoard', 
    // mixins: [autoResize],
    props: {
      config: {
        type: Object,
        default: () => ({})
      },
      height :{
          type:Number,
          default:220
      },
        /**
           * @description Board header
           * @type {Array<String>}
           * @default header = []
           * @example header = ['column1', 'column2', 'column3']
           */
        //    header: {
        //     type:Array
        //   },
          /**
           * @description Board data
           * @type {Array<Array>}
           * @default data = []
           */
          data: {
            type:Array,
            default:()=>{
                return [  ['行1列1', '行1列2', '行1列3'],
                            ['行2列1', '行2列2', '行2列3'],
                            ['行3列1', '行3列2', '行3列3'],
                            ['行4列1', '行4列2', '行4列3'],
                            ['行5列1', '行5列2', '行5列3'],
                            ['行6列1', '行6列2', '行6列3'],
                            ['行7列1', '行7列2', '行7列3'],
                            ['行8列1', '行8列2', '行8列3'],
                            ['行9列1', '行9列2', '行9列3'],
                            ['行10列1', '行10列2', '行10列3']
    ]
            }
          },
          /**
           * @description Row num
           * @type {Number}
           * @default rowNum = 5
           */
          rowNum: {
            type:Number,
            default:5
          },
          /**
           * @description Header background color
           * @type {String}
           * @default headerBGC = '#00BAFF'
           */
          headerBGC: {
            type:String,
            default:'#00BAFF'
        },
          /**
           * @description Odd row background color
           * @type {String}
           * @default oddRowBGC = '#003B51'
           */
          oddRowBGC: {
            type:String,
            default:'#003B51'},
          /**
           * @description Even row background color
           * @type {String}
           * @default evenRowBGC = '#003B51'
           */
          evenRowBGC: {
            type:String,
          default:'#0A2732',
          },
          /**
           * @description Scroll wait time
           * @type {Number}
           * @default waitTime = 2000
           */
          waitTime: {
            type:Number,
            default:2000
          },
          /**
           * @description Header height
           * @type {Number}
           * @default headerHeight = 35
           */
          headerHeight: {
            type:Number,
            default:35
          },
          /**
           * @description Column width
           * @type {Array<Number>}
           * @default columnWidth = []
           */
          columnWidth: {
            type:Array
          },
          /**
           * @description Column align
           * @type {Array<String>}
           * @default align = []
           * @example align = ['left', 'center', 'right']
           */
          align: {
            type:Array
          },
          /**
           * @description Show index
           * @type {Boolean}
           * @default index = false
           */
          index: {
            type:Boolean,
            default:false
          },
          /**
           * @description index Header
           * @type {String}
           * @default indexHeader = '#'
           */
          indexHeader: {
            type:String,
            default:'#'
          },
          /**
           * @description Carousel type
           * @type {String}
           * @default carousel = 'single'
           * @example carousel = 'single' | 'page'
           */
          carousel: {
            type:String,
            default:'single'
          },
          /**
           * @description Pause scroll when mouse hovered
           * @type {Boolean}
           * @default hoverPause = true
           * @example hoverPause = true | false
           */
          
          hoverPause: {
            type:Boolean,
            default:true
        },

    },
    mounted(){
console.log(this.height)
console.log(this.calcRowsData())
console.log(this.data)
    },
    data () {
      return {
        ref: 'scroll-board',
        mergedConfig: null,
  
        header: ['column1', 'column2', 'column3'],
  
        rowsData: [],
  
        rows: [],
  
        widths: [],
  
        heights: [],
  
        avgHeight: 0,
  
        aligns: [],
  
        animationIndex: 0,
  
        animationHandler: '',
  
        updater: 0,
  
        needCalc: false
    }
    },
    watch: {
      config () {
        const { stopAnimation, calcData } = this
        stopAnimation()
        this.animationIndex = 0
        calcData()
      }
    },
    methods: {
      handleHover(enter, ri, ci, row, ceil){
        const { mergedConfig, emitEvent, stopAnimation, animation } = this
  
        if (enter) emitEvent('mouseover', ri, ci, row, ceil)
        if (!this.hoverPause) return
  
        if (enter) {
          stopAnimation()
        } else {
          animation(true)
        }
      },
      afterAutoResizeMixinInit () {
        const { calcData } = this
  
        calcData()
      },
      onResize () {
        const { mergedConfig, calcWidths, calcHeights } = this
  
        if (!mergedConfig) return
  
        calcWidths()
  
        calcHeights()
      },
      calcData () {
        const { mergeConfig, calcHeaderData, calcRowsData } = this
  
        mergeConfig()
  
        calcHeaderData()
  
        calcRowsData()
  
        const { calcWidths, calcHeights, calcAligns } = this
  
        calcWidths()
  
        calcHeights()
  
        calcAligns()
  
        const { animation } = this
  
        animation(true)
      },
      mergeConfig () {
        let { config, defaultConfig } = this
  
        // this.mergedConfig = deepMerge(deepClone(defaultConfig, true), config || {})
         this.mergeConfig = this.defaultConfig
      },
      calcHeaderData () {
        // let { header, index, indexHeader} = this.mergedConfig
        let header = this.header
        let index = this.index
        let indexHeader = this.indexHeader
  
        if (!header.length) {
          this.header = []
  
          return
        }
  
        header = [...header]
  
        if (index) header.unshift(indexHeader)
  
        this.header = header
      },
      calcRowsData () {
        // let { data, index, headerBGC, rowNum } = this.mergedConfig
        let data = this.data
        let index = this.index
        let headerBGC = this.headerBGC
        let rowNum = this.rowNum
  
        if (index) {
          data = data.map((row, i) => {
            row = [...row]
  
            const indexTag = `<span class="index" style="background-color: ${headerBGC};">${i + 1}</span>`
  
            row.unshift(indexTag)
  
            return row
          })
        }
  
        data = data.map((ceils, i) => ({ ceils, rowIndex: i }))
  
        const rowLength = data.length
  
        if (rowLength > rowNum && rowLength < 2 * rowNum) {
          data = [...data, ...data]
        }
  
        data = data.map((d, i) => ({ ...d, scroll: i }))
        this.rowsData = data
        this.rows = data
        console.log(this.rows)
      },
      calcWidths () {
        const { width, mergedConfig, rowsData } = this
        // const width = this.width
  
        // const { columnWidth, header } = mergedConfig
        const columnWidth = this.columnWidth
        const header = this.header
        const usedWidth = columnWidth.reduce((all, w) => all + w, 0)
  
        let columnNum = 0
        if (rowsData[0]) {
          columnNum = rowsData[0].ceils.length
        } else if (header.length) {
          columnNum = header.length
        }
  
        const avgWidth = (width - usedWidth) / (columnNum - columnWidth.length)
  
        const widths = new Array(columnNum).fill(avgWidth)
  
        // this.widths = deepMerge(widths, columnWidth)
        this.widths = widths
      },
      calcHeights (onresize = false) {
        const { height, mergedConfig, header } = this
  
        // const { headerHeight, rowNum, data } = mergedConfig
        const headerHeight = this.headerHeight
        const rowNum = this.rowNum
        const data = this.data
  
        let allHeight = height
  
        if (header.length) allHeight -= headerHeight
  
        const avgHeight = allHeight / rowNum
  
        this.avgHeight = avgHeight
  
        if (!onresize) this.heights = new Array(data.length).fill(avgHeight)
      },
      calcAligns () {
        const { header, mergedConfig } = this
  
        const columnNum = header.length
  
        let aligns = new Array(columnNum).fill('left')
  
        const { align } = this.align
  
        // this.aligns = deepMerge(aligns, align)
        this.aligns = aligns
      },
      async animation (start = false) {
        const { needCalc, calcHeights, calcRowsData } = this
  
        if (needCalc) {
          calcRowsData()
          calcHeights()
          this.needCalc = false
        }
  
        let { avgHeight, animationIndex, mergedConfig, rowsData, animation, updater } = this
  
        // const { waitTime, carousel, rowNum } = mergedConfig
        const waitTime = this.waitTime
        const carousel = this.carousel
        const rowNum = this.rowNum
  
        const rowLength = rowsData.length
  
        if (rowNum >= rowLength) return
  
        if (start) {
          await new Promise(resolve => setTimeout(resolve, waitTime))
          if (updater !== this.updater) return
        }
  
        const animationNum = carousel === 'single' ? 1 : rowNum
  
        let rows = rowsData.slice(animationIndex)
        rows.push(...rowsData.slice(0, animationIndex))
  
        this.rows = rows.slice(0, carousel === 'page' ? rowNum * 2 : rowNum + 1)
        this.heights = new Array(rowLength).fill(avgHeight)
  
        await new Promise(resolve => setTimeout(resolve, 300))
        if (updater !== this.updater) return
  
        this.heights.splice(0, animationNum, ...new Array(animationNum).fill(0))
  
        animationIndex += animationNum
  
        const back = animationIndex - rowLength
        if (back >= 0) animationIndex = back
  
        this.animationIndex = animationIndex
        this.animationHandler = setTimeout(animation, waitTime - 300)
      },
      stopAnimation () {
        const { animationHandler, updater } = this
  
        this.updater = (updater + 1) % 999999
  
        if (!animationHandler) return
  
        clearTimeout(animationHandler)
      },
      emitEvent (type, ri, ci, row, ceil) {
        const { ceils, rowIndex } = row
  
        this.$emit(type, {
          row: ceils,
          ceil,
          rowIndex,
          columnIndex: ci
        })
      },
      updateRows(rows, animationIndex) {
        // const { mergedConfig, animationHandler, animation } = this
  
        // // this.mergedConfig = {
        // //   ...mergedConfig,
        // //   data: [...rows]
        // // }
        // // this.data = [...rows]
  
        // this.needCalc = true
  
        // if (typeof animationIndex === 'number') this.animationIndex = animationIndex
        // if (!animationHandler) animation(true)
      }
    },
    destroyed () {
      const { stopAnimation } = this
      stopAnimation()
    }
  }
  </script>
  
  <style lang="scss">
.dv-scroll-board {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;

  .text {
    padding: 0 10px;
    box-sizing: border-box;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .header {
    display: flex;
    flex-direction: row;
    font-size: 15px;

    .header-item {
      @extend .text;
      transition: all 0.3s;
    }
  }

  .rows {
    overflow: hidden;

    .row-item {
      display: flex;
      font-size: 14px;
      transition: all 0.3s;
    }

    .ceil {
      @extend .text;
    }

    .index {
      border-radius: 3px;
      padding: 0px 3px;
    }
  }
}

  </style>
  