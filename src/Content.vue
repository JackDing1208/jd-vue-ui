<template>
    <div class="layout-content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped>
    .layout-content{
        background: #bbbbbb;
        flex: 1;
    }
</style>
