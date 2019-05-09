<template>
    <div class="head">
        <div class="slot-wrapper">
            <slot></slot>
        </div>
        <div class="line" ref="line"></div>
    </div>
</template>

<script>
    import Button from './Button'

    export default {
        name: "Tab-head",
        components: {
            'd-button': Button
        },
        inject: ['eventBus'],
        mounted() {
            this.eventBus.$on('update:selected', (value, el) => {
                let {width,height,top,left}=el.getBoundingClientRect()
                console.log(width,height,top,left)
                this.$refs.line.style.width=width+'px'
                this.$refs.line.style.left=left+'px'
                this.$refs.line.style.top=(top+height)+'px'

           })
        }
    }
</script>

<style scoped lang="scss">
    @mixin debug {
        border: 1px solid red;
    }

    .head {
        border-bottom: 2px solid #dddddd;
        display: flex;
        flex-direction: column;

        .line {
            background: #6ea6e5;
            height: 2px;
            position: absolute;
            transition: all 0.5s;
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
