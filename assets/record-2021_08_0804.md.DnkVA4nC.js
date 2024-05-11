import{_ as a,c as e,o as t,a3 as l}from"./chunks/framework.B1tUqxYT.js";const _=JSON.parse('{"title":"0804","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/08/0804.md","filePath":"record-2021/08/0804.md"}'),o={name:"record-2021/08/0804.md"},s=l('<h1 id="_0804" tabindex="-1">0804 <a class="header-anchor" href="#_0804" aria-label="Permalink to &quot;0804&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/ChocoHillBohol_ZH-CN9297094265_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>问题1-<strong>全局设置 AntD 属性</strong>：一般来说，如果要自定义组件的主题或者样式，定义一个全局的 css 或者使用 css module的方式文件覆盖 AntD 默认样式即可；但是，对于 AntD 组件的默认 <strong>属性</strong> 如何覆盖？</li></ul><p>今天有个需求是，设置 Modal 框的 <code>maskClosable</code> 属性，即默认点击蒙版不关闭弹框，避免用户在弹框内编辑不小心点了蒙版就关闭了导致编辑的数据丢失。</p><p>我的做法是，先看看 AntD 有没有提供设置默认属性的方式，看了下，没有；然后只能项目全局搜索 Modal 组件，给每一个组件设置 props 这个 <code>maskClosable</code> 属性为 false；左边的大佬同事一听，就对我嗤之以鼻了，显然看不惯我的这种做法，他直接看了下 Modal 的源码，然后再项目的 <code>App.tsx</code> 文件中，设置了 <code>Modal.defaultProps.maskClosable = false</code>，我直呼 NB 啊！</p><p>确实啊，如果 组件没提供某个方式 ，那么只能看源码了，然而，我还是...很菜...</p><p><a href="https://github.com/ant-design/ant-design/blob/master/components/modal/Modal.tsx" target="_blank" rel="noreferrer">Modal组件源码</a></p><ul><li><p>问题2-<strong>Flex 默认撑满高度</strong>：一个父组件下有多个子组件，某一个子组件因为设置了宽度，但是内容超长，撑开了高度，导致其他兄弟组件也默认撑开了高度；想要的效果是其他兄弟组件不要和这个兄弟组件一样被撑开高度，因此，这些 【被带胖】的兄弟组件，需要设置 <code>align-self: base-line;</code> 样式，让自己始终保持自己的 “身材” 不变形。</p></li><li><p>问题3-<strong>文本域输入内容</strong>，在输出结果要保持一致；如果用户输入了 <strong>空格、回车换行</strong>，在展示态的时候，也要展示对应的回车换行。但是如果只是以 <code>&lt;div&gt;{value}&lt;/div&gt;</code> 的方式展示，是不行的。需要处理回车和空格：</p></li></ul><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>value.split(&#39;\\r&#39;).map(v =&gt; &lt;div&gt;{value.replace(/\\s/g, &#39;&amp;ngsp;&#39;)}&lt;/div&gt;)</span></span></code></pre></div><ul><li>其他工作：联调，自测，修复bug</li></ul><hr><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://juejin.cn/post/6992200385561624607?from=main_page" target="_blank" rel="noreferrer">Vite介绍和原理解析</a></li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><ul><li><a href="https://segmentfault.com/a/1190000040096254" target="_blank" rel="noreferrer">vite+vue3+ts搭建通用后台管理系统</a> 后台项目，配置很全面</li></ul><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2><ul><li>react-dnd 使用总结</li></ul>',18),r=[s];function n(i,d,c,p,h,u){return t(),e("div",null,r)}const m=a(o,[["render",n]]);export{_ as __pageData,m as default};
