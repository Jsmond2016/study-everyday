const deepClone = (a, cache) => {
  if(!cache){
    cache = new Map() // 缓存不能全局，最好临时创建并递归传递
  }
  if(a instanceof Object) { // 不考虑跨 iframe
    if(cache.get(a)) { return cache.get(a) }
    let result 
    if(a instanceof Function) {
      if(a.prototype) { // 有 prototype 就是普通函数
        result = function(){ return a.apply(this, arguments) }
      } else {
        result = (...args) => { return a.call(undefined, ...args) }
      }
    } else if(a instanceof Array) {
      result = []
    } else if(a instanceof Date) {
      result = new Date(a - 0)
    } else if(a instanceof RegExp) {
      result = new RegExp(a.source, a.flags)
    } else {
      result = {}
    }
    cache.set(a, result)
    for(let key in a) { 
      if(a.hasOwnProperty(key)){
        result[key] = deepClone(a[key], cache) 
      }
    }
    return result
  } else {
    return a
  }
}

const a = { 
  number:1, bool:false, str: 'hi', empty1: undefined, empty2: null, 
  array: [
    {name: 'frank', age: 18},
    {name: 'jacky', age: 19}
  ],
  date: new Date(2000,0,1,20,30,0),
  regex: /\.(j|t)sx/i,
  obj: { name:'frank', age: 18},
  f1: (a, b) => a + b,
  f2: function(a, b) { return a + b }
}
a.self = a

const b = deepClone(a)

b.self === b // true
b.self = 'hi'
a.self !== 'hi' //true