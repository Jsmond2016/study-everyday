import{_ as e,c as a,o as t,a3 as s}from"./chunks/framework.B1tUqxYT.js";const b=JSON.parse('{"title":"0110","description":"","frontmatter":{},"headers":[],"relativePath":"record-2022/01/0110.md","filePath":"record-2022/01/0110.md"}'),l={name:"record-2022/01/0110.md"},c=s(`<h1 id="_0110" tabindex="-1">0110 <a class="header-anchor" href="#_0110" aria-label="Permalink to &quot;0110&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/LammasDay_ZH-CN4229387191_1920x1080.jpg" alt=""></p><h2 id="_0110-今日计划" tabindex="-1">0110 今日计划 <a class="header-anchor" href="#_0110-今日计划" aria-label="Permalink to &quot;0110 今日计划&quot;">​</a></h2><blockquote><p>每天工作前/前一天晚上 做好计划：重点工作、自我提升、其他，<a href="https://github.com/cuixiaorui/study-every-day/issues" target="_blank" rel="noreferrer">提交地址</a></p></blockquote><p><strong>重点工作</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 活动模块代码比对检查（ng-开头，permission 权限）</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> ts any 类型优化</li></ul><p><strong>自我提升</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 复习题目整理</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 算法题-押题整理</li></ul><p><strong>其他</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 锻炼1</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 阅读2</li></ul><h2 id="今日总结" tabindex="-1">今日总结 <a class="header-anchor" href="#今日总结" aria-label="Permalink to &quot;今日总结&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><ul><li>AntD 中 Tree 树形组件，点击 treeItem 实现勾选 <code>checked</code>：想要的效果就是 <code>onSelect</code> 的操作和 <code>onCheck</code> 结果一样；或者说，操作 <code>onSelect</code> 触发的是 <code>onCheck</code>，勾选子节点的时候能够实现父子联动；</li></ul><p>原本的思路是：</p><ul><li>使用 <code>onSelect</code> 事件拿到每一个选中的节点，然后设置 <code>checkedKeys</code>；</li><li>但是有问题：父子 treeItem 没有关联，如 选中所有子节点，父节点没有默认选中；</li><li>思路：<code>onSelect</code> 事件第二个参数 <code>info</code>，获取到每个子节点，每次选中或反选去对比计算；</li><li>小结：这种方式写起来麻烦，树组件层级深的时候，每次设置 <code>onSelect</code> 逻辑太长了</li></ul><p>最佳方式：<code>selectable=false</code>;</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>&lt;Tree</span></span>
<span class="line"><span>  // ... 省略部分属性；</span></span>
<span class="line"><span>  // 使用下面这个属性即可</span></span>
<span class="line"><span>  selectable={false}</span></span>
<span class="line"><span>/&gt;</span></span></code></pre></div><p>来源：</p><ul><li><a href="https://www.zhihu.com/question/267775926/answer/328921136" target="_blank" rel="noreferrer">antd 的Tree，可以像TreeSelect一样点击文字选中节点吗？</a></li></ul><hr><h2 id="手撕代码-算法" tabindex="-1">手撕代码/算法 <a class="header-anchor" href="#手撕代码-算法" aria-label="Permalink to &quot;手撕代码/算法&quot;">​</a></h2><blockquote><p>防抖节流等各种手写，http和网络，浏览器原理，性能优化，Webpack</p></blockquote><h2 id="好文推荐-面经相关-博客项目推荐" tabindex="-1">好文推荐/面经相关/博客项目推荐 <a class="header-anchor" href="#好文推荐-面经相关-博客项目推荐" aria-label="Permalink to &quot;好文推荐/面经相关/博客项目推荐&quot;">​</a></h2><blockquote><p>有感好文，面经，博客，项目等</p></blockquote><h2 id="其他-todos" tabindex="-1">其他/TODOS <a class="header-anchor" href="#其他-todos" aria-label="Permalink to &quot;其他/TODOS&quot;">​</a></h2>`,25),o=[c];function i(n,r,d,p,h,u){return t(),a("div",null,o)}const m=e(l,[["render",i]]);export{b as __pageData,m as default};
