<template>
  <div class="l-loading-two">
    <svg width="60px" height="50px">
  <circle :fill="backgroundColor[0]" stroke="none" cx="6" cy="20" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 15 ; 0 -15; 0 15" 
       repeatCount="indefinite" 
       begin="0.1"/>
  </circle>
  <circle :fill="backgroundColor[0]" stroke="none" cx="30" cy="20" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 10 ; 0 -10; 0 10" 
       repeatCount="indefinite" 
       begin="0.2"/>
  </circle>
  <circle :fill="backgroundColor[0]" stroke="none" cx="54" cy="20" r="6">
    <animateTransform 
       attributeName="transform" 
       dur="1s" 
       type="translate" 
       values="0 5 ; 0 -5; 0 5" 
       repeatCount="indefinite" 
       begin="0.3"/>
  </circle>
</svg>

<div class="loading-tip" :style="`color:${textColor}`">
        <slot />
      </div>
  </div>
</template>

<script>
export default {
  name:"LELoading2",
    props:{
      backgroundColor:{
            type:Array,
            default:()=>{return ['#511BD6']}
        },
        textColor:{
            type:String,
            default:'#DCEFED'
        }
    }

}
</script>

<style lang="scss">
.l-loading-two {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .loading-tip {
    font-size: 15px;
  }
}
</style>