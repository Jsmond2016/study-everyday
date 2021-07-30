import{o as e,c as l,b as r,d as n}from"./app.aefd15e7.js";const t='{"title":"0730","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"反思","slug":"反思"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/07/0730.md","lastUpdated":1627650489085}',a={},o=r("h1",{id:"_0730"},[r("a",{class:"header-anchor",href:"#_0730","aria-hidden":"true"},"#"),n(" 0730")],-1),u=r("p",null,[r("img",{src:"/study-everyday/assets/0730.6b8ea51e.jpg",alt:""})],-1),i=r("h2",{id:"工作"},[r("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#"),n(" 工作")],-1),s=r("ul",null,[r("li",null,"拖拽方案：")],-1),h=r("p",null,[n("Tabs 需要拖拽，看了 AntD 的官网方案，使用的是 "),r("a",{href:"https://ant.design/components/tabs-cn/#components-tabs-demo-custom-tab-bar-node",target:"_blank",rel:"noopener noreferrer"},"可拖拽标签-React-DND"),n(" 方案")],-1),d=r("p",null,"同事大牛已经实现了一个版本，我今天才开始看，对 API 还是比较陌生的。",-1),p=r("p",null,"社区关于 拖拽有几种：",-1),c=r("ul",null,[r("li",null,[r("a",{href:"https://ahooks.js.org/zh-CN/hooks/ui/use-drop",target:"_blank",rel:"noopener noreferrer"},"umi 的拖拽 hook"),n(" 6.7k star")]),r("li",null,[r("a",{href:"https://github.com/react-dnd/react-dnd",target:"_blank",rel:"noopener noreferrer"},"React-DND"),n(" 16.2k star")]),r("li",null,[r("a",{href:"https://react-beautiful-dnd.netlify.app",target:"_blank",rel:"noopener noreferrer"},"react-beautiful-dnd"),n(" 24.4k star")])],-1),f=r("p",null,"其他问题：",-1),b=r("ul",null,[r("li",null,"组件设计：昨天的那个组件设计问题，今天和 2 个同事讨论了下，个人比较偏向老前端的做法，只有最外层的组件需要 connect，里面的子组件接受传入的值即可，一些改变 数据流的动作，可以单独定义，如果很多组件都使用到了，考虑抽离一个类似的工具函数，传入 dispatch 和 参数，解决组件外 使用 dispatch 问题。"),r("li",null,[n("不可变数据传递：多人协作时，因为不知道别人的组件设计细节，因此传给他们的组件的数据，如果是从 model 取出来的，尽可能做一次深拷贝再丢进去。因为今天就遇到了 别人的组件使用我的数据发现数据是 只读 的，因为数据是从 model 取出来的，因为是 model 的数据，都是不可变的，都用 observable 包装过了 isExtensible，因此无法使用 "),r("code",null,"obj.xxx = yyy"),n(" 或 "),r("code",null,"list.push(item)"),n(" 等方式改变数据，会报错。")])],-1),g=r("p",null,"说明：",-1),m=r("p",null,"深浅拷贝：",-1),k=r("ul",null,[r("li",null,"数组是一个引用，其使用 concat 和 slice 都是浅拷贝"),r("li",null,"使用 JSON.stringify 序列化和反序列化才是 深拷贝，但是有局限性；"),r("li",null,"最好的方式，使用 lodash 的 cloneDeep 方法")],-1),_=r("h2",{id:"反思"},[r("a",{class:"header-anchor",href:"#反思","aria-hidden":"true"},"#"),n(" 反思")],-1),v=r("ul",null,[r("li",null,"7 月就要过去了，感觉这个月自己的空余时间花费了太多在工作上，或许也是侧面反应近期工作强度有点大，加班有点多了。这样对自己不太好，没有休闲时间和充电时间；同时，工作中遇到的问题都是比较简单的问题，不是特别值得记录，成长比较有限。"),r("li",null,[n("7 月自己制定的个人目标，没有实现；每天应该坚持的算法打卡也没有坚持下来； "),r("ul",null,[r("li",null,"算法这东西，在还没有建立成熟的思考方式前就中断了，后面又得重新捡起来。"),r("li",null,"源码学习也放下了，即使是周末，也没有尽可能充分利用好时间；"),r("li",null,"工作中的学习：发现，如果要成长，工作中遇到的问题需要即时记录，因为前端大佬每天都加班，白天他没时间教你，通常都是晚上加班间隙，比较好问问题，大佬也比较闲；说实话，这个和以前学习是一样的，老师白天要给每一个同学上课，你若又不懂得问题，需要课后自己虚心讨教，比较耐心的老师，会不惜用自己的下班时间给你讲解...工作中也是一样的，保持好奇心~~")])])],-1),j=r("p",null,"教训：",-1),x=r("ul",null,[r("li",null,"工作任务评估，实事求是，评估尽可能准确，同时保持一定的弹性时间应对其他问题（开会，技术实现复杂，代码优化，学习他人代码等）"),r("li")],-1),D=r("hr",null,null,-1),w=r("h2",{id:"好文推荐"},[r("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#"),n(" 好文推荐")],-1),y=r("ul",null,[r("li",null,[r("a",{href:"https://mp.weixin.qq.com/s/iomDg1Qg_1kKEkeo9EzbGQ",target:"_blank",rel:"noopener noreferrer"},"从零搭建Webpack5-react脚手架(附源码)")]),r("li",null,[r("a",{href:"https://mp.weixin.qq.com/s/7ssYpD9R8PnfqvZZE-7XAQ",target:"_blank",rel:"noopener noreferrer"},"Module Federation 你的浪漫我来懂")]),r("li",null,[r("a",{href:"https://juejin.cn/post/6965860856311578637",target:"_blank",rel:"noopener noreferrer"},"万字长文带你彻底搞懂什么是 DevOps")]),r("li",null,[r("a",{href:"https://juejin.cn/post/6989973871663251487",target:"_blank",rel:"noopener noreferrer"},"基于 vue3 + webpack 5 + sass+ vw 适配方案+axios 封装，从0构建手机端模板脚手架")])],-1),q=r("h2",{id:"项目推荐"},[r("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#"),n(" 项目推荐")],-1),O=r("p",null,"移动端组件库 学习：",-1),N=r("ul",null,[r("li",null,[r("a",{href:"https://github.com/dengwb1991/owl-ui",target:"_blank",rel:"noopener noreferrer"},"https://github.com/dengwb1991/owl-ui")]),r("li",null,[r("a",{href:"https://github.com/xiaojun1994/unique-ui",target:"_blank",rel:"noopener noreferrer"},"https://github.com/xiaojun1994/unique-ui")])],-1),E=r("p",null,[n("相关博客："),r("a",{href:"https://juejin.cn/post/6844903847148650503",target:"_blank",rel:"noopener noreferrer"},"UI组件库从1到N开发心得-组件篇")],-1),A=r("h2",{id:"todos"},[r("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#"),n(" TODOS")],-1);a.render=function(r,n,t,a,P,Q){return e(),l("div",null,[o,u,i,s,h,d,p,c,f,b,g,m,k,_,v,j,x,D,w,y,q,O,N,E,A])};export default a;export{t as __pageData};
