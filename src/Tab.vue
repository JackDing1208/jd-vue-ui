<template>
    <div class="tab">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "Tab",
        props:{
          selected:{
              type:String,
              required:true
          }
        },
        data(){
            return{
                eventBus:new Vue()       //自己使用的eventBus

            }
        },
        provide(){
            return{
                eventBus: this.eventBus    //给全部后代组件提供eventBus
            }
        },
        mounted() {
            this.eventBus.$emit('update:selected',this.selected)
        }

    }
</script>

<style scoped lang="scss">

</style>
