<template>
    <div class="head">
        <div class="slot-wrapper">
            <slot></slot>
        </div>
        <div class="line"></div>
    </div>
</template>

<script>
    import Button from './Button'

    export default {
        name: "Tab-head",
        components: {
            'd-button': Button
        },
        inject: ['eventBus']
    }
</script>

<style scoped lang="scss">
    @mixin debug {
        border: 1px solid red;
    }

    .head {
        border-bottom: 1px solid #999999;
        display: flex;
        flex-direction: column;

        .line {
            background: #6ea6e5;
            height: 0px;

        }

        .slot-wrapper {
            display: flex;
            align-items: center;

            button {
                margin-left: auto;
            }
        }

    }
</style>
