import{_ as n,c as s,o as a,a as p}from"./app.893a203f.js";var t="/study-everyday/assets/1218.ee760196.jpg",o="/study-everyday/assets/display-visibility-opacity.167e25de.png";const f='{"title":"1218 \u4ECA\u65E5\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECA\u65E5\u5DE5\u4F5C","slug":"\u4ECA\u65E5\u5DE5\u4F5C"},{"level":2,"title":"\u4ECA\u65E5\u5FC3\u60C5","slug":"\u4ECA\u65E5\u5FC3\u60C5"},{"level":2,"title":"\u4ECA\u65E5\u7B97\u6CD5","slug":"\u4ECA\u65E5\u7B97\u6CD5"},{"level":2,"title":"\u624B\u6495\u4EE3\u7801","slug":"\u624B\u6495\u4EE3\u7801"},{"level":2,"title":"\u597D\u6587\u63A8\u8350","slug":"\u597D\u6587\u63A8\u8350"},{"level":2,"title":"\u9879\u76EE/\u535A\u5BA2\u63A8\u8350","slug":"\u9879\u76EE-\u535A\u5BA2\u63A8\u8350"},{"level":2,"title":"\u9762\u7ECF\u76F8\u5173","slug":"\u9762\u7ECF\u76F8\u5173"}],"relativePath":"record/12/1218.md","lastUpdated":1640932346862}',e={},c=p('<h1 id="_1218-\u4ECA\u65E5\u603B\u7ED3" tabindex="-1">1218 \u4ECA\u65E5\u603B\u7ED3 <a class="header-anchor" href="#_1218-\u4ECA\u65E5\u603B\u7ED3" aria-hidden="true">#</a></h1><p><img src="'+t+`" alt=""></p><h2 id="\u4ECA\u65E5\u5DE5\u4F5C" tabindex="-1">\u4ECA\u65E5\u5DE5\u4F5C <a class="header-anchor" href="#\u4ECA\u65E5\u5DE5\u4F5C" aria-hidden="true">#</a></h2><blockquote><p>\u95EE\u9898\uFF0C\u539F\u56E0\uFF0C\u89E3\u51B3\u65B9\u5F0F\uFF0C\u4F18\u5316\uFF0C\u5DE7\u5999\u5B9E\u73B0\uFF0C\u65B0\u77E5\u8BC6</p></blockquote><p>\u5B66\u4E60 \u5C01\u88C5 axios</p><div class="language-js"><pre><code><span class="token comment">/*
 * \u53C2\u8003\u8D44\u6599\uFF1Ahttps://juejin.cn/post/6968630178163458084 \u63A8\u8350\u9605\u8BFB
 *
 * 
 * \u5C01\u88C5\u76EE\u7684\uFF1A
 * 
 * - \u521D\u59CB\u5316\u914D\u7F6E\uFF1A
 *   - \u4E0D\u540C\u73AF\u5883\u8BF7\u6C42\u5730\u5740\u533A\u5206
 *   - \u9ED8\u8BA4\u8BF7\u6C42\u65B9\u5F0F content-type
 *   - \u8D85\u65F6\u53C2\u6570\u8BBE\u7F6E\uFF1A30s
 *   - \u8DE8\u57DF\u8BBF\u95EE\u9700\u8981\u643A\u5E26 cookie
 *   - headers \u91CC\u9762\u6DFB\u52A0 token
 * - \u8BF7\u6C42\u62E6\u622A\uFF0C\u6DFB\u52A0\u53C2\u6570
 *   - \u8BF7\u6C42\u53C2\u6570\u683C\u5F0F\u5316
 * - \u54CD\u5E94\u62E6\u622A\uFF0C\u5904\u7406\u54CD\u5E94\uFF0C\u62E6\u622A\u5F02\u5E38: 
 *   - \u8FD4\u56DE\u6307\u5B9A code \u505A\u51FA\u4E0D\u540C\u52A8\u4F5C
 *   - \u8FD4\u56DE\u7ED3\u679C\u683C\u5F0F\u5316
 * - \u6743\u9650\u6821\u9A8C\uFF1Atoken \u6216 cookie 
 * - \u53D6\u6D88\u8BF7\u6C42/\u91CD\u590D\u8BF7\u6C42\u62E6\u622A
 * - \u6587\u4EF6\u6D41\u5904\u7406
 * - loading \u548C \u62A5\u9519\u63D0\u793A
 * 
 * 
 */</span>


<span class="token keyword">import</span> axios <span class="token keyword">from</span> <span class="token string">&#39;axios&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> ElLoading<span class="token punctuation">,</span> ElMessage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;element-plus&#39;</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span>getTokenAUTH<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/utils/auth&#39;</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> pendingMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token keyword">const</span> LoadingInstance <span class="token operator">=</span> <span class="token punctuation">{</span>
  _target<span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span>
  _count<span class="token operator">:</span> <span class="token number">0</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>

<span class="token keyword">function</span> <span class="token function">myAxios</span><span class="token punctuation">(</span><span class="token parameter">axiosConfig<span class="token punctuation">,</span> customOptions<span class="token punctuation">,</span> loadingOptions</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> service <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    baseURL<span class="token operator">:</span> <span class="token string">&#39;http://localhost:8888&#39;</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7EDF\u4E00\u7684\u8BF7\u6C42\u524D\u7F00</span>
    timeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// \u8BBE\u7F6E\u7EDF\u4E00\u7684\u8D85\u65F6\u65F6\u957F</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u81EA\u5B9A\u4E49\u914D\u7F6E</span>
  <span class="token keyword">let</span> custom_options <span class="token operator">=</span> Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    repeat_request_cancel<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542F\u53D6\u6D88\u91CD\u590D\u8BF7\u6C42, \u9ED8\u8BA4\u4E3A true</span>
    loading<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542Floading\u5C42\u6548\u679C, \u9ED8\u8BA4\u4E3Afalse</span>
    reduct_data_format<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542F\u7B80\u6D01\u7684\u6570\u636E\u7ED3\u6784\u54CD\u5E94, \u9ED8\u8BA4\u4E3Atrue</span>
    error_message_show<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542F\u63A5\u53E3\u9519\u8BEF\u4FE1\u606F\u5C55\u793A,\u9ED8\u8BA4\u4E3Atrue</span>
    code_message_show<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// \u662F\u5426\u5F00\u542Fcode\u4E0D\u4E3A0\u65F6\u7684\u4FE1\u606F\u63D0\u793A, \u9ED8\u8BA4\u4E3Afalse</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span> customOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u8BF7\u6C42\u62E6\u622A</span>
  service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>request<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token parameter">config</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">removePending</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      custom_options<span class="token punctuation">.</span>repeat_request_cancel <span class="token operator">&amp;&amp;</span> <span class="token function">addPending</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span> 
      <span class="token comment">// \u521B\u5EFAloading\u5B9E\u4F8B</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span>custom_options<span class="token punctuation">.</span>loading<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        LoadingInstance<span class="token punctuation">.</span>_count<span class="token operator">++</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>LoadingInstance<span class="token punctuation">.</span>_count <span class="token operator">===</span> <span class="token number">1</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
          LoadingInstance<span class="token punctuation">.</span>_target <span class="token operator">=</span> ElLoading<span class="token punctuation">.</span><span class="token function">service</span><span class="token punctuation">(</span>loadingOptions<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
      <span class="token comment">// \u81EA\u52A8\u643A\u5E26token</span>
      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token function">getTokenAUTH</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">&amp;&amp;</span> <span class="token keyword">typeof</span> window <span class="token operator">!==</span> <span class="token string">&quot;undefined&quot;</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        config<span class="token punctuation">.</span>headers<span class="token punctuation">.</span>Authorization <span class="token operator">=</span> <span class="token function">getTokenAUTH</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> config<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span> 
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// \u54CD\u5E94\u62E6\u622A</span>
  service<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span>response<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>
    <span class="token parameter">response</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      <span class="token function">removePending</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      custom_options<span class="token punctuation">.</span>loading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span>custom_options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5173\u95EDloading</span>

      <span class="token keyword">if</span><span class="token punctuation">(</span>custom_options<span class="token punctuation">.</span>code_message_show <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data <span class="token operator">&amp;&amp;</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>code <span class="token operator">!==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
          type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
          message<span class="token operator">:</span> response<span class="token punctuation">.</span>data<span class="token punctuation">.</span>message
        <span class="token punctuation">}</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>response<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// code\u4E0D\u7B49\u4E8E0, \u9875\u9762\u5177\u4F53\u903B\u8F91\u5C31\u4E0D\u6267\u884C\u4E86</span>
      <span class="token punctuation">}</span>

      <span class="token keyword">return</span> custom_options<span class="token punctuation">.</span>reduct_data_format <span class="token operator">?</span> response<span class="token punctuation">.</span>data <span class="token operator">:</span> response<span class="token punctuation">;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token parameter">error</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
      error<span class="token punctuation">.</span>config <span class="token operator">&amp;&amp;</span> <span class="token function">removePending</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
      custom_options<span class="token punctuation">.</span>loading <span class="token operator">&amp;&amp;</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span>custom_options<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5173\u95EDloading</span>
      custom_options<span class="token punctuation">.</span>error_message_show <span class="token operator">&amp;&amp;</span> <span class="token function">httpErrorStatusHandle</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u5904\u7406\u9519\u8BEF\u72B6\u6001\u7801</span>
      <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// \u9519\u8BEF\u7EE7\u7EED\u8FD4\u56DE\u7ED9\u5230\u5177\u4F53\u9875\u9762</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">return</span> <span class="token function">service</span><span class="token punctuation">(</span>axiosConfig<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> myAxios<span class="token punctuation">;</span>

<span class="token comment">/**
 * \u5904\u7406\u5F02\u5E38
 * @param {*} error 
 */</span>
<span class="token keyword">function</span> <span class="token function">httpErrorStatusHandle</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u5904\u7406\u88AB\u53D6\u6D88\u7684\u8BF7\u6C42</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>axios<span class="token punctuation">.</span><span class="token function">isCancel</span><span class="token punctuation">(</span>error<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">return</span> console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">&#39;\u8BF7\u6C42\u7684\u91CD\u590D\u8BF7\u6C42\uFF1A&#39;</span> <span class="token operator">+</span> error<span class="token punctuation">.</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error <span class="token operator">&amp;&amp;</span> error<span class="token punctuation">.</span>response<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">switch</span><span class="token punctuation">(</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>status<span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">case</span> <span class="token number">302</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u63A5\u53E3\u91CD\u5B9A\u5411\u4E86\uFF01&#39;</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">400</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u53C2\u6570\u4E0D\u6B63\u786E\uFF01&#39;</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">401</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u60A8\u672A\u767B\u5F55\uFF0C\u6216\u8005\u767B\u5F55\u5DF2\u7ECF\u8D85\u65F6\uFF0C\u8BF7\u5148\u767B\u5F55\uFF01&#39;</span><span class="token punctuation">;</span><span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">403</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u60A8\u6CA1\u6709\u6743\u9650\u64CD\u4F5C\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">404</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">\`</span><span class="token string">\u8BF7\u6C42\u5730\u5740\u51FA\u9519: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">\${</span>error<span class="token punctuation">.</span>response<span class="token punctuation">.</span>config<span class="token punctuation">.</span>url<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">\`</span></span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span> <span class="token comment">// \u5728\u6B63\u786E\u57DF\u540D\u4E0B</span>
      <span class="token keyword">case</span> <span class="token number">408</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u8BF7\u6C42\u8D85\u65F6\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">409</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u7CFB\u7EDF\u5DF2\u5B58\u5728\u76F8\u540C\u6570\u636E\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">500</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u5668\u5185\u90E8\u9519\u8BEF\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">501</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u672A\u5B9E\u73B0\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">502</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u5173\u9519\u8BEF\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">503</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u4E0D\u53EF\u7528\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">504</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u670D\u52A1\u6682\u65F6\u65E0\u6CD5\u8BBF\u95EE\uFF0C\u8BF7\u7A0D\u540E\u518D\u8BD5\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">case</span> <span class="token number">505</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;HTTP\u7248\u672C\u4E0D\u53D7\u652F\u6301\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span><span class="token punctuation">;</span>
      <span class="token keyword">default</span><span class="token operator">:</span> message <span class="token operator">=</span> <span class="token string">&#39;\u5F02\u5E38\u95EE\u9898\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\uFF01&#39;</span><span class="token punctuation">;</span> <span class="token keyword">break</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;timeout&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> message <span class="token operator">=</span> <span class="token string">&#39;\u7F51\u7EDC\u8BF7\u6C42\u8D85\u65F6\uFF01&#39;</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>error<span class="token punctuation">.</span>message<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&#39;Network&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span> message <span class="token operator">=</span> window<span class="token punctuation">.</span>navigator<span class="token punctuation">.</span>onLine <span class="token operator">?</span> <span class="token string">&#39;\u670D\u52A1\u7AEF\u5F02\u5E38\uFF01&#39;</span> <span class="token operator">:</span> <span class="token string">&#39;\u60A8\u65AD\u7F51\u4E86\uFF01&#39;</span><span class="token punctuation">;</span>

  <span class="token function">ElMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    type<span class="token operator">:</span> <span class="token string">&#39;error&#39;</span><span class="token punctuation">,</span>
    message
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5173\u95EDLoading\u5C42\u5B9E\u4F8B
 * @param {*} _options 
 */</span>
<span class="token keyword">function</span> <span class="token function">closeLoading</span><span class="token punctuation">(</span><span class="token parameter">_options</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>_options<span class="token punctuation">.</span>loading <span class="token operator">&amp;&amp;</span> LoadingInstance<span class="token punctuation">.</span>_count <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">)</span> LoadingInstance<span class="token punctuation">.</span>_count<span class="token operator">--</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span>LoadingInstance<span class="token punctuation">.</span>_count <span class="token operator">===</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    LoadingInstance<span class="token punctuation">.</span>_target<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    LoadingInstance<span class="token punctuation">.</span>_target <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u50A8\u5B58\u6BCF\u4E2A\u8BF7\u6C42\u7684\u552F\u4E00cancel\u56DE\u8C03, \u4EE5\u6B64\u4E3A\u6807\u8BC6
 * @param {*} config 
 */</span>
<span class="token keyword">function</span> <span class="token function">addPending</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pendingKey <span class="token operator">=</span> <span class="token function">getPendingKey</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  config<span class="token punctuation">.</span>cancelToken <span class="token operator">=</span> config<span class="token punctuation">.</span>cancelToken <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">axios<span class="token punctuation">.</span>CancelToken</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">cancel</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>pendingMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      pendingMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">,</span> cancel<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u5220\u9664\u91CD\u590D\u7684\u8BF7\u6C42
 * @param {*} config 
 */</span>
<span class="token keyword">function</span> <span class="token function">removePending</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> pendingKey <span class="token operator">=</span> <span class="token function">getPendingKey</span><span class="token punctuation">(</span>config<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingMap<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
     <span class="token keyword">const</span> cancelToken <span class="token operator">=</span> pendingMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
     <span class="token comment">// \u5982\u4F60\u4E0D\u660E\u767D\u6B64\u5904\u4E3A\u4EC0\u4E48\u9700\u8981\u4F20\u9012pendingKey\u53EF\u4EE5\u770B\u6587\u7AE0\u4E0B\u65B9\u7684\u8865\u4E01\u89E3\u91CA</span>
     <span class="token function">cancelToken</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
     pendingMap<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>pendingKey<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token comment">/**
 * \u751F\u6210\u552F\u4E00\u7684\u6BCF\u4E2A\u8BF7\u6C42\u7684\u552F\u4E00key
 * @param {*} config 
 * @returns 
 */</span>
<span class="token keyword">function</span> <span class="token function">getPendingKey</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">let</span> <span class="token punctuation">{</span>url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> params<span class="token punctuation">,</span> data<span class="token punctuation">}</span> <span class="token operator">=</span> config<span class="token punctuation">;</span>
  <span class="token keyword">if</span><span class="token punctuation">(</span><span class="token keyword">typeof</span> data <span class="token operator">===</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// response\u91CC\u9762\u8FD4\u56DE\u7684config.data\u662F\u4E2A\u5B57\u7B26\u4E32\u5BF9\u8C61</span>
  <span class="token keyword">return</span> <span class="token punctuation">[</span>url<span class="token punctuation">,</span> method<span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">&#39;&amp;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


</code></pre></div><p><strong>\u53C2\u8003\u8D44\u6599\uFF1A</strong></p><ul><li><a href="https://juejin.cn/post/6968630178163458084" target="_blank" rel="noopener noreferrer">\u5B8C\u6574\u7684Axios\u5C01\u88C5-\u5355\u72ECAPI\u7BA1\u7406\u5C42\u3001\u53C2\u6570\u5E8F\u5217\u5316\u3001\u53D6\u6D88\u91CD\u590D\u8BF7\u6C42\u3001Loading\u3001\u72B6\u6001\u7801</a> \u63A8\u8350\u9605\u8BFB</li><li><a href="https://juejin.cn/post/7025409531496644616" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7025409531496644616</a></li><li><a href="https://juejin.cn/post/6992762038082600973" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/6992762038082600973</a></li><li><a href="https://juejin.cn/post/7009629858993012743" target="_blank" rel="noopener noreferrer">https://juejin.cn/post/7009629858993012743</a></li></ul><h2 id="\u4ECA\u65E5\u5FC3\u60C5" tabindex="-1">\u4ECA\u65E5\u5FC3\u60C5 <a class="header-anchor" href="#\u4ECA\u65E5\u5FC3\u60C5" aria-hidden="true">#</a></h2><blockquote><p>\u6240\u89C1\u6240\u60F3\uFF0C\u6709\u611F\u800C\u53D1</p></blockquote><h2 id="\u4ECA\u65E5\u7B97\u6CD5" tabindex="-1">\u4ECA\u65E5\u7B97\u6CD5 <a class="header-anchor" href="#\u4ECA\u65E5\u7B97\u6CD5" aria-hidden="true">#</a></h2><p>\u4ECA\u65E5\u5B66\u4E60\uFF1A</p><p>\u4ECA\u65E5\u590D\u4E60\uFF1A</p><h2 id="\u624B\u6495\u4EE3\u7801" tabindex="-1">\u624B\u6495\u4EE3\u7801 <a class="header-anchor" href="#\u624B\u6495\u4EE3\u7801" aria-hidden="true">#</a></h2><blockquote><p>\u9632\u6296\u8282\u6D41\u7B49\u5404\u79CD\u624B\u5199\uFF0Chttp\u548C\u7F51\u7EDC\uFF0C\u6D4F\u89C8\u5668\u539F\u7406\uFF0C\u6027\u80FD\u4F18\u5316\uFF0CWebpack</p></blockquote><ul><li><a href="https://github.com/gzg1023/fackAchieve" target="_blank" rel="noopener noreferrer">https://github.com/gzg1023/fackAchieve</a> \u624B\u5199 es6 \u51FD\u6570\uFF0CPromise \u7279\u6027\uFF0Clodash \u5E93\u7684\u51FD\u6570\u5B9E\u73B0,\u6A21\u62DF vue,React \u7B49\u524D\u7AEF\u6846\u67B6\u7684\u5B9E\u73B0\u548C\u539F\u7406\u7684\u7406\u89E3\u3002</li></ul><h2 id="\u597D\u6587\u63A8\u8350" tabindex="-1">\u597D\u6587\u63A8\u8350 <a class="header-anchor" href="#\u597D\u6587\u63A8\u8350" aria-hidden="true">#</a></h2><blockquote><p>\u6709\u611F\u597D\u6587</p></blockquote><h2 id="\u9879\u76EE-\u535A\u5BA2\u63A8\u8350" tabindex="-1">\u9879\u76EE/\u535A\u5BA2\u63A8\u8350 <a class="header-anchor" href="#\u9879\u76EE-\u535A\u5BA2\u63A8\u8350" aria-hidden="true">#</a></h2><blockquote><p>\u503C\u5F97\u5B66\u4E60\u7684\u9879\u76EE/\u4F5C\u8005</p></blockquote><h2 id="\u9762\u7ECF\u76F8\u5173" tabindex="-1">\u9762\u7ECF\u76F8\u5173 <a class="header-anchor" href="#\u9762\u7ECF\u76F8\u5173" aria-hidden="true">#</a></h2><blockquote><p>\u516B\u80A1\u6587\u76F8\u5173</p></blockquote><ul><li><a href="https://juejin.cn/post/7013953652578582558" target="_blank" rel="noopener noreferrer">\u524D\u7AEF\u4E24\u5E74\u7ECF\u9A8C\uFF0C\u5386\u65F6\u4E00\u4E2A\u6708\u7684\u9762\u7ECF\u548C\u603B\u7ED3</a> \u9762\u8BD5\u9898\u5F88\u7ECF\u5178\uFF01\uFF01\u540C2\u5E74\uFF0C\u9762\u7ECF\u5F88\u53D7\u76CA\uFF1B</li></ul><p><img src="`+o+`" alt=""></p><p><a href="https://hbuecx.com/post/display-nonevisibility-hidden-yu-opacity-0-de-qu-bie/" target="_blank" rel="noopener noreferrer">display: none\u3001visibility: hidden \u4E0E opacity: 0 \u662F\u6211\u4EEC\u5E38\u7528\u6765\u9690\u85CF\u5143\u7D20\u7684\u51E0\u79CD\u65B9\u6CD5\uFF0C\u90A3\u4E48\u5B83\u4EEC\u4E4B\u95F4\u6709\u4EC0\u4E48\u533A\u522B\u5462\uFF1F</a></p><p><strong>\u533A\u522B</strong></p><ul><li>\u8BBE\u7F6E\u4E86 display: none \u7684\u5143\u7D20\u4E0D\u4F1A\u88AB\u6E32\u67D3\u5728\u9875\u9762\u4E2D\uFF0C\u4E0D\u5F71\u54CD\u9875\u9762\u5176\u4ED6\u5143\u7D20\u7684\u5E03\u5C40\uFF1B\u800C\u8BBE\u7F6E\u4E86visibility: hidden \u548C opacity: 0 \u7684\u5143\u7D20\u867D\u7136\u5728\u9875\u9762\u4E2D\u4E0D\u53EF\u89C1\uFF0C\u4F46\u662F\u5B83\u4EEC\u4ECD\u7136\u4F1A\u88AB\u6E32\u67D3\uFF0C\u5728\u9875\u9762\u4E2D\u5360\u636E\u7740\u76F8\u5E94\u7684\u4F4D\u7F6E\u3002</li><li>\u7531\u4E8E display: none \u4F1A\u5F71\u54CD\u5E03\u5C40\uFF0C\u6240\u4EE5\u5B83\u4F1A\u5F15\u8D77 \u91CD\u6392 \u548C \u91CD\u7ED8 \uFF1B\u800Cvisibility: hidden \u548C opacity: 0 \u4E0D\u4F1A\u5F71\u54CD\u9875\u9762\u5E03\u5C40\uFF0C\u6240\u4EE5\u5B83\u53EA\u4F1A\u5F15\u8D77 \u91CD\u7ED8 \u3002</li><li>visibility: hidden \u5177\u6709\u7EE7\u627F\u6027\uFF0C\u4F46\u5176\u5B50\u5143\u7D20\u5982\u679C\u8BBE\u7F6E\u4E86 visibility: visible\uFF0C\u90A3\u4E48\u5B50\u5143\u7D20\u4ECD\u7136\u4F1A\u5C55\u793A\uFF1B opacity: 0 \u4E5F\u5177\u6709\u7EE7\u627F\u6027\uFF0C\u5373\u4F7F\u5B50\u5143\u7D20\u8BBE\u7F6E\u4E86 opacity: 1\uFF0C\u5B50\u5143\u7D20\u4ECD\u4E0D\u53EF\u89C1\u3002</li><li>visibility: hidden \u9690\u85CF\u5143\u7D20\u540E\u5143\u7D20\u4E0D\u53EF\u70B9\u51FB\uFF0C\u4F46\u662F\u5982\u679C\u5176\u5B50\u5143\u7D20\u5982\u679C\u8BBE\u7F6E\u4E86 visibility: visible\uFF0C\u90A3\u4E48\u5176\u5B50\u5143\u7D20\u4ECD\u53EF\u88AB\u70B9\u51FB\uFF1B\u8BBE\u7F6E\u4E86 opacity: 0 \u7684\u5143\u7D20\uFF0C\u5143\u7D20\u672C\u8EAB\u53CA\u5176\u5B50\u5143\u7D20\u90FD\u53EF\u4EE5\u88AB\u70B9\u51FB\u3002</li></ul><hr><ul><li><a href="https://hbuecx.com/post/lian-shi-diao-yong-shi-xian-yuan-li/" target="_blank" rel="noopener noreferrer">\u94FE\u5F0F\u8C03\u7528\u5B9E\u73B0\u539F\u7406</a> \u6838\u5FC3\u5C31\u662F\u8FD4\u56DE this</li></ul><p>\u76F8\u4F3C\u7684\u6709\uFF1A jQuery\uFF0Cpromise \u7B49</p><div class="language-js"><pre><code><span class="token keyword">class</span> <span class="token class-name">MyMath</span> <span class="token punctuation">{</span>
    <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">=</span> num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">add</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">+=</span> num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">sub</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">-=</span> num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">mul</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">*=</span> num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token function">div</span><span class="token punctuation">(</span><span class="token parameter">num</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>num <span class="token operator">/=</span> num<span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

   <span class="token comment">// \u52A0\u4E00\u4E2A run \uFF0C\u5BFC\u51FA\u7ED3\u679C</span>
    <span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
       <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>num<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyMath</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>   <span class="token comment">// {num: 7}</span>

<span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MyMath</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">mul</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">sub</span><span class="token punctuation">(</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">run</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 7</span>

</code></pre></div>`,31),u=[c];function l(k,i,r,d,m,g){return a(),s("div",null,u)}var h=n(e,[["render",l]]);export{f as __pageData,h as default};
