---
title: Collapse 折页
---

# 折页组件

**组件展示**

<ClientOnly>
<collapse-demo></collapse-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-collapse :selected.sync="currentSelected" arrow>
    <d-collapse-item title="标题1" name="1">第一个内容</d-collapse-item>
    <d-collapse-item title="标题2" name="2">第二个内容</d-collapse-item>
    <d-collapse-item title="标题3" name="3">第三个内容</d-collapse-item>
</d-collapse>

<d-collapse :selected.sync="currentSelected" arrow single>
    <d-collapse-item title="标题1" name="1">第一个内容</d-collapse-item>
    <d-collapse-item title="标题2" name="2">第二个内容</d-collapse-item>
    <d-collapse-item title="标题3" name="3">第三个内容</d-collapse-item>
</d-collapse>
```
