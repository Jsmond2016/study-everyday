
# 0928 本周总结

![](http://h2.ioliu.cn/bing/DorsetPinnacles_ZH-CN2764578102_1920x1080.jpg)

## 问题盘点

- `textarea` 右下角的伸缩如何禁用：

使用样式 `resize: none;` 样式即可

- [DTO 和 entity 的区别](https://www.cnblogs.com/flyingeagle/articles/7658786.html)
- [axios-mock-adapter](https://github.com/ctimmerm/axios-mock-adapter) 看到项目中用了这个库做单元测试，使用非常简单方便。
- yarn 更新依赖

方式1：

```bash
cnpm i -g npm-check-updates
ncu 查看版本变更
ncu -u 更新 package.json
yarn install 安装新的依赖，更新 yarn.lock
```

方式2：

```bash
# 执行命令后，需要手动选择升级的依赖包，按空格键选择，a 键切换所有，i 键反选选择
yarn upgrade-interactive --latest
```

- string to dom VS dom to string: 字符串和 dom 转换操作

```javascript
// 字符串转 DOM
const resStr = "<div class='a-b'><span class='title'>${标题}</span></div>"
const parser = new DOMParser();
const resDom = parser.parseFromString(str, 'text/html')

// 操作和改变 resDom
Array.from(resDom).forEach(item => {
  // dom 操作，替换值等
})

// DOM 转 字符串
const templateStr = resDom.documentElement.outHTML
// 后续其他操作...

```


## 任务总结
> 本周任务完成度，完成感受/未完成理由

## 笔记输出


## 周末学习

## 下周任务

