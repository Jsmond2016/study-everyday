# 0516 本周总结



## 问题盘点

- 水印问题：
  - 水印大小计算问题
  - `input accept` 修改后导致的相机和图片选择问题
- `AntDesign` 使用问题
  - `Table` 需要加 `rowKey` 属性避免警告
  - `Select` 组件 `defaultValue` 缓存值问题，加 `key` 方式解决
  - `Modal 和 Form` 缓存数据问题：`Modal` 设置属性 `destroyOnClose: true`， `Form` 设置属性 `preserve={false}`
  - `Form.Item` 里面只能放一个子组件限制： 使用 `Form.Item` 包裹，修改 `label` 到外层 `Form.Item` ，里面的 `Form.Item` 设置 `noStyle` 属性，避免样式问题
  - `Form` 组件校验非法自动滚动问题：只有使用默认的 `submit` 才能触发 `scrollToFirstError` 函数，手动校验需要使用 `try...catch(err)` 进行捕捉，使用 `form.scrollToField(err.errorField[0].name.toString())` ，参考博客 [antd3 -- antd4 api差异之form组件](https://blog.csdn.net/weixin_42114897/article/details/105408039)

## 笔记输出

- [Electron-React开发环境搭建](https://github.com/Jsmond2016/electron-react-demo/blob/main/README.md)

## 周末阅读

- [10x 程序员工作法](https://github.com/cuixiaorui/chunquchunyoulai/issues/19)
- 视频：[nodejs 中使用 esm 模块规范](https://www.bilibili.com/video/BV1WK4y1A7EE)
- [阅读《代码整洁之道》](https://github.com/cuixiaorui/chunquchunyoulai/issues/21)
- [vscode键盘侠养成记](https://juejin.cn/post/6844904099880632328) 各种快捷键使用，摆脱鼠标控制
