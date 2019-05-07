import Vue from 'vue'
import Button from './Button'
import Input from './Input'
import Row from './Row'
import Col from './Col'
import Layout from './Layout'
import Header from './Header'
import Content from './Content'
import Sider from './Sider'
import Footer from './Footer'
import Toast from './Toast'
import Plugin from './PlugIn'


Vue.component('d-button', Button)
Vue.component('d-input', Input)
Vue.component('d-row', Row)
Vue.component('d-col', Col)
Vue.component('d-layout', Layout)
Vue.component('d-header', Header)
Vue.component('d-content', Content)
Vue.component('d-sider', Sider)
Vue.component('d-footer', Footer)
Vue.component('d-toast', Toast)
Vue.use(Plugin)      //引入新的原型

new Vue({
    el: '#app',
    data: {
        message: 'hello,world!',
        errorInfo: '名字不能少于五个字'
    },
    methods: {
        alert() {
            alert('我被点了')
        },
        showToast() {
            this.$toast('哈哈哈哈哈', {
                    isAuto: false,
                    position: 'top',
                    closeButton: {
                        text:'好的',
                        callback(){
                            alert('OJBK')
                        }
                    }
                }
            )
        }
    }
})





