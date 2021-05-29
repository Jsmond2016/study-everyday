const path = require('path')
const fs = require('fs')
const process = require('process')

const params = process.argv.slice(2)
// 判断是日总结还是周总结模式
const mode = params.includes('week') ?  'week' : 'day'

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

![](./bg-imgs/#)

## 工作

## 好文推荐

## 项目推荐

## 好用的工具：

## 反思

## 明日计划

## TODOS`
const weekTemplate = `
# ${dateTime} 本周总结

![](./bg-imgs/#)

## 问题盘点


## 笔记输出


## 周末阅读

`
const data = mode === 'day' ? dayTemplate : weekTemplate

function writeRoute() {
  const newRoutes = routes.map(route => {
    if (route.text === month.toString().slice(1) + '月') {
      return {
        ...route,
        children: (route.children.unshift(todayItem), route.children)
      }
    } else {
      return route
    }
  })
  fs.stat(recordPath, (err, stats) => {
    if (!err && stats.isDirectory()) {
      fs.writeFile(filePath, `module.exports = ${JSON.stringify(newRoutes, null, 2)}`, (error) => {
        if (!error) {
          const msg = mode === 'day' ? '日总结模板-路由-写入成功' : '周总结模板-路由-写入成功'
          console.log(msg)
        } else {
          console.log('路由--err', err)
        }
      })
    }else {
      console.log('writeRoute--err', err)
    }
  })
}

function createTodayFile(name, data) {
  const writeFileAction = (name, data) => {
    fs.writeFile(`${recordPath}/${name}.md`, data, (error) => {
      if (!error) {
        const msg = mode === 'day' ? '日总结模板写入成功' : '周总结模板写入成功'
        console.log(msg)
      } else {
        console.log('模板写入失败 error', error)
      }
    })
  }

  fs.stat(recordPath, async (err, stats) => {
    if (!err && stats.isDirectory()) {
      writeFileAction(name, data)
    } else if(!err && !stats.isDirectory()) {
      console.log('recordPath: ', recordPath);
      await fs.mkdir(recordPath)
      writeFileAction(name, data)
    } else {
      console.log('createTodayFile---err', err)
    }
  })
}

writeRoute()
createTodayFile(fileName, data)