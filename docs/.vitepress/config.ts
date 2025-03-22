import { defineConfig } from "vitepress";
import taskLists from "markdown-it-task-lists";

import sidebar2021 from "./sidebar.archive-2021";
import sidebar2022 from "./sidebar.archive-2022";
import sidebar2023 from "./sidebar.archive-2023";
import sidebar2024 from "./sidebar.archive-2024";
import sidebar from "./sidebar.cjs";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    envDir: process.cwd(),
  },
  appearance: false,
  title: "Study-Everyday",
  base: "/study-everyday/",
  description: "My Study Notes for everyday",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: nav(),
    sidebar: {
      "/record-2025/": noteSideBar(),
      // "/basic/": homeSideBar(),
      "/record-2021/": sidebar2021,
      "/record-2022/": sidebar2022,
      "/record-2023/": sidebar2023,
      "/record-2024/": sidebar2024,
      "/read-notes/": articleSidebar(),
      "/special-topic/": specialTopic(),
      // "/fe-nav/": feNavSidebar(),
    },
    // https://vitepress.dev/reference/default-theme-config#outline
    outline: [1, 4],
    search: {
      provider: "local",
    },
    footer: {
      message: "Released under the MIT License.",
      copyright:
        'Copyright © 2023-present <a href="https://github.com/Jsmond2016/">Jsmond2016</a>',
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/Jsmond2016/study-everyday" },
    ],
  },
  markdown: {
    config: (md) => md.use(taskLists),
  },
});

function nav() {
  return [
    { text: "首页", link: "/home/index", activeMatch: "/home/" },
    {
      text: "每日笔记",
      link: "/record-2025/index",
      activeMatch: "/record-2025/",
    },
    {
      text: "历史笔记存档",
      items: [
        {
          text: "2024年",
          link: "/record-2024/index",
          activeMatch: "/record-2024/",
        },
        {
          text: "2023年",
          link: "/record-2023/index",
          activeMatch: "/record-2023/",
        },
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
      activeMatch: "/read-notes|interview/",
    },
    {
      text: "专题整理",
      link: "/special-topic/projects/index",
      activeMatch: "/special-topic/",
    },
    // {
    //   text: "前端导航",
    //   link: "/fe-nav/index",
    //   activeMatch: "/fe-nav/",
    // },
    {
      text: "留言板",
      link: "/message-board/index-1",
      activeMatch: "/message-board/index-1",
    },
  ];
}

function articleSidebar() {
  return [
    {
      text: "随笔",
      items: [
        {
          text: "PowerShell 命令行 和 git 代理配置-windows 篇",
          link: "/read-notes/terminal-git-proxy",
        },
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
      ],
    },
    {
      text: "面试",
      items: [
        { text: "面经整理-爪哇教育", link: "/read-notes/zhuawa-0404" },
        { text: "面试冲刺", link: "/read-notes/fe-interview" },
        { text: "手写js", link: "/read-notes/hand-js" },
      ],
    },
    {
      text: "leetcode",
      items: [
        { text: "leetcode难度分类", link: "/read-notes/leetcode-retag" },
        { text: "leetcode目录", link: "/read-notes/leetcode-category" },
      ],
    },
  ];
}

function noteSideBar() {
  return [
    // { text: "恢复更新", link: "/record-2023/resume-updates" },
    { text: "笔记首页", link: "/record-2025/index" },
    // { text: 'TODOS', link: "/record-2024/todos"},
    ...sidebar,
  ];
}

function homeSideBar() {
  return [
    { text: "TODOS", link: "/basic/todos" },
    { text: "模板", link: "/basic/template" },
  ];
}

function specialTopic() {
  return [
    {
      text: "专题首页",
      link: "/special-topic/topic-index",
    },
    {
      text: "项目模板",
      items: [
        {
          text: "首页",
          link: "/special-topic/projects/index",
        },
        {
          text: "H5 模板",
          link: "/special-topic/projects/template-h5",
        },
        {
          text: "Admin 模板",
          link: "/special-topic/projects/template-admin",
        },
      ],
    },
    {
      text: '前端相关',
      items: [
        { text: "首页", link: "/special-topic/fe-index" },
        { text: "微前端", link: "/special-topic/micro-fe" },
        { text: "Nest.js", link: "/special-topic/nest-js" },
        { text: "低代码", link: "/special-topic/lowcode" },
        { text: "前端工程化", link: "/special-topic/fe-project" },
        { text: "前端提效工具", link: "/special-topic/fe-efficiency-tool" },
      ]
    },

    {
      text: '技术前沿',
      items: [
        { text: "ChatGPT & AI", link: "/special-topic/gpt/index" },
        { text: "Web3相关", link: "/special-topic/web3/index" },
        { text: "区块链相关", link: "/special-topic/block-chain/index" },
      ]
    },
    {
      text: '求职&面试&公司收录',
      items: [
        { text: "公司收录", link: "/special-topic/companies" },
      ]
    },
    {
      text: '其他',
      items: [
        { text: "好用的工具", link: "/special-topic/tools/index" },
        { text: "问题专栏", link: "/special-topic/questions/index" },
      ]
    }
  ];
}

function feNavSidebar() {
  // 前端导航

  // 参考如下：
  // https://fe-nav.netlify.app/nav/
  // https://web-abin.gitee.io/abin-web/tools

  return [
    {
      text: "前端导航",
      link: "/fe-nav/index",
    },
  ];
}
