const path = require("path");
const webpack = require("webpack");

const website = {
  publicPath: "http://localhost:8000/" 
}

module.exports = {
  entry: "./src/main.js",
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: "bundle.js",
    publicPath: website.publicPath,
    libraryTarget: "amd" //核心
  },
  plugins: [
    // 热替换，热替换不是刷新
    // 开启时，当用上vue和react写的模块时，不会刷新浏览器进行模块替换
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      // 编译ES6
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader"
      }
      // css暂不测试
      // {
      //     test: /\.css$/,
      //     use: [
      //       'style-loader',
      //       'css-loader'
      //     ]
      // }
    ]
  },
  externals: [
    function(context, request, callback) {
      if (
        /^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }
  ],
  resolve: {
    // 设置别名
    // alias: {
    //     $: './src/jquery.js'
    // },
    // 省略后缀
    extensions: ['.js', '.json', '.css']
},
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    host: 'localhost',
    port: 8000,
    open: true,
    hot: true,
    compress:true
}
};
