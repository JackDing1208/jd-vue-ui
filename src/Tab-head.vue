<template>
    <div class="head">
        <slot></slot>
    </div>
</template>

<script>
    import Button from './Button'
    export default {
        name: "Tab-head",
        components:{
            'd-button':Button
        },
        inject:['eventBus']
    }
</script>

<style scoped lang="scss">
    @mixin debug{
        border: 1px solid red;
    }
    .head{
        border-bottom: 1px solid #999999;
        display: flex;
        align-items: center;
        padding: 5px 0.5em;

        button{
            margin-left: auto;
        }
    }
</style>
