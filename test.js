// class Event {
//   constructor () {}
//   // 首先定义一个事件容器，用来装事件数组（因为订阅者可以是多个）
//   handlers = {}

//   // 事件添加方法，参数有事件名和事件方法
//   addEventListener (type, handler) {
//     // 首先判断handlers内有没有type事件容器，没有则创建一个新数组容器
//     if (!(type in this.handlers)) {
//       this.handlers[type] = []
//     }
//     // 将事件存入
//     this.handlers[type].push(handler)
//   }

//   // 触发事件两个参数（事件名，参数）
//   dispatchEvent (type, ...params) {
//     // 若没有注册该事件则抛出错误
//     if (!(type in this.handlers)) {
//       return new Error('未注册该事件')
//     }
//     // 便利触发
//     this.handlers[type].forEach(handler => {
//       handler(...params)
//     })
//   }

//   // 事件移除参数（事件名，删除的事件，若无第二个参数则删除该事件的订阅和发布）
//   removeEventListener (type, handler) {
//       // 无效事件抛出
//       if (!(type in this.handlers)) {
//         return new Error('无效事件')
//       }
//       if (!handler) {
//         // 直接移除事件
//         delete this.handlers[type]
//       } else {
//         const idx = this.handlers[type].findIndex(ele => ele === handler)
//         // 抛出异常事件
//         if (idx === -1) {
//           return new Error('无该绑定事件')
//         }
//         // 移除事件
//         this.handlers[type].splice(idx, 1)
//         if (this.handlers[type].length === 0) {
//           delete this.handlers[type]
//         }
//       }
//     }
// }

// var event = new Event() // 创建event实例
// // 定义一个自定义事件:"load"
// function load (params) {
//   console.log('load', params)
// }
// event.addEventListener('load', load)
// // 再定义一个load事件
// function load2 (params) {
//   console.log('load2', params)
// }
// event.addEventListener('load', load2)
// // 触发该事件
// event.dispatchEvent('load', 'load事件触发')
// // 移除load2事件
// event.removeEventListener('load', load2)
// // 移除所有load事件
// event.removeEventListener('load')





class Event {
  constructor() {
    this.eventKeys = {}
  }

  register(keyName, handler) {
    if (!this.eventKeys[keyName]) {
      this.eventKeys[keyName] = [handler]
    } else {
      this.eventKeys[keyName].push(handler)
    }
  }

  emit(keyName, args) {
    if (!this.eventKeys[keyName]) {
      console.log('no keyName ' + keyName)
      return
    }
    this.eventKeys[keyName].forEach(handler => {
      handler(args)
    })
  }

  remove(keyName, handler) {
    if (!this.eventKeys[keyName]) {
      console.log('no keyName ' + keyName)
      return
    }
    if (!handler) {
      delete this.eventKeys[keyName]
    } else {
      const idx = this.eventKeys[keyName].findIndex(fn => fn === handler);
      if (idx === -1) return
      this.eventKeys[keyName].splice(idx, 1)
      if (this.eventKeys[keyName].length == 0) {
        delete this.eventKeys[keyName]
      }
    }
  }
}


const ev = new Event()

const f1 = (args) => {
  console.log('f1', args)
}
ev.register('test', f1)

const f2 = (args) => {
  console.log('f2', args)
}

ev.register('test', f2)

ev.emit('test', 'emit')

// ev.remove('test')
ev.remove('test', f1)
ev.remove('test', f2)
ev.emit('test', 'emit')
console.log(ev)























