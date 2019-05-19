
const expect = chai.expect;
import Vue from 'vue'
import Row from '../src/Row'
import Col from '../src/Col'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Col', () => {
    it('存在.', () => {
        expect(Row).to.be.ok
    })
    it('接收 span 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                span: 12
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('col-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
    it('接收 offset 属性.', () => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor = Vue.extend(Col)
        const vm = new Constructor({
            propsData: {
                offset: 12
            }
        }).$mount(div)
        expect(vm.$el.classList.contains('offset-12')).to.eq(true)
        div.remove()
        vm.$destroy()
    })
})
