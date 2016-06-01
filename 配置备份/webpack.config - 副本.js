var path = require("path");
var webpack = require("webpack");
var ExtractTextPlugin = require("extract-text-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: {
        "index": ["./static/website/js/page/index.js"],
        "companyConsulting": ["./static/website/js/page/companyConsulting.js"],
        "system/about_us": ["./static/website/js/page/system/about_us.js"],
        "system/user_ag": ["./static/website/js/page/system/user_ag.js"],
        "position/findjobs": ["./static/website/js/page/position/findjobs.js"],
        "headhunterList": ["./static/website/js/page/headhunterList.js"]
    },
    // devServer: {
    //     contentBase: "./",
    //     devtool: "eval",
    //     progress: true,
    //     colors: true,
    //     hot: true
    // },
    output: {
        filename: '[name].wmin.js',
        path: './static/website/js/page/',
        // publicPath: 'http://localhost:8080/'
    },
    module: {
         loaders: [{
            test: /\.html$/,
            loader: "html"
        },{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract("style", "css!sass?sourceMap",'/static/website/') //loader是从右到左
        }, {
            test: /\.(png|jpg)$/,
            // loader: 'url?limit=1000&name=/[path][name].[ext]?[hash]'
            loader: 'url-loader?limit=8692&name=../../../../[path][name].[ext]'
        }]
    },
    devtool: "source-map",
    plugins: [
            new webpack.ProvidePlugin({
                $: "jquery",
                jQuery: "jquery",
                "window.jQuery": "jquery"
            }),
            // new ExtractTextPlugin('../../[path][name].css')
            new ExtractTextPlugin('../../css/page/[name].css')
        ]
    // resolve: {
    //     //查找module的话从这里开始查找
    //     root: 'E:/github/flux-example/src', //绝对路径
    //     //自动扩展文件后缀名，意味着我们require模块可以省略不写后缀名
    //     extensions: ['', '.js', '.json', '.scss'],
    //     //模块别名定义，方便后续直接引用别名，无须多写长长的地址
    //     alias: {
    //         AppStore : 'js/stores/AppStores.js',//后续直接 require('AppStore') 即可
    //         ActionType : 'js/actions/ActionType.js',
    //         AppAction : 'js/actions/AppAction.js'
    //     }
    // }

};