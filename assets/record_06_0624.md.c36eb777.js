import{o as n,c as l,b as a,d as t}from"./app.306ba72d.js";const e='{"title":"0624","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"任务","slug":"任务"},{"level":2,"title":"反思","slug":"反思"},{"level":2,"title":"明日计划","slug":"明日计划"},{"level":2,"title":"好文推荐","slug":"好文推荐"}],"relativePath":"record/06/0624.md","lastUpdated":1624636336769}',s={},u=a("h1",{id:"_0624"},[a("a",{class:"header-anchor",href:"#_0624","aria-hidden":"true"},"#"),t(" 0624")],-1),o=a("p",null,[a("img",{src:"/study-everyday/assets/0624.82636d19.jpg",alt:""})],-1),r=a("h2",{id:"工作"},[a("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#"),t(" 工作")],-1),p=a("ul",null,[a("li",null,[a("p",null,"改 Bug 联调改了 1 天")]),a("li",null,[a("p",null,"样式问题1：容器内多个元素，其余都设置了宽度，最后一个没有宽度要求自适应剩余宽度："),a("ul",null,[a("li",null,[t("使用 Flex 的 "),a("code",null,"flex-grow: 1"),t(" 实现")]),a("li",null,[t("使用 "),a("code",null,"calc(width - otherWidth)"),t(" 进行计算")]),a("li",null,[t("使用 "),a("code",null,"width: 100%; margin-left/right: npx"),t(" 设置边距，元素宽度占满")]),a("li",null,[t("参考资料："),a("a",{href:"https://www.cnblogs.com/w-819/p/10713880.html",target:"_blank",rel:"noopener noreferrer"},"容器内两部分，一部分固定宽度，一部分宽度自适应占满剩余位置"),t(" ，"),a("a",{href:"https://www.cnblogs.com/wuyou91/p/9129344.html",target:"_blank",rel:"noopener noreferrer"},"flexbox 剩余空间分配规则")])])]),a("li",null,[a("p",null,"样式问题2：字体图标如何垂直居中"),a("ul",null,[a("li",null,"需要确定图标是否垂直居中：在 Iconfont 查看该图标，是否垂直居中了，若没有，则调整为垂直居中先；"),a("li",null,"样式方面：这样可以保证字体图标和文字是垂直居中的。")]),a("div",{class:"language-html"},[a("pre",null,[a("code",null,[a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("Flex")]),t(),a("span",{class:"token attr-name"},"align"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("center"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token style-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token style language-css"},[a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),t(" 20px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),t("\n   "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("Iconfont")]),t(),a("span",{class:"token attr-name"},"name"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),t("close"),a("span",{class:"token punctuation"},'"')]),t(),a("span",{class:"token style-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token style language-css"},[a("span",{class:"token property"},"vertercal-align"),a("span",{class:"token punctuation"},":"),t(" top"),a("span",{class:"token punctuation"},";"),t()]),a("span",{class:"token punctuation"},'"')])]),t(),a("span",{class:"token punctuation"},"/>")]),t("\n   "),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"<"),t("span")]),t(),a("span",{class:"token style-attr"},[a("span",{class:"token attr-name"},"style"),a("span",{class:"token attr-value"},[a("span",{class:"token punctuation attr-equals"},"="),a("span",{class:"token punctuation"},'"'),a("span",{class:"token style language-css"},[a("span",{class:"token property"},"line-height"),a("span",{class:"token punctuation"},":"),t(" 20px"),a("span",{class:"token punctuation"},";")]),a("span",{class:"token punctuation"},'"')])]),a("span",{class:"token punctuation"},">")]),t("文字描述"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("span")]),a("span",{class:"token punctuation"},">")]),t("\n"),a("span",{class:"token tag"},[a("span",{class:"token tag"},[a("span",{class:"token punctuation"},"</"),t("Flex")]),a("span",{class:"token punctuation"},">")]),t("\n")])])]),a("ul",null,[a("li",null,[t("其他方案： "),a("ul",null,[a("li",null,[a("a",{href:"https://juejin.cn/post/6950848507817230349",target:"_blank",rel:"noopener noreferrer"},"2021 年移动端的开发的几点经验")]),a("li",null,[a("a",{href:"https://juejin.cn/post/6844903799446831117#heading-9",target:"_blank",rel:"noopener noreferrer"},"一起搞懂 CSS 水平居中与垂直居中的16个方法")]),a("li",null,[a("a",{href:"https://juejin.cn/post/6844903982960214029",target:"_blank",rel:"noopener noreferrer"},"你能实现多少种水平垂直居中的布局")])])])])]),a("li",null,[a("p",null,"经验：富文本配置的内容导致移动端样式异常，用户决定用户控制，前端不处理！")]),a("li",null,[a("p",null,"设计图和需求不一致：有高保真图的设计，前端严格按照高保真实现；若出现设计和需求不一致，和 UI 协商和 产品协商，让他们改成统一。")])],-1),c=a("h2",{id:"任务"},[a("a",{class:"header-anchor",href:"#任务","aria-hidden":"true"},"#"),t(" 任务")],-1),i=a("ul",null,[a("li",null,"笔记整理：这几天改bug以及写分享技术文章，有点忙"),a("li",null,[t("算法题："),a("a",{href:"https://leetcode-cn.com/problems/evaluate-reverse-polish-notation/submissions/",target:"_blank",rel:"noopener noreferrer"},"逆波兰表达式求值"),t(" 中等难度")])],-1),k=a("h2",{id:"反思"},[a("a",{class:"header-anchor",href:"#反思","aria-hidden":"true"},"#"),t(" 反思")],-1),h=a("ul",null,[a("li",null,"Bug 焦虑：第一次这种从 0 到 1 的开发，对需求实现不一致和自测不完全导致测试反馈很多bug，顿时心情还是很焦虑的。后面不忙了需要好好反省这次的问题。"),a("li",null,"忙碌和学习：很多东西自己看似会了，但是写代码的时候感觉自己就是个傻X一样，暴露出自己对于知识点的掌握不牢固。特别是 Flex 布局和属性的作用。"),a("li",null,[t("习以为常的场景是bug：过渡效果相关 "),a("ul",null,[a("li",null,"默认图和获取数据后的新图，这之间会有个时间差因此会先渲染 默认图，拿到新图后换成新图，有了个不好的过渡效果。更改方式：不在 dom 中使用 默认图路径，而是在接口请求数据时设置图。请求结束前，loading 和白屏背景。"),a("li",null,[t("调到某个页面，发现没有权限，重定向到异常展示页。因此会先展示进入的页，再跳转到 异常页。测试也不接受这种过渡。那么就只能在渲染 return 做判断，有权限则渲染真实的 DOM，否则就是 "),a("code",null,"return null")])])]),a("li",null,[t("遇到问题怎么处理？ "),a("ul",null,[a("li",null,"自己先百度搜索：基本概念，基本的解决办法。"),a("li",null,"询问他人：错误描述，原因和结果截图，以及对方可能问到你相关的资料 链接。例如：发现某个实现可能有问题，把场景截图发给同学A，询问后A问你，这么做的错误结果是什么？那你又回去执行代码拿结果的截图？因此还是需要 【准备充分】"),a("li",null,[a("strong",null,"【准备充分】即：原因 + 过程 + 可能导致的结果 + 我搜索到的解决方式 和建议解决的方法 + 使用建议方法的效果 + 对比的差异")]),a("li",null,"不然，走一步问一步，感觉自己是个傻逼一样！")])])],-1),d=a("h2",{id:"明日计划"},[a("a",{class:"header-anchor",href:"#明日计划","aria-hidden":"true"},"#"),t(" 明日计划")],-1),g=a("ul",null,[a("li",null,"bug 修复和自我总结"),a("li",null,"有时间看看别人的代码怎么写的，为什么自己的代码问题这么多？多看看 开盘的移动端项目。")],-1),f=a("hr",null,null,-1),m=a("h2",{id:"好文推荐"},[a("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#"),t(" 好文推荐")],-1),b=a("ul",null,[a("li",null,[a("a",{href:"https://mp.weixin.qq.com/s/c1dEpuk3HEdIpZM2P8-oog",target:"_blank",rel:"noopener noreferrer"},"7个使 vue 开发如虎添翼的VS Code 扩展"),t(" 其中 bookmarks 不错。")]),a("li",null,[a("a",{href:"https://mp.weixin.qq.com/s/u-wmr_nUL7F7SBSclYO_RQ",target:"_blank",rel:"noopener noreferrer"},"Vue3 中的脚手架工具Vite到底牛在哪, 一文全知道")]),a("li",null,[a("a",{href:"https://mp.weixin.qq.com/s/qoH1kLcIxPLGeojZ98In9Q",target:"_blank",rel:"noopener noreferrer"},"前端架构之 React 领域驱动设计"),t(" 前端 DDD 设计？")])],-1);s.render=function(a,t,e,s,v,x){return n(),l("div",null,[u,o,r,p,c,i,k,h,d,g,f,m,b])};export default s;export{e as __pageData};
