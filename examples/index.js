import BorderBox1 from "./frame/frame-one";
import BorderBox2 from "./frame/frame-two";
import BorderBox3 from "./frame/frame-three";
import BorderBox4 from "./frame/frame-four";
import BorderBox5 from "./frame/frame-five";
import TitleBox1 from "./title-frame/title-frame-one";
import TitleBox2 from "./title-frame/title-frame-two";
import TitleBox3 from "./title-frame/title-frame-three";
import TitleBox4 from "./title-frame/title-frame-four";
import TitleBox5 from "./title-frame/title-frame-five";
import Button1 from "./button/button-one";
import Button2 from "./button/button-two";
import Loader1 from "./loader/loader-one";
import Loader2 from "./loader/loader-two";
import Loader3 from "./loader/loader-three";


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
    Loader3
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
}