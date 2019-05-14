<template>
    <div class="layout-wrapper">
        <d-layout>
            <d-header>Header</d-header>
            <d-content>Content</d-content>
            <d-footer>Footer</d-footer>
        </d-layout>
        <br>
        <d-layout>
            <d-header>Header</d-header>
            <d-layout>
                <d-sider>Sider</d-sider>
                <d-content>Content</d-content>
            </d-layout>
            <d-footer>Footer</d-footer>
        </d-layout>
        <br>
        <d-layout>
            <d-sider>Sider</d-sider>
            <d-layout>
                <d-header>Header</d-header>
                <d-content>Content</d-content>
                <d-footer>Footer</d-footer>
            </d-layout>
        </d-layout>
    </div>
</template>

<script>
    import Vue from 'vue'
    import Layout from '../../../src/Layout'
    import Header from '../../../src/Header'
    import Content from '../../../src/Content'
    import Sider from '../../../src/Sider'
    import Footer from '../../../src/Footer'

    Vue.component('d-layout', Layout)
    Vue.component('d-header', Header)
    Vue.component('d-content', Content)
    Vue.component('d-sider', Sider)
    Vue.component('d-footer', Footer)
    export default {
        name: "layout-demo",
    }
</script>

<style scoped lang="scss">

</style>
