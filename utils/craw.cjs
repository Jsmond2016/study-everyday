var request = require('axios');
var cheerio = require('cheerio');
const fs = require('fs');
const path = require('path')
const consola = require('consola')


const httpRequestHeaderConfig =  {
  "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",
  "accept-language": "zh-CN,zh;q=0.9",
  "cache-control": "no-cache",
  "pragma": "no-cache",
  "sec-ch-ua": "\"Google Chrome\";v=\"113\", \"Chromium\";v=\"113\", \"Not-A.Brand\";v=\"24\"",
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-platform": "\"Windows\"",
  "sec-fetch-dest": "document",
  "sec-fetch-mode": "navigate",
  "sec-fetch-site": "cross-site",
  "sec-fetch-user": "?1",
  "upgrade-insecure-requests": "1",
  "mode": "cors",
  "credentials": "omit"
}

// ------------------ 代码实现 ----------------------------

async function getBingImg() {
    // 只下载一个
    const hrefs = await getImgUrls()
    const url = hrefs[0]
    return url;
}


function getImgUrls() {
  const baseUrl = 'http://h2.ioliu.cn/bing'
  return new Promise((resolve) => {
    request.get('https://bing.ioliu.cn/?p=1', { headers: httpRequestHeaderConfig }).then(async (response) => {
      if (response.status !== 200) return
      const $ = cheerio.load(response.data)
      const hrefList = $('.container > div.item > div.progressive > a.mark').map((_, item) => {
        const url = baseUrl + $(item).attr('href').split('?')[0].replace('/photo', '') + '_1920x1080.jpg'
        return url
      })
      resolve(hrefList)
    });
  })
}



// 简易小爬虫爬取图片并下载 https://blog.csdn.net/weixin_45786214/article/details/106251139
// https://www.cnblogs.com/gaoht/p/11303611.html
async function downloadFiles(url, dirPath, imgName) {
  const fileurl = url.split('?')[0]
  const fileName = imgName || path.basename(fileurl)
  const extName = path.extname(fileurl);
  const _imgName = fileName + extName
  const dest = path.join(dirPath, _imgName)

  const file = fs.createWriteStream(dest, { autoClose: true });
  // http://www.axios-js.com/docs/  搜索 pipe 关键字
  request.get(url, {  responseType:'stream' }).then(response => {
    consola.info('开始下载图片......');
    response.data.pipe(file).on('finish', () => {
      consola.success('图片下载完成 ==> ' + _imgName)
    }).on('error', (err) => {
      consola.err('图片下载失败', err);
    })
  })

}

//-----------导出-------

module.exports = getBingImg
