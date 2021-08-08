import{o as l,c as i,a as u}from"./app.13bb681e.js";const e='{"title":"如何做前端技术设计","description":"","frontmatter":{},"relativePath":"record/read-notes/book-2.md","lastUpdated":1628437536588}',r={},a=u('<h1 id="如何做前端技术设计"><a class="header-anchor" href="#如何做前端技术设计" aria-hidden="true">#</a> 如何做前端技术设计</h1><ul><li>页面布局（使用什么 UI 组件等） <ul><li>表单元素： <ul><li>默认值，极大值/长度，极小值，边界值;</li></ul></li><li>默认交互（如弹框点击浮层是否关闭）；</li><li>文字展现： <ul><li>考虑 是否保留原格式（文本域，富文本）</li><li>是否超长换行，隐藏，文字溢出（展示）</li></ul></li><li>功能实现（基础功能实现，复杂功能如 拖拽，导入导出，上传下载等实现） <ul><li>详细通读需求，不能只看 UI 效果</li><li>基础功能开发</li><li>复杂功能预研</li></ul></li></ul></li><li>组件设计（配置化表单可能需要自定义很多组件，因此可以先思考如何设计基础组件） <ul><li>组件内部状态</li><li>组件内部方法</li><li>受控参数、方法。</li><li>组件复用：考虑编辑态，查看态；避免重复代码，重复bug重复修改</li></ul></li><li>通用方法和工具，避免造轮子： <ul><li>url 参数获取</li><li>路由跳转</li><li>常用正则</li><li>lodash 的使用</li><li>css 原子样式</li><li>axios 拦截器</li></ul></li><li>数据流考虑： <ul><li>是否存在多个父子组件通信，使用 store？</li><li>简单的父子组件足够，使用 state？</li><li>使用 缓存：localstorage</li></ul></li><li>技术难点和调研方案（例如，拖拽方案，移动端自定义表单组件的校验等问题）</li><li>是否存在性能优化的点： <ul><li>请求数量尽可能少</li><li>深浅拷贝数据尽可能放在最里层，遍历次数最小，遍历范围最少</li><li>数据量是否大？BFF层聚合多不多？是否考虑开启 web worker 处理？</li><li>防抖/节流：输入监听事件和宽度变化事件，按钮操作添加防抖？</li></ul></li><li>接口字段（需要先分析可能需要哪些接口，后端要提供哪些接口等） <ul><li>字段确认</li><li>考虑数据是否带有唯一id，场景是否需要</li><li>指定错误码拦截和对应提示，对应的后续交互动作？结合 axios 拦截器使用</li><li>数据 Mock</li></ul></li><li>实体接口 Typescript 数据类型设计</li><li>任务拆分，时间预估和排期（先紧后松原则） <ul><li>UI + 功能开发 + 对应接口的 Mock 数据</li><li>BFF 接口开发</li><li>自测 + 前后端联调（集成环境）</li><li>自测 + 对照需求，测试点确认。</li></ul></li></ul>',2);r.render=function(u,e,r,t,o,s){return l(),i("div",null,[a])};export default r;export{e as __pageData};
