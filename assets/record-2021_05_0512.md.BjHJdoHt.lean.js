import{_ as a,c as t,a2 as o,o as i}from"./chunks/framework.ek9jOonm.js";const p=JSON.parse('{"title":"0512","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/05/0512.md","filePath":"record-2021/05/0512.md"}'),l={name:"record-2021/05/0512.md"};function r(c,e,d,n,u,s){return i(),t("div",null,e[0]||(e[0]=[o('<h1 id="_0512" tabindex="-1">0512 <a class="header-anchor" href="#_0512" aria-label="Permalink to &quot;0512&quot;">​</a></h1><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><ul><li>水印需求优化：前端组长帮助优化了代码，实现了理想效果。自己需要花时间看看那个自己不懂的地方，做好笔记总结！</li><li>新的问题：修改了 <code>input type=&quot;file&quot; accept=&quot;image/*&quot;</code> 里面的东西为 <code>accept=&quot;image/jpg, image/jpeg, image/png&quot;</code> ，结果导致手机端点开上传不能选择相机，原先效果是可以选择【相机】和【图片文件夹】，现在只有后者。一开始以为不是自己的代码导致，结果自己测试后傻眼了。<a href="https://jsbin.com/pigobupilo/10/edit?output" target="_blank" rel="noreferrer">测试-手机端点开</a> 这里就可以看得很明显</li><li>这个问题网上有前人踩过这个坑，但是解决方法加 <code>capture=&quot;camera&quot;</code> 效果无效；而这次的需求是限制图片类型，那在 <code>onchange</code> 事件中做限制也是可行的，巧妙的绕过，避免处理不同机型和微信内置浏览器等兼容这个问题。</li><li>新的问题2：解决了水印，解决了点击上传唤醒相机，新的问题又来了：上传文件太大，本地加水印和上传时间特别长，移动端考虑需要在上传前对图片进行压缩。因为当前的手机相机越来越好，像素也越来越大，导致图片的体积也越来越大，而我们产品限制只能传 5M 以下的图片，通常用户拍照的图片都大于这个大小，因此可能需要压缩。but，问了产品，这次不做。不过后面需要做个调研，关于 前端图片压缩。</li></ul><h2 id="学习" tabindex="-1">学习 <a class="header-anchor" href="#学习" aria-label="Permalink to &quot;学习&quot;">​</a></h2><ul><li>优秀文章</li><li>算法</li></ul><h2 id="反思" tabindex="-1">反思 <a class="header-anchor" href="#反思" aria-label="Permalink to &quot;反思&quot;">​</a></h2><ul><li>做的不好的</li></ul><h2 id="todos" tabindex="-1">TODOS <a class="header-anchor" href="#todos" aria-label="Permalink to &quot;TODOS&quot;">​</a></h2><ul><li>图片问题整理总结：水印，相机唤醒，图片压缩等</li><li>图片压缩资料整理</li></ul>',9)]))}const m=a(l,[["render",r]]);export{p as __pageData,m as default};
