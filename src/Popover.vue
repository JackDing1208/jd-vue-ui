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
    $border-color:#333;
    .pop {
        display: inline-block;
        vertical-align: middle;
        .button {
            margin: 10px;
            display: inline-block;
        }
    }
    .content {
        border: 1px solid $border-color;
        border-radius: 4px;
        filter: drop-shadow(1px 1px 3px rgba(0,0,0,0.5));
        background: white;
        display: inline-block;
        position: absolute;
        transform: translateY(-100%);
        max-width: 15.2em;
        font-size: 14px;
        padding: 0.5em 0.5em;
        word-break: break-all;
        margin: -10px 0;
        &::before{
            content: '';
            border:10px solid transparent;
            border-top-color: $border-color;
            position: absolute;
            top:100%;
        }
        &::after{
            content: '';
            border:10px solid transparent;
            border-top-color: white;
            position: absolute;
            top:calc(100% - 1px);
        }

    }
</style>
