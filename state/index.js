import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        name: 'Jack'
    },
    mutations: {
        xxx(state, value) {
            state.name = value
        }
    },
    actions: {
        yyy(context, value) {
            setTimeout(() => {
                context.commit('xxx', value)
            }, 1000)
        }
    },
    getters:{
        getName(state){
            return state.name
        }
    }
})
