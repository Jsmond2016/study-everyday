# 手写 js 代码

## 防抖

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
```

## 事件委托

日报 #1130

```js
ul.addEventListener('click', function(e){
    if(e.target.tagName.toLowerCase() === 'li'){
        fn() // 执行某个函数
    }
})


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