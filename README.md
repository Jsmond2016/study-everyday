# Study-Everyday

> 个人每日学习记录：

Study-Everyday 是一个用于记录个人学习的笔记本，始于 2021 年 5 月 至今；


## 创建日报和周报

```bash

# 创建日总结模板
# 爬虫自动抓取 bing 壁纸作为今天的主图

pn run new day

# or 生成指定日期的 日-周 模板

pn run day 0901

# or 创建周总结模板

pn run week

pn run week 0902
```

## 部分快捷命令参考


[Markdown Extensions | VitePress](https://vitepress.dev/guide/markdown#custom-containers)

```sh
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::


```

## 调试

`.vscode / launch.json`

```json
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "new"],
      "skipFiles": ["<node_internals>/**"]
    }
  ]
}

```

## TODOS

- 创建年、月目标模板

```sh
pn run new month

pn run new year
```



 
