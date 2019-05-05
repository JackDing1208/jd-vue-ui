<template>
<div class="footer">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
   .footer{
       background: #888888;
       height: 10%;
   }
</style>
