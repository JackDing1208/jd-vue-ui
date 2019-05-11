<template>
    <div class="pop">
        <div class="content" v-if="isOpen" ref="content">
            <slot name="content"></slot>
        </div>
        <span class="button" @click="toggle" ref="button">
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
                } else if (this.isOpen) {
                    this.close()
                }
            },
            documentListener: function (e) {
                if (!this.$el.contains(e.target)) {
                    this.close()
                }
            },
            open() {
                this.isOpen = true
                this.$nextTick(() => {    //处理渲染导致的异步
                        document.body.appendChild(this.$refs.content)
                        this.setPosition()
                        document.addEventListener('click', this.documentListener)
                    }
                )
            },
            close() {
                this.isOpen = false
                document.removeEventListener('click', this.documentListener)
            },
            setPosition(){
               let {width,height,top,left}=this.$refs.button.getBoundingClientRect()
                console.log(width, height, top, left);
               this.$refs.content.style.left=left+scrollX+'px'
               this.$refs.content.style.top=top+scrollY+'px'

            }
        },
    }
</script>

<style scoped lang="scss">
    .pop {
        display: inline-block;
        vertical-align: middle;
        .button {
        }
    }
    .content {
        border: 1px solid red;
        position: absolute;
        transform: translateY(-100%);
        max-width: 20em;
        font-size: 14px;
        padding: 0.5em 0.5em;
        word-break: break-all;
    }
</style>
