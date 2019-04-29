import Vue from 'vue'
import Button from './Button'
import Icon from './Icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)


new Vue({
    el:'#app',
    data:{
        message:'hello,world!'
    },
    methods:{
        alert(){
            alert('我被点了')
        }
    }
})

//单元测试
import chai from 'chai'
const expect =chai.expect
{
    const Constructor =Vue.extend(Button)   //创建组件构造器
    const button=new Constructor({          //创建组件实例并传入属性
        propsData:{
            icon:'setting'
        }
    })
    button.$mount()
    let icon=button.$el.querySelector('use')
    let name=icon.getAttribute('xlink:href')
    console.log(name);
    expect(name).to.eq('#i-setting')
}

{
    const Constructor =Vue.extend(Button)   //创建组件构造器
    const button=new Constructor({          //创建组件实例并传入属性
        propsData:{
            icon:'setting',
            loading: true
        },
        data:{
            isLoading:true
        }
    })
    button.$mount('#app')
    let loading=button.$el.querySelector('use')
    console.log(loading);
    let name=loading.getAttribute('xlink:href')
    expect(name).to.eq('#i-loading')
}
