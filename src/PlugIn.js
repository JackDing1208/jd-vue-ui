import Toast from "./Toast";

export default {
    install(Vue, options) {
        let toast

        Vue.prototype.$toast = function (text, props) {
            if (toast) {toast.disappear()}
            createToast(text, props)
        }

        function createToast(text, props) {
            //动态创建toast实例
            let Constructor = Vue.extend(Toast)
            toast = new Constructor({propsData: props})
            toast.$slots.default = text
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }
}
