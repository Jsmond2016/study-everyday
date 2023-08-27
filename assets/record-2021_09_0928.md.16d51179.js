import{_ as a,o as s,c as n,O as e}from"./chunks/framework.6305ff1a.js";const A=JSON.parse('{"title":"0928","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/09/0928.md","filePath":"record-2021/09/0928.md"}'),l={name:"record-2021/09/0928.md"},t=e(`<h1 id="_0928" tabindex="-1">0928 <a class="header-anchor" href="#_0928" aria-label="Permalink to &quot;0928&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/Hatshepsut_ZH-CN4516192627_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>string to dom VS dom to string: 字符串和 dom 转换操作</li></ul><div class="language-javascript"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 字符串转 DOM</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> resStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">&lt;div class=&#39;a-b&#39;&gt;&lt;span class=&#39;title&#39;&gt;\${标题}&lt;/span&gt;&lt;/div&gt;</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> parser </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">DOMParser</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> resDom </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> parser</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">parseFromString</span><span style="color:#A6ACCD;">(str</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">text/html</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 操作和改变 resDom</span></span>
<span class="line"><span style="color:#A6ACCD;">Array</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">from</span><span style="color:#A6ACCD;">(resDom)</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">forEach</span><span style="color:#A6ACCD;">(</span><span style="color:#A6ACCD;font-style:italic;">item</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// dom 操作，替换值等</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// DOM 转 字符串</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> templateStr </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> resDom</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">documentElement</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">outHTML</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 后续其他操作...</span></span></code></pre></div><h2 id="价值思考" tabindex="-1">价值思考 <a class="header-anchor" href="#价值思考" aria-label="Permalink to &quot;价值思考&quot;">​</a></h2><ul><li><a href="https://github.com/zenany/zenany.github.io/blob/master/_posts/about_time_and_knowledge_management.md" target="_blank" rel="noreferrer">关于时间管理和知识管理</a></li><li><a href="https://speakerdeck.com/baidufe/gong-cheng-shi-de-ge-ren-fa-zhan-gui-hua" target="_blank" rel="noreferrer">工程师的个人发展规划</a></li><li><a href="https://www.yuque.com/zenany/up/high_productivity_work" target="_blank" rel="noreferrer">高效工作</a></li></ul><hr><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://zhuanlan.zhihu.com/p/408340406" target="_blank" rel="noreferrer">用200行代码实现一个超小的react</a></li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><ul><li><a href="https://github.com/catdad/canvas-confetti" target="_blank" rel="noreferrer">on-demand confetti gun</a> 好看的烟花粒子库</li><li><a href="https://github.com/linbudu599/Midway-GraphQL-Starter" target="_blank" rel="noreferrer">Midway-GraphQL-Starter</a> midway 和 nest 是有很多相似之处的，可以看看这个项目模板</li><li><a href="https://github.com/klaussinani/signale/blob/master/docs/readme.zh_CN.md" target="_blank" rel="noreferrer">可扩展的日志记录器</a></li><li><a href="https://github.com/unjs/consola" target="_blank" rel="noreferrer">Elegant Console Logger for Node.js and Browser</a> 优雅的日志库</li></ul><h2 id="好用的工具" tabindex="-1">好用的工具 <a class="header-anchor" href="#好用的工具" aria-label="Permalink to &quot;好用的工具&quot;">​</a></h2><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2>`,14),o=[t];function r(p,c,i,h,y,D){return s(),n("div",null,o)}const C=a(l,[["render",r]]);export{A as __pageData,C as default};
