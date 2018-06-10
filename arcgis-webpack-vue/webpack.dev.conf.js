const webpack = require("webpack");
const path = require("path");
// vue-loader
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const website = {
  publicPath: "http://localhost:8000/"
};

module.exports = {
  mode: 'development',      // 模式配置
  entry: {
    app: "./src/main.js", // 入口文件
  },               
  output: {              // 出口文件
    path: path.resolve(__dirname, "./dist"), // 出口路径
    filename: "[name].js",
    libraryTarget: "amd", // 重点，打包成amd用require.js加载
    publicPath: website.publicPath, // css-loader处理Url引入中会用绝对路径引入进来
    // umdNamedDefine: true
  },
  resolve: { 
    extensions: [".js", ".vue", ".json"],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      "@": path.join(__dirname, "./", "src") //@ => ./src
    }
  },
  externals: [                   // 当遇到引入包含dojo/dgp/esri模块时，不处理
    function(context, request, callback) {
      if (
        /^dojo/.test(request) ||
        /^dojox/.test(request) ||
        /^dijit/.test(request) ||
        /^esri/.test(request) ||
        /^dgp/.test(request)
      ) {
        return callback(null, "amd " + request);
      }
      callback();
    }, 
    { jquery : '$'}
  ],
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader",
        options: {
          transformToRequire: {
            video: "src",
            source: "src",
            img: "src",
            image: "xlink:href"
          }
        }
      },
      // 它会应用到普通的 `.js` 文件
      // 以及 `.vue` 文件中的 `<script>` 块
      {
        test: /\.js$/,
        loader: "babel-loader",
        include: [path.join(__dirname, "./", "src")] // 只编译src文件夹下的js
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name:  path.posix.join("static", "img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join("static", "media/[name].[hash:7].[ext]")
        }
      },
      // 它会应用到普通的 `.css` 文件
      // 以及 `.vue` 文件中的 `<style>` 块
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader"]
      },
      {
        test: /\.less$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader", // postcss-loader => autoprefixer
          "less-loader"
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: path.posix.join("static", "fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  optimization: {             // 拆分代码
    //包清单
    // runtimeChunk: {
    //     name: "manifest"
    // },
    //拆分公共包
    splitChunks: {
      cacheGroups: {
        //第三方库(vue,axios,lodash...)
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true
        },
        
      }
    }
  },
  plugins: [             // 对应的插件
    // vue-loader
    new VueLoaderPlugin(),
    // 开启热替换
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.ProvidePlugin({
    //   $: 'jquery',
    //   jQuery : "jquery",
    // }),
  ],
  devServer: {           // 开发服务器配置
    contentBase: path.resolve(__dirname, "./"),
    host: "localhost",
    port: 8000,
    open: true,
    hot: true,
    compress: true
  }
}
