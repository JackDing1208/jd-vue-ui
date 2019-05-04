<template>
    <div class="col" :class=`col-${span}`>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Col",
        props: ['span']

    }
</script>

<style scoped lang="scss">
    .col {
        width: 50%;
        height: 100px;
        background: bisque;
        border: 1px solid blue;
    }

    $class: col-;
    @for $n from 1 through 24 {
        .#{$class}#{$n} {
            width: ($n/24)*100%;
        }
    }


</style>
