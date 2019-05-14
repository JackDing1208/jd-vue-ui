<template>
    <div class="button-wrapper">
        <d-button>按钮</d-button>
        <d-button icon="like">点赞</d-button>
        <d-button icon="setting">设置</d-button>
        <d-button icon="setting" icon-position="right">设置</d-button>
        <d-button icon="download" :loading="true">下载</d-button>
        <d-button icon="setting" :circle="true"></d-button>
        <d-button icon="download" :circle="true" :loading="true"></d-button>
    </div>
</template>

<script>
    import Button from '../../../src/Button'
    import Icon from '../../../src/Icon'

    export default {
        name: "button-demo",
        components: {
            'd-button': Button,
            'd-icon':Icon
        },

    }
</script>

<style scoped lang="scss">

</style>
