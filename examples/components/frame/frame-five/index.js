import BorderBox from './src/main';
BorderBox.install  = function(Vue){
    Vue.component(BorderBox.name,BorderBox)
}
export default BorderBox;