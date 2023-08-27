import{_ as l,o as i,c as e,O as t}from"./chunks/framework.6305ff1a.js";const _=JSON.parse('{"title":"0114","description":"","frontmatter":{},"headers":[],"relativePath":"record-2022/01/0114.md","filePath":"record-2022/01/0114.md"}'),a={name:"record-2022/01/0114.md"},o=t('<h1 id="_0114" tabindex="-1">0114 <a class="header-anchor" href="#_0114" aria-label="Permalink to &quot;0114&quot;">​</a></h1><p><img src="http://h2.ioliu.cn/bing/PantheraTigris_ZH-CN3331361509_1920x1080.jpg" alt=""></p><h2 id="_0114-今日计划" tabindex="-1">0114 今日计划 <a class="header-anchor" href="#_0114-今日计划" aria-label="Permalink to &quot;0114 今日计划&quot;">​</a></h2><blockquote><p>每天工作前/前一天晚上 做好计划：重点工作、自我提升、其他，<a href="https://github.com/cuixiaorui/study-every-day/issues" target="_blank" rel="noreferrer">提交地址</a></p></blockquote><p><strong>重点工作</strong></p><ul class="contains-task-list"><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 代码 review</li><li class="task-list-item"><input class="task-list-item-checkbox" disabled="" type="checkbox"> 页面检查存在的问题</li></ul><h2 id="今日总结" tabindex="-1">今日总结 <a class="header-anchor" href="#今日总结" aria-label="Permalink to &quot;今日总结&quot;">​</a></h2><blockquote><p>问题，原因，解决方式，优化，巧妙实现，新知识</p></blockquote><p><strong>关于前端会议：</strong></p><p>今天前端例会，每 2 周举行一次的前端例会，现在觉得很空洞：</p><ul><li>分享者迷茫：没有方向，不知道观众想听什么；</li><li>业务繁忙：没时间准备，以及学习习惯是个人的事情，没有分享学习心得的习惯；</li><li>会前没有总结：或者说，大家没有在每一天总结自己工作中遇到的问题，没有总结就没有话说；</li><li>基本都是老大的一言堂，为什么呢？ <ul><li>普通前端遇到的问题都去找老大解决，产品问题找老大沟通，UI 规范找老大协商，项目经理有线上bug也找到老大协助解决；</li><li>老大手头上一下子堆了很多问题和解决了很多问题，如组件支持需要，ui 规范，业务合理性，生产环境bug等等；</li><li>但是，老大没有整理成重点和文字性内容在会议上说；</li><li>会议上老大说了一通这个那个，但是作为听众感觉就是没有头绪；</li></ul></li></ul><p><strong>关于每日早会</strong></p><ul><li>早会不规范问题： <ul><li>做迭代的时候，每天都知道自己要做什么，明天要做什么等；</li><li>但是这次后台开发，每天有任务，每天也有问题，有的是技术问题，有业务以及UI 规范问题；早会的时候大家没有整理自己的工作内容以及问题汇总/需要团队协助的点；</li><li>然后，大家在早会的时候，各抒己见各说一通，会议主持的老大，一边是记录不过来，一边是应对策略和任务分配不过来，大家面面相觑，各个懵逼；</li><li>小结，早会拖延时间久，会上内容不明确，会后总结不到位，会后责任不清晰；</li></ul></li><li>每天会后的感觉： <ul><li>刚才会议大家说了啥？</li><li>会后我要为团队协作做啥？</li><li>我提的问题什么时候解决？谁来通知我？</li></ul></li></ul><p>然后，问题还是问题，接着又是围着老大解决问题；此时，老大又做不了自己的事情，又要解决团队提出的各种问题......</p><blockquote><p>我觉得高效的早会应该是这样的：</p></blockquote><ul><li>开发人员每日工作任务走 Tapd，确定每日工作内容和提前暴露风险；</li><li>会前各自简单文字描述自己开发中遇到的一些问题，包括： <ul><li>技术难点</li><li>需要协助的地方</li><li>业务不合理的地方</li><li>当前不规范但是需要被规范的地方</li><li>以及自己的开发感受和建议等等；</li></ul></li><li>会议住持人快速收集问题和整理问题，会上讨论；</li><li>小结：会议的目的： <ul><li>暴露问题</li><li>解决问题</li></ul></li></ul><p><strong>关于重构：</strong></p><p>过去一年里，一直在重构，说一下自己的感受：</p><blockquote><p>做的好的地方</p></blockquote><ul><li>新的框架和UI，视觉美观和交互体验更好了，新的主流框架，后期维护更简单了，迭代开发更高效了；</li><li>逐步确定了新版的 UI 规范，代码规范（TS），工程化开发规范（eslint，pre-commit）</li></ul><blockquote><p>尚且存在的问题：</p></blockquote><ul><li>感觉是在换一门框架去重写，把业务代码使用新框架新UI重新写一遍：</li><li>赶工期的情况下，不容易发现原有业务的缺陷，问题还是问题，原封不动；</li><li>没有进行代码设计，没有认真全面负责的 code review，没有在 code review 会议上对特定的业务寻求最优解， 如： <ul><li>图片/文件上传业务：应该确定规范，封装统一的组件按照同一种方式实现；</li><li>文字提示/图片内容提示：统一规范；</li><li>二次确认框：作为按钮的场景，作为 下拉框内的场景</li><li>校验提示：表单组件提示，Modal 弹框确定按钮手动提示</li><li>异步导入/导出：统一化，业务统一，代码形式统一等；</li></ul></li><li>代码在重构，UI 规范也在重构，但是 UI 规范也是不完整的，导致相似的业务场景，UI 和交互效果存在差异；</li><li>所以，如果要进行项目重构，走在前面的，应该是： <ul><li>汇总当前产品的痛点，哪些地方需要规范化，统一化，标准化；</li><li>遵循上述产品的汇总，UI 出原型图，保证页面各个场景的规范和标准化，交互统一；</li><li>最后，才是代码实现：旧代码结合产品汇总的痛点，结合UI给出的标准化： <ul><li>确定痛点问题优先解决</li><li>分析设计图，确定需要开发的通用组件，如 上传、导入、提示，各种交互等；</li><li>业务还原的时候，梳理旧代码的合理性和逻辑漏洞，暴露出来让团队成员看看自己的模块是否有相似的问题，讨论一致性解决方案，标准化处理；</li><li>根据主业务场景进行代码设计：列表页，编辑页，查看页等；</li><li>接着进行代码规范和工程化规范约束：数据流，组件抽离的原则等等；</li></ul></li></ul></li></ul><hr><h2 id="手撕代码-算法" tabindex="-1">手撕代码/算法 <a class="header-anchor" href="#手撕代码-算法" aria-label="Permalink to &quot;手撕代码/算法&quot;">​</a></h2><blockquote><p>防抖节流等各种手写，http和网络，浏览器原理，性能优化，Webpack</p></blockquote><h2 id="好文推荐-面经相关-博客项目推荐" tabindex="-1">好文推荐/面经相关/博客项目推荐 <a class="header-anchor" href="#好文推荐-面经相关-博客项目推荐" aria-label="Permalink to &quot;好文推荐/面经相关/博客项目推荐&quot;">​</a></h2><blockquote><p>有感好文，面经，博客，项目等</p></blockquote><h2 id="其他-todos" tabindex="-1">其他/TODOS <a class="header-anchor" href="#其他-todos" aria-label="Permalink to &quot;其他/TODOS&quot;">​</a></h2>',28),r=[o];function s(c,u,n,p,h,d){return i(),e("div",null,r)}const k=l(a,[["render",s]]);export{_ as __pageData,k as default};
