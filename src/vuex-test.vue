<template>
    <div>
        {{vuex1}}  {{vuex2}}
        <button @click="click1">点我用mutations</button>
        <button @click="click2">点我用actions</button>
    </div>
</template>

<script>
    export default {
        name: "vuex",
        data(){
            return{
                name:'yoyo'
            }
        },
        computed:{
            vuex1(){
                return this.$store.state.name
            },
            vuex2(){
                return this.$store.getters.getName
            }
        },
        methods:{
            click1(){
                this.$store.commit('xxx',this.name)
            },
            click2(){
                this.$store.dispatch('yyy',this.name)
            },
        }
    }
</script>

<style scoped lang="scss">

</style>
