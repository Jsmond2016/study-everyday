# 手写 js 代码

## 防抖节流

日报 #1129

```js
 // 防抖（一段时间会等，然后带着一起做了）
 function debounce(fn, delay){
     let timerId = null
     return function(){
         const context = this
         if(timerId){window.clearTimeout(timerId)}
         timerId = setTimeout(()=>{
             fn.apply(context, arguments)
             timerId = null
         },delay)
     }
 }
 const debounced = debounce(()=>console.log('hi'))
 debounced()
 debounced()


 // 节流（一段时间执行一次之后，就不执行第二次）
 function throttle(fn, delay){
     let canUse = true
     return function(){
         if(canUse){
             fn.apply(this, arguments)
             canUse = false
             setTimeout(()=>canUse = true, delay)
         }
     }
 }

 const throttled = throttle(()=>console.log('只有一个hi'))
 throttled()
 throttled()

```

## 事件委托

日报 #1130

```js
ul.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        fn() // 执行某个函数
    }
})


// 进阶版本
function delegate(parentNode, eventType, selector, fn) {
  parentNode.addEventListener(eventType, e => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (parentNode === el) {
        el = null
        break
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el)
  })
  return parentNode;
}

```

## 深浅拷贝

日报 #1201

```js
let obj1 = {
  a:{
    b:1
  }
}
function deepClone(obj) { 
  let cloneObj = {}
  for(let key in obj) {                 //遍历
    if(typeof obj[key] ==='object') { 
      cloneObj[key] = deepClone(obj[key])  //是对象就再次调用该函数递归
    } else {
      cloneObj[key] = obj[key]  //基本类型的话直接复制值
    }
  }
  return cloneObj
}
let obj2 = deepClone(obj1);
obj1.a.b = 2;
console.log(obj2);   //  {a:{b:1}}



// 高阶版本 ....


// 'Object' | 'Function' | 'Array' ...
const isObj = obj => Object.prototype.toString.call(obj).slice(8, -1) === 'Object'
const deepClone = function (obj, hash = new WeakMap()) {
  if (obj.constructor === Date) {
    // 日期对象直接返回一个新的日期对象
    return new Date(obj)
  }
  if (obj.constructor === RegExp) {
    //正则对象直接返回一个新的正则对象
    return new RegExp(obj)     
  }
  //如果循环引用了就用 weakMap 来解决
  if (hash.has(obj)) {
    return hash.get(obj)
  }
  let allDesc = Object.getOwnPropertyDescriptors(obj)
  //遍历传入参数所有键的特性
  let cloneObj = Object.create(Object.getPrototypeOf(obj), allDesc)
  //继承原型链
  hash.set(obj, cloneObj)
  for (let key of Reflect.ownKeys(obj)) { 
    cloneObj[key] = isObj(obj[key]) ? deepClone(obj[key], hash) : obj[key]
  }
  return cloneObj
}

// 下面是验证代码
let obj = {
  num: 0,
  str: '',
  boolean: true,
  unf: undefined,
  nul: null,
  obj: { name: '我是一个对象', id: 1 },
  arr: [0, 1, 2],
  func: function () { console.log('我是一个函数') },
  date: new Date(0),
  reg: new RegExp('/我是一个正则/ig'),
  [Symbol('1')]: 1,
};
Object.defineProperty(obj, 'innumerable', {
  enumerable: false, value: '不可枚举属性' }
);
obj = Object.create(obj, Object.getOwnPropertyDescriptors(obj))
obj.loop = obj    // 设置loop成循环引用的属性
let cloneObj = deepClone(obj)
cloneObj.arr.push(4)
console.log('obj', obj)
console.log('cloneObj', cloneObj)

```

## 一维数组转树形结构：

日报 #1202

```js
const source = [
  { id: 1, parentId: null },
  { id: 2, parentId: 1 },
  { id: 3, parentId: 1 },
  { id: 4, parentId: 2 },
  { id: 5, parentId: 2 },
  { id: 6, parentId: 3 },
]

// 目标是将 source 转换成下面的结构

// {
//   id: 1, 
//   children: [
//       {
//           id: 2,
//           children: [
//               { id: 4, children: [] },
//               { id: 5, children: [] }
//           ]
//       },
//       {
//           id: 3,
//           children: [
//               { id: 6, children: [] }
//           ]
//       }
//   ]
//   }

const rootObj = {
  id: source.find(s => s.parentId == null).id,
  children: []
}
const map = new Map();
source.filter(s => s.parentId !== null).forEach(item => {
  const subItem = { id: item.id, children: [] };
  if (map.has(item.parentId)) {
    const obj = map.get(item.parentId);
    obj.children.push(subItem)
    map.set(item.parentId, obj)
  } else {
    map.set(item.id, subItem)
  }
})

rootObj.children = [...map.values()]

console.log(JSON.stringify(rootObj))
```

