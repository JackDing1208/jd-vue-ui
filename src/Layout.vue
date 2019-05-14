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
            this.$children.forEach((vm)=>{
                  //组件name属性使用
                if(vm.$options.name==='Sider'){
                    this.isRow=true
                }
            })
        }
    }
</script>

<style scoped>
  .layout{
      height: 70vh;
      display: flex;
      flex-direction: column;
      width: 100%;
      color:white;
      text-align: center;
      font-size: 20px;
      font-weight: bold;
  }

  .isRow{
      flex-direction: row;
  }
</style>
