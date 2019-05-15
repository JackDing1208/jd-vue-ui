---
title: Toast 弹窗
---

# 弹窗组件

**组件介绍**

弹窗组件功能及用法如下，支持设置弹窗内容、弹窗位置、自动关闭、手动关闭、关闭回调等功能

**组件展示**

<ClientOnly>
<toast-demo></toast-demo>
</ClientOnly>

**相关代码**

``` html
<d-button @click="showToast1">默认弹窗样式</d-button>
<d-button @click="showToast2">设置弹窗位置</d-button>
<d-button @click="showToast3">设置关闭时间</d-button>
<d-button @click="showToast4">设置手动关闭</d-button>
<d-button @click="showToast5">设置关闭回调</d-button>
```
```javascript
export default {
    name: "toast-demo",
    methods: {
        showToast1() {
            this.$toast('出现中间位置自动关闭')
        },
        showToast2() {
            this.$toast('position设置弹窗位置',{position:'top'})
        },
        showToast3() {
            this.$toast('duration设置自动关闭时间', {duration:1})
        },
        showToast4() {
            this.$toast('设置手动关闭按钮', {duration:-1, closeButton: {text: '关闭'}})
        },
        showToast5() {
            this.$toast('设置手动关闭回调函数',
                {
                    duration:-1,
                    closeButton: {
                        text: '关闭',
                        callback() {
                            alert('弹窗被关闭了')
                        }
                    }
                }
            )
        }
    }
}

```
