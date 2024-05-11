import{_ as s,c as i,o as a,a3 as n}from"./chunks/framework.B1tUqxYT.js";const y=JSON.parse('{"title":"1220 今日总结","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/12/1220.md","filePath":"record-2021/12/1220.md"}'),h={name:"record-2021/12/1220.md"},l=n(`<h1 id="_1220-今日总结" tabindex="-1">1220 今日总结 <a class="header-anchor" href="#_1220-今日总结" aria-label="Permalink to &quot;1220 今日总结&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/GiantManta_ZH-CN0594951444_1920x1080.jpg" alt=""></p><h2 id="今日工作" tabindex="-1">今日工作 <a class="header-anchor" href="#今日工作" aria-label="Permalink to &quot;今日工作&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><ul><li>代码 review</li></ul><h2 id="今日心情" tabindex="-1">今日心情 <a class="header-anchor" href="#今日心情" aria-label="Permalink to &quot;今日心情&quot;">​</a></h2><blockquote><p>所见所想，有感而发</p></blockquote><h2 id="今日算法" tabindex="-1">今日算法 <a class="header-anchor" href="#今日算法" aria-label="Permalink to &quot;今日算法&quot;">​</a></h2><p>今日学习：</p><p>今日复习：</p><h2 id="手撕代码" tabindex="-1">手撕代码 <a class="header-anchor" href="#手撕代码" aria-label="Permalink to &quot;手撕代码&quot;">​</a></h2><blockquote><p>防抖节流等各种手写，http和网络，浏览器原理，性能优化，Webpack</p></blockquote><p>手写 instanceof</p><p>参考：<a href="https://www.cnblogs.com/chenjy259/p/14829268.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/chenjy259/p/14829268.html</a></p><ul><li>参数的左侧和右侧必须是对象</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> myInstanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">left</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> left.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">__proto__</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prototype </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> right</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // proto为空，即遍历到原型链的尽头</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // prototype为空，传入的构造函数异常</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ||</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prototype </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> null</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(proto </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> prototype){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    } </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        myInstanceof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(proto, right);		</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 递归，判断right是否left的原型链上</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><p>手写 new</p><p>new 操作符做了什么？</p><ul><li>创建一个新的对象</li><li>继承父类原型上的方法.</li><li>添加父类的 属性 到新的对象上并初始化. 保存方法的执行结果.</li><li>如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象。</li></ul><p>参考：<a href="https://juejin.cn/post/6844903937405878280" target="_blank" rel="noreferrer">https://juejin.cn/post/6844903937405878280</a></p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">rest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 基于obj的原型创建一个新的对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> emptyObj</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Object.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">create</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">obj</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">prototype</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 添加属性到新创建的 emptyObj 上, 并获取obj函数执行的结果.</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> result</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(emptyObj, rest);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 如果执行结果有返回值并且是一个对象, 返回执行的结果, 否则, 返回新创建的对象</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> typeof</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">===</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;object&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> result </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">:</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> emptyObj;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 验证</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">firtName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">lastName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.firtName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> firtName;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">  this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.lastName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastName;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;demo&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tb</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Person</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Chen&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tianbao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tb);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> tb2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> _new</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(Person, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Chen&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;Tianbao&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(tb2)</span></span></code></pre></div><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文</p></blockquote><h2 id="项目-博客推荐" tabindex="-1">项目/博客推荐 <a class="header-anchor" href="#项目-博客推荐" aria-label="Permalink to &quot;项目/博客推荐&quot;">​</a></h2><blockquote><p>值得学习的项目/作者</p></blockquote><ul><li><a href="https://www.samanthaming.com/tidbits/?filter=JS#CodeTidbits" target="_blank" rel="noreferrer">https://www.samanthaming.com/tidbits/?filter=JS#CodeTidbits</a> 优秀的老外博客，这里展示的是 js 片段</li><li><a href="https://github.com/yoshuawuyts/rust-for-js-peeps" target="_blank" rel="noreferrer">https://github.com/yoshuawuyts/rust-for-js-peeps</a> 前端学 rust 项目入门</li></ul><h2 id="面经相关" tabindex="-1">面经相关 <a class="header-anchor" href="#面经相关" aria-label="Permalink to &quot;面经相关&quot;">​</a></h2><blockquote><p>八股文相关</p></blockquote><h2 id="明日计划" tabindex="-1">明日计划 <a class="header-anchor" href="#明日计划" aria-label="Permalink to &quot;明日计划&quot;">​</a></h2><ul><li>算法： <ul><li>学习：</li><li>复习：</li></ul></li><li>手写：</li><li>面经复习：</li></ul><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2><blockquote><p>短期内要做的事情</p></blockquote>`,32),t=[l];function p(k,e,r,E,d,o){return a(),i("div",null,t)}const c=s(h,[["render",p]]);export{y as __pageData,c as default};
