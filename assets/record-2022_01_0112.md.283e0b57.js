import{_ as s,o as a,c as n,O as l}from"./chunks/framework.6305ff1a.js";const o="/study-everyday/assets/Snipaste_2022-01-12_21-38-58.34f4ee0f.png",p="/study-everyday/assets/Snipaste_2022-01-12_21-40-32.887d0f86.png",u=JSON.parse('{"title":"0112","description":"","frontmatter":{},"headers":[],"relativePath":"record-2022/01/0112.md","filePath":"record-2022/01/0112.md"}'),e={name:"record-2022/01/0112.md"},t=l('<h1 id="_0112" tabindex="-1">0112 <a class="header-anchor" href="#_0112" aria-label="Permalink to &quot;0112&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/OtterCliff_ZH-CN3062794263_1920x1080.jpg" alt=""></p><h2 id="_0112-今日计划" tabindex="-1">0112 今日计划 <a class="header-anchor" href="#_0112-今日计划" aria-label="Permalink to &quot;0112 今日计划&quot;">​</a></h2><blockquote><p>每天工作前/前一天晚上 做好计划：重点工作、自我提升、其他，<a href="https://github.com/cuixiaorui/study-every-day/issues" target="_blank" rel="noreferrer">提交地址</a></p></blockquote><p><strong>重点工作</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" checked="" disabled="" type="checkbox"> 待提测，进行交叉测试；</li></ul><h2 id="今日总结" tabindex="-1">今日总结 <a class="header-anchor" href="#今日总结" aria-label="Permalink to &quot;今日总结&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><ul><li>AntD form 表单对于 DatePicker.RangePicker 非空校验失败问题；</li></ul><p>相关链接： <a href="https://ant-design.gitee.io/components/date-picker-cn/#header" target="_blank" rel="noreferrer">DatePicker-AntD</a></p><p>现象：</p><p><img src="'+o+`" alt=""></p><p>代码：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">form</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不能为空</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form.Item</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">日期时间</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不能为空</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">  &gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">DatePicker.RangePicker</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validateFields</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">提交</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>这个代码，点击按钮 校验表单的时候，日期组件不会有提示空值提示；</p><p>原因：</p><ul><li>因为 DatePicker.RangePicker 的值比较特殊，是个数组， 不是 <code>null | undefined</code>；</li><li>猜测 <code>form.validateFields</code> 是找到这个表单控件 <code>name=&quot;date&quot;</code>， 得到值是一个 <code>[undefined, undefined]</code>，结果不是 <code>null | undefined</code> 所以认为日期组件不是空值；</li></ul><p>需要自定义校验：</p><div class="language-tsx"><button title="Copy Code" class="copy"></button><span class="lang">tsx</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">form</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">form</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">文字</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">text</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">required</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">true</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">message</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不能为空</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Input</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Form.Item</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">label</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">日期时间</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">name</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">date</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">required</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">initialValue</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">undefined,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">undefined</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">rules</span><span style="color:#89DDFF;">={</span><span style="color:#A6ACCD;">[</span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">validator</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">rule</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">value</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#F07178;"> (</span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">?.</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">0</span><span style="color:#F07178;">] </span><span style="color:#89DDFF;">&amp;&amp;</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">value</span><span style="color:#89DDFF;">?.</span><span style="color:#F07178;">[</span><span style="color:#F78C6C;">1</span><span style="color:#F07178;">]) </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">        </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">resolve</span><span style="color:#F07178;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#F07178;">      </span><span style="color:#89DDFF;font-style:italic;">return</span><span style="color:#F07178;"> </span><span style="color:#FFCB6B;">Promise</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">reject</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">不能为空</span><span style="color:#89DDFF;">&#39;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#89DDFF;">}}</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">}&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">DatePicker.RangePicker</span><span style="color:#89DDFF;"> /&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form.Item</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;"> </span><span style="color:#C792EA;">onClick</span><span style="color:#89DDFF;">={()</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> form</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">validateFields</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">}&gt;</span><span style="color:#A6ACCD;">提交</span><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Button</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#FFCB6B;">Form</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div><p>此时效果为：</p><p><img src="`+p+'" alt=""></p><p><strong>拓展：</strong> 猜想：其他形如这种数组形式的值的表单控件，是不是都会有这个问题呢？</p><hr><h2 id="手撕代码-算法" tabindex="-1">手撕代码/算法 <a class="header-anchor" href="#手撕代码-算法" aria-label="Permalink to &quot;手撕代码/算法&quot;">​</a></h2><blockquote><p>防抖节流等各种手写，http和网络，浏览器原理，性能优化，Webpack</p></blockquote><h2 id="好文推荐-面经相关-博客项目推荐" tabindex="-1">好文推荐/面经相关/博客项目推荐 <a class="header-anchor" href="#好文推荐-面经相关-博客项目推荐" aria-label="Permalink to &quot;好文推荐/面经相关/博客项目推荐&quot;">​</a></h2><blockquote><p>有感好文，面经，博客，项目等</p></blockquote><h2 id="其他-todos" tabindex="-1">其他/TODOS <a class="header-anchor" href="#其他-todos" aria-label="Permalink to &quot;其他/TODOS&quot;">​</a></h2>',28),r=[t];function c(F,D,y,C,i,A){return a(),n("div",null,r)}const m=s(e,[["render",c]]);export{u as __pageData,m as default};
