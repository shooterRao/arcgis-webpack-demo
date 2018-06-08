const webpack = require("webpack");
const path = require("path");
// vue-loader
const VueLoaderPlugin = require("vue-loader/lib/plugin");
// extractCSS
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

var isProduction = process.env.NODE_ENV === "production";

const website = {
  publicPath: "http://localhost:8000/"
};

const config = {
  build: {
    // env: require('./prod.env'),
    index: path.resolve(__dirname, "./dist/index.html"),
    assetsRoot: path.resolve(__dirname, "./dist"),
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    productionSourceMap: true,
    productionGzip: false,
    productionGzipExtensions: ["js", "css"],
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    // env: require('./dev.env'),
    contentBase: path.resolve(__dirname, "./"),
    port: 8000,
    autoOpenBrowser: true,
    assetsSubDirectory: "static",
    assetsPublicPath: "/",
    proxyTable: {},
    cssSourceMap: true
  }
};

function resolve(dir) {
  return path.join(__dirname, "./", dir);
}

const assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === "production"
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

module.exports = {
  // mode: 'development',
  entry: {
    app: "./src/main.js"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name][].js",
    publicPath: website.publicPath,
    libraryTarget: "amd"
  },
  resolve: {
    extensions: [".js", ".vue", ".json"],
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      "@": resolve("src")
    }
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
  optimization: {
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
        include: [resolve("src")] // 只编译src文件夹下的js
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          //name: utils.assetsPath('img/[name].[hash:7].[ext]')
          name: assetsPath("img/[name].[hash:7].[ext]")
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("media/[name].[hash:7].[ext]")
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
          //MiniCssExtractPlugin.loader,
          "vue-style-loader",
          "css-loader",
          "less-loader"
        ]
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: assetsPath("fonts/[name].[hash:7].[ext]")
        }
      }
    ]
  },
  plugins: [
    // vue-loader
    new VueLoaderPlugin(),
    // 开启热替换
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      //filename: assetsPath(''),
      filename: assetsPath("css/[name].[hash:7].css")
      // chunkFilename: "app.css"
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, "./"),
    host: "localhost",
    port: 8000,
    open: true,
    hot: true,
    compress: true
  }
};
