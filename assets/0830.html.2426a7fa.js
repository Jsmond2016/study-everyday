import{e as s}from"./app.afd55a6e.js";import{_ as n}from"./0830.99710c1c.js";import{_ as a}from"./plugin-vue_export-helper.21dcd24c.js";const p={},e=s('<h1 id="_0830" tabindex="-1"><a class="header-anchor" href="#_0830" aria-hidden="true">#</a> 0830</h1><p><img src="'+n+`" alt=""></p><h2 id="\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5DE5\u4F5C" aria-hidden="true">#</a> \u5DE5\u4F5C</h2><ul><li><p>coding\uFF0C\u6D4B\u8BD5</p></li><li><p>Typescript \u4E2D \u9AD8\u7EA7\u7C7B\u578B Exclude \u7684\u4F7F\u7528</p></li></ul><p>\u5BF9\u6BD4 Pick \u548C Omit \u7684\u4F7F\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">C</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u4F7F\u7528 Pick \u62BD\u53D6\u67D0\u4E2A\u5C5E\u6027</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">CC</span></span> <span class="token operator">=</span> Pick<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token string">&#39;name&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// \u5BF9\u5E94\u7684\u7C7B\u578B\u4E3A const c = { name: string }</span>

<span class="token comment">// \u53EF\u4EE5\u4F7F\u7528 Omit \u9664\u53BB\u67D0\u4E9B\u5C5E\u6027</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">CCC</span></span> <span class="token operator">=</span> Omit<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token string">&#39;age&#39;</span><span class="token operator">&gt;</span> <span class="token comment">// \u5BF9\u5E94\u7684\u7C7B\u578B\u4E3A const c = { name: string }</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>\u4F46\u662F\uFF0C\u5982\u679C\u7C7B\u578B\u662F\u8FD9\u79CD\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">|</span> <span class="token number">3</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token number">3</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">BB</span></span> <span class="token operator">=</span> Extract<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token operator">&gt;</span>
<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">BBB</span></span> <span class="token operator">=</span> Exclude<span class="token operator">&lt;</span><span class="token constant">A</span><span class="token punctuation">,</span> <span class="token number">1</span> <span class="token operator">|</span> <span class="token number">2</span> <span class="token operator">&gt;</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>\u5F53\u7136\uFF0C\u8868\u793A\u67D0\u4E2A\u5C5E\u6027\uFF0C\u4E5F\u53EF\u4EE5\u8FD9\u6837\u7528\uFF1A</p><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">type</span> <span class="token class-name"><span class="token constant">A</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span>
  age<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> <span class="token class-name"><span class="token constant">B</span></span> <span class="token operator">=</span> <span class="token punctuation">{</span>
  nickName<span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">[</span><span class="token string">&#39;name&#39;</span><span class="token punctuation">]</span>
  realAge<span class="token operator">:</span> <span class="token constant">A</span><span class="token punctuation">[</span><span class="token string">&#39;age&#39;</span><span class="token punctuation">]</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h2 id="\u4EFB\u52A1" tabindex="-1"><a class="header-anchor" href="#\u4EFB\u52A1" aria-hidden="true">#</a> \u4EFB\u52A1</h2><h2 id="\u53CD\u601D" tabindex="-1"><a class="header-anchor" href="#\u53CD\u601D" aria-hidden="true">#</a> \u53CD\u601D</h2><p>\u4E0A\u5468\u56DB\uFF0C\u5468\u4E94 \u52A0\u73ED\u52309\u70B9\u534A\uFF0C\u5468\u516D\u5728\u5BB6\u52A0\u73ED\u4E00\u5929\uFF1B\u4E3A\u4EC0\u4E48\u4E00\u76F4\u52A0\u73ED\uFF1F\uFF1F\u53CD\u6620\u4E86\u4E00\u4E9B\u95EE\u9898\uFF1A</p><ul><li>\u9700\u6C42\u7406\u89E3\u4E0D\u591F\u5168\u9762\uFF0C\u8BC4\u5BA1\u4E0D\u591F\u4ED4\u7EC6</li><li>\u5148\u8BE6\u7EC6\u770B\u9700\u6C42\uFF0C\u5BF9\u4EFB\u4F55\u4E1A\u52A1\u3001UI\u6548\u679C\u3001\u4EA4\u4E92 \u6709\u95EE\u9898\u7684\u5730\u65B9\uFF0C\u8981\u53CA\u65F6\u63D0\u51FA\uFF1B\u4E0D\u7136\u5230\u4E86\u63D0\u6D4B\u524D\u624D\u53D1\u73B0\uFF0C\u5DF2\u7ECF\u4E0D\u597D\u8BA9\u4EA7\u54C1\u8BE5\u9700\u6C42\u4E86\uFF01</li><li>\u9700\u6C42\u8BC4\u5BA1\u9636\u6BB5\uFF0C\u4E00\u5B9A\u8981\u505A\u597D\u6BCF\u4E2A\u63A5\u53E3\u548C\u5B57\u6BB5\u7684\u8BE6\u7EC6\u8BBE\u8BA1\uFF1B\u539F\u5219\u4E0A\uFF0C\u4FDD\u6301 bff \u63A5\u53E3\u7684\u7075\u6D3B\u548C\u7EAF\u51C0\u6027\uFF0C\u5C3D\u53EF\u80FD\u8BA9\u5165\u53C2\u5728 web \u7AEF\u4F20\u5165\uFF0C\u4E0D\u8981\u5728 bff \u5199\u6B7B\u67D0\u4E2A\u5B57\u6BB5\u7684\u503C\u3002</li></ul><h2 id="\u660E\u65E5\u8BA1\u5212" tabindex="-1"><a class="header-anchor" href="#\u660E\u65E5\u8BA1\u5212" aria-hidden="true">#</a> \u660E\u65E5\u8BA1\u5212</h2><hr><h2 id="\u597D\u6587\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u597D\u6587\u63A8\u8350" aria-hidden="true">#</a> \u597D\u6587\u63A8\u8350</h2><h2 id="\u9879\u76EE\u63A8\u8350" tabindex="-1"><a class="header-anchor" href="#\u9879\u76EE\u63A8\u8350" aria-hidden="true">#</a> \u9879\u76EE\u63A8\u8350</h2><h2 id="\u597D\u7528\u7684\u5DE5\u5177" tabindex="-1"><a class="header-anchor" href="#\u597D\u7528\u7684\u5DE5\u5177" aria-hidden="true">#</a> \u597D\u7528\u7684\u5DE5\u5177</h2><h2 id="todos" tabindex="-1"><a class="header-anchor" href="#todos" aria-hidden="true">#</a> TODOS</h2>`,20);function t(c,o){return e}var u=a(p,[["render",t]]);export{u as default};
