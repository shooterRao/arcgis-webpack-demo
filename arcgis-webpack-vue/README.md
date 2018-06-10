# 说明

现在技术栈已定vue+es6+，所以我们需要重点研究arcgis-webpack-vue方案，结合目前的业务和项目进行相关预研

## 如何测试？

**Arcgis jsapi地址用的是本人本地部署api的地址，需要改成你们本地或者外网上的地址**

需要更改的文件分别为

* `/index.html` 找到相关信息进行修改(开发环境)
* `webpack.prod.conf.js`里的`new HtmlWebpackPlugin`配置信息进行修改(生产环境)

> npm install
> 
> npm run dev // 启动webpack server, 开启本地开发环境
> npm run build // 打包生产环境

## 目前已经初步完成的

* ES6+
* less
* postCss
* HRM
* webpack生产环境开发环境相分离
* vscode arcgis-jsapi代码提示

### ----20180610新增----

* vue组件异步加载(点击加载)

## 有想法的童鞋可以结合之前会议讨论的内容，进行相关研究，有成果了欢迎PR

如何pr?

> fork -> clone到你本地 ->  修改代码  > commit -> 回到该项目发起pull-request请求

