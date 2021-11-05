import{_ as e,c as l,o as a,b as r,d as n}from"./app.da6e63e0.js";const t='{"title":"0803","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"任务","slug":"任务"},{"level":2,"title":"反思","slug":"反思"},{"level":2,"title":"明日计划","slug":"明日计划"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"博客推荐","slug":"博客推荐"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/08/0803.md","lastUpdated":1636127286966}',i={},d=[r("h1",{id:"_0803",tabindex:"-1"},[n("0803 "),r("a",{class:"header-anchor",href:"#_0803","aria-hidden":"true"},"#")],-1),r("p",null,[r("img",{src:"/study-everyday/assets/0803.30634259.jpg",alt:""})],-1),r("h2",{id:"工作",tabindex:"-1"},[n("工作 "),r("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,"忙活了大半天，在大佬的帮助下，解决了 tab 拖拽的问题，也算是对 react-dnd 有了进一步学习和了解；回头要好好总结一下；"),r("li",null,"主体需求开发基本完成，还需要自测发现问题，修复意料之外的bug"),r("li",null,[r("strong",null,"windows 文件夹大小写问题"),n("：之前开发过程中，我优化了一下目录结构，更改了一些文件夹的大小写命名，当时没什么感觉；今天提测发现，自动化流程报了一大堆 "),r("strong",null,"文件不存在/找不到"),n(" 的错误，实际上就是文件夹名字大小写改了，但是 git 没有识别到变更，如 "),r("code",null,"option"),n(" 和 "),r("code",null,"Option"),n("，在 windows 平台的 VS Code 里面，里面的文件引入即时名字大小写不同，但是不会报错，同时修改同名但是首字母大小写不一致时，git 也不会识别，自然也就没有引起注意；")]),r("li",null,"但是这种问题，在使用 webstorm 的时候就会被暴露出来。果然 IDEA 就是大佬，这方面做的比 VS Code 强多了。")],-1),r("p",null,"以后这种细节问题需要注意，虽然我本地编译过一次没有报错，不代表在 linux 的发布环境下不会报错。而 linux 和 windows 很大一个区别之一，就有这个 文件夹 大小写名字问题。",-1),r("h2",{id:"任务",tabindex:"-1"},[n("任务 "),r("a",{class:"header-anchor",href:"#任务","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,"加班到将近 9 点，回到家都9点半过后了，啥都不想干...懒...")],-1),r("h2",{id:"反思",tabindex:"-1"},[n("反思 "),r("a",{class:"header-anchor",href:"#反思","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,"回头需要好好复盘一下，这次开发，存在很多的问题，一起开发的大佬同事也帮助发现了很多逻辑问题，以及代码问题。"),r("li",null,"开发懒惰问题：调bug 的时候习惯性随机命名xxx和定义类型any，事后又懒得修复，这坏毛病得改，不然小问题会很多，习惯也不好。")],-1),r("h2",{id:"明日计划",tabindex:"-1"},[n("明日计划 "),r("a",{class:"header-anchor",href:"#明日计划","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,"自测，查看页 tab 还没改好， 编辑页 tab 的提示乱入，要处理一下。其他所有接口也测试一下看看是否正常；继续加油~"),r("li",null,"接口异常拦截器，需要加上；"),r("li",null,"对照测试点过一下基础问题，特别是 各种文案，提示这种小问题。")],-1),r("hr",null,null,-1),r("h2",{id:"好文推荐",tabindex:"-1"},[n("好文推荐 "),r("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,[r("a",{href:"https://juejin.cn/post/6943896410987659277",target:"_blank",rel:"noopener noreferrer"},"走进React Fiber的世界")])],-1),r("h2",{id:"项目推荐",tabindex:"-1"},[n("项目推荐 "),r("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,[r("a",{href:"https://github.com/pipipi-pikachu/PPTist",target:"_blank",rel:"noopener noreferrer"},"PPTist"),n(" 一个基于 Vue3.x + TypeScript 的在线演示文稿（幻灯片）应用，给人眼前一亮的感觉~ "),r("a",{href:"https://pptist.gitee.io/",target:"_blank",rel:"noopener noreferrer"},"体验地址")])],-1),r("h2",{id:"博客推荐",tabindex:"-1"},[n("博客推荐 "),r("a",{class:"header-anchor",href:"#博客推荐","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,[r("a",{href:"https://blog.shenfq.com/archives",target:"_blank",rel:"noopener noreferrer"},"自然醒的博客"),n(" 一位 Go & 前端开发，博客写的很棒，react 源码解析也到位。")])],-1),r("h2",{id:"todos",tabindex:"-1"},[n("TODOS "),r("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1),r("ul",null,[r("li",null,"react-dnd 使用总结")],-1)];var u=e(i,[["render",function(e,r,n,t,i,u){return a(),l("div",null,d)}]]);export{t as __pageData,u as default};
