---
title: 使用方法
---

# 快速上手

## 添加 CSS 样式 
使用本框架前，请在 CSS 中使用 border-box
``` CSS
*，*::before,*::after{ box-sizing: border-box }
```
IE 8 及以上浏览器支持此样式。

## 引入UI组件

``` js
import { Button } from 'jd-ui-vue'
import 'jd-ui-vue/dist/index.css'

export default {
    name: 'app',
    components: {
        'd-button': Button
    }
}