## 发布订阅模式

日报 #1203

```js
class Event {
  constructor () {}
  // 首先定义一个事件容器，用来装事件数组（因为订阅者可以是多个）
  handlers = {}

  // 事件添加方法，参数有事件名和事件方法
  addEventListener (type, handler) {
    // 首先判断handlers内有没有type事件容器，没有则创建一个新数组容器
    if (!(type in this.handlers)) {
      this.handlers[type] = []
    }
    // 将事件存入
    this.handlers[type].push(handler)
  }

  // 触发事件两个参数（事件名，参数）
  dispatchEvent (type, ...params) {
    // 若没有注册该事件则抛出错误
    if (!(type in this.handlers)) {
      return new Error('未注册该事件')
    }
    // 便利触发
    this.handlers[type].forEach(handler => {
      handler(...params)
    })
  }

  // 事件移除参数（事件名，删除的事件，若无第二个参数则删除该事件的订阅和发布）
  removeEventListener (type, handler) {
      // 无效事件抛出
      if (!(type in this.handlers)) {
        return new Error('无效事件')
      }
      if (!handler) {
        // 直接移除事件
        delete this.handlers[type]
      } else {
        const idx = this.handlers[type].findIndex(ele => ele === handler)
        // 抛出异常事件
        if (idx === -1) {
          return new Error('无该绑定事件')
        }
        // 移除事件
        this.handlers[type].splice(idx, 1)
        if (this.handlers[type].length === 0) {
          delete this.handlers[type]
        }
      }
    }
}

var event = new Event() // 创建event实例
// 定义一个自定义事件:"load"
function load (params) {
  console.log('load', params)
}
event.addEventListener('load', load)
// 再定义一个load事件
function load2 (params) {
  console.log('load2', params)
}
event.addEventListener('load', load2)
// 触发该事件
event.dispatchEvent('load', 'load事件触发')
// 移除load2事件
event.removeEventListener('load', load2)
// 移除所有load事件
event.removeEventListener('load')

```

## 数组扁平化

日报 #1206

```js
// 方法一： reduce,  Array.isArray, ...拓展运算符/concat, 递归 flattern

const flattern = (arr = []) => arr.reduce((pre, cur) => Array.isArray(cur) ? [...pre, ...flattern(cur)] : [...pre, cur], [])

const source = [
  1,
  2,
  [ 3,4, 
  [ 5, 6 ]]
]
const result = flattern(source)
console.log('result', result)

// 方法二：while 循环，Array.some, Array.isArray

const flattern = (arr = []) => {
  while(arr.some(item => Array.isArray(item))) {
      arr = [].concat(...arr)
  }
  return arr;
}

const source = [1,2,[3,4, [5, 6]]]
const result = flattern(source)
console.log('result', result)


// 方法3：Array.flat(Infinity)

[1,2,[3,4, [5, 6]]].flat(Infinity)

// 方法4：toString, split, map
// eg:
[1,2,[3,4, [5, 6]]].toString()
// '1,2,3,4,5,6'

const flattern = (arr = [] ) => {
  return arr.toString().split(",").map(Number)
}

const source = [1,2,[3,4, [5, 6]]]
const result = flattern(source)
console.log('result', result)
```

## 函数柯里化

日报 #1207

```js
let curry = fn => {
  return function curriedFn(...args) {
    if (args.length < fn.length) {
      // 递归调用 curriedFn，参数累计到 fn 的参数后就立即执行 fn(args)，否则一直递归自己——加参数
      return function() {
        return curriedFn.apply(null, [...args, ...arguments])
      }
    }
    return fn.apply(null, args)
  }
}

 const sum = (x, y, z) => x * y * z * 10;
 const curriedSum = curry(sum)
 console.log(curriedSum(2)(3)(4))
```

## 实现 compose

日报 #1208

```js
function compose() {
    const fns = [...arguments]
    return function(args) {
        return fns.reduceRight((pre, curFn) => pre = curFn(pre), args)
    }
}

const  fn1 = (param1) => { return "fn1-" + param1 }
const  fn2 = (param2) => { return "fn2-" + param2 }
const  fn3 = (param3) => { return "fn3-" + param3 }

const Fn = compose(fn1, fn2, fn3)
console.log('res', Fn('hello'))
// res fn1-fn2-fn3-hello

// or
const compose = (...fns) => (...args) => fns.reduceRight((res, fn) => [fn.call(null, ...res)], args)[0];


```