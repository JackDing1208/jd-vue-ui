---
title: Grid 网格
---

# 网格组件

**组件展示**

<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

**相关代码**

``` HTML
<d-row>
    <d-col>1</d-col>
    <d-col>2</d-col>
    <d-col>3</d-col>
</d-row>
<d-row>
    <d-col span="8">8</d-col>
    <d-col span="16">16</d-col>
</d-row>
<d-row>
    <d-col span="8">8</d-col>
    <d-col span="6" offset="2">6</d-col>
    <d-col span="4" offset="4">4</d-col>
</d-row>
<d-row align="right">
    <d-col span="8">8</d-col>
    <d-col span="6">6</d-col>
    <d-col span="4">4</d-col>
</d-row>
<d-row gutter="20">
    <d-col>1</d-col>
    <d-col>2</d-col>
    <d-col>3</d-col>
</d-row>
```
