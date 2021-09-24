import{_ as l,c as e,o as n,b as a,d as t}from"./app.2da3ac28.js";const r='{"title":"0617","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"任务","slug":"任务"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/06/0617.md","lastUpdated":1632475296322}',d={},i=[a("h1",{id:"_0617",tabindex:"-1"},[t("0617 "),a("a",{class:"header-anchor",href:"#_0617","aria-hidden":"true"},"#")],-1),a("p",null,[a("img",{src:"/study-everyday/assets/0617.83c7ba5c.jpg",alt:""})],-1),a("h2",{id:"工作",tabindex:"-1"},[t("工作 "),a("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),a("ul",null,[a("li",null,[t("删除后查询时分页问题： "),a("ul",null,[a("li",null,"常见操作，列表页，删除某个数据后，点击查询。"),a("li",null,"当第二页只有1条数据时，删除这条数据，此时只有一页了。但是查询时传入的 pageIndex 是 2 而不是 1。"),a("li",null,[t("因此这是比较常见但是比较容易忽视的bug，发现公司后台所有的列表页基本都有这个问题。修复方法是："),a("code",null,"let newPageIndex = Math.ceil(list.length / pageSize) || 1")]),a("li",null,"注意最小值，只有 1 条数据时删除后最小的 pageIndex 也是 1。")])]),a("li",null,[t("滚动查看协议后显示按钮-优化： "),a("ul",null,[a("li",null,[t("通过监听 "),a("code",null,"scroll"),t(" 比较 "),a("code",null,"scrollTop, contentHeight, clientHeight "),t(" 来设置 "),a("code",null,"active")]),a("li",null,[t("问题：点击按钮跳转页面还会触发 "),a("code",null,"scroll"),t(" 事件，我的优化是如果 "),a("code",null,"dom"),t(" 不存在了直接 返回。")]),a("li",null,[t("优化：现在想想，感觉可以直接在设置 "),a("code",null,"active"),t(" 后移除 "),a("code",null,"scroll"),t(" 事件即可。")])])])],-1),a("h2",{id:"任务",tabindex:"-1"},[t("任务 "),a("a",{class:"header-anchor",href:"#任务","aria-hidden":"true"},"#")],-1),a("ul",null,[a("li",null,"vue 源码视频，今天第 12 集，看的很困打瞌睡..."),a("li",null,[t("刷题："),a("a",{href:"https://leetcode-cn.com/problems/sort-colors/",target:"_blank",rel:"noopener noreferrer"},"75. 颜色分类"),t(" 中等难度。")])],-1),a("h2",{id:"todos",tabindex:"-1"},[t("TODOS "),a("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1),a("ul",null,[a("li",null,"周末学习 Nestjs"),a("li",null,"有空学习下 Docker，Nginx，DevOps 相关")],-1)];var u=l(d,[["render",function(l,a,t,r,d,u){return n(),e("div",null,i)}]]);export{r as __pageData,u as default};
