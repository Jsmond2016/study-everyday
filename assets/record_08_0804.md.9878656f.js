import{o as l,c as e,b as n,d as a}from"./app.8e636482.js";const r='{"title":"0804","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/08/0804.md","lastUpdated":1628090065145}',t={},s=n("h1",{id:"_0804"},[n("a",{class:"header-anchor",href:"#_0804","aria-hidden":"true"},"#"),a(" 0804")],-1),u=n("p",null,[n("img",{src:"/study-everyday/assets/0804.cf7b47ac.jpg",alt:""})],-1),o=n("h2",{id:"工作"},[n("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#"),a(" 工作")],-1),d=n("ul",null,[n("li",null,[a("问题1-"),n("strong",null,"全局设置 AntD 属性"),a("：一般来说，如果要自定义组件的主题或者样式，定义一个全局的 css 或者使用 css module的方式文件覆盖 AntD 默认样式即可；但是，对于 AntD 组件的默认 "),n("strong",null,"属性"),a(" 如何覆盖？")])],-1),i=n("p",null,[a("今天有个需求是，设置 Modal 框的 "),n("code",null,"maskClosable"),a(" 属性，即默认点击蒙版不关闭弹框，避免用户在弹框内编辑不小心点了蒙版就关闭了导致编辑的数据丢失。")],-1),h=n("p",null,[a("我的做法是，先看看 AntD 有没有提供设置默认属性的方式，看了下，没有；然后只能项目全局搜索 Modal 组件，给每一个组件设置 props 这个 "),n("code",null,"maskClosable"),a(" 属性为 false；左边的大佬同事一听，就对我嗤之以鼻了，显然看不惯我的这种做法，他直接看了下 Modal 的源码，然后再项目的 "),n("code",null,"App.tsx"),a(" 文件中，设置了 "),n("code",null,"Modal.defaultProps.maskClosable = false"),a("，我直呼 NB 啊！")],-1),c=n("p",null,"确实啊，如果 组件没提供某个方式 ，那么只能看源码了，然而，我还是...很菜...",-1),p=n("p",null,[n("a",{href:"https://github.com/ant-design/ant-design/blob/master/components/modal/Modal.tsx",target:"_blank",rel:"noopener noreferrer"},"Modal组件源码")],-1),g=n("ul",null,[n("li",null,[n("p",null,[a("问题2-"),n("strong",null,"Flex 默认撑满高度"),a("：一个父组件下有多个子组件，某一个子组件因为设置了宽度，但是内容超长，撑开了高度，导致其他兄弟组件也默认撑开了高度；想要的效果是其他兄弟组件不要和这个兄弟组件一样被撑开高度，因此，这些 【被带胖】的兄弟组件，需要设置 "),n("code",null,"align-self: base-line;"),a(" 样式，让自己始终保持自己的 “身材” 不变形。")])]),n("li",null,[n("p",null,[a("问题3-"),n("strong",null,"文本域输入内容"),a("，在输出结果要保持一致；如果用户输入了 "),n("strong",null,"空格、回车换行"),a("，在展示态的时候，也要展示对应的回车换行。但是如果只是以 "),n("code",null,"<div>{value}</div>"),a(" 的方式展示，是不行的。需要处理回车和空格：")])])],-1),f=n("div",{class:"language-"},[n("pre",null,[n("code",null,"value.split('\\r').map(v => <div>{value.replace(/\\s/g, '&ngsp;')}</div>)\n")])],-1),m=n("ul",null,[n("li",null,"其他工作：联调，自测，修复bug")],-1),v=n("hr",null,null,-1),b=n("h2",{id:"好文推荐"},[n("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#"),a(" 好文推荐")],-1),k=n("ul",null,[n("li",null,[n("a",{href:"https://juejin.cn/post/6992200385561624607?from=main_page",target:"_blank",rel:"noopener noreferrer"},"Vite介绍和原理解析")])],-1),D=n("h2",{id:"项目推荐"},[n("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#"),a(" 项目推荐")],-1),M=n("ul",null,[n("li",null,[n("a",{href:"https://segmentfault.com/a/1190000040096254",target:"_blank",rel:"noopener noreferrer"},"vite+vue3+ts搭建通用后台管理系统"),a(" 后台项目，配置很全面")])],-1),_=n("h2",{id:"todos"},[n("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#"),a(" TODOS")],-1),x=n("ul",null,[n("li",null,"react-dnd 使用总结")],-1);t.render=function(n,a,r,t,A,j){return l(),e("div",null,[s,u,o,d,i,h,c,p,g,f,m,v,b,k,D,M,_,x])};export default t;export{r as __pageData};
