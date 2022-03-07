# 树形题目集合

相关题目：

- [面试了十几个高级前端，竟然连（扁平数据结构转Tree）都写不出来](https://juejin.cn/post/6983904373508145189)
- [面试题-数组转树结构](https://www.cnblogs.com/chenwenhao/p/11146760.html)
- [面试题-树状数组结构转化](https://cloud.tencent.com/developer/article/1731021) 
- [挑战大厂第1篇-树结构互转](https://segmentfault.com/a/1190000022277413)
- [这两天遇到一个数组转成树形结构的面试题](https://juejin.cn/post/6844904071309033486)
- [面试题——数组转树结构](https://blog.csdn.net/sinat_17775997/article/details/106747130)
- [面试题——数组转树结构](http://www.noobyard.com/article/p-vokfhuoy-bo.html)
- [实现数组转化成树形结构-1](https://juejin.cn/post/7020738670080557086) 非递归
- [实现数组转化成树形结构-2](https://juejin.cn/post/7021117083438202888) 利用递归方式
- [实现数组转化成树形结构-3](https://juejin.cn/post/7023374254208974861) 利用递归方式
- [扁平数组与树形结构相互转换的算法](https://juejin.cn/post/6997445260632653861)
- [数据处理：一维数组转换为树形数据结构](https://juejin.cn/post/7020788438932684831)


- 题目1：

```js
// 树形转换：这题有个前提，就是 parent 必须是有序的，找到 parent 时，id 必须是已经设置过了

const arr = [
  { id: 1, name: '部门A', parent: 0 },
  { id: 2, name: '部门B', parent: 1 },
  { id: 3, name: '部门C', parent: 1 },
  { id: 4, name: '部门D', parent: 2 },
  { id: 5, name: '部门E', parent: 2 },
  { id: 6, name: '部门F', parent: 3 },
]

const convert = (arr) => {
  const id2TreeMap = new Map()
  let root = null

  arr.forEach(item => {
    const { name, id, parent } = item;

    // 定义 treeNode 加入 map
    const treeNode = { name, id }
    id2TreeMap.set(id, treeNode)
    
    // 找到 parentNode ，设置 children
    // 注意：就是 parent 必须是有序的，找到 parent 时，id 必须是已经设置过了，否则会丢失，解决办法： 单独一次遍历提前设置好 id2TreeMap
    const parentNode = id2TreeMap.get(parent)
    if (parentNode) {
      parentNode.children = parentNode.children || []
      parentNode.children.push(treeNode)
    }

    if (parent === 0) {
      root = treeNode
    }
  })

  return root
}

console.log(JSON.stringify(convert(arr), null, 2));
```