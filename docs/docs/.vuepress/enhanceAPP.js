// import lemon from 'lemon-ui-vue2'
import 'lemon-ui-vue2/lib/theme-chalk/lemonui.css'
// import '../../lib/theme-chalk/lemonui.css'
// // import 'lemon-ui-vue2/lib/theme-chalk/src/index.scss'
// import '../../theme-chalk/src/index.scss'

export default ({
  Vue
}) => {

  Vue.mixin({
    mounted() {
        var lemon = require('lemon-ui-vue2')
        Vue.use(lemon)
    },
})
}