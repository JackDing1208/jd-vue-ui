<template>
    <div class="grid-wrapper">
        <d-row>
            <d-col>8</d-col>
            <d-col>8</d-col>
            <d-col>8</d-col>
        </d-row>
        <br>
        <d-row>
            <d-col span="8">8</d-col>
            <d-col span="16">16</d-col>
        </d-row>
        <br>
        <d-row>
            <d-col span="8">8</d-col>
            <d-col span="6" offset="2">6</d-col>
            <d-col span="4" offset="4">4</d-col>
        </d-row>
        <br>
        <d-row >
            <d-col span="8">8</d-col>
            <d-col span="6">6</d-col>
            <d-col span="4">4</d-col>
        </d-row>
        <br>
        <d-row align="right">
            <d-col span="8">8</d-col>
            <d-col span="6">6</d-col>
            <d-col span="4">4</d-col>
        </d-row>
        <br>

        <d-row gutter="20">
            <d-col>8</d-col>
            <d-col>8</d-col>
            <d-col>8</d-col>
        </d-row>
    </div>
</template>

<script>
    import Row from '../../../src/Row'
    import Col from '../../../src/Col'

    export default {
        name: "grid-demo",
        components:{
            'd-row':Row,
            'd-col':Col
        }
    }
</script>

<style scoped lang="scss">

</style>
