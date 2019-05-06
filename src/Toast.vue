<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Toast",
        props: {
            isAuto: {
                type: Boolean,
                default: true
            },
            duration: {
                type: Number,
                default: 3
            },

        },
        methods: {
            autoClose() {
                setTimeout(() => {
                    this.disappear()
                }, this.duration * 1000)

            },
            disappear() {
                this.$el.remove()
                this.$destroy()
            }
        },
        mounted() {
            if (this.isAuto === true) {
                this.autoClose()
            }
        }
    }
</script>

<style scoped lang="scss">
    $toast-font-size: 14px;
    $toast-background: #333;
    $toast-color: #ddd;

    .toast {
        padding: 0.5em 1em;
        font-size: $toast-font-size;
        min-height: 30px;
        background: $toast-background;
        color: $toast-color;
        display: flex;
        align-items: center;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.75);

    }
</style>
