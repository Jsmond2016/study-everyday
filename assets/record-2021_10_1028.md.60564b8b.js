import{_ as s,o as n,c as a,O as l}from"./chunks/framework.6305ff1a.js";const i=JSON.parse('{"title":"1028","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/10/1028.md","filePath":"record-2021/10/1028.md"}'),p={name:"record-2021/10/1028.md"},o=l(`<h1 id="_1028" tabindex="-1">1028 <a class="header-anchor" href="#_1028" aria-label="Permalink to &quot;1028&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/ContainerShip_ZH-CN0850122021_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>问题：打印 pdf 时第二页没有水印</li></ul><p>本地测试打印的时候，第二页是ok 的，服务端的 electron 环境是 2.x 版本的，打印的结果中第二页没有水印，使用的库是 <a href="https://github.com/loadchange/gwm" target="_blank" rel="noreferrer">gwm/github</a></p><p>代码大致为：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// 先插入水印</span></span>
<span class="line"><span style="color:#A6ACCD;">gwm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">creation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">水印</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 默认挂载在 body 上</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 再插入 dom</span></span>
<span class="line"><span style="color:#A6ACCD;">document</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">body</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dom</span></span></code></pre></div><p>这种情况观察页面发现，滚动页面的时候，水印是不滚动的，水印只覆盖了当前屏幕内的元素</p><p>尝试修改为</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">id</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">container</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 先插入水印</span></span>
<span class="line"><span style="color:#A6ACCD;">gwm</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">creation</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">txt</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">水印</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">container</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">) </span><span style="color:#676E95;font-style:italic;">// 默认挂载在 body 上</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 再插入 dom</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> container </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> document</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">querySelector</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">#container</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">container</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">innerHTML </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> dom</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>代码这么写，水印可以跟随着 页面一起滚动，覆盖了所有页面，打印的时候第二页也有水印；</p><p>原因：</p><p>默认情况是在 <code>body</code> 里面新增 一个 固定在页面顶层的 <code>div</code>，这个 <code>div</code> 使用绝对定位的宽高，使用了 <code>inset: 0px !important;</code> 默认宽高就是占满当前屏幕大小；</p><p>可以看到使用 如下 3 行代码 <a href="https://jsbin.com/cawujinali/1/edit?html,css,output" target="_blank" rel="noreferrer">效果</a> ：</p><div class="language-html"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">div</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> blue</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#B2CCD6;">inset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">style</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;"> &gt;&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">body</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>查看这个页面的 <a href="https://loadchange.github.io/gwm/" target="_blank" rel="noreferrer">例子</a>，可以看到第一个 <code>div</code> 元素的样式即是水印样式，手动编辑网页加入很多的 <code>&lt;br&gt;</code> 让内容高于屏幕高度，发现水印的高度不变，但是 body 内的高度变了，<strong>这就是为什么，第二页的内容没有显示出水印了，因为水印高度没有被内容撑开</strong>；</p><p>水印的样式如下：</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">element</span><span style="color:#89DDFF;">.</span><span style="color:#FFCB6B;">style</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">pointer-events</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> none</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">z-index</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">999999</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">animation</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0s</span><span style="color:#A6ACCD;"> ease </span><span style="color:#F78C6C;">0s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> normal none running undefined </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">inset</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0px</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">display</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> block </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">opacity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">1</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">overflow</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> hidden </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">page</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> undefined </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">position</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> fixed </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">transition</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> undefined </span><span style="color:#F78C6C;">0s</span><span style="color:#A6ACCD;"> ease </span><span style="color:#F78C6C;">0s</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">!important</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#B2CCD6;">background</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">url</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxNThweCIgaGVpZ2h0PSIxMDBweCI+CiAgICAgICAgICAgICAgICA8dGV4dCB4PSIwcHgiIHk9IjUwcHgiIGR5PSIxMnB4IgogICAgICAgICAgICAgICAgICAgIHRleHQtYW5jaG9yPSJzdGFydCIKICAgICAgICAgICAgICAgICAgICBzdHJva2U9IiM4YTJiZTIiCiAgICAgICAgICAgICAgICAgICAgc3Ryb2tlLW9wYWNpdHk9IjAuMiIKICAgICAgICAgICAgICAgICAgICBmaWxsPSJub25lIgogICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybT0icm90YXRlKC0xNSwwIDUwKSIKICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodD0iMTAwIgogICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZT0iMTIiCiAgICAgICAgICAgICAgICAgICAgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiCiAgICAgICAgICAgICAgICAgICAgPgogICAgICAgICAgICAgICAgICAgIDIwMjEvMTAvMjggVG9wIHNlY3JldAogICAgICAgICAgICAgICAgPC90ZXh0PgogICAgICAgICAgICA8L3N2Zz4=</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/7023208826472005668" target="_blank" rel="noreferrer">JavaScript算法基础及面试总结（1w1字）</a> 作者做了各个专题的分类，整理的很有序</li><li><a href="https://juejin.cn/post/6971370594117877796" target="_blank" rel="noreferrer">手把手教你搭建一个无框架埋点体系</a></li><li><a href="https://juejin.cn/post/6872398266642726926" target="_blank" rel="noreferrer">项目实战-埋点系统初探</a></li></ul>`,20),e=[o];function t(c,r,C,D,y,A){return n(),a("div",null,e)}const g=s(p,[["render",t]]);export{i as __pageData,g as default};
