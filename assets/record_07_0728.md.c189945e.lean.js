import{o as n,c as a,b as s,d as t}from"./app.09fd3907.js";const e='{"title":"0728","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"好用的工具","slug":"好用的工具"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/07/0728.md","lastUpdated":1627571682728}',l={},o=s("h1",{id:"_0728"},[s("a",{class:"header-anchor",href:"#_0728","aria-hidden":"true"},"#"),t(" 0728")],-1),p=s("p",null,[s("img",{src:"/study-everyday/assets/0728.d1bc8a1e.jpg",alt:""})],-1),c=s("h2",{id:"工作"},[s("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#"),t(" 工作")],-1),u=s("ul",null,[s("li",null,"css 问题：最后一个子元素占据剩余空间 ？(这个问题经常忘记)")],-1),r=s("p",null,[t("使用 "),s("code",null,"flex: 1;"),t(" 实现，但是 "),s("code",null,"flex: 1"),t(" 具体代表什么含义呢？")],-1),i=s("div",{class:"language-css"},[s("pre",null,[s("code",null,[s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),t(" 1"),s("span",{class:"token punctuation"},";"),t("\n"),s("span",{class:"token comment"},"/** 等价于 */"),t("\n"),s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),t(" 1 1 0%"),s("span",{class:"token punctuation"},";"),t("\n"),s("span",{class:"token comment"},"/** 具体属性依次为 */"),t("\n"),s("span",{class:"token property"},"flex"),s("span",{class:"token punctuation"},":"),t(" none | [ <"),s("span",{class:"token string"},"'flex-grow'"),t("> <"),s("span",{class:"token string"},"'flex-shrink'"),t(">? || <"),s("span",{class:"token string"},"'flex-basis'"),t("> ]\n\n"),s("span",{class:"token comment"},"/** 具体属性 */"),t("\n"),s("span",{class:"token property"},"flex-shrink"),s("span",{class:"token punctuation"},":"),t(" 1"),s("span",{class:"token punctuation"},";"),t(),s("span",{class:"token comment"},"/* default 1 */"),t("\n"),s("span",{class:"token property"},"flex-grow"),s("span",{class:"token punctuation"},":"),t(" 1"),s("span",{class:"token punctuation"},";"),t("\n"),s("span",{class:"token property"},"flex-basis"),s("span",{class:"token punctuation"},":"),t(" 0%"),s("span",{class:"token punctuation"},";"),t("  "),s("span",{class:"token comment"},"/* default auto */"),t("\n")])])],-1),k=s("p",null,"具体作用：",-1),d=s("ul",null,[s("li",null,"flex-grow: flex-grow 属性定义项目的放大比例，默认为 0，即如果存在剩余空间，也不放大。"),s("li",null,"flex-shrink: 如果所有项目的 flex-shrink 属性都为 1，当空间不足时，都将等比例缩小。如果一个项目的 flex-shrink 属性为 0，其他项目都为 1，则空间不足时，前者不缩小"),s("li",null,[t("flex-basis: flex-basis 属性定义了在分配多余空间之前，项目占据的主轴空间（main size）。"),s("strong",null,"浏览器根据这个属性，计算主轴是否有多余空间"),t("。它的默认值为 auto，即项目的本来大小。")])],-1),f=s("p",null,"资料：",-1),h=s("ul",null,[s("li",null,[s("a",{href:"https://zhuanlan.zhihu.com/p/136223806",target:"_blank",rel:"noopener noreferrer"},"flex:1 到底代表什么")]),s("li",null,[s("a",{href:"https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html",target:"_blank",rel:"noopener noreferrer"},"Flex 布局教程-阮一峰")]),s("li",null,[s("a",{href:"https://www.zhangxinxu.com/wordpress/2019/12/css-flex-basis/",target:"_blank",rel:"noopener noreferrer"},"Oh My God，CSS flex-basis 原来有这么多细节-张鑫旭")])],-1),g=s("p",null,"问题 2：",-1),x=s("ul",null,[s("li",null,[t("dvajs 中获取 state，之前有记录过，在同步操作 reducer 的时候，第一个参数里可以拿到；但是如果在 effects 里面，需要通过 select(state => "),s("a",{href:"http://state.xxx",target:"_blank",rel:"noopener noreferrer"},"state.xxx"),t(") 获取。我已开始以为 select 第一个参数 state 是当前 model 的 state，实际上我错了，试错后 打 log 发现，这个 state 是全局的所有 model 都在里面。因此获取当前 mode，需要使用方式为:")])],-1),m=s("div",{class:"language-js"},[s("pre",null,[s("code",null,[t(" effects"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"{"),t("\n  "),s("span",{class:"token operator"},"*"),s("span",{class:"token function"},"updateMasterInfo"),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},[s("span",{class:"token punctuation"},"{"),t(" payload "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t(),s("span",{class:"token punctuation"},"{"),t(" call"),s("span",{class:"token punctuation"},","),t(" put"),s("span",{class:"token punctuation"},","),t(" select "),s("span",{class:"token punctuation"},"}")]),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token punctuation"},"{"),t("\n    "),s("span",{class:"token keyword"},"const"),t(" currentState "),s("span",{class:"token operator"},"="),t(),s("span",{class:"token keyword"},"yield"),t(),s("span",{class:"token function"},"select"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"("),s("span",{class:"token parameter"},[t("s"),s("span",{class:"token operator"},":"),t(" OptionsConfigState")]),s("span",{class:"token punctuation"},")"),t(),s("span",{class:"token operator"},"=>"),t(" s"),s("span",{class:"token punctuation"},"."),t("currentState"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),t("\n    "),s("span",{class:"token keyword"},"yield"),t(),s("span",{class:"token function"},"put"),s("span",{class:"token punctuation"},"("),s("span",{class:"token punctuation"},"{"),t("\n      type"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token string"},"'currentState/updateState'"),s("span",{class:"token punctuation"},","),t("\n      payload"),s("span",{class:"token operator"},":"),t(),s("span",{class:"token punctuation"},"{"),t("\n        masterInfo"),s("span",{class:"token operator"},":"),t(" data"),s("span",{class:"token punctuation"},","),t("\n      "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t("\n    "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},")"),s("span",{class:"token punctuation"},";"),t("\n  "),s("span",{class:"token punctuation"},"}"),s("span",{class:"token punctuation"},","),t("\n "),s("span",{class:"token punctuation"},"}"),t("\n")])])],-1),y=s("p",null,[t("特别需要注意，要加上 "),s("code",null,"yield"),t(" 关键字，上述三个方法 "),s("code",null,"call, put, select"),t(" 都是如此")],-1),b=s("p",null,[t("问题3："),s("code",null,":global(){}"),t(" 覆盖弹 框样式 失败")],-1),w=s("p",null,[t("使用 css-module 的方式，即 "),s("code",null,":global()"),t(" 去替换 AntD 样式，需要注意个问题，就是关于 弹框有关的组件（Modal，Popconfirm，Dropdown等），若要覆盖样式，不是写在某个 组件内去覆盖，而是需要写在最外面，因为 弹框组件都是在最外层的。")],-1),v=s("hr",null,null,-1),S=s("h2",{id:"好文推荐"},[s("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#"),t(" 好文推荐")],-1),_=s("ul",null,[s("li",null,[s("a",{href:"https://mp.weixin.qq.com/s/Jrr2XixgKEGXn3zU6DP6Mg",target:"_blank",rel:"noopener noreferrer"},"8则未必知道且超级实用的纯CSS布局排版技巧 | 网易4年实践")])],-1),O=s("h2",{id:"项目推荐"},[s("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#"),t(" 项目推荐")],-1),z=s("h2",{id:"好用的工具"},[s("a",{class:"header-anchor",href:"#好用的工具","aria-hidden":"true"},"#"),t(" 好用的工具")],-1),D=s("h2",{id:"todos"},[s("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#"),t(" TODOS")],-1);l.render=function(s,t,e,l,j,M){return n(),a("div",null,[o,p,c,u,r,i,k,d,f,h,g,x,m,y,b,w,v,S,_,O,z,D])};export default l;export{e as __pageData};
