<template>
    <button class="click" :class=`icon-${iconPosition}` @click="$emit('click')">
        <g-icon v-if="icon" :name="icon"></g-icon>

        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','icon-position'],
        props:{
          icon:{},
          iconPosition:{
              type: String,
              default:'left'
          }
        },
        name: "Button",
        data() {
            return {
                message: '点我'
            }
        }
    }
</script>

<style scoped>
    .click {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        height: var(--button-height);
        font-size: var(--font-size);
        background: var(--button-bg);
        border: 1px solid var(--border-color);
        border-radius: var(--button-border-radius);
        color: var(--color);
        padding: 0 0.9em;
        vertical-align: top;

    }
    .click .content{
        line-height: var(--button-line-height);
    }
    .click.icon-left {
        flex-direction: row;
    }
    .click.icon-left svg{
        margin-right: 0.3em;
    }

    .click.icon-right{
        flex-direction: row-reverse;
    }

    .click.icon-right svg{
        margin-left: 0.3em;
    }

    .click:hover {
        border-color: var(--border-color-hover);
    }

    .click:active{
        background: var(--button-active-bg);
    }
    .click:focus{
        outline: none;
    }
</style>
