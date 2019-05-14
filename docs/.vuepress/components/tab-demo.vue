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
    export default {
        name: "tab-demo"
    }
</script>

<style scoped lang="scss">

</style>
