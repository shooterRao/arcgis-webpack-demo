#### 说明
这是由`arcgis-webpack-es6`衍生出来，配合`react`框架的小实现，其中，用webpack对`react`等第三方依赖包进行了**拆包**实验，里面只引入了`react`和`react-dom`库，生产环境(经过压缩)下，react的代码只有**100k**，而测试环境下居然高达**600k**。所以，如何在生产环境下配合webpack进行代码优化是非常值得研究的。

#### 如何测试？

> npm install
> 
> npm run server // 启动webpack server

**相关启动项配置可以在package.json里修改**

