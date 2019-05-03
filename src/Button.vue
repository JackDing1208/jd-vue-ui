<template>
    <button class="click" :class=`icon-${iconPosition}` @click="loadingStatus">
        <g-icon v-if="icon && (!isLoading ||!loading)" :name="icon"></g-icon>
        <g-icon class="loading" v-if="loading && isLoading" name="loading"></g-icon>

        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './Icon'
    export default {
        // props:['icon','icon-position'],
        components:{
          'g-icon':Icon
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
        }
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

    .click .content {
        line-height: var(--button-line-height);
    }

    .click.icon-left svg {
        margin-right: 0.3em;
    }


    .click.icon-right svg {
        margin-left: 0.3em;
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
