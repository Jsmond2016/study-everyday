var request = require('axios');
var cheerio = require('cheerio');
const fs = require('fs');
const path = require('path')
const consola = require('consola')
const imgData = fs.readFileSync('./data.json', { encoding: 'utf8'})

// 爬取数据
// const pageUrls = new Array(100).fill(0).map((_, index) => request.get(`https://bing.ioliu.cn/?p=${index + 1}`));
// let urls = [];
// ~async function() {
//   const baseUrl = 'http://h2.ioliu.cn/bing'
//   const allPages = await Promise.all(pageUrls);
//   allPages.map(page => {
//     const $ = cheerio.load(page.data);
//     const hrefList = $('.container > div.item > div.progressive > a.mark').map((_, item) => {
//       const url = baseUrl + $(item).attr('href').split('?')[0].replace('/photo', '') + '_1920x1080.jpg'
//       return url
//     })
//     urls = urls.concat(hrefList.toArray())
//   })
//   console.log('urls: ==>>>>', urls);
//   const saveData = JSON.stringify(urls);
//   await fs.writeFile('./data.json', saveData, { encoding: 'utf8' }, (err) => {
//     if (!err) {
//       console.log('write===>>> 写入成功！！！')
//     }
//   })
// }()

~async function () {
  const dirs = fs.readdirSync('./', { encoding: 'utf8'}).filter(v => !isNaN(Number(v)));
  console.log('dirs: ', dirs);
  let filesPath = [];
  dirs.map(v => {
    const absPaths = fs.readdirSync(v, { encoding: 'utf8'}).filter(name => name.endsWith('.md')).map(n => `${v}/${n}`);
    filesPath = filesPath.concat(absPaths);
  })
  console.log('filesPath: ', filesPath.length);
  // ![](./bg-imgs/0530.jpg)
  filesPath.forEach((item, index) => {
    let content = fs.readFileSync(item, { encoding: 'utf8'});
    if (content.match(/\!\[\]\(\.\/bg-imgs\/\d+\.jpg\)/)) {
      console.log(`${item} 含有图片`);
      content = content.replace(/\!\[\]\(\.\/bg-imgs\/\d+\.jpg\)/, `![](${imgData[index]})`)
      fs.writeFileSync(`./${item}`, content, { encoding: 'utf8'});
      console.log(`${item} 替换完成`);
    }
  })
}()
