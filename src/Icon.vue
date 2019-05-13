<template>
    <svg v-if="name" class="icon" >
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        props:['name'],
        name: "Icon",
    }
</script>

<style scoped>
    .icon {
        width: 1em; height: 1em;
        vertical-align: -0.15em;
        fill: currentColor;
        overflow: hidden;
    }
</style>
