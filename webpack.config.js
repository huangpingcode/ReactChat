/*
 *  webpack 配置文件
**/
const exec = require('child_process').exec
const path = require('path');

const webpack = require("webpack");
const ExtractTextPlugin = require('extract-text-webpack-plugin');                         // 单独打包css
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackIncludeAssetsPlugin = require('html-webpack-include-assets-plugin')

const extractCSS = new ExtractTextPlugin("index.css")
const extractless = new ExtractTextPlugin("less.css")

const isDev = (!process.env.NODE_ENV) || process.env.NODE_ENV.trim() !== "production"     // 是否开发环境
// const isDev = false                                                                    // 或者直接定义
const outputDir = isDev ? "build-dev" : "build"

let webpackConfig = {
    entry: {
        index: './src/index',
        common: ["./src/common/util.js", "./src/common/constant.js","./src/common/eventEmitter.js", 
                 "./src/server/reactChatSdk.js"]
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: './js/[name].bundle.js',
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader'}],},
            { test: /\.css$/,  use: extractCSS.extract({
                fallback: "style-loader",
                use: ["css-loader?importLoaders=1",'postcss-loader']
            })},
            { test: /\.less$/, use: extractless.extract({
                fallback: "style-loader",
                use: ["css-loader","less-loader",'postcss-loader']
            })},
            { test: /\.(jpg|png)$/, use: ['url-loader?limit=8192&name=img/[hash:8].[ext]']},
            { test: /\.(eot|svg|ttf|woff)$/, use: ['file-loader?name=lib/font/[hash:8].[ext]']}
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, outputDir, 'manifest.json'))
        }),
        extractCSS,
        extractless,
        new webpack.optimize.CommonsChunkPlugin(["common"]),
        new HtmlWebpackIncludeAssetsPlugin({
            assets: ['lib/lib.js', 'lib/css/ionicons.css'],
            hash: true,
            append: false                                                                     // 先引入第三方库
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: isDev ? JSON.stringify("dev") : JSON.stringify("production")
                // NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        })
    ]
}

if(isDev){                                                                                // 配置开发模式
    // clearBuidlDev()
    Object.assign(webpackConfig, {
        devtool: 'source-map',
        devServer: {
            contentBase: outputDir,
            hot: true,
            inline: true,
            host: "127.0.0.1",
            historyApiFallback: true,
            disableHostCheck: true
        }
    })

    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            title: "jsChat",
            filename: "./index.html",
            template: "./src/index.html",
            hash: true,
            cache: true
        }),
        new webpack.HotModuleReplacementPlugin()
    )
}
else{                                                                                     // 配置生产模式
    // Object.assign(webpackConfig, {
    // })
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            title: "jsChat",
            filename: "./index.html",
            template: "./src/index.html",
            minify: {                                                                     // 压缩html代码
                removeComments: true,
                collapseBooleanAttributes: true,
                collapseWhitespace: true
            },
            hash: true
        }),
        new webpack.optimize.UglifyJsPlugin({                                               // 压缩js, css代码
            compress: {
                warnings: false
            }
        })
    )
}

function clearBuidlDev(){
    let fs = require("fs")
    let batPath = path.resolve(__dirname, outputDir)
    // existsSync
    if(fs.existsSync(batPath)){
        exec(batPath)
    }
}

// 选择nativeSDK路径
function setNativeSDK(){
    let sdkPath = "";
    switch(platform){
        case "android": sdkPath = ""; break;
        case "IOS": sdkPath = ""; break;
        case "window": sdkPath = ""; break;
        case "mac": sdkPath = ""; break;
        default:
            console.log("web");
            break;
    }
    return sdkPath;
}

module.exports = webpackConfig