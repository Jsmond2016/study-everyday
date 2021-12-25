import{_ as a,c as n,o as s,a as e}from"./app.84a9331f.js";var t="/study-everyday/assets/0928-1.206e2dbd.jpg";const _='{"title":"0928 \u672C\u5468\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u95EE\u9898\u76D8\u70B9","slug":"\u95EE\u9898\u76D8\u70B9"},{"level":2,"title":"\u4EFB\u52A1\u603B\u7ED3","slug":"\u4EFB\u52A1\u603B\u7ED3"},{"level":2,"title":"\u7B14\u8BB0\u8F93\u51FA","slug":"\u7B14\u8BB0\u8F93\u51FA"},{"level":2,"title":"\u5468\u672B\u5B66\u4E60","slug":"\u5468\u672B\u5B66\u4E60"},{"level":2,"title":"\u4E0B\u5468\u4EFB\u52A1","slug":"\u4E0B\u5468\u4EFB\u52A1"}],"relativePath":"record/09/0928-week-summary.md","lastUpdated":1640423099535}',o={},p=e('<h1 id="_0928-\u672C\u5468\u603B\u7ED3" tabindex="-1">0928 \u672C\u5468\u603B\u7ED3 <a class="header-anchor" href="#_0928-\u672C\u5468\u603B\u7ED3" aria-hidden="true">#</a></h1><p><img src="'+t+`" alt=""></p><h2 id="\u95EE\u9898\u76D8\u70B9" tabindex="-1">\u95EE\u9898\u76D8\u70B9 <a class="header-anchor" href="#\u95EE\u9898\u76D8\u70B9" aria-hidden="true">#</a></h2><ul><li><code>textarea</code> \u53F3\u4E0B\u89D2\u7684\u4F38\u7F29\u5982\u4F55\u7981\u7528\uFF1A</li></ul><p>\u4F7F\u7528\u6837\u5F0F <code>resize: none;</code> \u6837\u5F0F\u5373\u53EF</p><ul><li><a href="https://www.cnblogs.com/flyingeagle/articles/7658786.html" target="_blank" rel="noopener noreferrer">DTO \u548C entity \u7684\u533A\u522B</a></li><li><a href="https://github.com/ctimmerm/axios-mock-adapter" target="_blank" rel="noopener noreferrer">axios-mock-adapter</a> \u770B\u5230\u9879\u76EE\u4E2D\u7528\u4E86\u8FD9\u4E2A\u5E93\u505A\u5355\u5143\u6D4B\u8BD5\uFF0C\u4F7F\u7528\u975E\u5E38\u7B80\u5355\u65B9\u4FBF\u3002</li><li>yarn \u66F4\u65B0\u4F9D\u8D56</li></ul><p>\u65B9\u5F0F1\uFF1A</p><div class="language-bash"><pre><code>cnpm i -g npm-check-updates
ncu \u67E5\u770B\u7248\u672C\u53D8\u66F4
ncu -u \u66F4\u65B0 package.json
<span class="token function">yarn</span> <span class="token function">install</span> \u5B89\u88C5\u65B0\u7684\u4F9D\u8D56\uFF0C\u66F4\u65B0 yarn.lock
</code></pre></div><p>\u65B9\u5F0F2\uFF1A</p><div class="language-bash"><pre><code><span class="token comment"># \u6267\u884C\u547D\u4EE4\u540E\uFF0C\u9700\u8981\u624B\u52A8\u9009\u62E9\u5347\u7EA7\u7684\u4F9D\u8D56\u5305\uFF0C\u6309\u7A7A\u683C\u952E\u9009\u62E9\uFF0Ca \u952E\u5207\u6362\u6240\u6709\uFF0Ci \u952E\u53CD\u9009\u9009\u62E9</span>
<span class="token function">yarn</span> upgrade-interactive --latest
</code></pre></div><ul><li>string to dom VS dom to string: \u5B57\u7B26\u4E32\u548C dom \u8F6C\u6362\u64CD\u4F5C</li></ul><div class="language-javascript"><pre><code><span class="token comment">// \u5B57\u7B26\u4E32\u8F6C DOM</span>
<span class="token keyword">const</span> resStr <span class="token operator">=</span> <span class="token string">&quot;&lt;div class=&#39;a-b&#39;&gt;&lt;span class=&#39;title&#39;&gt;\${\u6807\u9898}&lt;/span&gt;&lt;/div&gt;&quot;</span>
<span class="token keyword">const</span> parser <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">DOMParser</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">const</span> resDom <span class="token operator">=</span> parser<span class="token punctuation">.</span><span class="token function">parseFromString</span><span class="token punctuation">(</span>str<span class="token punctuation">,</span> <span class="token string">&#39;text/html&#39;</span><span class="token punctuation">)</span>

<span class="token comment">// \u64CD\u4F5C\u548C\u6539\u53D8 resDom</span>
Array<span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span>resDom<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token parameter">item</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
  <span class="token comment">// dom \u64CD\u4F5C\uFF0C\u66FF\u6362\u503C\u7B49</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">// DOM \u8F6C \u5B57\u7B26\u4E32</span>
<span class="token keyword">const</span> templateStr <span class="token operator">=</span> resDom<span class="token punctuation">.</span>documentElement<span class="token punctuation">.</span>outHTML
<span class="token comment">// \u540E\u7EED\u5176\u4ED6\u64CD\u4F5C...</span>

</code></pre></div><h2 id="\u4EFB\u52A1\u603B\u7ED3" tabindex="-1">\u4EFB\u52A1\u603B\u7ED3 <a class="header-anchor" href="#\u4EFB\u52A1\u603B\u7ED3" aria-hidden="true">#</a></h2><blockquote><p>\u672C\u5468\u4EFB\u52A1\u5B8C\u6210\u5EA6\uFF0C\u5B8C\u6210\u611F\u53D7/\u672A\u5B8C\u6210\u7406\u7531</p></blockquote><h2 id="\u7B14\u8BB0\u8F93\u51FA" tabindex="-1">\u7B14\u8BB0\u8F93\u51FA <a class="header-anchor" href="#\u7B14\u8BB0\u8F93\u51FA" aria-hidden="true">#</a></h2><h2 id="\u5468\u672B\u5B66\u4E60" tabindex="-1">\u5468\u672B\u5B66\u4E60 <a class="header-anchor" href="#\u5468\u672B\u5B66\u4E60" aria-hidden="true">#</a></h2><h2 id="\u4E0B\u5468\u4EFB\u52A1" tabindex="-1">\u4E0B\u5468\u4EFB\u52A1 <a class="header-anchor" href="#\u4E0B\u5468\u4EFB\u52A1" aria-hidden="true">#</a></h2>`,17),c=[p];function r(l,i,d,u,k,h){return s(),n("div",null,c)}var g=a(o,[["render",r]]);export{_ as __pageData,g as default};
