import{_ as e,c as r,o as l,a}from"./app.fb90d65f.js";const t='{"title":"0507","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"学习","slug":"学习"},{"level":2,"title":"反思","slug":"反思"},{"level":2,"title":"好文推荐","slug":"好文推荐"}],"relativePath":"record/05/0507.md","lastUpdated":1635866173873}',i={},o=[a('<h1 id="_0507" tabindex="-1">0507 <a class="header-anchor" href="#_0507" aria-hidden="true">#</a></h1><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-hidden="true">#</a></h2><ul><li>一直在做关于前端图片加水印的需求</li><li>总结： <ul><li>前端水印分为2种，一种是应用背景加水印，水印在用户登录的时候生成用户名、租户名等信息，作为背景图平铺在底层 <code>div</code> 上</li><li>另一种是给图片加水印，用户上传图片的时候根据配置信息实时加水印存储</li><li>这次做的是第二种： <ul><li>原理：使用 <code>canvas</code> 结合 <code>fillText</code> 生成小的水印图，然后使用 <code>createPattern(canvas, &#39;repeat&#39;)</code> 平铺在用户上传的资料上</li><li>难点：水印倾斜后内容位置、宽度计算。因为限制30个字符的长度，图片大小不一，水印大小和水印内容字体大小是随着图片大小变化的，这里涉及一些数学计算处理。</li><li>坑：一开始并不知道 <code>canvas</code> 可以使用 <code>createPattern</code> 这个 <code>API</code> 进行平铺，我是直接将整个画布进行旋转，平移，这里头的位置移动参数很难调，几乎快要无解。</li></ul></li></ul></li></ul><h2 id="学习" tabindex="-1">学习 <a class="header-anchor" href="#学习" aria-hidden="true">#</a></h2><ul><li>优秀文章</li><li>算法：<a href="https://leetcode-cn.com/problems/xor-operation-in-an-array/" target="_blank" rel="noopener noreferrer">1486. 数组异或操作</a></li></ul><h2 id="反思" tabindex="-1">反思 <a class="header-anchor" href="#反思" aria-hidden="true">#</a></h2><ul><li>做的不好的 <ul><li>没有做好今天工作和学习计划，时间管理没做好</li><li>卡在一个问题上太久，应该及时寻求帮助和支持。</li></ul></li><li>如何改进： <ul><li>每天做好第二天的计划 todos，在合理范围内的任务项，尽可能达成，包括不限于：工作，学习，生活锻炼等。</li><li>遇到技术问题不能解决时候，第一时间寻求支持。可能你认为的难题，人家大佬早就踩过坑了；或者你在做的事情已经有成熟的库支持，省时省力，只是你不知道而已。</li><li>正确搜索：技术问题多用谷歌搜索和 <code>github/npm</code> 搜索，毕竟 talk is treap, show me the code!</li></ul></li></ul><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-hidden="true">#</a></h2><blockquote><p>以下推荐来自 <a href="http://www.ruanyifeng.com/blog/2021/05/weekly-issue-157.html" target="_blank" rel="noopener noreferrer">阮一峰周刊</a></p></blockquote><ul><li><a href="https://blog.jetbrains.com/zh-hans/blog/2020/10/14/code-with-me/" target="_blank" rel="noopener noreferrer">code-with-me</a> JetBrains 公司推出的 <code>webstorm</code> 插件，可以远程帮女朋友写代码</li><li><a href="https://www.metachris.com/2021/04/starting-a-typescript-project-in-2021/" target="_blank" rel="noopener noreferrer">Starting a TypeScript Project in 2021</a> <code>TypeScript</code> 教程，老外的博客</li><li><a href="https://markodenic.com/css-tips/" target="_blank" rel="noopener noreferrer">css-tips</a> 有趣的 <code>css</code> 小栗子</li><li><a href="https://allround.io/articles/introduction-to-tailwind-css-and-utility-classes" target="_blank" rel="noopener noreferrer">tailwind-css</a> <code>tailwind-css</code> 的基本使用</li><li><a href="https://github.com/wbkd/react-flow" target="_blank" rel="noopener noreferrer">react-flow</a> 制作流程图的 <code>react</code> 库</li><li><a href="https://kk.org/thetechnium/99-additional-bits-of-unsolicited-advice/" target="_blank" rel="noopener noreferrer">KK 给年轻人的99条建议</a></li><li><a href="https://css-tricks.com/how-to-leverage-the-fullscreen-api-and-style-it/" target="_blank" rel="noopener noreferrer">css-tricks-全屏 api</a> 全屏 api 的使用</li><li><a href="https://studygolang.gitbook.io/learn-go-with-tests/" target="_blank" rel="noopener noreferrer">learn-go-with-tests</a> 通过测试用例学习go</li></ul>',10)];var n=e(i,[["render",function(e,a,t,i,n,c){return l(),r("div",null,o)}]]);export{t as __pageData,n as default};
