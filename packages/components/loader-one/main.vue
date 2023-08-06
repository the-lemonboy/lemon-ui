<template>
    <div class="l-loading-one">
      <svg width="50px" height="50px">
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="transparent"
          stroke-width="3"
          stroke-dasharray="31.415, 31.415"
          :stroke="backgroundColor[0]"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="0, 25 25;360, 25 25"
            dur="1.5s"
            repeatCount="indefinite"
          />
       
        </circle>
  
        <circle
          cx="25"
          cy="25"
          r="10"
          fill="transparent"
          stroke-width="3"
          stroke-dasharray="15.7, 15.7"
          :stroke="backgroundColor[1]"
          stroke-linecap="round"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            values="360, 25 25;0, 25 25"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
      <div class="loading-tip" :style="`color:${textColor}`">
        <slot />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name:"LELoading1",
       props:{
        backgroundColor:{
        type:Array,
        default:()=>{return ['#511BD6','#A98CFA']}
       },
       textColor:{
        type:String,
        default:'#DCEFED'
       }
       },
      
  }
  </script>
  
  <style lang="scss" scoped src="./style.scss">
  </style>