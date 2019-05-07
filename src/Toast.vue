<template>
    <div class="toast" :class="positionClass">
        <slot></slot>
        <div class="line" v-if="closeButton.text"></div>
        <div class="close" @click="closeClick" v-if="closeButton.text">{{closeButton.text}}</div>
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
            position: {
                type: String,
                default: 'middle'
            },
            closeButton: {
                type: Object,    //default需要用函数return对象
                default: function () {
                    return {
                        text: '',
                        callback: {}
                    }
                }
            }
        },
        computed: {
            positionClass() {
                return `position-${this.position}`
            }
        },
        methods: {
            closeClick() {
                this.disappear()
                if (this.closeButton.text && typeof this.closeButton.callback === "function") {
                    this.closeButton.callback(this)  //可以把toast实例传参给callback
                }
            },
            disappear() {
                this.$el.remove()
                this.$destroy()
            }
        },
        mounted() {
            if (this.isAuto === true) {
                setTimeout(() => {
                    this.disappear()
                }, this.duration * 1000)
            }
        }
    }
</script>

<style scoped lang="scss">
    $toast-font-size: 14px;
    $toast-background: #333;
    $toast-color: #ddd;


    .line {
        border-left: 1px solid #dddddd;
        height: 100%;
        margin: 0 0.5em;
    }

    .close {
        white-space: nowrap;
        cursor: pointer;
    }

    .toast {
        line-height: 1.8;
        max-width: 200px;
        padding: 0.5em 1em;
        font-size: $toast-font-size;
        background: $toast-background;
        color: $toast-color;
        display: flex;
        align-items: center;
        position: fixed;
        left: 50%;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.75);

        &.position-top {
            top: 0%;
            transform: translate(-50%, 0%);
        }

        &.position-middle {
            top: 50%;
            transform: translate(-50%, -50%);
        }

        &.position-bottom {
            bottom: 0;
            transform: translate(-50%, 0%);
        }
    }
</style>
