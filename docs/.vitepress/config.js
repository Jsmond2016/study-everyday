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
  }
}

function getGuideSidebar() {
  return [
    {
      text: '每日学习',
      children: [
        { text: 'goal', link: '/record/goal' },
        { text: '模板', link: '/record/template' },
        { text: '0427', link: '/record/0427' },
      ]
    },
  ]
}
