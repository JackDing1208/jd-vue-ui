---
title: Tab 页签
---
# 页签组件

**组件展示**

<ClientOnly>
<tab-demo></tab-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-tab selected="sport">
    <d-tab-head>
        <d-tab-item name="finance">经济</d-tab-item>
        <d-tab-item name="sport">体育</d-tab-item>
        <d-tab-item name="fun">娱乐</d-tab-item>
    </d-tab-head>
    <d-tab-body>
        <d-tab-pane name="finance">我是经济新闻</d-tab-pane>
        <d-tab-pane name="sport">我是体育新闻</d-tab-pane>
        <d-tab-pane name="fun">我是娱乐新闻</d-tab-pane>
    </d-tab-body>
</d-tab>
```
