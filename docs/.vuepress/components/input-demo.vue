<template>
    <div>
        <d-input value="张三"></d-input>
        <d-input value="disabled" disabled></d-input>
        <d-input value="readonly" readonly></d-input>
        <d-input value="张三" :error="errorInfo"></d-input>

    </div>

</template>

<script>
    import Input from '../../../src/Input'
    export default {
        name: "input-demo",
        components:{
            'd-input':Input
        }
    }
</script>

<style scoped lang="scss">

</style>
