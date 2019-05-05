<template>
  <div class="row" :style="margin">

          <slot></slot>

  </div>
</template>

<script>
    export default {
        name: "Row",
        props:['gutter'],
        data(){
            return{
                margin:`margin:0 -${this.gutter/2}px`
            }
        },
        mounted() {      //将gutter值传给子组件
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        }
    }
</script>

<style scoped>
    .row{
        display: flex;
    }
</style>
