<template>
    <div class="toast-wrapper">
        <button @click="showToast">点我</button>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Plugin from '../../../src/PlugIn'
    import Toast from '../../../src/Toast'

    Vue.use(Plugin)      //引入新的原型
    Vue.component('d-toast', Toast)

    export default {
        name: "toast-demo",
        methods: {
            showToast() {
                this.$toast('哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
                    {
                        isAuto: false,
                        position: 'middle',
                        closeButton: {
                            text: '关闭',
                            callback() {
                                console.log('我被关闭了')
                            }
                        }
                    }
                )
            }
        }
    }

</script>

<style scoped lang="scss">
    .toast-wrapper {
        width: 50%;
        margin: 0 auto;
        height: 50vh;
        border: 1px solid red;
    }
</style>
