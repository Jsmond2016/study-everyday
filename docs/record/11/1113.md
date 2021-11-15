
# 1113-本周总结

![](./bg-imgs/1113.jpg)


## 问题盘点

- html2pdf 相关问题
  - 问题-1：不适用 cli 工具，直接使用 vue.js/react.js 上手如何进行开发 (#1019)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="https://unpkg.com/react@16/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/babel-standalone@6.26.0/babel.js"></script>
</head>

<body>    
  <div id="root"></div>

  <script type="text/babel">
     const w = "world"
     const tpl = (
       <h1>Hello, {w}</h1>
     )
     ReactDOM.render(tpl, document.getElementById('root'))
  </script>
</body>

</html>

```
  - 问题-2：JSON 含有转义字符序列化失败问题——含有 `\n, \t, \r` 这种字符倒置序列化失败 ()

```js
JSON.parse({"name":"hh\n"})

VM274:1 Uncaught SyntaxError: Unexpected token o in JSON at position 1
    at JSON.parse (<anonymous>)
    at <anonymous>:1:6

```

解决方案就是，使用 `JSON.parse(val, replacer, fn)` 的第二个参数替换掉转义字符；

  - pdf 打印空白：使用 es 新版语法导致低版本浏览器不兼容问题：（#1027）
  - pdf 第二页没有水印问题：(#1028)

  解决办法：把内容插入到 水印的容器内

  ```js
  <body>
    <div id="container"></div>
  </body>

  <script>
  // 先插入水印
  gwm.creation({ txt: '水印', container: '#container' }) // 默认挂载在 body 上
  const container = document.querySelector('#container')
  // 再插入 dom
  container.innerHTML = dom
  </script>

  ```

- 127.0.0.1和 0.0.0.0 地址的区别，后者方便在局域网内手机调试 本地的 h5 项目 (#1103)

- canvas 在不同浏览器环境的大小限制，使用 [canvas-size](https://github.com/jhildenbiddle/canvas-size) 进行测试 (#1103)

- 如何对中文排序 (#1105)

```js
var arr = ['南京', '北京', '上海', '杭州', '深圳'];
  function sortChinese (arr) { // 参数： 排序的数组
    arr.sort(function (item1, item2) {
      return item1.localeCompare(item2, 'zh-CN');   
    })
  }
  sortChinese(arr)
  console.log(arr); //  ["北京", "杭州", "南京", "上海", "深圳"]
```
- 安卓设备上的 `input mutiple` 不支持多选图片，搜索资料当前无解 (#1109)

- 关于晋升和能力要求 (#1111)



- css 样式：first-child 和 first-of-type 区别：(#1019)

```
- first-child: 表示该父元素下第一个子元素
- first-of-type: 表示父元素下第一个**同类型**的子元素

```

- 浏览器打印时表格背景色丢失 如何处理？(#1019)

加上这一段 css：

```css
body {
      -webkit-print-color-adjust: exact;
      -moz-print-color-adjust: exact;
      color-adjust: exact;
    }

```

