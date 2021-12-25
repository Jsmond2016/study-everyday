import{_ as n,c as s,o as a,a as t}from"./app.84a9331f.js";var p="/study-everyday/assets/1220.2c04e84d.jpg";const f='{"title":"1220 \u4ECA\u65E5\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECA\u65E5\u5DE5\u4F5C","slug":"\u4ECA\u65E5\u5DE5\u4F5C"},{"level":2,"title":"\u4ECA\u65E5\u5FC3\u60C5","slug":"\u4ECA\u65E5\u5FC3\u60C5"},{"level":2,"title":"\u4ECA\u65E5\u7B97\u6CD5","slug":"\u4ECA\u65E5\u7B97\u6CD5"},{"level":2,"title":"\u624B\u6495\u4EE3\u7801","slug":"\u624B\u6495\u4EE3\u7801"},{"level":2,"title":"\u597D\u6587\u63A8\u8350","slug":"\u597D\u6587\u63A8\u8350"},{"level":2,"title":"\u9879\u76EE/\u535A\u5BA2\u63A8\u8350","slug":"\u9879\u76EE-\u535A\u5BA2\u63A8\u8350"},{"level":2,"title":"\u9762\u7ECF\u76F8\u5173","slug":"\u9762\u7ECF\u76F8\u5173"},{"level":2,"title":"\u660E\u65E5\u8BA1\u5212","slug":"\u660E\u65E5\u8BA1\u5212"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/12/1220.md","lastUpdated":1640423099607}',e={},o=t('<h1 id="_1220-\u4ECA\u65E5\u603B\u7ED3" tabindex="-1">1220 \u4ECA\u65E5\u603B\u7ED3 <a class="header-anchor" href="#_1220-\u4ECA\u65E5\u603B\u7ED3" aria-hidden="true">#</a></h1><p><img src="'+p+`" alt=""></p><h2 id="\u4ECA\u65E5\u5DE5\u4F5C" tabindex="-1">\u4ECA\u65E5\u5DE5\u4F5C <a class="header-anchor" href="#\u4ECA\u65E5\u5DE5\u4F5C" aria-hidden="true">#</a></h2><blockquote><p>\u95EE\u9898\uFF0C\u539F\u56E0\uFF0C\u89E3\u51B3\u65B9\u5F0F\uFF0C\u4F18\u5316\uFF0C\u5DE7\u5999\u5B9E\u73B0\uFF0C\u65B0\u77E5\u8BC6</p></blockquote><ul><li>\u4EE3\u7801 review</li></ul><h2 id="\u4ECA\u65E5\u5FC3\u60C5" tabindex="-1">\u4ECA\u65E5\u5FC3\u60C5 <a class="header-anchor" href="#\u4ECA\u65E5\u5FC3\u60C5" aria-hidden="true">#</a></h2><blockquote><p>\u6240\u89C1\u6240\u60F3\uFF0C\u6709\u611F\u800C\u53D1</p></blockquote><h2 id="\u4ECA\u65E5\u7B97\u6CD5" tabindex="-1">\u4ECA\u65E5\u7B97\u6CD5 <a class="header-anchor" href="#\u4ECA\u65E5\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u4ECA\u65E5\u5B66\u4E60\uFF1A</p><p>\u4ECA\u65E5\u590D\u4E60\uFF1A</p><h2 id="\u624B\u6495\u4EE3\u7801" tabindex="-1">\u624B\u6495\u4EE3\u7801 <a class="header-anchor" href="#\u624B\u6495\u4EE3\u7801" aria-hidden="true">#</a></h2><blockquote><p>\u9632\u6296\u8282\u6D41\u7B49\u5404\u79CD\u624B\u5199\uFF0Chttp\u548C\u7F51\u7EDC\uFF0C\u6D4F\u89C8\u5668\u539F\u7406\uFF0C\u6027\u80FD\u4F18\u5316\uFF0CWebpack</p></blockquote><p>\u624B\u5199 instanceof</p><p>\u53C2\u8003\uFF1A<a href="https://www.cnblogs.com/chenjy259/p/14829268.html" target="_blank" rel="noopener noreferrer">https://www.cnblogs.com/chenjy259/p/14829268.html</a></p><ul><li>\u53C2\u6570\u7684\u5DE6\u4FA7\u548C\u53F3\u4FA7\u5FC5\u987B\u662F\u5BF9\u8C61</li></ul><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">myInstanceof</span><span class="token punctuation">(</span><span class="token parameter">left<span class="token punctuation">,</span> right</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">let</span> proto <span class="token operator">=</span> left<span class="token punctuation">.</span>__proto__<span class="token punctuation">;</span>
    <span class="token keyword">let</span> prototype <span class="token operator">=</span> right<span class="token punctuation">.</span>prototype<span class="token punctuation">;</span>
    
    <span class="token comment">// proto\u4E3A\u7A7A\uFF0C\u5373\u904D\u5386\u5230\u539F\u578B\u94FE\u7684\u5C3D\u5934</span>
    <span class="token comment">// prototype\u4E3A\u7A7A\uFF0C\u4F20\u5165\u7684\u6784\u9020\u51FD\u6570\u5F02\u5E38</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>proto <span class="token operator">===</span> <span class="token keyword">null</span> <span class="token operator">||</span> prototype <span class="token operator">===</span> <span class="token keyword">null</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>proto <span class="token operator">===</span> prototype<span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
        <span class="token function">myInstanceof</span><span class="token punctuation">(</span>proto<span class="token punctuation">,</span> right<span class="token punctuation">)</span><span class="token punctuation">;</span>		<span class="token comment">// \u9012\u5F52\uFF0C\u5224\u65ADright\u662F\u5426left\u7684\u539F\u578B\u94FE\u4E0A</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre></div><p>\u624B\u5199 new</p><p>new \u64CD\u4F5C\u7B26\u505A\u4E86\u4EC0\u4E48\uFF1F</p><ul><li>\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61</li><li>\u7EE7\u627F\u7236\u7C7B\u539F\u578B\u4E0A\u7684\u65B9\u6CD5.</li><li>\u6DFB\u52A0\u7236\u7C7B\u7684 \u5C5E\u6027 \u5230\u65B0\u7684\u5BF9\u8C61\u4E0A\u5E76\u521D\u59CB\u5316. \u4FDD\u5B58\u65B9\u6CD5\u7684\u6267\u884C\u7ED3\u679C.</li><li>\u5982\u679C\u6267\u884C\u7ED3\u679C\u6709\u8FD4\u56DE\u503C\u5E76\u4E14\u662F\u4E00\u4E2A\u5BF9\u8C61, \u8FD4\u56DE\u6267\u884C\u7684\u7ED3\u679C, \u5426\u5219, \u8FD4\u56DE\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61\u3002</li></ul><p>\u53C2\u8003\uFF1A<a href="https://juejin.cn/post/6844903937405878280" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6844903937405878280</a></p><div class="language-js"><pre><code><span class="token keyword">function</span> <span class="token function">_new</span><span class="token punctuation">(</span><span class="token parameter">obj<span class="token punctuation">,</span> <span class="token operator">...</span>rest</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
  <span class="token comment">// \u57FA\u4E8Eobj\u7684\u539F\u578B\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684\u5BF9\u8C61</span>
  <span class="token keyword">const</span> emptyObj <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>obj<span class="token punctuation">.</span>prototype<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u6DFB\u52A0\u5C5E\u6027\u5230\u65B0\u521B\u5EFA\u7684 emptyObj \u4E0A, \u5E76\u83B7\u53D6obj\u51FD\u6570\u6267\u884C\u7684\u7ED3\u679C.</span>
  <span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token function">obj</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>emptyObj<span class="token punctuation">,</span> rest<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u5982\u679C\u6267\u884C\u7ED3\u679C\u6709\u8FD4\u56DE\u503C\u5E76\u4E14\u662F\u4E00\u4E2A\u5BF9\u8C61, \u8FD4\u56DE\u6267\u884C\u7684\u7ED3\u679C, \u5426\u5219, \u8FD4\u56DE\u65B0\u521B\u5EFA\u7684\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token keyword">typeof</span> result <span class="token operator">===</span> <span class="token string">&#39;object&#39;</span> <span class="token operator">?</span> result <span class="token operator">:</span> emptyObj<span class="token punctuation">;</span>
<span class="token punctuation">}</span>


<span class="token comment">// \u9A8C\u8BC1</span>

<span class="token keyword">function</span> <span class="token function">Person</span><span class="token punctuation">(</span><span class="token parameter">firtName<span class="token punctuation">,</span> lastName</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>firtName <span class="token operator">=</span> firtName<span class="token punctuation">;</span>
  <span class="token keyword">this</span><span class="token punctuation">.</span>lastName <span class="token operator">=</span> lastName<span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token string">&#39;demo&#39;</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> tb <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Person</span><span class="token punctuation">(</span><span class="token string">&#39;Chen&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tianbao&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tb<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> tb2 <span class="token operator">=</span> <span class="token function">_new</span><span class="token punctuation">(</span>Person<span class="token punctuation">,</span> <span class="token string">&#39;Chen&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;Tianbao&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>tb2<span class="token punctuation">)</span>

</code></pre></div><h2 id="\u597D\u6587\u63A8\u8350" tabindex="-1">\u597D\u6587\u63A8\u8350 <a class="header-anchor" href="#\u597D\u6587\u63A8\u8350" aria-hidden="true">#</a></h2><blockquote><p>\u6709\u611F\u597D\u6587</p></blockquote><h2 id="\u9879\u76EE-\u535A\u5BA2\u63A8\u8350" tabindex="-1">\u9879\u76EE/\u535A\u5BA2\u63A8\u8350 <a class="header-anchor" href="#\u9879\u76EE-\u535A\u5BA2\u63A8\u8350" aria-hidden="true">#</a></h2><blockquote><p>\u503C\u5F97\u5B66\u4E60\u7684\u9879\u76EE/\u4F5C\u8005</p></blockquote><ul><li><a href="https://www.samanthaming.com/tidbits/?filter=JS#CodeTidbits" target="_blank" rel="noopener noreferrer">https://www.samanthaming.com/tidbits/?filter=JS#CodeTidbits</a> \u4F18\u79C0\u7684\u8001\u5916\u535A\u5BA2\uFF0C\u8FD9\u91CC\u5C55\u793A\u7684\u662F js \u7247\u6BB5</li><li><a href="https://github.com/yoshuawuyts/rust-for-js-peeps" target="_blank" rel="noopener noreferrer">https://github.com/yoshuawuyts/rust-for-js-peeps</a> \u524D\u7AEF\u5B66 rust \u9879\u76EE\u5165\u95E8</li></ul><h2 id="\u9762\u7ECF\u76F8\u5173" tabindex="-1">\u9762\u7ECF\u76F8\u5173 <a class="header-anchor" href="#\u9762\u7ECF\u76F8\u5173" aria-hidden="true">#</a></h2><blockquote><p>\u516B\u80A1\u6587\u76F8\u5173</p></blockquote><h2 id="\u660E\u65E5\u8BA1\u5212" tabindex="-1">\u660E\u65E5\u8BA1\u5212 <a class="header-anchor" href="#\u660E\u65E5\u8BA1\u5212" aria-hidden="true">#</a></h2><ul><li>\u7B97\u6CD5\uFF1A <ul><li>\u5B66\u4E60\uFF1A</li><li>\u590D\u4E60\uFF1A</li></ul></li><li>\u624B\u5199\uFF1A</li><li>\u9762\u7ECF\u590D\u4E60\uFF1A</li></ul><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-hidden="true">#</a></h2><blockquote><p>\u77ED\u671F\u5185\u8981\u505A\u7684\u4E8B\u60C5</p></blockquote>`,32),c=[o];function l(r,u,i,k,d,h){return a(),s("div",null,c)}var m=n(e,[["render",l]]);export{f as __pageData,m as default};
