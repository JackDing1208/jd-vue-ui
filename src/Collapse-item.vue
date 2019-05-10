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
        props:{
            title:{
                type:String,
                required:true
            }
        },
        data(){
            return{
                isOpen:false
            }
        },
        methods:{
          toggle(){
              this.isOpen=!this.isOpen
          }
        }
    }
</script>

<style scoped lang="scss">
    $collapse-font-size:16px;
    .item{
        font-size: $collapse-font-size;
        .title{
            line-height:32px;
            padding: 0 0.5em;
        }
        .content{
            padding: 0 0.5em;
            color:#999999;
        }
    }
</style>
