import{_ as l,c as e,o as r,b as n,d as a}from"./app.2da3ac28.js";const t='{"title":"0805","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"面经","slug":"面经"},{"level":2,"title":"明日计划","slug":"明日计划"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/08/0805.md","lastUpdated":1632475296386}',i={},s=[n("h1",{id:"_0805",tabindex:"-1"},[a("0805 "),n("a",{class:"header-anchor",href:"#_0805","aria-hidden":"true"},"#")],-1),n("p",null,[n("img",{src:"/study-everyday/assets/0805.7f456ca8.jpg",alt:""})],-1),n("h2",{id:"工作",tabindex:"-1"},[a("工作 "),n("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),n("ul",null,[n("li",null,[n("strong",null,"1-保留空格换行等原格式问题"),a("：昨天想的方案是使用 "),n("code",null,"split('\\n'), str.replace(/\\s/g, '&ngsp;')"),a(" 方案，尝试后结果不行。网上搜索答案，发现有对应的"),n("a",{href:"https://www.cnblogs.com/niyan/p/14144889.html?ivk_sa=1024320u",target:"_blank",rel:"noopener noreferrer"},"解决方案"),n("ul",null,[n("li",null,[a("设置样式 "),n("code",null,"white-space: pre;")]),n("li",null,[a("使用 "),n("code",null,"<pre>str</pre>"),a(" 标签")])])]),n("li",null,[n("strong",null,"2-代码结构优化问题"),a("：今天老前端亮哥帮我 review 代码，发现了自己的很多问题 "),n("ul",null,[n("li",null,[n("strong",null,"组件封装要独立"),a("，若某个方法只有自己用到，那么定义在自己的组件内部即可，不用从外面一层层传进来；不然情况就是，所有定义的组件都是受控组件，所有方法都在最外层的父组件上，瘦的太瘦，胖的太胖；同时不好 review 代码，传来传去，一个个文件跳来跳去；")]),n("li",null,[n("strong",null,"重复代码太多"),a("：编辑页和查看页内容基本是一致的，尽可能的复用组件（要求组件封装和开口优雅），避免重复代码导致某些 bug 修改时只修改了一半。")]),n("li",null,[a("组件在定义和使用的时候，最好的考察方式就是，最后使用该组件的时候，是不是只需要使用 "),n("code",null,"<Component {...props} />"),a(" 即可？如果不是，说明封装还不够好，需要"),n("strong",null,"梳理逻辑看看那些逻辑可以放到组件内部，让它又独立又完整"),a("。")])])]),n("li",null,"分页问题复杂度：通常分页需求，我们考虑的都是比较简单；实际上，它也可以很复杂：比如，同一个页面新开了 多个 tab，当前页页数 为 10，这页只有1条数据；但是在其他 tab 下删除了第 8,9 页数据，那么这个 tab 如果删除这个数据后查询，传参是 10 还是 9 呢？显然，传 10， 9， 8 都是不对的。")],-1),n("p",null,"那么，难道每次查到结果时空就递归分页减 1 后再查，知道有数据为止吗？这样会导致发的请求太多了，响应时间太久。",-1),n("p",null,"一个比较好的方式就是，当发现响应结果数据为空时，直接回到第一页，这样就避免上述重复请求和空数据问题；因为即使第 1 页数据是空，那就让它空，不用在意。",-1),n("h2",{id:"好文推荐",tabindex:"-1"},[a("好文推荐 "),n("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),n("ul",null,[n("li",null,[n("a",{href:"https://juejin.cn/post/6989461400535973896",target:"_blank",rel:"noopener noreferrer"},"面试官：请手动实现一个Sass-loader"),a(" 简单版本 loader")]),n("li",null,[n("a",{href:"https://juejin.cn/post/6992754161221632030",target:"_blank",rel:"noopener noreferrer"},"多图详解，一次性搞懂Webpack Loader"),a(" 深入版本 loader")])],-1),n("h2",{id:"面经",tabindex:"-1"},[a("面经 "),n("a",{class:"header-anchor",href:"#面经","aria-hidden":"true"},"#")],-1),n("ul",null,[n("li",null,[n("a",{href:"https://juejin.cn/post/6992767550543265829",target:"_blank",rel:"noopener noreferrer"},"前端万字面经——基础篇")])],-1),n("h2",{id:"明日计划",tabindex:"-1"},[a("明日计划 "),n("a",{class:"header-anchor",href:"#明日计划","aria-hidden":"true"},"#")],-1),n("ul",null,[n("li",null,"resize 事件添加防抖操作")],-1),n("h2",{id:"todos",tabindex:"-1"},[a("TODOS "),n("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1),n("ul",null,[n("li",null,"react-dnd 使用总结")],-1)];var u=l(i,[["render",function(l,n,a,t,i,u){return r(),e("div",null,s)}]]);export{t as __pageData,u as default};
