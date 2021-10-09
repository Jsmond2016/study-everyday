const path = require('path')
const fs = require('fs')
const process = require('process')
const consola = require('consola')
const filePath = path.resolve(__dirname, '../docs/.vitepress/sidebar.js')
const routes = require(filePath)



start();




/** ------------以下都是逻辑代码---------------  */


async function start() {
  const { type, dateTime, recordPath, todayItem, month } = init()
  await writeRoute({ type, dateTime, recordPath, todayItem, month })
  const template = await readFileContent(type, dateTime)
  await createTodayFile({ name: dateTime, data: template, recordPath, type })
}


function init() {
  const params = process.argv.slice(2)
  const modeMap = {
    week: 'week',
    day: 'day',
    month: 'month',
    year: 'year'
  }

  const today = new Date()

  let [year, month, day] = [today.getFullYear(), today.getMonth(), today.getDate()]
  month = (month += 1, month < 10 ? month.toString().padStart(2, '0') : month)
  day = day < 10 ? day.toString().padStart(2, '0') : day

  const type = modeMap[params[0]] || 'day'
  const dateTime = params[1] || `${month}${day}`

  const recordPath = path.resolve(__dirname, '../docs/record', month.toString())

  const fileName = type === 'day' ? dateTime : `${dateTime}-week-summary`

  const todayItem = {
    text: type === 'day' ? dateTime : dateTime + '-周总结',
    link: `/record/${month}/${fileName}`
  }

  return {
    type,
    dateTime,
    recordPath,
    todayItem,
    month
  }
}

const mkdirIfNotExits = (path) => {
  const flag = fs.existsSync(path)
  if (!flag) {
    fs.mkdirSync(path)
  }
}


async function writeRoute({ month, todayItem, recordPath, type }) {
  const hasRouteFlag = routes.map(item => item.text).indexOf(`${month}月`) > -1
  if (!hasRouteFlag) {
    routes.unshift({ text: `${+month}月`, children: [] })
    const bgImgDirPath = path.resolve(recordPath, "bg-imgs")
    const imgsDirPath = path.resolve(recordPath, "imgs")
    fs.mkdirSync(bgImgDirPath)
    fs.mkdirSync(imgsDirPath)
  }
  const newRoutes = routes.map(route => {
    if (route.text === `${+month}月`) {
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
      consola.info(err)
      return
    }
    fs.writeFile(filePath, `module.exports = ${JSON.stringify(newRoutes, null, 2)}`, (error) => {
      if (!error) {
        const msg = type === 'day' ? '路由==日模板==写入成功' : '路由==周模板==写入成功'
        consola.success(msg + ':   ' + filePath)
      } else {
        consola.err('文件写入失败')
      }
    })
  })
}

async function createTodayFile({ name, data, recordPath, type }) {
  const writeFileAction = (name, data) => {
    fs.writeFile(`${recordPath}/${name}.md`, data, (error) => {
      if (!error) {
        const msg = type === 'day' ? '日总结模板写入成功' : '周总结模板写入成功'
        consola.success(msg + ':  ' + recordPath + '\\' + name + '.md')
      } else {
        consola.err('文件写入失败')
      }
    })
  }
  await mkdirIfNotExits(recordPath)
  fs.stat(recordPath, async (err, stats) => {
    if (err) {
      consola.err('error===')
      return
    }
    writeFileAction(name, data)
  })
}

function readFileContent(fileName, time) {
  return new Promise((resolve) => {
    const pathUrl = path.resolve(__dirname, 'templates', `${fileName}.md`)
    fs.readFile(pathUrl, { encoding: 'utf8' }, (err, data) => {
      if (!err) {
        const valueStr = data.replace(/\$\{dateTime\}/g, time)
        resolve(valueStr)
      }
      resolve("")
    })
  })
}

