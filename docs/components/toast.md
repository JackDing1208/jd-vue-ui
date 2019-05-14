---
title: Toast 弹窗
---

# 按钮组件

**组件展示**

<ClientOnly>
<toast-demo></toast-demo>
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
