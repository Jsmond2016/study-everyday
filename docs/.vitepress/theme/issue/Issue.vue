<template>
  <div id="gitalk-container"></div>
</template>

<script setup lang="ts">
import { onMounted } from "vue"
import "gitalk/dist/gitalk.css"
import Gitalk from "gitalk"
import { loadEnv } from 'vitepress'



onMounted(() => {
  if (typeof window !== undefined) {
    var s_div = document.createElement("div") // 创建节点
    s_div.setAttribute("id", "gitalk-page-container") // 设置id
    document.querySelector(".content-container")?.appendChild(s_div) // querySelector的节点可自己根据自己想加载的地方设置
    var gitment = new Gitalk({
      id: location.pathname, // 可选。默认为 location.href
      owner: "Jsmond2016", // GitHub repository 所有者
      // jsmond2016.github.io/study-everyday
      // repo: "jsmond2016.github.io/study-everyday", // GitHub repository
      repo: "study-everyday", // GitHub repository
      clientID: "14a1df62d5a6c6c85d1b", // 自己的clientID
      // clientSecret: env.VITE_CLIENT_SECRET, // 自己的clientSecret
      clientSecret: 'd4083f58f5d5581e9368796cc8e27c80af3843de', // 自己的clientSecret
      admin: ["Jsmond2016"], // GitHub repository 所有者
      labels: ["Gitalk"], // GitHub issue 的标签
      createIssueManually: true, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
      // proxy: "https://worker-silent-lab-53fb.jsmond2016.workers.dev?https://github.com/login/oauth/access_token",
      proxy: "https://worker-silent-lab-53fb.jsmond2016.workers.dev/?https://github.com/login/oauth/access_token",
      distractionFreeMode: false
    })
    gitment.render("gitalk-page-container")
  }
})
</script>
