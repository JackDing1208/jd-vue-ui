<template>
    <div class="wrapper">
        <input type="text" :value="value"
               :disabled="disabled"
               :readonly="readonly"
               :class="{error:error}"
               @change="$emit('change',$event.target.value)"
               @input="$emit('input',$event.target.value)"
               @blur="$emit('blur',$event.target.value)"
               @focus="$emit('focus',$event.target.value)">
        <template v-if="error">
            <g-icon class="icon" name="alert"></g-icon>
            <span class="errorInfo">{{error}}</span>
        </template>

    </div>
</template>

<script>
    import Icon from './Icon'

    export default {
        name: "Input",
        props: ['value', 'disabled', 'readonly', 'error'],
        components: {
            'g-icon': Icon
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $font-size: 14px;
    $border-radius: 4px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #f1453d;
    $font-size-error: 12px;
    .wrapper {
        font-size: $font-size;
        display: inline-flex;
        align-items: center;

        :not(:last-child) {
            margin-right: 0.5em;
        }

        > input.error {
            border-color: $red;
        }

        > .errorInfo {
            color: $red;
            font-size: $font-size-error;
        }

        > .icon {
            fill: $red;
        }

        > input {
            height: $height;
            border: 1px solid $border-color;
            border-radius: $border-radius;
            font-size: inherit;
            padding: 0 0.5em;

            &:hover {
                border-color: $border-color-hover;
            }

            &:focus {
                box-shadow: inset 0 1px 3px $box-shadow-color;
                outline: none;
            }

            &[disabled], &[readonly] {
                border-color: #bbb;
                color: #bbb;
            }

        }

    }
</style>
