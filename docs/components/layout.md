---
title: Layout 布局
---

# 布局组件

**使用说明**

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
