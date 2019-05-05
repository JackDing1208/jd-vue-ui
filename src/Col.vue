<template>
    <div class="col-wrapper" :class=[colWidth,colOffset] :style="padding">
       <div class="col" >
           <slot></slot>
       </div>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: ['span', 'offset'],
        data() {
            return {
                colWidth: this.span && `col-${this.span}`,  //判断span是否存在
                colOffset: this.offset && `offset-${this.offset}`,
                gutter:0
           }
        },
        computed:{
          padding(){
              return `padding:0 ${this.gutter/2}px`
          }
        },

    }
</script>

<style scoped lang="scss">
    .col-wrapper {
        width: 50%;
        height: 100px;

    }
    .col{
        border: 1px solid blue;
        height: 100%;
        background: bisque;

    }


    //注意scss的语法
    $class: col-;
    @for $n from 1 through 24 {
        .#{$class}#{$n} {
            width: ($n/24)*100%;
        }
    }

    @for $n from 1 through 24 {
        .offset-#{$n} {
            margin-left: ($n/24)*100%;
        }
    }


</style>
