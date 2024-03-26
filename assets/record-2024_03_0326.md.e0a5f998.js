import{_ as s,o as a,c as l,V as n}from"./chunks/framework.e0e258e1.js";const C=JSON.parse('{"title":"0326 今日总结","description":"","frontmatter":{},"headers":[],"relativePath":"record-2024/03/0326.md","filePath":"record-2024/03/0326.md"}'),e={name:"record-2024/03/0326.md"},o=n(`<h1 id="_0326-今日总结" tabindex="-1">0326 今日总结 <a class="header-anchor" href="#_0326-今日总结" aria-label="Permalink to &quot;0326 今日总结&quot;">​</a></h1><p><img src="https://cn.bing.com/th?id=OHR.HangRaiVietnam_EN-US2418713642_UHD.jpg" alt=""></p><p><strong>关键词：</strong></p><h2 id="今日工作" tabindex="-1">今日工作 <a class="header-anchor" href="#今日工作" aria-label="Permalink to &quot;今日工作&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><ul><li><a href="https://stackoverflow.com/questions/43230765/typescript-react-access-component-property-types" target="_blank" rel="noreferrer">reactjs - Typescript React: Access component property types - Stack Overflow</a></li></ul><h3 id="问题1-react-ts-如何获取组件的-props-类型" tabindex="-1">问题1：React + TS，如何获取组件的 props 类型； <a class="header-anchor" href="#问题1-react-ts-如何获取组件的-props-类型" aria-label="Permalink to &quot;问题1：React + TS，如何获取组件的 props 类型；&quot;">​</a></h3><p>先说答案：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AA</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ComponentProps</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ElementRef</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;;</span></span></code></pre></div><p>查看示例：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RefProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">highLight</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeBlockProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">title</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CodeBlock </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> React</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forwardRef</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">RefProps</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeBlockProps</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">props</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">ref</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> (</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">ref</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">ref</span><span style="color:#89DDFF;">} </span><span style="color:#C792EA;">className</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">CodeBlock</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">props</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">children</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">))</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取组件的 props</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">AA</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ComponentProps</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 获取 使用 forwardRef 包裹的组件的 ref props</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">BB</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ElementRef</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeRefProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ElementRef</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeProps</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">React</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">ComponentProps</span><span style="color:#89DDFF;">&lt;typeof</span><span style="color:#A6ACCD;"> CodeBlock</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ref</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">RefObject</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">CodeRefProps</span><span style="color:#89DDFF;">&gt;;</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EE</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">CodeProps</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ref</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">][</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">current</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">] </span><span style="color:#676E95;font-style:italic;">// 这里的结果是 ref 类型 或 null，所以不能继续往后取属性了</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EE</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> b </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> a</span><span style="color:#89DDFF;">?.</span><span style="color:#82AAFF;">highLight</span><span style="color:#A6ACCD;">() </span><span style="color:#676E95;font-style:italic;">// ...可以提示 ref 的类型</span></span></code></pre></div><p>参考资料：</p><ul><li><a href="https://stackoverflow.com/questions/43230765/typescript-react-access-component-property-types" target="_blank" rel="noreferrer">Typescript React: Access component property types</a></li><li><a href="https://legacy.reactjs.org/docs/forwarding-refs.html" target="_blank" rel="noreferrer">Forwarding Refs</a></li></ul><h3 id="问题2-npm-切换到-pnpm-注意问题" tabindex="-1">问题2：npm 切换到 pnpm 注意问题 <a class="header-anchor" href="#问题2-npm-切换到-pnpm-注意问题" aria-label="Permalink to &quot;问题2：npm 切换到 pnpm 注意问题&quot;">​</a></h3><p>近期公司项目切换包管理器 npm 到 pnpm，出现点问题，记录一下；</p><p>类似遮掩的错误：<code>ERR_PNPM_FROZEN_LOCKFILE_WITH_OUTDATED_LOCKFILE</code> ，实际上是因为切换了 包管理器，同时生成了 <code>pnpm-lock</code> 文件和旧的 <code>package-lock.json</code> 文件，导致 pnpm 执行的时候不知道选择哪个作为依据，删除旧的 <code>package-lock.json</code> 即可</p><ul><li><a href="https://www.jianshu.com/p/0b32927caae0" target="_blank" rel="noreferrer">ERR_PNPM_FROZEN_LOCKFILE_WITH_OUTDATED_LOCKFILE</a></li></ul><h3 id="问题3-antd-table-使用的列使用-ellipsis-true-自动省略属性-tooltip-导致位置弹窗错位" tabindex="-1">问题3：antd table 使用的列使用 ellipsis: true 自动省略属性 + Tooltip 导致位置弹窗错位 <a class="header-anchor" href="#问题3-antd-table-使用的列使用-ellipsis-true-自动省略属性-tooltip-导致位置弹窗错位" aria-label="Permalink to &quot;问题3：antd table 使用的列使用 ellipsis: true 自动省略属性 + Tooltip 导致位置弹窗错位&quot;">​</a></h3><ul><li><a href="https://blog.csdn.net/weixin_40795574/article/details/113929237" target="_blank" rel="noreferrer">antd table 使用的列使用 ellipsis: true 自动省略属性 + Tooltip 导致位置弹窗错位-CSDN博客</a></li></ul><p>答案：<a href="https://ant-design.antgroup.com/components/table-cn" target="_blank" rel="noreferrer">https://ant-design.antgroup.com/components/table-cn</a></p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Long Column</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">dataIndex</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">address</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">key</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">address 4</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 如：下面的代码</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">ellipsis</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#FFCB6B;">showTitle</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#FFCB6B;">render</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">address</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> (</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Tooltip</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">placement</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">topLeft</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">title</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;">address</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Tooltip</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#F07178;">    )</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span></code></pre></div><p>同时，在使用 Tooltip 组件的时候，若在 Modal 框内使用，需要注意层级，可以设置 <code>z-index</code>，一般 antd 的 Modal 框层级是 1000；</p><p>今天测试就提了一个 bug，嵌套的 2 个 Modal 里的 Tooltip 内容，显示在中间层被覆盖了，设置 <code>z-index</code> 即可；</p><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文，专题好文</p></blockquote><h3 id="top3" tabindex="-1">TOP3 <a class="header-anchor" href="#top3" aria-label="Permalink to &quot;TOP3&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7318561797451939881" target="_blank" rel="noreferrer">2023 前端年度技术总结 - 掘金</a> <s>卷王</s>大佬的年终技术总结</li><li><a href="https://juejin.cn/post/7129298214959710244" target="_blank" rel="noreferrer">一文教你搞定所有前端鉴权与后端鉴权方案，让你不再迷惘</a></li><li><a href="https://insights.thoughtworks.cn/front-end-development-web-accessibility-guide/" target="_blank" rel="noreferrer">前端无障碍开发指南 - Thoughtworks洞见</a></li></ul><h3 id="英文推荐" tabindex="-1">英文推荐 <a class="header-anchor" href="#英文推荐" aria-label="Permalink to &quot;英文推荐&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7041893274566524958" target="_blank" rel="noreferrer">props drilling(props钻取) - 掘金</a> 学习知识点 props drilling</li></ul><h3 id="其他好文" tabindex="-1">其他好文 <a class="header-anchor" href="#其他好文" aria-label="Permalink to &quot;其他好文&quot;">​</a></h3><ul><li><a href="https://juejin.cn/post/7343902139821785124?searchId=20240316202938C90B0A7501A292AA5533" target="_blank" rel="noreferrer">2024年大龄程序员不得不面对的尴尬，也算是过来人的经验 - 掘金</a></li><li><a href="https://juejin.cn/post/7336761948065529907" target="_blank" rel="noreferrer">离职绩效被打C与2023年总结 - 掘金</a></li></ul><h2 id="项目-博客推荐" tabindex="-1">项目/博客推荐 <a class="header-anchor" href="#项目-博客推荐" aria-label="Permalink to &quot;项目/博客推荐&quot;">​</a></h2><blockquote><p>值得学习 作者/项目/工具等</p></blockquote><h3 id="博客" tabindex="-1">博客 <a class="header-anchor" href="#博客" aria-label="Permalink to &quot;博客&quot;">​</a></h3><ul><li><a href="https://r9pwpn536h.feishu.cn/docs/doccnKYAm5eIdsMdcrPEqegntAd" target="_blank" rel="noreferrer">⁢天高任鸟飞，海阔凭鱼游 - 飞书云文档</a> 前端重要知识点总结，可用于复习，面试；来源于小红书；</li><li><a href="https://chodocs.cn/" target="_blank" rel="noreferrer">ChoDocs | 一站式前端内容网站，包括学习路线、知识体系</a></li></ul><h3 id="项目" tabindex="-1">项目 <a class="header-anchor" href="#项目" aria-label="Permalink to &quot;项目&quot;">​</a></h3><ul><li><a href="https://github.com/pure-admin/vue-pure-admin" target="_blank" rel="noreferrer">pure-admin/vue-pure-admin: 🔥 全面ESM+Vue3+Vite+Element-Plus+TypeScript编写的一款后台管理系统（兼容移动端）</a> 优秀的开源项目</li></ul><h3 id="技术点-前端-word-在线编辑和导出" tabindex="-1">技术点-前端 word 在线编辑和导出 <a class="header-anchor" href="#技术点-前端-word-在线编辑和导出" aria-label="Permalink to &quot;技术点-前端 word 在线编辑和导出&quot;">​</a></h3><ul><li><a href="https://gitee.com/huangshuxin/word-online" target="_blank" rel="noreferrer">word文档在线编辑项目</a></li><li><a href="https://docx.js.org/#/" target="_blank" rel="noreferrer">Getting Started</a></li></ul><h3 id="astro-技术搭建博客" tabindex="-1">astro 技术搭建博客 <a class="header-anchor" href="#astro-技术搭建博客" aria-label="Permalink to &quot;astro 技术搭建博客&quot;">​</a></h3><ul><li><a href="https://blogster-sleek.netlify.app/" target="_blank" rel="noreferrer">Captain Awesome | Web Ninja</a></li><li><a href="https://github.com/satnaing/astro-paper" target="_blank" rel="noreferrer">satnaing/astro-paper: A minimal, accessible and SEO-friendly Astro blog theme</a></li><li><a href="https://xiaoshu.zhubai.love/posts/2236736097726132224" target="_blank" rel="noreferrer">Astro 搭建个人博客 | 一颗小树</a></li><li><a href="https://github.com/GuoguoDad/jd_mall" target="_blank" rel="noreferrer">开源项目 | GuoguoDad/jd_mall: 🔥🔥高仿京东商城App，具有完整的结构，代码整洁规范，结构清晰，集成Flutter模块，具备React-Native热更功能... 同款Flutter版本（ https://github.com/GuoguoDad/jd_mall_flutter.git ）</a></li><li><a href="https://docs.astro.build/zh-cn/tutorial/0-introduction/" target="_blank" rel="noreferrer">搭建你的 Astro 博客 | Docs</a></li><li><a href="https://github.com/austin2035/blog" target="_blank" rel="noreferrer">austin2035/blog: 分享我经历过的事情、学习过的知识、发现的好东西。</a></li></ul><h3 id="好看的-portfolio-和博客" tabindex="-1">好看的 portfolio 和博客 <a class="header-anchor" href="#好看的-portfolio-和博客" aria-label="Permalink to &quot;好看的 portfolio 和博客&quot;">​</a></h3><ul><li><a href="https://leoku.dev/" target="_blank" rel="noreferrer">陈梓聪的网站·作品集</a></li><li><a href="https://leoku.dev/about" target="_blank" rel="noreferrer">关于本站 - 陈梓聪的网站·作品集</a> 优秀的大佬</li><li><a href="https://wooorm.com/" target="_blank" rel="noreferrer">@wooorm | wooorm.com</a></li><li><a href="https://www.joshwcomeau.com/effective-portfolio/download-book/" target="_blank" rel="noreferrer">How to Build an Effective Dev Portfolio</a></li></ul><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><ul><li><p><a href="https://www.designsystemhunt.com/?next=2" target="_blank" rel="noreferrer">这个网站收集各种设计系统（design system），已经有130多个 | DesignSystemHunt.com</a></p></li><li><p><a href="https://www.sidebrowser.xyz/" target="_blank" rel="noreferrer">一个浏览器插件，允许在浏览器的侧边栏打开网页 | Sidebrowser - Browse Seamlessly on the Side.</a>，<a href="https://chromewebstore.google.com/detail/sidebartab-pin-chatgpt-or/acghhljehhigfeinngmggkpgbacpikfe" target="_blank" rel="noreferrer">安装地址</a></p></li><li><p>工具集：<a href="https://twitter.com/vikingmute/status/1769540841553772726" target="_blank" rel="noreferrer">来源-twitter/@viking</a></p><ul><li>使用 homebrew bundle 安装所有的 GUI</li><li>使用 nix 管理所有的命令行应用 <a href="https://nix.dev" target="_blank" rel="noreferrer">https://nix.dev</a></li><li>使用 dotfiles 管理各种配置。</li><li>相关资料： <ul><li><a href="https://nix.dev/tutorials/first-steps/ad-hoc-shell-environments" target="_blank" rel="noreferrer">https://nix.dev/tutorials/first-steps/ad-hoc-shell-environments</a></li><li><a href="https://github.com/theowenyoung/home" target="_blank" rel="noreferrer">https://github.com/theowenyoung/home</a></li></ul></li></ul></li><li><p><a href="https://blog.csdn.net/moshowgame/article/details/134389465" target="_blank" rel="noreferrer">Windows文件夹目录大小分析工具WizTree_windows 显示 文件夹 大小 工具-CSDN博客</a></p></li><li><p><a href="https://mp.weixin.qq.com/s?__biz=MzU2NTAzNzYzMg==&amp;mid=2247486394&amp;idx=1&amp;sn=6eeb42a1c169e0322794563c3acb4832&amp;chksm=fc409495cb371d8311be016d48c56ca3b3ff4f1eeba856392fa4df8ee469bc5a5b0aa4a97b1a&amp;scene=21#wechat_redirect" target="_blank" rel="noreferrer">警告！千万别让你女朋友在你电脑上打开这个软件！</a></p></li><li><p><a href="https://github.com/redtrillix/SpaceSniffer" target="_blank" rel="noreferrer">windows 磁盤分析工具 | SpaceSniffer</a> 分析了一下 windows 电脑的内存占用，准备清理一下 C 盘，发现 yarn 这个包管理器，占了30G，内存占用榜排名第二！！！</p></li></ul><h3 id="windows-升级-11" tabindex="-1">windows 升级 11 <a class="header-anchor" href="#windows-升级-11" aria-label="Permalink to &quot;windows 升级 11&quot;">​</a></h3><p>我的电脑无法升级 11，查了一下是硬件问题：</p><ul><li><a href="https://www.dell.com/community/zh/conversations/latitude-%E7%AC%94%E8%AE%B0%E6%9C%AC/latitude-14-3490%E6%88%90%E5%8A%9F%E5%8D%87%E7%BA%A7win-11/647f9783f4ccf8a8dea821e7#M1051" target="_blank" rel="noreferrer">‎Latitude 14-3490成功升级Win 11 | DELL Technologies</a></li><li><a href="https://www.dell.com/support/kbdoc/zh-cn/000189676/windows-10-%E5%A6%82%E4%BD%95-%E5%90%AF%E7%94%A8-tpm-%E5%8F%97%E4%BF%A1%E4%BB%BB%E7%9A%84-%E5%B9%B3%E5%8F%B0-%E6%A8%A1%E5%9D%97" target="_blank" rel="noreferrer">如何启用 TPM（受信任的平台模块） | Dell 中国</a></li></ul><h3 id="有趣的东西" tabindex="-1">有趣的东西 <a class="header-anchor" href="#有趣的东西" aria-label="Permalink to &quot;有趣的东西&quot;">​</a></h3><ul><li><a href="https://mjcn.club/" target="_blank" rel="noreferrer">壁纸样机生成器 - iPhone、iPad、Mac 锁屏/桌面模板</a></li><li><a href="https://github.com/hehehai/x-hiring" target="_blank" rel="noreferrer">hehehai/x-hiring: 🤗 每日最新招聘信息，使用 Google AI 提取摘要</a></li><li><a href="https://github.com/struy-cn/Y-TOC" target="_blank" rel="noreferrer">struy-cn/Y-TOC</a> 一个内容目录海报美化生成工具。</li></ul>`,50),p=[o];function t(r,c,i,F,y,D){return a(),l("div",null,p)}const d=s(e,[["render",t]]);export{C as __pageData,d as default};
