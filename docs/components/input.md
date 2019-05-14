---
title: Input 输入框
---
# 输入框组件

**组件展示**

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-input value="张三"></d-input>
<d-input value="disabled" disabled></d-input>
<d-input value="readonly" readonly></d-input>
<d-input value="张三" :error="errorInfo"></d-input>
<d-input  v-model="model"></d-input>   {{model}}

```
