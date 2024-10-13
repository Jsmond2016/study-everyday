import{_ as s,c as i,o as a,a3 as e}from"./chunks/framework.B1tUqxYT.js";const y=JSON.parse('{"title":"0720 今日总结","description":"","frontmatter":{},"headers":[],"relativePath":"record-2024/07/0720.md","filePath":"record-2024/07/0720.md"}'),t={name:"record-2024/07/0720.md"},r=e(`<h1 id="_0720-今日总结" tabindex="-1">0720 今日总结 <a class="header-anchor" href="#_0720-今日总结" aria-label="Permalink to &quot;0720 今日总结&quot;">​</a></h1><p><img src="https://cn.bing.com/th?id=OHR.MethoniCastle_EN-US9447007951_UHD.jpg" alt=""></p><div class="tip custom-block"><p class="custom-block-title">今日推荐</p><p>绝对优秀的大佬：<a href="https://www.v2ex.com/t/1066039?p=2" target="_blank" rel="noreferrer">时隔一个月，我又来分享面试经历了 - V2EX</a></p><p>AntD 开源库的 Top3 作者，技术实力很强！！</p><p>附上作者的简历，观摩观摩 <a href="http://www.lijianan.com/" target="_blank" rel="noreferrer">栗嘉男</a></p><p><a href="https://github.com/li-jia-nan" target="_blank" rel="noreferrer">github</a></p></div><p><strong>今日工作</strong></p><div class="tip custom-block"><p class="custom-block-title">问题1：ts 中的 any 相关，使用 Omit ts 工具忽略属性后变成 any 了；</p><p>参考：我写了个例子和问题，<a href="https://stackoverflow.com/questions/76616163/omit-seems-broken-on-type-extending-record" target="_blank" rel="noreferrer">typescript - Omit seems broken on type extending Record - Stack Overflow</a></p></div><div class="language-ts vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> AA</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Record</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&amp;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  a</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> number</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">  b</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> string</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">type</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OmitFromIndexKeys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">K</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> keyof</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> any</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> in</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> keyof</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> as</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> P</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> extends</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> K</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> never</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> :</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> T</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">P</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">} </span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// b: string  </span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> fn</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({ </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">b</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> }</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> OmitFromIndexKeys</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">AA</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;a&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;) {}</span></span></code></pre></div><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文，专题好文</p></blockquote><p><strong>TypeScript</strong></p><ul><li><a href="https://juejin.cn/post/7386532770476490761" target="_blank" rel="noreferrer">整天写 TS 项目确不会配置？是时候重新学习一下 tsconfig.json 了 - 掘金</a></li><li><a href="https://juejin.cn/post/7402248021093007423" target="_blank" rel="noreferrer">TypeScript 类型兼容——逆变、协变、双向协变和不变在 TypeScript 中，类型系统支持“逆变（Contr - 掘金</a></li><li><a href="https://blog.csdn.net/u014388408/article/details/131501858" target="_blank" rel="noreferrer">TypeScript - 函数（下）_扩张参数必须具有元组类型或传递给 rest 参数-CSDN博客</a></li><li><a href="https://react-typescript-cheatsheet.netlify.app/docs/react-types/componentprops/" target="_blank" rel="noreferrer">ComponentPropsen&lt;ElemtType&gt; | React TypeScript Cheatsheets</a></li><li><a href="https://juejin.cn/post/7201114708714963003" target="_blank" rel="noreferrer">tsup 入门到熟练前言 为什么要用 tsup？ 构建代码配置很少。 构建 es5 代码不需要配置 babel ，bab - 掘金</a></li><li><a href="https://juejin.cn/post/7178792371159564346" target="_blank" rel="noreferrer">浅谈基于tsup打包TypeScript开启掘金成长之旅！这是我参与「掘金日新计划 · 12 月更文挑战」的第4天，点击 - 掘金</a></li></ul><p><strong>微前端</strong></p><ul><li><a href="https://wakeadmin.wakedata.com/mapp/index.html#%E6%A6%82%E8%A7%88" target="_blank" rel="noreferrer">微前端 | WakeAdmin</a></li><li><a href="https://juejin.cn/post/7254944931386163260" target="_blank" rel="noreferrer">微前端的落地和治理实战微前端实现原理、框架选型之类的文章比较泛滥，我不打算讲这些玩意，本文主要来源于笔者过去一年落地微前 - 掘金</a></li><li><a href="https://juejin.cn/post/7269668219488354361" target="_blank" rel="noreferrer">使用 Docker 实现前端应用的标准化构建、部署和运行Docker 对前端的意义也很重大。 实际上，Docker 的世 - 掘金</a></li></ul><p><strong>杂谈</strong></p><ul><li><a href="https://juejin.cn/post/7408774470075580457#heading-19" target="_blank" rel="noreferrer">前端项目规范配置前端项目规范配置：ESLint+Prettier+EditorConfig+Stylelint+Husk - 掘金</a></li><li><a href="https://juejin.cn/post/6844903607393845255#heading-1" target="_blank" rel="noreferrer">如何阅读大型前端开源项目的源码目前网上有很多「XX源码分析」这样的文章，不过这些文章分析源码的范围有限，有时候讲的内容不 - 掘金</a></li><li><a href="https://juejin.cn/post/7080854114141208612" target="_blank" rel="noreferrer">React18正式版源码级剖析React18正式版终于来了，哪个是你期待的，Concurrent、Suspense、tr - 掘金</a></li><li><a href="https://juejin.cn/post/7287142071357784119" target="_blank" rel="noreferrer">if 我是前端 Leader, 前端业务开发做不做设计？回到正题，做业务前端开发要不要做设计呢？我觉得大部分情况不需要， - 掘金</a></li><li><a href="https://juejin.cn/post/7305606652198174747" target="_blank" rel="noreferrer">🧐不会设计插件系统？来看看Pictode的插件系统吧！✨🎉🎉🎉搭建插件系统，使应用可灵活扩展，无需改动核心逻辑。 - 掘金</a></li></ul><p><strong>Web3</strong></p><ul><li><a href="https://github.com/percy507/nextjs-web3/tree/main" target="_blank" rel="noreferrer">在这个仓库发现作者使用了 wagmi 库 | percy507/nextjs-web3</a></li><li><a href="https://1.x.wagmi.sh/zh-CN" target="_blank" rel="noreferrer">wagmi: React Hooks for Ethereum – wagmi</a></li></ul><p><strong>合辑</strong></p><ul><li><a href="https://github.com/percy507/monitor" target="_blank" rel="noreferrer">percy507/monitor: 前端监控体系搭建（错误、异常、白屏、性能监控、卡顿、pv等，接入日志、告警系统）</a></li><li><a href="https://github.com/percy507/everyone-can-use-english/blob/master/chapter2.md" target="_blank" rel="noreferrer">everyone-can-use-english/chapter2.md at master · percy507/everyone-can-use-english</a></li><li><a href="https://github.com/percy507/koa2-template" target="_blank" rel="noreferrer">percy507/koa2-template: A koa2 + typescript template!👨‍💻</a></li><li><a href="https://github.com/percy507/vite-react-admin" target="_blank" rel="noreferrer">percy507/vite-react-admin: 👻A scaffold for react Admin project！👨‍💻Use vite + react + jotai + typescript</a></li></ul><h3 id="其他好文" tabindex="-1">其他好文 <a class="header-anchor" href="#其他好文" aria-label="Permalink to &quot;其他好文&quot;">​</a></h3><ul><li><a href="https://git-scm.com/docs/git-worktree/zh_HANS-CN" target="_blank" rel="noreferrer">Git - git-worktree Documentation</a> 项目中，对于 worktree 使用的频率还是很高的，特别是同一个项目多个分支并行开发的时候，这个工具尤其好用；</li><li><a href="https://juejin.cn/post/6844904192687996936" target="_blank" rel="noreferrer">nestjs基础目录结构 - 掘金</a></li></ul><h2 id="项目-博客推荐" tabindex="-1">项目/博客推荐 <a class="header-anchor" href="#项目-博客推荐" aria-label="Permalink to &quot;项目/博客推荐&quot;">​</a></h2><blockquote><p>值得学习 作者/项目/工具等</p></blockquote><h3 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7401009128204894244" target="_blank" rel="noreferrer">我的低代码平台Marsview终于开源了我的低代码平台Marsview今天终于正式开源了，欢迎搭建克隆。为了方便大家体验 - 掘金</a></li><li><a href="https://www.51coder.cc/category/completed-area" target="_blank" rel="noreferrer">全栈项目网-毕设成品</a> 北漂近 10 年的全栈程序员的创业项目，帮助毕业生开发毕设项目；这个作者的网站很漂亮；类似的毕设网站，其实其他网站也有，B 站有很多类似的，可以学习参考；也算是程序员的副业或者创业选择之一；这里有<a href="https://www.51coder.cc/169.html" target="_blank" rel="noreferrer">作者的故事</a></li></ul><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><ul><li><a href="https://github.com/ripperhe/Bob" target="_blank" rel="noreferrer">ripperhe/Bob: Bob 是一款 macOS 平台的翻译和 OCR 软件。</a></li><li><a href="https://www.appinn.com/shottr-for-macos/" target="_blank" rel="noreferrer">Shottr - 滚屏、OCR、标记、屏幕标尺、智能橡皮擦：新的 macOS 免费截图工具 - 小众软件</a></li></ul>`,26),n=[r];function l(h,p,k,o,c,g){return a(),i("div",null,n)}const E=s(t,[["render",l]]);export{y as __pageData,E as default};
