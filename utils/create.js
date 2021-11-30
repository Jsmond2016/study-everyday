const path = require('path')
const fs = require('fs')
const process = require('process')
const consola = require('consola')
const sidebarPath = path.resolve(__dirname, '../docs/.vitepress/sidebar.js')
const routes = require(sidebarPath)
const downLoadImg = require('./craw')
const modeMap = {
  week: 'week',
  day: 'day',
  month: 'month',
  year: 'year'
}
const modeToRouteMessage = {
  day: '路由==日模板',
  week: '路由==周模板',
}

const modeToTplMessage = {
  day: '日总结模板',
  week: '周总结模板',
}

start();




/** ------------以下都是逻辑代码---------------  */


async function start() {
  const { mode, dateStr } = init()
  const {
    fileName,
    title,
    dateTime,
    routeItem,
    filePath,
    monthStr: month,
    fileMonthDirPath
  } = getTplInfo(mode, dateStr)

  await writeRoute({ month, routeItem, fileMonthDirPath, tipMsg: modeToRouteMessage[mode] })
  const template = await readFileContent(mode, dateTime)
  await createTodayFile({ name: fileName, data: template, filePath, tipMsg: modeToTplMessage[mode] })
  const imgPath = `${fileMonthDirPath}/bg-imgs`
  await downLoadImg(imgPath, dateTime)
}


function init() {
  const params = process.argv.slice(2)
  const mode = modeMap[params[0]] || 'day'
  const dateStr = params[1]
  return {
    mode,
    dateStr
  }
}


function getModeToFileName(mode, dateTime) {
  const modeToMap = {
    day: '',
    week: '-week-summary',
    // TODO: other mode file name
  }
  return dateTime + '' + modeToMap[mode]
}

function getModeRouteName(mode, dateTime) {
  const modeToMap = {
    day: '-日总结',
    week: '-周总结',
    // TODO: other mode file name
  }
  return dateTime + '' + modeToMap[mode]
}

function getDayTime(dateStr) {
  const today = new Date()
  let [month, day] = [today.getMonth(), today.getDate()]
  month = (month += 1, month < 10 ? month.toString().padStart(2, '0') : month)
  day = day < 10 ? day.toString().padStart(2, '0') : day
  const dateTime = dateStr || `${month}${day}`
  const monthStr = dateTime.slice(0, 2)
  return {
    dateTime,
    monthStr,
    dayStr: day
  }
}

function getTplInfo(mode, dateStr) {
  const { monthStr, dateTime } = getDayTime(dateStr)
  const fileName = getModeToFileName(mode, dateTime)
  const filePath = path.resolve(__dirname, '../docs/record', monthStr, fileName)
  const fileMonthDirPath = path.resolve(__dirname, '../docs/record', monthStr)
  const routeItem = {
    text: dateTime,
    link: `/record/${monthStr}/${fileName}`
  }

  return {
    fileName,
    title: '',
    dateTime,
    routeItem,
    filePath,
    fileMonthDirPath,
    monthStr
  }

}


function mkdirIfNotExits(path) {
  const flag = fs.existsSync(path)
  if (!flag) {
    fs.mkdirSync(path)
  }
}


async function writeRoute({ month, routeItem, fileMonthDirPath, tipMsg }) {
  const hasRouteFlag = routes.map(item => item.text).indexOf(`${month}月`) > -1
  if (!hasRouteFlag) {
    routes.unshift({ text: `${+month}月`, children: [] })
    const dirPath = path.resolve(fileMonthDirPath)
    const bgImgDirPath = path.resolve(fileMonthDirPath, "bg-imgs")
    const imgsDirPath = path.resolve(fileMonthDirPath, "imgs")
    mkdirIfNotExits(dirPath)
    mkdirIfNotExits(bgImgDirPath)
    mkdirIfNotExits(imgsDirPath)
  }
  const newRoutes = routes.map(route => {
    if (route.text === `${+month}月`) {
      const children = Array.isArray(route.children) ? (route.children.unshift(routeItem), route.children) : [routeItem]
      return {
        ...route,
        children
      }
    } else {
      return route
    }
  })
  fs.stat(sidebarPath, async (err, stats) => {
    if (err) {
      consola.info(err)
      return
    }
    fs.writeFile(sidebarPath, `module.exports = ${JSON.stringify(newRoutes, null, 2)}`, (error) => {
      if (!error) {
        consola.success(tipMsg + '==写入成功:   ' + sidebarPath)
      } else {
        consola.error(tipMsg + '==写入失败')
      }
    })
  })
}

async function createTodayFile({ name, data, filePath, tipMsg }) {
  const writeFileAction = (name, data) => {
    fs.writeFile(`${filePath}.md`, data, (error) => {
      if (!error) {
        consola.success(tipMsg + '==写入成功:  ' + filePath + '.md')
      } else {
        consola.error(tipMsg + '==写入失败')
      }
    })
  }
  await mkdirIfNotExits(filePath)
  fs.stat(filePath, async (err, stats) => {
    if (err) {
      consola.err('error===')
      return
    }
    writeFileAction(name, data)
  })
}

function readFileContent(fileName, title) {
  return new Promise((resolve) => {
    const pathUrl = path.resolve(__dirname, 'templates', `${fileName}.md`)
    fs.readFile(pathUrl, { encoding: 'utf8' }, (err, data) => {
      if (!err) {
        const valueStr = data.replace(/\$\{dateTime\}/g, title)
        resolve(valueStr)
      }
      resolve("")
    })
  })
}

