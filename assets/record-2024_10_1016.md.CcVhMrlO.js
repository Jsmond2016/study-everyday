import{_ as e,c as r,o as a,a3 as t}from"./chunks/framework.B1tUqxYT.js";const k=JSON.parse('{"title":"1016 本周阅读","description":"","frontmatter":{},"headers":[],"relativePath":"record-2024/10/1016.md","filePath":"record-2024/10/1016.md"}'),l={name:"record-2024/10/1016.md"},o=t('<h1 id="_1016-本周阅读" tabindex="-1">1016 本周阅读 <a class="header-anchor" href="#_1016-本周阅读" aria-label="Permalink to &quot;1016 本周阅读&quot;">​</a></h1><p>好文摘抄：</p><div class="tip custom-block"><p class="custom-block-title">联调规约</p><p>正确的数据格式返回:</p><ul><li>承诺是数组类型返回的数据，无数据时不允许返回 null 必须返回 []</li><li>承诺是布尔类型返回的数据，仅允许返回 true false，不允许返回 1,0 等数字类型，不允许返回 &quot;true&quot; &quot;false&quot; &quot;null&quot; null 等其他任何值</li><li>承诺是数字类型的返回数据，仅允许返回 数字，不允许返回 null 等其他任何数据</li><li>承诺返回的字段，即使没有任何值，对象中的属性必须存在且为 null， 不允许没有值的时候不返回字段</li><li>承诺是时间戳类型的返回数据，只允许返回 数字，不允许返回 null</li><li>承诺是字符串类型返回的数据，只允许返回 字符串，不允许返回 null</li><li>承诺是百(千)分比的返回数据，只允许返回对应的 小数 且不需要 * 100，不需要带 % ‰ 等</li></ul><p>作者：Hamm 链接：<a href="https://juejin.cn/post/7270155117706117176" target="_blank" rel="noreferrer">https://juejin.cn/post/7270155117706117176</a> 来源：稀土掘金 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。</p></div><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文，专题好文</p></blockquote><ul><li><a href="https://juejin.cn/post/7270155117706117176" target="_blank" rel="noreferrer">先别急着喷，我来分享一些正在使用的API接口开发规范 - 掘金</a></li><li><a href="https://juejin.cn/post/7424338056918777882#heading-31" target="_blank" rel="noreferrer">Docker 万字入门教程Docker 使用 Google 公司推出的 Go 语言进行开发实现，对进程进行封装隔离，属于 - 掘金</a></li><li><a href="https://juejin.cn/post/7402891257196691468" target="_blank" rel="noreferrer">终于搞懂类型声明文件.d.ts和declare了，原来用处如此大 - 掘金</a></li><li><a href="https://shanyue.tech/frontend-engineering/docker.html#%E4%BD%BF%E7%94%A8%E5%AF%B9%E8%B1%A1%E5%AD%98%E5%82%A8%E6%9C%8D%E5%8A%A1-oss?a=1" target="_blank" rel="noreferrer">如何使用 docker 部署前端项目 | 山月行</a></li><li><a href="https://zhuanlan.zhihu.com/p/351750593" target="_blank" rel="noreferrer">【JS设计模式】观察者模式VS发布订阅模式 - 知乎</a></li></ul><h3 id="新知识" tabindex="-1">新知识 <a class="header-anchor" href="#新知识" aria-label="Permalink to &quot;新知识&quot;">​</a></h3><blockquote><p>库更新，未知的知识点等；</p></blockquote><h3 id="专题" tabindex="-1">专题 <a class="header-anchor" href="#专题" aria-label="Permalink to &quot;专题&quot;">​</a></h3><blockquote><p>CSS, ts, 微前端，nest, next ... 2 篇同类文章起收录</p></blockquote><ul><li><a href="https://juejin.cn/post/7426352106033004555#heading-17" target="_blank" rel="noreferrer">Next.js全栈框架入门：带你一文搞定路由本文详细介绍了 Next.js 基于文件系统的路由，以及动态路由、路由组、平 - 掘金</a></li><li><a href="https://zhuanlan.zhihu.com/p/509036942" target="_blank" rel="noreferrer">从根上理解 React Hooks 的闭包陷阱 - 知乎</a></li><li><a href="https://juejin.cn/post/7230819482012237861" target="_blank" rel="noreferrer">一文讲透 React Hooks 闭包陷阱React Hooks 是 React 16.8 版本引入的一种新的特性，它允 - 掘金</a></li></ul><p><strong>swr</strong></p><ul><li><a href="https://swr.vercel.app/zh-CN/docs/getting-started" target="_blank" rel="noreferrer">入门 – SWR</a> 认真看完这里的例子，用于替换 axios 传统方式很有帮助</li><li><a href="https://www.xiabingbao.com/post/react/swr-sl3i5x.html" target="_blank" rel="noreferrer">React 请求数据别再使用 useEffect 和 useState，试试 SWR 吧！-蚊子前端博客</a> 这个工具很好的处理接口关联请求调用问题</li><li><a href="https://swr.nodejs.cn/" target="_blank" rel="noreferrer">SWR 中文网</a></li></ul><p><strong>ahooks</strong></p><ul><li><a href="https://ahooks.js.org/zh-CN/guide/blog/function/" target="_blank" rel="noreferrer">ahooks 函数处理规范 - ahooks 3.0</a> 使用 useMemoizedFn 替换 useCallback 函数</li><li><a href="https://zhuanlan.zhihu.com/p/106796295" target="_blank" rel="noreferrer">useRequest- 蚂蚁中台标准请求 Hooks - 知乎</a> 近期在个人项目中使用了 useRequest，很方便，节省了很多 loading，error 相关的重复代码，可以多多在工作中使用；</li><li><a href="https://www.imooc.com/article/359906" target="_blank" rel="noreferrer">useRequest项目实战：新手入门教程_慕课手记</a></li></ul><p><strong>React Modal 弹窗</strong></p><ul><li><a href="https://juejin.cn/post/7226307649519337527#heading-20" target="_blank" rel="noreferrer">Antd Modal组件溯源 - 掘金</a></li><li><a href="https://juejin.cn/post/7238917620849246263" target="_blank" rel="noreferrer">999 看评论区 | 让弹窗更易于使用~简单弹窗、多弹窗、复杂弹窗怎么做代码和状态的解耦。试想如果在同一个页面组件中，有多个不同的弹窗要打开， - 掘金</a></li><li><a href="https://juejin.cn/post/7032289105358618632" target="_blank" rel="noreferrer">在React中优雅地使用弹窗——useModal的优化之前介绍了useModal的简单封装思路，但是这种方法有一个副作用 - 掘金</a></li></ul><p><strong>alvoa.js</strong></p><ul><li><a href="https://alova.js.org/zh-CN/tutorial/getting-started/introduce" target="_blank" rel="noreferrer">介绍alova | Alova.JS</a></li><li><a href="https://juejin.cn/post/7215207897519882277" target="_blank" rel="noreferrer">和axios相比，alova有什么优势？axios是一个基于Promise的HTTP客户端，每周的npm下载量4000W - 掘金</a></li></ul><p><strong>immer 和 函数式</strong></p><ul><li><a href="https://medium.com/javascript-scene/curry-and-function-composition-2c208d774983#:~:text=A%20curried%20function%20is%20a%20function%20which%20takes%20multiple%20parameters,the%20resulting%20value%20is%20returned" target="_blank" rel="noreferrer">Curry and Function Composition. Note: This is part of the “Composing… | by Eric Elliott | JavaScript Scene | Medium</a></li><li><a href="https://zhuanlan.zhihu.com/p/146773995" target="_blank" rel="noreferrer">immer —— 提高React开发效率的神器 - 知乎</a></li><li><a href="https://segmentfault.com/a/1190000017270785" target="_blank" rel="noreferrer">999 | javascript - immer.js 实战讲解文档 - 大前端 - SegmentFault 思否</a></li></ul><h2 id="项目-博客推荐" tabindex="-1">项目/博客推荐 <a class="header-anchor" href="#项目-博客推荐" aria-label="Permalink to &quot;项目/博客推荐&quot;">​</a></h2><blockquote><p>值得学习 作者/项目/工具等</p></blockquote><h3 id="博客" tabindex="-1">博客 <a class="header-anchor" href="#博客" aria-label="Permalink to &quot;博客&quot;">​</a></h3><blockquote><p>优秀作者的博客，掘金主页，github 主页等；</p></blockquote><ul><li><a href="https://juejin.cn/user/1626932940642295/posts" target="_blank" rel="noreferrer">999 | 优秀作者，擅长 go，js 等 | 长林啊 的个人主页 - 文章 - 掘金</a></li></ul><h3 id="教程" tabindex="-1">教程 <a class="header-anchor" href="#教程" aria-label="Permalink to &quot;教程&quot;">​</a></h3><blockquote><p>关于特定技能点或者技术栈的学习教程；</p></blockquote><ul><li><a href="https://luolei.org/how-to-open-a-bank-account-in-hongkong-2024?a=1" target="_blank" rel="noreferrer">香港银行开户：2024 年更新 | 中银、汇丰、众安开户经验分享 | 罗磊的独立博客</a></li><li><a href="https://razeen.me/posts/how-to-obtain-and-charge-giffgaff/" target="_blank" rel="noreferrer">如何拥有一个可长期在国内使用的国外手机号码 | Razeen`s Blog</a></li><li><a href="https://jiemahao.com/opening-hong-kong-bank-account/" target="_blank" rel="noreferrer">内地赴港办理香港银行开户攻略：一次性开通5张银行卡的经验分享 - 接码号</a></li><li><a href="https://zhuanlan.zhihu.com/p/661899895" target="_blank" rel="noreferrer">四大香港银行开卡最全实战分享：中国银行、汇丰、招商永隆、众安银行（Za Bank） - 知乎</a></li><li><a href="https://zhuanlan.zhihu.com/p/673534671" target="_blank" rel="noreferrer">一篇讲完：香港开户，办理香港银行账户的30个疑问，全网最全总结！(免费协助办理港卡) - 知乎</a></li></ul><h2 id="求职-or-就业-or推荐公司" tabindex="-1">求职 or 就业 or推荐公司 <a class="header-anchor" href="#求职-or-就业-or推荐公司" aria-label="Permalink to &quot;求职 or 就业 or推荐公司&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7317859658285318170" target="_blank" rel="noreferrer">互联网大厂，开始对领导层动刀了 - 掘金</a> 热评：人只要自己不主动崩，还是远比想象中耐操很多的.年龄大了也要持续学习；</li><li><a href="https://www.v2ex.com/t/1081518" target="_blank" rel="noreferrer">哪些行业能承接这些失业的程序员呢？ - V2EX</a></li></ul>',31),n=[o];function i(s,h,u,c,p,f){return a(),r("div",null,n)}const d=e(l,[["render",i]]);export{k as __pageData,d as default};
