/*
 *  webpack dll 资源配置
 */
const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin');                                   // 拷贝不需要编译的第三方库

const dllLibName = "[name]_lib"
const isDev = (!process.env.NODE_ENV) || process.env.NODE_ENV.trim() !== "production"       // 是否开发环境
// const isDev = false                                                                      // 或者直接定义
const outputDir = isDev ? "build-dev" : "build"

webpackConfig = {
    entry: {
        lib: [ 'react','react-dom', 'redux', 'redux-thunk', 'react-redux',
            'react-addons-css-transition-group', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, outputDir),
        filename: 'lib/lib.js',
        library: dllLibName
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(__dirname, outputDir, 'manifest.json'),                            // manifest文件输出路径
            name: dllLibName
        }),
        new CopyWebpackPlugin([
            {from: "./lib", to: 'lib'},                                                           // 拷贝字体图标到目录下
            {from: "./src/img/favicon.ico"},
            {from: "./bat & sh/.clear-build.bat"}
        ])
    ]
}
if(isDev){
    // pass devtool: 'source-map',
    Object.assign(webpackConfig, {
        devtool: 'source-map'
    })
}
else{
    webpackConfig.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify("production")
                // NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            },
        })
    )
}

module.exports = webpackConfig