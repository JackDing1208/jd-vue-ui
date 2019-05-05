<template>
    <div class="layout"  :class="{isRow:isRow}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Layout",
        data(){
          return{
              isRow:false
          }
        },
        mounted() {
            console.log(this.$children);
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='Sider'){
                    this.isRow=true
                }
            })
        }
    }
</script>

<style scoped>
  .layout{
      height: 100vh;
      display: flex;
      flex-direction: column;
      width: 100%;
  }

  .isRow{
      flex-direction: row;
  }
</style>
