import Vue from 'vue'
import Button from './Button'
import Input from './Input'


Vue.component('g-button', Button)
Vue.component('g-input', Input)


new Vue({
    el: '#app',
    data: {
        message: 'hello,world!',
        errorInfo:'名字不能少于五个字'
    },
    methods: {
        alert() {
            alert('我被点了')
        }
    }
})


import chai from 'chai'
const expect = chai.expect

{   //测试icon位置
    const Constructor = Vue.extend(Button)     //声明Vue组件构造器
    const button = new Constructor({           //创建Vue组件实例并传入参数
        propsData: {
            icon: 'setting',
            iconPosition: 'right'
        },
    })
    const div = document.createElement('div')
    document.body.appendChild(div)
    button.$mount(div)
    let svg = button.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)  //获取CSS属性
    expect(order).to.eq('1')
    button.$el.remove()       //
    button.$destroy()         //
}




