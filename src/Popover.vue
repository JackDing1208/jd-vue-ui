<template>
    <div class="pop">
        <div class="content" v-if="isOpen" ref="content">
            <slot name="content"></slot>
        </div>
        <span class="button" @click.stop="toggle" ref="button">
            <slot></slot>
        </span>
    </div>
</template>

<script>
    export default {
        name: "Popover",
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                if (!this.isOpen) {             //轮子中不能阻止冒泡!!!
                    this.open()
                    this.$nextTick(
                        document.addEventListener('click', this.documentListener)
                    )
                } else if(this.isOpen){
                    this.close()
                }
            },
            documentListener: function (e) {
                if(!this.$refs.content.contains(e.target)){
                    this.close()
                }
            },
            open() {
                this.isOpen = true
                console.log(1);
            },
            close() {
                this.isOpen = false
                document.removeEventListener('click', this.documentListener)
                console.log(2);
            }
        },
        mounted() {

        }
    }
</script>

<style scoped lang="scss">
    .pop {
        position: relative;

        .content {
            border: 1px solid red;
            position: absolute;
            transform: translateY(-100%);
            max-width: 20em;
            font-size: 14px;
            padding: 0.5em 0.5em;
            word-break: break-all;

        }

        .button {
            display: inline-block;
        }
    }
</style>
