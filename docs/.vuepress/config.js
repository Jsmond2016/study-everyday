const taskLists = require('markdown-it-task-lists');
const archive2021Sidebar = require('./sidebar.archive-2021');

module.exports = {
  lang: 'zh-CN',
  title: '每日学习',
  description: '前端进阶每日学习',
  base: "/study-everyday/",
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'Jsmond2016/study-everyday',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑本页',
    lastUpdated: '最后更新时间',
    nav: [],
    sidebar: getGuideSidebar(),
  },
  // markdown: {
  //   extendMarkdown: (md) => {
  //     // use more markdown-it plugins!
  //     md.use(taskLists)
  //   }
  // }
  extendsMarkdown: (md) => {
    md.use(taskLists)
  }
}

function getGuideSidebar() {
  return [
    {
      text: '每日学习',
      children: [
        { text: '2022年度目标', link: '/record/goal-2022' },
        {
          text: '随笔文章',
          children: [
            { text: '如何高效学习', link: '/record/read-notes/book-1' },
            { text: '如何做前端技术设计', link: '/record/read-notes/book-2' },
            { text: 'Docker教程', link: '/record/read-notes/docker-note' },
            { text: 'leetcode难度分类', link: '/record/read-notes/leetcode-retag' },
            { text: 'leetcode目录', link: '/record/read-notes/leetcode-category' },
          ]
        },
        { text: '模板', link: '/record/template' },
        { text: 'TODOS', link: '/record/todos' },
        { text: '面试冲刺', link: '/record/fe-interview' },
        { text: '手写js', link: '/record/hand-js' },
      ]
    },
    {
      text: 'archives',
      collapsible: true,
      children: archive2021Sidebar.map(item => ({ ...item, collapsible: true }))
    }

  ]
}
