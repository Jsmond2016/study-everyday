import{_ as n,c as s,o as a,b as t,d as o}from"./app.a9a48977.js";const e='{"title":"1108","description":"","frontmatter":{},"headers":[{"level":2,"title":"工作","slug":"工作"},{"level":2,"title":"今日学习——Cluster","slug":"今日学习——cluster"},{"level":2,"title":"今日算法","slug":"今日算法"},{"level":2,"title":"温故知新","slug":"温故知新"},{"level":2,"title":"好文推荐","slug":"好文推荐"},{"level":2,"title":"项目推荐","slug":"项目推荐"},{"level":2,"title":"面经相关","slug":"面经相关"},{"level":2,"title":"明日计划","slug":"明日计划"},{"level":2,"title":"TODOS","slug":"todos"}],"relativePath":"record/11/1108.md","lastUpdated":1636382260709}',l={},c=[t("h1",{id:"_1108",tabindex:"-1"},[o("1108 "),t("a",{class:"header-anchor",href:"#_1108","aria-hidden":"true"},"#")],-1),t("p",null,[t("img",{src:"/study-everyday/assets/1108.cb79a9a9.jpg",alt:""})],-1),t("h2",{id:"工作",tabindex:"-1"},[o("工作 "),t("a",{class:"header-anchor",href:"#工作","aria-hidden":"true"},"#")],-1),t("ul",null,[t("li",null,"再次学习一下公司的 BFF 特点：")],-1),t("p",null,[t("img",{src:"/study-everyday/assets/20211108205309.e9a17bdd.png",alt:""})],-1),t("p",null,"bff 除了具有 koa 的基本特性如：",-1),t("ul",null,[t("li",null,"controller/router"),t("li",null,"params/body 解析"),t("li",null,"jwt 鉴权处理"),t("li",null,"cors/helmet/安全等处理")],-1),t("p",null,"主要升级了：",-1),t("ul",null,[t("li",null,"apm"),t("li",null,"applo"),t("li",null,"cluster"),t("li",null,"logger"),t("li",null,"探针"),t("li",null,[t("a",{href:"https://blog.csdn.net/shukebai/article/details/53464887",target:"_blank",rel:"noopener noreferrer"},"etcd 是什么？用来做什么？"),o(" 它是一个键值存储仓库，却没有重视官方定义的后半句，用于配置共享和服务发现。")])],-1),t("p",null,"等等",-1),t("h2",{id:"今日学习——cluster",tabindex:"-1"},[o("今日学习——Cluster "),t("a",{class:"header-anchor",href:"#今日学习——cluster","aria-hidden":"true"},"#")],-1),t("p",null,[t("img",{src:"/study-everyday/assets/cluster.2744a485.png",alt:""})],-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"token comment"},"// master.js"),o("\n"),t("span",{class:"token keyword"},"const"),o(" cluster "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'cluster'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"const"),o(" cpusLen "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'os'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"cpus"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),o("length"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"const"),o(" path "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'path'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\nconsole"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"主进程："),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),o("process"),t("span",{class:"token punctuation"},"."),o("pid"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\ncluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"setupMaster"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o("\n  exec"),t("span",{class:"token operator"},":"),o(" path"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"resolve"),t("span",{class:"token punctuation"},"("),o("__dirname"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token string"},"'./worker.js'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},","),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\n"),t("span",{class:"token keyword"},"for"),o(),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"let"),o(" i "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),o(" i "),t("span",{class:"token operator"},"<"),o(" cpusLen"),t("span",{class:"token punctuation"},";"),o(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  cluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fork"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n\n"),t("span",{class:"token comment"},"// worker.js"),o("\n"),t("span",{class:"token keyword"},"const"),o(" http "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'http'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n\nconsole"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token template-string"},[t("span",{class:"token template-punctuation string"},"`"),t("span",{class:"token string"},"工作进程："),t("span",{class:"token interpolation"},[t("span",{class:"token interpolation-punctuation punctuation"},"${"),o("process"),t("span",{class:"token punctuation"},"."),o("pid"),t("span",{class:"token interpolation-punctuation punctuation"},"}")]),t("span",{class:"token template-punctuation string"},"`")]),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\nhttp"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"createServer"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[o("req"),t("span",{class:"token punctuation"},","),o(" res")]),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token operator"},"=>"),o(),t("span",{class:"token punctuation"},"{"),o("\n  res"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"end"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'hello'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"listen"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"8080"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n")])])],-1),t("p",null,[t("strong",null,"核心知识点")],-1),t("blockquote",null,[t("p",null,[o("参考："),t("a",{href:"https://blog.csdn.net/u012060033/article/details/102766342",target:"_blank",rel:"noopener noreferrer"},"NodeJS 之 cluster 模块")])],-1),t("ul",null,[t("li",null,[t("p",null,"为什么要开启多个子进程：充分利用 多核 CPU 资源——主进程监听端口和转发，子进程负责处理业务；")]),t("li",null,[t("p",null,"主进程和子进程端口占用问题：实际上只会主进程占用端口，worker 进程的 listen 被特殊化处理了，并不会真正的监听端口；")]),t("li",null,[t("p",null,[o("进程间通信问题：使用 "),t("code",null,"eventEmitter"),o(" IPC 通信")])]),t("li",null,[t("p",null,"集群如何管理："),t("ul",null,[t("li",null,[t("s",null,"多个 Node 实例，多个端口"),o("，虽然各个实例各自独立稳定，但是占用了多余的端口而且不利于进程通信；")]),t("li",null,"主进程向子进程转发请求：由 master 进程创建多个 worker 进程，根据 cpu 数目来创建对应的实例；监听的都是同一个端口；")])]),t("li",null,[t("p",null,"如何实现端口共享？主进程监听端口，接受信息后通过 ipc 通信转发给子进程；")]),t("li",null,[t("p",null,"主进程转发给子进程，该转发给谁？转发的策略是什么？"),t("ul",null,[t("li",null,"默认的转发策略是轮询。当有客户请求到达，master会轮询一遍worker列表，找到第一个空闲的worker，然后将该请求转发给该worker。")]),t("blockquote",null,[t("p",null,'调度策略，包括循环计数的 cluster.SCHED_RR，以及由操作系统决定的cluster.SCHED_NONE。 这是一个全局设置，当第一个工作进程被衍生或者调动cluster.setupMaster()时，都将第一时间生效。除Windows外的所有操作系统中，SCHED_RR都是默认设置。只要libuv可以有效地分发IOCP handle，而不会导致严重的性能冲击的话，Windows系统也会更改为SCHED_RR。cluster.schedulingPolicy 可以通过设置NODE_CLUSTER_SCHED_POLICY环境变量来实现。这个环境变量的有效值包括"rr" 和 "none"。'),t("p",null,"RR 即 Round-Robin 轮询调度，即每个子进程的获取的事件的机会是均等的，这是除 windows以外默认的。而 windows 下的调度策略很诡异，见下图。目前并没有相关 API 可以设置调度策略的算法，node 只为我们提供了两个值")]),t("p",null,[o("来源："),t("a",{href:"https://www.yisu.com/zixun/179127.html",target:"_blank",rel:"noopener noreferrer"},"node中cluster集群的作用是什么")])]),t("li",null,[t("p",null,"worker 进程？身份标识？"),t("ul",null,[t("li",null,[o("创建子进程后会返回 "),t("code",null,"pid"),o(" 即子进程的身份标识；")])])]),t("li",null,[t("p",null,"子进程管理？挂了怎么办？"),t("ul",null,[t("li",null,[o("监听 "),t("code",null,"online, exit"),o(" 事件")]),t("li",null,"代码：")])])],-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"var"),o(" cluster "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'cluster'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),o("cluster"),t("span",{class:"token punctuation"},"."),o("isMaster"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"var"),o(" numWorkers "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token function"},"require"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'os'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"cpus"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},"."),o("length"),t("span",{class:"token punctuation"},";"),o("\n  console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Master cluster setting up '"),o(),t("span",{class:"token operator"},"+"),o(" numWorkers "),t("span",{class:"token operator"},"+"),o(),t("span",{class:"token string"},"' workers...'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"var"),o(" i "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},";"),o(" i "),t("span",{class:"token operator"},"<"),o(" numWorkers"),t("span",{class:"token punctuation"},";"),o(" i"),t("span",{class:"token operator"},"++"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    cluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fork"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),o("\n cluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'online'"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"worker"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Worker '"),o(),t("span",{class:"token operator"},"+"),o(" worker"),t("span",{class:"token punctuation"},"."),o("process"),t("span",{class:"token punctuation"},"."),o("pid "),t("span",{class:"token operator"},"+"),o(),t("span",{class:"token string"},"' is online'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\ncluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'exit'"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[o("worker"),t("span",{class:"token punctuation"},","),o(" code"),t("span",{class:"token punctuation"},","),o(" signal")]),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Worker '"),o(),t("span",{class:"token operator"},"+"),o(" worker"),t("span",{class:"token punctuation"},"."),o("process"),t("span",{class:"token punctuation"},"."),o("pid "),t("span",{class:"token operator"},"+"),o(),t("span",{class:"token string"},"' died with code: '"),o(),t("span",{class:"token operator"},"+"),o(" code "),t("span",{class:"token operator"},"+"),o(),t("span",{class:"token string"},"', and signal: '"),o(),t("span",{class:"token operator"},"+"),o(" signal"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    console"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"log"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'Starting a new worker'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    cluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fork"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),o("\n")])])],-1),t("ul",null,[t("li",null,"常用 API")],-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[o("\n"),t("span",{class:"token comment"},"// ---- cluster-----"),o("\ncluster"),t("span",{class:"token punctuation"},"."),o("isMaster\ncluster"),t("span",{class:"token punctuation"},"."),o("isWorker\ncluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"fork"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o("\ncluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"kill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o("\ncluster"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'listening'"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},[o("worker"),t("span",{class:"token punctuation"},","),o(" address")]),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),o("\n\n"),t("span",{class:"token comment"},"// cluster: 与 worker.send() 之对应的"),o("\nprocess"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"message"'),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"message"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),o("\n"),t("span",{class:"token comment"},"// 主进程的所有子进程数组"),o("\ncluster"),t("span",{class:"token punctuation"},"."),o("workers\n\n\n"),t("span",{class:"token comment"},"// ---- woker ------"),o("\nworker"),t("span",{class:"token punctuation"},"."),o("id\n"),t("span",{class:"token comment"},"// 所有的worker进程都是用child_process.fork()生成的。child_process.fork()返回的对象，就被保存在worker.process之中。"),o("\n"),t("span",{class:"token comment"},"// 通过这个属性，可以获取 worker 所在的进程对象"),o("\nworker"),t("span",{class:"token punctuation"},"."),o("process\n\n"),t("span",{class:"token comment"},"// 该方法用于在主进程中，向子进程发送信息。"),o("\nworker"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"send"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},'"message"'),t("span",{class:"token punctuation"},")"),o("\n")])])],-1),t("ul",null,[t("li",null,"不中断的重启 node 服务")],-1),t("p",null,[o("重启服务需要关闭后再启动，利用"),t("code",null,"cluster模块"),o("，可以做到先启动一个"),t("code",null,"worker进程"),o("，再把原有的所有"),t("code",null,"work进程关闭"),o("。这样就能实现不中断地重启 Node 服务。 首先，主进程向"),t("code",null,"worker"),o("进程发出重启信号。")],-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[o("workers"),t("span",{class:"token punctuation"},"["),o("wid"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"send"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o("type"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'shutdown'"),t("span",{class:"token punctuation"},","),o(" from"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'master'"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n")])])],-1),t("p",null,"worker 进程监听 message 事件，一旦发现内容是 shutdown，就退出。",-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[o("process"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"on"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'message'"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"message"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),o("message"),t("span",{class:"token punctuation"},"."),o("type "),t("span",{class:"token operator"},"==="),o(),t("span",{class:"token string"},"'shutdown'"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    process"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"exit"),t("span",{class:"token punctuation"},"("),t("span",{class:"token number"},"0"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n")])])],-1),t("p",null,"下面是一个关闭所有 worker 进程的函数",-1),t("div",{class:"language-js"},[t("pre",null,[t("code",null,[t("span",{class:"token keyword"},"function"),o(),t("span",{class:"token function"},"restartWorkers"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n  "),t("span",{class:"token keyword"},"var"),o(" wid"),t("span",{class:"token punctuation"},","),o(" workerIds "),t("span",{class:"token operator"},"="),o(),t("span",{class:"token punctuation"},"["),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token keyword"},"for"),t("span",{class:"token punctuation"},"("),o("wid "),t("span",{class:"token keyword"},"in"),o(" cluster"),t("span",{class:"token punctuation"},"."),o("workers"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    workerIds"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"push"),t("span",{class:"token punctuation"},"("),o("wid"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),o("\n  workerIds"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"forEach"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token parameter"},"wid"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n    cluster"),t("span",{class:"token punctuation"},"."),o("workers"),t("span",{class:"token punctuation"},"["),o("wid"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"send"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},"{"),o("\n      text"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'shutdown'"),t("span",{class:"token punctuation"},","),o("\n      from"),t("span",{class:"token operator"},":"),o(),t("span",{class:"token string"},"'master'"),o("\n     "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n    "),t("span",{class:"token function"},"setTimeout"),t("span",{class:"token punctuation"},"("),t("span",{class:"token keyword"},"function"),t("span",{class:"token punctuation"},"("),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n      "),t("span",{class:"token keyword"},"if"),t("span",{class:"token punctuation"},"("),o("cluster"),t("span",{class:"token punctuation"},"."),o("workers"),t("span",{class:"token punctuation"},"["),o("wid"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},")"),o(),t("span",{class:"token punctuation"},"{"),o("\n        cluster"),t("span",{class:"token punctuation"},"."),o("workers"),t("span",{class:"token punctuation"},"["),o("wid"),t("span",{class:"token punctuation"},"]"),t("span",{class:"token punctuation"},"."),t("span",{class:"token function"},"kill"),t("span",{class:"token punctuation"},"("),t("span",{class:"token string"},"'SIGKILL'"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n      "),t("span",{class:"token punctuation"},"}"),o("\n    "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},","),o(),t("span",{class:"token number"},"5000"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n  "),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},")"),t("span",{class:"token punctuation"},";"),o("\n"),t("span",{class:"token punctuation"},"}"),t("span",{class:"token punctuation"},";"),o("\n")])])],-1),t("p",null,[o("更多参考："),t("a",{href:"https://blog.csdn.net/u012060033/article/details/102766342",target:"_blank",rel:"noopener noreferrer"},"https://blog.csdn.net/u012060033/article/details/102766342")],-1),t("p",null,"相关资料：",-1),t("ul",null,[t("li",null,[t("a",{href:"http://nodejs.cn/api/cluster.html",target:"_blank",rel:"noopener noreferrer"},"cluster 集群")]),t("li",null,[t("a",{href:"https://www.jianshu.com/p/68e54b6ded4e",target:"_blank",rel:"noopener noreferrer"},"Nodejs cluster 主要功能解惑")]),t("li",null,[t("a",{href:"https://www.yisu.com/zixun/179127.html",target:"_blank",rel:"noopener noreferrer"},"node中cluster集群的作用是什么")]),t("li",null,[t("a",{href:"https://blog.csdn.net/baby97/article/details/50675352",target:"_blank",rel:"noopener noreferrer"},"nodejs 中 cluster 使用"),o(" 充分利用多核cpu，开启多进程，处理主进程和多个 worker 子进程之间的通信和状态监控")]),t("li",null,[t("a",{href:"https://www.jianshu.com/p/c90dc4adcaf4",target:"_blank",rel:"noopener noreferrer"},"cluster 相关代码和例子")]),t("li",null,[t("a",{href:"https://blog.csdn.net/u012060033/article/details/102766342",target:"_blank",rel:"noopener noreferrer"},"cluster 的主要 API 详解和使用以及 pm2 原理")]),t("li",null,[t("a",{href:"https://www.cnblogs.com/helloxiaoduan/p/14345825.html",target:"_blank",rel:"noopener noreferrer"},"node集群（cluster）")]),t("li",null,[t("a",{href:"https://zhuanlan.zhihu.com/p/157987519",target:"_blank",rel:"noopener noreferrer"},"Node.js：cluster原理简析")])],-1),t("p",null,[o("推荐笔记： "),t("a",{href:"https://github.com/chyingp/nodejs-learning-guide",target:"_blank",rel:"noopener noreferrer"},"Nodejs学习笔记以及经验总结")],-1),t("p",null,"拓展知识：",-1),t("ul",null,[t("li",null,[o("node 定时任务： "),t("ul",null,[t("li",null,[t("a",{href:"https://www.npmjs.com/package/node-cron",target:"_blank",rel:"noopener noreferrer"},"node-cron")]),t("li",null,[t("a",{href:"https://www.npmjs.com/package/node-schedule",target:"_blank",rel:"noopener noreferrer"},"node-schedule")])])])],-1),t("h2",{id:"今日算法",tabindex:"-1"},[o("今日算法 "),t("a",{class:"header-anchor",href:"#今日算法","aria-hidden":"true"},"#")],-1),t("p",null,"今日学习：",-1),t("p",null,"今日复习：",-1),t("h2",{id:"温故知新",tabindex:"-1"},[o("温故知新 "),t("a",{class:"header-anchor",href:"#温故知新","aria-hidden":"true"},"#")],-1),t("blockquote",null,[t("p",null,"防抖节流，http 握手，缓存，各种手写")],-1),t("h2",{id:"好文推荐",tabindex:"-1"},[o("好文推荐 "),t("a",{class:"header-anchor",href:"#好文推荐","aria-hidden":"true"},"#")],-1),t("blockquote",null,[t("p",null,"有感好文")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://juejin.cn/collection/6845244185432293389",target:"_blank",rel:"noopener noreferrer"},"nest 实战教程"),o("，对应仓库 "),t("a",{href:"https://github.com/SephirothKid/nest-zero-to-one",target:"_blank",rel:"noopener noreferrer"},"nest-zero-to-one")]),t("li",null,[t("a",{href:"https://github.com/Lewage59/car-assembly",target:"_blank",rel:"noopener noreferrer"},"car-assembly"),o(" nest 实战")])],-1),t("h2",{id:"项目推荐",tabindex:"-1"},[o("项目推荐 "),t("a",{class:"header-anchor",href:"#项目推荐","aria-hidden":"true"},"#")],-1),t("blockquote",null,[t("p",null,"值得学习的项目")],-1),t("ul",null,[t("li",null,[t("a",{href:"https://www.npmjs.com/package/elastic-apm-node",target:"_blank",rel:"noopener noreferrer"},"elastic-apm-node"),o(" apm 是什么？ 主要是用来收集系统性能信息和错误信息的工具")]),t("li",null,[t("a",{href:"https://blog.csdn.net/qq_20906903/article/details/109329951",target:"_blank",rel:"noopener noreferrer"},"elastic APM 简单使用")]),t("li",null,[t("a",{href:"https://devtool.tech/tiny-image",target:"_blank",rel:"noopener noreferrer"},"微图 - 极速图片压缩工具"),o("，附带其他面试题笔记等等")]),t("li",null,[t("a",{href:"https://www.npmjs.com/package/download",target:"_blank",rel:"noopener noreferrer"},"download/github"),o(" 一个下载库，一般用于爬虫下载图片之类的")])],-1),t("h2",{id:"面经相关",tabindex:"-1"},[o("面经相关 "),t("a",{class:"header-anchor",href:"#面经相关","aria-hidden":"true"},"#")],-1),t("blockquote",null,[t("p",null,"八股文相关")],-1),t("h2",{id:"明日计划",tabindex:"-1"},[o("明日计划 "),t("a",{class:"header-anchor",href:"#明日计划","aria-hidden":"true"},"#")],-1),t("h2",{id:"todos",tabindex:"-1"},[o("TODOS "),t("a",{class:"header-anchor",href:"#todos","aria-hidden":"true"},"#")],-1),t("p",null,"工作 TODO",-1),t("p",null,"1-通读 bff 文档，看看公司的 bff 做了什么事情，特点和不一样的地方（价值点）在哪里？ 2-你感兴趣的点再哪里？猜想对应的实现和 gitlab 仓库代码的具体实现，总结你的成长； 3-自己是否能够贡献一些代码？",-1)];var p=n(l,[["render",function(n,t,o,e,l,p){return a(),s("div",null,c)}]]);export{e as __pageData,p as default};
