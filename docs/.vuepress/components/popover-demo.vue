<template>
    <div>
        <d-popover >
            <div slot="content">冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字冒泡文字</div>
            <d-button>向上冒泡</d-button>
        </d-popover>
    </div>
</template>

<script>
    import Popover from '../../../src/Popover'
    export default {
        name: "popover-demo",
        components:{
            'd-popover':Popover
        }

    }
</script>

<style scoped lang="scss">

</style>
