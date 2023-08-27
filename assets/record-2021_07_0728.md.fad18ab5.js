import{_ as s,o as a,c as l,O as n}from"./chunks/framework.6305ff1a.js";const C=JSON.parse('{"title":"0728","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/07/0728.md","filePath":"record-2021/07/0728.md"}'),o={name:"record-2021/07/0728.md"},e=n(`<h1 id="_0728" tabindex="-1">0728 <a class="header-anchor" href="#_0728" aria-label="Permalink to &quot;0728&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/CuvervilleIsland_ZH-CN9814166047_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>css 问题：最后一个子元素占据剩余空间 ？(这个问题经常忘记)</li></ul><p>使用 <code>flex: 1;</code> 实现，但是 <code>flex: 1</code> 具体代表什么含义呢？</p><div class="language-css"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">flex: 1;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 等价于 */</span></span>
<span class="line"><span style="color:#A6ACCD;">flex: 1 1 0%;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 具体属性依次为 */</span></span>
<span class="line"><span style="color:#A6ACCD;">flex: none </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-grow</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt; &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-shrink</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt;? </span><span style="color:#89DDFF;">||</span><span style="color:#A6ACCD;"> &lt;</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">flex-basis</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">&gt; </span><span style="color:#89DDFF;">]</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/** 具体属性 */</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-shrink</span><span style="color:#A6ACCD;">: 1; </span><span style="color:#676E95;font-style:italic;">/* default 1 */</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-grow</span><span style="color:#A6ACCD;">: 1;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-basis</span><span style="color:#A6ACCD;">: 0%;  </span><span style="color:#676E95;font-style:italic;">/* default auto */</span></span></code></pre></div><p>具体作用：</p><ul><li>flex-grow: flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。</li><li>flex-shrink: 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小</li><li>flex-basis: flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。<strong>浏览器根据这个属性，计算主轴是否有多余空间</strong>。它的默认值为 auto，即项目的本来大小。</li></ul><p>资料：</p><ul><li><a href="https://zhuanlan.zhihu.com/p/136223806" target="_blank" rel="noreferrer">flex:1 到底代表什么</a></li><li><a href="https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html" target="_blank" rel="noreferrer">Flex 布局教程-阮一峰</a></li><li><a href="https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/" target="_blank" rel="noreferrer">Oh My God，CSS flex-basis 原来有这么多细节-张鑫旭</a></li></ul><p>问题 2：</p><ul><li>dvajs 中获取 state，之前有记录过，在同步操作 reducer 的时候，第一个参数里可以拿到；但是如果在 effects 里面，需要通过 select(state =&gt; state.xxx) 获取。我已开始以为 select 第一个参数 state 是当前 model 的 state，实际上我错了，试错后 打 log 发现，这个 state 是全局的所有 model 都在里面。因此获取当前 mode，需要使用方式为:</li></ul><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">effects</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">*</span><span style="color:#82AAFF;">updateMasterInfo</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">payload</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">call</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">put</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">select</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">currentState</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">select</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">s</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">OptionsConfigState</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">s</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">currentState</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;font-style:italic;">yield</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">put</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      type</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">currentState/updateState</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      payload</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        masterInfo</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span></span></code></pre></div><p>特别需要注意，要加上 <code>yield</code> 关键字，上述三个方法 <code>call, put, select</code> 都是如此</p><p>问题3：<code>:global(){}</code> 覆盖弹 框样式 失败</p><p>使用 css-module 的方式，即 <code>:global()</code> 去替换 AntD 样式，需要注意个问题，就是关于 弹框有关的组件（Modal，Popconfirm，Dropdown等），若要覆盖样式，不是写在某个 组件内去覆盖，而是需要写在最外面，因为 弹框组件都是在最外层的。</p><hr><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://mp.weixin.qq.com/s/Jrr2XixgKEGXn3zU6DP6Mg" target="_blank" rel="noreferrer">8则未必知道且超级实用的纯CSS布局排版技巧 | 网易4年实践</a></li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><h2 id="好用的工具" tabindex="-1">好用的工具 <a class="header-anchor" href="#好用的工具" aria-label="Permalink to &quot;好用的工具&quot;">​</a></h2><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2>`,22),p=[e];function t(r,c,y,i,F,D){return a(),l("div",null,p)}const h=s(o,[["render",t]]);export{C as __pageData,h as default};
