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
import Tab from './Tab'
import TabHead from './Tab-head'
import TabBody from './Tab-body'
import TabItem from './Tab-item'
import TabPane from './Tab-pane'
import Collapse from './Collapse'
import CollapseItem from './Collapse-item'


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
Vue.component('d-tab', Tab)
Vue.component('d-tab-body', TabBody)
Vue.component('d-tab-head', TabHead)
Vue.component('d-tab-item', TabItem)
Vue.component('d-tab-pane', TabPane)
Vue.component('d-collapse', Collapse)
Vue.component('d-collapse-item', CollapseItem)



import store from '../state/index'

new Vue({
    el: '#app',
    store:store,
    data: {
        message: 'hello,world!',
        errorInfo: '名字不能少于五个字'
    },
    methods: {
        alert() {
            alert('我被点了')
        },
        showToast() {
            this.$toast('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                {
                    isAuto: false,
                    position: 'top',
                    closeButton: {
                        text: '关闭',
                        callback() {
                            console.log('我被关闭了')
                        }
                    }
                }
            )
        }
    },
})




