import BorderBox1 from "./components/frame-one";
import BorderBox2 from "./components/frame-two";
import BorderBox3 from "./components/frame-three";
import BorderBox4 from "./components/frame-four";
import BorderBox5 from "./components/frame-five";
import TitleBox1 from "./components/title-frame-one";
import TitleBox2 from "./components/title-frame-two";
import TitleBox3 from "./components/title-frame-three";
import TitleBox4 from "./components/title-frame-four";
import TitleBox5 from "./components/title-frame-five";
import Button1 from "./components/button-one";
import Button2 from "./components/button-two";
import Loader1 from "./components/loader-one";
import Loader2 from "./components/loader-two";
import Loader3 from "./components/loader-three";
import ScreenAdaptive from './components/screen-adaptive'


const components = [
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    TitleBox1,
    TitleBox2,
    TitleBox3,
    TitleBox4,
    TitleBox5,
    Button1,
    Button2,
    Loader1,
    Loader2,
    Loader3,
    ScreenAdaptive
]

const install = function (Vue) {
    components.forEach(component => {
        Vue.component(component.name, component);
    });
};

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    install,
    BorderBox1,
    BorderBox2,
    BorderBox3,
    BorderBox4,
    BorderBox5,
    TitleBox1,
    TitleBox2,
    TitleBox3,
    TitleBox4,
    TitleBox5,
    Button1,
    Button2,
    Loader1,
    Loader2,
    Loader3,
    ScreenAdaptive
}