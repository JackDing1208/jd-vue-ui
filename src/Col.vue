<template>
    <div class="col-wrapper" :class=[colWidth,colOffset] :style="gutter && padding">
        <div class="col">
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

                gutter: 0
            }
        },
        computed: {
            padding() {
                return `padding:0 ${this.gutter / 2}px`
            },
            colWidth() {
                return this.span && `col-${this.span}`
            },
            colOffset() {
                return this.offset && `offset-${this.offset}`
            }
        },
    }
</script>

<style scoped lang="scss">
    .col-wrapper {
        width: 50%;
        height: 100px;

    }

    .col {
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
