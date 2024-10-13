个人每日学习记录：

## 创建总结

```bash

# 创建日总结模板
# 爬虫自动抓取 bing 壁纸作为今天的主图

yarn new 

# or

yarn new week # 创建周总结模板

# or 生成指定日期的 日-周 模板

yarn new day 0901

yarn new week 0902
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
  - `yarn new year`
  - `yarn new month`


## Vitepress

常用工具

- https://vitepress.dev/guide/markdown#custom-containers