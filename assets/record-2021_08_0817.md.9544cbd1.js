import{_ as s,o as a,c as n,O as l}from"./chunks/framework.6305ff1a.js";const C=JSON.parse('{"title":"0817","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/08/0817.md","filePath":"record-2021/08/0817.md"}'),o={name:"record-2021/08/0817.md"},p=l(`<h1 id="_0817" tabindex="-1">0817 <a class="header-anchor" href="#_0817" aria-label="Permalink to &quot;0817&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/FirstCliff_ZH-CN2308482395_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>今天主要开了个会，过了下前端设计方案</li></ul><h2 id="反思" tabindex="-1">反思 <a class="header-anchor" href="#反思" aria-label="Permalink to &quot;反思&quot;">​</a></h2><p>同样设设计方案，后端的设计方案和详细程度要高很多，包括：</p><ul><li>业务原型 &amp; 业务流程</li><li>数据库设计</li><li>实体设计</li><li>接口设计 等</li></ul><p>同事分享了他的设计方案，其中主要分析的就是接口，但是，他做的比我好多了：</p><ul><li>接口名</li><li>入参</li><li>出参/异常返回状态码说明（删除不存在的数据返回指定状态码，删除成功提示灯），其中详细给出了具体的字段和对应的结构</li><li>数据聚合说明</li></ul><p>感觉就是写的很棒，自己的差距还是很大。</p><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6995334897065787422#heading-2" target="_blank" rel="noreferrer">基础很好？总结了38个ES6-ES12的开发技巧，倒要看看你能拿几分？</a></li></ul><p>比较有意思的是这个写法：</p><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">time</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">毫秒后我成功啦！！！</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">asyncFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> [</span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">500</span><span style="color:#F07178;">)]</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">for</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> (</span><span style="color:#C792EA;">let</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">of</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">arr</span><span style="color:#F07178;">) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">x</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">asyncFn</span><span style="color:#A6ACCD;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">3000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">1000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">1000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">2000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#A6ACCD;">500毫秒后我成功啦！！！</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 等价于</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">time</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">new</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">resolve</span><span style="color:#89DDFF;">,</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;font-style:italic;">reject</span><span style="color:#89DDFF;">)</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">setTimeout</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">\`\${</span><span style="color:#A6ACCD;">time</span><span style="color:#89DDFF;">}</span><span style="color:#C3E88D;">毫秒后我成功啦！！！</span><span style="color:#89DDFF;">\`</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">},</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">time</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">async</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">asyncFn</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">()</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;font-style:italic;">// 排队</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data1</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">3000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data1</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 3秒后 3000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data2</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">1000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data2</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 再过1秒 1000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#C792EA;">const</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">data3</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">=</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;font-style:italic;">await</span><span style="color:#F07178;"> </span><span style="color:#82AAFF;">fn</span><span style="color:#F07178;">(</span><span style="color:#F78C6C;">2000</span><span style="color:#F07178;">)</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">console</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">log</span><span style="color:#F07178;">(</span><span style="color:#A6ACCD;">data3</span><span style="color:#F07178;">) </span><span style="color:#676E95;font-style:italic;">// 再过2秒 2000毫秒后我成功啦！！！</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div><ul><li><a href="https://mp.weixin.qq.com/s/_Hyn_sb8mki6aYTXwVZe6g" target="_blank" rel="noreferrer">万字总结的Webpack 核心原理，虽然可能快过时了</a></li><li><a href="https://juejin.cn/post/6996819856033054756" target="_blank" rel="noreferrer">设计方案，写了才知道有多香</a> 可以作为前端设计方案的参考资料</li><li><a href="https://juejin.cn/post/6923922117268340750" target="_blank" rel="noreferrer">让你选一句话裱起来，你会选什么？</a> 我会选 <code>stay hungry, stay foolish</code></li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><h2 id="好用的工具" tabindex="-1">好用的工具 <a class="header-anchor" href="#好用的工具" aria-label="Permalink to &quot;好用的工具&quot;">​</a></h2><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2><ul><li>完善 前端技术设计 文章</li></ul>`,19),e=[p];function t(c,r,y,F,i,D){return a(),n("div",null,e)}const f=s(o,[["render",t]]);export{C as __pageData,f as default};
