
import { defineUserConfig, defaultTheme  } from 'vuepress'
import VuepressPluginAnchorRight from 'vuepress-plugin-anchor-right'
import taskLists from 'markdown-it-task-lists'
import archive2021Sidebar from './sidebar.archive-2021'
import archive2022Sidebar from './sidebar.archive-2022'
import sideBar from './sidebar'


export default defineUserConfig({
  lang: 'zh-CN',
  title: '每日学习',
  description: '前端进阶每日学习',
  base: "/study-everyday/",
  theme: defaultTheme({
    repo: 'Jsmond2016/study-everyday',
    docsDir: 'docs',
    editLinks: true,
    editLinkText: '编辑本页',
    lastUpdated: '最后更新时间',
    displayAllHeaders: true,
    sidebar: getGuideSidebar(),
  }),
  extendsMarkdown: (md) => {
    md.use(taskLists)
  },
  plugins: [
    [VuepressPluginAnchorRight()]
  ]
})

function getGuideSidebar() {
  return [
    {
      text: '每日学习',
      children: [
        {
          text: '随笔文章',
          children: [
            { text: "windows-terminal-美化教程", link: '/basic/read-notes/windows-terminal'},
            { text: 'js toFixed 四舍五入问题', link: '/basic/read-notes/js-to-fixed', sidebarDepth: 1, },
            { text: '如何高效学习', link: '/basic/read-notes/book-1' },
            { text: '如何做前端技术设计', link: '/basic/read-notes/book-2' },
            { text: 'Docker教程', link: '/basic/read-notes/docker-note' },
            { text: 'leetcode难度分类', link: '/basic/read-notes/leetcode-retag' },
            { text: 'leetcode目录', link: '/basic/read-notes/leetcode-category' },
          ]
        },
        { text: '模板', link: '/basic/template' },
        { text: 'TODOS', link: '/basic/todos' },
        { text: '面试冲刺', link: '/basic/fe-interview' },
        { text: '手写js', link: '/basic/hand-js' },
        { text: '面经整理-爪哇教育', link: '/interview/zhuawa-0404' },
      ]
    },
    {
      text: '每日记录',
      children: sideBar
    },
    {
      text: 'archives-2022',
      collapsible: true,
      children: archive2022Sidebar.map(item => ({ ...item, collapsible: true }))
    },
    {
      text: 'archives-2021',
      collapsible: true,
      children: archive2021Sidebar.map(item => ({ ...item, collapsible: true }))
    }

  ]
}
