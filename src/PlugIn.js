import Toast from "./Toast";


let CurrentToast


export default {
    install(Vue, options) {
        Vue.prototype.$toast = function (text, props) {
            if (CurrentToast) {CurrentToast.disappear()}
            CurrentToast = createToast(Vue, text, props)
        }
    }
}


function createToast(Vue, text, props) {
    //动态创建toast实例
    let Constructor = Vue.extend(Toast)
    let toast = new Constructor({propsData: props})
    toast.$slots.default = text
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
