import Toast from "./Toast";

export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (text) {
            //用JS动态创建一个组件插入页面中
            let Constructor = Vue.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default=text
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
