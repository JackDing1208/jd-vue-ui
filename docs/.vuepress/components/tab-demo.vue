<template>
    <div class="tab-wrapper">
        <d-tab selected="sport">
            <d-tab-head>
                <d-tab-item name="finance">经济</d-tab-item>
                <d-tab-item name="sport">体育</d-tab-item>
                <d-tab-item name="fun">娱乐</d-tab-item>
            </d-tab-head>
            <d-tab-body>
                <d-tab-pane name="finance">我是经济新闻</d-tab-pane>
                <d-tab-pane name="sport">我是体育新闻</d-tab-pane>
                <d-tab-pane name="fun">我是娱乐新闻</d-tab-pane>
            </d-tab-body>
        </d-tab>
    </div>
</template>

<script>
    import Tab from '../../../src/Tab'
    import TabHead from '../../../src/Tab-head'
    import TabBody from '../../../src/Tab-body'
    import TabItem from '../../../src/Tab-item'
    import TabPane from '../../../src/Tab-pane'

    export default {
        name: "tab-demo",
        components: {
            'd-tab': Tab,
            'd-tab-body': TabBody,
            'd-tab-head': TabHead,
            'd-tab-item': TabItem,
            'd-tab-pane': TabPane,
        }
    }
</script>

<style scoped lang="scss">

</style>
