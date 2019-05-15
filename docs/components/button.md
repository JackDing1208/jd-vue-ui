---
title: Button 按钮
---

# 按钮组件

**组件介绍**

按钮组件功能及用法如下，支持添加icon，设置icon位置，加载状态，按钮形状等功能

**组件展示**

<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-button>按钮</d-button>
<d-button icon="like">点赞</d-button>
<d-button icon="setting">设置</d-button>
<d-button icon="setting" icon-position="right">设置</d-button>
<d-button icon="download" :loading="true">下载</d-button>
<d-button icon="setting" :circle="true"></d-button>
<d-button icon="download" :circle="true" :loading="true"></d-button>
```
