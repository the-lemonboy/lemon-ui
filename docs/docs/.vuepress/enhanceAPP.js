import '../../../lib/lemonui.css'

export default ({
  Vue
}) => {

  Vue.mixin({
    mounted() {
        var lemon = require('../../../lib/lemonui.js')
        Vue.use(lemon)
    },
})
}