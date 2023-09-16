import{_ as r,H as n,o,c as i,C as e,a,J as s,V as l}from"./chunks/framework.e0e258e1.js";const p="/study-everyday/assets/warblerfe-blog.756c62cd.png",c="/study-everyday/assets/vitepress-sandbox.2e16e974.png",d="/study-everyday/assets/vitepress-sandbox-result.a111aba2.png",D=JSON.parse('{"title":"0916 今日总结","description":"","frontmatter":{},"headers":[],"relativePath":"record-2023/09/0916.md","filePath":"record-2023/09/0916.md"}'),h={name:"record-2023/09/0916.md"},u=l('<h1 id="_0916-今日总结" tabindex="-1">0916 今日总结 <a class="header-anchor" href="#_0916-今日总结" aria-label="Permalink to &quot;0916 今日总结&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/SplugenPass_ZH-CN8347591461_1920x1080.jpg" alt=""></p><h2 id="今日工作" tabindex="-1">今日工作 <a class="header-anchor" href="#今日工作" aria-label="Permalink to &quot;今日工作&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><p>周末快乐 😄 ，现在梳理下这几天的工作；</p><h3 id="问题1-多项目并行如何快速切换项目和分支" tabindex="-1">问题1 多项目并行如何快速切换项目和分支 <a class="header-anchor" href="#问题1-多项目并行如何快速切换项目和分支" aria-label="Permalink to &quot;问题1 多项目并行如何快速切换项目和分支&quot;">​</a></h3><p>同事最近比较忙，遇到这样的情形：做迭代 A 的时候，上一个迭代 B 有 bug，或者 其他 C 有问题需要修复，因此需要快速切换项目；</p><p>可能是同一个项目不同分支，也可能是不同项目不同分支；他有个烦恼的点：</p><blockquote><p>对于同一个项目不同分支；因为项目是 基于 webpack 的，每次切换分支需要（可能需要安装依赖）重新 启动 webpack，但是 启动速度又不是很快，等待时间很繁琐；</p></blockquote><p>对于这种情况，我的想法是：</p><ul><li>最简单：建一个新的文件夹，下载这个仓库的代码，并切换分支；开一个新的 VS Code 窗口；</li><li>优化 webpack 启动速度: webpack 启动速度还是慢的，只有 热更新才会快；但是他切换项目需要重启项目，自然也就只能慢了；可以考虑 开发环境使用 Vite，打包使用 rollup 或者 webpack；</li></ul><p>同事研究的方法是，看 git 的自带一些特性能否支持；</p><p><strong>拓展资料：</strong></p><ul><li><a href="https://juejin.cn/post/7276260308515274792" target="_blank" rel="noreferrer">VSCode插件：简单增强 VSCode 的 Control + R - 掘金</a></li><li><a href="https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%85%B3%E4%BA%8E%E7%89%88%E6%9C%AC%E6%8E%A7%E5%88%B6" target="_blank" rel="noreferrer">git-版本控制</a></li></ul><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文，专题好文</p></blockquote><h3 id="top3" tabindex="-1">TOP3 <a class="header-anchor" href="#top3" aria-label="Permalink to &quot;TOP3&quot;">​</a></h3>',17),g=e("a",{href:"https://s3tlxskbq3.feishu.cn/docx/NyPqdCKraoXz9gxNVCfcIFdnnAc",target:"_blank",rel:"noreferrer"},"‍​⁡The Document is All You Need！零基础入门大语言模型（Large Language Model, LLM)底层技术原理",-1),b=e("li",null,[e("a",{href:"https://juejin.cn/post/7275943591410483258",target:"_blank",rel:"noreferrer"},"对不起 localStorage，现在我爱上 localForage了！ - 掘金"),a(" 介绍 localForage 的使用；第一次知道这个东西；")],-1),f=e("li",null,[e("a",{href:"https://juejin.cn/post/7277799192961925172",target:"_blank",rel:"noreferrer"},"前端必学的桌面开发：Electron教程（1W多字超详细） - 掘金")],-1),_=e("a",{href:"https://juejin.cn/post/7275980024262443068",target:"_blank",rel:"noreferrer"},"搭建sentry监控平台，实现前后端异常监控。——从零开始搭建一个高颜值后台管理系统全栈框架(十六) - 掘金",-1),C=l(`<h3 id="英文推荐" tabindex="-1">英文推荐 <a class="header-anchor" href="#英文推荐" aria-label="Permalink to &quot;英文推荐&quot;">​</a></h3><ul><li><a href="https://javinpaul.medium.com/5-best-javascript-unit-testing-courses-for-beginners-and-experienced-developers-in-2023-e98fd117c34f" target="_blank" rel="noreferrer">5 Best JavaScript Unit Testing Courses for Beginners and Experienced Developers in 2023 | by javinpaul | Sep, 2023 | Medium</a> 一些前端测试的课程介绍；看了下，对比国内一些老师的单测课程便宜一点，虽然是美元，但是单课程 70 刀（500 RMB）左右；就是不知道课程内容如何；</li><li><a href="https://blog.devgenius.io/vscode-tips-tricks-98c6e2258626" target="_blank" rel="noreferrer">10 essential VS Code tips &amp; tricks for greater productivity | by Coding Beauty | Aug, 2023 | Dev Genius</a> 10个提升 VS Code 生产力的小技巧；</li><li><a href="https://segmentfault.com/a/1190000044154394#item-6" target="_blank" rel="noreferrer">javascript - 提高生产力的10个必备VS Code技巧和窍门 - 终身学习者 - SegmentFault 思否</a> 对比下翻译；</li></ul><h3 id="其他好文" tabindex="-1">其他好文 <a class="header-anchor" href="#其他好文" aria-label="Permalink to &quot;其他好文&quot;">​</a></h3><ul><li><a href="https://segmentfault.com/a/1190000044214953" target="_blank" rel="noreferrer">运维 - shell 脚本如何编写-致初学者 - sanri1993 - SegmentFault 思否</a></li><li><a href="https://blog.csdn.net/weixin_54345825/article/details/126331345" target="_blank" rel="noreferrer">记录gt、ge、lt、le、eq、ne的含义_ge lt_Java菜勾的博客-CSDN博客</a></li></ul><p><strong>解释如下：</strong></p><ul><li><code>gt</code>: 符号 <code>&gt;</code> 意思：greater than</li><li><code>ge</code>: 符号 <code>&gt;=</code> 意思：greater than or equals to</li><li><code>lt</code>: 符号 <code>&lt;</code> 意思：less than</li><li><code>le</code>: 符号 <code>&lt;=</code> 意思：less than or equals to</li><li><code>eq</code>: 符号 <code>=</code> 意思：equals</li><li><code>nq</code>: 符号 <code>!=</code> 意思：not equals</li></ul><h3 id="好文-项目搭建-vite-react-git" tabindex="-1">好文-项目搭建-Vite | React | Git <a class="header-anchor" href="#好文-项目搭建-vite-react-git" aria-label="Permalink to &quot;好文-项目搭建-Vite | React | Git&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7277490138518159379" target="_blank" rel="noreferrer">做了几年前端，别跟我说没配置过webpack - 掘金</a> 一篇配置 webpack 常用 loader 和插件的文章，价值点在评论区一个问题：</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">有个疑问，plugin和loader是谁先过呢？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">loader是在编译模块时发挥作用，而plugins可在整个构建过程中发生作用，因此可认为loader在plugin之前执行</span></span></code></pre></div><ul><li><a href="https://juejin.cn/post/7240838046789812282" target="_blank" rel="noreferrer">2023盛夏版：轻松搞定基于Vite4的React项目全家桶 - 掘金</a> 价值点在评论区一位大佬的留言，vite 优化项目还有很多事情可以做；</li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">1. 本地开发模式支持https（可通过env进行配置）</span></span>
<span class="line"><span style="color:#A6ACCD;">2. 支持路由keeplive功能（forward/backward/always）</span></span>
<span class="line"><span style="color:#A6ACCD;">3. 增加commitlint/husky</span></span>
<span class="line"><span style="color:#A6ACCD;">4. 将反锁的redux-toolkit换成valtio或者zustand</span></span>
<span class="line"><span style="color:#A6ACCD;">5. morkjs对于生成各种动态数据很好，但是可以增加mork服务，并随着npm run dev一起启动，共享同一个端口</span></span>
<span class="line"><span style="color:#A6ACCD;">6. 基于node的mork服务调试不友好，可以尝试改成msw，它基于webservice，可以天然的直接的使用浏览器debug，而且支持prod构建，vitest/jest</span></span>
<span class="line"><span style="color:#A6ACCD;">7. 支持vscode保存时，自动执行eslint规则进行代码规范的修复</span></span>
<span class="line"><span style="color:#A6ACCD;">8. @vite/plugin-legacy启用后，打包会被拖的很慢，特别是巨石项目，如何替代</span></span>
<span class="line"><span style="color:#A6ACCD;">9. 如果第三方包中存在require，打包怎么兼容？</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">其实还有很多优化，暂时就不说太多了</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span>
<span class="line"><span style="color:#A6ACCD;">这位大佬的 博客主页：https://juejin.cn/user/2823201591402990/posts</span></span></code></pre></div><ul><li><a href="https://blog.csdn.net/q411020382/article/details/132042265" target="_blank" rel="noreferrer">一个 git 仓库下拥有多个项目的 git hooks 配置方案_git 仓库 多个项目_谭光志的博客-CSDN博客</a> 多个子项目情况下，使用 bash 脚本配置 git hooks 搭配 husky 做工程化配置；</li></ul><h2 id="项目-博客推荐" tabindex="-1">项目/博客推荐 <a class="header-anchor" href="#项目-博客推荐" aria-label="Permalink to &quot;项目/博客推荐&quot;">​</a></h2><blockquote><p>值得学习 作者/项目/工具等</p></blockquote><h3 id="博客" tabindex="-1">博客 <a class="header-anchor" href="#博客" aria-label="Permalink to &quot;博客&quot;">​</a></h3><p><img src="`+p+'" alt=""></p><ul><li><a href="http://www.warblerfe.top/warblerCenter" target="_blank" rel="noreferrer">warblerfe</a> 值得学习的 个人主页</li></ul><p>建议阅读作者的这篇 <a href="https://juejin.cn/post/7254855511305601080" target="_blank" rel="noreferrer">【年中总结】一个人也要快乐哦 | 2023 年中总结</a></p><h3 id="项目-库" tabindex="-1">项目/库 <a class="header-anchor" href="#项目-库" aria-label="Permalink to &quot;项目/库&quot;">​</a></h3><p><img src="'+c+'" alt=""><img src="'+d+`" alt=""></p><ul><li><p><a href="https://vitepress-sandbox.js-bridge.com/get-started/introduction.html" target="_blank" rel="noreferrer">vitepress-sandbox-plugin</a> 一个 vitepress 插件；效果如上；来源 <a href="https://juejin.cn/post/7243520456979398693#heading-6" target="_blank" rel="noreferrer">前端团队终于有了自己的开发文档</a> 评论区</p></li><li><p><a href="https://github.com/panyushan-jade/react-template-admin" target="_blank" rel="noreferrer">panyushan-jade/react-template-admin: A lightweight React18 backend management template</a> 一个 React 项目模板；使用了如下技术栈：</p></li></ul><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">react18</span></span>
<span class="line"><span style="color:#A6ACCD;">react-router6</span></span>
<span class="line"><span style="color:#A6ACCD;">zustand4</span></span>
<span class="line"><span style="color:#A6ACCD;">vite4</span></span>
<span class="line"><span style="color:#A6ACCD;">axios</span></span>
<span class="line"><span style="color:#A6ACCD;">fakerjs</span></span>
<span class="line"><span style="color:#A6ACCD;">dayjs</span></span></code></pre></div><h3 id="工具-ui-模板" tabindex="-1">工具-UI 模板 <a class="header-anchor" href="#工具-ui-模板" aria-label="Permalink to &quot;工具-UI 模板&quot;">​</a></h3><p>一些优秀的 UI 设计案例作为参考，在写个人项目的时候可以作为参考；以下链接示例包括 PC / H5 端；示例丰富；</p><ul><li><a href="https://www.landingfolio.com/inspiration/landing-page/software" target="_blank" rel="noreferrer">84 Best Software Landing Page Design Inspiration &amp; Examples | Landingfolio</a></li><li><a href="https://uinotes.com/" target="_blank" rel="noreferrer">UI Notes - 真实产品 UI 设计灵感库</a></li><li><a href="https://webframe.xyz/" target="_blank" rel="noreferrer">Beautiful web app screenshots | Webframe</a> 总共有 800+ 设计参考</li><li><a href="https://mobbin.com/browse/android/apps" target="_blank" rel="noreferrer">Browse Android Apps | Mobbin</a> 同样-很多设计案例参考</li></ul><h3 id="工具-提效" tabindex="-1">工具-提效 <a class="header-anchor" href="#工具-提效" aria-label="Permalink to &quot;工具-提效&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7247897453915045949" target="_blank" rel="noreferrer">VsCode前端调试速速上手指南 - 掘金</a></li><li><a href="https://juejin.cn/post/6862341107859062791" target="_blank" rel="noreferrer">详解前端规范工具链落地实战【别让你定的规范只停在口头上】 - 掘金</a></li><li><a href="https://juejin.cn/post/7276628114981388349#heading-9" target="_blank" rel="noreferrer">VSCode 开发提效指南（前端开发版） - 掘金</a> 介绍一些 快捷键、插件的使用</li></ul>`,27);function m(k,A,y,q,v,j){const t=n("Badge");return o(),i("div",null,[u,e("ul",null,[e("li",null,[g,a(" 文章细致而全面，需要深入学习，了解下 AI 知识；"),s(t,{text:"todo"})]),b,f,e("li",null,[_,a(" 试着搭建一套自己玩玩看 "),s(t,{text:"todo"})])]),C])}const w=r(h,[["render",m]]);export{D as __pageData,w as default};
