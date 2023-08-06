<template>
  <div class="l-loading-three">
  <svg  x="0px" y="0px"
     width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve">
    <rect x="0" y="20" width="4" height="5" :fill="backgroundColor[0]">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="10" y="16" width="4" height="5" :fill="backgroundColor[1]">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.15s" dur="0.6s" repeatCount="indefinite" />
    </rect>
    <rect x="20" y="16" width="4" height="5" :fill="backgroundColor[2]">
      <animate attributeName="height" attributeType="XML"
        values="5;21;5" 
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
      <animate attributeName="y" attributeType="XML"
        values="13; 5; 13"
        begin="0.3s" dur="0.6s" repeatCount="indefinite" />
    </rect>
  </svg>
  <div class="loading-tip" :style="`color:${textColor}`">
        <slot />
      </div>
  </div>
</template>

<script>
export default {
  name:"LELoading3",
props:{
    backgroundColor:{
        type:Array,
        default:()=>{return ['#511BD6','#511BD6','#511BD6']}
    },
    textColor:{
        type:String,
        default:'#DCEFED'
       },
}
}
</script>

<style lang="scss">
.l-loading-three {
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