<template>
    <div class="input-wrapper">
        <d-input value="默认内容"></d-input>
        <br>
        <d-input value="禁用" disabled></d-input>
        <br>
        <d-input value="只读" readonly></d-input>
        <br>
        <d-input value="默认内容" :error="errorInfo"></d-input>
        <br>
        <d-input  v-model="model"></d-input>   {{model}}
    </div>

</template>

<script>
    import Input from '../../../src/Input'
    export default {
        name: "input-demo",
        components:{
            'd-input':Input
        },
        data() {
            return{
                errorInfo: '名字不能少于五个字',
                model:'hello!'
            }
        },
    }
</script>

<style scoped lang="scss">

</style>
