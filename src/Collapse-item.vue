<template>
    <div class="item">
        <div @click="toggle" class="title">{{title}}</div>
        <div v-if="isOpen" class="content">
            <slot></slot>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Collapse-item",
        props: {
            title: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        data() {
            return {
                isOpen: false
            }
        },
        methods: {
            toggle() {
                if (!this.isOpen) {
                    this.eventBus.$emit('addSelected', this.name)
                }else if(this.isOpen){
                    this.eventBus.$emit('minusSelected',this.name)
                }

            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (names) => {
                if (names.includes(this.name)) {
                    this.isOpen=true
                } else if(!names.includes(this.name)){
                    this.isOpen=false
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    $collapse-font-size: 16px;
    .item {
        font-size: $collapse-font-size;

        .title {
            line-height: 32px;
            padding: 0 0.5em;
        }

        .content {
            padding: 0 0.5em;
            color: #999999;
        }
    }
</style>
