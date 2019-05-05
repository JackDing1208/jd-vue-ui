<template>
    <div class="content">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "Content"
    }
</script>

<style scoped>
    .content{
        background: #bbbbbb;
        flex: 1;
    }
</style>
