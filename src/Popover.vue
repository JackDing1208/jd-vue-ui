<template>
    <div class="pop">
        <div class="content">
            <slot name="content"></slot>
        </div>
        <span class="button">
                    <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Popover"
    }
</script>

<style scoped lang="scss">
        .pop{
            position: relative;
            .content{
                border: 1px solid red;
                position: absolute;
                transform: translateY(-100%);

            }
            .button{
                display: inline-block;
            }
        }
</style>
