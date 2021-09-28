const taskLists = require('markdown-it-task-lists');


module.exports = {
  lang: 'zh-CN',
  title: '每日学习',
  description: '前端进阶每日学习',
  base: "/study-everyday/",
  themeConfig: {
    repo: 'Jsmond2016/study-everyday',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑本页',
    lastUpdated: '最后更新时间',

    nav: [
      { text: '首页', link: '/' },
      // {
      //   text: '归档',
      //   link: '/config/basics',
      //   activeMatch: '^/config/'
      // },
      // {
      //   text: '分类',
      //   link: '/category'
      // }
    ],

    sidebar: {
      '/': getGuideSidebar()
    }
  },
  markdown: {

    config: (md) => {
      // use more markdown-it plugins!
      md.use(taskLists)
    }
  }
}

function getGuideSidebar() {
  return [
    {
      text: '每日学习',
      children: [
        { text: '2021年度目标', link: '/record/goal' },
        { text: '模板', link: '/record/template' },
        { text: 'TODOS', link: '/record/todos' },
        { text: '面试冲刺', link: '/record/fe-interview' },
        {
          text: '随笔文章',
          children: [
            { text: '如何高效学习', link: '/record/read-notes/book-1' },
            { text: '如何做前端技术设计', link: '/record/read-notes/book-2' },
            { text: 'Docker教程', link: '/record/read-notes/docker-note' }
          ]
        },
        { text: '8月目标', link: '/record/target-month-8' },
        { text: '7月目标', link: '/record/target-month-7' },
        { text: '6月目标', link: '/record/target-month-6' },
        ...require('./sidebar')
      ]
    },

  ]
}
