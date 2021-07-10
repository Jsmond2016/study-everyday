# 每日学习记录

> 这是一个记录每日学习的仓库

- 灵感来源：[俊劫的每日学习打卡](https://alexwjj.github.io/)

# 添加 task-lists

- 参考：https://github.com/vuestorefront/vue-storefront/issues/4391
- 相关的库：[markdown-it-task-lists](https://github.com/revin/markdown-it-task-lists)
- [vitepress 配置](https://vitepress.vuejs.org/guide/markdown.html#advanced-configuration)

```js
const taskLists = require("markdown-it-task-lists")

// ...
module.exports = {
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists)
    },
  },
}
```

**好文推荐**

- [跳槽人速来，面经&资源分享](https://juejin.cn/post/6942988170208215076#heading-16) 面经+面经资源，**值得反复看**。

## 优秀的个人博客推荐

- [冴羽的博客](https://github.com/mqyqingfeng/Blog)
- [前端精读](https://github.com/ascoders/weekly)
- [阮一峰的网络日志](http://www.ruanyifeng.com/blog/weekly/)
- [若川的博客](https://lxchuan12.gitee.io/)
- [Peter谭老师](https://juejin.cn/user/2119514149895512)
- [ssh_晨曦时梦见兮](https://juejin.cn/user/2330620350708823/posts)
- [徐小夕](https://juejin.cn/user/3808363978429613/posts)


## 优秀团队博客推荐

- [政采云前端团队](https://juejin.cn/user/3456520257288974/posts)
- [微医前端团队](https://juejin.cn/team/6932676282429898766/posts)
- [字节前端](https://juejin.cn/user/4098589725834317/posts)
- [蚂蚁保险体验技术](https://juejin.cn/user/3526889033438574/posts)
- [网易云音乐大前端团队](https://juejin.cn/user/4265760847567016/posts)
- [快狗打车前端团队](https://juejin.cn/user/2612095359650712/posts)


## 每日阅读

- [掘金-前端](https://juejin.cn/frontend)
- [setment-推荐](https://segmentfault.com/blogs)
- [v2ex](https://v2ex.com/?tab=jobs)
