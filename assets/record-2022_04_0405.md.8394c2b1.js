import{_ as s,o as n,c as a,O as l}from"./chunks/framework.6305ff1a.js";const p="/study-everyday/assets/antd-keys.fc62bbe5.png",d=JSON.parse('{"title":"0405 今日总结","description":"","frontmatter":{},"headers":[],"relativePath":"record-2022/04/0405.md","filePath":"record-2022/04/0405.md"}'),o={name:"record-2022/04/0405.md"},e=l('<h1 id="_0405-今日总结" tabindex="-1">0405 今日总结 <a class="header-anchor" href="#_0405-今日总结" aria-label="Permalink to &quot;0405 今日总结&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/Godafoss_ZH-CN9460037606_1920x1080.jpg" alt=""></p><h2 id="今日工作" tabindex="-1">今日工作 <a class="header-anchor" href="#今日工作" aria-label="Permalink to &quot;今日工作&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><ul><li><strong>跨页勾选新方案</strong></li></ul><p>近期发现的好东西, AntD 中的 Table 组件 <a href="https://ant.design/components/table-cn/#header" target="_blank" rel="noreferrer">rowSelection.preserveSelectedRowKeys</a>属性，看到同事有使用到用于实现跨页勾选：</p><p><img src="'+p+`" alt=""></p><p>有了这个字段<code>实现跨页勾选</code>应该方便多了，配置为 <code>true</code> 即可</p><ul><li><strong>使用 less 循环变量提效</strong></li></ul><p>项目中有在使用 <code>less 循环变量</code> 作为提效工具，配置常用的：</p><ol><li>padding / margin</li><li>font-size / font-weight</li><li>width / height</li><li>color / background-color</li><li>flex 属性</li><li>display: hidden, none;</li><li>clearfix</li><li>等等</li></ol><div class="language-less"><button title="Copy Code" class="copy"></button><span class="lang">less</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// font-size: 12-28, 间隔 2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// fz-n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// padding: 2-100</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// pd-n: </span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// pdh-n, pdv-n</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// pdt-n, pdb-n, pdl-n, pdr-n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// margin: 2-100</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// mg-n:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// mgh-n, mgv-n</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// mgt-n, mgb-n, mgl-n, mgr-n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// width: 2-400</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// w-n</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// </span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// @list: red, white, black, green, yellow, blue, purple, grey, brown, pink, gold, orange;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// .generate-columns(length(@list));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// .generate-columns(@n, @i: 1) when (@i =&lt; @n) {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   @v:extract(@list, @i);</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   .g-@{v} {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//      color: @v;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">//   .generate-columns(@n, (@i + 1));</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// }</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">count</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">end) </span><span style="color:#89DDFF;font-style:italic;">when</span><span style="color:#A6ACCD;"> (</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">&lt;=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">end) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;">(</span><span style="color:#F78C6C;">1px</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">count)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">@{prefix}@{count}</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    @{style}</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">d</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">style</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">prefix</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">count </span><span style="color:#89DDFF;">+</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">@</span><span style="color:#A6ACCD;">end)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">margin-left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mgl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">margin-right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mgl</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">margin-top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mgl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">margin-bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> mgl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">padding-left</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pdl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">padding-right</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pdl</span><span style="color:#89DDFF;">,</span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">padding-top</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pdl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">padding-bottom</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> pdl</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">80</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(width</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> w</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(height</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> h</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">400</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#FFCB6B;">.spacing</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">font-size</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> fz</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">12</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">28</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><p>相关文章：</p><ul><li><a href="https://less.bootcss.com/" target="_blank" rel="noreferrer">less 官网</a></li><li><a href="https://juejin.cn/post/6993709586314166309" target="_blank" rel="noreferrer">less学习指南第四期【进阶】| 条件语句和循环语句</a></li><li><a href="https://www.cnblogs.com/byksj/p/14485641.html" target="_blank" rel="noreferrer">less 循环 让公用样式变的更简单</a></li><li><a href="https://juejin.cn/post/6902698973287907336" target="_blank" rel="noreferrer">Less(三) —— 项目中使用到的函数与循环总结</a></li></ul>`,14),t=[e];function c(r,y,D,C,F,i){return n(),a("div",null,t)}const g=s(o,[["render",c]]);export{d as __pageData,g as default};
