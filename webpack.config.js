var webpack = require("webpack");
const path = require('path');

module.exports = {
	// context: path.resolve(__dirname, './src'),
    entry: {
   	  index: './src/index',
      lib: ['react'],
      common: ["./src/common/util.js", "./src/common/constant.js", "./src/common/jsChatSdk.js"]
	},
    output: {
      path: path.resolve(__dirname, './build/js'),
      filename: '[name].bundle.js',
    },
    module: {
      rules: [
    	   { test: /\.js$/, exclude: [/node_modules/], use: [{ loader: 'babel-loader'}],}
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
    	new webpack.optimize.CommonsChunkPlugin(["common","lib"])
	],
  devServer: {
    contentBase: "./build/",
    hot: true,
    inline: true,
    host: "0.0.0.0",
    historyApiFallback: true,
    disableHostCheck: true
  }
};
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