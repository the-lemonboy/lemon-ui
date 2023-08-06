export const throttle = function(func, delay) {
    let timerId = null;
    let lastExecTime = 0;
  
    return function (...args) {
      const currentTime = Date.now();
  
      if (currentTime - lastExecTime > delay) {
        func.apply(this, args);
        lastExecTime = currentTime;
      } else {
        clearTimeout(timerId);
        timerId = setTimeout(() => {
          func.apply(this, args);
          lastExecTime = currentTime;
        }, delay);
      }
    };
  };
  
  export const debounce = function (func, delay, immediate) {
    let timerId = null;

    return function (...args) {
      const executeLater = () => {
        timerId = null;
        if (!immediate) {
          func.apply(this, args);
        }
      };
      const shouldExecuteNow = immediate && !timerId;
      clearTimeout(timerId);
      timerId = setTimeout(executeLater, delay);
      if (shouldExecuteNow) {
        func.apply(this, args);
      }
    };
  }
  