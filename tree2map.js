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