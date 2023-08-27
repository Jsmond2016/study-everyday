import{_ as e,o as r,c as t,O as a}from"./chunks/framework.6305ff1a.js";const l="/study-everyday/assets/how-to-study.cba624ce.png",d=JSON.parse('{"title":"1123","description":"","frontmatter":{},"headers":[],"relativePath":"record-2021/11/1123.md","filePath":"record-2021/11/1123.md"}'),o={name:"record-2021/11/1123.md"},i=a('<h1 id="_1123" tabindex="-1">1123 <a class="header-anchor" href="#_1123" aria-label="Permalink to &quot;1123&quot;">​</a></h1><p><img src="'+l+'" alt=""></p><blockquote><p>封面图来自：<a href="https://colorfu.art" target="_blank" rel="noreferrer">colorfu</a> 一个基于网页的壁纸生成器，提供了丰富的颜色、简洁的界面，可以快速制作&quot;文字 + 颜色/纹理/图片&quot;这种形式的壁纸</p></blockquote><h2 id="工作" tabindex="-1">工作 <a class="header-anchor" href="#工作" aria-label="Permalink to &quot;工作&quot;">​</a></h2><p>上周末两天，我所开发的产品因为刚开始大规模使用，出了大大小小 8 个问题；</p><p>问题描述：</p><ul><li>1.莫名其妙的错误数据，存在 redis 的数据为空数组</li><li>2.数据无法提交，原因是附件名称太长了导致校验报错，修改方案 数据库字段长度放开到 200</li><li>3.用户上传了一个合成的图片达 66页，加了水印，导致查看不了；原因是 加水印后，用户上传图片不能超过 3w 像素大小（阿里云水印功能）限制</li><li>4.后台登录态莫名闪退，公共组件权限问题</li></ul><p>今天开发遇到问题：</p><ul><li><code>flex: none;</code> 如果我们希望项目排在一行里，但是项目的宽度又不被压缩，那么我们应该给项目设置 flex:none，使项目不能被压缩或放大。</li></ul><p>来源：<a href="https://blog.csdn.net/weixin_43117402/article/details/104632042" target="_blank" rel="noreferrer">flex:none 和 flex:1_住汪星球的喵星人的博客 - CSDN 博客</a></p><h2 id="思考和感想" tabindex="-1">思考和感想 <a class="header-anchor" href="#思考和感想" aria-label="Permalink to &quot;思考和感想&quot;">​</a></h2><p>这两天，应对线上问题，虽然问题大多不是出现在我负责的模块，因此周末应急处理的时候也不是我去处理的；</p><p>前端同事负责的 H5 模块，因为用户量大，所以考验大，用户反馈的问题也比较明显；出了问题后，其实我也有义务帮忙排查，只不过这块的代码不如他熟悉而已；</p><p>在应对 生产问题，体现自己和他的差距：</p><ul><li>问题定位：通过查日志，查数据，对比正常接口数据进行分析，猜测用户触发生成错误数据的场景；从而在对应的节点上进行拦截，继而快速修复问题；</li><li>图片 3W 像素的限制：这个其实是我的知识盲区，我并不知道 阿里云 在给图片加水印的时候对图片的大小有这个限制；这里也体现我的 知识边界太窄；</li><li>服务器在处理上传的太大的 PDF 文件出现 <code>time deceased </code> 相关错误的时候，我只能猜测到是服务器响应超时了，但是，想不到是 bff 层的 timeout 时间设置的是多少秒 超时（30s），这里，又反映我对 bff 这块不熟悉；</li></ul><p>总结，<strong>我还有这些需要提升的地方</strong>：</p><ul><li>生产环境<strong>问题分析，快速修复能力</strong>；</li><li>一些服务如 水印服务，上传，导出 等服务的和前端有关的<strong>基础知识还存在很大的盲区</strong>；</li><li>对公司业务使用到的框架基本<strong>参数配置</strong>不够了解；</li></ul><h2 id="好文推荐" tabindex="-1">好文推荐 <a class="header-anchor" href="#好文推荐" aria-label="Permalink to &quot;好文推荐&quot;">​</a></h2><blockquote><p>有感好文</p></blockquote><ul><li><a href="https://www.v2ex.com/t/816981#reply16" target="_blank" rel="noreferrer">分享下我学习新技术时用的一些方法</a></li><li><a href="https://www.bmpi.dev/dev/how-to-learn-tech/" target="_blank" rel="noreferrer">如何学习一门技术</a></li><li><a href="http://www.chengweiyang.cn/" target="_blank" rel="noreferrer">优秀的作者博客</a></li><li><a href="https://juejin.cn/post/6844904135477690376" target="_blank" rel="noreferrer">教会前端工程师对docker的使用</a></li></ul><h2 id="项目推荐" tabindex="-1">项目推荐 <a class="header-anchor" href="#项目推荐" aria-label="Permalink to &quot;项目推荐&quot;">​</a></h2><blockquote><p>值得学习的项目</p></blockquote><ul><li><a href="https://colorfu.art/" target="_blank" rel="noreferrer">colorfu</a> 一个基于网页的壁纸生成器，提供了丰富的颜色、简洁的界面，可以快速制作&quot;文字 + 颜色/纹理/图片&quot;这种形式的壁纸</li><li><a href="https://github.com/LookCos/learn-data-structures" target="_blank" rel="noreferrer">数据结构(C语言)</a></li></ul><h2 id="nest-专题" tabindex="-1">Nest 专题 <a class="header-anchor" href="#nest-专题" aria-label="Permalink to &quot;Nest 专题&quot;">​</a></h2><blockquote><p><a href="https://www.zhihu.com/question/328171275" target="_blank" rel="noreferrer">哪里有nest.js的完整示例项目？-知乎</a></p></blockquote><p>最佳推荐：</p><ul><li><a href="https://gitee.com/zhufengpeixun/zhufeng-nestjs" target="_blank" rel="noreferrer">珠峰 Nest.js 训练营</a> 内容写的非常详细，结合实战内容非常棒</li><li><a href="https://github.com/kuangshp/nestjs-mysql-api" target="_blank" rel="noreferrer">NestJs CRUD for RESTful API</a> 使用 nestjs+mysql+typeorm+jwt+swagger 企业项目中的RBAC权限管理、实现单点登录。</li></ul><hr><ul><li><a href="https://juejin.cn/post/6992097780487929870" target="_blank" rel="noreferrer">Nest 搭建博客系列</a></li><li><a href="https://github.com/huihuipan/blog-serve" target="_blank" rel="noreferrer">Nest 搭建博客系列-对应的代码</a></li><li><a href="https://github.com/nestjs/awesome-nestjs" target="_blank" rel="noreferrer">nest 实战项目</a></li><li><a href="https://github.com/sxlwar/honey-badger" target="_blank" rel="noreferrer">honey-badger</a></li><li><a href="https://github.com/FunnyLiu/nestDemo" target="_blank" rel="noreferrer">nestDemo</a></li><li><a href="https://github.com/shen100/mili" target="_blank" rel="noreferrer">mili</a></li><li><a href="https://github.com/yobett/oec-nest" target="_blank" rel="noreferrer">oec-nest</a></li></ul><h2 id="面经相关" tabindex="-1">面经相关 <a class="header-anchor" href="#面经相关" aria-label="Permalink to &quot;面经相关&quot;">​</a></h2><blockquote><p>八股文相关</p></blockquote><ul><li><a href="https://juejin.cn/post/7033275515880341512#heading-22" target="_blank" rel="noreferrer">前端手写题</a></li><li><a href="https://yangbo5207.github.io/wutongluo/ji-chu-jin-jie-xi-lie/ba-3001-ke-li-hua.html" target="_blank" rel="noreferrer">前端进阶系列</a></li><li><a href="https://github.com/yacan8/blog/issues/33" target="_blank" rel="noreferrer">深入理解Chrome V8垃圾回收机制</a></li><li><a href="https://juejin.cn/post/6850037270729359367" target="_blank" rel="noreferrer">前端最新性能指标</a></li></ul>',32),n=[i];function s(h,u,c,p,f,b){return r(),t("div",null,n)}const _=e(o,[["render",s]]);export{d as __pageData,_ as default};
