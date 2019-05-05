<template>
    <div class="row" :style="gutter && margin" :class="justify">

        <slot></slot>

    </div>
</template>

<script>
    export default {
        name: "Row",
        props: {
            gutter: {
                type: [Number, String],
                default: 0,
            },
            align:{
                type:String,
                default: 'left'
            }
        },
        data() {
            return {
                justify:this.align
            }
        },
        computed: {
            margin() {
                return `margin:0 -${this.gutter / 2}px`
            }
        },
        mounted() {      //将gutter值传给子组件
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        }
    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        &.center{
            justify-content: center;
         }
        &.left{
            justify-content: flex-start;
        }
        &.right{
            justify-content: flex-end;
        }
    }
</style>
