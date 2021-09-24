import{_ as n,c as s,o as a,b as t,d as e}from"./app.2da3ac28.js";import{_ as o}from"./0830.99710c1c.js";const l='{"title":"0830","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"任务","slug":"任务"},{"level":2,"title":"反思","slug":"反思"},{"level":2,"title":"明日计划","slug":"明日计划"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"好用的工具","slug":"好用的工具"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/08/0830.md","lastUpdated":1632475296386}',c={},p=[t("h1",{id:"_0830",tabindex:"-1"},[e("0830 "),t("a",{class:"header-anchor",href:"#_0830","aria-hidden":"true"},"#")],-1),t("p",null,[t("img",{src:o,alt:""})],-1),t("h2",{id:"工作",tabindex:"-1"},[e("工作 "),t("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,[t("p",null,"coding，测试")]),t("li",null,[t("p",null,"Typescript 中 高级类型 Exclude 的使用")])],-1),t("p",null,"对比 Pick 和 Omit 的使用：",-1),t("div",{class:"language-typescript"},[t("pre",null,[t("code",null,[e("\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"A")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),e("\n  name"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},";"),e("\n  age"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token builtin"},"number"),t("span",{class:"token punctuation"},";"),e("\n"),t("span",{class:"token punctuation"},"}"),e("\n\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"C")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),e("\n  name"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token builtin"},"string"),e("\n"),t("span",{class:"token punctuation"},"}"),e("\n\n"),t("span",{class:"token comment"},"// 可以使用 Pick 抽取某个属性"),e("\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"CC")]),e(),t("span",{class:"token operator"},"="),e(" Pick"),t("span",{class:"token operator"},"<"),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},"'name'"),t("span",{class:"token operator"},">"),e(),t("span",{class:"token comment"},"// 对应的类型为 const c = { name: string }"),e("\n\n"),t("span",{class:"token comment"},"// 可以使用 Omit 除去某些属性"),e("\n\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"CCC")]),e(),t("span",{class:"token operator"},"="),e(" Omit"),t("span",{class:"token operator"},"<"),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token string"},"'age'"),t("span",{class:"token operator"},">"),e(),t("span",{class:"token comment"},"// 对应的类型为 const c = { name: string }"),e("\n\n")])])],-1),t("p",null,"但是，如果类型是这种：",-1),t("div",{class:"language-typescript"},[t("pre",null,[t("code",null,[e("\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"A")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"1"),e(),t("span",{class:"token operator"},"|"),e(),t("span",{class:"token number"},"2"),e(),t("span",{class:"token operator"},"|"),e(),t("span",{class:"token number"},"3"),e("\n\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"B")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token number"},"3"),e("\n\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"BB")]),e(),t("span",{class:"token operator"},"="),e(" Extract"),t("span",{class:"token operator"},"<"),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token number"},"3"),t("span",{class:"token operator"},">"),e("\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"BBB")]),e(),t("span",{class:"token operator"},"="),e(" Exclude"),t("span",{class:"token operator"},"<"),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},","),e(),t("span",{class:"token number"},"1"),e(),t("span",{class:"token operator"},"|"),e(),t("span",{class:"token number"},"2"),e(),t("span",{class:"token operator"},">"),e("\n")])])],-1),t("p",null,"当然，表示某个属性，也可以这样用：",-1),t("div",{class:"language-typescript"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"A")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),e("\n  name"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token builtin"},"string"),t("span",{class:"token punctuation"},";"),e("\n  age"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token builtin"},"number"),t("span",{class:"token punctuation"},";"),e("\n"),t("span",{class:"token punctuation"},"}"),e("\n\n"),t("span",{class:"token keyword"},"type"),e(),t("span",{class:"token class-name"},[t("span",{class:"token constant"},"B")]),e(),t("span",{class:"token operator"},"="),e(),t("span",{class:"token punctuation"},"{"),e("\n  nickName"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'name'"),t("span",{class:"token punctuation"},"]"),e("\n  realAge"),t("span",{class:"token operator"},":"),e(),t("span",{class:"token constant"},"A"),t("span",{class:"token punctuation"},"["),t("span",{class:"token string"},"'age'"),t("span",{class:"token punctuation"},"]"),e("\n"),t("span",{class:"token punctuation"},"}"),e("\n\n")])])],-1),t("h2",{id:"任务",tabindex:"-1"},[e("任务 "),t("a",{class:"header-anchor",href:"#任务","aria-hidden":"true"},"#")],-1),t("h2",{id:"反思",tabindex:"-1"},[e("反思 "),t("a",{class:"header-anchor",href:"#反思","aria-hidden":"true"},"#")],-1),t("p",null,"上周四，周五 加班到9点半，周六在家加班一天；为什么一直加班？？反映了一些问题：",-1),t("ul",null,[t("li",null,"需求理解不够全面，评审不够仔细"),t("li",null,"先详细看需求，对任何业务、UI效果、交互 有问题的地方，要及时提出；不然到了提测前才发现，已经不好让产品该需求了！"),t("li",null,"需求评审阶段，一定要做好每个接口和字段的详细设计；原则上，保持 bff 接口的灵活和纯净性，尽可能让入参在 web 端传入，不要在 bff 写死某个字段的值。")],-1),t("h2",{id:"明日计划",tabindex:"-1"},[e("明日计划 "),t("a",{class:"header-anchor",href:"#明日计划","aria-hidden":"true"},"#")],-1),t("hr",null,null,-1),t("h2",{id:"好文推荐",tabindex:"-1"},[e("好文推荐 "),t("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),t("h2",{id:"项目推荐",tabindex:"-1"},[e("项目推荐 "),t("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#")],-1),t("h2",{id:"好用的工具",tabindex:"-1"},[e("好用的工具 "),t("a",{class:"header-anchor",href:"#好用的工具","aria-hidden":"true"},"#")],-1),t("h2",{id:"todos",tabindex:"-1"},[e("TODOS "),t("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1)];var r=n(c,[["render",function(n,t,e,o,l,c){return a(),s("div",null,p)}]]);export{l as __pageData,r as default};
