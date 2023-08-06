<template>
     <div class="l-button-box-one" :style="`width:${cornerWidth}px; height:${cornerHeight}px;`">
  <div class="l-button-box" :style="`border:1.5px solid ${borderColor[0]}; box-shadow:0 0 3px ${borderColor[0]},0 0 3px ${borderColor[0]} inset`">
<button class="l-button" :class="disabled? 'isDisabled' : '' "  :style="`border-color:${borderColor[1]}; width:${getWidth}px; height:${getHeight}px;`"><slot></slot></button>
  </div>
  <!-- 四角边框 -->
      <svg class="l-button-svg-container" :width="cornerWidth" :height="cornerHeight">
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`0, 10 0, 0 10, 0`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`${cornerWidth - 10}, 0 ${cornerWidth}, 0 ${cornerWidth}, 10`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`${cornerWidth - 10}, ${cornerHeight} ${cornerWidth}, ${cornerHeight} ${cornerWidth}, ${cornerHeight - 10}`" />
        <polyline class="l-corner-one" :stroke="cornerColor" :points="`0, ${cornerHeight - 10} 0, ${cornerHeight} 10, ${cornerHeight}`" />
      </svg>
</div>
</template>

<script>
import { converse } from '../../utils/conversion';
export default {
    name:"LEButton1",
    props: {
        borderColor: {
            typeof: Array,
            default: () => { return ['rgba(255, 255, 255, 0.702)', 'rgba(255, 255, 255, 0.702)'] }
        },
        width: {
            type: String,
            default: '100px'
        },
        height: {
            type: String,
            default: '40px'
        },
        cornerColor: {
            type: String,
            default: '#D7EEEA'
        },
        disabled: {
            type: Boolean,
            default: false
        }
    },
data(){
    return{

    }
},
computed:{
    getWidth(){
            return converse(this.width,this.$refs.leTitleBox,'width');
        },
        getHeight(){
            return converse(this.height,this.$refs.leTitleBox,'height');
        },
    cornerWidth(){
        return this.getWidth+18;
    },
    cornerHeight(){
        return this.getHeight+18;
    }
},
}
</script>

<style lang="scss" scoped src="./style.scss">
</style>