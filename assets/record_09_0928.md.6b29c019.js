import{_ as n,c as e,o as a,b as t,d as s}from"./app.d4dcd41c.js";const r='{"title":"0928","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"价值思考","slug":"价值思考"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"好用的工具","slug":"好用的工具"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/09/0928.md","lastUpdated":1632814901922}',o={},l=[t("h1",{id:"_0928",tabindex:"-1"},[s("0928 "),t("a",{class:"header-anchor",href:"#_0928","aria-hidden":"true"},"#")],-1),t("p",null,[t("img",{src:"/study-everyday/assets/0926.fbd06718.jpg",alt:""})],-1),t("h2",{id:"工作",tabindex:"-1"},[s("工作 "),t("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,"string to dom VS dom to string: 字符串和 dom 转换操作")],-1),t("div",{class:"language-javascript"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// 字符串转 DOM"),s("\n"),t("span",{class:"token keyword"},"const"),s(" resStr "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token string"},"\"<div class='a-b'><span class='title'>${标题}</span></div>\""),s("\n"),t("span",{class:"token keyword"},"const"),s(" parser "),t("span",{class:"token operator"},"="),s(),t("span",{class:"token keyword"},"new"),s(),t("span",{class:"token class-name"},"DOMParser"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),s("\n"),t("span",{class:"token keyword"},"const"),s(" resDom "),t("span",{class:"token operator"},"="),s(" parser"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"parseFromString"),t("span",{class:"token punctuation"},"("),s("str"),t("span",{class:"token punctuation"},","),s(),t("span",{class:"token string"},"'text/html'"),t("span",{class:"token punctuation"},")"),s("\n\n"),t("span",{class:"token comment"},"// 操作和改变 resDom"),s("\nArray"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"from"),t("span",{class:"token punctuation"},"("),s("resDom"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"forEach"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"item"),s(),t("span",{class:"token operator"},"=>"),s(),t("span",{class:"token punctuation"},"{"),s("\n  "),t("span",{class:"token comment"},"// dom 操作，替换值等"),s("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),s("\n\n"),t("span",{class:"token comment"},"// DOM 转 字符串"),s("\n"),t("span",{class:"token keyword"},"const"),s(" templateStr "),t("span",{class:"token operator"},"="),s(" resDom"),t("span",{class:"token punctuation"},"."),s("documentElement"),t("span",{class:"token punctuation"},"."),s("outHTML\n"),t("span",{class:"token comment"},"// 后续其他操作..."),s("\n\n")])])],-1),t("h2",{id:"价值思考",tabindex:"-1"},[s("价值思考 "),t("a",{class:"header-anchor",href:"#价值思考","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://github.com/zenany/zenany.github.io/blob/master/_posts/about_time_and_knowledge_management.md",target:"_blank",rel:"noopener noreferrer"},"关于时间管理和知识管理")]),t("li",null,[t("a",{href:"https://speakerdeck.com/baidufe/gong-cheng-shi-de-ge-ren-fa-zhan-gui-hua",target:"_blank",rel:"noopener noreferrer"},"工程师的个人发展规划")]),t("li",null,[t("a",{href:"https://www.yuque.com/zenany/up/high_productivity_work",target:"_blank",rel:"noopener noreferrer"},"高效工作")])],-1),t("hr",null,null,-1),t("h2",{id:"好文推荐",tabindex:"-1"},[s("好文推荐 "),t("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://zhuanlan.zhihu.com/p/408340406",target:"_blank",rel:"noopener noreferrer"},"用200行代码实现一个超小的react")])],-1),t("h2",{id:"项目推荐",tabindex:"-1"},[s("项目推荐 "),t("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://github.com/catdad/canvas-confetti",target:"_blank",rel:"noopener noreferrer"},"on-demand confetti gun"),s(" 好看的烟花粒子库")]),t("li",null,[t("a",{href:"https://github.com/linbudu599/Midway-GraphQL-Starter",target:"_blank",rel:"noopener noreferrer"},"Midway-GraphQL-Starter"),s(" midway 和 nest 是有很多相似之处的，可以看看这个项目模板")]),t("li",null,[t("a",{href:"https://github.com/klaussinani/signale/blob/master/docs/readme.zh_CN.md",target:"_blank",rel:"noopener noreferrer"},"可扩展的日志记录器")]),t("li",null,[t("a",{href:"https://github.com/unjs/consola",target:"_blank",rel:"noopener noreferrer"},"Elegant Console Logger for Node.js and Browser"),s(" 优雅的日志库")])],-1),t("h2",{id:"好用的工具",tabindex:"-1"},[s("好用的工具 "),t("a",{class:"header-anchor",href:"#好用的工具","aria-hidden":"true"},"#")],-1),t("h2",{id:"todos",tabindex:"-1"},[s("TODOS "),t("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1)];var c=n(o,[["render",function(n,t,s,r,o,c){return a(),e("div",null,l)}]]);export{r as __pageData,c as default};
