const path = require('path')
const fs = require('fs')
const process = require('process')

const params = process.argv.slice(2)
// 判断是日总结还是周总结模式
const mode = params.includes('week') ? 'week' : 'day'

const today = new Date()
let [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]

month = (month += 1, month < 10 ? month.toString().padStart(2, '0') : month)
day = day < 10 ? day.toString().padStart(2, '0') : day

const filePath = path.resolve(__dirname, '../docs/.vitepress/sidebar.js')
const recordPath = path.resolve(__dirname, '../docs/record', month.toString())
const routes = require(filePath)

const dateTime = month + '' + day
const fileName = mode === 'day' ? dateTime : `${dateTime}-week-summary`

const todayItem = {
  text: mode === 'day' ? dateTime : dateTime + '-周总结',
  link: `/record/${month}/${fileName}`
}


const dayTemplate = `
# ${dateTime}

![](./bg-imgs/${dateTime}.jpg)

## 工作

## 好文推荐

## 项目推荐

## 好用的工具：

## 反思

## 明日计划

## TODOS`
const weekTemplate = `
# ${dateTime} 本周总结

![](./bg-imgs/${dateTime}.jpg)

## 问题盘点


## 笔记输出


## 周末阅读

`
const data = mode === 'day' ? dayTemplate : weekTemplate

const mkdirIfNotExits = (path) => {
  const flag = fs.existsSync(path)
  if (!flag) {
    fs.mkdirSync(path)
  }
}


async function writeRoute() {
  const hasRouteFlag = routes.map(item => item.text).indexOf(month.toString().slice(1) + '月') > -1
  if (!hasRouteFlag) {
    routes.unshift({ text: month.toString().slice(1) + '月', children: [] })
    const bgImgDirPath = path.resolve(recordPath, "bg-imgs")
    const imgsDirPath = path.resolve(recordPath, "imgs")
    fs.mkdirSync(bgImgDirPath)
    fs.mkdirSync(imgsDirPath)
  }
  const newRoutes = routes.map(route => {
    if (route.text === month.toString().slice(1) + '月') {
      const children = Array.isArray(route.children) ? (route.children.unshift(todayItem), route.children) : [todayItem]
      return {
        ...route,
        children
      }
    } else {
      return route
    }
  })
  fs.stat(filePath, async (err, stats) => {
    if (err) {
      console.log('err', err)
      return
    }
    fs.writeFile(filePath, `module.exports = ${JSON.stringify(newRoutes, null, 2)}`, (error) => {
      if (!error) {
        const msg = mode === 'day' ? '路由==日模板==写入成功' : '路由==周模板==写入成功'
        console.log(msg + ':   ' + filePath)
      } else {
        console.log('文件写入失败')
      }
    })
  })
}

async function createTodayFile(name, data) {
  const writeFileAction = (name, data) => {
    fs.writeFile(`${recordPath}/${name}.md`, data, (error) => {
      if (!error) {
        const msg = mode === 'day' ? '日总结模板写入成功' : '周总结模板写入成功'
        console.log(msg + ':  ' + recordPath + '/' + name + '.md')
      } else {
        console.log('文件写入失败')
      }
    })
  }
  await mkdirIfNotExits(recordPath)
  fs.stat(recordPath, async (err, stats) => {
    if (err) {
      console.log('error===')
      return
    }
    writeFileAction(name, data)
  })
}

writeRoute()
createTodayFile(fileName, data)