
const webpack = require('webpack')
const HtmlwebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
module.exports = env => {
 
     console.log('env====',env)
    return {
        output:{
            filename:'bundle.js'
        },
        plugins:[
            new HtmlwebpackPlugin(),
            new webpack.ProgressPlugin()
        ]
    }
}