import{_ as a,c as l,a2 as r,o as t}from"./chunks/framework.ek9jOonm.js";const o="/study-everyday/assets/2021-05-13_20-26-51.BcrJHiyw.png",f=JSON.parse('{"title":"0513","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/05/0513.md","filePath":"record-2021/05/0513.md"}'),i={name:"record-2021/05/0513.md"};function d(c,e,n,u,s,h){return t(),l("div",null,e[0]||(e[0]=[r('<h1 id="_0513" tabindex="-1">0513 <a class="header-anchor" href="#_0513" aria-label="Permalink to &quot;0513&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/QuayBridge_ZH-CN4900551209_1920x1080.jpg" alt=""></p><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li><p>开始 <code>Umijs + AntD</code> 后台开发，记录一下 <code>AntD</code> 使用的问题</p></li><li><p>问题1：使用 <code>Table</code> 组件：<code>Each child in a list should have a unique &quot;key&quot; prop.</code></p><ul><li><p>思考：记录下我的思考路径</p><ul><li>当前页面中我一共使用了 <code>Select, Table</code> 两个组件，通过注释代码的方式排除 <code>Select</code> 组件 ，确定在 <code>Table</code> 组件中</li><li>在 <code>Table</code> 组件中，搜索 <code>key</code> 关键词，有 2 个地方：<code>columns 里面的 dataIndex, key</code> 和 <code>rowKey</code> ，前者在官网看到答案排除问题，后者我已开始没有设置</li><li>复制警告内容，谷歌搜索关键词：<code>AntD Each child in a list should have a unique &quot;key&quot; prop.</code> 找到<a href="https://github.com/ant-design/ant-design/issues/7623" target="_blank" rel="noreferrer">答案</a>，自己少设置了 <code>rowKey</code> 属性</li></ul><p><img src="'+o+'" alt=""></p></li></ul></li><li><p>问题2：<code>Select 属性 defaultValue</code> 问题，数据刷新后依然拿不到最新数据，导致默认值是空</p><ul><li>猜测可能是缓存了值，之前遇到过 <code>Drawer</code> 组件表单值（输入框等组件）不更新问题，当时设置 弹框属性 <code>&lt;Modal destroyOnClose: true /&gt;</code> 和 <code>&lt;Form preserve={false}/&gt;</code> 解决了，本次问题可能类似</li><li>看了下 AndD 官网，没有找到关于这种类似的属性，无解</li><li>谷歌搜索了关键词 <code>AndD Select defaultValue 缓存</code> ，找到了答案 <a href="https://blog.csdn.net/u010856177/article/details/104242498" target="_blank" rel="noreferrer">踩坑-Antd中Select组件中的defaultValue问题</a>，解决方法给 <code>Select</code> 组件（不是 <code>Option</code>） 添加一个属性 <code>key</code> 即可</li></ul></li></ul><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><ul><li><a href="https://github.com/iloveyou11/learning-blog" target="_blank" rel="noreferrer">iloveyou11/learning-blog</a> github 动态看到的一个写的很好的博客，里面记录了 <code>webpack, vue, react</code> 等源码和高阶知识，值得阅读</li><li><a href="https://juejin.cn/post/6960892566921281543" target="_blank" rel="noreferrer">两年半，50W的offer，三本，普通前端如何打好自己的牌</a> 一篇焦虑的面试文章，参考别人如何做到这么<s>优秀</s> 有钱 的。</li><li><a href="https://juejin.cn/post/6961220834073509895" target="_blank" rel="noreferrer">eruda-pixel 前端用了这工具，再也不怕 UI 验收了</a> 同事写的一个 UI 检查工具，方便 UI 验收。感觉对视觉要求很高的产品才需要，例如移动端，门户主页。</li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><ul><li><a href="https://github.com/Michael-lzg/vue-cli4-vant" target="_blank" rel="noreferrer">Michael-lzg/vue-cli4-vant</a> 使用 <code>Vue+Vant</code> 搭建的移动端项目框架，<strong>移动端适配，权限处理，工具函数</strong> 等方面的知识值得学习。</li><li><a href="https://github.com/au1996/vue3-element-admin" target="_blank" rel="noreferrer">au1996/vue3-element-admin</a> 使用 <code>Vue3+vite+element-plus</code> 搭建的后台，最大的特点应该是 <strong>使用 <code>vite</code> 开发</strong> 带来的体验感提升。</li></ul><h2 id="好用的工具" tabindex="-1">好用的工具： <a class="header-anchor" href="#好用的工具" aria-label="Permalink to &quot;好用的工具：&quot;">​</a></h2><ul><li><a href="https://cv.devtool.tech/app" target="_blank" rel="noreferrer">一纸简历</a> markdown 格式实时生成简历，支持多种模板，面试前准备简历的刚需。介绍参考：<a href="https://juejin.cn/post/6961634914613592078" target="_blank" rel="noreferrer">一纸简历：如何使用 Markdown 写出美观简洁的简历</a></li><li>上面的在线简历，附上以前看到过的相似的工具：<a href="https://resume.mdedit.online/#/" target="_blank" rel="noreferrer">木及简历</a> ，介绍参考：<a href="https://juejin.cn/post/6939698263524605965" target="_blank" rel="noreferrer">只用 Markdown 就写出好看的简历，在线简历应用闪亮登场！</a></li></ul><h2 id="反思" tabindex="-1">反思 <a class="header-anchor" href="#反思" aria-label="Permalink to &quot;反思&quot;">​</a></h2><ul><li>每天阅读别人的优秀项目和博客，自己需要动手写一写，总结和整理自己的知识体系才行。</li><li>公司的项目主要为2种，后台产品和移动端（H5）产品，自己是否可以整理下这两种产品的项目模板，常见的业务场景，复杂度，有价值点的东西？</li></ul><h2 id="明日计划" tabindex="-1">明日计划 <a class="header-anchor" href="#明日计划" aria-label="Permalink to &quot;明日计划&quot;">​</a></h2><ul><li>工作：活动详情页开发。</li><li>学习：思考下自己的目标，上半年达成度，算法完成度？</li></ul><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2><ul><li>图片问题整理总结：水印，相机唤醒，图片压缩等</li><li>图片压缩资料整理</li></ul>',16)]))}const b=a(i,[["render",d]]);export{f as __pageData,b as default};
