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
import spies from 'chai-spies'


const expect =chai.expect
chai.use(spies)


{   //测试按钮是否含有对应icon
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
    button.$el.remove()
    button.$destroy()
}

{   //测试按钮是否含有loading动画
    const Constructor =Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting',
            loading: true
        },
        data:{
            isLoading:true
        }
    })
    button.$mount()
    let loading=button.$el.querySelector('use')
    let name=loading.getAttribute('xlink:href')
    console.log(name);
    expect(name).to.eq('#i-loading')
    button.$el.remove()
    button.$destroy()
}
{   //测试icon位置
    const Constructor =Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting',
            iconPosition:'right'
        },
    })
    const div=document.createElement('div')
    document.body.appendChild(div)
    button.$mount(div)
    let click=button.$el
    let {flexDirection}=window.getComputedStyle(click)  //获取CSS属性
    expect(flexDirection).to.eq('row-reverse')
    button.$el.remove()
    button.$destroy()
}
{   //测试点击后函数是否被调用
    const Constructor =Vue.extend(Button)
    const button=new Constructor({
        propsData:{
            icon:'setting',
        },
    })
    button.$mount()
    let spy=chai.spy(function () {})   //引入可被监测的spy函数
    button.$on('click',spy)
    let click=button.$el
    console.log(click);
    click.click()
    expect(spy).to.have.been.called()   //断言spy函数是否被调用
    button.$el.remove()
    button.$destroy()
}


