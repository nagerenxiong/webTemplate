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
        "headhunterList": ["./static/website/js/page/headhunterList.js"],
        "huntForTalent": ["./static/website/js/page/huntForTalent.js"],
        "industrySpecial": ["./static/website/js/page/industrySpecial.js"],
    },
    output: {
        filename: '[name].wmin.js',
        path: './static/website/js/page/'
    },
    module: {
        loaders: [{
            test: /\.html$/,
            loader: "html"
        }, {
            test: /\.(scss|css)$/,
            loader: ExtractTextPlugin.extract("style", "css!sass?sourceMap", '/static/website/') //loader是从右到左
        }, {
            test: /\.(png|jpg)$/,
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
        new ExtractTextPlugin('../../css/page/[name].css')
    ]

};