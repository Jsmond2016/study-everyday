const path = require('path')
const fs = require('fs')
const process = require('process')
const consola = require('consola')
const sidebarPath = path.resolve(__dirname, '../docs/.vuepress/sidebar.js')
const routes = require(sidebarPath)
const getBingImg = require('./craw')
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
  const bgImgPath = await getBingImg();
  const template = await readFileContent(mode, bgImgPath, dateTime)
  await createTodayFile({ name: fileName, data: template, filePath, fileMonthDirPath, tipMsg: modeToTplMessage[mode] })
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
  let [month, day, year] = [today.getMonth(), today.getDate(), today.getFullYear()]
  month = (month += 1, month < 10 ? month.toString().padStart(2, '0') : month)
  day = day < 10 ? day.toString().padStart(2, '0') : day
  const dateTime = dateStr || `${month}${day}`
  const monthStr = dateTime.slice(0, 2)
  return {
    dateTime,
    monthStr,
    dayStr: day,
    year
  }
}

function getTplInfo(mode, dateStr) {
  const { monthStr, dateTime, year } = getDayTime(dateStr)
  const fileName = getModeToFileName(mode, dateTime)
  const filePath = path.resolve(__dirname, `../docs/record-${year}`, monthStr, fileName)
  const fileMonthDirPath = path.resolve(__dirname, `../docs/record-${year}`, monthStr)
  const routeItem = {
    text: dateTime,
    link: `/record-${year}/${monthStr}/${fileName}`
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


function mkdirIfNotExists(path) {
  const flag = fs.existsSync(path)
  if (!flag) {
    fs.mkdirSync(path)
    return
  }
  consola.info(`<<==文件夹 ${path} 已存在==>>`)
}

function mkFileIfNotExists(path, data, tipMsg, forceFlag = false) {
  const flag = fs.existsSync(path)
  if (!flag || forceFlag) {
    fs.writeFile(path, data, (error) => {
      if (!error) {
        consola.success(tipMsg + '==写入成功:   ' + path)
      } else {
        consola.error(tipMsg + '==写入失败')
      }
    })
    return
  }
  consola.info("<<=="+ tipMsg +"文件已存在==>>")
}


async function writeRoute({ month, routeItem, fileMonthDirPath, tipMsg }) {
  const months = routes.map(item => item.text.slice(0, -1)).map(Number)
  const hasMonthRouteFlag = months.indexOf(+month) > -1  
  const hasDayRouteFlag = routes.some(month => month.children.some(day => day.text === routeItem.text))
  if (hasDayRouteFlag) {
    consola.info("<<==" + tipMsg + '已存在: ==>>')
    return
  }
  if (!hasMonthRouteFlag) {
    routes.unshift({ text: `${+month}月`, children: [] })
    const dirPath = path.resolve(fileMonthDirPath)
    const imgsDirPath = path.resolve(fileMonthDirPath, "imgs")
    mkdirIfNotExists(dirPath)
    mkdirIfNotExists(imgsDirPath)
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
  fs.stat(sidebarPath, (err) => {
    if (err) {
      consola.info(err)
      return
    }
    const data = `module.exports = ${JSON.stringify(newRoutes, null, 2)}`
    mkFileIfNotExists(sidebarPath, data, tipMsg, true)
  })
}

async function createTodayFile({ data, filePath, fileMonthDirPath, tipMsg }) {
  await mkdirIfNotExists(fileMonthDirPath)
  fs.stat(fileMonthDirPath, async (err, stats) => {
    if (err) {
      consola.error('error===')
      return
    }
    const dayFilePath = `${filePath}.md`
    mkFileIfNotExists(dayFilePath, data, tipMsg)
  })
}

function readFileContent(fileName, bgImgPath, dateTime) {
  return new Promise((resolve) => {
    const pathUrl = path.resolve(__dirname, 'templates', `${fileName}.md`)
    fs.readFile(pathUrl, { encoding: 'utf8' }, (err, data) => {
      if (!err) {
        const valueStr = data.replace(/\$\{bgImgPath\}/g, bgImgPath).replace(/\$\{dateTime\}/g, dateTime)
        resolve(valueStr)
      }
      resolve("")
    })
  })
}

