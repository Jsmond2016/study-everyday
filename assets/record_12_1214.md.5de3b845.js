import{_ as n,c as a,o as s,a as t}from"./app.84a9331f.js";var e="/study-everyday/assets/1214.499ee0d7.jpg";const f='{"title":"1214 \u4ECA\u65E5\u603B\u7ED3","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u4ECA\u65E5\u5DE5\u4F5C","slug":"\u4ECA\u65E5\u5DE5\u4F5C"},{"level":2,"title":"\u4ECA\u65E5\u5FC3\u60C5","slug":"\u4ECA\u65E5\u5FC3\u60C5"}],"relativePath":"record/12/1214.md","lastUpdated":1640423099607}',p={},o=t('<h1 id="_1214-\u4ECA\u65E5\u603B\u7ED3" tabindex="-1">1214 \u4ECA\u65E5\u603B\u7ED3 <a class="header-anchor" href="#_1214-\u4ECA\u65E5\u603B\u7ED3" aria-hidden="true">#</a></h1><p><img src="'+e+`" alt=""></p><h2 id="\u4ECA\u65E5\u5DE5\u4F5C" tabindex="-1">\u4ECA\u65E5\u5DE5\u4F5C <a class="header-anchor" href="#\u4ECA\u65E5\u5DE5\u4F5C" aria-hidden="true">#</a></h2><ul><li>\u52A0\u73ED\uFF1A\u5B8C\u6210\u56FE\u7247\u3001\u6587\u4EF6\u67E5\u770B\u5668\u5F39\u6846\u7EC4\u4EF6</li></ul><p><strong>\u95EE\u9898\uFF1A</strong></p><ul><li>position: fixed \u548C transform \u7684\u95EE\u9898\uFF1B <ul><li><a href="https://zhuanlan.zhihu.com/p/95021620" target="_blank" rel="noopener noreferrer">transform\u4E0Eposition:fixed\u7684\u90A3\u4E9B\u6069\u6028</a></li><li><a href="https://www.cnblogs.com/xxhuan/p/11030244.html" target="_blank" rel="noopener noreferrer">transform \u9047\u4E0A position: fixed</a></li></ul></li><li>\u56E0\u4E3A\u4E0D\u80FD fixed \u548C transform \u4E00\u8D77\u4F7F\u7528 \uFF0C<strong>\u53EA\u80FD\u4F7F\u7528\u7EDD\u5BF9\u5B9A\u4F4D</strong>\u4E86\uFF0C\u4F46\u662F\u8981\u76F8\u5BF9 window \u7EDD\u5BF9\u5B9A\u4F4D\uFF0C<strong>\u53EA\u80FD\u5C06\u5F39\u6846\u7EC4\u4EF6\u653E\u5728 body \u5143\u7D20\u4E0B</strong>\uFF1B</li><li>\u56E0\u6B64\uFF0C\u4F7F\u7528\u4E86 <a href="https://zh-hans.reactjs.org/docs/portals.html" target="_blank" rel="noopener noreferrer">ReactDOM.createPortal</a> \u5C06\u53EF\u62D6\u62FD Modal \u653E\u5728\u4E86 body \u4E0B\uFF1B</li><li>\u540C\u65F6\uFF1A\u8FD9\u4E5F\u89E3\u7B54\u4E86\u6211\u7684\u597D\u5947\uFF0C\u4E3A\u4EC0\u4E48\u62D6\u62FD\u7EC4\u4EF6\u6216\u8005\u5F39\u6846\u7EC4\u4EF6\uFF0C\u9876\u5C42\u5143\u7D20\u90FD\u662F\u8BBE\u7F6E\u7684 <code>position: absolute</code>\uFF0C\u800C\u4E0D\u662F <code>position: fixed</code></li></ul><p><strong>\u539F\u56E0</strong></p><ul><li><a href="https://www.cnblogs.com/xxhuan/p/11030244.html" target="_blank" rel="noopener noreferrer">\u4F8B\u5B50</a></li><li><a href="https://jsbin.com/gasiyewuco/2/edit?html,output" target="_blank" rel="noopener noreferrer">demo</a></li></ul><div class="language-html"><pre><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
    <span class="token selector">.parent</span> <span class="token punctuation">{</span>
        <span class="token property">width</span><span class="token punctuation">:</span> 200px<span class="token punctuation">;</span>
        <span class="token property">height</span><span class="token punctuation">:</span> 300px<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> yellow<span class="token punctuation">;</span>
        <span class="token property">transform</span><span class="token punctuation">:</span> <span class="token function">scale</span><span class="token punctuation">(</span>1<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token selector">.fixed</span> <span class="token punctuation">{</span>
        <span class="token property">position</span><span class="token punctuation">:</span> fixed<span class="token punctuation">;</span>
        <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">bottom</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
        <span class="token property">background</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>parent<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>
        parent
        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&#39;</span>fixed<span class="token punctuation">&#39;</span></span><span class="token punctuation">&gt;</span></span>fixed<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>
</code></pre></div><ul><li><code>position: fixed</code> \u4F1A\u76F8\u5BF9\u7236\u7A97\u53E3\u5F62\u6210\u4E00\u4E2A bfc</li><li><code>transform: scale(1)</code> \u4F1A\u5F62\u6210\u4E00\u4E2A\u65B0\u7684 bfc\uFF0C\u8303\u56F4\u65F6\u5176\u5185\u90E8\u7684\u5B50\u5143\u7D20</li><li>\u5F88\u660E\u663E\uFF0C\u524D\u8005\u5B50\u5143\u7D20\u88AB\u540E\u8005\u7236\u5143\u7D20\u5F62\u6210\u7684 BFC \u6240\u5305\u88F9\uFF0C\u56E0\u6B64\u76F8\u5BF9\u7236\u5143\u7D20\u8FDB\u884C\u5B9A\u4F4D\uFF1B</li></ul><p><strong>\u4F18\u5316\uFF1A</strong></p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Element/scroll" target="_blank" rel="noopener noreferrer">js \u6EDA\u52A8\u7684\u4F7F\u7528\uFF1A<code>smooth</code> \u53C2\u6570\u7684\u4F7F\u7528</a> \u6EDA\u52A8\u66F4\u4F73\u4E1D\u6ED1</li><li><a href="https://blog.csdn.net/lijunlinlijunlin/article/details/45833117" target="_blank" rel="noopener noreferrer">scrollWidth \u548C scrollLeft \u533A\u522B</a> \u4E00\u4E2A\u662F\u603B\u5BBD\u5EA6\uFF0C\u4E00\u4E2A\u662F\u6EDA\u52A8\u7684\u8DDD\u79BB</li></ul><p><strong>\u5DE7\u5999\u5B9E\u73B0\uFF1A</strong></p><ul><li>\u62D6\u52A8\u3010\u8131\u79BB\u6587\u6863\u6D41\u7684\u7EC4\u4EF6\u3011\u5230\u7A97\u53E3\u5916\u90E8\u5BFC\u81F4\u51FA\u73B0\u6A2A/\u7EB5\u5411\u6EDA\u52A8\u6761\u95EE\u9898\uFF1A <ul><li>\u8BBE\u7F6E body \u4E3A <code>overflow: hidden</code> \u7136\u540E\u518D\u8BBE\u7F6E <code>overflow: auto</code> \u8FD8\u539F\u56DE\u6765\uFF1B</li><li>\u53EF\u4EE5\u53C2\u8003 <a href="https://ant-design.gitee.io/components/modal-cn/#header" target="_blank" rel="noopener noreferrer">AntD \u7684 \u5F39\u6846\u7EC4\u4EF6\u7684\u5B9E\u73B0</a></li></ul></li></ul><h2 id="\u4ECA\u65E5\u5FC3\u60C5" tabindex="-1">\u4ECA\u65E5\u5FC3\u60C5 <a class="header-anchor" href="#\u4ECA\u65E5\u5FC3\u60C5" aria-hidden="true">#</a></h2><blockquote><p>\u6240\u89C1\u6240\u60F3\uFF0C\u6709\u611F\u800C\u53D1</p></blockquote><p>\u4E00\u8DEF\u8E29\u5751\uFF0C\u78D5\u78D5\u7ECA\u7ECA\uFF1B</p>`,17),l=[o];function c(r,i,u,k,d,g){return s(),a("div",null,l)}var _=n(p,[["render",c]]);export{f as __pageData,_ as default};
