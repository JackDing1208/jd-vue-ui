<template>
    <div class="header">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
    .header{
        background: #333333;
        height: 10%;
    }
</style>
