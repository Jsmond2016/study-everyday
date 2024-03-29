
# 0905 本周总结

![](http://h2.ioliu.cn/bing/MoonJellyDay_ZH-CN4121466496_1920x1080.jpg)

## 问题盘点

**技术问题**：

- typescript 的 enum 是类型还是类型值？

答案：类型。Typescript 的 [基础类型包括这些](https://www.runoob.com/typescript/ts-type.html)

- 代码 review：

写代码还是需要多和牛逼的人交流，或者是留给自己时间去 review 一下他人的代码实现，多学习；给自己时间做一些创造性的东西，比如一些 好用的组件，交互的痛点处理方案。这样才能体现自己的价值。否则每天只是重复的搬砖，只不过是重量不同，加班程度不同而已。

- 代码设计：

思考自己的写法是否合理：特别是在 onchange 里面做一些数据操作的时候，考虑优化成 useEffect, useMemo 方案，类似 Vue 的 watch 以及 compouted，这样可以节省很多气力，代码也更优雅。

- 重复 render 问题：uuid 滥用问题。解决方法：
  - 数据源的起始端加 uuid，从而保证后面状态变更的 id 不会再变了；
  - 直接使用 map 的 index 作为 key；但是某些场景（排序，删除节点）不能使用 index 作为 key。

**协作问题**：

- 经常加班的原因：
  - 需求分析不全面：注意一些边边角角的细节，没考虑到位，以及各种异常，页面的后续动作等。
  - 自评时间不够：需要 **详细拆分任务项，每一个任务项给定工时**
  - 技术设计：接口设计一定要 95% 以上的准确性，避免后期返工导致工作量大。
  - 开发自测：一定要亲自走完全流程，从 ui 到接口。否则联调过程中， bff 若没自测 bug 多修阻塞流程就很难受
- **不要把公司的任何东西放到 github 公开仓库**：

我在博客上挂了一个公司前端建设的链接，被公司安全部门私聊了

- **心态控制**：

加班多了，心情自然会烦躁；

在和 产品和测试 argue 的过程中，即使意见不同，也要心平气和。argue 的过程，也是彼此学习的过程。过程中，可以发现自己的不好的开发习惯，可以发现好的交互体验，可以发现公司产品的弊端。

- 遇到**奇怪的需求**

可以先问问大佬的实现思路，问问项目中是否有提供好的工具配置，可以多问问其他大佬，博采众长，改正自己低级的方案和错误方向。


## 任务总结
> 本周任务完成度，完成感受/未完成理由

## 笔记输出

- jd 自动签到领豆的白嫖活动：[基于github action的京东自动化签到
](https://github.com/xcqlucky/JD_Sign_Action)
- [京东签到脚本+腾讯云函数领取京豆，每天免费自动](https://www.bilibili.com/video/BV1uf4y1V762)
- [京东签到脚本+腾讯云函数获取京豆，视频+图文教程（2021成功）](https://guozh.net/jingdong-sign-in-script/)

## 周末学习

## 下周任务

