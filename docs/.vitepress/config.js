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
        {
          text: '5月',
          children: [
            { text: '0521', link: '/record/05/0521' },
            { text: '0520', link: '/record/05/0520' },
            { text: '0519', link: '/record/05/0519' },
            { text: '0518', link: '/record/05/0518' },
            { text: '0517', link: '/record/05/0517' },
            { text: '0516-周总结', link: '/record/05/0516-week-summary' },
            { text: '0514', link: '/record/05/0514' },
            { text: '0513', link: '/record/05/0513' },
            { text: '0512', link: '/record/05/0512' },
            { text: '0511', link: '/record/05/0511' },
            { text: '0510', link: '/record/05/0510' },
            { text: '0509', link: '/record/05/0509' },
            { text: '0508', link: '/record/05/0508' },
            { text: '0507', link: '/record/05/0507' },
            { text: '0506', link: '/record/05/0506' },
          ]
        },
      ]
    },

  ]
}
