<template>
    <div class="col" :class=[colWidth,colOffset]>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: ['span', 'offset'],
        data() {
            return {
                colWidth: this.span && `col-${this.span}`,  //判断span是否存在
                colOffset: this.offset && `offset-${this.offset}`
           }
        }
    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;
        height: 100px;
        background: bisque;
        border: 1px solid blue;
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
