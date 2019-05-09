<template>
    <div class="item" @click="select" :class="addClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tab-item",
        data() {                    //尽量不要改变props中用户传的参数
            return {
                isActive: false
            }
        },
        props: {
            name: {
                type: String,
                required: true
            }
        },
        inject: ['eventBus'],
        computed:{
          addClass(){
              return {active:this.isActive}
          }
        },
        methods: {
            select() {
                this.eventBus.$emit('update:selected', this.name)
            }
        },
        mounted() {
            this.eventBus.$on('update:selected', (value) => {
                this.isActive = this.name === value;
            })
        },
        beforeMount() {
            if(this.name===this.eventBus.name){
                this.isActive=true
            }
        }
    }
</script>

<style scoped lang="scss">
    $tab-item-font: 16px;
    $active-color:#6ea6e5;
    .item {
        font-size: $tab-item-font;
        padding: 0.3em 1em;

        &:hover {
            cursor: pointer;
        }
    }

    .active {
        color: $active-color;

    }

</style>
