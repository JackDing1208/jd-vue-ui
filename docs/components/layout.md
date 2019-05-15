---
title: Layout 布局
---



# 布局组件

**组件介绍**

布局组件功能及用法如下，支持常见基础布局

**组件展示**

<ClientOnly>
<layout-demo></layout-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-layout>
    <d-header>Header</d-header>
    <d-content>Content</d-content>
    <d-footer>Footer</d-footer>
</d-layout>
<d-layout>
    <d-header>Header</d-header>
    <d-layout>
        <d-sider>Sider</d-sider>
        <d-content>Content</d-content>
    </d-layout>
    <d-footer>Footer</d-footer>
</d-layout>
<d-layout>
    <d-sider>Sider</d-sider>
    <d-layout>
        <d-header>Header</d-header>
        <d-content>Content</d-content>
        <d-footer>Footer</d-footer>
    </d-layout>
</d-layout>
```
