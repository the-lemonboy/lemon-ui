    export const  observerDomResize = function(dom, callback)  {
        const MutationObserver = window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
      
        const observer = new MutationObserver(callback)
      
        observer.observe(dom, { attributes: true, attributeFilter: ['style'], attributeOldValue: true })
      
        return observer
      }
      