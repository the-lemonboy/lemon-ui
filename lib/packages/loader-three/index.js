!function(t,e){"object"==typeof exports&&"object"==typeof module?module.exports=e():"function"==typeof define&&define.amd?define("loader-three",[],e):"object"==typeof exports?exports["loader-three"]=e():t["loader-three"]=e()}(window,(function(){return function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/",n(n.s=97)}({0:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},1:function(t,e,n){t.exports=!n(5)((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},11:function(t,e,n){"use strict";function r(t,e,n,r,o,i,u,a){var f,c="function"==typeof t?t.options:t;if(e&&(c.render=e,c.staticRenderFns=n,c._compiled=!0),r&&(c.functional=!0),i&&(c._scopeId="data-v-"+i),u?(f=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(u)},c._ssrRegister=f):o&&(f=a?function(){o.call(this,(c.functional?this.parent:this).$root.$options.shadowRoot)}:o),f)if(c.functional){c._injectStyles=f;var s=c.render;c.render=function(t,e){return f.call(e),s(t,e)}}else{var l=c.beforeCreate;c.beforeCreate=l?[].concat(l,f):[f]}return{exports:t,options:c}}n.d(e,"a",(function(){return r}))},17:function(t,e,n){var r=n(4);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},2:function(t,e,n){var r=n(4);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},25:function(t,e,n){t.exports=!n(1)&&!n(5)((function(){return 7!=Object.defineProperty(n(26)("div"),"a",{get:function(){return 7}}).a}))},26:function(t,e,n){var r=n(4),o=n(0).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},28:function(t,e,n){var r=n(8).f,o=Function.prototype,i=/^\s*function ([^ (]*)/;"name"in o||n(1)&&r(o,"name",{configurable:!0,get:function(){try{return(""+this).match(i)[1]}catch(t){return""}}})},4:function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},5:function(t,e){t.exports=function(t){try{return!!t()}catch(t){return!0}}},69:function(t,e,n){},8:function(t,e,n){var r=n(2),o=n(25),i=n(17),u=Object.defineProperty;e.f=n(1)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return u(t,e,n)}catch(t){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},83:function(t,e,n){"use strict";n(69)},97:function(t,e,n){"use strict";n.r(e);n(28);var r=function(){var t=this._self._c;return t("div",{staticClass:"l-loading-three"},[t("svg",{staticStyle:{"enable-background":"new 0 0 50 50"},attrs:{x:"0px",y:"0px",width:"24px",height:"30px",viewBox:"0 0 24 30","xml:space":"preserve"}},[t("rect",{attrs:{x:"0",y:"20",width:"4",height:"5",fill:this.backgroundColor[0]}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"10",y:"16",width:"4",height:"5",fill:this.backgroundColor[1]}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.15s",dur:"0.6s",repeatCount:"indefinite"}})]),t("rect",{attrs:{x:"20",y:"16",width:"4",height:"5",fill:this.backgroundColor[2]}},[t("animate",{attrs:{attributeName:"height",attributeType:"XML",values:"5;21;5",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}}),t("animate",{attrs:{attributeName:"y",attributeType:"XML",values:"13; 5; 13",begin:"0.3s",dur:"0.6s",repeatCount:"indefinite"}})])]),t("div",{staticClass:"loading-tip",style:"color:".concat(this.textColor)},[this._t("default")],2)])};r._withStripped=!0;var o={name:"LELoading3",props:{backgroundColor:{type:Array,default:function(){return["#511BD6","#511BD6","#511BD6"]}},textColor:{type:String,default:"#DCEFED"}}},i=(n(83),n(11)),u=Object(i.a)(o,r,[],!1,null,"2d0a6641",null).exports;u.install=function(t){t.component(u.name,u)};e.default=u}}).default}));
//# sourceMappingURL=index.js.map