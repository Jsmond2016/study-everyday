import{r as t,o,c,a as n,b as p,F as l,e,d as s}from"./app.5faadad3.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";var u="/study-everyday/assets/antd-keys.fc62bbe5.png";const r={},k=e('<h1 id="_0405-\u4ECA\u65E5\u603B\u7ED3" tabindex="-1"><a class="header-anchor" href="#_0405-\u4ECA\u65E5\u603B\u7ED3" aria-hidden="true">#</a> 0405 \u4ECA\u65E5\u603B\u7ED3</h1><p><img src="http://h2.ioliu.cn/bing/Godafoss_ZH-CN9460037606_1920x1080.jpg" alt=""></p><h2 id="\u4ECA\u65E5\u5DE5\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u4ECA\u65E5\u5DE5\u4F5C" aria-hidden="true">#</a> \u4ECA\u65E5\u5DE5\u4F5C</h2><blockquote><p>\u95EE\u9898\uFF0C\u539F\u56E0\uFF0C\u89E3\u51B3\u65B9\u5F0F\uFF0C\u4F18\u5316\uFF0C\u5DE7\u5999\u5B9E\u73B0\uFF0C\u65B0\u77E5\u8BC6</p></blockquote><ul><li><strong>\u8DE8\u9875\u52FE\u9009\u65B0\u65B9\u6848</strong></li></ul>',5),m=s("\u8FD1\u671F\u53D1\u73B0\u7684\u597D\u4E1C\u897F, AntD \u4E2D\u7684 Table \u7EC4\u4EF6 "),b={href:"https://ant.design/components/table-cn/#header",target:"_blank",rel:"noopener noreferrer"},d=s("rowSelection.preserveSelectedRowKeys"),g=s("\u5C5E\u6027\uFF0C\u770B\u5230\u540C\u4E8B\u6709\u4F7F\u7528\u5230\u7528\u4E8E\u5B9E\u73B0\u8DE8\u9875\u52FE\u9009\uFF1A"),h=e('<p><img src="'+u+`" alt=""></p><p>\u6709\u4E86\u8FD9\u4E2A\u5B57\u6BB5<code>\u5B9E\u73B0\u8DE8\u9875\u52FE\u9009</code>\u5E94\u8BE5\u65B9\u4FBF\u591A\u4E86\uFF0C\u914D\u7F6E\u4E3A <code>true</code> \u5373\u53EF</p><ul><li><strong>\u4F7F\u7528 less \u5FAA\u73AF\u53D8\u91CF\u63D0\u6548</strong></li></ul><p>\u9879\u76EE\u4E2D\u6709\u5728\u4F7F\u7528 <code>less \u5FAA\u73AF\u53D8\u91CF</code> \u4F5C\u4E3A\u63D0\u6548\u5DE5\u5177\uFF0C\u914D\u7F6E\u5E38\u7528\u7684\uFF1A</p><ol><li>padding / margin</li><li>font-size / font-weight</li><li>width / height</li><li>color / background-color</li><li>flex \u5C5E\u6027</li><li>display: hidden, none;</li><li>clearfix</li><li>\u7B49\u7B49</li></ol><div class="language-less ext-less line-numbers-mode"><pre class="language-less"><code><span class="token comment">// font-size: 12-28, \u95F4\u9694 2</span>
  <span class="token comment">// fz-n</span>
<span class="token comment">// padding: 2-100</span>
  <span class="token comment">// pd-n: </span>
  <span class="token comment">// pdh-n, pdv-n</span>
  <span class="token comment">// pdt-n, pdb-n, pdl-n, pdr-n</span>
<span class="token comment">// margin: 2-100</span>
  <span class="token comment">// mg-n:</span>
  <span class="token comment">// mgh-n, mgv-n</span>
  <span class="token comment">// mgt-n, mgb-n, mgl-n, mgr-n</span>
<span class="token comment">// width: 2-400</span>
  <span class="token comment">// w-n</span>
<span class="token comment">// </span>

<span class="token comment">// @list: red, white, black, green, yellow, blue, purple, grey, brown, pink, gold, orange;</span>
 
<span class="token comment">// .generate-columns(length(@list));</span>
<span class="token comment">// .generate-columns(@n, @i: 1) when (@i =&lt; @n) {</span>
<span class="token comment">//   @v:extract(@list, @i);</span>
<span class="token comment">//   .g-@{v} {</span>
<span class="token comment">//      color: @v;</span>
<span class="token comment">//   }</span>
<span class="token comment">//   .generate-columns(@n, (@i + 1));</span>
<span class="token comment">// }</span>


<span class="token selector">.spacing(<span class="token variable">@style</span>,  <span class="token variable">@prefix</span>, <span class="token variable">@count</span>, <span class="token variable">@end</span>) when (<span class="token variable">@count</span> &lt;= <span class="token variable">@end</span>)</span> <span class="token punctuation">{</span>
  <span class="token variable">@d<span class="token punctuation">:</span></span><span class="token punctuation">(</span>1px <span class="token operator">*</span> <span class="token variable">@count</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token selector">.@{prefix}@{count}</span><span class="token punctuation">{</span>
    <span class="token property">@{style}</span><span class="token punctuation">:</span> <span class="token variable">@d</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  .<span class="token function">spacing</span><span class="token punctuation">(</span><span class="token variable">@style</span><span class="token punctuation">,</span>  <span class="token variable">@prefix</span><span class="token punctuation">,</span> <span class="token variable">@count</span> <span class="token operator">+</span> 2<span class="token punctuation">,</span> <span class="token variable">@end</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>


.<span class="token function">spacing</span><span class="token punctuation">(</span>margin<span class="token operator">-</span>left<span class="token punctuation">,</span> mgl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>margin<span class="token operator">-</span>right<span class="token punctuation">,</span> mgl<span class="token punctuation">,</span>2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>margin<span class="token operator">-</span>top<span class="token punctuation">,</span> mgl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>margin<span class="token operator">-</span>bottom<span class="token punctuation">,</span> mgl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>padding<span class="token operator">-</span>left<span class="token punctuation">,</span> pdl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>padding<span class="token operator">-</span>right<span class="token punctuation">,</span> pdl<span class="token punctuation">,</span>2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>padding<span class="token operator">-</span>top<span class="token punctuation">,</span> pdl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>padding<span class="token operator">-</span>bottom<span class="token punctuation">,</span> pdl<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 80<span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> w<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 400<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> h<span class="token punctuation">,</span> 2<span class="token punctuation">,</span> 400<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token mixin-usage function">.spacing</span><span class="token punctuation">(</span>font<span class="token operator">-</span>size<span class="token punctuation">,</span> fz<span class="token punctuation">,</span> 12<span class="token punctuation">,</span> 28<span class="token punctuation">)</span><span class="token punctuation">;</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br></div></div><p>\u76F8\u5173\u6587\u7AE0\uFF1A</p>`,7),_={href:"https://less.bootcss.com/",target:"_blank",rel:"noopener noreferrer"},f=s("less \u5B98\u7F51"),v={href:"https://juejin.cn/post/6993709586314166309",target:"_blank",rel:"noopener noreferrer"},x=s("less\u5B66\u4E60\u6307\u5357\u7B2C\u56DB\u671F\u3010\u8FDB\u9636\u3011| \u6761\u4EF6\u8BED\u53E5\u548C\u5FAA\u73AF\u8BED\u53E5"),w={href:"https://www.cnblogs.com/byksj/p/14485641.html",target:"_blank",rel:"noopener noreferrer"},y=s("less \u5FAA\u73AF \u8BA9\u516C\u7528\u6837\u5F0F\u53D8\u7684\u66F4\u7B80\u5355"),j={href:"https://juejin.cn/post/6902698973287907336",target:"_blank",rel:"noopener noreferrer"},z=s("Less(\u4E09) \u2014\u2014 \u9879\u76EE\u4E2D\u4F7F\u7528\u5230\u7684\u51FD\u6570\u4E0E\u5FAA\u73AF\u603B\u7ED3");function N(V,B){const a=t("ExternalLinkIcon");return o(),c(l,null,[k,n("p",null,[m,n("a",b,[d,p(a)]),g]),h,n("ul",null,[n("li",null,[n("a",_,[f,p(a)])]),n("li",null,[n("a",v,[x,p(a)])]),n("li",null,[n("a",w,[y,p(a)])]),n("li",null,[n("a",j,[z,p(a)])])])],64)}var S=i(r,[["render",N]]);export{S as default};
