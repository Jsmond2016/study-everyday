import{_ as e,c as l,o as n,b as t,d as a}from"./app.d64489e4.js";const r='{"title":"0622","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/06/0622.md","lastUpdated":1634657008772}',u={},i=[t("h1",{id:"_0622",tabindex:"-1"},[a("0622 "),t("a",{class:"header-anchor",href:"#_0622","aria-hidden":"true"},"#")],-1),t("p",null,[t("img",{src:"/study-everyday/assets/0622.9b9308d3.jpg",alt:""})],-1),t("h2",{id:"工作",tabindex:"-1"},[a("工作 "),t("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[a("修bug的一天： "),t("ul",null,[t("li",null,[a("jpg 和 jpeg 的 "),t("code",null,"File.type"),a(" 都是 "),t("code",null,"image/jpeg"),a("，参考："),t("a",{href:"https://blog.csdn.net/weixin_43648947/article/details/89216622",target:"_blank",rel:"noopener noreferrer"},"input:file上传文件类型（超详细）"),a(" 我被别人的错误代码误导了，同时自己也没有自测导致bug，诶，我以为是很简单，实际上却不是。")])])]),t("li",null,[a("Hook 深入学习和理解：当前的状态是，基本只会用 "),t("code",null,"useState, useEffect, useRef"),a(" 之类的，关于 "),t("code",null,"useCallback, useMemo"),a(" 用的比较少，相对来说比较少关注性能问题。学习资料："),t("a",{href:"https://juejin.cn/post/6844904165500518414#heading-9",target:"_blank",rel:"noopener noreferrer"},"React Hooks 最佳实践")]),t("li",null,[a("spa 单页应用局部控制 body 样式避免影响全局，使用方式："),t("a",{href:"https://umijs.org/zh-CN/plugins/plugin-helmet",target:"_blank",rel:"noopener noreferrer"},"umijs/plugin-helmet"),a(" 管理 HTML 文档标签（如标题、描述等）。")]),t("li",null,[a("bug 场景：文字内容相关 "),t("ul",null,[t("li",null,"对于内容可能会很多/小屏浏览的时候，需要和 UI 协商，是隐藏还是文本溢出？从而避免 bug 出现。"),t("li",null,[a("内容出现数字或者连续字母，是否考虑换行？否则默认情况下会占满一行后被 "),t("code",null,"overflow:hidden")])])]),t("li",null,"Toast 组件单例问题导致 bug：在AntD-Mobile UI 的 Toast 组件，每次只允许一个 Toast，且每一个 Toast 默认展示 3秒。下一个 Toast 展示前需要手动 hide() 上一个 Toast，或者是 setTimeout 一段时间后展示才可以避免 弹不出 Toast 问题")],-1),t("h2",{id:"好文推荐",tabindex:"-1"},[a("好文推荐 "),t("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://mp.weixin.qq.com/s/6RpE5lRhnX5WXOOkvtfhqw",target:"_blank",rel:"noopener noreferrer"},"H5 移动端调试全攻略～")])],-1),t("h2",{id:"todos",tabindex:"-1"},[a("TODOS "),t("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[a("复盘这次的 bug，总结一份个人使用的 bug 考虑因素，尽可能将问题落实在需求阶段解决。 "),t("ul",null,[t("li",null,"文字内容"),t("li",null,"输入框和校验"),t("li",null,"图片和展示方式"),t("li",null,"等 等")])])],-1)];var o=e(u,[["render",function(e,t,a,r,u,o){return n(),l("div",null,i)}]]);export{r as __pageData,o as default};
