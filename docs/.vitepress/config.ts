import { defineConfig } from "vitepress"
import taskLists from 'markdown-it-task-lists'

import sidebar2021 from "./sidebar.archive-2021"
import sidebar2022 from "./sidebar.archive-2022"
import sidebar from './sidebar.cjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "study-everyday",
  base: "/study-everyday/",
  description: "My Study Notes for everyday",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      "/basic/": homeSideBar(),
      "/record-2021/": sidebar2021,
      "/record-2022/": sidebar2022,
      "/read-notes/": articleSidebar(),
      "/interview/": interviewSideBar()
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Jsmond2016/study-everyday" },
    ],
  },
  markdown: {
    config: (md) => md.use(taskLists)
  }
})

function nav() {
  return [
    { text: "Home", link: "/basic/todos", activeMatch: "/basic/" },
    {
      text: "存档",
      items: [
        {
          text: "2022年",
          link: "/record-2022/goal-2022",
          activeMatch: "/record-2022/",
        },
        {
          text: "2021年",
          link: "/record-2021/goal-2021",
          activeMatch: "/record-2021/",
        },
      ],
    },
    {
      text: "随笔文章",
      link: "/read-notes/windows-terminal",
      activeMatch: "/read-notes/",
    },
    {
      text: "面试冲刺",
      link: "/interview/zhuawa-0404",
      activeMatch: "/interview/",
    },
  ]
}

function interviewSideBar() {
  return [
    { text: "面经整理-爪哇教育", link: "/interview/zhuawa-0404" },
    { text: "面试冲刺", link: "/interview/fe-interview" },
    { text: "手写js", link: "/interview/hand-js" },
  ];
}

function articleSidebar() {
  return [
    {
      text: "windows-terminal-美化教程",
      link: "/read-notes/windows-terminal",
    },
    {
      text: "js toFixed 四舍五入问题",
      link: "/read-notes/js-to-fixed",
    },
    { text: "如何高效学习", link: "/read-notes/book-1" },
    { text: "如何做前端技术设计", link: "/read-notes/book-2" },
    { text: "Docker教程", link: "/read-notes/docker-note" },
    { text: "leetcode难度分类", link: "/read-notes/leetcode-retag" },
    { text: "leetcode目录", link: "/read-notes/leetcode-category" },
  ]
}

function homeSideBar() {
  return [
    { text: "TODOS", link: "/basic/todos" },
    { text: "模板", link: "/basic/template" },
    ...sidebar
  ]
}
