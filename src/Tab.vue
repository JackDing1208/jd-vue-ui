<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: "Tab",
        props: {
            selected: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                eventBus: new Vue()       //自己使用的eventBus
            }
        },
        provide() {
            return {
                eventBus: this.eventBus    //给全部后代组件提供eventBus
            }
        },
        mounted() {                      //把需要的初始值传出去
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'Tab-head') {
                    vm.$children.forEach((vm) => {
                        if(vm.$options.propsData.name===this.selected){
                            this.eventBus.$emit('update:selected', this.selected,vm.$el)

                        }
                    })
                }
            })
        }

    }
</script>

<style scoped lang="scss">
    .tab {
        display: flex;
        flex-direction: column;
    }
</style>
