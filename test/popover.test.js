
const expect = chai.expect;
import Vue from 'vue'
import Popover from '../src/Popover'

Vue.config.productionTip = false
Vue.config.devtools = false
Vue.component('d-popover', Popover)

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    })
    it('可以设置position.', (done) => {
        const div = document.createElement('div')
        document.body.appendChild(div)
        div.innerHTML = `
        <d-popover position="left" ref="el">
            <template slot="content">
                内容
            </template>
            <button>点我</button>
        </d-popover>
        `
        const vm = new Vue({
            el: div
        })
        vm.$el.querySelector('button').click()
        vm.$nextTick(() => {
            const {content} = vm.$refs.el.$refs
            expect(content.classList.contains('position-left')).to.be.true
            done()
        })
    })
})
