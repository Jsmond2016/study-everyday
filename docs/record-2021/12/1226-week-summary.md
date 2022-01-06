
# 1226-周总结

![](./bg-imgs/1226.jpg)

## 问题盘点/学习总结

> 有问题记录问题，没问题记录学习感悟

近期都没怎么做总结，感觉做成了月总结了，记录一下吧；


- 可拖拽图片弹框技术预研；#1208
- 复习鼠标有关的事件；拖拽相关的属性 `draggable="true"` 和事件以及案例；#1209
- 开发问题：#1210
  - 事件注册后需要清除，避免新旧事件的互相干扰；使用 `getComputedStyle` 获取 dom 的相关属性；
  - 图片使用 `transform` 后，旋转和拖拽移动需要分开图层，不要都作用在 图片上避免奇怪的问题；
  - js 精度问题处理，使用 `toFixed(2)`
- 使用 `getComputedStyle` 获取 dom 的属性  `matrix` 带来的坑，第三个参数 `rotate` 旋转角度不能高效使用，需要复杂的数学计算，这里不如 `style.transform` 来的简单容易；#1213
- 使用 `transform` 遇上 `position: fixed` 带来的问题，`position: fixed` 直接失效；#1214
- 拖拽 modal 不丝滑， 使用样式 `pointer-events: none` 解决；#1215
- 了解一下 React 的工具函数，如 `React.Children.map, forEach, count, toArray, cloneElement` 等；最后的 `cloneElement` 感觉开发可以用得上#1215
- iframe click 事件无效，顺便了解一下 iframe 的那些坑，整理了一个[合集](./1216.html)；#1216
- 学习：[张鑫旭的博客学习记录](./1217.html)
  - 一行代码实现暗黑模式
  - web 端 文件保存 新方式
  - 不用 file 类型实现 文件上传
  - File System API
  - JS 的 WeakMap 什么时候用？
  - proxy 和 reflect 区别？
  - css revert 属性使用
  - 其他的一些思考和启发
- 学习：封装 axios 请求库 #1218
- 学习： `div` 监听 `keydown` 事件无效？怎么解决？`tabindex` #1221
- 学习：`window.atob / window.btoa` 无法加密中文？怎么加密？#1221
- 学习：Typora 替代品 Obsidian，学习一下；



 ---



## 手撕代码/算法
> 防抖节流等各种手写，http和网络，浏览器原理，性能优化，Webpack

使用 setTmeout 模拟 setInterval


看看 使用 setInterval 的例子；

```js
let timer = setInterval(() => {
  count ++
  console.log(count)
  if (count === 10) {
    clearInterval(timer)
  }
}, 1000);
```

接下来使用 setTimeout 来模拟实现：

```js
let count = 0

let timer = setTimeout(function run() {
  count ++
  console.log(count)
  if (count === 10) {
    clearInterval(timer)
    return
  }
  timer = setTimeout(run, 1000);
}, 1000);

```

实现核心难点：`timer = setTimeout(run, 1000);` timer 这里要重新赋值为定时器



为什么要使用 setTimeout 模拟 setInterval ？

在 setInterval(fn, delay) 中，若 fn 的执行耗时比较久，那么后面的执行的时间间隔，实际并不是 delay 的时间

setInterval 缺点：

- 某些间隔会被跳过（丢帧现象）
- 定时器之间的间隔会比预期小


参考资料：

- [JS进阶 -- setTimeout 模拟 setInterval](https://www.jianshu.com/p/a3910f0628ce)
- [为什么要用 setTimeout 模拟 setInterval ？](https://segmentfault.com/a/1190000038829248)


---

- 驼峰命名 转 下划线

```js
const toLine = (str) => str.replace(/\B([A-Z])/g, '_$1').toLowerCase()

// toLine('GetElementById')
// 'get_element_by_id'
```

说明，正则表达式里面的 `\B` 表示 非单词边界的位置， `\b` 表示单词边界的位置

正则里面 `\B` 放在了第一个字符匹配，表示第一个字符占位不匹配，就不会被替换为 `_$1`

- 下划线命名 转 驼峰命名

```js
const toHump = (str) => str.replace(/\_(\w)/g, (all, letter) => letter.toUpperCase())

// toHump('get_element_by_id')
// 'getElementById'
```


## 好文推荐/面经相关/博客项目推荐
> 有感好文，面经，博客，项目等


## 其他/TODOS