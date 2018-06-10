const webpack = require("webpack");
const path = require("path");
// vue-loader
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// mini css
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// html-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");

const website = {
  publicPath: "http://localhost:5500/dist/" // .....假的生产环境地址
};

module.exports = {
  mode: "production", // 模式配置
  devtool: '#source-map', // 生产环境开启source-map
  entry: {
    app: "./src/main.js" // 入口文件
  },
  output: {
    // 出口文件
    path: path.resolve(__dirname, "./dist"), // 出口路径
    filename: path.posix.join("static", "js/[name].[chunkhash].js"), // 路径名+hash缓存
    libraryTarget: "amd", // 重点，打包成amd用require.js加载
    publicPath: website.publicPath // css-loader处理Url引入中会用绝对路径引入进来
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      "@": path.join(__dirname, "./", "src") //@ => ./src
    }
  },
  externals: [
    // 当遇到引入包含dojo/dgp/esri模块时，不处理
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
    }
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
          name: path.posix.join("static", "img/[name].[hash:7].[ext]")
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
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader, //......... 分离和压缩css
          "css-loader",
          "postcss-loader",
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
  optimization: {
    // 拆分代码
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
        }
      }
    }
  },
  plugins: [
    // 对应的插件
    // vue-loader
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
       filename: path.posix.join("static", "css/[name].[hash:7].css")
      // chunkFilename: "app.css"
    }),
    // 生成index.html
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, "src", "index.html"),
      hash: false,
      filename: "index.html",
      title: "arcgis-webpack-vue",
      chunks: ['vendor', 'app'],
      links: [
        {
          rel: "stylesheet",
          file: "esri.css",
          //  locale: true,
          path: "http://localhost:8080/arcgis3.24/esri/css/"
        }
      ],
      localScripts: [
        {
          file: "init.js",
          path: "http://localhost:8080/arcgis3.24/"
        }
      ]
    })
  ]
};
