<template>
    <button class="click" :class="[{circle:circle},`icon-${iconPosition}`]" @click="loadingStatus">
        <d-icon v-if="icon && (!isLoading ||!loading)" :name="icon"></d-icon>
        <d-icon class="loading" v-if="loading && isLoading" name="loading"></d-icon>

        <div v-if="$slots.default" class="button-content">
            <slot>默认内容</slot>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        components:{
          'd-icon':Icon
        },
        props: {
            icon: {},
            iconPosition: {
                type: String,
                default: 'left'
            },
            loading: {
                type: Boolean,
                default: false
            },
            circle: {
                type: Boolean,
                default: false
            }

        },
        name: "Button",
        data() {
            return {
                isLoading: false
            }
        },
        methods: {
            loadingStatus() {
                this.$emit('click')
                this.isLoading = !this.isLoading
            }
        },

    }
</script>

<style scoped lang="scss">

        $button-height:32px;
        $font-size:14px;
        $button-bg:white;
        $button-active-bg:#eee;
        $button-border-radius:4px;
        $color:#333;
        $border-color:#999;
        $border-color-hover:#666 ;
        $button-line-height:20px;


    @keyframes spin {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }

    .loading {
        animation: spin 1s infinite linear
    }

    .click {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: $button-height;
        font-size: $font-size;
        background: $button-bg;
        border: 1px solid $border-color;
        border-radius: $button-border-radius;
        color: $color;
        padding: 0 0.9em;
        vertical-align: top;
    }
    .click :not(:first-child){
        margin-left: 0.3em;
    }
    .click.icon-right .button-content{
        margin-left: 0em;
        margin-right:0.3em;

    }
    .click.circle{
        border-radius: 50%;
        width: $button-height;
        padding: 0;
    }
    .click .button-content {
        line-height: var(--button-line-height);
    }

    .click.icon-left svg {
    }


    .click.icon-right svg {
        order: 1;
    }

    .click:hover {
        border-color: var(--border-color-hover);
    }

    .click:active {
        background: var(--button-active-bg);
    }

    .click:focus {
        outline: none;
    }
</style>
