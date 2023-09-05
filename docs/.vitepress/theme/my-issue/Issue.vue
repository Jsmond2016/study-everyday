<template>
  <div id="gitalk-container"></div>
</template>

<script setup lang="ts">
import { onMounted, watch, ref } from "vue"
import "gitalk/dist/gitalk.css"
import Gitalk from "gitalk"
import md5 from "md5"
import { useRoute } from "vitepress"

const createIssueContainer = () => {
  const issuePageContainer = document.createElement("div") // 创建节点
  issuePageContainer.setAttribute("id", "gitalk-page-container") // 设置id
  const issueContainer = document.getElementById("gitalk-container") // querySelector的节点可自己根据自己想加载的地方设置
  issueContainer?.replaceChildren(issuePageContainer)
  return issueContainer as HTMLElement
}

// @ts-ignore
const env: Record<string, string | number> = import.meta.env

const createIssueObject = () => {
  const issue = new Gitalk({
    id: md5(location.pathname) as string, // 可选。默认为 location.href
    owner: "Jsmond2016", // GitHub repository 所有者
    repo: "study-everyday", // GitHub repository
    clientID: env.VITE_CLIENT_ID as string, // 自己的clientID
    clientSecret: env.VITE_CLIENT_SECRET as string, // 自己的 clientSecret
    admin: ["Jsmond2016"], // GitHub repository 所有者
    labels: ["Gitalk"], // GitHub issue 的标签
    createIssueManually: false, //如果当前页面没有相应的 isssue 且登录的用户属于 admin，则会自动创建 issue。如果设置为 true，则显示一个初始化页面，创建 issue 需要点击 init 按钮。
    proxy:
      "https://worker-silent-lab-53fb.jsmond2016.workers.dev/?https://github.com/login/oauth/access_token",
    distractionFreeMode: false,
  })
  return issue
}

const setComment = () => {
  const issueContainer = createIssueContainer()
  const comment = createIssueObject()
  comment.render(issueContainer)
}

onMounted(() => {
  if (typeof window !== undefined) {
    setComment()
  }
})

const route = useRoute()

watch(route, () => {
  setComment()
})
</script>

<style lang="css">
.gt-container .gt-header-comment textarea.gt-header-textarea {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.gt-container .gt-header-comment .gt-btn {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.gt-container .gt-comment .gt-comment-content {
  background-color: var(--vp-c-bg);
  color: var(--vp-c-text-1);
  border-color: var(--vp-c-divider);
}

.gt-container .gt-comment .gt-comment-content > .gt-comment-body {
  color: var(--vp-c-text-1);
}

</style>
