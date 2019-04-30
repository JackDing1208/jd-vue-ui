import Vue from 'vue'
import Button from './Button'


Vue.component('g-button',Button)



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





