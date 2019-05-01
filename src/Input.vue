<template>
    <div class="wrapper">
        <input type="text">
    </div>
</template>

<script>
    export default {
        name: "Input"
    }
</script>

<style scoped lang="scss">
    $font-size:14px;
    $red:#333;
    .wrapper{
        font-size: $font-size;
        >input{
            color: $red;
        }
        &:focus{
            outline: none;
        }
    }
</style>
