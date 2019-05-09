<template>
    <div class="pane" v-if="isActive">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Tab-pane",
        data() {
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

</style>
