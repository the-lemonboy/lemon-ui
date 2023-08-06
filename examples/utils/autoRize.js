import { throttle } from "./throttle-debounce";
export const autoRize = function(newVal){
      window.addEventListener('resize', ()=>{
            console.log(newVal)
        })
    }
   